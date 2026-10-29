import { createSign } from 'node:crypto';
let cached;
export async function googleToken() {
  if (cached && cached.expires > Date.now() + 60000) return cached.token;
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('Google reporting is not connected. Configure GOOGLE_SERVICE_ACCOUNT_JSON.');
  let key; try { key = JSON.parse(raw); } catch { throw new Error('Google reporting credentials are not valid JSON. Check server configuration.'); }
  const n = Math.floor(Date.now() / 1000);
  const enc = v => Buffer.from(JSON.stringify(v)).toString('base64url');
  const unsigned = enc({
    alg: 'RS256',
    typ: 'JWT'
  }) + '.' + enc({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: n,
    exp: n + 3600
  });
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const assertion = unsigned + '.' + sign.sign(key.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15000)
  });
  const j = await r.json();
  if (!r.ok) throw new Error('Google reporting authentication failed. Check the service account and enabled APIs.');
  cached = {
    token: j.access_token,
    expires: Date.now() + j.expires_in * 1000
  };
  return cached.token;
}
async function report(url, body) {
  const token = await googleToken();
  const r = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    cache: 'no-store',
    signal: AbortSignal.timeout(20000)
  });
  if (!r.ok) throw new Error(`Google report unavailable (${r.status}). Check property access and API quota.`);
  return r.json();
}
export async function searchReport() {
  const site = process.env.GSC_PROPERTY || 'https://flowzync.com/';
  const end = new Date(Date.now() - 3 * 86400000).toISOString().slice(0, 10),
    start = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  const r = await report(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
    startDate: start,
    endDate: end,
    dimensions: ['query'],
    rowLimit: 100,
    dataState: 'final'
  });
  return {
    source: 'Google Search Console API',
    property: site,
    start,
    end,
    rows: r.rows || [],
    note: 'Average position is query-dependent; this top-query sample is not a fixed universal rank or complete traffic total.'
  };
}
export async function audienceReport() {
  const property = process.env.GA4_PROPERTY_ID;
  if (!/^\d+$/.test(property || '')) throw new Error('Configure GA4_PROPERTY_ID to load audience analytics.');
  const r = await report(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
    dateRanges: [{
      startDate: '28daysAgo',
      endDate: 'yesterday'
    }],
    dimensions: [{
      name: 'date'
    }],
    metrics: [{
      name: 'activeUsers'
    }, {
      name: 'sessions'
    }, {
      name: 'screenPageViews'
    }]
  });
  return {
    source: 'GA4 Data API',
    property,
    rows: r.rows || [],
    period: 'Last 28 complete days',
    totals: {
      sessions: (r.rows || []).reduce((n, x) => n + Number(x.metricValues[1].value), 0),
      views: (r.rows || []).reduce((n, x) => n + Number(x.metricValues[2].value), 0)
    },
    note: 'Daily active-user values are not summed into a unique audience total. Tracking and consent configuration affect coverage.'
  };
}
export async function inspectUrl(url) {
  if (!url.startsWith('https://flowzync.com/')) throw new Error('Inspect a Flowzync URL.');
  return report('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    inspectionUrl: url,
    siteUrl: process.env.GSC_PROPERTY || 'https://flowzync.com/',
    languageCode: 'en-US'
  });
}
