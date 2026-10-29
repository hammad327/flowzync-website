// ─────────────────────────────────────────────────────────────
//  INDEXNOW — tells Bing about new and changed pages instantly.
//
//  IndexNow notifies participating engines that URLs were added,
//  changed or removed. Acceptance is not a promise of crawling,
//  indexing, rankings, or citations in an AI/search product.
//
//  Setup is already done: the key below is published at
//  /<key>.txt, which is how Bing verifies you own the domain.
//  Override it with an INDEXNOW_KEY environment variable if you
//  ever want to rotate it — then rename the file in /public to match.
// ─────────────────────────────────────────────────────────────
import { site } from '@/lib/site';

export const INDEXNOW_KEY = (process.env.INDEXNOW_KEY || '5948b2afb90f64299b0257420201064a').trim();

const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const host = site.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

/**
 * Submits up to 10,000 URLs in one request. Bing shares submissions
 * with the other participating engines (Yandex, Seznam, Naver), so
 * one call covers all of them.
 */
export async function submitToIndexNow(urls) {
  if (!urls?.length) return { ok: false, reason: 'No URLs given.' };

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${site.url}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000),
    }),
  });

  // 200 = accepted, 202 = accepted but key still being validated.
  const ok = res.status === 200 || res.status === 202;
  return {
    ok,
    status: res.status,
    submitted: ok ? urls.length : 0,
    reason: ok ? undefined : await res.text().catch(() => 'Unknown error'),
  };
}
