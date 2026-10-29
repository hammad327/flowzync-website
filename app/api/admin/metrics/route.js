export const maxDuration = 60;
import fs from 'node:fs';
import path from 'node:path';
import { guard, privateHeaders } from '@/lib/admin/auth';
import { searchReport, audienceReport, inspectUrl } from '@/lib/admin/google';
export const dynamic = 'force-dynamic';
export async function GET(req) {
  const d = guard(req);
  if (d) return d;
  const u = new URL(req.url);
  if (u.searchParams.get('inspect')) {
    try {
      return Response.json(await inspectUrl(u.searchParams.get('inspect')), {
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
  const wrap = async fn => {
    try {
      return {
        connected: true,
        data: await fn()
      };
    } catch (e) {
      return {
        connected: false,
        error: e.message
      };
    }
  };
  const [search, audience] = await Promise.all([wrap(searchReport), wrap(audienceReport)]);
  let audit = null;
  try {
    const j = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'docs/seo-audit-results-2026-10-29.json'), 'utf8'));
    audit = {
      source: 'Saved technical audit · 29 Oct 2026',
      liveChecked: j.live_checked,
      details: `${j.pages} public pages audited on 29 Oct 2026; ${j.live_checked ? 'build and live HTTP' : 'build'} checks. This is not a search-engine ranking score.`,
      report: '/admin'
    };
  } catch {}
  return Response.json({
    search,
    audience,
    audit,
    indexing: {
      source: 'Manual account snapshots · 27–28 Oct 2026',
      googleIndexed: 29,
      bingIndexed: 68,
      dated: true,
      note: 'Historical account totals, not live counts. Use URL Inspection below for a current Google snapshot when API access is configured.'
    },
    integrations: {
      cms: Boolean(process.env.CONTENT_GITHUB_TOKEN),
      google: Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      ga4: Boolean(process.env.GA4_PROPERTY_ID),
      database: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY),
      email: Boolean(process.env.RESEND_API_KEY && process.env.OUTREACH_FROM && process.env.OUTREACH_POSTAL_ADDRESS && process.env.UNSUBSCRIBE_SECRET),
      whatsapp: Boolean(process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID && process.env.WHATSAPP_TEMPLATE_NAME && process.env.WHATSAPP_API_VERSION && process.env.WHATSAPP_APP_SECRET && process.env.WHATSAPP_VERIFY_TOKEN)
    },
    updatedAt: new Date().toISOString()
  }, {
    headers: privateHeaders
  });
}
