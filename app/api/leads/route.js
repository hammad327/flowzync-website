// POST /api/leads — public: the contact form and Zync both post here.
import { createLead } from '@/lib/leads';
import { notifyNewLead } from '@/lib/notify';

export async function POST(req) {
  try {
    const body = await req.json();
    const lead = await createLead(body);
    // Email notification is best-effort: a mail failure must never
    // lose the lead, because the record is already stored.
    notifyNewLead(lead).catch((e) => console.error('Lead email failed:', e));
    return Response.json({ ok: true, id: lead.id });
  } catch (err) {
    // The database was unreachable but the lead was kept in memory and
    // emailed. From the visitor's point of view this succeeded — showing
    // them an error would only make them give up or submit twice.
    if (err.degraded && err.lead) {
      notifyNewLead(err.lead).catch((e) => console.error('Lead email failed:', e));
      return Response.json({ ok: true, id: err.lead.id, degraded: true });
    }

    // Full detail goes to the server log (Vercel → Logs), never to the
    // visitor. But a short diagnostic hint is safe and saves a lot of
    // guesswork while you are setting the site up.
    console.error('Lead capture failed:', err);

    let hint;
    const body = err.supabaseBody || '';
    if (/relation .* does not exist|PGRST205|Could not find the table/i.test(body)) {
      hint = 'table-missing';        // the SQL in SETUP-LEADS.md has not been run
    } else if (err.supabaseStatus === 401 || err.supabaseStatus === 403 || /JWT|apikey|Invalid API key/i.test(body)) {
      hint = 'bad-key';             // wrong key, or the publishable one instead of the secret
    } else if (/column .* does not exist|PGRST204/i.test(body)) {
      hint = 'schema-mismatch';     // table exists but the columns do not match
    } else if (err.supabaseStatus) {
      hint = 'database-error';
    } else if (/fetch failed|ENOTFOUND|ECONNREFUSED|Failed to fetch/i.test(String(err.message))) {
      hint = 'cannot-reach-database'; // SUPABASE_URL wrong, or trailing slash
    } else if (/at least a name/i.test(String(err.message))) {
      hint = 'invalid-input';         // no name, email or phone supplied
    } else {
      hint = 'unknown';
    }

    return Response.json(
      {
        ok: false,
        error: 'We could not save that. Please try again, or email us directly.',
        hint,
      },
      { status: 400 }
    );
  }
}
