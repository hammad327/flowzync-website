import { createHmac, timingSafeEqual } from 'node:crypto';
import { db } from '@/lib/admin/db';
export async function GET(req) {
  const q = new URL(req.url).searchParams;
  if (process.env.WHATSAPP_VERIFY_TOKEN && q.get('hub.mode') === 'subscribe' && q.get('hub.verify_token') === process.env.WHATSAPP_VERIFY_TOKEN) return new Response(q.get('hub.challenge'));
  return new Response('Forbidden', {
    status: 403
  });
}
export async function POST(req) {
  const raw = await req.text();
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret) return new Response('Not configured', {
    status: 503
  });
  const s = req.headers.get('x-hub-signature-256') || '';
  const expected = 'sha256=' + createHmac('sha256', secret).update(raw).digest('hex');
  if (s.length !== expected.length || !timingSafeEqual(Buffer.from(s), Buffer.from(expected))) return new Response('Forbidden', {
    status: 403
  });
  try {
    const payload = JSON.parse(raw);
    for (const e of payload.entry || []) for (const c of e.changes || []) {
      for (const x of c.value?.statuses || []) {
        if (!['sent', 'delivered', 'read', 'failed'].includes(x.status)) continue;
        const allowed = x.status === 'read' ? 'accepted,delivered,read' : x.status === 'delivered' ? 'accepted,delivered' : 'accepted';
        await db(`outreach_recipients?provider_id=eq.${encodeURIComponent(x.id)}&status=in.(${allowed})`, {
          method: 'PATCH',
          body: JSON.stringify({
            status: x.status === 'sent' ? 'accepted' : x.status,
            updated_at: new Date().toISOString()
          })
        });
      }
      for (const m of c.value?.messages || []) {
        if (/^(stop|unsubscribe|cancel)$/i.test(m.text?.body?.trim() || '')) await db('outreach_suppressions', {
          method: 'POST',
          headers: {
            Prefer: 'resolution=ignore-duplicates'
          },
          body: JSON.stringify({
            channel: 'whatsapp',
            address: '+' + m.from
          })
        });
      }
    }
    return Response.json({
      ok: true
    });
  } catch {
    return new Response('Processing unavailable', {
      status: 503
    });
  }
}
