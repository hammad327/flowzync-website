# Content Quality & E-E-A-T: flowzync.com

Audit date: 2026-11-26. Specialty: content quality, E-E-A-T, duplication/thin content, cannibalisation, readability, freshness, AI citation readiness.
Data: all 188 saved live pages (`raw/pages/*.html`, fetched 2026-11-26). Main text was extracted with trafilatura plus `<main>` text and scored with claude-seo `content_quality.py` (file mode) and `metadata_template.py` (pairs file). Near-duplicate overlap uses 5-word shingles within each page type. Cannibalisation uses TF-IDF cosine on article body text. Source data was read from `lib/*.js` and `content/blog/*.md`.

**The live HTML predates the lead agent's current edits.** The working tree is being changed (33 files modified). Before applying any fix below, check the cited line against the working tree. This report does not cover title or description length (already handled).

---

## Scores

| Category | Score |
|---|---|
| **Content quality (overall)** | **64 / 100** |
| E-E-A-T (internal weighted model) | 53 / 100 |
| AI citation readiness | 70 / 100 |

E-E-A-T breakdown (these weights are this skill's internal model, not Google's):

| Factor | Weight | Score | Basis |
|---|---|---|---|
| Experience | 20% | 50 | 30 real portfolio projects, described carefully. No dates, no client locations, no stated Flowzync role, no outcomes. The blog has almost no first-hand case detail (only 3 "we have seen / in our experience" passages in 70 posts). |
| Expertise | 25% | 70 | Technically accurate, carefully hedged writing. Long posts cite first-party documentation and carry a "Sources and scope" section. Expertise is never tied to a person (organisation byline only, team page hidden by design). |
| Authoritativeness | 25% | 30 | No live testimonials (`lib/testimonials.js` gates every entry on `verified && sourceUrl`; none pass). No reviews, no outbound links to live client sites (28 of 30 project domains are `.example`), no third-party mentions. The only external profile is a LinkedIn company page. |
| Trustworthiness | 30% | 60 | Strong: editorial policy with corrections route, honest "we are not a local agency" answers, privacy and cookie pages, no fake reviews. Weak: the site never says where the business is or what legal entity operates it. One false meta claim (/portfolio). Unevidenced "5+ yrs". Location and industry copy implies local or sector experience it does not show. |

Weighted: 0.2×50 + 0.25×70 + 0.25×30 + 0.3×60 = **53**.

---

## What works

- **No filler and no stock AI phrasing.** `content_quality.py` found 0 filler and 0 AI-pattern matches on all 188 pages (overall_quality 67 to 83, median 72). Words like "seamless", "delve", "landscape", "empower", "robust" and "in today's" appear 0 times.
- **Readability fits the audience.** Median Flesch-Kincaid grade: blog 8.6, services 8.4, locations 8.2, industries 8.9. Median sentence length is 10 to 14 words, and under 5% of sentences run over 30 words.
- **Long blog posts are distinct and well sourced.** 42 posts over 600 words are 83% unique by shingles, with a maximum pairwise Jaccard of 0.12. Each has a ToC, FAQ and "Sources and scope" with first-party links (CQC, WooCommerce, WordPress, Google).
- **FAQs are genuinely page-specific.** 597 distinct FAQ questions in schema. Only 14 appear on two pages, and none on three or more.
- **Services (13) are distinct.** 81% unique shingles, maximum Jaccard 0.12.
- **Honest positioning.** Location FAQs say plainly that Flowzync is not a local agency. `/editorial-policy` covers sourcing, AI assistance, corrections and commercial interest. Portfolio copy describes what was built, not invented results.
- **Freshness dates are visible and honest.** Every post shows a published date, plus an "Updated" date where it applies, matching `article:published_time` and BlogPosting `datePublished`/`dateModified`. I checked the bulk "Updated October 27, 2026" stamp on 29 posts against commit `0314443`. Those were substantive accuracy corrections (for example, removed ranking-factor overclaims in `2026-04-21-local-seo-checklist-small-business.md`), so the policy "we do not change dates merely to make an article look new" holds.
- **Metadata is not templated.** `metadata_template.py` on 188 live pairs: `site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}`.

---

## Critical

None. No content issue here rises to the level of the expired www certificate already logged.

---

## High

### H1. Location pages (39) carry a templated majority and claim local experience without evidence (doorway-page pattern)

**Evidence (measured on saved HTML):**
- 5-word shingles, within the 39 `/locations/*` pages:
  - On average, 40% of each page's text is shared with at least half of the other location pages.
  - Only 44% of shingles are unique to a page. The lowest is 29%, on `/locations/web-design-new-york`.
  - The highest pairwise Jaccard is London vs New York at 0.45. The two pages are built in parallel: "You are paying for the postcode / zip code", "Ranking here takes patience", and "Can you get us ranking for 'web design London/NYC'?".
- City-specific copy (intro + 3 context cards + FAQs in `lib/locations.js`) runs only 196 to 358 words per page. Everything else is the shared template: process steps, service cards, CTA band, area list. The thinnest are Wellington 196, Cardiff 232, Huddersfield 257, Des Moines 268, Galway 269, Miami 276, Ipswich 277, Christchurch 280 and Cape Town 286.
- The context card "Scope before search promises" appears verbatim on 16 of the 39 pages. That is exactly the cross-page boilerplate the header comment in `lib/locations.js` (lines 1 to 20) warns against.
- The hero "Selected Flowzync work" tile (`app/locations/[slug]/page.jsx` line 39 fallback) shows the same 5 Star Quality HVAC project on 23 city pages and Roller Shutters Online on 10. None of the 7 showcased projects is in the city it appears beside (`lib/projects.js` names only Luton and Medway). Placed next to "Web design in Austin", the tile reads as local proof.
- Copy implies local client experience that nothing on the site evidences (house rule: no fabricated claims):
  - Chicago: "Most Chicago projects we take on are replacing something inherited."
  - Austin and Manchester: "Sectors we see most here…". Manchester adds "a steady stream of ecommerce brands outgrowing Shopify's limits".
  - Reading: "Clients here often have in-house developers". It also says "Thames Valley search terms are meaningfully cheaper to compete for than the equivalent London ones", an unsupported competition claim that the "Scope before search promises" rewrite removed from other pages.
  - "Regularly." as the answer to "do you build for [sector]" on Dallas, Birmingham, Boise and Sarasota, and "Yes, regularly" on Adelaide and Newcastle NSW.

**Why it matters:** These are 39 city pages with a shared skeleton, a city-swapped H1, one recycled showcase and a few hundred unique words. Google's doorway and scaled-content policies target exactly this, and demotion can apply to the whole set. The unevidenced experience claims also undercut the honesty these pages otherwise do well.

**Fix (`lib/locations.js`, `app/locations/[slug]/page.jsx`):**
1. **Owner decision, per city: is there a real reason for this page?** That means a client there, enquiries from there, or a market-specific requirement that changes the build (for example Australian Consumer Law on Adelaide and Newcastle, or bilingual and RTL needs on Dubai).
   - **Keep and strengthen** pages that pass. Add at least one verifiable local element: a client project in that city (with permission), a market rule that changes the build, or local integrations (e.g. ServiceTitan/Jobber in US trade markets).
   - **For pages that do not pass**, starting with the nine thinnest above: either set `robots: { index: false, follow: true }` in `generateMetadata`, or 301 them to `/locations` and remove them from `app/sitemap.js`.
   - Fewer pages, each genuinely local, carries less risk than 39.
2. **Remove or evidence the experience claims.** Change "Most Chicago projects we take on…" to "Rebuilds of established sites need…". Change "Sectors we see most here" to "Common sectors in [city]" (a market observation, not a claim about Flowzync's clients). Replace the bare "Regularly." answers with "Yes." followed by the what-it-involves sentence, unless the owner has projects to point to. Delete the Reading "meaningfully cheaper to compete for" sentence.
3. **Replace the 16 copies of "Scope before search promises"** with one market-specific card per city. If no city-specific point exists, that is the signal for step 1.
4. **Rewrite London or New York** so they do not mirror each other.
5. **Showcase tile:** show it only when `l.showcase` is set and relevant, and label it "Example project" rather than implying it is local. Drop the HVAC and Roller Shutters fallback at line 39.

### H2. The /portfolio meta description states two things that are false

**Evidence:** `app/portfolio/page.jsx` lines 12, 15 and 18 say: "…WordPress builds and Shopify stores — each with the story and the results behind it." `lib/projects.js` contains 0 Shopify projects. No project page states a result, and the file's own header forbids results claims (lines 15 to 21).

**Why it matters:** This is a false claim shown in search snippets and social cards, against the house rule and the editorial policy ("Portfolio pages… do not imply independent verification of… results").

**Fix:** In all three places, use: "Browse Flowzync's portfolio: custom websites, GoHighLevel funnels, WordPress and WooCommerce builds, with the brief and design reasoning behind each."

### H3. Who is behind the site is never stated to human visitors

**Evidence:**
- `/about`, `/privacy` ("Who operates this website"), `/contact`, the Organization JSON-LD and the location FAQs ("Where is Flowzync based?" on Dallas, `/locations`) say only "a remote studio serving clients worldwide".
- No rendered page except the deliberately unlinked `/about/team` names anyone. No page mentions the country of operation; the business is registered in Lahore, Pakistan per CONTEXT. A grep across all 188 pages finds "Lahore" and "Pakistan" 0 times.
- `llms.txt` publishes "CEO: Hammad Tahir" and his LinkedIn profile, so machines get information that human visitors do not.
- Organization schema has no `address`, `foundingDate` or `legalName`.

**Why it matters:** Trust is the heaviest E-E-A-T factor, and the QRG asks who is responsible for the site and how to reach them. The location pages make a virtue of honesty ("we say so rather than implying a local office"), yet the honest answer to "where are you based?" is never given. A visitor who later finds the Pakistan registration (Companies House, invoices, LinkedIn) may read the omission as concealment. The privacy notice should also identify the controller.

**Fix (owner choice; this does not require linking `/about/team`):**
- Add one factual line to `/about` (`app/about/page.jsx`, the "Where does Flowzync work from?" FAQ), `/privacy` (`app/privacy/page.jsx` line 8, first section) and the location FAQ answers. For example: "Flowzync is a remote studio registered in Lahore, Pakistan, working with clients worldwide on their business hours." Add the legal entity name where one exists.
- Mirror it in Organization JSON-LD (`address` with `addressLocality: Lahore`, `addressCountry: PK`) and in `llms.txt` "Facts worth quoting accurately".
- If the owner wants a named person visible without exposing the team, a single "Founded and led by Hammad Tahir" line on `/about` matches what `llms.txt` already publishes. Otherwise consider removing CEO from `llms.txt` so human and machine facts match.

### H4. Unsupported statistics and outcome claims in the care niche and core blog posts

**Evidence:**

| Page / file | Claim |
|---|---|
| `/services/ghl-funnels-for-care-agencies` (lib/services.js / lib/serviceDetails.js) | "Families contact three or four providers in one evening" (6 variants on this page); "wins a meaningful share of those on responsiveness alone"; "the single highest-return automation in this sector" |
| Same claim across the site | Appears on 15 pages, including 5 times on `/industries/care-homes-and-home-care`, plus why-care-agencies-lose-enquiries, care-agency-crm, carer-recruitment, the DAS Care portfolio page and others. Never sourced. The blog description says "three providers", the service page says "three or four". |
| `content/blog/2026-08-26-why-care-agencies-lose-enquiries.md` line 46 | "We have seen providers… add an automatic acknowledgement, and see their conversion from enquiry to assessment visit rise noticeably." This is a performance claim, and `/editorial-policy` says performance claims need records. |
| `content/blog/2026-04-21-local-seo-checklist-small-business.md` line 20 | "Most local businesses do about 40% of it" (invented statistic) |
| `2026-07-28-google-business-profile-optimization-checklist.md` lines 3 and 20; local-seo FAQ line 11 | "reliably outperforms the first several months of a paid SEO retainer"; description "the two that decide your ranking" |
| `2026-03-24-elementor-vs-custom-wordpress-theme.md` line 35 | "Typically 30–50% less build time" (not labelled as an estimate) |
| `lib/industries.js` | Veterinary: "Practices that make plans comparable online consistently sign up more members". Accountants: "the single change that most reliably increases qualified enquiries". Legal: "dramatically reduce unqualified enquiries". SaaS: "consistently among the highest-converting pages" and "reliably some of the best-converting traffic". Dental: "cut no-shows measurably". Veterinary: "removes a large share of the calls" |
| `app/llms.txt/route.js` line 32 | "across 12+ countries". This is the count of the `serviceArea` list and reads as a claim about where clients actually are. |
| `app/about/page.jsx` line 76 | "5+ yrs Craft & counting". No founding date appears anywhere to support it. |

**Why it matters:** The care cluster is the site's target niche, and its central premise rests on one unsourced, inconsistently stated number. Answer engines will quote it as Flowzync's statistic. These claims break the house rule and the site's own editorial policy, and they are the "unverifiable claims" pattern the QRG treats as low trust.

**Fix:**
- Rewrite the care premise as a mechanism, not a statistic: "Families often contact more than one provider in the same evening, so the first clear reply has an advantage." Use it once per page, not 5 or 6 times. If a source exists (for example a sector survey), cite it once in "Sources and scope".
- Line 46: either name a permissioned client example with what was measured and when, or rewrite as "An automatic acknowledgement removes the gap in which families move on to the next provider."
- Delete "about 40%". Change "reliably outperforms…" to "is usually the best-value first step". Change "the two that decide your ranking" to "the two that matter most". Label "30–50%" as "in our estimate".
- In `lib/industries.js`, replace the "consistently / reliably / dramatically / measurably / large share" sentences with descriptive statements of what the feature does.
- `llms.txt`: "Accepts projects from clients in:" in place of "across 12+ countries".
- About: replace "5+ yrs" with a verifiable fact (founding year), or remove it.

### H5. Industry template asserts audits in 19 sectors (7 with no work shown), with a visible typo bug

**Evidence:**
- `app/industries/[slug]/page.jsx` line 147 renders "These are the issues we find on almost every {trade} website we audit" on all 19 industry pages.
- 7 of those pages have no "Work we have done in this sector" block, so no sector project exists: accountants-and-bookkeepers, automotive-and-transport, charities-and-nonprofits, ecommerce-and-retail, recruitment-and-staffing, saas-and-technology and veterinary-practices.
- The `.replace(/s$/, '')` on that line produces visible errors: "beauty, wellness & **fitnes** website", "local & small **busines** website", "accountants & bookkeeper", "charities & non-profit", "financial & mortgage adviser", plus a lowercase "saas".
- Line 130 also says "We build for every business in this sector. If yours isn't named below, it almost certainly still fits".

**Why it matters:** An experience claim with no evidence across 7 sectors, on a template, with typos that signal machine assembly to readers and raters.

**Fix:** Change line 147 to `<p>Common problems on {i.label} websites, and what we change first.</p>`. Use a display label field rather than string surgery, or drop the trailing-s regex. For the 7 sectors without work, either add a real project or keep the page descriptive, with no "we audit" or "we fix" phrasing.

---

## Medium

### M1. Cannibalisation: pages competing for the same query

TF-IDF cosine similarity on body text (above 0.40 is notable for this site). Each entry gives the action.

| # | Pages | Sim. | Overlap | Action |
|---|---|---|---|---|
| 1 | `/blog/gohighlevel-for-care-agencies` vs `/services/ghl-funnels-for-care-agencies` | 0.41 | Same head term in both titles ("GoHighLevel for Care Agencies: A Practical Guide" vs "GoHighLevel for Care Agencies \| Flowzync"). Same FAQ "Is GoHighLevel suitable for a care agency?" in both schemas. This is the site's target niche query. | **The service page owns "gohighlevel for care agencies".** Retitle the post to an evaluative angle, e.g. "Is GoHighLevel Worth It for a Home Care Agency? What It Replaces and What It Doesn't" (`content/blog/2026-09-04-gohighlevel-for-care-agencies.md` title, seoTitle, H1). Remove the duplicated FAQ from one of them. Link from the post to the service page with the exact-match anchor. |
| 2 | `/blog/why-care-agencies-lose-enquiries` vs the same service page | 0.41 | The service FAQ "Why do care agencies lose enquiries?" duplicates the post's H1 query. | Remove that FAQ from the service page (`lib/serviceDetails.js` / services FAQ data) and link to the post instead. |
| 3 | `/blog/care-agency-crm-what-to-look-for` vs `/blog/gohighlevel-for-care-agencies` | 0.49 | Both walk through two pipelines, instant acknowledgement and document chasing. | Keep the CRM post vendor-neutral (requirements checklist, data protection, when not to buy). Move GoHighLevel-specific feature detail into the GHL post and replace it with a link. |
| 4 | `/industries/care-homes-and-home-care` vs the care cluster | 0.33 | The niche page is titled "Websites for Care Homes, Home Care & Nurseries" and covers Ofsted and nurseries. The homepage anchor is "Care & childcare". | Refocus the H1, intro and "Who this covers" list (`lib/industries.js` ~line 569) on home care and domiciliary agencies to match the cluster. Move childcare to one line, or to `/industries/education-and-training`, which already lists nurseries and preschools. |
| 5 | `/blog/google-business-profile-optimization-checklist` vs `/blog/local-seo-checklist-small-business` | **0.52** | The local SEO checklist items 1, 5 and 6 (GBP, reviews, replies) restate the GBP checklist. | **The GBP checklist owns "google business profile optimisation".** In the local SEO checklist, cut items 1, 5 and 6 to two-line summaries linking to it. Keep `/blog/google-business-profile-not-showing-in-maps` (troubleshooting intent) and cross-link. |
| 6 | `/blog/google-business-profile-holiday-hours` (444 words) vs the GBP checklist | 0.42 (with city-pages post) | Seasonal micro-post on a sub-topic of the checklist. | Merge into the GBP checklist as a "Holiday and special hours" section, then 301. |
| 7 | `/blog/how-much-does-a-wordpress-website-cost` vs `/blog/cheap-website-design-what-you-actually-get` | 0.44 | Both give price bands and post-launch running costs. | **The cost post owns "wordpress website cost".** The cheap-website post keeps the £500-budget angle, drops its own running-cost breakdown and links to the cost post. Check that figures agree (both put sub-£800 at template level; keep them aligned). |
| 8 | `/blog/website-project-timeline-client-delays` (441 words) vs `/blog/how-long-does-it-take-to-build-a-website` | 0.32 | The timeline post already says "Almost every project we have run late ran late because copy or photographs were not ready". | Merge the delays post into the timeline post as a "What delays a project" section, then 301. |
| 9 | GoHighLevel micro-posts: `stop-follow-up-after-booking`, `rescheduled-appointment-reminders`, `lead-assignment-no-owner`, `duplicate-contacts-form-routing` | 0.40 to 0.51 between pairs | Four ~420-word posts on workflow exit conditions and routing, all published 6 to 19 Nov. | Either consolidate into one "GoHighLevel workflow fixes: follow-ups, reminders, routing and duplicates" guide with anchored sections (301 the four), or expand each to standalone depth with the exact trigger and filter settings and annotated screenshots. Merge at least the booking-stop and reschedule-reminder pair. |
| 10 | WooCommerce seasonal posts: `woocommerce-coupon-testing`, `woocommerce-black-friday-sale-ends`, `woocommerce-holiday-shipping-cutoff`, `merchant-center-price-mismatch` vs `woocommerce-black-friday-checklist` | 0.35 to 0.41 | Each already links back to the checklist as its parent. | After the season, fold coupon-testing and sale-ends into the checklist as sections and 301. Keep merchant-center and shipping-cutoff only if they get search impressions in GSC. |
| 11 | `/industries/home-and-property-services` vs `/industries/local-and-small-business` | 0.44 | Local & small business is a catch-all ("Any sector not listed above") that overlaps home services and the location pages. | Reframe it as "Local SEO-led websites for small businesses", with content distinct from trades, or merge into `/industries`. |
| 12 | Industry pages that list other industry pages as sub-sectors | n/a | `/industries/healthcare-and-medical-practices` lists "Dental practices" and "Veterinary surgeries". `/industries/legal-and-professional-services` lists accountants, financial advisers and recruitment agencies. Each has its own page. | Remove those entries from the "Who this covers" lists in `lib/industries.js` and link to the dedicated pages instead. |
| 13 | AI-visibility posts: `how-to-get-your-business-mentioned-by-ai-chatgpt`, `ai-search-visibility-dashboard-small-business`, `bing-ai-performance-topics-portfolio-small-business`, `ai-search-service-page-comparison-questions` | 0.32 to 0.36 | Adjacent but separable intents. | Keep. Make the ChatGPT post the hub and link the other three from it with distinct anchors. |

### M2. 28 near-identical short posts published in 16 days (scaled-content pattern)

**Evidence:**
- 28 posts are 400 to 470 rendered words, roughly 300 to 360 words of body ("2 min read"). All were published between 2026-11-05 and 2026-11-20, about 1.75 a day, at scheduled `03:00Z` times.
- Every one shares the same skeleton: a hook paragraph, two H2s, one first-party documentation link, a link to a pillar post, and the "Keep reading" and CTA blocks. None has FAQs or a "Sources and scope" section.
- Shingle uniqueness is 67% (vs 83% for long posts). `content_quality.py` scores them 68 to 69 with a low-density flag.
- Examples: `/blog/woocommerce-refund-test-before-launch`, `/blog/wordpress-form-thank-you-page`, `/blog/gohighlevel-lead-assignment-no-owner`, `/blog/portfolio-case-study-without-metrics`.

**Why it matters:** Each post is accurate and specific; this is not junk. But the cadence and uniform template are what scaled-content evaluation looks for, and they dilute the 42 strong posts.

**Fix:**
- Pause the micro-post format.
- Apply the merges in M1 #6, #8, #9 and #10.
- For the rest, expand only those with GSC impressions to 800+ words with first-hand detail (a real configuration screenshot, a "what we check on handover" list) and a "Sources and scope" block. Leave the others as they are, but stop adding more.

### M3. Portfolio pages give no verifiable experience signals

**Evidence:**
- 30 project pages (300 to 370 words of body). No year delivered, no client location (except DAS Care "Luton" and the Medway drains project), and no statement of Flowzync's role (design only? build? automation?).
- 28 of 30 `site:` values in `lib/projects.js` are `.example` placeholders, and no page links to a live client site, not even `myersinsuranceadvisors.com` or `elevateassistsolutions.com`.
- No client quote is live (testimonials are correctly gated).
- `content_quality.py` average is 69, the lowest page type. 5 of the 10 lowest-scoring pages site-wide are portfolio pages: jre-services, gym-email-template-design, medical-spa-website, nf-living, travel-agency-website.

**Why it matters:** The portfolio is the site's main Experience evidence, and right now nobody can verify it.

**Fix (`lib/projects.js` + `app/portfolio/[slug]/page.jsx`):**
- Add fields that require no invented claims: `year`, `clientLocation`, `role` (e.g. "Design + WordPress build + GoHighLevel automation"), `platform`, and `liveUrl` where the client permits a link. Render them as a small facts list (also quotable for AI answers).
- Ask 3 to 5 clients (DAS Care, Roller Shutters Online, NF Living, Heaven Sent Sleep, Myers) for a one-line quote with a `sourceUrl`. The existing gate in `lib/testimonials.js` then publishes them safely.
- Merge or strengthen the two email-template entries (`gym-email-template-design`, `digital-marketing-email-template-design`), which are thin as standalone case studies.

### M4. First-person "I" voice under an organisation byline

**Evidence:**
- 7 posts use "I" headings or voice: "What I would not pay for yet" (local-seo-checklist), "What I would actually advise" (cheap-website-design), plus how-much-does-a-wordpress-website-cost, why-is-my-website-not-showing-up-on-google, elementor-vs-custom-wordpress-theme, website-traffic-but-no-leads and does-my-business-need-a-blog.
- The WordPress cost description says "Written by someone who sends these quotes".
- `/editorial-policy` says "The byline identifies the studio". The old `author: "Hamza Khan"` frontmatter was removed in favour of the studio byline.

**Why it matters:** An unnamed "I" leaves readers asking who is speaking, which undermines the transparency the editorial policy sets up.

**Fix:** Switch these to "we" ("What we would not pay for yet"). Change the cost description to "Written by a studio that sends these quotes, so read it sceptically."

### M5. A self-undermining trust line in the WordPress cost post

**Evidence:** `content/blog/2026-01-14-how-much-does-a-wordpress-website-cost.md` line 74 lists "an offshore reseller" among the reasons a cheap quote is risky. Flowzync is itself a remote studio registered outside the UK, US and EU markets it serves.

**Fix:** Replace it with "a reseller who subcontracts the build without telling you". That names the actual risk, and the studio does not fall into it.

### M6. Templated service headings lowercase brand and product names

**Evidence:** In `app/services/[slug]/page.jsx`, lines 151, 171, 261 and 270 apply `s.title.toLowerCase()`. This renders H2s such as "Everything inside **gohighlevel** for care agencies", "How we deliver **ghl crm & saas setup**", "Ready to start your **ui/ux design** project?", "seo optimization", "woocommerce development" and "wordpress website design". The same four-heading skeleton appears on all 13 service pages.

**Fix:** Drop `.toLowerCase()` and use the title as written, or add a `titleLower` field for natural prose. Vary at least one H2 per service using the existing `serviceDetails` data.

### M7. "Low information density" on every page

**Evidence:** `content_quality.py` flags all 188 pages `low-density` (`information_density` 0.03 to 0.10). Only 7 of 70 posts use a table.

**Why it matters for AI citation:** Answer engines quote concrete, self-contained facts: numbers, named tools, steps, comparisons.

**Fix:** Without inventing data, add structured, factual blocks:
- Comparison tables in the vs-posts that lack one (GoHighLevel vs HubSpot, WordPress vs GoHighLevel, Elementor vs custom).
- Step lists with named settings in the how-to posts.
- On service pages, a "What's included / not included / typical deliverables" table drawn from the existing `serviceDetails` content.

---

## Low

- **L1. Stylistic tics read as machine house style.**
  - Counts across 117,930 extracted words: "rather than" 272 (on 120 pages; portfolio 5.2 per 1k words, locations 3.2 per 1k), "actually" 177 (92 pages), "genuinely" 107 (70 pages), "properly" 56, "honest/honestly" 47, "quietly" 27.
  - Titles contain "Actually" 5 times and "Honest" 3 times ("Does My Business Actually Need a Blog? An Honest Answer", "Does Website Speed Affect SEO Rankings? An Honest Answer").
  - Fix: one editing pass to cut "actually" and "genuinely" by about two-thirds, recast half the "X rather than Y" contrasts as plain statements, and retire "An Honest Answer" from titles.
- **L2. A year in a title will go stale.** `/blog/how-much-does-a-wordpress-website-cost` is titled "…in 2026?". Schedule a substantive price review and title update for early January 2027 and record it under "Updated".
- **L3. Updates have no changelog.** 29 posts share "Updated October 27, 2026". The updates were genuine, but readers cannot tell what changed. Add a one-line "What changed" note under "Sources and scope" for future updates, as the editorial policy implies.
- **L4. Evergreen commercial pages carry no review date.** Services, industries, locations and portfolio show no "last reviewed" date. For regulation-sensitive copy (care/CQC FAQs on `/industries/care-homes-and-home-care` and `/services/ghl-funnels-for-care-agencies`, Australian Consumer Law on Adelaide and Newcastle NSW), show "Last reviewed: <date>".
- **L5. Locale pages declare English at document level.** `/es`, `/fr`, `/de` and `/ar` are honest single landing pages of 393 to 503 words, appropriately scoped. However, `<html lang="en">` sits on all four; the correct `lang`/`dir` is only on an inner `<div>` (`app/[locale]/page.jsx` line 63), and nav and footer stay English. Organization `contactPoint.availableLanguage` lists only English while `/es` offers Spanish documentation. Hand this to technical/i18n. For content: add one language-specific proof point per locale (e.g. a bilingual or RTL project for `/ar`) if one exists.
- **L6. Junk draft post in the repo.** `content/blog/2026-10-29-testing.md` (`draft: true`, returns 404 live) contains repeated filler copied from the WordPress cost post. Delete it so it cannot be published by accident.
- **L7. Secondary metadata flags** (pre-rewrite live data). `brand-suffix-in-description` on 13 pages (/, /about, /ar, /blog, /contact, /cookies, /editorial-policy, /portfolio, /privacy, /services, /services/graphic-design, /portfolio/digital-marketing-agency-website, /portfolio/heaven-sent-sleep-baby-care-funnel). `description-echoes-title` on /services/woocommerce-development. Low severity, and the lead's rewrite may already cover them.
- **L8. Meta-style card copy.** On `/portfolio` and the Heaven Sent Sleep pages, the visible card description reads as SEO copy ("Explore the Heaven Sent Sleep funnel design in Flowzync's portfolio, including the page structure…"). Use the project's real one-line `desc` instead.

---

## AI citation readiness: 70 / 100

**Strong:**
- Answer-first intros on long posts.
- "In this guide" ToC and question-shaped H2s.
- FAQPage on all main page types, with 597 unique questions.
- BlogPosting with dates.
- "Sources and scope" sections with first-party citations.
- `llms.txt` with a "Facts worth quoting accurately" section.
- Clear statements that Flowzync is not based in the listed cities.

**Holding it back:**
- No country or legal entity to cite (H3).
- Unsourced core statistic in the niche cluster (H4).
- Organisation-only authorship with no stated expertise basis.
- Low fact density and few tables (M7).
- Portfolio facts (year, role, location) not exposed as structured text (M3).

---

## Rewrite / merge / strengthen list (priority order)

1. **Fix now (one-line edits):**
   - `app/portfolio/page.jsx` description (H2).
   - `app/industries/[slug]/page.jsx` line 147 (H5).
   - `app/services/[slug]/page.jsx` lowercase headings (M6).
   - `app/about/page.jsx` line 76 "5+ yrs" (H4).
   - `llms.txt` "12+ countries" (H4).
2. **Rewrite claims:** the care-cluster statistic across 15 pages, `why-care-agencies-lose-enquiries` line 46, `local-seo-checklist` line 20, the GBP checklist, and the `lib/industries.js` overclaims (H4). Also the location experience claims (H1.2).
3. **Add a "who operates this site" fact:** /about, /privacy, location FAQs, Organization schema (H3; owner decision).
4. **Location pages:** decide which to keep, then strengthen the kept set and noindex or 301 the rest, starting with Wellington, Cardiff, Huddersfield, Des Moines, Galway, Miami, Ipswich, Christchurch and Cape Town. Rewrite the London/New York pair. Remove the 16 boilerplate cards (H1).
5. **Retitle or refocus:**
   - `/blog/gohighlevel-for-care-agencies` (evaluative angle).
   - `/industries/care-homes-and-home-care` (home care agencies, not nurseries).
   - De-duplicate FAQs with the care service page (M1 #1 to #4).
6. **Merge and 301:**
   - google-business-profile-holiday-hours into google-business-profile-optimization-checklist.
   - website-project-timeline-client-delays into how-long-does-it-take-to-build-a-website.
   - gohighlevel-stop-follow-up-after-booking and gohighlevel-rescheduled-appointment-reminders into one post.
   - After the season, woocommerce-coupon-testing and woocommerce-black-friday-sale-ends into woocommerce-black-friday-checklist (M1, M2).
7. **Differentiate:** cut the GBP section of local-seo-checklist to a summary with a link. Drop the duplicate cost breakdown from cheap-website-design (M1 #5, #7).
8. **Strengthen the portfolio:** year, role, location and live link fields, plus 3 to 5 permissioned client quotes (M3).
9. **Editing pass:** "I" to "we" in 7 posts (M4), the "offshore reseller" line (M5), stylistic tics (L1).

---

## Structured findings (audit-data.json, category "Content Quality")

```json
{
  "category": "Content Quality",
  "score": 64,
  "eeat": {"experience": 50, "expertise": 70, "authoritativeness": 30, "trustworthiness": 60, "weighted": 53},
  "ai_citation_readiness": 70,
  "metrics": {
    "content_quality_py": {"pages": 188, "median_overall_quality": 72, "range": [67, 83], "filler_matches": 0, "ai_pattern_matches": 0, "low_density_flag_pages": 188},
    "readability_fk_grade_median": {"blog": 8.6, "services": 8.4, "industries": 8.9, "locations": 8.2, "portfolio": 9.0},
    "near_duplicate_5gram": {
      "locations": {"n": 39, "shared_boiler_mean": 0.40, "unique_mean": 0.44, "unique_min": 0.29, "max_jaccard": 0.45, "max_pair": ["web-design-london", "web-design-new-york"], "city_specific_words_range": [196, 358]},
      "industries": {"n": 19, "shared_boiler_mean": 0.24, "unique_mean": 0.67, "max_jaccard": 0.22},
      "services": {"n": 13, "unique_mean": 0.81, "max_jaccard": 0.12},
      "portfolio": {"n": 30, "unique_mean": 0.66, "max_jaccard": 0.21},
      "blog_long": {"n": 42, "unique_mean": 0.83, "max_jaccard": 0.12},
      "blog_short": {"n": 28, "unique_mean": 0.67, "max_jaccard": 0.19, "published_window": ["2026-11-05", "2026-11-20"]}
    },
    "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}}
  },
  "findings": [
    {"id": "H1", "severity": "high", "title": "Location pages templated (40% shared, 196-358 unique words) with unevidenced local-experience claims", "files": ["lib/locations.js", "app/locations/[slug]/page.jsx"]},
    {"id": "H2", "severity": "high", "title": "/portfolio meta description claims Shopify stores and results that do not exist", "files": ["app/portfolio/page.jsx"]},
    {"id": "H3", "severity": "high", "title": "Operator identity/country never stated to visitors; llms.txt names CEO while site does not", "files": ["app/about/page.jsx", "app/privacy/page.jsx", "lib/locations.js", "app/llms.txt/route.js"]},
    {"id": "H4", "severity": "high", "title": "Unsourced statistics and outcome claims (care '3-4 providers' on 15 pages, '40%', 'reliably outperforms', industry overclaims, '5+ yrs', '12+ countries')", "files": ["lib/services.js", "lib/serviceDetails.js", "lib/industries.js", "content/blog/2026-08-26-why-care-agencies-lose-enquiries.md", "content/blog/2026-04-21-local-seo-checklist-small-business.md", "content/blog/2026-07-28-google-business-profile-optimization-checklist.md", "content/blog/2026-03-24-elementor-vs-custom-wordpress-theme.md", "app/about/page.jsx", "app/llms.txt/route.js"]},
    {"id": "H5", "severity": "high", "title": "Industry template claims audits in 19 sectors (7 with no work) and renders typos ('fitnes', 'busines')", "files": ["app/industries/[slug]/page.jsx"]},
    {"id": "M1", "severity": "medium", "title": "Cannibalisation: GHL-for-care blog vs service; GBP vs local SEO checklists (0.52); WP cost vs cheap website (0.44); GHL micro-posts; WooCommerce seasonal posts; home vs local industries", "files": ["content/blog/*", "lib/industries.js", "lib/serviceDetails.js"]},
    {"id": "M2", "severity": "medium", "title": "28 uniform ~330-word posts in 16 days (scaled-content pattern)", "files": ["content/blog/2026-11-*"]},
    {"id": "M3", "severity": "medium", "title": "Portfolio lacks year/role/location/live links/testimonials", "files": ["lib/projects.js", "app/portfolio/[slug]/page.jsx", "lib/testimonials.js"]},
    {"id": "M4", "severity": "medium", "title": "First-person 'I' voice under organisation byline in 7 posts", "files": ["content/blog/*"]},
    {"id": "M5", "severity": "medium", "title": "'offshore reseller' line undermines trust for a remote studio", "files": ["content/blog/2026-01-14-how-much-does-a-wordpress-website-cost.md"]},
    {"id": "M6", "severity": "medium", "title": "Service H2s lowercase brand names via toLowerCase()", "files": ["app/services/[slug]/page.jsx"]},
    {"id": "M7", "severity": "medium", "title": "Low information density sitewide; 7/70 posts use tables", "files": ["content/blog/*", "lib/serviceDetails.js"]},
    {"id": "L1", "severity": "low", "title": "Stylistic tics: 'rather than' x272, 'actually' x177, 'genuinely' x107", "files": ["sitewide"]},
    {"id": "L2", "severity": "low", "title": "'in 2026' title will date in January 2027", "files": ["content/blog/2026-01-14-how-much-does-a-wordpress-website-cost.md"]},
    {"id": "L3", "severity": "low", "title": "Add 'what changed' notes to updated posts", "files": ["content/blog/*"]},
    {"id": "L4", "severity": "low", "title": "No 'last reviewed' date on regulation-sensitive commercial pages", "files": ["app/industries/[slug]/page.jsx", "app/services/[slug]/page.jsx", "app/locations/[slug]/page.jsx"]},
    {"id": "L5", "severity": "low", "title": "Locale pages: html lang=en, English chrome, schema language English only", "files": ["app/[locale]/page.jsx", "app/layout.jsx"]},
    {"id": "L6", "severity": "low", "title": "Delete junk draft content/blog/2026-10-29-testing.md", "files": ["content/blog/2026-10-29-testing.md"]},
    {"id": "L7", "severity": "low", "title": "brand-suffix-in-description on 13 pages; description-echoes-title on woocommerce-development", "files": ["various"]},
    {"id": "L8", "severity": "low", "title": "Meta-style visible card copy on Heaven Sent Sleep", "files": ["lib/projects.js"]}
  ]
}
```

Working files (scratch, not part of the repo): extraction, shingle and TF-IDF scripts and outputs in `/tmp/claude-0/-home-user-flowzync-website/f5c08a74-d5b0-5216-9d57-a4644a75c3c8/scratchpad/` (`pages.json`, `dup.json`, `cq.txt`, `loc.json`, `mt.json`).
