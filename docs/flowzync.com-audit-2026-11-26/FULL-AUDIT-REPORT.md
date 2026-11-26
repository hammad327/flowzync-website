# flowzync.com: Full SEO Audit

**Date:** 26 November 2026
**Scope:** all 188 URLs in the live sitemap, fetched from https://flowzync.com on the audit date
**Business type:** remote web design, GoHighLevel and automation studio (service-area business, no public address). Site-wide target niche: *GoHighLevel for care agencies*.
**Method:** every page fetched live and run through the `claude-seo` page checks. Seven specialist reviews ran in parallel: technical, content, schema, AI search (GEO), AI agents, search experience (SXO) and local. Performance was measured in a real browser against the live site, mobile with 4× CPU throttling.

The specialist reports are in `findings/`. This file is the summary. `ACTION-PLAN.md` is the to-do list.

---

## SEO Health Score

| | Before this audit | After the fixes in this round (estimate) |
|---|---|---|
| **Overall** | **74 / 100** | **≈ 82 / 100** |
| Technical SEO (22%) | 76 | 82 |
| Content Quality (23%) | 64 | 68 |
| On-Page SEO (20%) | 74 | 92 |
| Schema (10%) | 84 | 87 |
| Performance (10%) | 85 | 95 |
| AI Search Readiness (10%) | 66 | 70 |
| Images (5%) | 85 | 90 |

"After" is an estimate from re-checking the local build. Google will only see it once the changes are deployed and the pages recrawled. Two scores are tracked outside the health score: **Local 58/100** and **Search Experience 60/100**.

The score is held back mostly by things code cannot fix: an expired certificate on `www`, the absence of any price signal, the business never saying where it is, and thin authority (few links, no reviews, no verifiable proof on portfolio items). Those are in the action plan, marked as owner decisions.

---

## Top 5 critical issues

1. **`www.flowzync.com` serves an expired TLS certificate** (expired 7 Nov 2026; the apex certificate is valid to 7 Jan 2027). The apex sends HSTS with `includeSubDomains; preload`, so a browser that has seen it refuses `www` outright, with no option to click through. Any link to the `www` version is dead for visitors and crawlers. **Status: open. Fix in Vercel, not code** (ACTION-PLAN item 1).
2. **Two API routes were open to anyone.** `/api/indexnow` ran a full IndexNow submission for any visitor: `CRON_SECRET` is unset in production, and `?check=1` skipped the check anyway. `/api/keep-alive?check=1` returned the email address leads are sent to, the database key type and raw database errors, and let anyone trigger a write-and-delete on the leads table. **Status: fixed.** Note: while confirming the first issue during this audit, one real IndexNow submission was triggered. It was harmless (the site makes the same submission daily).
3. **Unsupported claims in metadata and page copy.** Examples: "Award-quality", "certified GHL specialists", "first-page results across many niches", "fast turnaround", "a team on call", "dramatically cut no-shows", a measured conversion rise in a care post, invented figures ("about 40%", "30–50% less build time"), "Shopify stores… with the results behind them" on /portfolio, and an FAQ saying "no page builders" on a site that sells Elementor design. These break the site's own editorial policy, and they are exactly what quality raters look for. **Status: fixed** (every instance found).
4. **No price signal on any money page**, while every competitor in the search results shows one (WebFX "from $8,000", Fiverr/Upwork GoHighLevel gigs at $55–$250, a UK GHL-for-care guide at £1,500–£3,000). The site's own care post argues providers should publish a range. **Status: open, owner decision.** No figures were invented.
5. **The site never says where it is or who runs it.** "Lahore" and "Pakistan" appear on no page, including /about, /contact and the privacy page's "Who operates this website". Yet `llms.txt` names the CEO, so machines are told more than visitors. This is the weakest E-E-A-T signal on the site (Trust 60, Authoritativeness 30). **Status: open, owner decision.**

## Top 5 quick wins (all done in this round)

1. 49 over-length titles and 46 over-length descriptions rewritten by hand. After: **0 and 0**, with no duplicates.
2. Mobile layout shift (CLS) **0.115 → 0.000** on the homepage and **up to 0.146 → 0.000** on /portfolio. The analytics consent banner was growing after load.
3. First visible images on /about, /blog, /industries and /portfolio no longer lazy-loaded.
4. The sitemap stopped stamping 106 URLs with one hardcoded date. `lastmod` now appears only where it is real, so Google keeps trusting it on the blog.
5. A one-sentence definition of Flowzync for AI assistants (Organization schema, `llms.txt`, homepage FAQ), with the contradictions they would have quoted removed.

---

## Technical SEO: 76 → 82

**Works:** all 188 URLs return 200 (server response median 0.22s). Every page has a single H1, a self-referencing canonical on the apex, server-rendered content and valid JSON-LD. Old URLs redirect in one hop: the dated blog URLs, `/services/shopify-ecommerce` and the trailing-slash forms. Nonsense URLs return a real 404. Security headers are complete (HSTS preload, X-Frame-Options, nosniff, Referrer-Policy, COOP, Permissions-Policy). hreflang is reciprocal across `/`, `/es`, `/fr`, `/de` and `/ar`, with `x-default`. The two 404s and the canonical errors in Search Console from August and September are already fixed and only need Google to recrawl.

| Finding | Severity | Status |
|---|---|---|
| `www` certificate expired | Critical | Open (Vercel) |
| `/api/indexnow` open to anyone | High | Fixed (fails closed; set `CRON_SECRET`) |
| `/api/keep-alive` leaked the lead email and database details | High | Fixed |
| Sitemap `lastmod` templated on 106 URLs | Medium | Fixed |
| Sitemap, feed and llms.txt uncacheable (`force-dynamic`, `no-store`) | Medium | Fixed (hourly) |
| No RSS autodiscovery link | Medium | Fixed |
| `/favicon.ico` 404 | Low | Fixed |
| Locale pages render `<html lang="en">` | Low | Not changed, deliberately. Google ignores `lang` and detects language from visible content; screen readers already get the right language from the page wrapper. The fix needs a second root layout. |
| `/about/team` is in the sitemap with zero internal links | Medium | Owner decision. An unlinked page rarely gets indexed. Either link it discreetly or accept that it won't be. |
| No CSP header | Low | Open |
| `public/ads.txt` lists an AdSense publisher ID, but no ads are shown | Low | Owner to confirm |

## Content Quality: 64 → 68

**Works:** no filler or AI-pattern hits on any of the 188 pages. Readability is around US grade 8–9. Long posts are 83% unique and service pages 81%. There are 597 distinct FAQ questions and a strong editorial policy.

- **Location pages are templated** (High, open). Across 39 city pages, an average of 40% of each page's text is shared with at least half of the others, and New York is only 29% unique. London and New York are near-mirrors. Each page has 196–358 words of city-specific copy. This is the "scaled content" risk rather than classic doorway pages, because every page honestly says the studio is remote. **Fixed in this round:**
  - Claims of local client history ("Most Chicago projects we take on", "Sectors we see most here", five bare "Regularly." answers)
  - The same US HVAC project shown on 25 city pages, including London and Dubai. UK pages now show UK work.

  **Open:** decide which cities have a real reason to exist. The specialists independently suggest about 24–26 indexable cities, consolidating or noindexing the thinnest (Wellington, Cardiff, Huddersfield, Des Moines, Galway, Ipswich, Christchurch and the UK tail). This reverses earlier work that added these pages, so it is your decision, ideally made with Search Console data.
- **Unsupported claims** (High). Fixed, as listed above.
- **Industry template** (High). Every one of the 19 industry pages claimed "issues we find on almost every … website we audit", and a plural-stripping bug rendered "fitnes" and "busines". **Fixed.**
- **Cannibalisation** (Medium, open). The most important case is the blog post `/blog/gohighlevel-for-care-agencies` against `/services/ghl-funnels-for-care-agencies`: the same head term and the same FAQ, on the site's target niche. Others: the GBP checklist vs the local SEO checklist, WordPress cost vs cheap website design, and four short GoHighLevel posts. Each pair has a recommended owner page in `findings/content.md`.
- **28 short posts (~330 words) published 5–20 November on one skeleton** (Medium, open). That pattern looks like scaled content. Pause the format, merge the overlapping ones, and expand only those that earn impressions.
- **Portfolio can't be verified** (Medium, open). Items have no year, role or location, 28 of 30 site names are `.example`, and there are no live links or client quotes.

## On-Page SEO: 74 → 92

Before: 49 titles over 60 characters and 46 descriptions over 160, on services, industries, locations, blog, portfolio and the language pages. Several of those descriptions were also where the unsupported claims lived. After: **0 / 0**, no duplicate titles or descriptions, and no heading-level skips. Service names now keep their capitalisation in headings (they were rendered as "ghl funnel building").

## Schema: 84 → 87

**Works:** every JSON-LD block on 188 pages is valid. The Organization and WebSite nodes are identical everywhere. Every FAQ answer is visible on the page. There is no Review or rating markup, and LocalBusiness is correctly withheld because no address is published.

**Fixed:**
- Blog author and publisher now point to one Organization node.
- Industry offer names keep their capitalisation ("VAT", "R&D").
- The locations breadcrumb matches the visible "Areas we cover".

**Note:** Google retired FAQ rich results in May 2026. FAQPage markup is harmless and still accurate, but it no longer earns a search feature, so don't add it anywhere new on that account.

**Open (Medium):** give page-level nodes `@id`s and link them into one graph; add `areaServed` to industry Service nodes. Exact JSON-LD is in `findings/schema.md`.

## Performance: 85 → 95

Measured on the live site with 4× CPU throttling on mobile:

| | Mobile LCP | Desktop LCP | Mobile CLS before → after |
|---|---|---|---|
| / | 0.78s | 0.33s | 0.115 → 0.000 |
| /services/custom-website-design | 0.51s | 0.28s | 0 |
| /services/ghl-funnels-for-care-agencies | 1.52s | 0.34s | 0 |
| /industries/care-homes-and-home-care | 1.57s | 0.39s | 0 |
| /locations/web-design-london | 0.34s | 0.44s | 0 |
| /portfolio | 1.49s | 0.26s | 0.112–0.146 → 0.000 |
| /blog | 0.95s | 0.26s | 0 |
| /blog/what-is-a-quiz-funnel | 0.52s | 0.28s | 0 |

These are lab measurements, not Google's field data (CrUX), which needs Google API access. Pages download 20–33KB compressed. Every LCP is well inside the 2.5s "good" threshold.

## AI Search Readiness: 66 → 70

GEO scored 62 and agent readiness 72. Every AI search and assistant crawler is allowed. `llms.txt` exists and is honest.

**Fixed:**
- Flowzync now has a quotable one-sentence definition.
- The contradictions an assistant would have repeated are removed.
- `llms.txt` no longer says the site is English-only.
- The contact form now shows a written, announced error, its fields are marked required, and the spam-check question is the field's label (it was hidden from screen readers and agents).

**Open:**
- Only 8 of 838 blog H2s are questions, and the care posts open with a hook rather than the answer.
- No off-site entity signals: one LinkedIn URL in `sameAs`, no Clutch or GoodFirms profiles, no video.
- For "web design + GHL agency" searches, no page states the combined offer in one sentence.

Rewritten passages are in `findings/geo.md`.

## Images: 85 → 90

All images have alt text and dimensions. The first visible images now load eagerly. 35 blog posts use Unsplash photos as their article image. They resolved on the live site during this audit, but they are not under your control.

---

## Search experience and local (outside the health score)

- **SXO 60.** No money page answers the four questions searchers compare on: price, where you work, proof of similar work, and what happens after the click. Persona trust scores range from 42 (US home care agency owner) to 61 (US coach). Hero buttons go to a bare /contact and an unfiltered /portfolio. Details and an above-the-fold wireframe are in `findings/sxo.md`.
- **Local 58.** The city pages are honest about being remote. Only one Google Business Profile is legitimate: a Lahore one, as a service-area business if the premises qualify. Profiles in target cities would be spam. Directories that fit a remote studio: Clutch, GoodFirms, DesignRush, Sortlist, Crunchbase, Pakistan business directories, and care-sector supplier lists. Avoid Yelp-type local listings. See `findings/local.md`.

## What could not be measured here

Search Console, CrUX field data, GA4, backlink data, live Google results (People Also Ask, AI Overviews, local pack) and brand mentions on LinkedIn, Reddit and YouTube. Google APIs, backlink providers and those sites are not reachable from this environment. Rerun `seo-google` and `seo-backlinks` with credentials to fill these in.
