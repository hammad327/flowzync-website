// ─────────────────────────────────────────────────────────────
//  INDUSTRY LANDING PAGES
//
//  One page per niche at /industries/<slug>, each written around
//  that trade's actual problems rather than generic "we build
//  websites" copy. Add an object here and the page, its schema,
//  its FAQ block and its sitemap entry are generated automatically.
//
//  Images: add a matching key under `industries` in lib/images.js.
// ─────────────────────────────────────────────────────────────
import { img } from '@/lib/images';

const RAW = [
  {
    slug: 'website-for-plumbers',
    trade: 'Plumbers',
    title: 'Websites for Plumbers',
    seoTitle: 'Website Design for Plumbers | Plumbing Website Design — Flowzync',
    seoDescription:
      'Website design for plumbers built around emergency calls: tap-to-call buttons, online booking, service area pages and local SEO so you appear in the map pack. Get a fixed quote.',
    keywords: ['website for plumbers', 'plumber website design', 'plumbing website design', 'websites for plumbing companies', 'plumber seo', 'plumbing lead generation website'],
    intro:
      'Most plumbing enquiries are urgent. Someone has water coming through a ceiling, they search on a phone, and they call the first business that looks capable and answers. A plumbing website has to win that ten-second decision — which means a phone number that is always one tap away, proof you cover their street, and pages that rank when the search says "emergency plumber near me".',
    pains: [
      ['Calls lost to a buried phone number', 'A sticky tap-to-call bar sits on every screen on mobile, so the number is never more than one tap away no matter how far someone has scrolled.'],
      ['No way to book outside working hours', 'An online booking form with job type, urgency and address captures the 9pm burst-pipe enquiry that would otherwise go to a competitor.'],
      ['Not showing up for nearby towns', 'A dedicated page for each town or postcode you cover, with genuinely different content, so you can rank across your whole service area rather than one place.'],
      ['Nothing proving you are trustworthy', 'Gas Safe or licence numbers, insurance details, real photos of your team and van, and Google reviews pulled onto the page.'],
      ['Enquiries sitting unanswered', 'Every form submission triggers an instant text and email to you, and drops the job into your dashboard so nothing is missed on a busy day.'],
    ],
    sections: [
      ['Emergency call button', 'A fixed call bar on mobile, with your hours and an out-of-hours message so callers know what to expect before they dial.'],
      ['Service area map', 'A clear map and list of the towns and postcodes you cover, which doubles as the internal linking structure for your local SEO.'],
      ['Job booking form', 'Job type, urgency, address, photo upload and preferred time — enough to quote accurately without a site visit for routine work.'],
      ['Service pages per job type', 'Boiler repair, leak detection, bathroom installation, drainage — each its own page, because each is a separate search.'],
      ['Review collection', 'Automated review requests after each job, so your Google profile keeps gathering the recent reviews that drive map pack rankings.'],
    ],
    faqs: [
      ['How much does a plumber website cost?', 'It depends on how many service pages and service areas you need. A focused site covering your main services and one town is at the lower end; a site covering multiple trades across a dozen postcodes with online booking sits higher. Every quote we send is fixed, itemised and agreed before work starts — there are no hourly surprises.'],
      ['Will my plumbing website show up on Google Maps?', 'Map pack ranking is driven mainly by your Google Business Profile, not your website alone. We set the profile up properly, add LocalBusiness schema to your site with matching name, address and phone, build consistent directory citations, and put a review request automation in place. The website supports the profile; together they are what moves you into the top three.'],
      ['Can customers book a plumber online?', 'Yes. We build a booking form that captures job type, urgency, address, photos of the problem and preferred timing, then routes it straight to your phone by text and to your dashboard. For businesses running a calendar, we can connect it to real appointment slots instead.'],
      ['Do I need a separate page for each town I cover?', 'If you want to rank in those towns, yes. Google needs a page that is genuinely about plumbing in that specific area — local landmarks, common property types, response times for that patch. One page listing thirty towns ranks for none of them.'],
      ['How long does a plumbing website take to build?', 'Most take four to six weeks from kickoff, including design, content, booking setup and local SEO groundwork. The main variable is how quickly we get your photos, licence details and service area list.'],
    ],
    related: ['wordpress-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'website-for-dental-clinics',
    trade: 'Dental clinics',
    title: 'Websites for Dental Clinics',
    seoTitle: 'Website Design for Dental Clinics | Dental Website Design — Flowzync',
    seoDescription:
      'Dental clinic website design with online appointment booking, treatment pages, transparent pricing, before-and-after galleries and local SEO. Get a fixed quote from Flowzync.',
    keywords: ['website for dental clinics', 'dental website design', 'dentist website design', 'dental clinic website', 'dental practice website design', 'dental seo'],
    intro:
      'Choosing a dentist is a trust decision, and an anxious one. People compare two or three practices, read reviews, look for prices, and quietly judge whether the place looks clean and modern. A dental website has to answer the questions patients are too polite to ask — what it costs, whether it will hurt, who will be treating them — and then make booking effortless.',
    pains: [
      ['Patients phoning only during opening hours', 'Online appointment booking that works at 11pm, with treatment type and preferred times, syncing to your practice calendar.'],
      ['No pricing anywhere on the site', 'Clear price ranges per treatment. Practices that publish prices get fewer time-wasting calls and more booked consultations, not fewer.'],
      ['Nervous patients bouncing', 'Pages that address anxiety directly: sedation options, what each appointment involves, how long it takes, what recovery is like.'],
      ['Cosmetic work with nothing to show', 'Before-and-after galleries with proper consent handling, which is the single most persuasive element on a cosmetic dentistry page.'],
      ['Losing to the practice down the road', 'Treatment pages built for how patients actually search — "invisalign cost", "emergency dentist", "dental implants" — rather than one generic services page.'],
    ],
    sections: [
      ['Online appointment booking', 'Treatment type, new or existing patient, preferred dentist and time slot, connected to your practice management system where the API allows.'],
      ['A page per treatment', 'Implants, orthodontics, whitening, hygiene, emergency care — each with its own page, pricing, FAQs and schema.'],
      ['Meet the team', 'Photos, qualifications and a sentence of personality for each clinician. Patients book people, not practices.'],
      ['Trust signals', 'Registration numbers, practice accreditations, hygiene standards and recent Google reviews shown on the page.'],
      ['New patient journey', 'A clear explanation of the first visit, what to bring, and what happens afterwards — the page that converts nervous browsers.'],
    ],
    faqs: [
      ['What should a dental clinic website include?', 'Online appointment booking, a separate page for each treatment you offer with indicative pricing, clinician profiles with qualifications, before-and-after galleries where relevant, new patient information, opening hours, location with parking and transport details, and visible registration and accreditation details. Treatment pages and booking are what actually generate appointments.'],
      ['Can patients book dental appointments online?', 'Yes. We build booking that captures treatment type, whether they are a new or existing patient, and preferred timing. Where your practice management software offers an API or an embeddable widget, we connect directly to live availability. Where it does not, bookings arrive as structured requests your reception team confirms.'],
      ['Should we show our prices on the website?', 'In our experience yes, at least as ranges. Patients search for prices constantly, and a page that answers gets the visit and the trust. Practices that hide pricing tend to field more calls from people who were never going to book, and lose the ones who were.'],
      ['Is a dental website subject to advertising rules?', 'Dental advertising is regulated in most countries, covering claims, before-and-after imagery and how clinicians are described. We build to the structure your regulator expects, but the final copy should be signed off by your practice, since responsibility for claims sits with the registered clinician.'],
      ['How do we rank for dental searches in our area?', 'A complete Google Business Profile, LocalBusiness schema with consistent details, a page per treatment matching real search terms, genuine patient reviews collected steadily, and citations on health and local directories. Competitive terms take months rather than weeks, and any agency promising faster is guessing.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    slug: 'website-for-water-leakage-detection',
    trade: 'Leak detection',
    title: 'Websites for Water Leakage Detection Companies',
    seoTitle: 'Website Design for Water Leak Detection Companies — Flowzync',
    seoDescription:
      'Websites for water leakage detection specialists: emergency contact, service area coverage, thermal imaging case studies and local SEO for non-invasive leak detection searches.',
    keywords: ['website for water leakage detection', 'leak detection website design', 'water leak detection company website', 'leak detection seo', 'thermal imaging leak detection website'],
    intro:
      'Leak detection is a specialist service people find in a panic, usually after a plumber has failed to locate the problem or an insurer has asked for evidence. They are searching for someone who can find a leak without demolishing a floor, and they need to know two things immediately: do you cover their address, and can you come out quickly. Everything else on the site exists to prove the equipment and the expertise are real.',
    pains: [
      ['Nobody understands what non-invasive means', 'A plain explanation of acoustic, thermal and tracer gas detection, with photos of the equipment and what each method finds.'],
      ['No proof the technology works', 'Before-and-after case studies: the thermal image, the located leak, the small repair that replaced a floor being taken up.'],
      ['Unclear whether you cover the address', 'A service area map and postcode checker, so a visitor confirms coverage in seconds rather than phoning to find out you do not.'],
      ['Insurance claims handled badly', 'A dedicated page on trace-and-access insurance claims, the reports you provide and how the process works, which is what many searchers actually need.'],
      ['Emergency enquiries going cold', 'Prominent emergency contact, an out-of-hours message, and automatic acknowledgement so the customer knows the enquiry landed.'],
    ],
    sections: [
      ['Emergency contact block', 'A persistent call and WhatsApp button with your callout hours stated plainly, so nobody wonders whether it is worth phoning.'],
      ['Service area map', 'Interactive coverage map plus a list of towns and postcodes, each with its own page where the search volume justifies it.'],
      ['Detection method pages', 'Acoustic correlation, thermal imaging, tracer gas, moisture mapping — one page each, since these are separate searches by separate audiences.'],
      ['Case study gallery', 'Real jobs with thermal images, the property type, what was found and how much disruption was avoided.'],
      ['Insurance claim guidance', 'What trace-and-access cover means, what your report includes, and how to submit it — genuinely useful content that also ranks.'],
    ],
    faqs: [
      ['What does a water leak detection website need?', 'Emergency contact visible on every screen, a service area map with postcode coverage, a page for each detection method you use, case studies with thermal or acoustic evidence, insurance claim guidance, pricing structure for callouts and surveys, and your qualifications and equipment listed. Coverage and contact are what convert; the case studies are what build confidence.'],
      ['How do leak detection companies get found on Google?', 'Through a fully completed Google Business Profile, a page for each town or postcode you cover, pages targeting the specific methods people search for, and steady review collection. Long-tail searches like "non invasive leak detection" plus a town name are far easier to rank for than broad terms, and they bring better qualified enquiries.'],
      ['Should we explain our detection technology on the site?', 'Yes, in plain language. Most visitors do not know the difference between acoustic and thermal detection, and the explanation is exactly the content that AI assistants and featured snippets pull from when someone asks how leak detection works. It also justifies your pricing before the call.'],
      ['Can the website handle insurance claim enquiries differently?', 'Yes. We build a separate enquiry path for insurance work that captures the insurer, claim reference and property details up front, because those jobs need different information and often a different report format than a private callout.'],
      ['Do you build the service area pages for us?', 'We build the structure and write the first set with you. Each area page needs genuinely local detail to rank, so we run a short session to capture what is distinctive about the property types and common problems in each patch, rather than spinning the same paragraph with the town name swapped.'],
    ],
    related: ['wordpress-website-design', 'seo-optimization', 'landing-pages'],
  },
  {
    slug: 'website-for-local-businesses',
    trade: 'Local businesses',
    title: 'Websites for Local Businesses',
    seoTitle: 'Website Design for Local Businesses | Local Business Websites — Flowzync',
    seoDescription:
      'Website design for local businesses: found on Google Maps, easy to contact, built to turn nearby searches into enquiries. Local SEO, booking and review automation included.',
    keywords: ['website for local businesses', 'local business website design', 'small business website design', 'local seo website', 'local business web design agency'],
    intro:
      'A local business does not need a website that impresses other web designers. It needs to appear when somebody nearby searches, to answer the three questions they have — do you do this, are you near me, are you open — and to make getting in touch obvious. Everything beyond that is decoration, and decoration that slows the site down actively costs you enquiries.',
    pains: [
      ['Invisible in the map pack', 'Google Business Profile set up completely, LocalBusiness schema with consistent details, and citations that match exactly across every directory.'],
      ['Hard to contact from a phone', 'Tap-to-call, directions and opening hours in the first screen on mobile, where the overwhelming majority of local searches happen.'],
      ['A site nobody can update', 'Built so your team edits opening hours, offers, photos and pages without ringing a developer every time something changes.'],
      ['No reviews coming in', 'Automated review requests after each job or visit, because review count and recency genuinely affect local ranking.'],
      ['One page trying to rank for everything', 'A page per service and, where it makes sense, per area — the structure that lets a small business outrank bigger competitors locally.'],
    ],
    sections: [
      ['Found on the map', 'Profile optimisation, category selection, photo strategy, weekly posts and matching NAP details everywhere your business is listed.'],
      ['Contact in one tap', 'Call, directions, WhatsApp and opening hours surfaced immediately rather than buried on a contact page.'],
      ['Service pages that match searches', 'Each service written around how people actually search for it locally, with FAQ schema so it can be quoted directly in AI answers.'],
      ['Review engine', 'Automatic requests at the right moment, with easy routing to your Google profile and a private path for unhappy customers.'],
      ['Self-service editing', 'A short recorded walkthrough of your own site so seasonal hours, offers and photos are yours to change.'],
    ],
    faqs: [
      ['What makes a good local business website?', 'Speed on mobile, a phone number and directions available in one tap, accurate opening hours, a separate page for each service you offer, genuine photos of your premises and team, visible reviews, and LocalBusiness schema whose name, address and phone match your Google Business Profile exactly. Those fundamentals outperform elaborate design almost every time.'],
      ['How do I get my business on Google Maps?', 'Claim and verify your Google Business Profile, choose the most specific primary category available, complete every field including services and attributes, add real photos regularly, post weekly, and collect reviews steadily. Then make sure your website carries matching LocalBusiness schema and that your name, address and phone are identical across every directory listing.'],
      ['Do I need a page for every service?', 'If a service brings in meaningful revenue and people search for it by name, it needs its own page. Google cannot rank a single page well for ten different services, and a thin paragraph on a combined services page will lose to a competitor who wrote a full page about that one thing.'],
      ['How long before a local website brings in enquiries?', 'Long-tail local searches often start producing within one to three months once the site is indexed and the Google Business Profile is complete. More competitive local terms typically take six months or more of consistent content and review collection. Anyone quoting a guaranteed timeline is not being straight with you.'],
      ['Can I update the website myself?', 'Yes, that is how we build them. Opening hours, offers, photos, staff changes and new pages are all editable by your team, and you get a recorded walkthrough of your own site at handover so it is not a guessing game.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
];

export const industries = RAW.map((i) => ({
  ...i,
  img: img('industries', i.slug),
}));

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
