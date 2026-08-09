// ─────────────────────────────────────────────────────────────
//  ADMIN API — reads and updates leads for the /admin dashboard.
//
//  Auth is a single shared password held in ADMIN_PASSWORD and
//  sent as a bearer token. That is deliberately simple: this
//  dashboard is for one small team, not a multi-user product.
//  If more than a couple of people need access, swap this for a
//  real auth provider (see SETUP-LEADS.md).
//
//  If ADMIN_PASSWORD is not set, the API refuses every request —
//  it never falls open.
// ─────────────────────────────────────────────────────────────
import { listLeads, updateLeadStatus, usingDatabase, hasFallbackLeads } from '@/lib/leads';

function authorised(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const header = req.headers.get('authorization') || '';
  const token = header.replace(/^Bearer\s+/i, '');
  // constant-length-ish comparison; fine for a shared secret
  return token.length === expected.length && token === expected;
}

const denied = () =>
  Response.json({ ok: false, error: 'Not authorised.' }, { status: 401 });

export async function GET(req) {
  if (!process.env.ADMIN_PASSWORD) {
    return Response.json(
      { ok: false, error: 'ADMIN_PASSWORD is not set on the server, so the dashboard is locked. Add it in your Vercel environment variables.' },
      { status: 503 }
    );
  }
  if (!authorised(req)) return denied();
  try {
    const leads = await listLeads();
    return Response.json({ ok: true, leads, usingDatabase, fallback: hasFallbackLeads() });
  } catch (err) {
    console.error('Admin list failed:', err);
    return Response.json({ ok: false, error: 'Could not load leads.' }, { status: 500 });
  }
}

export async function PATCH(req) {
  if (!authorised(req)) return denied();
  try {
    const { id, status } = await req.json();
    const lead = await updateLeadStatus(id, status);
    return Response.json({ ok: true, lead });
  } catch (err) {
    console.error('Admin update failed:', err);
    return Response.json({ ok: false, error: 'Could not update that lead.' }, { status: 400 });
  }
}
