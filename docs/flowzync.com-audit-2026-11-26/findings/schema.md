# Structured data audit: flowzync.com (2026-11-26)

Method: all 188 saved pages (raw/pages/*.html) parsed; every `application/ld+json` block extracted and validated, cross-checked against visible text, against the live URL path, and against source in /home/user/flowzync-website. All JSON-LD is valid, server-rendered, `https://schema.org` context, absolute URLs. Not checked live: whether the LinkedIn URLs resolve (the proxy blocks linkedin.com).

**Score: 84/100.** Valid, honest, and well-scoped. Points lost for a fragmented @id graph (most pages have no WebPage/Service/Breadcrumb @ids), conflicting inline Organization copies in blog posts, a few label/format inconsistencies, and a thin sameAs.

## Detection results

| Page type (count) | JSON-LD present |
|---|---|
| Every page (188) | `@graph`: Organization `/#organization` + WebSite `/#website` (identical on all 188, one variant, no duplicates) |
| Home + ar/de/es/fr (5) | WebPage (`/#webpage`, `/ar#page`...) + FAQPage |
| Blog posts (70) | BlogPosting + BreadcrumbList; FAQPage on 56 |
| /blog | Blog (`/blog#blog`, 70 blogPost entries = 70 live posts) + FAQPage |
| /services (1) / service pages (13) | bare ItemList (13 items) / Service + OfferCatalog + BreadcrumbList + FAQPage |
| /industries (1) / industry pages (19) | CollectionPage + ItemList (19) / Service + OfferCatalog + audience + BreadcrumbList + FAQPage |
| /locations (1) / location pages (39) | CollectionPage + ItemList (39) / Service + areaServed City + BreadcrumbList + FAQPage |
| /portfolio (1) / case studies (30) | CollectionPage + ItemList (30) / CreativeWork + BreadcrumbList + FAQPage |
| /about, /about/team, /contact | AboutPage; Person(CEO)+AboutPage+Breadcrumb; ContactPage+Breadcrumb; each + FAQPage |
| /resources/website-project-brief | WebPage (+DigitalDocument hasPart) + Breadcrumb + FAQPage |
| cookies, privacy, editorial-policy | WebPage only |

FAQPage appears on 171 of 188 pages. No Microdata/RDFa. No Review, AggregateRating, Product, HowTo, SpecialAnnouncement or other deprecated types anywhere. lib/testimonials.js has every entry `schema: false`, and no Review markup is emitted. Correct under the house rule.

## What validates and what works
- Organization: name, url, email, 512x512 PNG logo (live 200, image/png, true size 512x512), image og.png (true 1200x630), contactPoint (email only), slogan, knowsAbout, areaServed. No placeholder text, no fabricated address/phone/rating. LocalBusiness is correctly withheld (`hasLocalNAP` false in lib/site.js).
- All FAQ questions and answers (every FAQPage on every page) appear verbatim in the visible HTML. 0 mismatches.
- BlogPosting: headline, description, image, datePublished, dateModified, author, publisher+logo, wordCount all present. Author is the Organization and the page visibly says "Published by Flowzync", so markup matches content. dateModified matches the visible "Updated <date>" line (checked on blog/care-agency-website-cqc-requirements: 2026-10-27).
- Breadcrumbs: for 69 of 70 posts, and all industries/services/portfolio/locations pages, items match the URL path hierarchy and last item equals the canonical. /resources/website-project-brief is 2 levels (Home > Project brief) because /resources is not a page, which matches the visible breadcrumb. Pass.
- Service pages: visible content backs each OfferCatalog entry (industry offer names are the visible niche list, e.g. "Payroll", "VAT" on /industries/accountants-and-bookkeepers). Offers carry no price, so there is no price-visibility issue.
- Location pages: Service + areaServed, deliberately not LocalBusiness. Honest. The code comment says so.
- Person: only the CEO is marked up on /about/team, and only he is visibly named there. The other four people in lib/team.js are not in the markup or the page. Correct.

## FAQPage: what it does and doesn't do now
Google retired FAQ rich results for all sites on 2026-05-07 (this supersedes the 2023 restriction to gov/health sites). FAQPage markup therefore produces no SERP feature on any page of this site. It is still valid schema.org and the content is visible, so it is harmless and not a policy violation. Any benefit for AI answer engines is unconfirmed. Priority: Info, not a defect. Recommendation:
- Do not add FAQPage to the 17 pages that lack it and do not spend effort expanding it.
- Keep the visible FAQ sections (they help users). The markup can stay, or be deleted at leisure from lib/pageFaqs.js `faqSchema()` and the per-template FAQPage objects to cut roughly 171 blocks of page weight. Do not remove it expecting a ranking effect either way.
- No page on this site is a genuine user-submitted Q&A, so QAPage is not applicable.

## Findings

### Medium

**M1. Conflicting inline Organization copies inside every BlogPosting (70 posts).**
Evidence: in /blog/<slug>, `author` = `{"@type":"Organization","@id":".../#organization","name":"Flowzync","url":"https://flowzync.com/editorial-policy"}` while the canonical node at the same @id has `url` = `https://flowzync.com`. `publisher` is a third variant (url + logo only, no sameAs/contactPoint). Same @id with different `url` values is a conflict that consumers merge unpredictably.
Fix in app/blog/[slug]/page.jsx (lines ~85-100): reference the node by @id only, and expose the editorial policy via a proper property.
```json
"author": {"@id": "https://flowzync.com/#organization"},
"publisher": {"@id": "https://flowzync.com/#organization"}
```
Google reads author/publisher names from the referenced node in the same graph only if parsers resolve it. To stay safe for Article parsing, keep a minimal inline form with a matching name and no conflicting url:
`"author": {"@type":"Organization","@id":"https://flowzync.com/#organization","name":"Flowzync"}`. Do the same for `publisher` (drop the inline logo; the canonical node has it).
Then add to the Organization in app/layout.jsx `publishingPrinciples: `${site.url}/editorial-policy``. It is a real page and real policy, so the link is honest.

**M2. Page-level entities are not connected into the @graph; @id patterns are inconsistent.**
Evidence: the layout emits the Organization/WebSite graph as one block; each page emits separate top-level blocks. Service, BreadcrumbList, BlogPosting, FAQPage have no `@id` so nothing can reference them. Only the home and locale pages and 3 policy pages carry a WebPage node. @id fragments vary: `#webpage`, `#page`, `#collection`, `#work`, `#blog`, and for BlogPosting `mainEntityOfPage.@id` is the bare URL with no WebPage node defined.
Fix, pick one convention: `<canonical>#webpage` for the page, `#breadcrumb`, `#service`/`#article`/`#faq` for the rest, and link them. Minimal change per template:
- app/services/[slug]/page.jsx, app/industries/[slug]/page.jsx, app/locations/[slug]/page.jsx: add `'@id': `${url}#service``, and add a WebPage node (below), then give the BreadcrumbList `'@id': `${url}#breadcrumb`` and the FAQPage `'@id': `${url}#faq`` + `isPartOf`.
- app/blog/[slug]/page.jsx: BlogPosting `'@id': `${url}#article``, `isPartOf: {"@id": ".../blog#blog"}`, `mainEntityOfPage: {"@id": `${url}#webpage`}`.
Example for an industry page (replace values per page):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "WebPage", "@id": "https://flowzync.com/industries/accountants-and-bookkeepers#webpage",
     "url": "https://flowzync.com/industries/accountants-and-bookkeepers",
     "name": "Websites for Accountants & Bookkeepers",
     "isPartOf": {"@id": "https://flowzync.com/#website"},
     "breadcrumb": {"@id": "https://flowzync.com/industries/accountants-and-bookkeepers#breadcrumb"},
     "mainEntity": {"@id": "https://flowzync.com/industries/accountants-and-bookkeepers#service"},
     "inLanguage": "en"},
    {"@type": "Service", "@id": "https://flowzync.com/industries/accountants-and-bookkeepers#service",
     "provider": {"@id": "https://flowzync.com/#organization"}, "areaServed": "Worldwide"}
  ]
}
```
(Keep the existing Service properties; the above shows only the added ones.) Impact is semantic clarity only, no rich-result change.

**M3. Industry Service nodes lack areaServed; offer names are mechanically lowercased.**
Evidence: 19 /industries/* Service nodes have no `areaServed` while /services/* have `"Worldwide"` and /locations/* have a City. Offer names read "Website design for vat", "Website design for r&d tax credits", "...for charity accounts" (code lowercases the visible label: app/industries/[slug]/page.jsx line 72 `c.toLowerCase()`).
Fix in that file: add `areaServed: 'Worldwide'` to the Service object and change line 72 to use `c` unchanged: `name: `Website design for ${c}``, and line 66 `serviceType` likewise (keep as is if you prefer, but acronyms get mangled: "vat"). This also better matches the visible labels ("VAT", "R&D tax credits").

### Low

**L1. sameAs is a single, non-canonical LinkedIn URL.** `https://linkedin.com/company/flowzync` (lib/site.js `social.linkedin`) while the Person uses `https://www.linkedin.com/in/...`. Use the `www.` form for both (that is the form LinkedIn serves) and keep one source of truth. Do not add profiles that do not exist; add Google Business Profile, Clutch, GoHighLevel partner directory or X only if the business really has them and adds them to `site.social` (the schema picks them up automatically via `Object.values(site.social)`). I could not verify that the LinkedIn URL resolves from this environment (proxy blocks the host).

**L2. Publication date format is inconsistent, and the blog hub disagrees with the posts.** 28 posts have `datePublished` as a full datetime (`2026-11-10T03:00:00.000Z`, from `publishAt`) and 42 as date-only; `dateModified` is always date-only, so for 28 posts it is technically earlier than datePublished (same day). /blog (app/blog/page.jsx line ~52) always emits date-only `p.date` for those same posts, so the hub and the post disagree. 7 posts have updated == date (fine). Fix: in both files compute one `published = p.publishAt ? new Date(p.publishAt).toISOString() : p.date` and set `dateModified = p.updated && p.updated !== p.date ? p.updated : published`. dateModified is otherwise accurate: it comes from `updated` frontmatter and matches the visible "Updated" line. Keep updating `updated` only for real edits.

**L3. Breadcrumb label mismatches.**
- 39 /locations/*: schema item 2 is "Locations", visible breadcrumb says "Areas we cover" (app/locations/[slug]/page.jsx line ~61: change `name: 'Locations'` to `'Areas we cover'`).
- 30 /portfolio/*: schema item 3 is "5 Star Quality HVAC — Home Services Site", visible is "5 Star Quality HVAC" (use the short project name in the breadcrumb only).
- /contact has a BreadcrumbList in app/contact/layout.jsx but no visible breadcrumb. Either add the visible breadcrumb or drop the block (house rule: markup describes visible content).

**L4. Image hosting for BlogPosting.** 35 of 70 posts use `images.unsplash.com/...?w=1400` hotlinks as the article image, 5 fall back to the generic /og.png, 30 are self-hosted JPGs. All are raster so eligible, but a third-party URL can change or vanish. Self-host the 35 Unsplash covers (articleImage() in lib/images.js or app/blog/[slug]/page.jsx) and give the 5 og.png posts a post-specific raster cover.

**L5. Organization.areaServed is redundant.** It lists a `Place` named "Worldwide" plus 12 Countries. Harmless; if simplified keep only the country list or just `"Worldwide"` text. Optional.

**L6. services hub ItemList is a bare block.** /services emits an ItemList with no @id or CollectionPage wrapper while /industries, /locations and /portfolio use CollectionPage + mainEntity ItemList. For consistency change app/services/page.jsx `listSchema` to a CollectionPage like the other hubs:
```json
{"@context":"https://schema.org","@type":"CollectionPage","@id":"https://flowzync.com/services#collection",
 "name":"Flowzync services","url":"https://flowzync.com/services",
 "isPartOf":{"@id":"https://flowzync.com/#website"},"about":{"@id":"https://flowzync.com/#organization"},
 "mainEntity":{"@type":"ItemList","numberOfItems":13,"itemListElement":[ ...existing 13 ListItems... ]}}
```
(No Google feature depends on this.) Hub pages /services, /industries, /locations, /portfolio, /blog, /about have no BreadcrumbList; optional: add Home > <Hub>.

### Info
- **I1.** FAQPage on 171 pages: no SERP feature since 2026-05-07 (see above). Do not remove as an "error".
- **I2.** Locale pages (/ar /de /es /fr) have correct `inLanguage` and WebPage @ids, but no BreadcrumbList; the WebSite node says `inLanguage: en` only. Fine.
- **I3.** /about/team: Person node is a separate, unconnected block. Page is deliberately unlinked from navigation (owner choice, not changed here). Source comment in lib/team.js says "linked from the footer and About page", which is stale: the live home and /about HTML contain 0 links to it. Not a schema bug, but the comment misleads.

## Opportunities that are honest for this business

1. **Person (CEO): already done, improve slightly.** Hammad Tahir is named only on /about/team, so only that page may carry his Person markup. Do NOT add `founder`/`employee` to the site-wide Organization node: that would put his name in markup on 187 pages where he is not visible, and it would defeat the owner's wish to keep the team low-profile. Also "CEO" does not establish "founder". On the team page itself add `url` and `knowsAbout` only if the strings are visible on that page (lib/team.js lists 'Business automation', 'GoHighLevel', 'Project strategy'; confirm they render). Change in app/about/team/page.jsx line ~28 (only addition shown):
```json
{"@context":"https://schema.org","@type":"Person","@id":"https://flowzync.com/about/team#hammad-tahir",
 "name":"Hammad Tahir","jobTitle":"Chief Executive Officer",
 "url":"https://flowzync.com/about/team",
 "sameAs":["https://www.linkedin.com/in/m-hammad-tahir/"],
 "worksFor":{"@id":"https://flowzync.com/#organization"},
 "knowsAbout":["Business automation","GoHighLevel","Project strategy"]}
```
Leave the AboutPage node as is.

2. **ProfessionalService: not recommended yet.** It is a LocalBusiness subtype and Google expects a real address. "Lahore" and "Pakistan" appear nowhere in the 188 pages, and lib/site.js `business` is empty, so there is nothing visible to mark up. Typing the Organization as ProfessionalService with no address would invite a "missing address" warning and break the visible-content rule. If the owner decides to publish the registered location, first show it in the footer/contact page, then add `address: {"@type":"PostalAddress","addressLocality":"Lahore","addressCountry":"PK"}` to the Organization (country/city level is enough) and optionally `"@type":["Organization","ProfessionalService"]`. Owner decision; the existing `site.business` fields already drive this.

3. **Service with areaServed / OfferCatalog: already present** on all 71 service/industry/location pages. Only M3 (industries areaServed + casing) is needed. The care cluster is covered by /services/ghl-funnels-for-care-agencies (Service, areaServed Worldwide, 6-item OfferCatalog matching its visible features) and /industries/care-homes-and-home-care (Service + audience). To strengthen the target niche, link the two from the Service node: on the care service add `"audience": {"@type":"BusinessAudience","name":"Care agencies and home care providers"}` (the industry page already declares an audience), only if that wording is visible on the page. Do not add `offers` with prices; none are published.

4. **ItemList on hub pages: already present** on /industries, /locations, /portfolio, /services. Only L6 consistency remains.

5. **Organization.publishingPrinciples** -> /editorial-policy (see M1). Honest and low-effort.

6. **Not recommended (would violate house rules or Google policy):** AggregateRating/Review (none verified; testimonials are all `schema:false`), invented `foundingDate`, `numberOfEmployees`, `award`, `priceRange`, phone/address, SearchAction (no site search), HowTo (removed), SpecialAnnouncement (deprecated), new FAQPage markup.

## Fix list by file (for the lead agent)
| File | Change |
|---|---|
| app/layout.jsx | Add `publishingPrinciples`; (L5 optional) simplify areaServed |
| lib/site.js | `social.linkedin` -> `https://www.linkedin.com/company/flowzync` (verify it resolves) |
| app/blog/[slug]/page.jsx | M1 author/publisher by @id/minimal; M2 @ids + isPartOf; L2 dates; L4 images |
| app/blog/page.jsx | L2: same published-date helper as posts |
| app/industries/[slug]/page.jsx | M3 areaServed + keep label casing (lines 66, 72); M2 @ids |
| app/services/[slug]/page.jsx, app/locations/[slug]/page.jsx | M2 @ids/WebPage; L3 locations breadcrumb label |
| app/portfolio/[slug]/page.jsx | L3 breadcrumb item name |
| app/contact/layout.jsx | L3 visible breadcrumb or remove BreadcrumbList |
| app/services/page.jsx | L6 CollectionPage wrapper |
| app/about/team/page.jsx | Person `url` (+ visible `knowsAbout`); no site-wide Person |

Browser sandbox: not applicable (saved HTML only, no rendering run).
