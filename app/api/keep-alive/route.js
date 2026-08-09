// ─────────────────────────────────────────────────────────────
//  KEEP-ALIVE — stops the Supabase free tier pausing your database.
//
//  Supabase pauses free projects after 7 days with no activity.
//  A paused database means the lead form and chatbot cannot save,
//  so enquiries would be lost until someone noticed and restored it.
//
//  vercel.json runs this once a day, which resets the 7-day timer.
//  It performs the lightest possible read — one row, no data used.
//
//  Does nothing (and costs nothing) if Supabase isn't configured.
// ─────────────────────────────────────────────────────────────
import { usingDatabase } from '@/lib/leads';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  // Vercel signs its cron requests. If CRON_SECRET is set, require it,
  // so the endpoint can't be hammered by anyone who finds the URL.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get('authorization') || '';
    if (auth !== `Bearer ${secret}`) {
      return Response.json({ ok: false, error: 'Not authorised.' }, { status: 401 });
    }
  }

  if (!usingDatabase) {
    return Response.json({ ok: true, skipped: 'Supabase not configured.' });
  }

  try {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/leads?select=id&limit=1`,
      {
        cache: 'no-store',
        headers: {
          apikey: process.env.SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    if (!res.ok) {
      const body = await res.text();
      // Visiting this URL in a browser is the quickest way to tell
      // whether Supabase is wired up correctly, so report plainly.
      return Response.json(
        {
          ok: false,
          status: res.status,
          reason:
            /relation .* does not exist|PGRST205|Could not find the table/i.test(body)
              ? 'The `leads` table does not exist. Run the SQL from SETUP-LEADS.md in the Supabase SQL Editor.'
              : res.status === 401 || res.status === 403
                ? 'Supabase rejected the key. Check SUPABASE_SERVICE_KEY is the SECRET key (sb_secret_... or service_role), not the publishable/anon one.'
                : 'Supabase returned an error. See detail below.',
          detail: body.slice(0, 400),
        },
        { status: 500 }
      );
    }
    return Response.json({ ok: true, database: 'connected', pingedAt: new Date().toISOString() });
  } catch (err) {
    console.error('Keep-alive ping failed:', err);
    return Response.json(
      {
        ok: false,
        reason: 'Could not reach Supabase at all. Check SUPABASE_URL is correct and has no trailing slash.',
        detail: String(err.message || err).slice(0, 300),
      },
      { status: 500 }
    );
  }
}
