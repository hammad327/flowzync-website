# Flowzync design and SEO review — 27 October 2026

## What the live audit actually found

Checked all 147 URLs in the live XML sitemap, plus six redirect/host/query variants.
All 153 requests reached HTTP 200 pages with exactly one canonical tag. No audited
page carried a robots `noindex` directive. These observations describe crawl
eligibility and technical signals, not Google's current indexing decisions.

The four reported duplicate-without-canonical examples currently self-canonicalise:

- `/blog/care-agency-website-what-families-look-for`
- `/blog/gohighlevel-for-care-agencies`
- `/services/graphic-design`
- `/services/wordpress-website-design`

The two reported alternative pages also currently self-canonicalise:
`/services/landing-pages` and `/industries/hospitality-and-food`.
An old Search Console category is not evidence that a canonical tag is still missing.
Only Google's live URL Inspection and subsequent indexing data can establish its
selected canonical and whether validation has caught up.

The two dated URLs resolve to their existing clean URLs:

| Old URL | Existing destination |
|---|---|
| `/blog/2026-06-17-seo-basics-new-websites` | `/blog/seo-basics-new-websites` |
| `/blog/2026-06-24-ghl-funnel-mistakes` | `/blog/ghl-funnel-mistakes` |

The existing Next.js permanent redirect is retained and covered by a regression
check. HTTPS and the non-www origin are already preferred on the live host. The
query-string test on the GoHighLevel care-agency article canonicalises to the clean
article URL. Existing slugs are preserved; no replacement URL structure is added.

## Changes in this release

- Image-free, server-rendered service carousel with pause/play, previous/next,
  keyboard tabs, inactive-slide focus control, and reduced-motion support.
- Grouped service navigation, larger text and the company name alongside the
  icon in the header and footer.
- Mixed GoHighLevel, WordPress and WooCommerce featured work.
- Corrected nested statistic-number typography on About, with a smaller and
  balanced Worldwide label.
- Native FAQs across the site, useful without JavaScript and without a fixed
  answer-height cut-off.
- Removed continuous decorative header canvases from inner pages.
- Contextual link to `/about/team` and visible language links to `/ar`, `/de`,
  `/es` and `/fr`, with existing reciprocal hreflang tags retained.
- Authored search titles for the four reported blog examples instead of
  clipping their headings mid-phrase, and complete differentiated descriptions
  for the two reported service pages.
- New article on Bing Topics Portfolio, dated 27 October 2026, supported by
  primary Microsoft and Google sources and linked from the SEO service page.
- Installed the owner-supplied asynchronous Ahrefs Web Analytics snippet in the
  shared document head, covered by a check across all generated pages. A live
  browser load can verify script delivery; dashboard-side Recheck still requires
  the owner’s signed-in Ahrefs account.
- Replaced placeholder `.example` addresses in project frames with an honest
  “Project preview” label, preserving project content and URLs.
- Sitemap dates updated only for substantively edited pages and article dates.

Run `npm run build`, `node scripts/check-homepage.mjs` and
`node scripts/check-site-seo.mjs`. The site check verifies self-canonicals,
indexability, title uniqueness, JSON-LD parsing, internal targets, old URL
preservation and dated-blog redirect patterns across the generated site.

## After deployment: what requires Search Console access

1. Inspect the six reported canonical examples. Compare the live rendered page,
   declared canonical, Google's selected canonical and latest crawl date.
2. Test the two dated blog URLs and inspect their clean destinations.
3. Submit the existing `/sitemap.xml` and request indexing for the homepage,
   the new article and a small set of priority service pages where appropriate.
4. Start validation only after the relevant live tests pass. Wait for Google's
   recrawl rather than repeatedly resubmitting unchanged URLs.
5. Review which pages attract impressions, qualified visits and enquiries.
   A successful response, canonical and sitemap do not guarantee indexing.

The previously supplied crawl dates are from August/September. The new technical
observations above must not be reported as evidence that Google has already
reclassified the URLs. No Search Console validation was submitted in this session.

## Backlinks: verified limit and practical next steps

Bing Webmaster Tools is signed out in the available browser. No private backlink
report, referring-domain count or competitor comparison has been accessed. The
warning supplied by the owner is an authority signal, not a missing HTML tag.
Changing code cannot create independent editorial links.

For a proper comparison, export the site's Backlinks data from Bing and compare
with a genuinely relevant agency: similar services, markets and business size.
Measure referring domains, useful referring pages, topical relevance, anchor-text
patterns and overlap. Do not compare raw link counts alone or invent authority
scores. Ahrefs is another optional source if connected; its index differs from
Bing's and the numbers should not be presented as interchangeable.

Prioritise legitimate opportunities:

- Publish evidence-rich project case studies, with client-approved links where
  appropriate and no requirement for keyword-rich credits.
- Earn mentions from genuine platform partners, collaborators and relevant
  professional directories with accurate business information.
- Offer useful original checklists, practical research or implementation guides
  worth referring to. The newly published report guide is a start, not proof of
  acquired backlinks.
- Avoid paid link schemes, mass directory submissions and automated outreach.

No outreach, listing submissions, backlink purchase or third-party account change
was performed as part of this website release.

## Primary references

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/ai-features
- https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/
- https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/

## Ahrefs public crawler check

The official AhrefsSiteAudit status checker was run for `flowzync.com` on
27 October 2026. It reported public-root access allowed across HTTPS/HTTP and
www/non-www variants. Its “partly” label corresponds to the intentional
`/admin` and `/api/` exclusions. These private-route exclusions are retained.
This is a robots-access check, not a private backlink report or confirmation
that Ahrefs' dashboard-side analytics installation check has been clicked.
