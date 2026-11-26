// Submits every page in the sitemap to IndexNow, so Bing (and
// other participating engines) can discover changes. Submission
// does not guarantee crawling, indexing, or AI citations.
//
// Runs daily from vercel.json. Vercel's cron sends
// `Authorization: Bearer $CRON_SECRET` automatically once CRON_SECRET is
// set in the project's environment variables. To trigger it by hand:
//   curl -H "Authorization: Bearer <CRON_SECRET>" https://flowzync.com/api/indexnow
//
// It fails closed. It used to run for anyone when CRON_SECRET was unset,
// and `?check=1` skipped the check even when it was set, so any visitor
// could fire repeated submissions under this site's IndexNow key.
import { submitToIndexNow } from '@/lib/indexnow';
import { site } from '@/lib/site';
import sitemap from '@/app/sitemap';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return Response.json({ ok: false, error: 'CRON_SECRET is not configured.' }, { status: 503 });
  }
  if ((req.headers.get('authorization') || '') !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: 'Not authorised.' }, { status: 401 });
  }

  try {
    const urls = sitemap().map((e) => e.url).filter((u) => u.startsWith(site.url));
    const result = await submitToIndexNow(urls);
    return Response.json({ ...result, at: new Date().toISOString() }, {
      status: result.ok ? 200 : 500,
    });
  } catch (err) {
    console.error('IndexNow submission failed:', err);
    return Response.json({ ok: false, error: String(err.message || err) }, { status: 500 });
  }
}
