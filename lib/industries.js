// ─────────────────────────────────────────────────────────────
//  INDUSTRY LANDING PAGES
//
//  One page per SECTOR at /industries/<slug> — not per trade.
//
//  A page called "websites for plumbers" tells a dentist we don't
//  serve them. A page called "home & property services" covers
//  plumbers, leak detection, electricians, roofers and HVAC in one
//  place, and the `covers` list below gives each of those trades its
//  own long-tail search terms without needing forty separate pages.
//
//  Add an object here and the page, its schema, its FAQ block and its
//  sitemap entry are generated automatically.
//
//  Images: add a matching key under `industries` in lib/images.js.
// ─────────────────────────────────────────────────────────────
import { img } from '@/lib/images';

const RAW = [
  {
    slug: 'home-and-property-services',
    trade: 'Home & property services',
    title: 'Websites for Home & Property Services',
    seoTitle: 'Website Design for Home Service Businesses | Trades & Property — Flowzync',
    seoDescription:
      'Websites for plumbers, leak detection specialists, electricians, roofers, HVAC and property maintenance firms: emergency call buttons, booking forms, service area pages and local SEO.',
    keywords: ['website for home service business', 'website for plumbers', 'website for water leakage detection', 'electrician website design', 'roofing website design', 'hvac website design', 'trades website design', 'property maintenance website'],
    covers: ['Plumbing', 'Water leak detection', 'Electrical', 'Roofing', 'HVAC & heating', 'Drainage', 'Damp & mould', 'Pest control', 'Locksmiths', 'Glazing', 'Landscaping', 'Cleaning services', 'Property maintenance', 'Restoration & flood damage'],
    intro:
      'Most enquiries in this sector are urgent. Something is leaking, broken, blocked or dangerous, the customer searches on a phone, and they call the first business that looks capable and answers. A website here has to win a ten-second decision — which means the phone number is never more than one tap away, you can prove you cover their street, and you rank when the search says "emergency plumber near me" or "leak detection near me".',
    pains: [
      ['Calls lost to a buried phone number', 'A sticky tap-to-call bar sits on every screen on mobile, so the number is never more than one tap away no matter how far someone has scrolled.'],
      ['No way to book outside working hours', 'An online booking form capturing job type, urgency and address catches the 9pm burst-pipe enquiry that would otherwise go to a competitor.'],
      ['Not showing up in nearby towns', 'A dedicated page for each town or postcode you cover, with genuinely different content, so you rank across your whole service area rather than one place.'],
      ['Nothing proving you are trustworthy', 'Licence and certification numbers, insurance details, real photos of your team and vans, and reviews pulled onto the page.'],
      ['Enquiries sitting unanswered', 'Every submission triggers an instant text and email to you, and drops the job into your dashboard so nothing is missed on a busy day.'],
    ],
    sections: [
      ['Emergency call button', 'A fixed call bar on mobile, with your hours and an out-of-hours message so callers know what to expect before they dial.'],
      ['Service area map', 'A clear map and list of the towns and postcodes you cover, which doubles as the internal linking structure for your local SEO.'],
      ['Job booking form', 'Job type, urgency, address, photo upload and preferred time — enough to quote accurately without a site visit for routine work.'],
      ['A page per job type', 'Boiler repair, leak detection, rewiring, roof repair, drainage — each its own page, because each is a separate search with separate intent.'],
      ['Before-and-after galleries', 'Real jobs with real photos. In this sector, evidence of the work outperforms any amount of design polish.'],
      ['Review collection', 'Automated review requests after each job, so your profile keeps gathering the recent reviews that drive local rankings.'],
    ],
    faqs: [
      ['Do you build websites for plumbers and leak detection companies?', 'Yes. Plumbing, water leak detection, drainage, damp and restoration all sit in this sector and share the same requirements: an always-visible phone number, a service area you can prove, per-service pages, and automatic responses so no emergency enquiry sits unanswered. We build a dedicated page for each service you actually offer.'],
      ['What about electricians, roofers and HVAC businesses?', 'Same sector, same build. The differences are in the detail — certification display for electrical work, before-and-after galleries for roofing, seasonal service plans for HVAC — and we tailor those per business rather than shipping the same template.'],
      ['How much does a website for a home service business cost?', 'It depends on how many services and service areas you need. A focused site covering your main services and one town sits at the lower end; a site covering several trades across a dozen postcodes with online booking sits higher. Every quote is fixed, itemised and agreed before work starts.'],
      ['Will my website show up on Google Maps?', 'Map pack ranking is driven mainly by your Google Business Profile, not your website alone. We set the profile up properly, add LocalBusiness schema with matching details, build consistent directory citations, and put a review request automation in place. The website supports the profile; together they move you into the top three.'],
      ['Do I need a separate page for each town I cover?', 'If you want to rank in those towns, yes. Google needs a page genuinely about your service in that specific area. One page listing thirty towns ranks for none of them.'],
    ],
    related: ['wordpress-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'healthcare-and-medical-practices',
    trade: 'Healthcare & medical',
    title: 'Websites for Healthcare & Medical Practices',
    seoTitle: 'Website Design for Doctors, Dentists & Clinics | Medical Websites — Flowzync',
    seoDescription:
      'Websites for dental practices, doctors, clinics, physiotherapists, opticians and veterinary surgeries: online appointment booking, treatment pages, transparent pricing and local SEO.',
    keywords: ['website for dental doctors', 'website for dental clinics', 'dentist website design', 'doctor website design', 'medical practice website', 'clinic website design', 'physiotherapy website design', 'veterinary website design', 'healthcare web design'],
    covers: ['Dental practices', 'Doctors & GP surgeries', 'Private clinics', 'Physiotherapy', 'Chiropractic', 'Opticians', 'Veterinary surgeries', 'Dermatology & aesthetics', 'Mental health practices', 'Fertility & IVF', 'Cosmetic surgery', 'Diagnostics & imaging'],
    intro:
      'Choosing a healthcare provider is a trust decision, and often an anxious one. People compare two or three practices, read reviews, look for prices, and quietly judge whether the place looks clean, modern and competent. A medical website has to answer the questions patients are too polite to ask — what it costs, whether it will hurt, who will be treating them — and then make booking effortless.',
    pains: [
      ['Patients phoning only during opening hours', 'Online appointment booking that works at 11pm, with treatment type and preferred times, syncing to your practice calendar.'],
      ['No pricing anywhere on the site', 'Clear price ranges per treatment. Practices that publish prices get fewer time-wasting calls and more booked consultations, not fewer.'],
      ['Nervous patients bouncing', 'Pages that address anxiety directly: sedation options, what each appointment involves, how long it takes, what recovery is like.'],
      ['Cosmetic and elective work with nothing to show', 'Before-and-after galleries with proper consent handling — the single most persuasive element on any elective treatment page.'],
      ['Losing to the practice down the road', 'Treatment pages built for how patients actually search — "invisalign cost", "emergency dentist", "private GP near me" — rather than one generic services page.'],
    ],
    sections: [
      ['Online appointment booking', 'Treatment type, new or existing patient, preferred clinician and time slot, connected to your practice management system where the API allows.'],
      ['A page per treatment', 'Implants, orthodontics, physiotherapy, consultations, diagnostics — each with its own page, pricing, FAQs and schema.'],
      ['Meet the clinicians', 'Photos, qualifications, registration numbers and a sentence of personality for each. Patients book people, not practices.'],
      ['Trust signals', 'Registration bodies, practice accreditations, hygiene standards and recent reviews shown on the page.'],
      ['New patient journey', 'A clear explanation of the first visit, what to bring, and what happens afterwards — the page that converts nervous browsers.'],
      ['Accessible by default', 'Proper contrast, keyboard navigation and screen reader support. In healthcare this is both an ethical baseline and, in many places, a legal one.'],
    ],
    faqs: [
      ['Do you build websites for dental doctors and dental clinics?', 'Yes, dentistry is one of our most common briefs. A dental website typically needs online appointment booking, a separate page for each treatment with indicative pricing, clinician profiles with qualifications and registration numbers, before-and-after galleries where permitted, new patient information, and visible accreditation details. Treatment pages and booking are what actually generate appointments.'],
      ['What other medical practices do you work with?', 'Doctors and private GP surgeries, physiotherapy and chiropractic clinics, opticians, veterinary surgeries, dermatology and aesthetics, mental health practices, fertility clinics and diagnostics providers. The structure is similar across all of them; the regulatory detail and the patient anxieties differ, and that is what we tailor.'],
      ['Can patients book appointments online?', 'Yes. We build booking that captures treatment type, whether they are a new or existing patient, and preferred timing. Where your practice management software offers an API or embeddable widget, we connect directly to live availability. Where it does not, bookings arrive as structured requests your reception team confirms.'],
      ['Should we show our prices on the website?', 'In our experience yes, at least as ranges. Patients search for prices constantly, and the page that answers gets the visit and the trust. Practices that hide pricing tend to field more calls from people who were never going to book, and lose the ones who were.'],
      ['Is medical advertising regulated?', 'Yes, in most countries — covering claims, before-and-after imagery and how clinicians are described. We build to the structure your regulator expects, but final copy should be signed off by your practice, since responsibility for claims sits with the registered clinician.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'legal-and-professional-services',
    trade: 'Legal & professional services',
    title: 'Websites for Legal & Professional Services',
    seoTitle: 'Website Design for Law Firms, Accountants & Consultants — Flowzync',
    seoDescription:
      'Websites for solicitors, accountants, financial advisers, consultants and agencies: practice area pages, transparent fees, consultation booking and content that establishes authority.',
    keywords: ['law firm website design', 'solicitor website design', 'accountant website design', 'website for consultants', 'financial adviser website', 'professional services web design'],
    covers: ['Law firms & solicitors', 'Accountants & bookkeepers', 'Financial advisers', 'Insurance brokers', 'Management consultants', 'Recruitment agencies', 'Architects', 'Surveyors', 'Immigration advisers', 'Notaries', 'Business coaches', 'Marketing agencies'],
    intro:
      'Professional services sell expertise that a prospective client cannot evaluate before they buy. That makes the website an authority instrument: it has to convey competence to a cautious buyer while staying inside regulatory rules about how services can be described and what claims can be made.',
    pains: [
      ['One page trying to cover ten practice areas', 'A single services page cannot rank for ten specialisms. Each needs its own page, written for how clients actually search for that specific problem.'],
      ['Nothing that builds confidence', 'Named people with credentials, real case detail, and clear explanations of process and cost — the things that actually convert a cautious buyer.'],
      ['Fees hidden entirely', 'Even indicative ranges or fee structures dramatically reduce unqualified enquiries and increase the qualified ones.'],
      ['No path from reading to booking', 'A consultation booking flow that captures matter type and urgency, so the first conversation starts from an informed position.'],
      ['Regulatory risk in the copy', 'Claims that breach advertising rules for your profession. We build the structure; your compliance sign-off covers the wording.'],
    ],
    sections: [
      ['A page per practice area', 'Each written around the client problem rather than the internal department name, with its own FAQs and schema.'],
      ['Team and credentials', 'Profiles with qualifications, admissions, memberships and specialisms — the first thing serious clients check.'],
      ['Transparent fee structures', 'Fixed fees, hourly ranges or retainer models explained plainly where your regulator permits.'],
      ['Consultation booking', 'Matter type, urgency and preferred contact method captured up front, routed to the right fee earner.'],
      ['Insight and content hub', 'The publishing structure that establishes authority and captures long-tail search over time.'],
      ['Client portal ready', 'Secure document exchange and matter tracking where your practice needs it.'],
    ],
    faqs: [
      ['Do you build websites for law firms and accountants?', 'Yes, both. A law firm site typically needs a page for each practice area, fee earner profiles with qualifications and admissions, transparent fee information where permitted, and consultation booking. An accountancy site needs service pages by client type — sole trader, limited company, contractor — plus deadline and compliance content that earns search traffic year round.'],
      ['Can you help us rank for our practice areas?', 'That is usually the highest-return work for professional firms. A single services page cannot rank for ten practice areas. A dedicated page per area, each answering the questions clients actually ask, is what moves you up — and it takes months rather than weeks for competitive terms.'],
      ['Who is responsible for regulatory compliance in the copy?', 'We build to the structure your regulator expects and flag anything that looks like a risky claim, but final sign-off must sit with your firm. Responsibility for professional advertising claims rests with the regulated practitioner, and no agency can take that on for you.'],
      ['Do you work with consultants and agencies too?', 'Yes. Management consultants, recruiters, architects, surveyors and marketing agencies all sit in this sector. The common thread is selling expertise, which means the site has to demonstrate thinking rather than just list services.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    slug: 'ecommerce-and-retail',
    trade: 'E-commerce & retail',
    title: 'Websites for E-commerce & Retail',
    seoTitle: 'E-commerce Website Design | WooCommerce Online Stores — Flowzync',
    seoDescription:
      'Online stores for retail, DTC brands, food and drink, fashion, supplements and trade suppliers: WooCommerce builds, checkout optimisation, subscriptions and platform migrations.',
    keywords: ['ecommerce website design', 'online store design', 'woocommerce website', 'shopify store design', 'retail website design', 'dtc brand website', 'subscription ecommerce website'],
    covers: ['DTC brands', 'Fashion & apparel', 'Food & drink', 'Health & supplements', 'Beauty & skincare', 'Homeware & furniture', 'Electronics', 'Trade suppliers', 'Print & custom goods', 'Subscription boxes', 'Marketplaces', 'Wholesale & B2B'],
    intro:
      'An online store is judged in seconds and abandoned in one. The difference between a store that converts and one that does not is rarely the design — it is the product structure, the speed on mobile, the number of steps in the checkout and whether stock is accurate.',
    pains: [
      ['Customers cannot find the right product', 'Product architecture built around how people actually search, with filters, variants and categories that make sense to a shopper rather than to your warehouse.'],
      ['Carts abandoned at checkout', 'A shorter, distraction-free checkout with only the fields you need, express payment options and error messages written in plain language.'],
      ['Selling stock you do not have', 'Inventory kept in step with your warehouse, supplier feed or POS, so the site never oversells.'],
      ['No repeat purchases', 'Abandoned-cart flows, post-purchase sequences and subscription options that turn one sale into a customer.'],
      ['Rankings lost in a replatform', 'A full 301 redirect map on every migration, so the traffic you already earned survives the switch.'],
    ],
    sections: [
      ['Store architecture', 'Products, variations, attributes and categories structured so customers find things and you can add stock without a developer.'],
      ['Payments and shipping', 'Gateways, zone-based rates, weight and price tiers, free-shipping thresholds and correct tax handling, tested live before launch.'],
      ['Inventory sync', 'Connections to your warehouse system, supplier feed, accounting software or point of sale.'],
      ['Checkout optimisation', 'Fewer steps, express payment, guest checkout and clear error handling — the highest-leverage page in the whole store.'],
      ['Subscriptions and bundles', 'Recurring products, memberships and bundle pricing when your model needs more than a one-off sale.'],
      ['Retention automation', 'Abandoned cart, win-back and post-purchase email flows wired in before opening day rather than after.'],
    ],
    faqs: [
      ['Should I use WooCommerce or Shopify?', 'They suit different businesses. WooCommerce gives full ownership, no per-transaction platform fee and unlimited checkout customisation, but you are responsible for hosting, updates and security. Shopify handles the infrastructure at a monthly cost with a more limited checkout. We build WooCommerce, and if Shopify is genuinely the better fit for your catalogue and margins we will say so rather than sell you the wrong platform.'],
      ['Can you migrate my existing store?', 'Yes. We move products, variants, customers, order history and reviews between platforms, then build a complete 301 redirect map so your existing search rankings carry over to the new URLs rather than being thrown away.'],
      ['Can the store connect to my inventory or POS system?', 'Yes. We integrate with warehouse systems, supplier feeds, accounting software and point-of-sale tools through their APIs, or through Zapier and Make.com where no direct integration exists.'],
      ['Do you handle trade and wholesale pricing?', 'Yes. Trade and retail price tiers, minimum order quantities, account-only visibility and bulk discounts, either through configuration or custom development where the standard options fall short.'],
    ],
    related: ['woocommerce-development', 'custom-website-design'],
  },
  {
    slug: 'hospitality-and-food',
    trade: 'Hospitality & food',
    title: 'Websites for Hospitality & Food',
    seoTitle: 'Website Design for Restaurants, Cafés & Hotels — Flowzync',
    seoDescription:
      'Websites for restaurants, cafés, bars, hotels, caterers and food businesses: online reservations, menus your team can update, ordering integration and local SEO.',
    keywords: ['restaurant website design', 'cafe website design', 'hotel website design', 'website for caterers', 'bar website design', 'hospitality web design'],
    covers: ['Restaurants', 'Cafés & coffee shops', 'Bars & pubs', 'Hotels & B&Bs', 'Catering companies', 'Food trucks', 'Bakeries', 'Event venues', 'Wedding venues', 'Takeaways', 'Breweries & distilleries', 'Private chefs'],
    intro:
      'Hospitality websites answer three questions and are judged on how fast they do it: what is on the menu, are you open, and can I book. Everything else is decoration — and decoration that slows the page down on a phone actively costs you covers.',
    pains: [
      ['Menus stuck in a PDF', 'Menus as real, readable pages your team updates in minutes — searchable by Google, readable on a phone, no pinch-to-zoom.'],
      ['Booking sent somewhere else', 'Reservations integrated directly, so guests book without being bounced to a third-party site that upsells your competitors.'],
      ['Wrong opening hours everywhere', 'Hours managed in one place and reflected on the site, your Business Profile and every listing, including holiday exceptions.'],
      ['Invisible in "near me" searches', 'Local SEO, review collection and complete Business Profile setup — where most hospitality discovery actually happens.'],
      ['Slow, heavy image galleries', 'Food and interiors need to look good, but every image is compressed and lazy-loaded so the page still opens instantly.'],
    ],
    sections: [
      ['Menus you control', 'Update dishes, prices and specials yourself, with dietary and allergen information structured properly.'],
      ['Reservations and ordering', 'Direct booking or integration with your existing system, plus takeaway and delivery links where relevant.'],
      ['Gallery that loads fast', 'Food, room and venue photography presented properly without punishing your mobile load time.'],
      ['Events and private hire', 'A dedicated enquiry path for functions, weddings and group bookings — usually the highest-value enquiries you get.'],
      ['Local SEO and reviews', 'Business Profile optimisation and automated review requests, which drive more covers than any design choice.'],
    ],
    faqs: [
      ['Can my team update the menu ourselves?', 'Yes, and this is the single most important thing to get right. Menus are built as editable content rather than uploaded PDFs, so you change a dish or a price in a couple of minutes without calling anyone — and Google can actually read them, which a PDF makes difficult.'],
      ['Can guests book a table directly on the site?', 'Yes. We either build direct reservation capture that emails and logs each booking, or integrate your existing reservation system so availability is live. Direct booking avoids paying a platform commission on guests who found you through your own site.'],
      ['Do you work with hotels and event venues?', 'Yes. Hotels need room presentation, availability and direct booking that competes with the OTAs. Event and wedding venues need a strong gallery, capacity and package information, and a separate enquiry path for private hire.'],
      ['How do we show up in "restaurants near me" searches?', 'A fully completed Google Business Profile with correct categories, real photos and current hours, plus LocalBusiness schema on the site with matching details, and steady review collection. For hospitality, the profile usually matters more than the website — but they reinforce each other.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    slug: 'real-estate-and-construction',
    trade: 'Real estate & construction',
    title: 'Websites for Real Estate & Construction',
    seoTitle: 'Website Design for Estate Agents, Builders & Developers — Flowzync',
    seoDescription:
      'Websites for estate agents, property developers, builders, architects and contractors: property listings, project galleries, enquiry capture and CRM integration.',
    keywords: ['estate agent website design', 'real estate website design', 'construction company website', 'builder website design', 'property developer website', 'contractor website design'],
    covers: ['Estate agents', 'Letting agents', 'Property developers', 'Builders & contractors', 'Architects', 'Interior designers', 'Civil engineering', 'Surveyors', 'Property management', 'Commercial property', 'Renovation specialists', 'Landscaping & groundworks'],
    intro:
      'Property and construction buyers make slow, high-value decisions and research heavily before making contact. The website has to carry that research phase: real projects with real photographs, clear capability information, and an enquiry path that captures enough detail to qualify without a phone call.',
    pains: [
      ['Portfolio buried or missing', 'Completed projects presented properly with photography, scope, timeline and outcome — the single most persuasive content in this sector.'],
      ['Listings that need manual updating', 'Property feeds and portal integration, so listings update automatically rather than by hand every morning.'],
      ['Enquiries with no useful detail', 'Forms that capture project type, scope, budget range and timeline, so the first conversation starts qualified.'],
      ['No proof of credentials', 'Accreditations, insurance, certifications and safety records displayed where buyers look for them.'],
      ['Invisible for local project searches', 'Service and area pages built around how people search for builders and agents in a specific place.'],
    ],
    sections: [
      ['Project and property galleries', 'Structured case studies or listings with proper photography, filtering and detail pages.'],
      ['Feed and portal integration', 'Connections to property feeds, CRM systems and listing portals so nothing is maintained twice.'],
      ['Qualified enquiry capture', 'Project type, scope, budget and timeline captured up front and routed straight to your CRM.'],
      ['Credentials and compliance', 'Accreditations, insurance and certification displayed clearly, because in construction they are a purchase requirement.'],
      ['Area and service pages', 'Structured local pages so you appear for the towns and project types you actually want.'],
    ],
    faqs: [
      ['Can the site pull property listings automatically?', 'Yes. We integrate with property feeds, CRM systems and listing portals so new instructions appear on your site without anyone re-entering them. Where a direct API exists we use it; otherwise we work with scheduled feed imports.'],
      ['Do you build websites for builders and contractors?', 'Yes. Construction sites live on evidence: completed project galleries with real photography, scope and outcome detail, accreditations and insurance clearly displayed, and an enquiry form that captures enough about the project to price a conversation properly.'],
      ['Can enquiries go straight into our CRM?', 'Yes. We integrate with the major property and construction CRMs through their APIs, or through Zapier and Make.com where no direct integration exists, so every enquiry is assigned and tracked rather than sitting in an inbox.'],
      ['How do we rank for local property searches?', 'Through pages built for specific areas and project types, complete Business Profile setup, and consistent details across directories. "New build developer in [town]" is far more winnable than "property developer", and brings better qualified enquiries.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'beauty-wellness-and-fitness',
    trade: 'Beauty, wellness & fitness',
    title: 'Websites for Beauty, Wellness & Fitness',
    seoTitle: 'Website Design for Salons, Spas & Gyms | Beauty & Fitness — Flowzync',
    seoDescription:
      'Websites for salons, spas, gyms, personal trainers, med spas and wellness studios: online booking, class schedules, memberships and treatment pages that convert.',
    keywords: ['salon website design', 'spa website design', 'gym website design', 'personal trainer website', 'med spa website design', 'wellness website design', 'barber website design'],
    covers: ['Hair salons', 'Barbers', 'Nail & beauty salons', 'Spas', 'Med spas & aesthetics', 'Gyms & studios', 'Personal trainers', 'Yoga & pilates', 'Massage therapy', 'Nutritionists', 'Tattoo studios', 'Wellness clinics'],
    intro:
      'This sector runs on bookings and repeat visits, and the decision is largely visual. A prospective client wants to see the work, know the price, and book without phoning — and if any of those three is missing they move to the next result.',
    pains: [
      ['Booking only by phone or DM', 'Online booking with service, staff member and time slot, connected to your existing scheduling system.'],
      ['No prices listed', 'A clear service and price list. In beauty and fitness, hiding prices loses more bookings than any figure ever would.'],
      ['Work not shown properly', 'Gallery and portfolio presentation that does justice to results without slowing the site to a crawl.'],
      ['Memberships handled manually', 'Recurring payments, class packs and membership tiers managed automatically instead of on a spreadsheet.'],
      ['No-shows eating the schedule', 'Automated reminders by text and email, which cut no-shows more effectively than any deposit policy.'],
    ],
    sections: [
      ['Online booking', 'Service, staff member, duration and time slot, integrated with your scheduling system or built in.'],
      ['Service and price list', 'Structured, editable, and readable on a phone — the page most visitors go to first.'],
      ['Results gallery', 'Before-and-after or portfolio galleries presented properly, compressed so they load instantly.'],
      ['Memberships and class packs', 'Recurring billing, class schedules and package purchases handled automatically.'],
      ['Reminder automation', 'Booking confirmations, reminders and rebooking prompts sent without anyone remembering to.'],
    ],
    faqs: [
      ['Can clients book appointments or classes online?', 'Yes. We build booking that captures the service, preferred staff member and time slot, either integrated with your existing scheduling software or built directly into the site. Booking confirmations and reminders are automated, which is the most effective way to cut no-shows.'],
      ['Should we publish our prices?', 'Yes. In beauty, wellness and fitness, a missing price list is the most common reason someone leaves for a competitor. Clients treat hidden pricing as a warning sign, and publishing it filters out enquiries that were never going to book anyway.'],
      ['Can you handle memberships and recurring payments?', 'Yes. Membership tiers, class packs, recurring billing and package purchases are all standard, using Stripe or your existing gym or salon management platform.'],
      ['Do you work with med spas and aesthetics clinics?', 'Yes, though these sit closer to healthcare. Aesthetic treatments are advertising-regulated in most countries, particularly around before-and-after imagery and outcome claims, so we build to that structure and your practitioner signs off the copy.'],
    ],
    related: ['custom-website-design', 'automations', 'landing-pages'],
  },
  {
    slug: 'education-and-training',
    trade: 'Education & training',
    title: 'Websites for Education & Training',
    seoTitle: 'Website Design for Schools, Academies & Course Providers — Flowzync',
    seoDescription:
      'Websites for schools, tutoring services, training providers, driving schools and online course businesses: course pages, enrolment forms, payments and student portals.',
    keywords: ['school website design', 'tutoring website design', 'training provider website', 'online course website', 'driving school website', 'academy website design', 'education web design'],
    covers: ['Private schools', 'Nurseries & preschools', 'Tutoring services', 'Training providers', 'Driving schools', 'Language schools', 'Online course creators', 'Coaching businesses', 'Music & arts schools', 'Vocational training', 'Universities & colleges', 'Corporate training'],
    intro:
      'Education buyers — parents, students or employers — are comparing outcomes, credibility and logistics. The website has to make the offer legible: what is taught, by whom, how long it takes, what it costs, and how to enrol without a phone call.',
    pains: [
      ['Course information scattered', 'A structured page per course or programme with outcomes, duration, format, entry requirements and price.'],
      ['Enrolment by phone only', 'Online enrolment and payment, so an interested parent or student can commit at the moment they decide.'],
      ['No proof it works', 'Results, testimonials, accreditations and destination data presented where prospective students look.'],
      ['Impossible to update each term', 'Built so your team adds courses, dates and staff without a developer every time the timetable changes.'],
      ['Not found for specific course searches', 'Pages targeting the exact course and location terms people search, rather than one generic courses page.'],
    ],
    sections: [
      ['A page per course or programme', 'Outcomes, format, duration, entry requirements, pricing and dates — each with its own schema.'],
      ['Enrolment and payment', 'Applications, deposits and full payments handled online, with instalment options where relevant.'],
      ['Staff and credentials', 'Tutor and teacher profiles with qualifications and experience — a major factor in the decision.'],
      ['Student or parent portal', 'Secure areas for resources, schedules and progress where your organisation needs them.'],
      ['Prospectus and downloads', 'Gated or open downloads that capture enquiries from people not ready to enrol yet.'],
    ],
    faqs: [
      ['Can students enrol and pay online?', 'Yes. We build enrolment forms that capture the information you actually need, with deposits, full payment or instalment options through Stripe or your existing payment provider. Enrolments arrive in your dashboard and can be pushed to your CRM or student management system.'],
      ['Can our team add new courses and dates?', 'Yes, that is how we build them. Courses, cohort dates, tutors and prices are all editable by your staff without a developer, because in education those change every term and waiting on an agency is not workable.'],
      ['Do you build online course platforms?', 'We build the marketing site, course pages and enrolment flow, and integrate with a dedicated learning platform such as Teachable, Thinkific or LearnDash for delivery. Building a full LMS from scratch is rarely worth the cost when mature options exist.'],
      ['How do we rank for specific course searches?', 'A page per course, written around the exact terms people search — the course name plus a location, or the qualification plus "near me". A single courses page cannot rank for twenty different programmes.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'seo-optimization'],
  },
  {
    slug: 'automotive-and-transport',
    trade: 'Automotive & transport',
    title: 'Websites for Automotive & Transport',
    seoTitle: 'Website Design for Garages, Dealerships & Transport — Flowzync',
    seoDescription:
      'Websites for garages, car dealerships, MOT centres, valeting, taxi firms, logistics and vehicle hire businesses: booking systems, stock listings and quote capture.',
    keywords: ['garage website design', 'car dealership website', 'mot centre website', 'taxi website design', 'logistics website design', 'vehicle hire website', 'automotive web design'],
    covers: ['Garages & mechanics', 'MOT & servicing centres', 'Car dealerships', 'Vehicle hire', 'Valeting & detailing', 'Bodyshops', 'Tyre & exhaust centres', 'Taxi & private hire', 'Driving instructors', 'Logistics & haulage', 'Courier services', 'Fleet management'],
    intro:
      'Automotive and transport buyers are usually solving an immediate, practical problem: a booking, a quote, a vehicle. The website earns its keep by making that transaction fast and by proving you are competent and nearby.',
    pains: [
      ['Bookings taken only by phone', 'Online booking for servicing, MOT or collection, with vehicle registration lookup where available.'],
      ['Stock listed manually', 'Vehicle stock feeds that update automatically instead of being re-uploaded by hand.'],
      ['Quotes that take days', 'Structured quote forms capturing vehicle, job type and timing, with automatic acknowledgement.'],
      ['No local visibility', 'Service and area pages targeting the practical searches people actually make near them.'],
      ['Nothing proving quality', 'Certifications, warranties, reviews and real photos of the premises and team.'],
    ],
    sections: [
      ['Online booking', 'Service, MOT and repair booking with registration lookup, date selection and confirmation.'],
      ['Stock and fleet listings', 'Vehicle listings with filtering, detail pages and automatic feed updates.'],
      ['Quote capture', 'Structured forms that get you enough detail to price, with instant acknowledgement to the customer.'],
      ['Service area coverage', 'Clear coverage information and per-area pages for the towns you serve.'],
      ['Trust and credentials', 'Approvals, warranties, insurance and reviews displayed where customers check.'],
    ],
    faqs: [
      ['Can customers book a service or MOT online?', 'Yes. We build booking that captures vehicle details, job type and preferred date, with registration lookup where a data provider is available. Bookings arrive by text and email and drop into your dashboard, so nothing depends on someone answering the phone.'],
      ['Can you list our vehicle stock automatically?', 'Yes. We integrate with stock feeds and dealer management systems so listings update on their own, with filtering by make, model, price and mileage, and a detail page per vehicle.'],
      ['Do you work with taxi and logistics companies?', 'Yes. Those need quote and booking capture, coverage area information, fleet and capability detail, and often integration with dispatch or tracking systems. The build is different from a garage, but the sector logic is the same.'],
      ['How do we get found for local automotive searches?', 'Pages for each service you offer combined with the areas you cover — "MOT in [town]", "clutch replacement [town]" — plus a complete Google Business Profile and steady review collection. These searches are high intent and far more winnable than broad terms.'],
    ],
    related: ['wordpress-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'local-and-small-business',
    trade: 'Local & small business',
    title: 'Websites for Local & Small Businesses',
    seoTitle: 'Website Design for Local & Small Businesses — Flowzync',
    seoDescription:
      'Website design for local businesses in any sector: found on Google Maps, easy to contact, built to turn nearby searches into enquiries. Local SEO and review automation included.',
    keywords: ['website for local businesses', 'local business website design', 'small business website design', 'local seo website', 'affordable business website'],
    covers: ['Retail shops', 'Independent services', 'Family businesses', 'Franchises', 'Community organisations', 'Charities & nonprofits', 'Photographers', 'Event planners', 'Florists', 'Pet services', 'Childcare', 'Any sector not listed above'],
    intro:
      'A local business does not need a website that impresses other web designers. It needs to appear when somebody nearby searches, answer the three questions they have — do you do this, are you near me, are you open — and make getting in touch obvious. Everything beyond that is decoration, and decoration that slows the site down actively costs you enquiries.',
    pains: [
      ['Invisible in the map pack', 'Google Business Profile set up completely, LocalBusiness schema with consistent details, and citations that match exactly across every directory.'],
      ['Hard to contact from a phone', 'Tap-to-call, directions and opening hours in the first screen on mobile, where the overwhelming majority of local searches happen.'],
      ['A site nobody can update', 'Built so your team edits opening hours, offers, photos and pages without ringing a developer every time something changes.'],
      ['No reviews coming in', 'Automated review requests after each job or visit, because review count and recency genuinely affect local ranking.'],
      ['One page trying to rank for everything', 'A page per service and, where it makes sense, per area — the structure that lets a small business outrank bigger competitors locally.'],
    ],
    sections: [
      ['Found on the map', 'Profile optimisation, category selection, photo strategy and matching details everywhere your business is listed.'],
      ['Contact in one tap', 'Call, directions, WhatsApp and opening hours surfaced immediately rather than buried on a contact page.'],
      ['Service pages that match searches', 'Each service written around how people actually search for it locally, with FAQ schema so it can be quoted in AI answers.'],
      ['Review engine', 'Automatic requests at the right moment, with easy routing to your profile and a private path for unhappy customers.'],
      ['Self-service editing', 'A short recorded walkthrough of your own site so seasonal hours, offers and photos are yours to change.'],
    ],
    faqs: [
      ['My industry is not listed — do you still work with us?', 'Almost certainly yes. The sectors listed are simply the ones we see most often; the underlying work — a fast site, clear services, easy contact, strong local visibility — applies to any business with customers. Tell us what you do and we will tell you honestly whether we are the right fit.'],
      ['What makes a good local business website?', 'Speed on mobile, a phone number and directions available in one tap, accurate opening hours, a separate page for each service you offer, genuine photos of your premises and team, visible reviews, and LocalBusiness schema whose details match your Google Business Profile exactly. Those fundamentals outperform elaborate design almost every time.'],
      ['How do I get my business on Google Maps?', 'Claim and verify your Google Business Profile, choose the most specific primary category available, complete every field, add real photos regularly, post weekly, and collect reviews steadily. Then make sure your website carries matching LocalBusiness schema and that your details are identical across every directory listing.'],
      ['How long before a local website brings in enquiries?', 'Long-tail local searches often start producing within one to three months once the site is indexed and your Business Profile is complete. More competitive local terms typically take six months or more of consistent content and review collection. Anyone quoting a guaranteed timeline is not being straight with you.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    slug: 'dental-practices',
    trade: 'Dental practices',
    title: 'Websites for Dental Practices',
    seoTitle: 'Dental Website Design | Websites for Dentists & Orthodontists — Flowzync',
    seoDescription:
      'Websites for dental practices: online booking, treatment pages, finance options, new-patient journeys and local SEO that fills the diary rather than just looking modern.',
    keywords: ['dental website design', 'website for dentists', 'dental practice website', 'orthodontist website design', 'cosmetic dentistry website', 'dental marketing website', 'invisalign website design'],
    covers: ['General dentistry', 'Cosmetic dentistry', 'Orthodontics', 'Implants', 'Invisalign & clear aligners', 'Teeth whitening', 'Emergency dental', 'Hygienist services', 'Paediatric dentistry', 'Oral surgery', 'Dentures', 'Sedation dentistry'],
    intro:
      'Dental websites fail in a specific way: they are built to reassure existing patients when the money is in convincing anxious new ones. Someone searching for an implant or an emergency appointment is deciding between three practices in about a minute, and they are looking for price, availability and whether this will hurt. Practices that answer those three plainly book more patients than practices with nicer photography.',
    pains: [
      ['High-value treatments buried in a list', 'Implants, orthodontics and cosmetic work each get their own page with real depth — these are the treatments that pay for the site, and they are separate searches with separate intent.'],
      ['No prices, so no enquiries', 'Guide prices or "from" figures with finance options shown alongside. Practices that hide pricing entirely get more enquiries and fewer bookings, because the extra enquiries cannot afford it.'],
      ['Nothing addressing dental anxiety', 'A page written for nervous patients — sedation options, what a first visit actually involves, and how to tell the practice you are anxious before you arrive.'],
      ['Booking that means an email into a void', 'Real availability with confirmations and reminders, so a 10pm decision becomes a booked slot rather than a message someone reads on Monday.'],
      ['Invisible in local search', 'Treatment-plus-town pages, a complete Google Business Profile and automated review requests, which is what actually moves a practice into the map pack.'],
    ],
    sections: [
      ['A page per treatment', 'Implants, aligners, whitening, veneers, emergency care — each written for the person searching that specific thing, with what it involves, what it costs and how long it takes.'],
      ['New patient journey', 'What happens at a first appointment, what to bring, how registration works, and how long it takes. The single most-read page on most practice sites.'],
      ['Finance and payment plans', 'Monthly figures, providers and eligibility shown next to the treatment, because for implants and orthodontics the monthly number is the decision.'],
      ['Online booking with reminders', 'Live availability, deposits where appropriate, and automated confirmations and reminders that cut no-shows measurably.'],
      ['Before-and-after galleries', 'Real cases with consent, which persuade far harder than any amount of stock imagery — and are the reason cosmetic patients choose one practice over another.'],
      ['Review automation', 'Requests sent after appointments, so the profile keeps gathering the recent reviews local rankings depend on.'],
    ],
    faqs: [
      ['Do you build websites for dental practices?', 'Yes, and they are built around new-patient acquisition rather than as a brochure. That means a page per treatment, clear pricing and finance, a page written specifically for anxious patients, online booking with reminders, and local SEO for treatment-plus-town searches. The measure is booked appointments, not visits.'],
      ['Can patients book online?', 'Yes. We integrate with practice management software where it supports it, or build a booking flow that captures the appointment and syncs to your system. Either way patients get an immediate confirmation and a reminder before the appointment, which is the part that reduces no-shows.'],
      ['Should we publish our prices?', 'For most practices, yes — at least a "from" figure and finance options. Hiding prices does not stop the question, it just moves it to a phone call that someone has to take. Practices that publish guide pricing usually see fewer enquiries and more bookings, which is the trade you want.'],
      ['Do you handle patient data compliance?', 'We build to the requirement: enquiry forms that do not collect clinical detail they have no reason to hold, a defined retention period, consent handled properly, and no personal data quietly passed to analytics tools. For anything requiring a formal compliance sign-off, use your own adviser — we build to the standard, we do not certify it.'],
      ['How do we rank for implants in our town?', 'A page genuinely about implants in that town, a complete Google Business Profile in the right category, consistent details everywhere you are listed, and a steady flow of recent reviews. Treatment-plus-town terms are winnable in months; "dentist" alone in a city is a much longer project.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'veterinary-practices',
    trade: 'Veterinary practices',
    title: 'Websites for Veterinary Practices',
    seoTitle: 'Veterinary Website Design | Websites for Vets & Animal Clinics — Flowzync',
    seoDescription:
      'Websites for veterinary practices: emergency contact, online booking, health plan sign-ups, pet owner resources and local SEO for practice-plus-town searches.',
    keywords: ['veterinary website design', 'website for vets', 'vet practice website', 'animal clinic website design', 'veterinary marketing website', 'pet clinic website'],
    covers: ['Small animal practice', 'Emergency & out-of-hours', 'Equine practice', 'Farm & livestock', 'Exotic pets', 'Veterinary referrals', 'Pet health plans', 'Grooming & boarding', 'Mobile vets'],
    intro:
      'Two completely different people use a veterinary website. One is frightened, on a phone, at eleven at night, and needs to know whether you are open and what an emergency costs. The other is calmly comparing health plans for a new puppy. Most practice sites are built for the second and fail the first, which is the one that decides whether someone becomes a client at all.',
    pains: [
      ['Out-of-hours information hard to find', 'Emergency contact, hours and what happens after closing sit at the top of every page, not three clicks into a contact page.'],
      ['Health plans explained badly', 'A clear comparison of what each plan includes, what it costs monthly, and what it saves — with sign-up on the page rather than a phone call.'],
      ['No online booking', 'Routine appointments, vaccinations and check-ups booked without occupying a receptionist who is already on another call.'],
      ['Nothing that builds trust before a visit', 'Team profiles with real photographs and genuine background, facility photos, and clear information on what a first consultation involves.'],
      ['Losing nearby towns to bigger groups', 'Location pages for each town you draw from, so independents compete with corporate groups on the searches that matter locally.'],
    ],
    sections: [
      ['Emergency banner', 'Always visible, with hours, an out-of-hours number and plain guidance on what counts as an emergency.'],
      ['Health plan comparison', 'Side-by-side plans with monthly cost, inclusions and savings, and sign-up handled on the page.'],
      ['Online booking', 'Routine appointments and vaccinations, synced to the practice system, with confirmations and reminders.'],
      ['Pet owner resources', 'Seasonal advice, vaccination schedules, post-operative care. This is what earns organic traffic in a sector where most sites publish nothing.'],
      ['Team profiles', 'Real photographs and real backgrounds. People choose a practice on whether they trust the person, and this is the page that decides it.'],
      ['Repeat prescription requests', 'A simple form that removes a large share of the calls a practice takes every week.'],
    ],
    faqs: [
      ['Do you build websites for veterinary practices?', 'Yes. The build is shaped around two very different visitors — someone with an emergency at 11pm, and someone calmly comparing health plans for a new pet. Both need to find what they came for in seconds, and most practice sites serve only the second.'],
      ['Can clients book appointments online?', 'Yes, integrated with your practice management system where it allows, or through a booking flow that captures the appointment and syncs across. Confirmations and reminders go out automatically, which reduces both no-shows and inbound calls.'],
      ['Can we sell health plans through the website?', 'Yes. Plans are shown side by side with monthly cost and inclusions, and sign-up including payment details is handled on the page. Practices that make plans comparable online consistently sign up more members than those that require a phone call.'],
      ['Will it work for a mixed or equine practice?', 'Yes, though the structure changes. Farm and equine clients need call-out information, coverage areas and often separate contact routes from small animal clients. We build those as distinct paths rather than forcing everything through one contact page.'],
      ['How do we compete with corporate veterinary groups?', 'On the things they are bad at: being genuinely local, being a named person rather than a brand, and having recent reviews from people in the same town. A page per town you draw from, a complete Google Business Profile and steady review collection put an independent practice in front of a corporate group on local searches surprisingly often.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'ghl-crm-setup'],
  },
  {
    slug: 'accountants-and-bookkeepers',
    trade: 'Accountants & bookkeepers',
    title: 'Websites for Accountants & Bookkeepers',
    seoTitle: 'Accountant Website Design | Websites for Accounting Firms — Flowzync',
    seoDescription:
      'Websites for accountants and bookkeepers: service and package pages, fee transparency, onboarding automation, client portals and SEO for accountant-plus-town searches.',
    keywords: ['accountant website design', 'website for accountants', 'bookkeeper website design', 'accounting firm website', 'tax advisor website design', 'website for accountancy practice'],
    covers: ['Small business accounting', 'Bookkeeping', 'Tax returns & self assessment', 'Payroll', 'VAT', 'Company formation', 'Management accounts', 'R&D tax credits', 'Contractor accounting', 'Charity accounts', 'Audit'],
    intro:
      'Accountancy websites nearly all look the same and nearly all say the same thing, which is why almost none of them win work. The firms that do have usually done one uncomfortable thing: published their fees. In a market where every competitor says "trusted, professional, proactive", a page with actual monthly figures on it is the only genuine differentiator available.',
    pains: [
      ['Indistinguishable from every competitor', 'Positioning built on who you actually serve — contractors, e-commerce sellers, dental practices — instead of the generic language every firm uses.'],
      ['No fees, so no enquiries', 'Packages with monthly prices and what each includes. It is the single change that most reliably increases qualified enquiries in this sector.'],
      ['Onboarding that takes three weeks', 'Engagement letters, ID checks and authorisation handled through automated sequences instead of an email chain.'],
      ['Deadline traffic never captured', 'Content built around self assessment, VAT and year-end deadlines, which is when people actually search and when most firms publish nothing.'],
      ['Not ranking for accountant-plus-town', 'A page for each town you serve and each specialism you offer — the terms that convert, rather than the ones with the biggest volume.'],
    ],
    sections: [
      ['Packages with real prices', 'Tiered monthly packages with inclusions clearly listed, so a prospect can self-qualify before they ever contact you.'],
      ['A page per specialism', 'Contractors, e-commerce, landlords, healthcare, hospitality — each written for how that client thinks, because a landlord and a Shopify seller share almost nothing.'],
      ['Fee calculator', 'An interactive estimate based on turnover, employees and services needed, which qualifies harder than any form and gets used far more.'],
      ['Automated onboarding', 'Engagement letter, ID verification, authorisation and software access triggered by a signup, cutting weeks off the start of a relationship.'],
      ['Deadline content hub', 'Guides tied to the tax calendar, published before the deadline rather than after it. This is where the organic traffic in this sector actually is.'],
      ['Client portal', 'Secure document exchange and approvals, replacing email attachments and the compliance risk that comes with them.'],
    ],
    faqs: [
      ['Should we publish our fees?', 'In our experience it is the single highest-return change an accountancy firm can make. It costs you the enquiries from people who were never going to pay your rates — which is a saving, not a loss — and it converts far better with the people who can. Tiered packages with monthly figures work better than hourly rates.'],
      ['Can you automate client onboarding?', 'Yes, and it is usually the part with the clearest return. A signup can trigger the engagement letter, an ID and AML check, an authorisation request, software access and a welcome sequence, with a task for you only when something needs judgment. Firms typically go from a three-week onboarding to a few days.'],
      ['Can you build a client portal?', 'Yes. Secure document upload and download, approval workflows, and a record of who saw what and when. We usually integrate with the practice software you already use rather than building a parallel system nobody updates.'],
      ['How do we rank for accountant in our town?', 'Town-plus-specialism terms first — "accountant for contractors Leeds" is winnable in months and converts far better than "accountant Leeds", which every firm in the city is fighting over. Then a complete Google Business Profile, consistent citations and steady reviews.'],
      ['Do you understand the compliance side?', 'We build to it — data handling, retention, consent, and not passing client information to tools you have not disclosed. We are not your compliance adviser and will not pretend to be. Where something needs a professional sign-off, that is your institute or your own adviser, not a web studio.'],
    ],
    related: ['custom-website-design', 'automations', 'seo-optimization'],
  },
  {
    slug: 'financial-services-and-mortgage-brokers',
    trade: 'Financial & mortgage advisers',
    title: 'Websites for Financial Advisers & Mortgage Brokers',
    seoTitle: 'Mortgage Broker & Financial Adviser Websites | Compliant — Flowzync',
    seoDescription:
      'Websites for mortgage brokers and financial advisers: compliant copy, calculators, fact-find automation, appointment booking and SEO for adviser-plus-town searches.',
    keywords: ['mortgage broker website design', 'financial adviser website', 'ifa website design', 'website for mortgage advisers', 'financial services website design', 'protection adviser website'],
    covers: ['Residential mortgages', 'Buy-to-let', 'First-time buyers', 'Remortgaging', 'Equity release', 'Protection & life cover', 'Pensions', 'Investments', 'Later-life lending', 'Commercial finance'],
    intro:
      'This is the one sector where a clever marketing website can genuinely get you in trouble. Financial promotions are regulated, "guaranteed" and "best rate" are not words you may use freely, and the compliance officer will reject copy a designer thought was harmless. The sites that work here are built around calculators and clarity rather than persuasion, and they are written to pass review the first time.',
    pains: [
      ['Copy that fails compliance review', 'Written to the rules from the start — no guarantees, no unqualified comparative claims, risk warnings where they belong. It saves a full rewrite after sign-off.'],
      ['No reason to engage before contact', 'Calculators. Affordability, repayment, stamp duty, protection need — they are the single most-used feature on any adviser site and they qualify while they inform.'],
      ['Fact-finds done by phone', 'A structured online fact-find that arrives complete, so the first call is advice rather than data entry.'],
      ['Nothing separating you from a comparison site', 'Positioning around the cases comparison sites handle badly — self-employed, complex income, adverse credit, later-life lending.'],
      ['Invisible for local adviser searches', 'A page for each town and each specialism, which is where advisers still comfortably beat national brands.'],
    ],
    sections: [
      ['Calculators', 'Affordability, repayment, stamp duty and protection need. Genuinely useful, heavily used, and they qualify a prospect before you ever speak.'],
      ['Compliant service pages', 'Each product area explained clearly, with the required risk statements and no claim that will not survive review.'],
      ['Online fact-find', 'Structured, saveable, and delivered to you complete — so the first appointment starts at advice rather than at name and address.'],
      ['Appointment booking', 'Live availability with confirmations and reminders, and the fact-find attached to the booking.'],
      ['Case studies within the rules', 'Anonymised scenarios showing the kind of case you solve, written so they illustrate rather than promise.'],
      ['Regulatory footer', 'FCA registration, firm reference number, complaints procedure and required disclosures, present on every page as they must be.'],
    ],
    faqs: [
      ['Do you understand financial promotion rules?', 'We build to them: no guarantees, no unqualified "best rate" claims, risk warnings where required, and required disclosures on every page. To be plain about the limit — we are not compliance consultants. Your compliance officer or network signs the copy off, and we write it to pass that review rather than to be rewritten after it.'],
      ['Can you build mortgage calculators?', 'Yes, and they are usually the most-used part of the site. Affordability, repayment, stamp duty and protection need are all standard. They can capture a lead at the point of result, or stay open and useful — which converts better depends on your market, and it is worth testing rather than assuming.'],
      ['Can the website collect a fact-find?', 'Yes. A structured online fact-find that saves progress, handles the awkward sections properly and arrives complete. It typically removes twenty to thirty minutes from the first appointment, which is the difference between advice and admin.'],
      ['How do we compete with comparison sites?', 'Not on rate — you will lose. On the cases they handle badly: self-employed and complex income, adverse credit, later-life lending, protection alongside the mortgage. Build the pages for those and you are competing where a comparison table cannot follow.'],
      ['Is client data handled securely?', 'Fact-find and enquiry data is transmitted over TLS, stored with a defined retention period, and not passed to analytics or advertising tools. Access is limited to the people who need it. For a formal assessment against your own regulatory obligations, use your compliance adviser.'],
    ],
    related: ['custom-website-design', 'automations', 'landing-pages'],
  },
  {
    slug: 'recruitment-and-staffing',
    trade: 'Recruitment & staffing',
    title: 'Websites for Recruitment & Staffing Agencies',
    seoTitle: 'Recruitment Website Design | Job Board & Agency Sites — Flowzync',
    seoDescription:
      'Websites for recruitment and staffing agencies: job boards with structured data, candidate registration, client pages, ATS integration and SEO for role-plus-location searches.',
    keywords: ['recruitment website design', 'staffing agency website', 'job board website design', 'recruitment agency website', 'website for recruiters', 'candidate portal website'],
    covers: ['Permanent recruitment', 'Temporary & contract', 'Executive search', 'Healthcare staffing', 'Construction & trades', 'IT & technology', 'Hospitality staffing', 'Industrial & logistics', 'Education supply', 'RPO'],
    intro:
      'A recruitment website has two audiences with opposite needs and one of them is usually ignored. Candidates want jobs, fast, on a phone, without registering first. Clients want proof you can fill a role. Most agency sites are a job board with a client page bolted on, and the client side — the side that pays — is an afterthought.',
    pains: [
      ['Job listings invisible in Google for Jobs', 'JobPosting structured data on every listing, which is what puts your roles into the Google Jobs widget. Most agency sites omit it entirely and lose the traffic free.'],
      ['Registration demanded before anything useful', 'Candidates apply first and register later. Every field before the apply button costs you applications, and this sector is the worst offender.'],
      ['The client side treated as an afterthought', 'Proper client pages: sectors, process, time-to-fill, guarantees and case studies. This is the audience that pays and usually the weakest part of the site.'],
      ['Jobs entered twice', 'ATS integration so roles publish from the system you already use, with expired listings handled properly rather than left to rot.'],
      ['Not ranking for role-plus-location', '"Warehouse jobs in Doncaster" is winnable. "Recruitment agency" is not. The structure targets the terms that actually convert.'],
    ],
    sections: [
      ['Job board with structured data', 'Every listing carries JobPosting schema with salary, location and employment type, so roles appear in Google for Jobs.'],
      ['One-tap apply', 'CV upload from a phone, with the longer form afterwards. Applications rise sharply the moment registration stops being the first step.'],
      ['Client-facing pages', 'Sectors covered, your process, realistic time-to-fill, terms and guarantees, and case studies with numbers.'],
      ['Candidate resources', 'CV guidance, interview preparation and sector salary guides — the content that earns organic traffic while every competitor publishes nothing.'],
      ['ATS integration', 'Roles flow from Bullhorn, Vincere, JobAdder or similar, and applications flow back, so nothing is entered twice.'],
      ['Role-plus-location pages', 'Landing pages for your highest-volume role and area combinations, which is where the qualified candidate traffic is.'],
    ],
    faqs: [
      ['Will our jobs appear in Google for Jobs?', 'Yes, provided each listing carries valid JobPosting structured data with salary, location, employment type and a closing date, and expired roles are removed or marked as such. We build that in as standard. A surprising number of agency sites omit it and lose that traffic for nothing.'],
      ['Can you integrate with our ATS?', 'Usually. Bullhorn, Vincere, JobAdder, Recruit CRM and most modern systems have APIs we can publish from and post applications back into. Where a system has no integration route we will tell you before you commit rather than after.'],
      ['Should candidates register before applying?', 'No. Every field before the apply button costs you applications, and in a market where candidates apply to several agencies in one sitting, you lose them to whoever asked for less. Take the CV and the contact details, then ask for the rest once they are engaged.'],
      ['How do we win more clients from the website?', 'By treating the client side as a real audience rather than a tab. Sector pages describing the roles you actually fill, honest time-to-fill figures, your terms and guarantees, and case studies with numbers in them. Most agency sites have nothing here, so the bar is low.'],
      ['What should we rank for?', 'Role-plus-location terms — "HGV driver jobs Wakefield", "theatre nurse jobs Bristol". They are winnable in months and they bring the candidates you can actually place. "Recruitment agency" alone is contested by job boards with enormous domain authority and is not a realistic target.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'saas-and-technology',
    trade: 'SaaS & technology',
    title: 'Websites for SaaS & Technology Companies',
    seoTitle: 'SaaS Website Design | Product & Marketing Sites — Flowzync',
    seoDescription:
      'Marketing websites for SaaS and technology companies: feature and use-case pages, pricing tables, integration directories, docs, demo flows and CRM-connected trials.',
    keywords: ['saas website design', 'software company website design', 'b2b saas marketing site', 'startup website design', 'product website design', 'tech company website'],
    covers: ['B2B SaaS', 'Vertical SaaS', 'Developer tools', 'Marketplaces', 'Fintech', 'Healthtech', 'Agencies & consultancies', 'Hardware & IoT', 'AI products'],
    intro:
      'A SaaS marketing site is judged by people who build software for a living, which changes everything. They will read your pricing page before your homepage, look for the integration they need before anything else, and notice immediately if the site is slow. Vague benefit copy that works in other sectors actively loses trust here.',
    pains: [
      ['Copy that never says what it does', 'A plain sentence explaining the product, in the words a customer would use. Technical buyers disengage from "empowering teams to unlock potential" faster than any other audience.'],
      ['Pricing that hides the number', 'A real table with tiers, limits and what happens when you exceed them. "Contact sales" on every tier costs more trials than it protects.'],
      ['One page for every use case', 'Separate pages per use case and per segment — how a fifty-person agency uses it is a different search and a different sale from how an enterprise does.'],
      ['Integrations undiscoverable', 'An indexable page per integration. These rank for "X integration with Y" and are consistently among the highest-converting pages on a SaaS site.'],
      ['Trial signups that go nowhere', 'Signup wired into the CRM with a proper onboarding sequence, because the trial-to-paid conversion happens after signup, not before.'],
    ],
    sections: [
      ['A clear product explanation', 'What it does, who for, and what it replaces — above the fold, in plain language, before any social proof.'],
      ['Real pricing table', 'Tiers, limits, overage behaviour and an annual toggle. Transparency here is a conversion feature, not a risk.'],
      ['Use-case and segment pages', 'One per job-to-be-done and per customer type, each targeting how that buyer actually searches.'],
      ['Integration directory', 'An indexable page per integration, with setup steps. Cheap to build, and reliably some of the best-converting traffic on the site.'],
      ['Documentation that is indexable', 'Public docs earn long-tail search and reduce support load. Hiding them behind a login throws both away.'],
      ['Demo and trial flows', 'Booking or signup connected to the CRM, with routing and onboarding sequences already wired.'],
    ],
    faqs: [
      ['Do you build SaaS marketing sites?', 'Yes — the marketing site, not the product. Feature and use-case pages, pricing, integrations, docs, a blog built for volume, and demo or trial flows connected to your CRM. Your product team keeps the application; we build everything around it.'],
      ['Should we publish pricing?', 'Almost always. Technical buyers shortlist with the pricing page open, and "contact sales" on every tier removes you from that shortlist before a human is involved. If enterprise genuinely needs a conversation, publish the self-serve tiers and make enterprise the exception rather than the rule.'],
      ['Can you work alongside our in-house developers?', 'Often the best arrangement. We take design and the marketing site, your team keeps the product, and we hand over a documented component system so anything we build stays maintainable by your developers.'],
      ['What actually drives SaaS organic traffic?', 'Three things, in order: integration pages, comparison and alternative pages, and use-case pages. All three catch people already in a buying decision. Broad top-of-funnel content is the slowest route and the one most companies start with.'],
      ['Can you connect signups to our CRM?', 'Yes. HubSpot, Salesforce, Pipedrive and GoHighLevel are all straightforward, including lead routing, enrichment, product-qualified-lead scoring and the onboarding sequence. The trial-to-paid conversion is decided after signup, so that sequence usually matters more than the landing page.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'landing-pages'],
  },
  {
    slug: 'care-homes-and-home-care',
    trade: 'Care & childcare',
    title: 'Websites for Care Homes, Home Care & Nurseries',
    seoTitle: 'Care Home & Nursery Website Design | Accessible Care Sites — Flowzync',
    seoDescription:
      'Websites for care homes, home care providers and nurseries: accessible design, fee transparency, CQC and Ofsted information, enquiry handling and recruitment pages that fill vacancies.',
    keywords: ['care home website design', 'home care website design', 'nursery website design', 'website for care providers', 'domiciliary care website', 'childcare website design', 'care recruitment website'],
    covers: ['Residential care homes', 'Nursing homes', 'Dementia care', 'Domiciliary & home care', 'Live-in care', 'Supported living', 'Day nurseries', 'Pre-schools', 'Childminders', 'Respite care'],
    intro:
      'Care websites are almost never read by the person receiving the care. They are read by an adult daughter at midnight, upset, comparing three providers, trying to work out what it costs and whether her mother would be safe. Everything on the site should be built for her — which means the fees are visible, the inspection rating is not hidden, and nothing sounds like marketing.',
    pains: [
      ['Fees deliberately obscured', 'Weekly rates, what is included, and how funding works. Families searching at midnight will not ring for a price, they will move to the provider that published one.'],
      ['Inspection ratings buried', 'CQC or Ofsted rating and the latest report linked openly. Hiding it reads as something to hide, even when the rating is good.'],
      ['Inaccessible to the people using it', 'Larger type, tested contrast, full keyboard operation and screen-reader testing. In this sector accessibility is the audience, not a checkbox.'],
      ['Enquiries handled slowly', 'Instant acknowledgement, a clear next step and an automatic follow-up, because families are contacting several providers the same evening.'],
      ['Vacancies nobody applies for', 'A proper recruitment section with real pay, shift patterns and progression. For most providers this is half the reason the website exists.'],
    ],
    sections: [
      ['Fees and funding', 'Weekly rates or ranges, what is included, and plain guidance on local authority funding, NHS continuing healthcare and self-funding.'],
      ['Inspection reports', 'Current rating displayed and the full report linked, with a short note on what you changed after the last inspection.'],
      ['A genuine look inside', 'Real photographs and video of actual rooms and communal spaces, not staged stock. Families are trying to picture someone living there.'],
      ['A day in the life', 'Meals, activities, routines, visiting arrangements. The questions families ask on every first call, answered before they call.'],
      ['Recruitment', 'Roles with actual pay, shift patterns, training and progression, plus an application that works on a phone in under three minutes.'],
      ['Accessible by default', 'WCAG 2.2 AA as the working standard, tested with a screen reader rather than only an automated scanner.'],
    ],
    faqs: [
      ['Should we publish our fees?', 'Yes. Families comparing providers at midnight will not phone for a price — they will move on to whoever published one. A weekly range with a clear list of what is included, plus guidance on funding routes, converts far better than "contact us for a personalised quote".'],
      ['Do you build accessible websites?', 'Yes, and for care providers we treat WCAG 2.2 AA as the working baseline rather than an extra. Larger base type, tested contrast, full keyboard operation, proper headings and labels, real alt text, and screen-reader testing before launch. An automated scanner catches perhaps a third of what actually matters.'],
      ['Can the website help with recruitment?', 'It is often the highest-value part. Roles with real pay figures and shift patterns, a mobile application that takes under three minutes, and automatic acknowledgement of every applicant. Care recruitment is lost mostly to slow responses and vague adverts, both of which a website fixes.'],
      ['How do we handle enquiries from families?', 'Fast, and automatically. An enquiry triggers an immediate acknowledgement setting out what happens next, notifies the right person by email and text, and follows up if nobody has responded within an agreed window. Families are contacting three providers the same evening; the first to reply properly usually gets the visit.'],
      ['Do you work with nurseries as well as care homes?', 'Yes. The parallels are strong — an anxious decision-maker, an inspection rating that matters, fees that need explaining, and recruitment that is genuinely hard. The differences are in the detail: funded hours and session structures for nurseries, funding routes and care needs assessments for adult care.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'charities-and-nonprofits',
    trade: 'Charities & non-profits',
    title: 'Websites for Charities & Non-profits',
    seoTitle: 'Charity Website Design | Donation & Non-profit Websites — Flowzync',
    seoDescription:
      'Websites for charities and non-profits: donation flows that convert, Gift Aid, regular giving, impact reporting, volunteer sign-up and accessible design as standard.',
    keywords: ['charity website design', 'nonprofit website design', 'website for charities', 'donation website design', 'fundraising website design', 'community organisation website'],
    covers: ['Registered charities', 'Community interest companies', 'Social enterprises', 'Faith organisations', 'Sports clubs', 'Foundations & trusts', 'Membership bodies', 'Campaign groups', 'Food banks & mutual aid'],
    intro:
      'Charity websites are usually built by whoever was available, on the smallest budget in the organisation, and it shows in exactly one place that matters: the donation flow. A donate button that takes six steps and asks for a title, a full address and a phone number before payment loses most of the people who pressed it — and those were people who had already decided to give.',
    pains: [
      ['Donation flows that lose the donor', 'Three steps at most, suggested amounts with impact attached to each, Apple Pay and Google Pay, and Gift Aid as a single tick rather than a form.'],
      ['One-off giving only', 'Regular giving presented as the default with the monthly figure shown first — it is worth several times a one-off donation over a supporter lifetime.'],
      ['Impact claimed, never shown', 'Real numbers, real stories and published accounts. Donors increasingly check before giving, and vagueness reads as evasion.'],
      ['Volunteers with nowhere to sign up', 'Role descriptions with actual time commitments and a short application, instead of a general contact form that goes to a shared inbox.'],
      ['Unusable for the people you serve', 'Accessibility treated as a requirement. A disability charity with a site that fails a screen reader has a credibility problem, not a technical one.'],
    ],
    sections: [
      ['A donation flow that converts', 'Three steps maximum, suggested amounts tied to concrete outcomes, digital wallets, and one-tap Gift Aid.'],
      ['Regular giving first', 'Monthly presented as the default option, with the annual impact of that amount shown alongside it.'],
      ['Impact reporting', 'Numbers, individual stories and accounts. This is what converts a considering donor and what larger funders check first.'],
      ['Volunteer recruitment', 'Roles with honest time commitments, location and training, plus an application short enough to finish on a phone.'],
      ['Campaigns and appeals', 'Pages you can launch quickly for an emergency appeal, with a progress total and a shareable link.'],
      ['Accessible and fast', 'WCAG 2.2 AA and light enough to work on an old phone and a poor connection, which is often exactly who is trying to reach you.'],
    ],
    faqs: [
      ['How do we increase online donations?', 'Shorten the flow before anything else. Most charity donation journeys ask for far more than payment requires — title, full address, phone — and lose people who had already decided to give. Three steps, suggested amounts with impact attached, Apple Pay and Google Pay, and Gift Aid as one tick. That usually moves the number more than a redesign does.'],
      ['Can you set up regular giving?', 'Yes, and it is worth prioritising: a monthly donor is worth several times a one-off gift over their lifetime. We present monthly as the default with the annual impact shown, and connect to Stripe, GoCardless, Donorbox or your existing platform including Gift Aid declarations.'],
      ['Do you offer charity pricing?', 'We quote every project on scope rather than sector, and we are straightforward about which parts of a charity build genuinely need custom work and which do not. Ask us — we would rather scope something you can afford than send a proposal you have to decline.'],
      ['Is accessibility included?', 'Yes, as standard rather than as a line item. WCAG 2.2 AA, screen-reader tested before launch. For a charity it is also a credibility issue: a site the people you serve cannot use undermines everything else on it.'],
      ['Can we run appeals ourselves?', 'Yes. Campaign pages are built as a template your team can duplicate and publish without a developer, with a progress total, a shareable link and social cards generated automatically. Emergency appeals are worth nothing if they take three days to get live.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'wordpress-website-design'],
  },
  {
    slug: 'manufacturing-and-industrial',
    trade: 'Manufacturing & industrial',
    title: 'Websites for Manufacturing & Industrial Businesses',
    seoTitle: 'Manufacturing Website Design | Industrial B2B Websites — Flowzync',
    seoDescription:
      'Websites for manufacturers and industrial suppliers: capability pages, technical specifications, certifications, downloadable datasheets and RFQ forms that arrive complete.',
    keywords: ['manufacturing website design', 'industrial website design', 'website for manufacturers', 'engineering company website', 'b2b industrial website', 'factory website design'],
    covers: ['Precision engineering', 'CNC machining', 'Fabrication & welding', 'Injection moulding', 'Electronics assembly', 'Packaging', 'Food production', 'Chemicals', 'Distribution & wholesale', 'Contract manufacturing'],
    intro:
      'Nobody impulse-buys an injection moulding run. A procurement engineer researches you privately, checks whether you hold the certification their customer demands, works out whether your tolerances and volumes fit, and only then makes contact — often having already shortlisted three suppliers. The website either survives that private evaluation or it does not, and you never find out which.',
    pains: [
      ['Capability impossible to assess', 'Machine list, tolerances, materials, volumes and lead times published plainly. Buyers shortlist on this and cannot shortlist you without it.'],
      ['Certifications not visible', 'ISO 9001, ISO 14001, AS9100, IATF, BRC and sector approvals shown with numbers and expiry. For regulated customers this is a pass-or-fail gate.'],
      ['Nothing to download', 'Datasheets, drawings, material specs and CAD files. Engineers want the document, not a form standing in front of it.'],
      ['Quote requests that arrive empty', 'An RFQ form asking the questions your estimator asks anyway — material, quantity, tolerance, finish, drawing upload — so quoting starts immediately.'],
      ['Never found for the process searched', 'A page per process and material, because buyers search "5-axis CNC machining titanium" and not "engineering company".'],
    ],
    sections: [
      ['Capability pages', 'One per process, with machine list, envelope, tolerances, materials, typical volumes and realistic lead times.'],
      ['Certifications and approvals', 'Displayed with certificate numbers, scope and expiry, and the certificate itself downloadable.'],
      ['Technical downloads', 'Datasheets, tolerance tables, material guides and CAD files. Gate them only where you genuinely need the lead.'],
      ['RFQ with drawing upload', 'Material, quantity, tolerance, finish, target price and a drawing, so the first reply is a quote rather than a question.'],
      ['Case studies with numbers', 'Part, material, volume, challenge and measurable outcome. In this sector a concrete example outperforms every adjective available.'],
      ['Quality and traceability', 'Inspection capability, measurement equipment, documentation and traceability — the questions a serious customer audits you on.'],
    ],
    faqs: [
      ['Is a website worth it for a manufacturer?', 'Usually more than for a retailer, because the buying committee researches you privately before making contact. If your capability, certifications and tolerances are not published, you are eliminated from shortlists you never knew existed. The measure is the quality of enquiries, not traffic volume.'],
      ['Should we publish technical specifications?', 'Yes. Engineers shortlist on specification, and one who cannot confirm you hold the tolerance or certification they need will move on rather than ask. Publishing it filters out enquiries you could not have fulfilled anyway, which is a saving.'],
      ['Can the website handle RFQs properly?', 'Yes. The form asks what your estimator would ask on the first call — material, quantity, tolerance, finish, target price, delivery — and accepts drawing and CAD uploads. It routes to the right estimator and acknowledges immediately, so the customer knows it landed.'],
      ['What should we rank for?', 'Process-plus-material and process-plus-location terms: "5-axis CNC machining titanium", "sheet metal fabrication West Midlands". Buyers search that way. "Manufacturing company" brings nobody who is ready to buy.'],
      ['Can it connect to our ERP or MRP?', 'Often. We integrate through APIs where they exist, or via middleware where they do not, for stock visibility, order status or customer portals. Some older systems have no integration route at all — we will establish that early rather than discovering it halfway through.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
];

export const industries = RAW.map((i) => ({
  ...i,
  img: img('industries', i.slug),
}));

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
