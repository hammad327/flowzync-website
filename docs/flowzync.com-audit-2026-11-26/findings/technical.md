# Technical SEO findings: flowzync.com (2026-11-26)

Method: saved pages and headers in raw/, plus live `curl` against the apex through the proxy. The claude-seo network scripts fail on DNS here, so they were not used. Source files were read but not edited.

**Technical score: 76/100**

| Category | Status |
|---|---|
| Crawlability | Pass, with one medium issue (sitemap and orphan handling of /about/team) |
| Indexability | Pass |
| Hreflang | Pass on structure, with a `<html lang>` defect on the locale pages |
| Security headers | Pass, but CSP is missing and the www cert has expired (Critical) |
| URL structure and redirects | Pass |
| Mobile | Pass |
| JS rendering | Pass (server-rendered) |
| Core Web Vitals (source inspection only) | Not measured; see Low items |
| Feeds, llms.txt, 404 handling | Pass, with small gaps |

## CRITICAL

### C1. https://www.flowzync.com serves an expired TLS certificate
- Evidence: `curl -v https://www.flowzync.com/` ends with `TLS alert, certificate expired (557)`. This matches the established notAfter of 2026-11-07, so it has been expired for 19 days. `http://flowzync.com/` did not return a status through the proxy (curl reported 000), so the http-to-https hop was not verified from here. The apex answers over HTTPS only.
- Consequences:
  - Every visitor or crawler arriving via www hits a full-page browser interstitial.
  - Apex sends `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`. Browsers that have cached it treat www as HTTPS-only with no click-through bypass, so www is completely unreachable for them.
  - Any backlink, citation or bookmark pointing at www is dead. Link equity is lost, and Googlebot will not follow a failed handshake to reach the apex.
  - The repo still tells the owner to use www in places: `INSTRUCTIONS.md` (lines ~124, 356, 451, 816 and 1406 tell them to Request Indexing for `https://www.flowzync.com`), and the comment at the top of `app/api/indexnow/route.js`. This is probably how the www host got set up and then abandoned. `lib/site.js` correctly uses the apex.
- Fix (Vercel dashboard, not code):
  1. Project, Settings, Domains: confirm `www.flowzync.com` is attached. If it is not, add it.
  2. Set it to redirect (308) to `flowzync.com`.
  3. Check the DNS: `www` should be a CNAME to `cname.vercel-dns.com`, or whatever Vercel shows. If a stale A record or a registrar-level redirect is blocking Let's Encrypt renewal, fix that. Vercel then reissues the cert automatically.
  4. Verify: `curl -sI https://www.flowzync.com/` returns 308 to `https://flowzync.com/`.
- Cleanup (code): replace `www.flowzync.com` with `flowzync.com` in the comment in `app/api/indexnow/route.js` and in `INSTRUCTIONS.md`. `components/HeroFlow.jsx:39` shows `www.flowzync.com` as decorative browser-bar text; make it `flowzync.com` for consistency.

## HIGH

### H1. /api/indexnow is publicly triggerable
- Evidence: `app/api/indexnow/route.js` lets a request through when `CRON_SECRET` is unset, or when the query string contains `?check=1`. An unauthenticated `curl https://flowzync.com/api/indexnow` returned **200** during this audit, so the secret is not enforced in production. **That request ran a real IndexNow submission of the sitemap URLs.** It was a side effect of my probe, and it is harmless (it only notifies Bing and Yandex of existing URLs), but you should know it happened.
- Why it matters: anyone can make the site submit about 188 URLs to IndexNow repeatedly. The risk is rate-limit abuse and a flagged key. It is not a data exposure.
- Fix:
  1. Set `CRON_SECRET` in Vercel env. Vercel Cron then sends `Authorization: Bearer <secret>` automatically.
  2. In `route.js`, remove the `?check=1` bypass, or keep it only for a read-only dry run that does not call `submitToIndexNow`.

### H2. All locale pages declare `<html lang="en">`
- Evidence: `raw/pages/{es,fr,de,ar}.html` all have `<html lang="en">` from `app/layout.jsx:128`. The locale content is wrapped in `<div lang="es" dir="ltr">` (`app/[locale]/page.jsx:63`), but `dir="rtl"` for Arabic lives only on the inner div. The `<html>` element stays `dir` unset and `lang="en"`.
- Why it matters: the page language signal and the hreflang disagree. This hurts accessibility (screen readers choose a voice from `<html lang>`), browser translate prompts and language detection by other engines. Google mostly relies on content and hreflang, so the SEO damage is small, but it is a clear contradiction on pages whose whole purpose is language targeting.
- Fix: Next.js App Router has no per-route `<html>` override, so use one of these two options.
  - **Option A (preferred, minimal):** move `/[locale]` into a route group with its own root layout. For example `app/(localized)/[locale]/page.jsx` and `app/(localized)/layout.jsx` that renders `<html lang={l.hreflang} dir={l.dir}>`. This needs `app/layout.jsx` to be split into per-group root layouts, because with multiple root layouts there is no shared top-level one.
  - **Option B:** keep the inner-div approach, which is already valid markup, and accept the mismatch as a documented known limit.

## MEDIUM

### M1. /about/team is in the sitemap but has zero internal links
- Evidence: it is the only orphan among the 188 sitemap URLs (checked with all internal `<a href>` across the saved HTML). `app/sitemap.js` lists `/about/team` explicitly in `staticPages`, and its meta robots is `index, follow`.
- This is deliberate per the owner (team hidden from visitors), so I am not recommending linking it. But the sitemap submits it to Google, Bing and IndexNow, which publicizes and indexes the exact page the owner wants hidden from visitors.
- Decision for the owner:
  - If the page should not be findable in search: remove `/about/team` from `staticPages` in `app/sitemap.js` and add `robots: { index: false, follow: true }` to the page metadata. Reality check: a noindex page that is also unlinked is fine.
  - If search visibility is fine and only the nav link is hidden: leave it. It stays an orphan, which weakens its crawl priority.

### M2. Sitemap `lastmod` is partly templated, not per-page truth
- Evidence from live `sitemap.xml`: 106 of 188 URLs share `2026-10-27` and 41 share `2026-11-13`. These come from hard-coded constants in `app/sitemap.js` (`PAGES_UPDATED`, and `new Date('2026-10-27')` / `new Date('2026-11-13')` repeated for industries, locations, projects and locale pages). Blog posts use their real `updated || date`, which is good. The homepage and `/blog` take the newest post date, which is a reasonable proxy.
- Why it matters: the file's own comment says an unreliable lastmod makes Google ignore the field. Right now it is accurate only if someone really bumps those constants each time the templates change. 41 location pages all showing `2026-11-13` looks like a bulk edit, which may be true.
- Fix: leave as is if the dates reflect real edits. Better, derive each lastmod from the data (a `lastReviewed` or `updated` field on each service, industry, location and project in `lib/*.js`), or from `git log -1 --format=%cI -- <file>` at build time. Do not use the deploy date. Also drop the dead branches: the `['/about', '/portfolio', ...]` arm for `/about` can never run because `/about` is caught by the earlier `['/about', '/locations']` arm. This is harmless but confusing.

### M3. Sitemap is `force-dynamic`
- Evidence: `export const dynamic = 'force-dynamic'` at the top of `app/sitemap.js` (same for `app/llms.txt/route.js` and `app/feed.xml/route.js`). Live headers: sitemap.xml and llms.txt return `x-vercel-cache: MISS`; feed.xml and llms.txt return `cache-control: no-store`; sitemap.xml returns `max-age=0, must-revalidate`.
- Why it matters: the sitemap, feed and llms.txt are rebuilt on every request. TTFB is fine today (median 0.22s), but crawler bursts hit the origin each time, and a failure there would return a 5xx to Googlebot.
- Fix: remove `force-dynamic`. Use `export const revalidate = 3600;` (or `86400`) so the content is edge-cached. The data is from files and `lib/` constants, so nothing is lost.

### M4. Blog Atom or RSS autodiscovery link is missing
- Evidence: `/feed.xml` returns 200 `application/rss+xml` with 70 items (the sitemap also has 70 `/blog/` post URLs) and a correct `atom:link rel=self`. But no `<link rel="alternate" type="application/rss+xml">` exists in the head of `_home.html` or the blog pages.
- Fix: in `app/layout.jsx` or `app/blog/page.jsx` metadata, add `alternates: { types: { 'application/rss+xml': '/feed.xml' } }`. Note the comment in `app/layout.jsx:24` says root-layout `alternates.canonical` is intentionally absent, so put the `types` entry in `app/blog/page.jsx` or in the root metadata without `canonical`.

## LOW

### L1. No `<meta>`/header CSP
Security headers present on every page: HSTS (2 years, includeSubDomains, preload), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, COOP same-origin-allow-popups, Permissions-Policy. Missing: `Content-Security-Policy`. A strict one is hard here because of Next inline scripts, the Ahrefs analytics script, and Google Fonts. Start with `Content-Security-Policy-Report-Only` in `next.config.mjs`, or skip it; it is not an SEO factor. `X-Frame-Options: DENY` also blocks legitimate embedding by the owner's own tools, which is fine.

### L2. Hero imagery
`_home.html` has 6 images, all `loading="lazy"` (the checker flags `first_image_lazy: true`). The first image is a portfolio screenshot (`heaven-sent-sleep-baby-care-fun.jpg`) rather than the hero, so LCP is most likely hero text. No problem demonstrated; verify with a lab run. The `src` fallback on `next/image` uses `w=3840`, which only matters for browsers without srcset.

### L3. Render-blocking Google Fonts CSS
`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope...&display=swap">` on inner pages is render-blocking (`display=swap` helps the text but not the CSS fetch). Preconnects are already present. Self-hosting through `next/font/google` removes the third-party hop and the layout shift from font swap. I could not measure CWV here, so this is a source-level risk, not a measured failure.

### L4. No `llms-full.txt`, `security.txt`, `favicon.ico`, or web manifest (all 404)
`favicon.ico` 404 is minor because `<link rel="icon" href="/icon.svg">` and apple-touch-icon exist, but many crawlers and tools still request `/favicon.ico` blindly. Adding `app/favicon.ico` removes the repeated 404s. `security.txt` is optional.

### L5. `/blog/:date-:slug` and other legacy redirects are 308, not 301
The code comments say 301; Next.js `permanent: true` emits **308**. Google treats 308 as permanent, so there is no SEO impact. Only the comments in `next.config.mjs` are inaccurate.

### L6. 6 pages carry a single internal inbound link
`/locations/web-design-sarasota`, `-stockport`, `-swindon`, `-wakefield` have only 1 internal link (from the hub), as do a few others with 2 (e.g. `/portfolio/cleaning-services-website`, `/blog/website-redesign-signs`). Not orphans. Related-links blocks on the location hub or neighbouring locations would add inbound paths; low priority.

### L7. IndexNow and housekeeping
`public/5948b2afb90f64299b0257420201064a.txt` is the IndexNow key file and is reachable (200). `public/ads.txt` contains a Google AdSense publisher line even though no ads were seen on the audited pages; remove it if AdSense is not used.

## Verified OK (what works)

**Crawlability**
- `robots.txt` returns 200 `text/plain`. It allows `/`, disallows `/admin` and `/api/` for all agents, and lists 15 AI and search crawler tokens, none blocked. It has a `Sitemap:` line pointing at `https://flowzync.com/sitemap.xml`, which returns 200 `application/xml`.
  - `Host:` is a Yandex-only directive and ignored by Google; harmless.
  - `Disallow: /admin` also matches `/administrator`-style paths; fine here.
- Sitemap: 188 URLs, all 200, all on the apex, no `priority` or `changefreq` (correct, Google ignores them).
- Sitemap vs internal links: every sitemap URL except `/about/team` has at least one internal link. Internal links that are not in the sitemap are only `/llms.txt` and `/resources/website-project-brief-template.txt`, both non-HTML files, which is correct.
- No non-canonical link forms found in the saved pages (no `http://`, `www`, or trailing-slash links).

**Redirects (live, apex)**
- `/blog/2026-06-17-seo-basics-new-websites` goes 308 to `/blog/seo-basics-new-websites`, then 200. One hop.
- `/services/shopify-ecommerce`, `/services/shopify`, `/services/shopify-store-design` go 308 to `/services/woocommerce-development` (200). One hop.
- `/services/wordpress-development` goes 308 to `/services/wordpress-website-design`. One hop.
- `/blogs`, `/work`, `/service`, `/areas` and similar all go 308 to their targets in one hop (checked `/blogs`, `/work`).
- Trailing slashes: `/services/`, `/about/`, `/es/` all 308 to the slashless URL. `//services` also resolves in one hop. No chains seen.
- Case sensitivity: `/Services` and `/ES` return 404 (real status), not a duplicate 200. Good.
- Tracking parameters (`/services?utm=1`) return 200; the canonical is self-referencing without the parameter, so no duplicate-content issue.
- One redirect target caveat: `/services/shopify-ecommerce` lands on WooCommerce, which is a reasonable "closest match", not a soft-404.

**Indexability**
- Every page has `meta robots: index, follow` plus googlebot max-snippet and max-image-preview:large. There are no accidental noindex tags (0 of 188).
- `/admin` returns 200 but carries `X-Robots-Tag: noindex, nofollow, noarchive` and `<meta name="robots" content="noindex, nofollow, nocache">`. It is also disallowed in robots.txt. One caveat: because robots.txt blocks `/admin`, Google cannot crawl it to see the noindex. If the URL is linked externally it could still be listed without a snippet. The page is unlinked from the site and absent from the sitemap, so the practical risk is low. If you want it fully clean, drop `/admin` from `robots.txt` Disallow and rely on noindex. Do not do this if you would rather keep crawlers out entirely.
- `/api/*` returns 404 for GET on non-existent roots; `/api/contact` 405, `/api/admin` 401, `/api/challenge` 200, all with `X-Robots-Tag: noindex, nofollow`. Admin API routes also get `Cache-Control: private, no-store`. No admin or API route is in the sitemap.
- Canonicals: all self-referencing on the apex, no trailing slash (the checker flags the homepage `https://flowzync.com` vs `/` as equivalent).

**404 handling**
- `/nonsense-xyz-123`, `/index.html`, `/zzz`, `/admin/login`, `/api` all return a real **404** status with the styled not-found page (matched path is `/[locale]`, which calls `notFound()` for unknown codes). No soft-404s. TTFB on 404 is about 0.2s.

**Hreflang** (`/`, `/es`, `/fr`, `/de`, `/ar`)
- All five pages carry the identical set of six alternates: `x-default`, `en`, `es`, `fr`, `de`, `ar`. They are reciprocal and each page includes itself. `x-default` and `en` point at `https://flowzync.com`.
- Each locale page has a self-canonical on its own URL, and all targets return 200. Locale URLs are in the sitemap. The site footer links the languages visibly, so the cluster is discoverable.
- Only the homepage cluster is localized; no other page has hreflang, which is correct since the other pages have no translations.
- Only defect: `<html lang>` (H2). For a deeper hreflang review defer to the `seo-hreflang` skill.

**Security / HTTPS**
- All security headers listed in L1 are set on every page including 404s. HSTS is long-lived with preload. No mixed content, no `http://` links in the 188 pages.
- Apex cert valid to 2027-01-07 (established earlier). Renew automatically via Vercel; this is the same mechanism that failed for www, so confirm auto-renewal is healthy after fixing C1.

**Mobile**
- Viewport `width=device-width, initial-scale=1` present on all pages. All images have width and height attributes and alt text, no layout-shift risk from missing dimensions. Tables in blog content are wrapped in `overflow-x: auto` (`app/globals.css`). Touch-target sizes were not measured.

**JS rendering**
- The site is server-rendered by Next.js App Router. The saved raw HTML (no JS execution) contains the full content: home about 1,500 words, a service page about 1,600, a blog post about 1,100, even the `/ar` page about 760. Title, canonical, JSON-LD, FAQ text and hreflang are all in the raw source. No SPA shell and no Playwright rendering needed. Pages carry 22-25 script tags (Next hydration chunks, plus `analytics.ahrefs.com/analytics.js` loaded `async`), and raw HTML weight is 55-128 KB, which is acceptable.

**Feeds and llms.txt**
- `/feed.xml`: 200, `application/rss+xml; charset=utf-8`, valid RSS 2.0 with absolute `https://flowzync.com` links, `guid isPermaLink=true`, 70 items, `lastBuildDate` aligned with the newest post. (See M4 for autodiscovery; cache is `no-store`, see M3.)
- `/llms.txt`: 200, `text/plain; charset=utf-8`, about 73 absolute URLs, generated from the same data as the site. It says `Languages: English` although `/es /fr /de /ar` landing pages exist; consider "English (landing pages also in es, fr, de, ar)" so the file matches reality.
- `/llms-full.txt`: 404 (optional, not required).

**next.config.mjs**: image `remotePatterns` is limited to two hosts, redirects are sane, console removal is limited to production. `app/robots.js`: correct; `BLOCKED_CRAWLERS` is empty by design, so every AI crawler is allowed. Nothing wrong there. Do not add `Host` or `crawl-delay`.

## Priority order for the lead agent
1. C1: fix the www domain in Vercel (not a code change).
2. H1: set `CRON_SECRET` and remove the `?check=1` bypass in `app/api/indexnow/route.js`.
3. H2: decide on the locale `<html lang>` approach.
4. M1: decide whether `/about/team` should be in the sitemap.
5. M3 and M4: cache the sitemap, feed and llms.txt; add RSS autodiscovery.
6. M2: make lastmod data-driven and remove the dead branches.
7. L-items as time allows.

Browser sandbox note: no Playwright rendering was run, so there is nothing to report about sandboxing.
