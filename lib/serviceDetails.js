// ─────────────────────────────────────────────────────────────
// PER-SERVICE PAGE CONTENT.
// Every service page renders these bespoke sections instead of
// the old repeated timeline: benefits, approach, why-us, tech,
// industries and a real-shaped case study.
// Keyed by the slug in lib/services.js.
// ─────────────────────────────────────────────────────────────

export const serviceDetails = {
  'custom-website-design': {
    benefits: [
      ['A brand nobody can copy', 'Template sites look like a thousand others. A bespoke design is an asset competitors can\u2019t buy off a shelf.'],
      ['Higher trust, higher conversion', 'Visitors judge credibility in under a second. Custom design signals "established business" before they read a word.'],
      ['Built around your buyer\u2019s journey', 'Page flow, content order and CTAs follow how your customers actually decide — not how a theme was laid out.'],
      ['Grows with you', 'A documented design system means new pages, campaigns and products stay on-brand for years without redesigning.'],
    ],
    approach: [
      ['Brand & audience immersion', 'We interview you, study your customers and audit your competitors so design decisions are made on evidence.'],
      ['Wireframes before visuals', 'Structure first: we agree on page flow and content hierarchy before any color touches the screen.'],
      ['Concepts in Figma', 'You review real, clickable design directions — and we refine together until it feels unmistakably yours.'],
      ['Pixel-perfect handoff to build', 'Our own developers translate the approved design to the pixel, with motion and speed engineered in.'],
    ],
    whyUs: [
      ['Designers who ship', 'Our designers work beside the developers who build their work — nothing gets "lost in translation".'],
      ['Conversion is a design input', 'Every layout decision is checked against one question: does it move the visitor toward action?'],
      ['You own everything', 'Design files, components, source — fully yours, fully documented, no lock-in.'],
    ],
    tech: ['Figma', 'Next.js', 'WordPress', 'Webflow-style custom code', 'GSAP motion', 'Tailwind CSS', 'Google Fonts', 'Lottie'],
    industries: ['Professional services', 'Healthcare & clinics', 'Real estate', 'Coaches & consultants', 'SaaS & startups', 'Hospitality'],
    caseStudy: {
      client: 'Lumen Legal', industry: 'Law firm · 3 partners',
      challenge: 'A dated template site that partners were embarrassed to put on business cards — and that converted almost no consultation requests.',
      solution: 'Full bespoke redesign around the client journey: authority-led homepage, practice-area pages built for search intent, and a frictionless consultation flow.',
      results: [['3.1×', 'consultation requests'], ['67%', 'longer time on site'], ['#1', 'for their practice area']],
    },
  },

  'landing-pages': {
    benefits: [
      ['Stop burning ad spend', 'Sending paid traffic to your homepage wastes clicks. A dedicated page matched to the ad converts multiples more.'],
      ['Live in days, not months', 'A focused scope means a focused timeline — most pages ship within 5–10 business days.'],
      ['Every visit teaches you something', 'Pixels, events and heat-mapping are wired before launch, so optimisation starts on day one.'],
      ['Test your way to more revenue', 'A/B-ready structure lets you trial headlines and offers without rebuilding the page.'],
    ],
    approach: [
      ['Offer & message workshop', 'We sharpen the promise the page must make — and match it word-for-word to the ads driving traffic.'],
      ['Conversion copy first', 'Copy leads, design follows. We write the persuasion path before designing a single section.'],
      ['Design for one action', 'Every element either moves the visitor toward the CTA or gets cut. No menus, no exits, no distractions.'],
      ['Launch, measure, iterate', 'We watch the first traffic together, then tune headlines, proof and CTAs based on real behaviour.'],
    ],
    whyUs: [
      ['Hundreds of pages of pattern data', 'We know which section orders, proof placements and CTA styles convert — because we\u2019ve shipped and measured them.'],
      ['Copywriting included', 'No hunting for a separate copywriter. Research-driven conversion copy is part of every landing page project.'],
      ['Speed as a feature', 'Lean, image-optimised builds protect your Quality Score and your ad budget.'],
    ],
    tech: ['GoHighLevel', 'WordPress', 'Custom code', 'Google Tag Manager', 'Meta & Google pixels', 'Hotjar', 'Calendly / GHL calendars', 'Stripe'],
    industries: ['Agencies & coaches', 'Local services', 'Course creators', 'Medspas & clinics', 'Events & webinars', 'SaaS trials'],
    caseStudy: {
      client: 'Peak Performance Coaching', industry: 'High-ticket coaching',
      challenge: 'Ads were driving clicks to a generic homepage — cost per booked call had climbed to an unsustainable level.',
      solution: 'A dedicated VSL landing page with message-matched headline, layered proof and a calendar-first CTA, plus full event tracking.',
      results: [['-58%', 'cost per booked call'], ['4.7%', 'visitor-to-call rate'], ['3', 'variants split-tested']],
    },
  },

  'ghl-funnels': {
    benefits: [
      ['One connected journey', 'Opt-in, offer, booking and follow-up live in one system — no duct tape between five different tools.'],
      ['Leads answered automatically', 'Built-in workflows reply by SMS and email while interest is still at its peak.'],
      ['Fewer no-shows, fuller calendars', 'Reminder and confirmation sequences routinely cut no-show rates dramatically.'],
      ['Know which ads print money', 'Full attribution from click to closed deal, so budget flows to what actually works.'],
    ],
    approach: [
      ['Funnel strategy session', 'We map your offer, traffic source and sales motion — then choose the funnel type that fits (VSL, webinar, application, booking).'],
      ['Page design beyond the builder', 'Custom CSS/JS layered over GHL, so your funnel looks hand-coded — not like a funnel.'],
      ['Automation architecture', 'Every step gets its workflows: instant response, nurture, reminders, pipeline moves and team alerts.'],
      ['Test traffic & tighten', 'We run test leads through every path, verify tracking, then monitor the first real cohort with you.'],
    ],
    whyUs: [
      ['GHL is our home turf', 'We build in GoHighLevel daily — we know its limits and exactly how to code past them.'],
      ['Whole-funnel accountability', 'Pages, automations, calendars and tracking from one team — no finger-pointing between vendors.'],
      ['Rescues welcome', 'Underperforming funnel? We audit the data, find the leaks and rebuild the weak steps — not everything.'],
    ],
    tech: ['GoHighLevel', 'Custom CSS/JS', 'Twilio SMS', 'Stripe', 'Zapier / Make.com', 'Google & Meta pixels', 'Hyros-style attribution', 'Calendars & pipelines'],
    industries: ['Marketing agencies', 'Coaches & consultants', 'Medspas & dental', 'Home services', 'Insurance & finance', 'Fitness & wellness'],
    caseStudy: {
      client: 'ScaleDental Co.', industry: 'Dental growth agency',
      challenge: 'A leaky funnel: leads opted in but booking rates were low and no-shows were eating the calendar.',
      solution: 'Rebuilt booking funnel with qualification step, instant SMS response, and a 5-touch reminder sequence — all natively in GHL.',
      results: [['2.4×', 'booked appointments'], ['-41%', 'no-show rate'], ['6', 'locations on one system']],
    },
  },

  'automations': {
    benefits: [
      ['Reclaim your team\u2019s hours', 'Repetitive admin — follow-ups, reminders, data entry — runs itself, freeing people for revenue work.'],
      ['Never lose a lead to silence', 'Automated first responses run around the clock, including weekends and holidays.'],
      ['Consistency you can\u2019t hire', 'Automations never forget, never get busy and never have an off day.'],
      ['A back office that reports itself', 'Digests, dashboards and alerts keep you informed without chasing anyone.'],
    ],
    approach: [
      ['Process mapping session', 'We document how work actually flows through your business today — and where hours leak away.'],
      ['Score and prioritise', 'Each manual task is scored by frequency and impact. We automate the highest-value leaks first.'],
      ['Build with guardrails', 'Every workflow ships with error alerts, fallbacks and documentation — automation you can trust.'],
      ['Measure the hours back', 'We track what each automation saves and review monthly, so the system keeps compounding.'],
    ],
    whyUs: [
      ['Human-sounding automation', 'We write every automated message in your brand\u2019s voice — customers rarely realise a workflow sent it.'],
      ['Tool-agnostic builders', 'GHL, Zapier, Make.com or native APIs — we choose what fits your stack, not what\u2019s convenient for us.'],
      ['Monitored, not abandoned', 'Care plans include automation monitoring, so breaks are caught before you ever notice.'],
    ],
    tech: ['GoHighLevel workflows', 'Zapier', 'Make.com', 'Twilio', 'Google Workspace', 'Slack', 'Webhooks & APIs', 'OpenAI / Claude steps'],
    industries: ['Local services', 'Clinics & medspas', 'Real estate teams', 'Agencies', 'E-commerce ops', 'Professional services'],
    caseStudy: {
      client: 'Northgate Roofing', industry: 'Home services · 12 crews',
      challenge: 'Missed calls and slow follow-up meant quotes were going to whoever answered first — usually a competitor.',
      solution: 'Missed-call text-back, instant quote follow-up, appointment reminders and an automated review-request flow.',
      results: [['31%', 'more quotes booked'], ['110+', '5-star reviews in 6 months'], ['0', 'enquiries left unanswered']],
    },
  },

  'ghl-crm-setup': {
    benefits: [
      ['One source of truth', 'Every lead, conversation, appointment and payment in one pipeline — no more spreadsheet archaeology.'],
      ['Your team actually uses it', 'A CRM configured around your real process (with training included) gets adopted, not abandoned.'],
      ['Launch-ready quickly', 'Skip months of trial-and-error settings. We deliver a configured, tested system with proven snapshots.'],
      ['SaaS mode, unlocked', 'Agencies: resell configured sub-accounts under your own brand with billing built in.'],
    ],
    approach: [
      ['Sales process audit', 'We map your pipeline stages, lead sources and hand-offs before touching a single setting.'],
      ['Structured configuration', 'Pipelines, custom fields, calendars, phone/email, tags and permissions — built to a documented standard.'],
      ['Migration without loss', 'Contacts and history move over cleanly from your old CRM, deduplicated and verified.'],
      ['Team onboarding', 'Live training plus recorded walkthroughs, so every seat is productive immediately.'],
    ],
    whyUs: [
      ['Certified GHL specialists', 'We work inside GoHighLevel every day, across dozens of accounts and industries.'],
      ['Snapshots refined by use', 'Our industry snapshots come from real client accounts — not marketplace templates.'],
      ['Documentation obsessed', 'Every build ships with a written system map, so you\u2019re never dependent on us to understand your own CRM.'],
    ],
    tech: ['GoHighLevel', 'LC Phone / Twilio', 'Mailgun / LC Email', 'Stripe billing', 'Zapier / Make.com', 'Google & Outlook calendars', 'WhatsApp integration', 'Custom snapshots'],
    industries: ['Marketing agencies', 'SaaS resellers', 'Clinics & wellness', 'Real estate', 'Home services', 'Education & coaching'],
    caseStudy: {
      client: 'Brightline Media', industry: 'Agency → SaaS',
      challenge: 'An agency wanting recurring revenue, but no productised system to sell — and messy internal lead tracking of their own.',
      solution: 'White-labelled GHL SaaS setup with three priced plans, an onboarding snapshot, and automated sub-account provisioning.',
      results: [['38', 'SaaS clients in year one'], ['$11k', 'MRR added'], ['1', 'snapshot, every account']],
    },
  },

  'wordpress-website-design': {
    benefits: [
      ['Own your platform', 'Open-source WordPress means no rented land — your site, your data, your rules.'],
      ['Lean where it matters', 'Custom themes carry only the code your site actually uses — no plugin pile-up, no bloat.'],
      ['Edit without fear', 'Structured custom fields let your team update content safely — no broken layouts, ever.'],
      ['A platform Google understands', 'Clean semantic markup and SEO architecture baked into every template.'],
    ],
    approach: [
      ['Architecture before code', 'Content types, taxonomies and template maps designed up front — the difference between a site and a system.'],
      ['Custom theme, no bloat', 'Hand-built themes with only the code your site needs. No 40-plugin house of cards.'],
      ['Editor experience design', 'We configure the admin so editing feels obvious: labelled fields, live previews, sensible defaults.'],
      ['Hardening & handover', 'Security hardening, caching, backups and a video walkthrough before we hand you the keys.'],
    ],
    whyUs: [
      ['Developers, not installers', 'We write PHP/JS and build custom themes, plugins and forms from scratch — we don\u2019t just assemble marketplace plugins. That\u2019s why our builds stay fast and stable.'],
      ['Migration-safe redesigns', 'Redirect maps and SEO equity preservation are standard on every rebuild.'],
      ['Care plans that care', 'Updates, security, backups and small content edits handled under one monthly plan.'],
    ],
    tech: ['WordPress', 'PHP 8', 'Custom plugin development', 'Custom theme development', 'ACF Pro', 'Gutenberg blocks', 'Gravity / Fluent Forms', 'WooCommerce', 'WP REST API', 'Cloudflare', 'WP Rocket'],
    industries: ['Publishers & blogs', 'Professional services', 'Nonprofits', 'Restaurants & hospitality', 'Education', 'B2B companies'],
    caseStudy: {
      client: 'Harvest & Co.', industry: 'Restaurant group · 5 locations',
      challenge: 'Five separate outdated sites, each edited differently, all slow — and impossible for staff to keep current.',
      solution: 'One multisite WordPress platform with shared design system, per-location menus via custom fields, and online reservations.',
      results: [['5→1', 'platforms to maintain'], ['2.2×', 'online reservations'], ['100%', 'editable by their team']],
    },
  },

  'elementor-design': {
    benefits: [
      ['You can edit it yourself', 'Global styles and saved templates mean your team changes text, images and whole sections without a developer or a support ticket.'],
      ['Designed first, built second', 'Most Elementor sites are assembled live in the builder, which is why they look assembled. Ours are designed in Figma and approved before anything is placed.'],
      ['Cheaper to change later', 'Reusable templates mean a new landing page is an afternoon, not a new project.'],
      ['No lock-in', 'It is your WordPress install, your Elementor licence, your hosting. You can take the site anywhere.'],
    ],
    approach: [
      ['Design in Figma', 'Every page laid out and approved before a widget is placed — the builder is a build tool, not a design tool.'],
      ['Set global styles properly', 'Typography, colours, spacing and buttons defined once in Global Settings, so one change updates the whole site.'],
      ['Build reusable templates', 'Header, footer, hero and CTA blocks saved as templates, so future pages assemble in minutes.'],
      ['Custom CSS where it runs out', 'Effects and layouts Elementor cannot do natively, added cleanly without breaking the visual editor.'],
    ],
    whyUs: [
      ['We keep the plugin count low', 'Every add-on is a future conflict and another update to babysit. We use as few as the build genuinely needs.'],
      ['Clean markup underneath', 'Proper heading hierarchy, compressed images and schema — the reasons Elementor sites get accused of being bad for SEO, handled.'],
      ['You get trained', 'A recorded walkthrough of your own site at handover, so editing is obvious rather than intimidating.'],
    ],
    tech: ['Elementor Pro', 'WordPress', 'ACF', 'Custom CSS', 'Figma', 'WP Rocket', 'Cloudflare', 'Rank Math'],
    industries: ['Local services', 'Clinics & practices', 'Restaurants & cafés', 'Trades & contractors', 'Coaches & consultants', 'Small B2B'],
    caseStudy: {
      client: 'Rowan & Fields', industry: 'Landscaping · single location',
      challenge: 'An Elementor site built by a previous freelancer with no global styles — every colour change meant editing forty widgets by hand.',
      solution: 'Rebuilt in Elementor properly: global typography and colour system, six saved section templates, a custom quote form, and a training session for the office manager.',
      results: [['6', 'reusable templates'], ['1', 'place to change brand colours'], ['0', 'developer requests since handover']],
    },
  },

  'woocommerce-development': {
    benefits: [
      ['No per-sale platform fee', 'WooCommerce runs on your own hosting. You are not paying a percentage of every order to a platform.'],
      ['A checkout you control', 'Fields, steps, upsells and rules are all yours to change — the part hosted platforms restrict most.'],
      ['Your customer data stays yours', 'Full export, full database access, no vendor holding your order history.'],
      ['Scales with the catalogue', 'Product structure designed up front means adding a hundred products later does not mean rebuilding.'],
    ],
    approach: [
      ['Map the catalogue first', 'Products, variations and attributes structured around how customers search, before any design work starts.'],
      ['Build and test payments live', 'Gateways configured and tested with real transactions in live mode — not left as a launch-day surprise.'],
      ['Shipping, tax and stock', 'Zones, rates, thresholds and tax rules set for the regions you actually sell to, with inventory wired to your source of truth.'],
      ['Optimise the checkout', 'Fields cut to what you need, express payment enabled, error states written in plain language.'],
    ],
    whyUs: [
      ['We build stores, not brochures', 'Payments, shipping logic, tax and stock sync are the hard parts, and they are the parts we do first.'],
      ['Migration without losing rankings', 'Full 301 redirect maps on every platform move, so the traffic you already earned survives the switch.'],
      ['Honest platform advice', 'If your margins and catalogue suit Shopify better, we will tell you that — we build both.'],
    ],
    tech: ['WooCommerce', 'WordPress', 'PHP 8', 'Stripe', 'PayPal', 'WooCommerce Subscriptions', 'ACF Pro', 'Zapier / Make.com', 'Cloudflare'],
    industries: ['Retail & DTC brands', 'Food & beverage', 'Health & supplements', 'Trade suppliers', 'Print & custom goods', 'Membership businesses'],
    caseStudy: {
      client: 'Brixton & Co', industry: 'Homeware retail · online only',
      challenge: 'A Wix store that could not handle product variations properly, with stock tracked separately in a spreadsheet that was always out of date.',
      solution: 'Full migration to WooCommerce with proper variable products, supplier stock sync, a rebuilt mobile checkout and a complete redirect map from the old URLs.',
      results: [['100%', 'of URLs redirected'], ['1', 'source of truth for stock'], ['-3', 'steps in the checkout']],
    },
  },

  'shopify-ecommerce': {
    benefits: [
      ['A store that sells while you sleep', 'Conversion-focused product pages, trust signals and checkout flow tuned for buying, not browsing.'],
      ['Premium look, platform reliability', 'Custom Shopify design on infrastructure that never falls over on launch day or Black Friday.'],
      ['Recover the revenue you\u2019re losing', 'Abandoned-cart flows, upsells and email/SMS automation wired in from day one.'],
      ['Manage it in minutes a day', 'Products, discounts and content organised so running the store doesn\u2019t run you.'],
    ],
    approach: [
      ['Store & catalogue strategy', 'Collections, navigation and merchandising mapped around how your customers shop.'],
      ['Theme design beyond templates', 'Custom sections and styling on Online Store 2.0 — your store won\u2019t look like a theme demo.'],
      ['Conversion & trust layer', 'Reviews, guarantees, shipping clarity and sticky CTAs placed where hesitation actually happens.'],
      ['Retention wiring', 'Klaviyo flows — welcome, abandoned cart, post-purchase — configured and tested before launch.'],
    ],
    whyUs: [
      ['Design and CRO in one team', 'Beautiful and effective aren\u2019t a trade-off here — every design choice is a conversion choice.'],
      ['Clean, upgrade-safe code', 'Custom sections built the Shopify-recommended way, so theme updates never break your store.'],
      ['Post-launch growth support', 'We stay for the optimisation phase: A/B ideas, seasonal campaigns, speed audits.'],
    ],
    tech: ['Shopify & Shopify Plus', 'Liquid / OS 2.0', 'Klaviyo', 'Judge.me / Okendo', 'Stripe & Shop Pay', 'ReCharge subscriptions', 'Meta & Google Shopping', 'Analytics & pixels'],
    industries: ['Fashion & apparel', 'Beauty & skincare', 'Food & beverage', 'Outdoor & gear', 'Home & lifestyle', 'Subscription products'],
    caseStudy: {
      client: 'Northpeak Gear', industry: 'Outdoor equipment DTC',
      challenge: 'A cluttered theme-demo store with strong traffic but weak conversion and near-zero repeat purchases.',
      solution: 'Full redesign with custom product storytelling sections, streamlined checkout trust layer, and Klaviyo retention flows.',
      results: [['+128%', 'conversion rate'], ['+64%', 'average order value'], ['31%', 'of revenue from email']],
    },
  },

  'seo-optimization': {
    benefits: [
      ['Traffic you don\u2019t pay for twice', 'Rankings compound: the article that ranks today keeps sending leads next year — no ad budget required.'],
      ['Buyers, not just visitors', 'Intent-led keyword strategy targets searches people make right before they purchase.'],
      ['A technically sound foundation', 'Speed, crawlability and structured data fixed first — so content actually gets the rankings it earns.'],
      ['Reporting you can read', 'Monthly reports in plain language: what moved, why, and what happens next.'],
    ],
    approach: [
      ['Deep audit & benchmark', 'Technical crawl, content inventory, backlink profile and competitor gap analysis — the honest starting picture.'],
      ['Fix the foundation', 'Indexation, crawlability, internal linking and schema — the unglamorous work that unlocks everything.'],
      ['Content that earns rankings', 'Search-intent-mapped pages and articles, written for humans and structured for crawlers.'],
      ['Build authority, report monthly', 'Digital PR and link earning paired with transparent monthly reporting against agreed KPIs.'],
    ],
    whyUs: [
      ['We build sites, so we fix sites', 'Most SEO agencies send you a ticket list. Our developers implement the technical fixes themselves.'],
      ['White-hat only', 'No link schemes, no shortcuts that evaporate at the next algorithm update.'],
      ['Local & national experience', 'From Google Business Profile domination to competitive national keywords.'],
    ],
    tech: ['Google Search Console', 'GA4', 'Ahrefs / Semrush', 'Screaming Frog', 'Schema.org markup', 'Google Business Profile', 'Surfer / NLP tooling', 'Looker Studio reports'],
    industries: ['Local services', 'Healthcare & dental', 'Legal', 'E-commerce', 'SaaS', 'Real estate'],
    caseStudy: {
      client: 'ClearView Dental', industry: 'Multi-location dental',
      challenge: 'Invisible for every valuable "near me" search while two competitors owned the local map pack.',
      solution: 'Technical cleanup, location-page architecture, Google Business Profile optimisation and a review-velocity automation.',
      results: [['#1–3', 'map pack, all locations'], ['+212%', 'organic traffic in 9 months'], ['74', 'keywords on page one']],
    },
  },

  'graphic-design': {
    benefits: [
      ['Instant visual credibility', 'Consistent, professional design makes a small business look established everywhere it appears.'],
      ['One recognisable brand', 'A defined system — logo, color, type — means every post, deck and flyer is unmistakably yours.'],
      ['Assets that convert', 'Ad creatives and social graphics designed with the same conversion thinking as our landing pages.'],
      ['Everything, on brand, on time', 'From pitch decks to packaging — one team, one visual language, predictable turnaround.'],
    ],
    approach: [
      ['Brand discovery', 'We learn your positioning, audience and competitors — design has to say something true about you.'],
      ['Concept directions', 'Multiple genuine directions, presented with rationale — never one take-it-or-leave-it option.'],
      ['Refine to a system', 'The chosen direction matures into a full identity: logo suite, palette, typography, usage rules.'],
      ['Deliver working files', 'Print-ready and web-ready formats, editable sources, and a brand guide your whole team can follow.'],
    ],
    whyUs: [
      ['Digital-native designers', 'Our design work lives on the same screens as our websites — everything is built to perform online first.'],
      ['Strategy before aesthetics', 'Pretty is easy. We design for recognition, differentiation and conversion.'],
      ['Fast, structured revisions', 'Clear rounds, clear feedback tools, no endless loops.'],
    ],
    tech: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Canva templates (handoff)', 'Lottie animation', 'Print prepress', 'Brand guideline docs'],
    industries: ['Startups & rebrands', 'Restaurants & retail', 'Events & conferences', 'Real estate', 'Fitness & wellness', 'Agencies (white-label)'],
    caseStudy: {
      client: 'Solstice Wellness', industry: 'Boutique wellness studio',
      challenge: 'A DIY logo and mismatched social graphics that undersold a genuinely premium in-studio experience.',
      solution: 'Full identity redesign — logo suite, palette, typography — plus a social template kit and signage package.',
      results: [['+180%', 'Instagram engagement'], ['1', 'complete brand system'], ['40+', 'ready-to-use templates']],
    },
  },

  'ui-ux-design': {
    benefits: [
      ['Users who don\u2019t get lost', 'Research-driven flows remove the friction that quietly kills sign-ups, purchases and retention.'],
      ['Cheaper than building twice', 'Testing prototypes with real users costs a fraction of shipping the wrong product.'],
      ['A design system, not just screens', 'Reusable components keep your product consistent and make every future feature faster to build.'],
      ['Accessible by default', 'WCAG-conscious design widens your audience and reduces legal risk.'],
    ],
    approach: [
      ['Research & user mapping', 'Interviews, analytics and journey mapping tell us where users struggle today — and why.'],
      ['Flows & wireframes', 'We design the paths before the pixels: every screen earns its place in the journey.'],
      ['High-fidelity + prototype', 'Polished UI in Figma, wired into a clickable prototype you can test with real users.'],
      ['Validate & hand off', 'Usability testing, iteration, then a developer-ready spec with tokens, states and edge cases.'],
    ],
    whyUs: [
      ['We think in systems', 'Component libraries and design tokens from day one — your product scales without design debt.'],
      ['Developer-fluent designers', 'Specs that engineers actually love: states, breakpoints and behaviour all documented.'],
      ['Evidence over opinion', 'Design debates end with user data here, not with whoever argues loudest.'],
    ],
    tech: ['Figma & FigJam', 'Maze / Useberry testing', 'Hotjar & analytics', 'Design tokens', 'Storybook handoff', 'WCAG 2.2 tooling', 'Lottie / Rive', 'Notion documentation'],
    industries: ['SaaS products', 'Mobile apps', 'Fintech', 'Health tech', 'Marketplaces', 'Internal tools'],
    caseStudy: {
      client: 'Trackline', industry: 'B2B logistics SaaS',
      challenge: 'Trial users were signing up but abandoning during a confusing 9-step onboarding — activation was stuck in single digits.',
      solution: 'Journey research, a redesigned 3-step onboarding with smart defaults, and a component library for the whole app.',
      results: [['3.4×', 'trial activation rate'], ['-52%', 'support tickets'], ['9→3', 'onboarding steps']],
    },
  },

  'maintenance-support': {
    benefits: [
      ['Sleep-easy security', 'Updates, hardening, monitoring and daily backups — handled before threats become incidents.'],
      ['Always fast, always up', 'Proactive speed and uptime monitoring catches degradation before your visitors do.'],
      ['Edits without the back-and-forth', 'Content changes, new sections and small fixes handled by the team who built the site.'],
      ['One predictable invoice', 'A flat monthly plan replaces surprise emergency-developer bills.'],
    ],
    approach: [
      ['Onboarding audit', 'We inventory your stack, fix outstanding issues and establish a clean, documented baseline.'],
      ['Protect', 'Scheduled updates, security hardening, uptime monitoring and verified off-site backups.'],
      ['Improve', 'Monthly speed checks, SEO health reviews and small enhancements from your request queue.'],
      ['Report', 'A plain-language monthly summary: what we did, what we found, what we recommend.'],
    ],
    whyUs: [
      ['The team that builds, maintains', 'Senior developers handle your site — not an outsourced ticket farm.'],
      ['We maintain any build', 'Made by us or someone else: WordPress, Shopify, GHL or custom — we\u2019ll take it over cleanly.'],
      ['Emergency response included', 'Site down or hacked? Priority response is part of every plan, not an upsell.'],
    ],
    tech: ['Uptime Robot / Pingdom', 'Cloudflare', 'WP Rocket / caching', 'ManageWP', 'Off-site backups', 'Malware scanning', 'Staging environments', 'Git version control'],
    industries: ['Any WordPress site', 'Shopify stores', 'GHL-powered businesses', 'Agencies (white-label care)', 'Nonprofits', 'Multi-site portfolios'],
    caseStudy: {
      client: 'Atlas Property Group', industry: 'Real estate · 3 sites',
      challenge: 'Three neglected WordPress sites: outdated plugins, one hacked, no backups, and a developer who\u2019d vanished.',
      solution: 'Emergency cleanup and hardening, then an ongoing care plan covering updates, backups, monitoring and monthly edits.',
      results: [['12', 'sites on one plan'], ['0', 'security incidents in 18 months'], ['0', 'data loss events']],
    },
  },
};

export const getServiceDetails = (slug) => serviceDetails[slug] || null;
