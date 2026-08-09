// ═══════════════════════════════════════════════════════════════
//  LEAD STORE
//
//  Every lead — whether it came from the contact form or from a
//  chat with Zync — lands in the same table, so /admin shows one
//  list rather than two.
//
//  TWO MODES:
//
//  1. SUPABASE (use this in production).
//     Set SUPABASE_URL and SUPABASE_SERVICE_KEY in your env vars.
//     SUPABASE_SERVICE_KEY takes either the current secret key
//     (sb_secret_...) or the legacy service_role key — both work.
//     It must be the SECRET key, not the publishable/anon one, and it
//     must never reach the browser. Run the SQL in SETUP-LEADS.md
//     once to create the table.
//
//  2. IN-MEMORY (automatic fallback, for local development).
//     Nothing to configure — but leads vanish when the server
//     restarts, and on Vercel each serverless instance has its own
//     memory, so this is NOT safe for a live site. The dashboard
//     shows a warning banner whenever this mode is active.
// ═══════════════════════════════════════════════════════════════

// Trim whitespace and any trailing slash — both are extremely easy to
// paste in by accident, and both break every request silently.
const URL_ = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '');
const KEY_ = (process.env.SUPABASE_SERVICE_KEY || '').trim();

export const usingDatabase = Boolean(URL_ && KEY_);

export const LEAD_STATUSES = ['New', 'Contacted', 'Converted', 'Not interested'];

// ── in-memory fallback ────────────────────────────────────────
const memory = globalThis.__flowzyncLeads || (globalThis.__flowzyncLeads = []);

// ── helpers ───────────────────────────────────────────────────
const rest = (path, init = {}) =>
  fetch(`${URL_}/rest/v1/${path}`, {
    ...init,
    cache: 'no-store',
    headers: {
      apikey: KEY_,
      Authorization: `Bearer ${KEY_}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });

const clean = (v, max = 400) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

/**
 * Normalises whatever the form or the chatbot collected into one
 * consistent lead shape. Only name is genuinely required — a chat
 * lead often arrives with a phone but no email, or the reverse.
 */
export function normaliseLead(input = {}) {
  return {
    name: clean(input.name, 120),
    email: clean(input.email, 160).toLowerCase(),
    phone: clean(input.phone, 40),
    service: clean(input.service, 120),
    budget: clean(input.budget, 80),
    timeline: clean(input.timeline, 80),
    message: clean(input.message, 4000),
    source: input.source === 'chatbot' ? 'chatbot' : 'form',
    source_page: clean(input.sourcePage || input.source_page, 300),
    transcript: clean(input.transcript, 8000),
    status: LEAD_STATUSES.includes(input.status) ? input.status : 'New',
    created_at: new Date().toISOString(),
  };
}

export async function createLead(input) {
  const lead = normaliseLead(input);
  if (!lead.name && !lead.email && !lead.phone) {
    throw new Error('A lead needs at least a name, an email or a phone number.');
  }

  // ── A lead must never be lost ────────────────────────────────
  // If the database is misconfigured or briefly unreachable, we keep
  // the lead in memory and let the email notification go out, rather
  // than showing the visitor an error and dropping their enquiry.
  // The dashboard flags any lead that landed this way.
  if (usingDatabase) {
    try {
      return await insertToDatabase(lead);
    } catch (err) {
      console.error(
        '⚠️  Supabase insert failed — falling back to memory so the lead is not lost.\n' +
        '    Fix this: visit /api/keep-alive for the exact cause.\n',
        err
      );
      const row = { id: `mem_${Date.now()}_${memory.length}`, ...lead, _fallback: true };
      memory.unshift(row);
      const wrapped = new Error(err.message);
      wrapped.lead = row;
      wrapped.degraded = true;
      wrapped.supabaseStatus = err.supabaseStatus;
      wrapped.supabaseBody = err.supabaseBody;
      throw wrapped;
    }
  }

  const row = { id: `mem_${Date.now()}_${memory.length}`, ...lead };
  memory.unshift(row);
  return row;
}

async function insertToDatabase(lead) {
  {
    const res = await rest('leads', {
      method: 'POST',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      const body = await res.text();
      // Surface Supabase's own message. It is far more useful than a
      // generic failure, and it never contains the key itself.
      const err = new Error(`Supabase rejected the insert (HTTP ${res.status}): ${body}`);
      err.supabaseStatus = res.status;
      err.supabaseBody = body;
      throw err;
    }
    const [row] = await res.json();
    return row;
  }
}

export async function listLeads() {
  if (usingDatabase) {
    let rows = [];
    try {
      const res = await rest('leads?select=*&order=created_at.desc&limit=1000');
      if (!res.ok) throw new Error(await res.text());
      rows = await res.json();
    } catch (err) {
      console.error('Could not read leads from Supabase:', err);
    }
    // Include anything that fell back to memory, so a database problem
    // never hides leads that did arrive.
    return [...memory, ...rows].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }
  return [...memory];
}

// True when at least one lead is sitting in memory instead of the
// database — the dashboard uses this to warn you.
export const hasFallbackLeads = () => memory.some((l) => l._fallback);

export async function updateLeadStatus(id, status) {
  if (!LEAD_STATUSES.includes(status)) throw new Error('Unknown status.');

  // Memory-held leads (id starts mem_) are updated in memory even when
  // a database is configured.
  if (usingDatabase && !String(id).startsWith('mem_')) {
    const res = await rest(`leads?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { Prefer: 'return=representation' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error(`Could not update lead: ${await res.text()}`);
    const [row] = await res.json();
    return row;
  }

  const row = memory.find((l) => l.id === id);
  if (!row) throw new Error('Lead not found.');
  row.status = status;
  return row;
}
