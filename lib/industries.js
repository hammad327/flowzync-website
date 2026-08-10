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
    seoTitle: 'E-commerce Website Design | WooCommerce & Shopify Stores — Flowzync',
    seoDescription:
      'Online stores for retail, DTC brands, food and drink, fashion, supplements and trade suppliers: WooCommerce and Shopify builds, checkout optimisation, subscriptions and migrations.',
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
      ['Should I use WooCommerce or Shopify?', 'They suit different businesses. WooCommerce gives full ownership, no per-transaction platform fee and unlimited checkout customisation, but you are responsible for hosting, updates and security. Shopify handles the infrastructure at a monthly cost with a more limited checkout. We build both and will tell you honestly which fits your catalogue, margins and team.'],
      ['Can you migrate my existing store?', 'Yes. We move products, variants, customers, order history and reviews between platforms, then build a complete 301 redirect map so your existing search rankings carry over to the new URLs rather than being thrown away.'],
      ['Can the store connect to my inventory or POS system?', 'Yes. We integrate with warehouse systems, supplier feeds, accounting software and point-of-sale tools through their APIs, or through Zapier and Make.com where no direct integration exists.'],
      ['Do you handle trade and wholesale pricing?', 'Yes. Trade and retail price tiers, minimum order quantities, account-only visibility and bulk discounts, either through configuration or custom development where the standard options fall short.'],
    ],
    related: ['woocommerce-development', 'shopify-ecommerce', 'custom-website-design'],
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
];

export const industries = RAW.map((i) => ({
  ...i,
  img: img('industries', i.slug),
}));

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
