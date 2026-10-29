import { createHmac } from 'node:crypto';
import { db } from './db';
export function signOptOut(channel, address) {
  if (!process.env.UNSUBSCRIBE_SECRET) throw new Error('Configure UNSUBSCRIBE_SECRET before sending.');
  const value = Buffer.from(JSON.stringify({
    channel,
    address
  })).toString('base64url');
  return value + '.' + createHmac('sha256', process.env.UNSUBSCRIBE_SECRET).update(value).digest('hex');
}
export function readOptOut(token) {
  const [p, s] = String(token || '').split('.');
  if (!p || !s || !process.env.UNSUBSCRIBE_SECRET) return null;
  const expected = createHmac('sha256', process.env.UNSUBSCRIBE_SECRET).update(p).digest('hex');
  if (s.length !== expected.length || !cryptoTiming(s, expected)) return null;
  try {
    const j = JSON.parse(Buffer.from(p, 'base64url'));
    return ['email', 'whatsapp'].includes(j.channel) && typeof j.address === 'string' ? j : null;
  } catch {
    return null;
  }
}
import { timingSafeEqual } from 'node:crypto';
const cryptoTiming = (a, b) => timingSafeEqual(Buffer.from(a), Buffer.from(b));
export function recipientsFor(text, channel) {
  const raw = String(text || '').split(/[\n,;]+/).map(x => x.trim()).filter(Boolean);
  if (raw.length > 500) throw new Error('Import up to 500 recipients per campaign.');
  const valid = raw.map(x => channel === 'email' ? x.toLowerCase() : x.replace(/[\s()-]/g, ''));
  const bad = valid.filter(x => channel === 'email' ? !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(x) : !/^\+[1-9]\d{7,14}$/.test(x));
  if (bad.length) throw new Error(`${bad.length} invalid recipients. Use plain emails or international phone numbers such as +44… .`);
  return [...new Set(valid)];
}
export async function createCampaign(p) {
  if (!['email', 'whatsapp'].includes(p.channel)) throw new Error('Choose email or WhatsApp.');
  if (!p.name?.trim() || !p.body?.trim() || p.body.length > 12000 || !p.consentNote?.trim()) throw new Error('Add a campaign name, message and recipient permission/source record.');
  if (p.channel === 'email' && (!p.subject?.trim() || /[\r\n]/.test(p.subject))) throw new Error('Add a single-line email subject.');
  const addresses = recipientsFor(p.recipients, p.channel);
  if (!addresses.length) throw new Error('Add recipients first.');
  const [campaign] = await db('outreach_campaigns', {
    method: 'POST',
    body: JSON.stringify({
      name: p.name.slice(0, 160),
      channel: p.channel,
      subject: (p.subject || '').slice(0, 200),
      body: p.body,
      consent_note: p.consentNote.slice(0, 2000)
    })
  });
  await db('outreach_recipients', {
    method: 'POST',
    body: JSON.stringify(addresses.map(address => ({
      campaign_id: campaign.id,
      address
    })))
  });
  return {
    campaign,
    recipients: addresses.length
  };
}
export async function providerReady(channel) {
  if (channel === 'email' && (!process.env.RESEND_API_KEY || !process.env.OUTREACH_FROM || !process.env.OUTREACH_POSTAL_ADDRESS || !process.env.UNSUBSCRIBE_SECRET)) throw new Error('Connect Resend, a verified sender, postal address and unsubscribe secret before sending.');
  if (channel === 'whatsapp' && (!process.env.WHATSAPP_ACCESS_TOKEN || !process.env.WHATSAPP_PHONE_NUMBER_ID || !process.env.WHATSAPP_TEMPLATE_NAME || !process.env.WHATSAPP_API_VERSION || !process.env.WHATSAPP_APP_SECRET || !process.env.WHATSAPP_VERIFY_TOKEN)) throw new Error('Connect official WhatsApp Cloud API, approved template, webhook verification and phone ID before sending.');
}
export async function processBatch() {
  const rows = await db('rpc/claim_outreach', {
    method: 'POST',
    body: JSON.stringify({
      batch_size: 5
    })
  });
  const results = [];
  await Promise.all(rows.map(async row => {
    let state = 'failed',
      providerId = null,
      error = null;
    try {
      const [campaign] = await db(`outreach_campaigns?id=eq.${row.campaign_id}&select=*`);
      if (campaign.status !== 'approved') {
        state = 'queued';
        return;
      }
      await providerReady(campaign.channel);
      const suppressed = await db(`outreach_suppressions?channel=eq.${campaign.channel}&address=eq.${encodeURIComponent(row.address)}&select=address`);
      if (suppressed.length) {
        state = 'suppressed';
        return;
      }
      let response;
      if (campaign.channel === 'email') {
        const optOut = `https://flowzync.com/api/unsubscribe?token=${encodeURIComponent(signOptOut('email', row.address))}`;
        response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
            'Idempotency-Key': `fz-recipient-${row.id}`
          },
          body: JSON.stringify({
            from: process.env.OUTREACH_FROM,
            to: [row.address],
            subject: campaign.subject,
            text: `${campaign.body}\n\nFlowzync\n${process.env.OUTREACH_POSTAL_ADDRESS}\nUnsubscribe: ${optOut}`,
            headers: {
              'List-Unsubscribe': `<${optOut}>`
            }
          }),
          signal: AbortSignal.timeout(8000)
        });
      } else {
        response = await fetch(`https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: row.address.slice(1),
            type: 'template',
            template: {
              name: process.env.WHATSAPP_TEMPLATE_NAME,
              language: {
                code: process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en'
              },
              components: [{
                type: 'body',
                parameters: [{
                  type: 'text',
                  text: campaign.body
                }]
              }]
            }
          }),
          signal: AbortSignal.timeout(8000)
        });
      }
      const payload = await response.json();
      if (!response.ok) {
        state = response.status >= 500 ? 'uncertain' : 'failed';
        error = `Provider response ${response.status}; check verified sender/template and provider logs.`;
      } else {
        providerId = payload.id || payload.messages?.[0]?.id;
        state = 'accepted';
      }
    } catch (e) {
      state = 'uncertain';
      error = 'Send outcome could not be confirmed. Check provider logs before retrying.';
    } finally {
      await db(`outreach_recipients?id=eq.${row.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: state,
          provider_id: providerId,
          error,
          updated_at: new Date().toISOString()
        })
      });
      results.push({
        id: row.id,
        status: state
      });
    }
  }));
  return results;
}
