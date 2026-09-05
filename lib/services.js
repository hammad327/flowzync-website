// ─────────────────────────────────────────────────────────────
// ALL SERVICES LIVE HERE.
// Add a new object → a fully SEO-optimised page is generated
// automatically at /services/<slug> with meta tags, Service +
// FAQPage schema, breadcrumbs and a sitemap entry.
//
// Images are NOT set here — add a matching key to lib/images.js
// under `services` and it is picked up automatically.
// ─────────────────────────────────────────────────────────────
import { img } from '@/lib/images';

const RAW = [
  {
    slug: 'custom-website-design',
    icon: 'palette',
    color: 'lav',
    title: 'Custom Website Design',
    short: 'Bespoke, hand-crafted websites designed around your brand — no templates, no lookalikes.',
    seoTitle: 'Custom Website Design Services | Bespoke Web Design — Flowzync',
    seoDescription:
      'Award-quality custom website design services. We design and build bespoke, mobile-first websites tailored to your brand — fast, accessible and built to impress. Get a free design consult.',
    keywords: ['custom website design', 'bespoke web design', 'custom web design services', 'website design agency', 'custom website design services', 'bespoke website design', 'responsive web design agency', 'website redesign services', 'conversion focused web design'],
    hero:
      'Your website is your digital handshake. We design every pixel from scratch around your brand, your audience and your goals — so it could never be mistaken for anyone else\u2019s.',
    features: [
      ['Research-led design', 'Every project starts with brand, audience and competitor research — design decisions are made on evidence, not taste alone.'],
      ['Mobile-first & responsive', 'Designed for the small screen first, then scaled up beautifully — because that\u2019s where most of your visitors are.'],
      ['Design systems', 'You receive a reusable component library, so every future page stays perfectly on-brand.'],
      ['Accessibility built in', 'WCAG-conscious contrast, keyboard navigation and semantic markup from the first wireframe.'],
      ['Interactive prototypes', 'Click through your site in Figma before a line of code is written — revisions are fast and cheap at this stage.'],
      ['Pixel-perfect build', 'Our developers match the approved design to the pixel, with smooth animation and micro-interaction baked in.'],
    ],
    faqs: [
      ['How long does a custom website design take?', 'Most custom design projects take 4–8 weeks from kickoff to launch, depending on the number of pages and the depth of interactive elements. You\u2019ll see the first design concepts within the first two weeks.'],
      ['Do you use templates or page builders?', 'No. Every design is created from a blank canvas in Figma, then built by hand. You own a website nobody else on the internet has.'],
      ['Can you redesign my existing website?', 'Absolutely. Redesigns are one of our most popular projects — we audit what\u2019s working, keep your SEO equity intact, and rebuild the experience around your current goals.'],
      ['Will I be able to edit the website myself?', 'Yes. We build on editor-friendly foundations and hand over a video walkthrough, so your team can update text, images and pages without a developer.'],
    ],
  },
  {
    slug: 'landing-pages',
    icon: 'target',
    color: 'peach',
    title: 'Landing Page Design',
    short: 'High-converting landing pages for ads, launches and lead magnets — live in days, not months.',
    seoTitle: 'Landing Page Design & Development | High-Converting Pages — Flowzync',
    seoDescription:
      'Conversion-focused landing page design for ad campaigns, product launches and lead generation. Fast turnaround, A/B-test ready, built on GHL, WordPress or custom code.',
    keywords: ['landing page design', 'landing page development', 'high converting landing pages', 'ppc landing pages', 'landing page design services', 'high converting landing pages', 'ppc landing page design', 'landing page agency', 'a b testing landing pages'],
    hero:
      'A landing page has one job. We design pages with a single, relentless focus — turning your ad clicks and campaign traffic into leads and sign-ups.',
    features: [
      ['Message-match design', 'The page mirrors the promise of the ad that brought visitors there — the #1 driver of landing page conversion.'],
      ['Persuasion architecture', 'Hero, proof, objection-handling, CTA — every section is placed with intent, informed by hundreds of pages we\u2019ve shipped.'],
      ['Built lean', 'Optimised images, minimal scripts and clean markup — slow pages burn ad budget.'],
      ['A/B-test ready', 'Headlines, CTAs and layouts structured for clean split-testing from day one.'],
      ['Platform of your choice', 'GoHighLevel, WordPress, Webflow-style custom code — we build where your stack lives.'],
      ['Analytics wired in', 'Pixels, conversion events and heat-mapping configured before launch, so every visit teaches you something.'],
    ],
    faqs: [
      ['How fast can you deliver a landing page?', 'A single campaign landing page is typically designed, built and live within 5–10 business days. Rush delivery is available for launches.'],
      ['Do you write the copy too?', 'Yes — conversion copywriting is included. We interview you, study your audience, and write copy that sells, which you approve before design begins.'],
      ['Which platform do you build landing pages on?', 'Whichever fits your workflow: GoHighLevel for agencies and coaches, WordPress for content-heavy brands, or fully custom code when performance is critical.'],
      ['Can you connect the page to my CRM and email tools?', 'Always. Forms, calendars, CRM pipelines, email/SMS follow-up — the page arrives fully wired into your systems.'],
    ],
  },
  {
    slug: 'ghl-funnels',
    icon: 'funnel',
    color: 'lav',
    title: 'GHL Funnel Building',
    short: 'Complete GoHighLevel funnels — opt-in to offer to booked call — designed and wired end-to-end.',
    seoTitle: 'GoHighLevel Funnel Building Services | GHL Funnel Experts — Flowzync',
    seoDescription:
      'Expert GoHighLevel funnel building: lead magnets, VSL funnels, webinar funnels, application funnels and booking funnels — designed, built and automated by certified GHL specialists.',
    keywords: ['ghl funnels', 'gohighlevel funnel building', 'ghl funnel expert', 'highlevel funnel design', 'gohighlevel funnel builder', 'ghl funnel design', 'sales funnel agency', 'vsl funnel design', 'booking funnel gohighlevel'],
    hero:
      'From cold click to booked call — we design and build complete GoHighLevel funnels with every page, form, calendar and follow-up sequence connected and tested.',
    features: [
      ['Lead magnet funnels', 'Opt-in pages, delivery automation and nurture sequences that turn downloads into conversations.'],
      ['VSL & webinar funnels', 'Registration, watch and replay pages with behaviour-based follow-up built in.'],
      ['Application funnels', 'Qualify high-ticket prospects automatically with multi-step forms and smart routing.'],
      ['Booking funnels', 'Calendar-first funnels with reminder sequences that dramatically cut no-shows.'],
      ['Custom-coded sections', 'We break past the builder\u2019s limits with custom CSS/JS, so GHL funnels look like premium websites.'],
      ['Full tracking setup', 'UTMs, pixels and conversion events configured — you\u2019ll know exactly which ads print appointments.'],
    ],
    faqs: [
      ['What types of funnels do you build in GoHighLevel?', 'Lead magnet, VSL, webinar, application, booking and product-launch funnels — plus custom hybrid flows for agencies, coaches, clinics and local services.'],
      ['Can you make GHL funnels look custom and premium?', 'Yes. We layer custom CSS and JavaScript over the funnel builder, so your pages look hand-coded — most people can\u2019t tell they\u2019re built in GHL.'],
      ['Do funnels include the automation and follow-up?', 'Every funnel ships with its workflows: instant lead response, nurture emails/SMS, appointment reminders and pipeline updates.'],
      ['I already have a funnel that underperforms — can you fix it?', 'That\u2019s a funnel rescue, and we love them. We audit the data, find the leaks and rebuild the weak steps rather than starting from zero.'],
    ],
  },
  {
    slug: 'automations',
    icon: 'bolt',
    color: 'mint',
    title: 'Business Automations',
    short: 'Workflows across GHL, Zapier and Make that answer, follow up, remind and report — automatically.',
    seoTitle: 'Business Automation Services | GHL, Zapier & Make Workflows — Flowzync',
    seoDescription:
      'Done-for-you business automation: lead follow-up, appointment reminders, review requests, pipeline updates and app integrations built on GoHighLevel, Zapier and Make.com.',
    keywords: ['business automation services', 'ghl automations', 'zapier expert', 'workflow automation agency', 'business process automation services', 'marketing automation agency', 'zapier automation expert', 'make com automation services', 'speed to lead automation'],
    hero:
      'Every manual task is a leak in your day. We map your processes and rebuild them as automations — so every lead gets answered and nothing falls through the cracks.',
    features: [
      ['Speed-to-lead systems', 'Automatic SMS and email replies the moment a lead arrives — while your competitors are still checking their inbox.'],
      ['Missed-call text-back', 'Every unanswered call triggers an automatic text, rescuing conversations that would have gone to a competitor.'],
      ['Appointment automation', 'Booking confirmations, smart reminders and easy rescheduling that keep calendars full.'],
      ['Review & reputation flows', 'Happy-customer moments automatically become 5-star Google reviews.'],
      ['Cross-app integration', 'Zapier and Make.com bridges between your CRM, forms, sheets, invoicing and 6,000+ other apps.'],
      ['Internal ops automation', 'Task creation, team notifications and reporting digests that run your back office quietly.'],
    ],
    faqs: [
      ['Which tools do you build automations with?', 'GoHighLevel workflows are our home turf; we also build in Zapier and Make.com and connect them to virtually any app with an API.'],
      ['How do we know what to automate first?', 'We start with a process-mapping session, score each manual task by frequency and impact, and automate the highest-value leaks first.'],
      ['Will automations feel robotic to my customers?', 'Not when they\u2019re written well. We craft every message to sound like your brand — most customers never realise a workflow sent it.'],
      ['What happens if an automation breaks?', 'Every build includes error alerts and documentation, and our care plans cover monitoring and fixes, so issues are caught before you notice them.'],
    ],
  },
  {
    slug: 'ghl-crm-setup',
    icon: 'grid',
    color: 'lav',
    title: 'GHL CRM & SaaS Setup',
    short: 'Complete GoHighLevel account architecture — pipelines, calendars, snapshots and white-label SaaS.',
    seoTitle: 'GoHighLevel CRM Setup & SaaS Mode Configuration — Flowzync',
    seoDescription:
      'Professional GoHighLevel setup: CRM pipelines, calendars, snapshot development and white-label SaaS mode configuration for agencies. Launch a clean, scalable GHL account.',
    keywords: ['gohighlevel setup', 'ghl crm setup', 'ghl snapshot', 'ghl saas mode', 'gohighlevel crm setup service', 'ghl saas mode setup', 'crm migration services', 'gohighlevel expert', 'ghl snapshot setup'],
    hero:
      'A messy GHL account slows everything down. We architect your CRM the right way — clean pipelines, smart calendars, reusable snapshots and SaaS mode ready to sell.',
    features: [
      ['Account architecture', 'Pipelines, stages, custom fields and tags designed around how your business actually sells.'],
      ['Calendar systems', 'Round-robin, collective and service calendars with buffers, routing and reminders configured.'],
      ['Snapshot development', 'Your best setup packaged as a snapshot — deploy a proven system to every new sub-account in minutes.'],
      ['SaaS mode launch', 'Plans, pricing, Stripe billing and automated onboarding for selling GHL as your own software.'],
      ['Team training', 'Loom libraries and live sessions so your team actually uses what we build.'],
      ['Migration & cleanup', 'Contacts, pipelines and automations moved safely from your old CRM or an inherited messy account.'],
    ],
    faqs: [
      ['Can you set up SaaS mode for my agency?', 'Yes — pricing plans, Stripe integration, onboarding flows and the client-facing experience, plus guidance on packaging and positioning your offer.'],
      ['What is a GHL snapshot and why do I need one?', 'A snapshot is a saved template of a complete account setup. If you serve one niche repeatedly, a snapshot means every new client gets a proven system in minutes rather than being rebuilt from scratch.'],
      ['Can you migrate us from another CRM?', 'We regularly migrate from HubSpot, Pipedrive, Keap, ActiveCampaign and spreadsheets — contacts, deals, automations and history included.'],
      ['Do you offer ongoing GHL support after setup?', 'Yes, through monthly care plans that cover updates, new workflows, troubleshooting and priority support.'],
    ],
  },
  {
    slug: 'wordpress-website-design',
    icon: 'code',
    color: 'peach',
    title: 'WordPress Website Design',
    short: 'WordPress website design and development — custom themes, plugins, forms and care plans.',
    seoTitle: 'WordPress Website Design & Development Services | Flowzync',
    seoDescription:
      'WordPress website design and development: custom theme design, plugin development, custom forms, migrations, security hardening and monthly care plans. Get a fixed quote.',
    keywords: ['wordpress website design', 'wordpress website design services', 'wordpress web design agency', 'custom wordpress theme design', 'custom wordpress plugin development', 'custom wordpress forms', 'wordpress development services', 'wordpress maintenance services', 'wordpress redesign'],
    hero:
      'WordPress powers nearly half the web — but most WordPress sites are slow and fragile. Ours are different: fully custom design, hand-built themes, purpose-built plugins and forms — lean, hardened and built to be maintained.',
    features: [
      ['Custom theme design & development', 'Your design, hand-coded into a bespoke theme with zero bloat — nothing generic underneath.'],
      ['Custom plugin development', 'Need functionality no plugin offers? We design and build custom WordPress plugins — booking systems, calculators, member areas, integrations — coded to WordPress standards and update-safe.'],
      ['Custom forms & lead capture', 'Multi-step forms, conditional logic, file uploads, payment forms — designed to match your brand and wired straight into your CRM and email automations.'],
      ['Custom design from scratch', 'Every layout designed for your brand in Figma first — no themes, no templates, no lookalikes.'],
      ['Builder-based builds', 'Prefer Elementor or Gutenberg? We build clean, maintainable sites your team can edit easily.'],
      ['Performance engineering', 'Caching, image pipelines and a strict code diet, so pages stay quick as the site grows.'],
      ['Security hardening', 'Firewalls, malware scanning, automated backups and login protection as standard.'],
      ['WooCommerce builds', 'Full online stores with payment, shipping, tax and inventory configured.'],
      ['Monthly care plans', 'Updates, monitoring, backups and unlimited small edits — your site stays healthy forever.'],
    ],
    faqs: [
      ['Do you build with page builders or custom code?', 'Both, depending on your needs. Custom code for maximum performance and uniqueness; Elementor or Gutenberg when your team needs easy self-editing.'],
      ['My WordPress site is slow — can you fix it without a rebuild?', 'Usually yes. Our optimisation service tackles the common causes: uncompressed images, render-blocking scripts, missing caching and plugin overlap. We audit first and tell you honestly whether optimisation or a rebuild is the better investment.'],
      ['Do you handle hosting?', 'We recommend and configure premium managed hosting suited to your traffic, and manage it for you under a care plan if you prefer hands-off.'],
      ['What does a care plan include?', 'Weekly updates, daily backups, uptime and security monitoring, monthly reports and a bank of small content edits.'],
      ['Can you build a custom WordPress plugin for my specific needs?', 'Yes — custom plugin design and development is one of our core WordPress services. We build booking engines, calculators, membership features, API integrations and admin tools, all coded to WordPress standards so they survive core updates.'],
      ['Do you create custom forms in WordPress?', 'Absolutely. We design custom forms — multi-step, conditional, payment-enabled — that match your brand and feed leads directly into your CRM, email list and automation workflows.'],
    ],
  },
  {
    slug: 'elementor-design',
    icon: 'layers',
    color: 'lav',
    title: 'Elementor Design',
    short: 'Elementor websites designed from scratch — custom layouts your team can edit without a developer.',
    seoTitle: 'Elementor Website Design Services | Custom Elementor Builds — Flowzync',
    seoDescription:
      'Elementor design services: custom Elementor website design, template kits, global styles, custom CSS beyond the builder limits, and training so your team can edit safely.',
    keywords: ['elementor design', 'elementor website design', 'elementor design services', 'elementor developer', 'elementor pro design', 'custom elementor website', 'elementor template kit', 'elementor redesign', 'hire elementor expert'],
    hero:
      'Elementor gets a bad reputation because most Elementor sites are built badly — stacked widgets, no global styles, twelve plugins doing one job. We design in Figma first, then build a clean Elementor site with proper global typography, reusable templates and custom CSS where the builder runs out of road.',
    features: [
      ['Designed before it is built', 'Every page is designed in Figma and approved by you before a single widget is placed. Elementor is the build tool, not the design tool.'],
      ['Global styles, set properly', 'Fonts, colours, spacing and buttons are defined once in Global Settings — change a brand colour and the whole site updates.'],
      ['Reusable templates', 'Headers, footers, hero blocks and CTA sections are built as saved templates, so new pages take minutes rather than hours.'],
      ['Custom CSS beyond the builder', 'Animations, layouts and effects Elementor cannot do natively are added with clean custom CSS — without breaking the visual editor.'],
      ['Plugin diet', 'We use as few add-ons as possible. Fewer plugins means fewer conflicts, fewer updates and fewer things to break.'],
      ['Handover and training', 'You get a recorded walkthrough of your own site, so your team can edit text, images and sections confidently.'],
    ],
    faqs: [
      ['What does Elementor design include?', 'A complete Elementor website: Figma design of every page, an Elementor build using global typography and colour settings, custom header and footer templates, reusable section templates, mobile-responsive editing at every breakpoint, custom CSS where needed, and a recorded training walkthrough at handover.'],
      ['Is Elementor bad for SEO?', 'Elementor itself does not harm SEO. Poorly built Elementor sites do — bloated markup, unoptimised images, too many plugins and no heading structure. We build with clean heading hierarchy, compressed images, minimal add-ons and proper schema, which is why our Elementor builds are indexed and ranked normally.'],
      ['Can you redesign my existing Elementor site?', 'Yes. We audit the current build, keep the content and URLs that are already earning traffic, then rebuild the design, global styles and templates properly. Redesigns are usually faster than starting from zero.'],
      ['Will I be able to edit the site myself?', 'That is the main reason to choose Elementor. Because everything is built with global styles and saved templates, you can edit text, swap images, duplicate sections and publish new pages without touching code or calling us.'],
      ['Do you use Elementor Pro?', 'Yes. Elementor Pro is required for theme builder templates, popups and dynamic content. The licence is yours — we set it up on your account, so nothing is tied to us.'],
    ],
  },
  {
    slug: 'woocommerce-development',
    icon: 'cart',
    color: 'peach',
    title: 'WooCommerce Development',
    short: 'WooCommerce stores built end to end — products, payments, shipping, tax and inventory sync.',
    seoTitle: 'WooCommerce Development Services | WooCommerce Store Build — Flowzync',
    seoDescription:
      'WooCommerce development services: custom store design, checkout optimisation, payment gateway and shipping setup, inventory sync, subscriptions and platform migrations.',
    keywords: ['woocommerce development', 'woocommerce development services', 'woocommerce developer', 'woocommerce store setup', 'custom woocommerce development', 'woocommerce checkout customization', 'woocommerce migration', 'woocommerce agency', 'wordpress ecommerce development'],
    hero:
      'WooCommerce runs your store on your own hosting, with no per-sale platform fee and no limits on how the checkout works. We build the whole thing: product architecture, payment gateways, shipping rules, tax, inventory sync and a checkout designed to be finished rather than abandoned.',
    features: [
      ['Store architecture', 'Products, variations, attributes and categories structured so customers can actually find things — and so you can add stock without a developer.'],
      ['Payment gateways', 'Stripe, PayPal, local bank gateways and cash on delivery, configured and tested end to end in live mode before launch.'],
      ['Shipping and tax rules', 'Zone-based rates, weight and price tiers, free-shipping thresholds and correct tax handling for the regions you sell to.'],
      ['Inventory sync', 'Stock levels kept in step with your warehouse, supplier feed or POS, so the site never sells what you do not have.'],
      ['Checkout optimisation', 'A shorter, distraction-free checkout with the fields you actually need, express payment options and clear error handling.'],
      ['Subscriptions and bookings', 'Recurring products, memberships and bookable services when your business model needs more than a one-off sale.'],
      ['Migrations', 'Moves from Shopify, Wix, Magento or an older WooCommerce install — products, customers, orders and 301 redirects so rankings survive.'],
    ],
    faqs: [
      ['What does WooCommerce development include?', 'A complete online store: product and category structure, custom store design, payment gateway setup, shipping zones and rates, tax configuration, inventory management, checkout customisation, order and email notifications, and analytics with e-commerce tracking enabled.'],
      ['Is WooCommerce better than Shopify?', 'They suit different businesses. WooCommerce gives you full ownership, no per-transaction platform fee and unlimited customisation of the checkout, but you are responsible for hosting, updates and security. Shopify handles the infrastructure for you at a monthly cost with a more limited checkout. We build WooCommerce; if Shopify is genuinely the better fit for your catalogue and margins we will tell you so rather than sell you the wrong platform.'],
      ['Can you connect WooCommerce to my inventory or POS system?', 'Yes. We integrate WooCommerce with warehouse systems, supplier feeds, accounting software and point-of-sale tools through their APIs or through Zapier and Make.com, so stock and orders stay in sync automatically.'],
      ['Can you migrate my existing store to WooCommerce?', 'Yes. We move products, variants, customers, order history and reviews, then build a complete 301 redirect map so your existing search rankings carry over to the new URLs.'],
      ['Do you support the store after launch?', 'Yes, through monthly care plans covering WooCommerce and plugin updates, security monitoring, daily backups, and help with new products, promotions and seasonal changes.'],
    ],
  },
  {
    slug: 'seo-optimization',
    icon: 'search',
    color: 'mint',
    title: 'SEO Optimization',
    short: 'Technical SEO, on-page optimisation and content architecture that earn rankings that last.',
    seoTitle: 'SEO Optimization Services | Technical & On-Page SEO — Flowzync',
    seoDescription:
      'Professional SEO services: technical audits, on-page optimisation, schema markup, site speed, content architecture and local SEO — sustainable rankings without shortcuts.',
    keywords: ['seo optimization services', 'technical seo agency', 'on page seo', 'local seo services', 'technical seo services', 'local seo agency', 'seo audit services', 'on page seo optimization', 'google business profile optimization'],
    hero:
      'Rankings aren\u2019t luck — they\u2019re architecture. We fix the technical foundation, structure your content around real searches, and build authority the sustainable way.',
    features: [
      ['Technical SEO audits', 'Crawlability, indexation, redirects, duplicate content — a prioritised fix-list, not a 90-page PDF nobody reads.'],
      ['On-page optimisation', 'Titles, headings, internal links and content tuned to the searches your customers actually make.'],
      ['Schema markup', 'Structured data for services, FAQs, reviews and articles that earns richer search listings.'],
      ['Site speed for SEO', 'Page experience is a ranking signal — we fix the images, scripts and caching that hold it back.'],
      ['Content architecture', 'Topic clusters and service-page structures that tell Google exactly what you should rank for.'],
      ['Local SEO', 'Google Business Profile optimisation, citations and review velocity for businesses that serve an area.'],
    ],
    faqs: [
      ['How long until SEO shows results?', 'Technical fixes can move rankings within weeks; competitive keywords typically take 3–6 months of consistent work. We report monthly, so you always see the trajectory.'],
      ['Do you guarantee first-page rankings?', 'No honest agency can — Google\u2019s algorithm isn\u2019t for sale. What we guarantee is best-practice execution, transparent reporting and strategies that have earned first-page results across many niches.'],
      ['Is SEO included when you build a website?', 'Every site we build ships SEO-ready: clean markup, meta tags, schema, sitemaps and fast loads. Ongoing ranking campaigns are a separate engagement.'],
      ['Do you do link building?', 'We focus on earning links through content and digital PR rather than buying them — slower, but the results survive algorithm updates.'],
    ],
  },
  {
    slug: 'graphic-design',
    icon: 'pen',
    color: 'peach',
    title: 'Graphic Design',
    short: 'Logos, brand identities, social media kits and marketing graphics \u2014 one consistent visual voice.',
    seoTitle: 'Graphic Design Services | Logos, Branding & Social Media \u2014 Flowzync',
    seoDescription:
      'Professional graphic design services: logo design, complete brand identities, social media templates, ad creatives, pitch decks and print materials \u2014 delivered fast, on brand, every time.',
    keywords: ['graphic design services', 'logo design', 'brand identity design', 'social media design', 'brand identity design services', 'logo design agency', 'social media graphics design', 'marketing collateral design', 'pitch deck design'],
    hero:
      'A brand people remember starts with design people notice. We craft logos, identities and marketing graphics that make every touchpoint \u2014 from Instagram post to pitch deck \u2014 unmistakably yours.',
    features: [
      ['Logo design', 'Multiple original concepts, unlimited refinement rounds on your pick, and every file format you\u2019ll ever need \u2014 print to favicon.'],
      ['Brand identity systems', 'Colour palettes, typography, usage rules and a brand guide that keeps everyone \u2014 including future designers \u2014 on the same page.'],
      ['Social media kits', 'Post, story and cover templates designed for your brand, editable by your team in Canva or Figma.'],
      ['Ad creatives', 'Scroll-stopping static and animated creatives for Meta, Google and TikTok campaigns \u2014 built around one clear message each.'],
      ['Pitch decks & documents', 'Investor decks, proposals and one-pagers that look as sharp as the ideas inside them.'],
      ['Print & packaging', 'Business cards, brochures, signage and packaging \u2014 print-ready files with correct bleeds and colour profiles.'],
    ],
    faqs: [
      ['How many logo concepts do I get?', 'Three original directions in the first round. You pick one and we refine it until it\u2019s right \u2014 refinement rounds on your chosen concept are unlimited.'],
      ['Do I own the final designs?', 'Fully. On final payment you receive all source files (AI, Figma, PSD) and complete ownership \u2014 no licensing games, no recurring fees.'],
      ['Can you match my existing brand style?', 'Absolutely. Send us your current materials and we\u2019ll design new assets that feel like they were always part of the family.'],
      ['What file formats will I receive?', 'Everything: vector (AI, SVG, EPS, PDF) for print and scaling, plus PNG/JPG/WebP exports sized for web and social \u2014 with transparent versions included.'],
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: 'layers',
    color: 'lav',
    title: 'UI/UX Design',
    short: 'Research-driven product and app design — wireframes, prototypes and design systems in Figma.',
    seoTitle: 'UI/UX Design Services | Web & App Product Design — Flowzync',
    seoDescription:
      'UI/UX design services for web apps, SaaS products and mobile apps: user research, wireframing, interactive Figma prototypes, usability testing and complete design systems.',
    keywords: ['ui ux design services', 'saas product design', 'app ui design', 'figma design agency', 'ui ux design agency', 'product design services', 'design system development', 'app ui design services', 'usability testing services'],
    hero:
      'Great products feel obvious. We design interfaces where users never have to think about where to click — through research, testing and relentless simplification.',
    features: [
      ['User research', 'Interviews, analytics and journey mapping — we design for evidence, not assumptions.'],
      ['Wireframing & flows', 'Low-fidelity structure first, so we solve navigation and logic before pixels get precious.'],
      ['Interactive prototypes', 'Clickable Figma prototypes that feel real — test the product before building it.'],
      ['Usability testing', 'Watch real users attempt real tasks; fix the friction while it\u2019s still cheap to fix.'],
      ['Design systems', 'Tokens, components and documentation that keep every future screen consistent.'],
      ['Developer handoff', 'Specs, assets and annotations engineers actually enjoy receiving.'],
    ],
    faqs: [
      ['Do you design mobile apps as well as websites?', 'Yes — iOS, Android and responsive web apps, all with platform-appropriate patterns.'],
      ['Can you work with our in-house developers?', 'That\u2019s our favourite setup. We deliver a documented design system and stay available through implementation for questions and QA.'],
      ['What if we only need a design audit?', 'We offer standalone UX audits: a recorded walkthrough plus a prioritised list of improvements you can implement with any team.'],
      ['Which tools do you use?', 'Figma for design and prototyping, FigJam for workshops, and Maze or moderated sessions for testing.'],
    ],
  },
  {
    slug: 'maintenance-support',
    icon: 'shield',
    color: 'peach',
    title: 'Maintenance & Support',
    short: 'Care plans that keep your site fast, secure and up to date — with a team on call.',
    seoTitle: 'Website Maintenance & Support Plans — Flowzync',
    seoDescription:
      'Website maintenance and support plans: updates, security monitoring, daily backups, uptime alerts, monthly reports and fast content edits for WordPress, Shopify and GHL.',
    keywords: ['website maintenance services', 'wordpress maintenance plan', 'website support agency', 'website maintenance services', 'wordpress care plans', 'website support agency', 'website security monitoring', 'emergency website repair'],
    hero:
      'A website isn\u2019t a launch — it\u2019s a living thing. Our care plans keep it patched, backed up, monitored and improving, while you stay focused on the business.',
    features: [
      ['Updates & patching', 'Core, plugin and theme updates applied safely on a weekly cycle with rollback protection.'],
      ['Security monitoring', '24/7 malware scanning, firewall management and login protection.'],
      ['Daily backups', 'Off-site, restorable backups — the difference between a bad hour and a bad month.'],
      ['Uptime & performance alerts', 'We usually know your site is down before you do, and fix it before customers notice.'],
      ['Content edits included', 'A monthly bank of small changes — new sections, banner swaps, copy tweaks — handled for you.'],
      ['Monthly health reports', 'Plain-English reports covering security, speed, traffic and what we improved.'],
    ],
    faqs: [
      ['Do you support sites you didn\u2019t build?', 'Yes. New care-plan clients get an onboarding audit, so we know your site inside-out before taking responsibility for it.'],
      ['What counts as a "small edit"?', 'Anything under \u224830 minutes: text changes, image swaps, adding a testimonial, tweaking a section. Larger work is quoted separately at plan-holder rates.'],
      ['How fast do you respond to emergencies?', 'Critical issues (site down, hack suspected) are acknowledged within 1 hour on business days and worked continuously until resolved.'],
      ['Can I cancel anytime?', 'Yes — plans are month-to-month with no lock-in. We keep clients by being useful, not by contract.'],
    ],
  },
];

export const services = RAW.map((s) => ({ ...s, img: img('services', s.slug) }));

export const getService = (slug) => services.find((s) => s.slug === slug);
