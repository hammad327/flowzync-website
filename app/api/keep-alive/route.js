// ─────────────────────────────────────────────────────────────
//  KEEP-ALIVE + DIAGNOSTICS
//
//  Two jobs:
//
//  1. Stops the Supabase free tier pausing your database. Supabase
//     pauses free projects after 7 days of inactivity, and a paused
//     database cannot accept leads. vercel.json calls this daily.
//
//  2. Tells you exactly what is wrong when leads are not saving.
//
//  It tests a real WRITE, not just a read. That matters: with Row
//  Level Security enabled and no policies, a read using the wrong
//  key returns an empty list and HTTP 200 — which looks like
//  success while every insert is being rejected. Checking the read
//  alone is how a broken setup reports itself as healthy.
// ─────────────────────────────────────────────────────────────
import { usingDatabase } from '@/lib/leads';

export const dynamic = 'force-dynamic';

const URL_ = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '');
const KEY_ = (process.env.SUPABASE_SERVICE_KEY || '').trim();

/**
 * Works out which Supabase key is in use. The publishable/anon key is
 * the single most common cause of "connected but nothing saves".
 */
function describeKey(key) {
  if (!key) return { type: 'missing', ok: false };
  if (key.startsWith('sb_secret_')) return { type: 'secret (correct)', ok: true };
  if (key.startsWith('sb_publishable_')) return { type: 'publishable (WRONG)', ok: false };
  // Legacy keys are JWTs with the role in the payload.
  const parts = key.split('.');
  if (parts.length === 3) {
    try {
      const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
      if (payload.role === 'service_role') return { type: 'service_role (correct)', ok: true };
      if (payload.role === 'anon') return { type: 'anon (WRONG)', ok: false };
      return { type: `jwt role "${payload.role}"`, ok: false };
    } catch { /* fall through */ }
  }
  return { type: 'unrecognised', ok: false };
}

const headers = () => ({
  apikey: KEY_,
  Authorization: `Bearer ${KEY_}`,
  'Content-Type': 'application/json',
});

export async function GET(req) {
  // Vercel signs its cron requests. If CRON_SECRET is set, require it.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get('authorization') || '';
    const isCron = auth === `Bearer ${secret}`;
    // Still allow a manual browser check — it exposes no data.
    if (!isCron && new URL(req.url).searchParams.get('check') !== '1') {
      return Response.json(
        { ok: false, reason: 'Add ?check=1 to run this manually.' },
        { status: 401 }
      );
    }
  }

  const email = {
    configured: Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD),
    sendsTo: process.env.CONTACT_TO || process.env.GMAIL_USER || '(not set)',
  };

  if (!usingDatabase) {
    return Response.json({
      ok: false,
      database: 'not configured',
      reason: 'SUPABASE_URL and/or SUPABASE_SERVICE_KEY are missing from your environment variables. Leads are being held in memory only.',
      email,
    }, { status: 500 });
  }

  const key = describeKey(KEY_);

  try {
    // ── 1. READ ──────────────────────────────────────────────
    const read = await fetch(`${URL_}/rest/v1/leads?select=id&limit=1`, {
      cache: 'no-store',
      headers: headers(),
    });
    if (!read.ok) {
      const body = await read.text();
      return Response.json({
        ok: false,
        step: 'read',
        status: read.status,
        keyType: key.type,
        reason:
          /relation .* does not exist|PGRST205|Could not find the table/i.test(body)
            ? 'The `leads` table does not exist. Run the SQL from SETUP-LEADS.md in the Supabase SQL Editor.'
            : read.status === 401 || read.status === 403
              ? 'Supabase rejected the key. SUPABASE_SERVICE_KEY must be the SECRET key (sb_secret_... or service_role), not the publishable/anon one.'
              : 'Supabase returned an error on read. See detail.',
        detail: body.slice(0, 300),
        email,
      }, { status: 500 });
    }

    // ── 2. WRITE ─────────────────────────────────────────────
    // A read can succeed under RLS while writes fail, so prove the
    // insert path works by writing a probe row and removing it.
    const probeName = `__healthcheck_${Date.now()}`;
    const write = await fetch(`${URL_}/rest/v1/leads`, {
      method: 'POST',
      cache: 'no-store',
      headers: { ...headers(), Prefer: 'return=representation' },
      body: JSON.stringify({ name: probeName, source: 'form', status: 'New' }),
    });

    if (!write.ok) {
      const body = await write.text();
      const rls = /row-level security|RLS|permission denied|42501/i.test(body);
      return Response.json({
        ok: false,
        step: 'write',
        status: write.status,
        keyType: key.type,
        reason: rls || !key.ok
          ? 'Reads work but WRITES are blocked. This is almost always the wrong key: SUPABASE_SERVICE_KEY must be the SECRET key (sb_secret_... or service_role). The publishable/anon key can pass a read under Row Level Security while every insert is rejected.'
          : 'Supabase rejected the insert. See detail.',
        detail: body.slice(0, 300),
        email,
      }, { status: 500 });
    }

    // Clean up the probe row so it never shows in your dashboard.
    const [row] = await write.json();
    if (row?.id) {
      await fetch(`${URL_}/rest/v1/leads?id=eq.${encodeURIComponent(row.id)}`, {
        method: 'DELETE',
        cache: 'no-store',
        headers: headers(),
      }).catch(() => {});
    }

    return Response.json({
      ok: true,
      database: 'connected',
      canRead: true,
      canWrite: true,
      keyType: key.type,
      email,
      pingedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Keep-alive failed:', err);
    return Response.json({
      ok: false,
      step: 'connect',
      keyType: key.type,
      reason: 'Could not reach Supabase at all. Check SUPABASE_URL is correct, has no trailing slash and no quotes around it.',
      detail: String(err.message || err).slice(0, 300),
      email,
    }, { status: 500 });
  }
}
