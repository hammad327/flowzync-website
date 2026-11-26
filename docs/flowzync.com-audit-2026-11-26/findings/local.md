# Local SEO findings - flowzync.com (2026-11-26)

Score: **58 / 100**. Business type: **Service-area / remote studio, no public address** (not brick-and-mortar, not hybrid). Vertical: web design / marketing agency (not one of the six local verticals). Proximity (about 55% of local-pack variance) cannot help a Lahore studio in any target city, so the realistic goal is organic and AI visibility, not city local-pack rankings.

| Dimension | Weight | Score | Note |
|---|---|---|---|
| GBP signals | 25 | 8/25 | No GBP, no Maps embed, no place reference. A remote studio can legitimately have only a Lahore profile (see H2). |
| Reviews and reputation | 20 | 8/20 | No visible reviews, no aggregateRating (correct under the no-fabrication rule). Nothing to show yet. |
| Local on-page | 20 | 16/20 | 39 city pages that are honest and mostly unique, but they never say where the studio is based. |
| NAP and citations | 15 | 4/15 | No NAP published. Only LinkedIn is listed in sameAs. |
| Local schema | 10 | 8/10 | Correctly no LocalBusiness. Service + areaServed on city pages. Minor issues below. |
| Local links and authority | 10 | 4/10 | No directory profiles or local citations detected. |

## What works
- The location pages say plainly that Flowzync is remote. Examples: `lib/locations.js` FAQ "Are you an Austin-based agency? No...", and "Are you a London agency? No." The /locations hub says "they are not office locations" (`app/locations/page.jsx:31`). This is the right posture for avoiding "misleading location" and doorway-page problems.
- `app/layout.jsx` publishes LocalBusiness only if `hasLocalNAP` is true. The business block in `lib/site.js` is empty (street, city, phone, geo all `''`), so no LocalBusiness is emitted. The live JSON-LD confirms only Organization, WebSite, Service, FAQPage and BreadcrumbList. No fake address or phone is in schema.
- City-page schema (`app/locations/[slug]/page.jsx:66-76`) is `Service` with `provider` pointing to the org `@id` and `areaServed` as a `City`. It never claims the studio is located there. This is the correct pattern.
- All 39 city pages are in the sitemap, are self-canonical, return 200 and are indexable.
- Each city page has 3 unique "local picture" blocks, 4 city-specific FAQs, a related-services set and a different showcase project on only 5 of 39 pages (see M3).

## Template and doorway measurement (saved HTML, `<main>` text, 39 pages)
- Sentence-level overlap between pairs is low. Jaccard on sentences: Austin/Dallas 0.12, Manchester/Leeds 0.14, Calgary/Ottawa 0.10, Cork/Galway 0.11, Dubai/Cape Town 0.10, Boise/Spokane 0.17, Norwich/Ipswich 0.17, Adelaide/Gold Coast 0.12, London/Dubai 0.10.
- Per page: of roughly 26-29 sentences, only 5-7 appear on 10 or more pages (the process steps, services/industries grid text and CTA) and about 19-21 are unique to the page. That is roughly 70-75% unique body copy, which is better than typical doorway pages.
- 4-gram word-shingle Jaccard across all 741 pairs averages 0.30, with a minimum of 0.25. The top outlier is **London vs New York at 0.50**. Next are Austin/Manchester 0.40, Ipswich/London 0.38, Cardiff/Huddersfield 0.38 and Huddersfield/Stockport 0.38. Wherever a pair reaches 0.35 or more, both pages reuse the same FAQ sentence frames.
- Repeated skeleton on every page: identical H2 order, the same 3-step "From brief to launch" block, an identical 8-card industries grid and a similar CTA. Repeated phrases: "Senior team" appears in 78 meta descriptions ("senior team only" in 48), and the "Are you X-based? No. Flowzync is a remote studio ... we say so rather than implying a local office" answer recurs about 28 times. The honest-remote FAQ is good once, but a near-identical sentence frame across 28 pages reads as a template.
- 15 of 39 pages are UK, and 12 are US. Tail towns such as Stockport, Swindon, Wakefield, Huddersfield, Ipswich, Chattanooga, Fort Collins and Des Moines have no evidence of any client, project or market knowledge on the page. `lib/locations.js` itself warns that this is the exact risk ("Five real pages beat fifty thin ones"). The code comment on the "Elsewhere" grid mentions "Discovered - currently not indexed", which suggests Search Console already shows this for the thinnest pages. I could not verify that from here.
- Honest assessment: these are **not classic doorway pages**. They state the true model and carry real differentiation. The risk is **scaled content / site reputation** at 39 pages with one conversion target and no first-hand local proof. Google's spam policies target pages that exist to funnel the same users to one destination. Pages that survive a swap test (swap the city name: does the page still make sense?) are the ones with unique context blocks, such as Dubai (Arabic/English, AED), Cape Town and Sarasota (older audience design).

## Critical
None for local. The expired www cert (CONTEXT.md) is the only site-wide critical and it is out of scope here.

## High

**H1. The site never states where it is based, and Lahore appears nowhere on the public site.**
- Evidence: grep for "Lahore" and "Pakistan" across `app/`, `lib/` and the saved pages finds nothing public (one hit in `app/admin`). /locations FAQ "Where is Flowzync based?", /about "Where does Flowzync work from?" and the footer ("Remote studio · Working with clients worldwide") all dodge the question.
- Why it matters: the location FAQs promise honesty ("we say so plainly"), but a reader who asks "so where are you?" gets no answer. That undercuts the trust position the pages are built on. It also blocks any citation, GBP or LocalBusiness entity work, because those need one consistent registered location.
- Fix: this is a business decision for the owner. If agreed, add one factual sentence to the /about and /locations "based" FAQs and to the footer, for example "Flowzync is a remote studio registered in Lahore, Pakistan." Add this only if the owner is comfortable. Do not add a street address unless it is real and publishable.

**H2. GBP: what is legitimate.**
- Google's guidelines require a physical location staffed during stated hours, or a service-area business that serves customers at their location. A web studio that does not visit clients and has no staffed premises is a weak candidate, and there is no way to hold a verified profile in Austin, London or Dubai. A virtual office, PO box or coworking desk in a target city is **not** legitimate and risks suspension, so do not create any.
- Legitimate option: one profile for the real Lahore premises, if there is a staffed office or home office that qualifies. Set it as a service-area business with the address hidden if clients are not visited there. Use primary category "Web designer" (or "Website designer" per the live category list) with "Marketing agency" and "Internet marketing service" as secondary. Add services, the real description, the website URL and photos of the real workspace. If no qualifying premises exist, skip GBP and invest in the directories below.
- Expectation: a Lahore profile will not rank in the US, UK or other target cities. Its job is brand search, entity consistency and a reviews destination.

**H3. Thin tail location pages: act on them.** See the per-group plan below.

## Medium

**M1. `areaServed` accuracy.**
- Org schema (`app/layout.jsx:79-82`) lists "Worldwide" plus 12 countries (US, UK, CA, AU, IE, NZ, AE, SG, ZA, DE, NL, ES). City pages have 39 city pages covering 8 countries only (US, UK, CA, AU, IE, NZ, AE, ZA). Singapore, Germany, Netherlands and Spain have no page, which is fine, but the comment in `lib/site.js` says these are "Countries we have actually delivered work in". I cannot verify that. If any is not true, drop it, because the claim is rendered into schema. "Worldwide" as a `Place` is not a recognised place; use the plain country list alone or `areaServed: "Worldwide"` as a string, as `app/services/[slug]/page.jsx:66` already does.
- City pages: `areaServed` City with `containedInPlace` AdministrativeArea is fine. Check ambiguous entries, for example "Halifax" (Nova Scotia) and "Newcastle" (NSW, Australia) show only "Halifax" and "Newcastle" in the hub ItemList names. Add the region to the names ("Halifax, Nova Scotia") to avoid confusion with Halifax, UK and Newcastle upon Tyne.
- Note: `allServiceAreas`, `usStates` and about 200 cities in `lib/site.js` are not used in schema (only countries are), so there is no stuffing in markup. Good. Keep it that way: do not emit those lists.

**M2. Empty NAP block and dormant LocalBusiness code.**
- `lib/site.js` `business` is all blank, so `hasLocalNAP` is false. That is correct today. If the owner later fills a Lahore address, `app/layout.jsx` would emit a plain `LocalBusiness`. The preferred type is `ProfessionalService` (a LocalBusiness subtype) with `@id` `#localbusiness`, `address` addressCountry `PK`, `geo` at 5 decimals, `openingHoursSpecification` instead of the `openingHours` string, and `areaServed` as the country list. Also `hours: 'Mo-Sa 09:00-18:00'` is a Lahore-time claim, so label the timezone. Do not publish `priceRange: '$$'` unless the owner stands behind it. Do not publish it until the address is real and matches GBP and directories exactly.
- A NAP audit across sources currently has nothing to compare: HTML, JSON-LD and meta all contain no address or phone (the only contact is info@flowzync.com). No discrepancy, but no NAP signal either.

**M3. Showcase reuse.** Only 5 of 39 pages set a `showcase` in `lib/locations.js`. The rest fall back to one of two projects (`5-star-quality-hvac`, or `roller-shutters-online` if the page relates to WooCommerce), so 34 pages show the same hero card. Give the pages you keep a relevant project and caption.

**M4. Meta description repetition.** "Senior team" (78 times) and "Itemised quotes, no agency overhead" (8) in location descriptions are boilerplate. Metadata text is being rewritten by the lead; make sure the rewrite puts city-specific content first.

## Low
- L1. The FAQ answer "Can you help us rank in Austin searches? ... a fully completed Google Business Profile" tells a client what they need, but a reader may take it as Flowzync having an Austin profile. Reword to "your Google Business Profile".
- L2. The location FAQPage schema is on 39 pages with questions that are largely visible text; fine, but FAQ rich results are no longer shown for most sites, so treat it as no gain rather than a risk.
- L3. `sameAs` has only LinkedIn. Add real profiles as they are created (Clutch, GoodFirms, etc.), never unclaimed ones.

## Per page group: keep, strengthen, consolidate or noindex
Principle: keep a city page only if it has a genuine reason (a real client or project there, sector knowledge, or a language/currency/regulatory angle). Where there is no evidence, either consolidate into a country or region page or noindex. Do not mass-delete URLs that already have impressions; check Search Console first.

| Group | Pages | Action |
|---|---|---|
| Major US metros | Austin, Dallas, New York, Chicago, Miami, Phoenix | **Keep and strengthen.** Add one real, named project or sector example each. Differentiate London/New York (0.50 overlap) first. |
| Secondary US cities | Boise, Chattanooga, Spokane, Sarasota, Fort Collins, Des Moines | **Keep Sarasota** (distinct older-audience angle) and Boise (trades). **Consolidate or noindex** Chattanooga, Spokane, Fort Collins and Des Moines unless there is a real client; fold into a "Web design for US regional businesses" hub section or noindex. |
| UK major | London, Manchester, Birmingham, Leeds, Glasgow, Bristol, Cardiff | **Keep and strengthen.** Differentiate London from New York. Add UK-specific proof (UK hours, GBP pricing, UK compliance such as UK GDPR/PECR, Companies House practice). |
| UK tail | Reading, Milton Keynes, Norwich, Stockport, Swindon, Wakefield, Huddersfield, Ipswich | **Consolidate** into 3 regional pages (for example South East/Thames Valley, East of England, North of England and Yorkshire), or **noindex,follow** each until real content exists. Highest overlap cluster (Ipswich/Norwich/Wakefield 0.37-0.38) sits here. |
| Canada | Calgary, Ottawa, Halifax NS | **Keep** with bilingual/regional specifics (Ottawa: French accessibility; Calgary: energy/trades). Halifax NS is the thinnest; keep only if backed. |
| Australia | Adelaide, Gold Coast, Newcastle NSW | **Keep as is if indexed and getting impressions**, otherwise consolidate into one "Australia" page. |
| Ireland | Cork, Galway | **Consolidate** into one Ireland page unless each earns its own angle. |
| Single-city countries | Dubai, Cape Town | **Keep and strengthen.** Dubai has a real differentiator (Arabic/English, AED). Cape Town needs a comparable one (currency, load-shedding/hosting resilience, UK/EU time overlap). |
| NZ | Christchurch, Wellington | **Consolidate** into one New Zealand page. |

Net effect: roughly 39 pages become about 24-26 indexable pages plus a stronger /locations hub. Implement noindex through `generateMetadata` in `app/locations/[slug]/page.jsx` (a `noindex` flag in `lib/locations.js`), remove noindexed URLs from `app/sitemap.js` and from the "Elsewhere" grid, and use 301s only when a page is replaced by a consolidated page.

## Citations and directories (Tier 1 not applicable in the usual sense)
- Yelp, BBB and similar US local directories need a local address and are the wrong fit. A Lahore-only listing there would not help city rankings and could mislead. Not checked live (external hosts blocked from this environment).
- Worth doing, in order: LinkedIn company page (exists, keep complete and consistent), Clutch, GoodFirms, DesignRush and Sortlist (web-design agency directories where reviews can be earned from real clients), a GoHighLevel-related partner or expert directory if Flowzync qualifies, Crunchbase, Wikidata-style entity profiles only if notable, and Pakistan listings (Google Business Profile for Lahore if eligible, plus local business directories such as the Lahore Chamber if the studio is a member).
- For the care-agency niche: care sector directories and associations where a supplier listing is allowed.
- Keep the name "Flowzync", the email and the website URL identical across all of them. Add address and phone only if published on-site too.
- Never list a city address that is not a real premises.

## Top 10 actions
1. (High) Owner decision: state "remote studio registered in Lahore" once on /about, /locations FAQ and the footer, or deliberately keep it undisclosed and accept the trust gap (H1).
2. (High) Decide the GBP route: one Lahore profile as a service-area business if premises qualify, otherwise none; never add city profiles or virtual offices (H2).
3. (High) Consolidate or noindex the UK tail and the thin US/NZ/Ireland pages per the table above; check Search Console indexing status first (H3).
4. (High) Add one real, verifiable local proof element per kept page (named project, sector, language or currency angle); rewrite London/New York so they are not near-duplicates.
5. (Medium) Trim `areaServed` to countries actually served and remove the non-schema "Worldwide" `Place`; verify Singapore, Germany, Netherlands and Spain are true (M1).
6. (Medium) Give every kept page a relevant `showcase` project (M3).
7. (Medium) Disambiguate Halifax NS and Newcastle NSW in names and titles (M1).
8. (Medium) Build profiles on Clutch, GoodFirms, DesignRush and Sortlist, add them to `sameAs`, and earn real reviews there (citations).
9. (Low) If a Lahore address is published, switch to `ProfessionalService` with `openingHoursSpecification`, 5-decimal geo and a timezone-labelled schedule (M2).
10. (Low) Vary the repeated "Are you X-based? No..." FAQ frame and the "senior team" meta phrase (M4, L1).

## Limitations
- No DataForSEO or Search Console access, so no local-pack positions, no indexing status for the 39 pages and no real impression data. The "currently not indexed" inference comes only from a code comment.
- Yelp, BBB and directory presence was not checked: external hosts are blocked here. GBP existence for Flowzync was not verified. No reviews exist on the site, so review velocity and response rate could not be assessed.
- Overlap numbers are from saved HTML `<main>` text (39 pages) and measure text similarity, not Google's own judgment. Whether the claim that countries were "actually delivered" is true needs the owner's confirmation.
- Proximity is outside the site's control.
