# SXO (Search Experience) findings: flowzync.com, 2026-11-26

Specialty: search experience. That means what the SERP rewards for each money page's primary query, page-type fit, the answers a visitor needs above the fold, personas, and pages that compete with each other.
This is not the SEO Health Score.

## SXO Gap Score: 60 / 100 (category score)

| Page | Primary query it should win | Page type | Mismatch | SXO Gap Score |
|---|---|---|---|---|
| / | `flowzync` (brand) + "web design and GoHighLevel studio" | Brand home | HIGH (brand SERP not owned) | 63 |
| /services/custom-website-design | custom website design services (small business) | Service | ALIGNED | 64 |
| /services/ghl-funnels | gohighlevel funnel building service | Service | MEDIUM (SERP is priced gig packages) | 60 |
| /services/ghl-funnels-for-care-agencies | GoHighLevel setup for home care agencies (UK) | Service | MEDIUM (head term SERP is guide/hybrid), plus HIGH cannibalisation and market ambiguity | 58 |
| /services/wordpress-website-design | wordpress website design services | Service | ALIGNED | 65 |
| /industries/care-homes-and-home-care | home care / care home website design UK | Service (industry) | ALIGNED, intent diluted by childcare | 62 |
| /locations/web-design-{london,austin,dubai,manchester} | web design {city} (realistically long-tail variants) | Service with city | MEDIUM (directories + local pack; no local presence) | 49 |
| /portfolio | flowzync portfolio; supports "gohighlevel funnel examples" and "home care website examples" | Collection / gallery | ALIGNED | 72 |

The score is the unweighted mean of the 8 rows above (location pages count as one row), rounded down to 60 because the weakest row is the site's target niche.

### Lead finding (the key insight)
None of the money pages answers the four questions the SERP answers for its competitors: what it costs, where you work, proof that you have done this before, and what happens when I click.
- Every SERP checked shows price signals near the top: WebFX "from $8,000", Fiverr/Upwork GHL gigs at $55 to $250, Clutch average project cost $10k to $49k (London, Dubai), Softomate GHL UK domiciliary care setup £1,500 to £3,000, and UK tradesman cost guides at £300 to £3,000.
- Flowzync publishes no figure anywhere on a money page. The site's own content argues the opposite:
  - /industries/care-homes-and-home-care headlines "Fees deliberately obscured" as a problem.
  - /blog/should-home-care-agencies-publish-prices recommends publishing a range.
  - /blog/how-much-does-a-wordpress-website-cost already states market ranges ("most small business WordPress sites land between £1,500 and £6,000").
- The hero is a template on all service pages (app/services/[slug]/page.jsx:96-110). It is an H1, one lede paragraph, "Get a free quote" to a bare /contact, and "See related work" to the unfiltered /portfolio. There is no audience, market, price or timeline line, and the proof link goes to 30 unrelated projects.

There are no Critical SXO findings. The only Critical issue site-wide is the expired www TLS certificate, which was already established elsewhere.

---

## SERP evidence (WebSearch, 2026-11-26)

WebSearch worked for this run. It returns ranked result lists and a synthesis, but no rendered Google features (PAA, ads, local pack and AI Overview were not visible). See Limitations.

| Query | What ranks (top results) | Consensus type (taxonomy) | Notable signals |
|---|---|---|---|
| gohighlevel for home care agencies | Fiverr gig, 5 app.gohighlevel.com preview/snapshot pages, growwstacks case study, netpartners.marketing senior-care GHL articles (x2), Keragon integration, home-services GHL guides | Hybrid / guide (about 60%), snapshot landing pages (about 30%) | US senior-care framing ("HIPAA-friendly", plan prices $97 / $197 / $297). No official GHL care page. |
| gohighlevel for care agencies UK | softomatesolutions.com (GHL for UK domiciliary care 2026, plus 8 more Softomate GHL-for-X-UK guides), dev.to UK GHL guides, Fiverr | Blog guide from a service vendor (about 80%) | The domiciliary guide states setup cost (£1,500 to £3,000), an enquiry > assessment > package > funding pipeline, and a carer pipeline with DBS / right-to-work checks. One vendor runs the same programmatic "GHL for [sector] UK" pattern. |
| home care agency website design UK | webpopdesign.com/home-care-web-design, designthing.co.uk/industry-care, splitpixel.co.uk, sagapixel.com/web-design/home-care-agencies, webfx in-home-care, homecare.co.uk and carehome.co.uk supplier listings, Trustpilot (websitesforhomecare), bwebsites Clarendon Home Care case study | Service page, industry vertical (about 60%), directory (about 25%) | CQC information, local SEO, enquiry forms, a stated timeline (Webpop: 10 to 12 weeks), named care case studies, Trustpilot reviews. |
| care home website design | plmr.co.uk guide, carelearning.org.uk guide, Drupal case study, webfx, carehome.co.uk suppliers, designthing, webpop, dbswebsite examples, the215guys best practices | Mixed: guides (about 50%), service pages (about 40%) | Real photography, CQC/CMA compliance, key info within one click, families as the audience. |
| custom website design services small business | Dribbble services, DesignRush directory (many pages), webfx SMB, seahawkmedia, newmedia, straightnorth | Service page (about 50%), directory/marketplace (about 50%) | Price depends on pages/features, affordable starting packages, DIY vs agency framing. |
| gohighlevel funnel building service | Fiverr gig listings (about 17 of 19), Upwork service products | Product-like packaged gig (about 90%) | Fixed starting prices ($10 to $250, cluster around $80), tiers (Starter $55 / Standard $155), seller reviews, deliverables list. |
| gohighlevel expert for coaches funnel setup | Upwork x3, Fiverr x17 | Packaged gig (about 100%) | Booking + CRM + email/SMS bundle, migrations from Kajabi / ClickFunnels / Systeme.io, job-success %. |
| gohighlevel funnel examples portfolio | Fiverr, Dribbble profiles, Contra case studies, GHL preview page, supplygem templates, convertflow examples | Gallery / collection (about 70%) | Visual examples by niche, demo vs client work disclosed. |
| wordpress website design services | inmotionhosting, webfx (from $8,000, instant quote calculator), seahawkmedia, wpbeginner services, themeisle (Trustpilot 4.8), clutch WordPress directory | Service page (about 60%), directory (about 30%) | Public starting prices, plans, ratings. |
| web design london | clutch.co London (2,947 companies; $10k to $49k average), finnpartners, webfx london, digitalsilk london, cbwebsitedesign, thriveagency, startups.co.uk "Top 5", dotgo.uk | Directory / listicle (about 45%), multi-city agency city page (about 45%) | Third-party rankings, average project cost. A local pack is likely but was not visible. |
| web design austin | clutch (539), builtin.com list, newmedia, digitalsilk, designrush, thrive, bigdropinc, gartner/digitalmarkets, semrush agencies ("from $1,000"), yahoo local, BBB, cyberoptik | Directory / listicle (about 55%), agency city page (about 45%) | BBB / Yahoo local / Clutch Leaders Matrix all appear. Local-directory signal. |
| web design dubai | clutch AE (1,035), cake.me, designrush, purrweb list, passionates, globalmediainsight, riseuplabs list, semrush, seahawk list, onelittleweb | Directory / listicle (about 60%), local agency (about 40%) | Bilingual and conversion focus; $1,000 to $49k price ranges quoted. |
| website for tradesman UK cost | designingbuildings wiki, trendjackers cost guide, checkatrade, hazcott cost guides (x6), ueni, dotgo trades, markel | Cost guide (about 80%) | £300 to £3,000 one-off, £20 to £30 per month subscriptions, £3k to £8k agency. |
| flowzync | producthunt "flowsync", docker, docs.rs "flowync", hackquest, flowsync pages.dev | Not owned | flowzync.com does not appear; the engine treats it as a misspelling of "flowsync". |

---

## Findings

### HIGH

**H1. GHL-for-care: own blog post competes with the flagship service page, and the market (UK vs US) is never stated**
- Evidence:
  - Live titles and H1s:
    - /services/ghl-funnels-for-care-agencies has title "GoHighLevel for Care Agencies | Care Enquiry Automation" and H1 "GoHighLevel for Care Agencies".
    - /blog/gohighlevel-for-care-agencies has title "GoHighLevel for Care Agencies: A Practical Guide" and H1 "GoHighLevel for Care Agencies: What It Actually Does".
  - The working copy of lib/services.js:107 shortens the service title to "GoHighLevel for Care Agencies | Flowzync", which makes the overlap exact.
  - The SERP for this head term rewards vendor guides (Softomate UK domiciliary guide, netpartners senior-care articles). That is the format of the blog, so Google may prefer the blog URL over the service page.
  - The service page body contains "UK" 0 times, "CQC" 0 times and "US/HIPAA" 0 times. It does use UK-only vocabulary (DBS, right-to-work, local authority, hospital discharge).
  - The unqualified query "gohighlevel for home care agencies" returns US senior-care content (HIPAA, $97/$297 plans). A US agency owner will land on DBS/right-to-work copy without being told the page is UK-built.
  - The meta description (lib/services.js:109) promises "CQC-aware forms", but the body never mentions CQC.
- Why it matters: this is the site-wide target niche. Two URLs split relevance for one query, and the page that wins is likely to be the one without a commercial CTA in its first screen.
- Fix:
  1. lib/services.js:105-109 (ghl-funnels-for-care-agencies): give the service page the commercial, market-specific target:
     - seoTitle "GoHighLevel Setup for UK Home Care Agencies | Flowzync". Adjust if the owner also serves US agencies.
     - seoDescription that names the deliverables (enquiry pipeline, carer recruitment pipeline, assessment booking) and the market. Only keep "CQC" if the body explains it (see 2).
  2. lib/services.js `hero` text for this slug: add one sentence naming the market, e.g. "Built for CQC-registered home care and domiciliary care providers in the UK". If US work is genuinely offered, add "We also set this up for US home care agencies", and do not add HIPAA claims unless they can be evidenced.
  3. content/blog/2026-09-04-gohighlevel-for-care-agencies.md: retarget the frontmatter title/H1 to the informational question the SERP asks, e.g. "Is GoHighLevel Worth It for a Care Agency? What It Does and Doesn't Do". Keep the existing link to the service page and make the closing CTA name it ("See how we set this up for care agencies").
  4. Add one visible CQC sentence to the service page FAQs (lib/services.js faqs for this slug), e.g. how enquiry forms avoid collecting clinical detail before assessment. That makes the snippet promise true.

**H2. GHL-for-care proof is a WordPress website, presented as GoHighLevel work**
- Evidence:
  - lib/projects.js:626-631 has das-care-services with `cat: 'wp'`, `badge: 'WordPress'`, `service: 'ghl-funnels-for-care-agencies'`.
  - So the only item under "Recent gohighlevel for care agencies work" is labelled WordPress.
  - lib/serviceDetails.js:80 says "We have built in this sector... Home care work including DAS Care Services".
  - The DAS case study (/portfolio/das-care-services) describes a website. It mentions no pipeline, workflow or GHL build.
- Why it matters: a care owner looking for GHL proof clicks through and finds a WordPress brochure site, and trust drops at the decision point. Under the house rule, proof must not imply work that was not done.
- Fix:
  - Owner to confirm whether any GHL element was delivered for DAS Care.
  - If none was: keep DAS on the page but label it accurately in lib/serviceDetails.js:80, e.g. "We have built for home care providers (DAS Care Services' website), so the constraints are familiar...". Consider mapping `service` in lib/projects.js:631 to `custom-website-design` or `wordpress-website-design`, and showing DAS on this page under a heading like "Care-sector work" rather than "Recent GoHighLevel for care agencies work".
  - If real GHL care work exists, add it as a project. Do not create a demo presented as client work.

**H3. No price signal on any money page, while every SERP shows one**
- Evidence: see the lead finding. The homepage FAQ "How much does a website or automation project cost?" answers "depends... itemised proposal". The London/NY FAQs (lib/locations.js:91, :366) say "We will not publish figures without seeing your project".
- Why it matters:
  - Price is the first filter for the UK tradesperson persona (the SERP is 80% cost guides) and the US coach persona (gig prices of $55 to $250).
  - With no anchor, a £300 sole trader and a £5k firm see the same page, so the wrong one enquires and the right one bounces to a page that answers.
  - It also contradicts the advice Flowzync gives care providers.
- Fix (no invented numbers; the owner supplies real figures):
  - Add an optional `priceGuide` field per service in lib/services.js and render it as one line under the hero lede in app/services/[slug]/page.jsx (after line 102). Use the structure from the site's own blog advice: "Most [service] projects fall between [£X] and [£Y]; your exact figure comes from a written scope." Plus a link to the relevant guide.
  - If the owner will not publish Flowzync ranges, the fallback is to link the existing market-range guides from the hero/FAQ:
    - /blog/how-much-does-a-wordpress-website-cost, which is linked from the WordPress page only, low on the page.
    - /blog/cheap-website-design-what-you-actually-get.
  - Rewrite the cost FAQs to state what drives the price (page count, integrations, copy) with that link.
  - Apply the same field to lib/industries.js (care) and lib/locations.js (city FAQs at :91, :366 and equivalents).

**H4. Brand SERP not owned (`flowzync`)**
- Evidence: the WebSearch query "flowzync" returned no flowzync.com result. All results were "flowsync"/"flowync" products, and the engine treated the term as a misspelling. Organization schema has `sameAs` LinkedIn only and no address or founding location. No page names where Flowzync is based: "Lahore" and "Pakistan" appear 0 times on /, /about, /contact and the location pages.
- Why it matters: prospects shortlisted from directories, referrals or proposals will search the brand name to vet the studio. If the brand SERP shows someone else, the check fails. The location FAQs say "we state it plainly" that Flowzync is remote, but never say from where. A shortlister who later discovers the base may read that as concealment, which is the opposite of the page's stated intent.
- Fix:
  - Homepage: add one plain-text entity sentence high on the page (app/page.jsx hero or the first section). The site name should appear as a word, not only the logo: "Flowzync is a remote web design and GoHighLevel studio working with businesses in the UK, US and worldwide."
  - Owner decision: whether to name the registered base (Lahore, Pakistan) on /about and /contact. Recommended for trust consistency with the location FAQs.
  - Hand the schema side (Organization address/foundingLocation, more sameAs profiles) to the schema specialist.
  - Off-site: create or claim real directory profiles (Clutch, DesignRush, GoHighLevel's own directory if eligible). These are also what rank for the city queries (see M1). They must use genuine reviews only.
  - Re-test brand search in Google after reindexing. The WebSearch backend is not Google (see Limitations).

**H5. Hero CTAs and proof are generic; there is no context hand-off to /contact**
- Evidence:
  - app/services/[slug]/page.jsx:103-109: every service hero links "Get a free quote" to /contact and "See related work" to /portfolio, unfiltered.
  - components/PortfolioGrid.jsx:18 holds the filter in `useState('all')`, so there is no URL to deep-link a filtered view.
  - app/contact/page.jsx:139-140: the service select is not preselected from the referring page.
  - /contact offers only a form and an email (info@flowzync.com). There is no call-booking option and no phone, for a studio that sells calendar booking and instant follow-up.
  - /contact promises a reply "usually within one working day", while the care page's core argument is "whoever answers first usually gets the visit".
- Why it matters: decision-stage personas (care owner, coach) want a low-friction next step that matches what they just read. Generic proof and a cold form add a step and lose context.
- Fix:
  1. app/services/[slug]/page.jsx:109: point "See related work" at the first project in `work` (line 44), i.e. `/portfolio/${work[0].slug}`, with label "See [project title]". Fall back to /portfolio.
  2. app/services/[slug]/page.jsx:103: link to `/contact?service=${s.slug}`. In app/contact/page.jsx, read the param and set the matching `<option>` as default (options currently have no value; give them `value={s.slug}`).
  3. components/PortfolioGrid.jsx: initialise `f` from a `?type=` query param so services and industries can link to filtered views.
  4. Optional, owner decision: add a secondary "Book a 20-minute call" CTA if a real calendar is available (e.g. the studio's own GHL calendar). The page then demonstrates the product it sells.
  5. Make the response-time copy consistent. If enquiries get an automatic acknowledgement, say so on /contact.

### MEDIUM

**M1. Location pages: the SERP is directories plus big multi-city agencies; the hero proof is the same US HVAC project on 25 of 39 cities**
- Evidence:
  - The "web design london/austin/dubai" SERPs are about 45-60% directories/listicles (Clutch, DesignRush, Built In, Startups.co.uk, Semrush, BBB, Yahoo local). The rest is multi-city agency pages (WebFX, Digital Silk, Thrive).
  - Flowzync has no address, so it cannot compete for the local pack.
  - app/locations/[slug]/page.jsx:39 defaults the hero showcase to `5-star-quality-hvac` unless `showcase` is set. Only 5 cities set it (lib/locations.js:331, 459, 486, 536, 740). Dubai, London, Austin, Manchester, Glasgow and 20 others show the HVAC site.
  - "HVAC" is US trade vocabulary shown to London and Dubai visitors. Meanwhile the portfolio has UK trades work that is not used: Medway Drain Services, S.C/IMB Exterior Cleaning, JRE Services, Crown Build Constructions, Roller Shutters Online.
  - London vs New York pages share 50% of 5-word shingles. London/Manchester 38% and Austin/Dubai 34% (template sections plus mirrored FAQs: "paying for the postcode / zip code", "Can you get us ranking for web design London / NYC").
- Why it matters:
  - The pages themselves say the head terms are unrealistic (lib/locations.js:367). Their realistic job is to convert visitors from directories, ads or long-tail queries.
  - For that visitor, the first proof should be nearby or same-sector work.
  - Mirrored copy across cities weakens the "content genuinely about that area" promise in the London FAQ.
- Fix:
  - In lib/locations.js, set `showcase` for every city to the most relevant real project: UK cities to a UK trades/construction project (e.g. `medway-drain-services`, `crown-build-constructions`), and Dubai to the closest-fit project. Do not imply a project was local if it wasn't; the label "Selected Flowzync work" is fine.
  - Rewrite the London/NY mirrored H3s and FAQs so each is city-specific. That belongs to the content specialist; flagged here because it hits Clarity.
  - Put directory profiles (H4) into the location strategy, because they are the SERP.

**M2. /services/ghl-funnels faces a packaged-gig SERP with a consultative page**
- Evidence: about 90% of results for "gohighlevel funnel building service" and 100% for "gohighlevel expert for coaches" are Fiverr/Upwork packages with tiers, starting prices, deliverable checklists and review counts. Flowzync's page has a funnel-type list and process, but no package boundaries, no starting price and no "what's included" checklist in the first screen.
- Why it matters: Flowzync will not outrank marketplace domains for the head term. It can win the visitor who has seen $80 gigs and wants to know what is different. The page currently doesn't address that comparison.
- Fix:
  - lib/services.js / lib/serviceDetails.js (ghl-funnels): add a "What a funnel build includes" checklist near the top (pages, forms, calendar, workflows, tracking, handover), plus `priceGuide` (H3).
  - Add an FAQ "How is this different from a Fiverr GHL gig?" answered factually: scope, copy, testing, documentation, ownership in the client's own account. Do not disparage named sellers.
  - Add a coach-specific line and a link to /portfolio/business-coach-funnel, because coach queries are a major cluster.
  - Add a migration FAQ (Kajabi/ClickFunnels/Systeme.io to GHL), which the SERP shows as a recurring need. Only add it if Flowzync does migrations.

**M3. The care industry page dilutes home care intent with nurseries/childcare**
- Evidence:
  - The live title is "Care Home & Nursery Website Design | Accessible Care Sites". The working copy (lib/industries.js:571) changes it to "Care Home & Home Care Website Design | Flowzync", which is better.
  - The H1 is still "Websites for care & childcare". The "Who this covers" list includes day nurseries, pre-schools and childminders, and the copy mixes Ofsted and CQC.
  - The SERP for "home care agency website design UK" rewards care-only specialists (Webpop, Design Thing, Splitpixel), with a stated timeline and named care case studies.
  - This page has neither a timeline nor price, and the GHL care service page does not link back to it (0 links).
- Fix:
  - lib/industries.js:568-573: make `trade`/H1 "Websites for care homes & home care providers". Move nursery/childcare to one sub-section or a separate industry entry (owner decision).
  - Add a typical timeline line (owner-supplied).
  - Add a link from /services/ghl-funnels-for-care-agencies to this page under "What this build draws on" or similar.

**M4. /portfolio snippet promises content the page doesn't have**
- Evidence: app/portfolio/page.jsx:12, :15, :18. The description says "...WordPress builds and Shopify stores, each with the story and the results behind it". The page has 0 Shopify projects, and its own FAQ says "Do you publish results and conversion figures? No, and deliberately." This file was not modified in the working copy.
- Why it matters: the snippet sets an expectation the page breaks, which hurts trust and accuracy (house rule).
- Fix: rewrite all three description strings, e.g. "Browse Flowzync's portfolio: custom websites, GoHighLevel funnels, WordPress builds and WooCommerce stores, each with what was built and why."
  - Also add a hero CTA (the hero currently has no link).
  - Make the H1 descriptive, e.g. "Websites, funnels and stores we've built". The current H1 is "Work we're proud to sign".

**M5. Homepage competes with /services/custom-website-design and hides the target niche**
- Evidence:
  - app/page.jsx:17 sets the title "Custom Website Design & Business Automation | Flowzync". The H1 is "Custom websites. First impressions that last."
  - The service page targets "Custom Website Design Services".
  - The target niche (care agencies) appears on the homepage only as one link in a services grid. The rotating hero has 3 slides (websites / funnels / automation) and no care, audience or market statement.
- Fix:
  - app/page.jsx:17: make the homepage title brand-led, e.g. "Flowzync | Websites, GoHighLevel & Automation for Small Businesses". Leave the "custom website design" head term to the service page.
  - Add a short "Who we work with" strip below the hero that links to the care cluster and the home & property industry page. Base it on real portfolio sectors only.

### LOW

**L1. Unverifiable "why us" claims still render (house rule)**
- lib/serviceDetails.js:162 renders "Certified GHL specialists" as an H3 on /services/ghl-crm-setup. The meta-level "certified" was already removed in the working copy.
- lib/serviceDetails.js:52 renders "Hundreds of pages of pattern data... we've shipped and measured them" on /services/landing-pages.
- Owner to confirm. If there's no certification or evidence, reword (e.g. "GoHighLevel every day").

**L2. Unrendered case-study metrics sit in lib/serviceDetails.js**
- `caseStudy.results` at lines 34, 62, 116, 144, 172, 200, 228, 256, 284 and 312 (e.g. "-58% cost per booked call", "+212% organic traffic", "110+ 5-star reviews"). Named clients such as "Peak Performance Coaching" do not appear in the portfolio.
- They are not rendered today (0 matches in live HTML). They are a trap: if any template starts rendering `caseStudy`, the site publishes figures its own portfolio FAQ says it doesn't publish.
- Recommend deleting them, or replacing them with real, evidenced data.

**L3. The service pages have no visible "last updated" date**
- Freshness can't be judged by a visitor. Low priority for service pages.

---

## Competing pages (cannibalisation map)

| Query | Competing URLs | Recommended owner | Action |
|---|---|---|---|
| gohighlevel for care agencies | /services/ghl-funnels-for-care-agencies, /blog/gohighlevel-for-care-agencies | Service page (commercial: "GoHighLevel setup for UK home care agencies") | Retitle the blog to the informational angle (H1). |
| care agency CRM | /blog/care-agency-crm-what-to-look-for, /services/ghl-funnels-for-care-agencies (keyword list includes 'care agency crm', 'domiciliary care crm' at lib/services.js:111) | Blog for "what to look for"; service for "CRM setup for care agency" | Keep the blog informational. Link it to the service page with "set it up for you" anchor text. |
| care agency website (what to include) | /industries/care-homes-and-home-care, /blog/care-agency-website-what-families-look-for, /blog/care-agency-website-cqc-requirements | Industry page for "home care website design"; blogs for the "what must it show" questions | Already cross-linked. Make sure the industry page H1/title is commercial ("design") and the blogs stay question-led. |
| custom website design | /, /services/custom-website-design | Service page | Brand-led homepage title (M5). |
| GoHighLevel funnels / landing pages | /services/ghl-funnels, /services/landing-pages (landing page entry lists GHL as a platform) | ghl-funnels for "GHL funnel"; landing-pages for "landing page design" | Low risk today (5-gram overlap negligible). Keep GHL out of the landing-pages title. |
| web design [city] | London vs New York (50% shared 5-grams), Manchester vs Leeds (41%) | Each city | City-specific rewrite of the mirrored H3s/FAQs (M1). |

---

## User stories (from SERP signals)

1. As a **UK domiciliary care owner**, I want to know what a GoHighLevel setup for my agency involves and costs, because I'm losing evening enquiries and struggling to fill shifts. But I'm blocked by **price uncertainty and doubt that a web studio understands care**.
   *Signals: Softomate UK domiciliary guide lists setup £1,500 to £3,000, and enquiry > assessment > package > funding plus DBS/right-to-work pipelines; homecare.co.uk supplier listings.* (Consideration)
2. As a **US home care / senior care agency owner**, I want a GHL setup for intake and family communication, because competitors reply faster. But I'm blocked by **not knowing whether this provider serves the US** (the page reads UK).
   *Signals: "gohighlevel for home care agencies" SERP: netpartners senior-care GHL articles, HIPAA wording, $97/$297 plan references, US snapshot landing pages.* (Awareness to consideration)
3. As a **UK tradesperson**, I want a website that brings quote requests for a price I can justify, because directories like Checkatrade charge monthly. But I'm blocked by **not knowing whether this is a £300, £3,000 or £8,000 job**.
   *Signals: "website for tradesman UK cost" SERP: 80% cost guides with £300 to £3,000 one-off and £20 to £30 per month ranges, Checkatrade £100 per month comparison.* (Consideration to decision)
4. As a **US business coach**, I want a GHL funnel with booking and follow-up working, because I'm moving off Kajabi/ClickFunnels. But I'm blocked by **comparison fatigue: dozens of $80 gigs look the same**.
   *Signals: "gohighlevel expert for coaches" SERP: 100% Fiverr/Upwork packages, migration mentions, job-success % shown.* (Decision)
5. As a **London or Dubai SME marketing lead shortlisting agencies**, I want 3 credible options with a known price band, because I have to justify the choice internally. But I'm blocked by a **trust gap: no third-party reviews or directory presence, and an unnamed base**.
   *Signals: "web design london/dubai" SERP: Clutch (avg $10k to $49k), Startups.co.uk "Top 5", DesignRush and Semrush listings dominate.* (Consideration)

---

## Persona scoring

Each persona is scored on the page they would land on. Each dimension is out of 25.

| Persona (landing page) | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|
| US home care agency owner (/services/ghl-funnels-for-care-agencies) | 12 | 10 | 8 | 12 | **42** | Needs Work |
| UK tradesperson (/locations/web-design-manchester, also /services/wordpress-website-design) | 15 | 11 | 11 | 14 | **51** | Needs Work |
| London/Dubai SME shortlister (/locations/web-design-london, /locations/web-design-dubai) | 14 | 15 | 9 | 15 | **53** | Needs Work |
| UK care home / registered manager, website build (/industries/care-homes-and-home-care) | 17 | 15 | 11 | 13 | **56** | Needs Work |
| UK domiciliary care owner, GHL (/services/ghl-funnels-for-care-agencies) | 21 | 14 | 11 | 13 | **59** | Needs Work |
| US business coach (/services/ghl-funnels) | 19 | 15 | 13 | 14 | **61** | Good (barely) |

Evidence behind the scores:
- **US home care owner (42):**
  - Relevance: DBS, right-to-work and local-authority/hospital-discharge copy has no US equivalent, and the market is unstated.
  - Trust: the one proof is a Luton (UK) WordPress site.
  - Action: a generic quote form.
  - Top fix: one hero sentence stating the market (H1.2). If US is served, add a US-relevant FAQ (e.g. how intake data is handled; no HIPAA claims without evidence).
- **UK tradesperson (51):**
  - Relevance: honest remote/UK-hours framing and trade FAQs exist on some cities.
  - Clarity: no price while the SERP is about price.
  - Trust: the hero proof is a US HVAC site, while UK trades projects (Medway Drain Services, S.C Exterior Cleaning, JRE Services) sit unused.
  - Top fix: UK trades `showcase` (M1) plus a `priceGuide` line (H3) and a link to the home & property industry page.
- **SME shortlister (53):**
  - Clarity is good: "Remote studio" is above the fold, and the FAQ is candid.
  - Trust is weak: no third-party profile, no reviews, no named base, unrelated hero project (HVAC for Dubai).
  - Top fix: real directory profiles (H4), a base disclosure decision, city-relevant showcase.
- **Care home manager (56):**
  - The content is strong and specific (fees, inspection, recruitment, accessibility).
  - Trust: only one care case study, and no timeline or price, which the page tells clients to publish.
  - Childcare dilutes the page.
  - Top fix: M3 plus `priceGuide`.
- **UK domiciliary care owner (59):**
  - Relevance is the best on the site: two pipelines, DBS chasing, referral-source tagging, the "honest about the boundary" eMAR/rostering note.
  - Clarity: the timeline (2 to 4 weeks) is buried in the FAQ; no price, no UK statement.
  - Trust: the proof is not a GHL build (H2).
  - Action: a generic form with a 1-working-day reply against a page about instant reply (H5).
- **US coach (61):**
  - Five real GHL funnel projects, including the Business Coach funnel, and funnel types match the SERP.
  - No package or included-checklist or price, against a gig SERP (M2).

### Weakest persona: US home care agency owner (42)
- **Top issue:** the page is silently UK-only.
- **Recommended fix:** the hero sentence "Built for UK home care providers" (plus "and US agencies", if true) in lib/services.js hero for ghl-funnels-for-care-agencies. Mirror it in the seoTitle/description.

### Systemic issues
- **Trust** is the lowest dimension across all 6 personas (8 to 13). Causes: no reviews or testimonials render (lib/testimonials.js is a placeholder by design), the brand SERP is not owned, the base is unnamed, and proof is mismatched to page.
- **Clarity on price** fails for every decision-stage persona.

### Priority actions
1. State the market on the GHL-care page and resolve the blog/service overlap (H1).
2. Price guide line on service, industry and location heroes, owner-supplied (H3).
3. Context-aware CTAs and proof links (H5), and the per-city showcase (M1).
4. Correct the DAS Care proof labelling (H2).
5. Brand entity sentence plus real directory profiles (H4).

---

## Recommended above-the-fold pattern (service template, app/services/[slug]/page.jsx:96-110)
```
Eyebrow:  GoHighLevel for Care Agencies
H1:       GoHighLevel setup for UK home care agencies
Lede:     (existing hero text)
Fit line: For CQC-registered home care & domiciliary providers · Typically 2–4 weeks · [owner: "Most setups £X–£Y"]
CTA 1:    Get an itemised quote  -> /contact?service=ghl-funnels-for-care-agencies
CTA 2:    See DAS Care Services  -> /portfolio/das-care-services   (label accurately per H2)
```
The timeline "2 to 4 weeks" is already stated in this page's FAQ. Custom website design states "4 to 8 weeks" in its FAQ. Reuse those; don't invent new ones.

---

## What works
- The copy is unusually specific and honest. Examples: the care page's "Honest about the boundary" (no rostering/eMAR), the location FAQs admitting head terms are multi-year, and the portfolio refusing unevidenced metrics. That candour is a real differentiator against the gig and listicle SERPs.
- The care service page's relevance to the UK domiciliary persona matches what the best-ranking UK guide covers (enquiry and carer pipelines, DBS/right-to-work, referral sources).
- Location heroes state "Remote studio" above the fold and don't fake local offices.
- Every money page has a visible primary CTA and an FAQ. Service and industry pages link to related care and cost articles.
- The portfolio is a genuine collection (30 projects, filterable, CollectionPage/ItemList). That is the right type for the examples/portfolio SERP.
- Pages are server-rendered. The raw HTML contains all hero content, so what crawlers see matches what users see.

---

## Limitations
- **SERP access:** WebSearch worked but is not a Google SERP render. People Also Ask, ads, the local pack, AI Overviews, featured snippets and exact positions were not observable. Type percentages are estimates from 10 to 20 returned results per query. The `flowzync` brand result may differ in Google itself. Re-check in Google Search Console (brand query impressions) before acting on H4 alone.
- **Rendering:** render_page.py failed here ("Refusing configured HTTP proxy"), as CONTEXT.md predicted. The analysis used the saved live HTML (raw/pages/*.html, fetched 2026-11-26) via parse_html.py in file mode, and the Next.js SSR output contains the full hero content. The page was not rendered in a browser, so:
  - the true mobile fold position, the hero carousel behaviour and the chat widget were not assessed;
  - the browser sandbox question did not arise.
- **Missing data:** no search volume, GSC or analytics data, so persona weighting is qualitative.
- **Owner facts I could not verify:** whether DAS Care included GHL work, whether Flowzync holds any GHL certification, whether US care agencies are served, real price ranges, and calendar availability.
- **Working copy:** the lead agent has uncommitted title/meta edits in lib/services.js and lib/industries.js. Findings cite live HTML and note where the working copy already changes things.

---

## Structured findings (for audit-data.json, category "Search Experience")
```json
{
  "category": "Search Experience",
  "score": 60,
  "score_label": "SXO Gap Score",
  "findings": [
    {"id":"sxo-care-cannibalisation-market","severity":"High","urls":["/services/ghl-funnels-for-care-agencies","/blog/gohighlevel-for-care-agencies"],"summary":"Service page and blog post target the same query; service page never states UK vs US market; meta promises CQC-aware forms not in body","fix_files":["lib/services.js:105-111","content/blog/2026-09-04-gohighlevel-for-care-agencies.md"]},
    {"id":"sxo-care-proof-mismatch","severity":"High","urls":["/services/ghl-funnels-for-care-agencies","/portfolio/das-care-services"],"summary":"Only GHL-for-care proof is a WordPress website build (cat 'wp') mapped to the GHL service","fix_files":["lib/projects.js:631","lib/serviceDetails.js:80"]},
    {"id":"sxo-no-price-signal","severity":"High","urls":["/","/services/*","/industries/care-homes-and-home-care","/locations/*"],"summary":"No price range on any money page while every SERP shows price anchors; contradicts site's own publish-a-range advice","fix_files":["lib/services.js","lib/industries.js","lib/locations.js","app/services/[slug]/page.jsx:102"]},
    {"id":"sxo-brand-serp","severity":"High","urls":["/","/about","/contact"],"summary":"'flowzync' search returns no flowzync.com result; base location never disclosed; sameAs LinkedIn only","fix_files":["app/page.jsx"]},
    {"id":"sxo-generic-cta-proof","severity":"High","urls":["/services/*","/contact","/portfolio"],"summary":"Hero CTAs go to bare /contact and unfiltered /portfolio; no service prefill; no URL-addressable portfolio filter; form/email only","fix_files":["app/services/[slug]/page.jsx:103-109","app/contact/page.jsx:139-140","components/PortfolioGrid.jsx:18"]},
    {"id":"sxo-location-showcase-template","severity":"Medium","urls":["/locations/*"],"summary":"25/39 cities show the same US HVAC project; London/NY share 50% of 5-grams; SERP is directories plus multi-city agencies","fix_files":["app/locations/[slug]/page.jsx:39","lib/locations.js"]},
    {"id":"sxo-ghl-funnels-gig-serp","severity":"Medium","urls":["/services/ghl-funnels"],"summary":"SERP is priced Fiverr/Upwork packages; page lacks included-checklist, price guide, gig comparison FAQ","fix_files":["lib/services.js","lib/serviceDetails.js"]},
    {"id":"sxo-care-industry-dilution","severity":"Medium","urls":["/industries/care-homes-and-home-care"],"summary":"H1 'care & childcare' and nursery content dilute home care intent; no timeline/price; no link from GHL care page","fix_files":["lib/industries.js:568-573"]},
    {"id":"sxo-portfolio-snippet-promise","severity":"Medium","urls":["/portfolio"],"summary":"Meta promises Shopify stores and results; page has neither and FAQ says results are not published; no hero CTA","fix_files":["app/portfolio/page.jsx:12,15,18"]},
    {"id":"sxo-home-vs-custom-design","severity":"Medium","urls":["/","/services/custom-website-design"],"summary":"Homepage title targets 'Custom Website Design' head term; niche absent from homepage","fix_files":["app/page.jsx:17"]},
    {"id":"sxo-unverified-whyus","severity":"Low","urls":["/services/ghl-crm-setup","/services/landing-pages"],"summary":"'Certified GHL specialists' and 'Hundreds of pages of pattern data' need evidence or rewording","fix_files":["lib/serviceDetails.js:162","lib/serviceDetails.js:52"]},
    {"id":"sxo-latent-metrics","severity":"Low","urls":[],"summary":"Unrendered caseStudy.results with unevidenced metrics in serviceDetails.js","fix_files":["lib/serviceDetails.js"]}
  ]
}
```

---

## Sources (WebSearch, 2026-11-26)
- https://www.softomatesolutions.com/blog/gohighlevel-uk-domiciliary-care-providers-2026/
- https://netpartners.marketing/gohighlevel-for-senior-care-agencies-automate-inquiries-manage-staff-and-build-trust-with-families/
- https://growwstacks.com/case-studies/home-care-referral-recruiting-engine/
- https://www.keragon.com/integrations/gohighlevel
- https://dev.to/softomate_solutions_b17f2/setting-up-gohighlevel-for-uk-agencies-the-complete-technical-guide-including-gdpr-dns-and-4d4i
- https://www.webpopdesign.com/home-care-web-design/
- https://designthing.co.uk/industry-care
- https://sagapixel.com/web-design/home-care-agencies/
- https://www.homecare.co.uk/suppliers_search_results.cfm/searchcategory/3000955
- https://www.carehome.co.uk/suppliers_search_results.cfm/searchcategory/955
- https://bwebsites.co.uk/web-design-projects/clarendon-home-care/
- https://plmr.co.uk/2019/01/what-makes-a-good-care-home-website-design/
- https://carelearning.org.uk/blog/marketing/web-design-for-care-homes-guide
- https://www.webfx.com/industries/local-consumer-services/in-home-care-providers/web-design
- https://www.designrush.com/agency/website-design-development/small-business
- https://seahawkmedia.com/design/small-business-website-development-and-design/
- https://www.straightnorth.com/web-design/small-business/
- https://block.fiverr.com/gigs/gohighlevel-funnel
- https://www.upwork.com/services/product/design-gohighlevel-funnel-with-automation-crm-and-pipeline-setup-2010244108590628919
- https://www.upwork.com/services/product/development-it-gohighlevel-crm-landing-page-sales-funnel-setup-for-coaches-2004017945722495350
- https://dribbble.com/DunTech/shots
- https://supplygem.com/gohighlevel-funnel-templates/
- https://www.webfx.com/web-design/wordpress-web-design-services.html
- https://www.inmotionhosting.com/services/wordpress-website-design
- https://clutch.co/web-designers/wordpress
- https://clutch.co/web-designers/uk/england/london
- https://startups.co.uk/websites/creating/best-web-design-companies-london/
- https://www.digitalsilk.com/web-design-london
- https://clutch.co/web-designers/austin
- https://builtin.com/articles/web-design-austin
- https://agencies.semrush.com/list/web-design/austin/
- https://bbb.org/us/tx/austin/category/web-design
- https://clutch.co/ae/web-designers/dubai/leaders-matrix
- https://www.designrush.com/agency/website-design-development/ae/dubai
- https://onelittleweb.com/top-agencies/web-design-companies-in-dubai/
- https://www.checkatrade.com/blog/cost-guides/how-much-do-tradespeople-cost/
- https://hazcott-systems-website.pages.dev/guides/how-much-should-i-pay-for-a-tradesman-website
- https://www.producthunt.com/products/flowsync-2
