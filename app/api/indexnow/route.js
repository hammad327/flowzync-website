// Submits every page in the sitemap to IndexNow, so Bing (and
// therefore ChatGPT search and Copilot) picks up changes in hours
// rather than waiting for a crawl.
//
// Runs daily from vercel.json. You can also trigger it by hand after
// publishing something important:
//   https://www.flowzync.com/api/indexnow?check=1
import { submitToIndexNow } from '@/lib/indexnow';
import { site } from '@/lib/site';
import sitemap from '@/app/sitemap';

export const dynamic = 'force-dynamic';

export async function GET(req) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.get('authorization') || '';
    if (auth !== `Bearer ${secret}` && new URL(req.url).searchParams.get('check') !== '1') {
      return Response.json({ ok: false, error: 'Not authorised.' }, { status: 401 });
    }
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
