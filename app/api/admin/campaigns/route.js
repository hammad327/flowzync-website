import { guard, privateHeaders } from '@/lib/admin/auth';
import { db } from '@/lib/admin/db';
import { createCampaign, providerReady } from '@/lib/admin/outreach';
export async function GET(req) {
  const d = guard(req);
  if (d) return d;
  try {
    const id = new URL(req.url).searchParams.get('id');
    if (id && !/^[a-f0-9-]{36}$/.test(id)) throw new Error('Invalid campaign.');
    return Response.json(id ? {
      recipients: await db(`outreach_recipients?campaign_id=eq.${id}&select=*&order=updated_at.desc&limit=500`)
    } : {
      campaigns: await db('outreach_campaigns?select=*&order=created_at.desc&limit=100')
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 503,
      headers: privateHeaders
    });
  }
}
export async function POST(req) {
  const d = guard(req);
  if (d) return d;
  try {
    return Response.json({
      ok: true,
      ...(await createCampaign(await req.json()))
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 400
    });
  }
}
export async function PATCH(req) {
  const d = guard(req);
  if (d) return d;
  try {
    const {
      id,
      status,
      confirm
    } = await req.json();
    if (!/^[a-f0-9-]{36}$/.test(id) || !['approved', 'paused'].includes(status)) throw new Error('Invalid campaign update.');
    const [c] = await db(`outreach_campaigns?id=eq.${id}&select=*`);
    if (!c) throw new Error('Campaign not found.');
    if (status === 'approved') {
      if (confirm !== true) throw new Error('Confirm the recipient list and content before sending.');
      await providerReady(c.channel);
    }
    return Response.json({
      campaigns: await db(`outreach_campaigns?id=eq.${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status
        })
      })
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 400
    });
  }
}
