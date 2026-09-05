// ─────────────────────────────────────────────────────────────
//  PORTFOLIO PROJECTS — real client work
//
//  · `slug` is the URL at /portfolio/<slug>. NEVER rename one after
//    it has been indexed; add a redirect in next.config.mjs instead.
//  · `imgKey` points at an entry in lib/images.js → projects.
//    To swap a screenshot, change the path there, not here.
//  · Screenshots are full-page captures; the card scrolls them on
//    hover, which is why they are tall rather than cropped.
//  · `faqs` publish as FAQPage schema on the project page. Question
//    and answer is the most extractable structure there is for AI
//    answer engines, which is why every project carries some.
//
//  ⚠️  WHAT NOT TO WRITE HERE
//  No load times, PageSpeed scores, conversion percentages, revenue
//  figures or turnaround claims — not one that cannot be evidenced if
//  a client or a regulator asks. Describing what was BUILT is always
//  safe; claiming what it EARNED is only safe with proof. Unverifiable
//  performance claims are what Google's spam policies and consumer
//  protection law both bite on.
// ─────────────────────────────────────────────────────────────
import { img } from '@/lib/images';

export const FILTERS = [
  ['all', 'All projects'],
  ['design', 'Website Design'],
  ['landing', 'Landing Pages'],
  ['ghl', 'GHL Funnels'],
  ['automation', 'Automations & CRM'],
  ['wp', 'WordPress'],
  ['email', 'Email Design'],
];

const RAW = [
  // ── GOHIGHLEVEL FUNNELS ─────────────────────────────────────
  {
    slug: 'business-coach-funnel',
    cat: 'ghl', badge: 'GHL Funnel', badgeClass: 'bg-lav',
    imgKey: 'business-coach',
    title: 'Business Coach — Coaching Funnel',
    site: 'businesscoach.example',
    service: 'ghl-funnels', industry: 'legal-and-professional-services',
    desc: 'A coaching funnel built to turn strangers into booked strategy calls: positioning, proof, objection handling and a calendar at the end of it.',
    long: [
      'Business Coach works with entrepreneurs, executives and professionals on leadership, operations and growth. The brief was a funnel that could carry a visitor from first click to a booked strategy call without a salesperson in the middle.',
      'Coaching is a trust purchase, so the page is structured around removing doubt rather than building excitement. It opens by naming the specific problems a coach is hired to solve, then establishes credibility through methodology and background before it asks for anything. The call to action repeats at each point where a reader has enough information to decide.',
      'The booking step is connected directly to the calendar, so a lead arrives as an appointment rather than an enquiry that still needs chasing.',
    ],
    tags: ['GoHighLevel', 'Coaching funnel', 'Calendar booking', 'Objection handling', 'Mobile-first'],
    faqs: [
      ['How long does a coaching funnel like this take to build?', 'Typically three to five weeks once the copy and positioning are settled. The build itself is the fast part; deciding exactly who the coaching is for, and what it changes for them, is what takes the time and what determines whether the funnel works.'],
      ['Do I need GoHighLevel to run a funnel like this?', 'No, but it helps. GoHighLevel bundles the pages, calendar, CRM, email and SMS follow-up in one subscription, which for a solo coach is usually cheaper and simpler than stitching four tools together. The same funnel can be built on a website with a separate booking tool if you already have one.'],
      ['What actually makes a coaching funnel convert?', 'Being specific about who it is for. A page that says it helps "business owners grow" competes with everyone; a page that says it helps clinic owners fix their intake process speaks to one person, and that person books. The second biggest factor is answering the objection about price and time before the calendar appears, not after.'],
    ],
  },
  {
    slug: 'heaven-sent-sleep-baby-care-funnel',
    cat: 'ghl', badge: 'GHL Funnel', badgeClass: 'bg-lav',
    imgKey: 'heaven-sent-sleep-baby-care-fun',
    title: 'Heaven Sent Sleep — Infant Sleep Funnel',
    site: 'heavensentsleep.example',
    service: 'ghl-funnels', industry: 'healthcare-and-medical-practices',
    desc: 'A digital funnel for an infant sleep training brand, designed to feel calm and trustworthy to exhausted parents rather than salesy.',
    long: [
      'Heaven Sent Sleep helps parents through infant sleep training. The audience is reading at two in the morning, exhausted and sceptical, having already tried several things that did not work — which shapes every decision on the page.',
      'The design leans on soft, calm colour and imagery associated with rest, deliberately avoiding the high-contrast urgency most funnels use. Warmth and reassurance convert better here than scarcity does, and a page that feels frantic works against the thing it is selling.',
      'Content is sequenced so a parent can find the specific problem they have — night waking, short naps, early rising — before being asked to commit to anything, and the funnel captures where each visitor entered so follow-up can match what they came for.',
    ],
    tags: ['GoHighLevel', 'Parenting niche', 'Lead magnet', 'Calm UI', 'Segmented follow-up'],
    faqs: [
      ['Why does a sleep training funnel look so different from a business funnel?', 'Because the emotional state of the reader is different. A business buyer responds to urgency and proof of return; an exhausted parent responds to reassurance and being understood. Using aggressive funnel conventions in a parenting niche reads as predatory and it measurably costs conversions.'],
      ['Can a funnel segment visitors by their specific problem?', 'Yes, and in this niche it matters more than usual. Capturing whether someone came for night waking, short naps or early rising lets the follow-up sequence speak to that one problem instead of sending everyone the same generic email. Relevance is the whole difference in open and reply rates.'],
      ['Do you write the funnel copy as well?', 'We structure it and can draft it, but in health-adjacent niches the subject expert should own the claims. We build the page to present their expertise clearly and keep the copy inside what can actually be substantiated.'],
    ],
  },
  {
    slug: 'marketing-failing-to-deliver-funnel',
    cat: 'ghl', badge: 'GHL Funnel', badgeClass: 'bg-lav',
    imgKey: 'marketing-failing-to-deliver',
    title: 'Marketing Failing to Deliver — Diagnostic Funnel',
    site: 'app.gohighlevel.com',
    service: 'ghl-funnels', industry: 'local-and-small-business',
    desc: 'A diagnostic funnel that names why a business owner’s marketing is not working, then routes them to the fix rather than a generic pitch.',
    long: [
      'Most businesses that invest in marketing without results have a structural problem rather than a budget one: no audience targeting, no funnel behind the ad, and no follow-up after the click. This funnel is built around naming those failures precisely.',
      'The page works as a diagnosis rather than a pitch. It walks through the common reasons campaigns fall flat — visibility mistaken for demand, ads running without a plan, leads arriving with nowhere to go — so the reader recognises their own situation before any offer appears.',
      'That structure does two useful things. It qualifies hard, because someone who does not recognise the problem leaves; and it earns the right to make a recommendation, because the reader has already agreed with the analysis.',
    ],
    tags: ['GoHighLevel', 'Diagnostic funnel', 'Problem-first copy', 'Lead qualification', 'Follow-up sequence'],
    faqs: [
      ['Why does a problem-first page outperform a features page?', 'Because a reader who recognises their own situation in the first paragraph keeps reading, and one who does not leaves early — which is a good outcome. You end up with fewer enquiries from better-matched prospects, which is almost always the trade worth making.'],
      ['What are the most common reasons marketing does not deliver?', 'In our experience: no defined audience, so the message is generic; ads pointing at a homepage instead of a page built for that ad; and no follow-up, so leads that were interested but not ready simply disappear. The third one is the most expensive and the most fixable.'],
      ['Is a funnel different from a website?', 'Yes. A website lets someone browse; a funnel moves them along one path toward one action. Both have a place — you generally want a website for credibility and search, and funnels for campaigns where you control the traffic.'],
    ],
  },
  {
    slug: 'business-breakpoint-quiz-funnel',
    cat: 'ghl', badge: 'Quiz Funnel', badgeClass: 'bg-lav',
    imgKey: 'business-breakpoint-quiz',
    title: 'Business Breakpoint Quiz — Assessment Funnel',
    site: 'businessbreakpoint.example',
    service: 'ghl-funnels', industry: 'legal-and-professional-services',
    desc: 'An assessment quiz that scores where a business is stuck across operations, marketing, sales and systems, then delivers a personalised result page.',
    long: [
      'The Business Breakpoint Quiz helps entrepreneurs, coaches and service providers identify the specific constraint holding their business back — the "breakpoint" in operations, marketing, sales or systems that needs attention before anything else will move.',
      'Quizzes work as lead magnets because they trade genuine value for contact details: the visitor gets a diagnosis they actually wanted, rather than a PDF they will never open. This one uses branching logic so the questions adapt to the answers, and produces a personalised result page rather than a single generic score.',
      'The whole thing is embedded into the funnel and CRM, so a completed quiz creates a contact record tagged with its result — which means the follow-up sequence can address the specific breakpoint that person scored on.',
    ],
    tags: ['Quiz funnel', 'Branching logic', 'Lead capture', 'Personalised results', 'CRM tagging'],
    faqs: [
      ['Why do quizzes convert better than downloadable guides?', 'Because the visitor gets something about themselves rather than something generic. A quiz result is personal, immediate and interesting, so people finish it and give a real email address to see the outcome. Ebook downloads are increasingly answered with a throwaway inbox.'],
      ['Can quiz results feed the follow-up emails?', 'Yes, and that is where most of the value is. Tagging a contact with their result means the sequence can speak to the specific problem they scored on instead of sending everyone the same nurture emails. It is the difference between relevant and ignored.'],
      ['Where can a quiz like this be embedded?', 'Anywhere you control the page — your website, a funnel, a landing page, or inside a CRM like GoHighLevel. It can also run as a standalone page you link from ads or social, which is usually the cheapest way to test whether the idea earns its keep.'],
    ],
  },
  {
    slug: 'live-freedom-webinar-funnel',
    cat: 'ghl', badge: 'Webinar Funnel', badgeClass: 'bg-lav',
    imgKey: 'live-freedom-webinar',
    title: 'Live Freedom — Webinar Funnel',
    site: 'livefreedomwebinar.example',
    service: 'ghl-funnels', industry: 'education-and-training',
    desc: 'A complete webinar funnel: registration, reminder sequence, live and evergreen replay handling, and the follow-up that actually does the converting.',
    long: [
      'Live Freedom Webinar is a funnel for coaches and digital experts running live or evergreen webinars — launching a course, promoting a service, or building an audience.',
      'The build covers the whole chain rather than just the registration page: landing and registration flow, confirmation and reminder emails, the presentation structure, replay handling, and the thank-you and follow-up sequences. Most webinar funnels fail at the reminders and the replay, not at registration, which is where the attention usually goes.',
      'Everything is wired so the same funnel can run live or evergreen without being rebuilt, because most businesses start with live sessions and want to automate them once the presentation is proven.',
    ],
    tags: ['Webinar funnel', 'Registration flow', 'Reminder sequence', 'Evergreen replay', 'Email automation'],
    faqs: [
      ['Where do most webinar funnels lose people?', 'Between registering and showing up. Registration is the easy part; attendance is decided by the reminder sequence, and the sales are usually decided by the replay and follow-up rather than the live room. Those are the parts most builds under-invest in.'],
      ['What is the difference between a live and an evergreen webinar?', 'A live webinar happens at a set time with a real presenter and real chat; an evergreen one plays a recording on a schedule so it can run continuously. Live converts better and costs your time; evergreen scales and converts less. Most businesses prove the presentation live, then automate it.'],
      ['Which platforms do you build webinar funnels on?', 'GoHighLevel most often, because it bundles the pages, email, SMS and CRM. ClickFunnels and Kartra work too. The platform matters far less than whether the reminder and follow-up sequences are actually built.'],
    ],
  },
  // ── AUTOMATION & CRM ────────────────────────────────────────
  {
    slug: 'bludo-lead-follow-up-automation',
    cat: 'automation', badge: 'Automation & CRM', badgeClass: 'bg-mint',
    imgKey: 'bludo-lead-follow-up',
    title: 'BluDo — Lead Follow-Up System',
    site: 'bludo.example',
    service: 'ghl-crm-setup', industry: 'local-and-small-business',
    desc: 'A complete follow-up and booking system: automatic SMS and email sequences, calendar booking, reminders, no-show recovery and pipeline stages.',
    long: [
      'BluDo was built for businesses losing leads to the gap between enquiry and reply — coaches, consultants, service providers, agencies and property professionals who were manually chasing prospects and forgetting to.',
      'The system handles the whole cycle automatically. A new lead triggers an SMS and email sequence; interested prospects book straight into the calendar; reminders go out before the appointment; and anyone who does not show gets a follow-up rather than being quietly lost. Pipeline stages make it visible where every prospect actually is.',
      'It includes branded booking pages, email and SMS templates, calendar integration and a documented handover, because a CRM nobody on the team knows how to use is an expensive contact list.',
    ],
    tags: ['GoHighLevel', 'SMS & email sequences', 'Calendar booking', 'No-show recovery', 'Pipeline stages', 'Team handover'],
    faqs: [
      ['What does automated follow-up actually change?', 'It closes the gap between an enquiry arriving and someone responding, which is where most leads are lost. Most buyers contact several businesses and go with whoever replies first; an automatic acknowledgement within seconds wins a meaningful share of those on responsiveness alone.'],
      ['Will I still need to talk to leads myself?', 'Yes — the automation handles acknowledgement, booking, reminders and chasing, not the actual conversation. What changes is that you spend your time on people who have already booked a slot rather than on remembering who to ring back.'],
      ['What happens when someone does not show up to a booked call?', 'The sequence detects it and follows up automatically with a rebooking link, usually within the hour. No-shows are normal and recoverable; leaving them unhandled is what turns a missed call into a lost lead.'],
      ['Can this connect to tools we already use?', 'Usually. GoHighLevel, Calendly, HubSpot and most modern CRMs have APIs, and Zapier or Make covers most of the rest. Where a system genuinely has no integration route we say so before you commit, not halfway through.'],
    ],
  },
  {
    slug: 'elevate-assist-automation',
    cat: 'automation', badge: 'Automation & CRM', badgeClass: 'bg-mint',
    imgKey: 'elevate-assist',
    title: 'Elevate Assist — Business Automation Site',
    site: 'elevateassistsolutions.com',
    service: 'automations', industry: 'local-and-small-business',
    desc: 'A site and system for a business support agency covering CRM management, cold calling, email campaigns and admin for four distinct client types.',
    long: [
      'Elevate Assist takes marketing, CRM management, cold calling, email campaigns and admin off business owners so they can work on the business rather than in it.',
      'The structural challenge was that they serve four audiences with genuinely different needs — real estate agents and wholesalers, credit repair agencies, online coaches, and e-commerce store owners. A single generic services page would have spoken to none of them.',
      'So the site gives each audience its own path, describing the specific work done for that sector: lead generation and nurture for property, automated follow-up and client engagement for credit repair, campaign and CRM management for coaches, and backend operations for e-commerce. One business, four conversations.',
    ],
    tags: ['Audience segmentation', 'CRM management', 'Email campaigns', 'Service pages', 'Lead nurture'],
    faqs: [
      ['Why build separate pages per audience instead of one services page?', 'Because a real estate wholesaler and an online coach are searching for different things and worried about different things. One page trying to speak to both speaks to neither, and it cannot rank for either search. Separate pages let each one be specific, and each can rank independently.'],
      ['What can realistically be automated in a service business?', 'Acknowledgement and follow-up, appointment booking and reminders, CRM record creation, nurture sequences, review requests and reporting. What cannot be automated is judgment — the conversation, the quote and the relationship stay human.'],
      ['How is this different from hiring a virtual assistant?', 'A VA does the tasks; automation removes them. In practice most businesses want both — automation for anything repeatable and predictable, a person for anything needing a decision. The automation makes the person more useful rather than replacing them.'],
    ],
  },
  {
    slug: 'roddye-communications',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'roddye-communications',
    title: 'Roddye Communications — Strategy Consultancy',
    site: 'roddyecommunications.example',
    service: 'custom-website-design', industry: 'legal-and-professional-services',
    desc: 'A consultancy site for a firm that aligns strategy, technology and execution — built to make an abstract service concrete enough to buy.',
    long: [
      'Roddye Communications helps organisations make their systems, decisions and execution work together, replacing fragmented tools and competing priorities with structure.',
      'Consultancy of this kind is genuinely difficult to sell on a website, because the deliverable is clarity rather than an object. The site had to make an abstract offering concrete without flattening it into a list of buzzwords.',
      'The approach was to describe the situation before the solution — what a fragmented organisation actually feels like day to day — so a reader recognises their own company before any methodology is introduced. Positioning sits at the intersection of strategy, technology and follow-through, which is the differentiator, so the structure leads with it rather than burying it under generic capability claims.',
    ],
    tags: ['Consultancy site', 'Positioning', 'B2B', 'Long sales cycle', 'Credibility-led'],
    faqs: [
      ['How do you sell a service that has no physical deliverable?', 'By describing the situation rather than the service. A reader who sees their own problem written down accurately will assume you can solve it; a reader shown a methodology diagram first will not get that far. Concrete beats comprehensive.'],
      ['What does a consultancy website actually need?', 'Enough specificity that a prospect can tell whether you handle their kind of problem, proof you have handled it before, and a low-commitment next step. Long sales cycles mean the site is read repeatedly by several people, so it needs to work for a champion arguing your case internally.'],
      ['How long is a typical B2B consultancy sales cycle?', 'Usually months, often with several stakeholders. That changes what the site is for: it is not closing anyone, it is surviving being forwarded and scrutinised. Clarity and credibility matter far more than persuasion.'],
    ],
  },

  // ── LANDING PAGES ───────────────────────────────────────────
  {
    slug: 'dental-clinic-landing-page',
    cat: 'landing', badge: 'Landing Page', badgeClass: 'bg-peach',
    imgKey: 'dental-clinic-landing-page',
    title: 'Dental Clinic — New Patient Landing Page',
    site: 'dentalclinic.example',
    service: 'landing-pages', industry: 'dental-practices',
    desc: 'A landing page for a dental practice built around the new-patient decision: treatments, technology, comfort for anxious patients, and booking.',
    long: [
      'The practice offers the full range — preventive care and cleanings through cosmetic dentistry, orthodontics, root canals, implants and crowns — and needed a page that could convert someone comparing three clinics in a single sitting.',
      'Dental buying decisions turn on three questions: can they do the specific thing I need, will it hurt, and roughly what does it cost. The page answers all three before asking for a booking, and gives dental anxiety its own section rather than a reassuring adjective, because for a significant share of patients that is the actual blocker.',
      'Treatment information is organised so a visitor can find their specific procedure quickly instead of reading a general practice overview, and the booking step stays visible throughout rather than sitting only at the bottom.',
    ],
    tags: ['Dental', 'New patient acquisition', 'Treatment pages', 'Anxiety-aware UX', 'Booking'],
    faqs: [
      ['What makes a dental landing page convert?', 'Answering the three questions every patient has before they contact anyone: do you do my specific treatment, will it hurt, and what does it cost. Pages that lead with practice history and equipment lists answer none of them.'],
      ['Should a dental page show prices?', 'A guide price or a "from" figure, yes, with finance options next to it. For implants and orthodontics the monthly payment figure is often the decision. Hiding pricing does not remove the question, it just moves it to a phone call the patient may never make.'],
      ['Why does dental anxiety need its own section?', 'Because it is the real blocker for a large share of patients, and one reassuring adjective does not address it. A page that explains sedation options, what a first visit actually involves, and how to tell the practice you are nervous converts people who would otherwise keep putting it off.'],
    ],
  },
  {
    slug: 'medical-spa-website',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'medical-spa-medspa',
    title: 'MedSpa — Treatment & Booking Site',
    site: 'medspa.example',
    service: 'custom-website-design', industry: 'beauty-wellness-and-fitness',
    desc: 'A medical spa site covering facials, body treatments, advanced skincare, massage and nail services, with the treatment menu built for booking rather than browsing.',
    long: [
      'The spa offers a wide treatment range — facials, body scrubs, advanced skincare therapies, massage, waxing, manicures, pedicures and aromatherapy — delivered by certified professionals using organic and cruelty-free products.',
      'The design challenge in this sector is that a calm, luxurious atmosphere and a fast, obvious booking path pull in opposite directions. Most spa sites choose atmosphere and lose the booking; the ones that convert manage both.',
      'Here the treatment menu is structured so a visitor can find and book a specific service in a few taps, while the surrounding design carries the sanctuary feel the brand is built on. Product philosophy and practitioner credentials are given real space, because in medical-adjacent beauty they are what separate a considered choice from a cheap one.',
    ],
    tags: ['Medical spa', 'Treatment menu', 'Online booking', 'Practitioner credentials', 'Mobile-first'],
    faqs: [
      ['What does a medical spa website need that a regular salon site does not?', 'Credentials and product transparency. Once treatments become medical-adjacent, clients research who is performing them and what is being used. Practitioner qualifications and product philosophy stop being nice-to-have content and become the deciding factor.'],
      ['Should treatments be bookable online or by enquiry?', 'Bookable, wherever the treatment does not require a consultation first. Every step between deciding and booking loses people, and beauty bookings are frequently made outside business hours when nobody is there to answer an enquiry form.'],
      ['How do you keep a site calm and still get bookings?', 'By separating atmosphere from navigation. The imagery, spacing and colour carry the feel; the booking path stays obvious and constant. Problems start when the calm aesthetic is allowed to hide the button.'],
    ],
  },
  {
    slug: 'beauty-and-spa-centre',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'beauty-and-spa-centre',
    title: 'Beauty & Spa Centre — Skincare Site',
    site: 'beautyspa.example',
    service: 'custom-website-design', industry: 'beauty-wellness-and-fitness',
    desc: 'A skincare clinic site presenting advanced treatments tailored to individual skin needs, with the growth story and client retention record given proper space.',
    long: [
      'This centre offers advanced skincare treatments matched to each client’s skin, and has grown from a small startup into an established local name.',
      'The site leads with the treatment proposition — tailored, expert, results-focused — and supports it with the business’s own track record: an expanding team of qualified professionals and a client base that returns.',
      'Structurally the emphasis is on making individual treatments findable and comparable, since skincare clients typically arrive researching one specific concern rather than browsing a menu. Booking and enquiry stay reachable from anywhere on the page.',
    ],
    tags: ['Skincare clinic', 'Treatment pages', 'Client retention', 'Booking', 'Local SEO'],
    faqs: [
      ['How should a skincare clinic structure its treatments online?', 'By the concern the client has, not by the technology you own. People search for their problem — pigmentation, acne scarring, fine lines — not for the name of a machine. Pages organised around concerns rank for what people actually type and read as more helpful.'],
      ['Does a clinic’s history matter on the website?', 'More than most sectors, yes. In treatments with a real skin risk, longevity and qualified staff are read as safety signals. It is worth space on the page rather than a line in the footer.'],
      ['What is the most common mistake on beauty clinic websites?', 'Beautiful imagery with no clear path to booking, and treatment pages that describe the procedure without saying who it is for, what it costs or how many sessions it takes. Visitors leave to find a clinic that answers those.'],
    ],
  },
  {
    slug: 'conference-2025-event-page',
    cat: 'landing', badge: 'Landing Page', badgeClass: 'bg-peach',
    imgKey: 'conference-2025',
    title: 'Conference 2025 — Event Registration Page',
    site: 'app.gohighlevel.com',
    service: 'landing-pages', industry: 'education-and-training',
    desc: 'An event landing page covering hero, agenda, speakers, attendee fit and registration — built for virtual, in-person or hybrid formats.',
    long: [
      'A conference registration page has to do a lot in one scroll: say what the event is, when and where, who is speaking, what the schedule looks like, who should attend, and how to register.',
      'This one is structured in that order deliberately. The hero carries the headline, date, location and a registration call to action; the about section establishes theme and mission; speakers appear with photos and biographies because for most attendees the line-up is the decision; the agenda is presented as a readable timeline rather than a dense table; and a "who should attend" section lets a reader self-qualify before committing.',
      'It works for virtual, in-person and hybrid events, and is fully responsive because a significant share of event registrations happen on a phone from a shared link.',
    ],
    tags: ['Event landing page', 'Speaker profiles', 'Agenda timeline', 'Registration flow', 'Hybrid events'],
    faqs: [
      ['What has to be above the fold on an event page?', 'What the event is, when it happens, where, and how to register. Everything else can wait. A visitor arriving from a shared link decides in seconds whether the date works for them, and a page that hides the date loses them before the speakers load.'],
      ['Do speaker profiles actually matter?', 'For most conferences they are the single biggest factor. People register for who they will hear and who else will be in the room. Photos and real biographies do more work than any amount of description of the venue.'],
      ['How early should an event page go live?', 'As soon as you have a date, a location and a provisional theme — even before the full line-up. Registration pages accumulate search presence and shares over time, and a page published six weeks out is starting from nothing.'],
    ],
  },
  {
    slug: 'the-right-size-for-any-situation',
    cat: 'landing', badge: 'Landing Page', badgeClass: 'bg-peach',
    imgKey: 'the-right-size-for-any-situation',
    title: 'The Right Size For Any Situation — Scalable Service Page',
    site: 'app.ajaxunion.com',
    service: 'landing-pages', industry: 'local-and-small-business',
    desc: 'A landing page for a business whose whole proposition is flexibility — built so a customer can find their own scale rather than read about all of them.',
    long: [
      'The client offers products and services in a range of sizes, formats and configurations, from individual customers with a simple need to enterprises requiring bulk capacity. The proposition is that one size does not fit all.',
      'That is a genuinely awkward thing to present, because a page describing every option overwhelms everyone. The structure solves it by letting a visitor identify their own situation first — small-scale need, growing business, large project, event — and then see only the options relevant to it.',
      'The page emphasises the consultative side of the offer: listening, assessing and recommending what is ideal rather than simply what is available. That is the actual differentiator, and it is what a page listing configurations would have buried.',
    ],
    tags: ['Scalable offering', 'Self-selection', 'Consultative sale', 'B2B and B2C', 'Configuration options'],
    faqs: [
      ['How do you present a product that comes in many configurations?', 'Let the visitor identify their situation first, then show only what fits it. A page that lists every option asks the reader to do the filtering, and most will not — they will assume you are not built for them and leave.'],
      ['Does flexibility work as a selling point on its own?', 'Only when it is made concrete. "Flexible solutions" means nothing; "we fit a compact apartment or a warehouse, and we will tell you which you need" means something. The proof of flexibility is showing the range, not claiming it.'],
      ['Should one page serve both individual and enterprise buyers?', 'It can, if the paths separate early. What does not work is a single message pitched at the average of the two — enterprise buyers read it as lightweight and individuals read it as overkill.'],
    ],
  },
  {
    slug: 'myers-insurance-advisors',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'myers-insurance-advisors',
    title: 'Myers Insurance Advisors — Advisory Site',
    site: 'myersinsuranceadvisors.com',
    service: 'custom-website-design', industry: 'financial-services-and-mortgage-brokers',
    desc: 'An insurance advisory site built around a no-cost consultation model, with the four-step process made explicit so an overwhelming purchase feels manageable.',
    long: [
      'Myers Insurance Advisors provides a no-cost advisory service — convenience, choice and counsel — so clients can make an informed insurance decision for themselves and their families.',
      'Insurance is bought reluctantly and researched anxiously, so the site is built to reduce perceived effort. The process is laid out in four explicit steps: book a no-cost consultation, meet the advisor by phone, video or in person, choose a proposal and complete the application, then coverage begins on the effective date.',
      'Making the steps visible is the point. A visitor who can see the whole path, and that the first step costs nothing, is far more likely to take it than one who is asked to "get in touch" about a process they cannot picture.',
    ],
    tags: ['Insurance advisory', 'Process transparency', 'Consultation booking', 'Compliance-aware copy', 'Trust signals'],
    faqs: [
      ['Why show the process step by step?', 'Because insurance feels like a large, opaque commitment. Someone who can see there are four steps, that the first is free and that nothing is signed until step three will start; someone facing a bare contact form often will not.'],
      ['What does compliance-aware copy mean for insurance sites?', 'Writing so the page survives review the first time: no guarantees, no unqualified comparative claims, required disclosures present, and product descriptions that match what is actually being offered. We build to that standard — your compliance officer still signs it off.'],
      ['Should a no-cost service say so prominently?', 'Yes, repeatedly. It is the single strongest objection-remover available and it is routinely mentioned once and then forgotten. If the consultation is genuinely free, that belongs next to every call to action.'],
    ],
  },
  {
    slug: '5-star-quality-hvac',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: '5-star-quality-hvac',
    title: '5 Star Quality HVAC — Home Services Site',
    site: '5starqualityhvac.example',
    service: 'custom-website-design', industry: 'home-and-property-services',
    desc: 'A family HVAC business site covering heating, cooling, furnaces, heat pumps and water heaters, built around urgent calls and visible trust.',
    long: [
      '5 Star Quality HVAC is a family business offering heating and cooling, furnaces, heat pumps and water heaters, and positions on honesty, care and craftsmanship rather than price.',
      'HVAC enquiries split cleanly into urgent and planned. Someone with no heat in February needs the phone number in one tap; someone budgeting for a heat pump replacement needs information, options and reassurance. The site serves both without making either wade through the other.',
      'A page per service means each type of work can be found on its own terms, and the family-run positioning is treated as substance rather than decoration — in a trade where homeowners have usually been let down before, who is turning up matters as much as what it costs.',
    ],
    tags: ['HVAC', 'Emergency call bar', 'Service pages', 'Family business positioning', 'Local SEO'],
    faqs: [
      ['What matters most on a home services website?', 'Speed of contact. Homeowners typically contact several businesses and hire whoever answers first, so a tap-to-call bar that stays visible on mobile and an automatic acknowledgement of every enquiry are worth more than any design change.'],
      ['Should HVAC services each have their own page?', 'Yes. Furnace repair, heat pump installation and water heater replacement are three different searches with different urgency and different budgets. One combined services page competes for none of them properly.'],
      ['Does family-run positioning actually help?', 'In trades, consistently. Homeowners are wary because many have been let down before, and a named family with a visible track record answers the question a faceless company cannot. It needs to be substantiated on the page, not just asserted in a tagline.'],
    ],
  },
  {
    slug: 'travel-agency-website',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'travel-explore-beauty-of-the-whole-world',
    title: 'Travel — Destination & Trip Site',
    site: 'travel.example',
    service: 'custom-website-design', industry: 'hospitality-and-food',
    desc: 'A travel site built around exclusive trips and professional guides, with destination content and enquiry handling designed for long booking lead times.',
    long: [
      'A travel brand offering curated trips with professional guides, where the website carries the entire first impression — there is no shopfront and the customer is often on another continent.',
      'Travel purchases have unusually long consideration periods. Someone may browse for weeks before enquiring and months before travelling, frequently returning to the same pages, so the structure prioritises destination content that stands up to repeat reading over urgency tactics that expire.',
      'Trip and guide information is presented so a visitor can picture the experience specifically rather than generically, and enquiry handling accounts for visitors arriving in other timezones and currencies.',
    ],
    tags: ['Travel', 'Destination content', 'Long consideration cycle', 'International visitors', 'Enquiry handling'],
    faqs: [
      ['What is different about a travel website?', 'The consideration period. People research for weeks and return repeatedly, so content has to reward a second and third visit. Urgency tactics that work in e-commerce tend to backfire on a purchase people are deliberately taking their time over.'],
      ['How should international enquiries be handled?', 'With an immediate automatic acknowledgement that sets expectations, because your visitor may be twelve hours ahead and will otherwise assume nobody read it. Prices shown in the visitor’s currency help, provided the currency actually charged is stated plainly.'],
      ['Does a travel site need online booking?', 'For curated or guided trips, usually not — those sell through conversation. What it needs is an enquiry flow capturing dates, group size and interests so the first reply can be a real proposal rather than a request for more information.'],
    ],
  },
  {
    slug: 'cleaning-services-website',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'cleaning-services',
    title: 'Cleaning Services — Domestic & Deep Clean Site',
    site: 'cleaningservices.example',
    service: 'custom-website-design', industry: 'home-and-property-services',
    desc: 'A cleaning company site separating regular domestic cleaning from deep cleaning, so customers book the right service rather than guessing.',
    long: [
      'The business covers regular domestic cleaning — dusting, vacuuming, mopping, bathrooms and kitchens — alongside deep cleaning that reaches baseboards, behind appliances, inside cabinets and other routinely skipped areas.',
      'Those two services are bought by different people for different reasons, and mixing them causes real problems: customers book a standard clean expecting a deep one and everybody ends up unhappy. The site separates them explicitly and spells out what each includes.',
      'Because most cleaning enquiries come from a phone, often while standing in the room that prompted them, the quote flow is short and the contact route stays visible throughout.',
    ],
    tags: ['Cleaning services', 'Service separation', 'Quote flow', 'Mobile-first', 'Local SEO'],
    faqs: [
      ['Why separate regular and deep cleaning on the website?', 'Because the expectation gap between them causes most complaints in this trade. A customer who books a standard clean expecting oven interiors and skirting boards will be disappointed however well the job is done. Listing what each service includes prevents the argument before it starts.'],
      ['What should a cleaning quote form ask?', 'Property size, number of bathrooms, service type and frequency — enough to price without a visit for routine work. Anything more starts costing you submissions, and the rest can be asked in the reply.'],
      ['How do cleaning companies rank locally?', 'A complete Google Business Profile, steady recent reviews, and a page per service and per town covered. "End of tenancy cleaning [town]" is winnable; "cleaning services" alone is not worth chasing.'],
    ],
  },
  {
    slug: 'construction-company-website',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'construction-company',
    title: 'Construction Company — Project Showcase Site',
    site: 'construction.example',
    service: 'custom-website-design', industry: 'real-estate-and-construction',
    desc: 'A construction site built around completed work, because in this trade finished projects persuade and adjectives do not.',
    long: [
      'A construction company whose clients are making one of the largest purchases of their lives, usually after being disappointed by a previous builder.',
      'That makes evidence the entire proposition. The site is organised around completed projects with real photography rather than around service descriptions, because a homeowner deciding on a builder is looking for proof of finish quality, not a list of capabilities.',
      'Supporting content covers process and communication — what happens at each stage and how clients are kept informed — since in construction the fear is rarely about capability and almost always about being left in the dark once work begins.',
    ],
    tags: ['Construction', 'Project galleries', 'Process transparency', 'High-value purchase', 'Trust building'],
    faqs: [
      ['What sells a construction company online?', 'Completed work, photographed properly. Homeowners are assessing finish quality and whether your previous projects resemble theirs. A gallery of real jobs outperforms any amount of copy about craftsmanship.'],
      ['Should a builder publish prices?', 'Rarely a fixed figure, because every job differs — but a realistic range for common project types filters out enquiries that were never going to proceed. Total silence on cost produces a lot of quoting work that leads nowhere.'],
      ['What worries construction clients most?', 'Not capability — communication. Being left without updates for weeks while living in a building site is the fear. A page explaining how often clients hear from you, and from whom, addresses the real objection.'],
    ],
  },
  {
    slug: 'digital-marketing-agency-website',
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'digital-marketing',
    title: 'Digital Marketing — Creative Studio Site',
    site: 'digitalmarketing.example',
    service: 'custom-website-design', industry: 'legal-and-professional-services',
    desc: 'A creative studio site where the design itself has to be the portfolio, since the product being sold is design judgement.',
    long: [
      'A creative design studio serving a newer generation of clients with innovative design solutions, competing in a category where everyone claims to be creative.',
      'The site carries an unusual burden: it is simultaneously the sales argument and the proof. A studio selling design cannot have a website that merely describes good design — the execution is the credential, and any gap between claim and evidence is immediately visible to the buyer.',
      'So the build prioritises craft in the details a designer would notice — typography, spacing, motion restraint — while keeping the structure conventional enough that a non-designer client can still navigate it and enquire.',
    ],
    tags: ['Creative studio', 'Design-led', 'Portfolio-first', 'Typography', 'Motion restraint'],
    faqs: [
      ['Why does a design agency site have to be so well built?', 'Because it is the product demonstration. A studio selling design judgement is assessed on the judgement visible in its own site, and any gap between what it claims and what it shows costs credibility immediately.'],
      ['Should a creative site prioritise style or usability?', 'Usability, with style expressed through it rather than at its expense. Sites that sacrifice navigation for effect impress other designers and lose clients, who are usually not designers.'],
      ['How much motion is too much?', 'When it delays what someone came to do. Motion that reveals content as you reach it is fine; motion that must finish before you can read or click is a cost — and it is the most common overreach on creative sites.'],
    ],
  },

  // ── EMAIL TEMPLATE DESIGN ───────────────────────────────────
  {
    slug: 'gym-email-template-design',
    cat: 'email', badge: 'Email Design', badgeClass: 'bg-peach',
    imgKey: 'gym-email-template-design',
    title: 'Gym — Membership Email Template',
    site: 'Email template',
    service: 'graphic-design', industry: 'beauty-wellness-and-fitness',
    desc: 'A responsive gym email template for membership promotions, class offers and renewals, built to be edited and reused rather than rebuilt each time.',
    long: [
      'A reusable email template for a gym promoting fitness programmes, membership offers and renewals to both prospective and existing members.',
      'Fitness email has a specific problem: it is opened on a phone, in a gap between other things, and it competes with every other promotional message in the inbox. The layout is built mobile-first with a single obvious action per email, because a template offering four choices reliably gets none of them taken.',
      'It is delivered fully editable so the team can run campaigns without a designer, with the structure holding whatever copy and offer they put into it — which is what determines whether a template is used or quietly abandoned after the second send.',
    ],
    tags: ['Email template', 'Mobile-first', 'Single CTA', 'Editable', 'Membership campaigns'],
    faqs: [
      ['What makes a gym email get opened and acted on?', 'A subject line that names a specific offer or date rather than being clever, and one action in the body. Members skim on a phone between other tasks; an email presenting several equally weighted options generally produces no action at all.'],
      ['Should email templates be responsive?', 'Yes, and mobile should be the primary design rather than the adaptation. The majority of gym email is opened on a phone, so a template designed on desktop and shrunk usually reads as cramped exactly where it matters.'],
      ['Can we edit the template ourselves afterwards?', 'That is the point of it. Templates that need a designer for every send stop being used within a month. It is handed over editable, with the structure holding up whatever copy and imagery you drop in.'],
    ],
  },
  {
    slug: 'digital-marketing-email-template-design',
    cat: 'email', badge: 'Email Design', badgeClass: 'bg-peach',
    imgKey: 'digital-marketing-email-template-design',
    title: 'Digital Marketing — Campaign Email Template',
    site: 'Email template',
    service: 'graphic-design', industry: 'legal-and-professional-services',
    desc: 'A brand-aligned campaign email template for service promotion, product launches and lead nurture, structured around one clear conversion action.',
    long: [
      'A modern, conversion-focused email template for digital marketing campaigns — promoting services, supporting launches and nurturing leads toward becoming customers.',
      'The template is built around a repeatable persuasive structure rather than a fixed message: a clear hierarchy from subject through headline to a single call to action, with room for supporting proof between them. That means it works for a launch, a nurture email or a straight promotion without redesign.',
      'Colours, fonts and styling follow the brand, and the layout is responsive across desktop and mobile clients — which in email means testing against the real quirks of Outlook and Gmail rather than assuming modern CSS will hold.',
    ],
    tags: ['Email template', 'Brand-aligned', 'Responsive', 'Lead nurture', 'Single CTA'],
    faqs: [
      ['Why is email design harder than web design?', 'Because email clients render inconsistently and many still ignore modern CSS. A template that looks right in a browser can break in Outlook, so email is built with older, more constrained techniques and tested against real clients rather than a preview.'],
      ['How many calls to action should a marketing email have?', 'One, repeated. Multiple competing actions split attention and reduce total clicks. The same link can appear two or three times down the email, but it should be the same destination.'],
      ['Can one template cover launches, nurture and promotions?', 'Yes, if it is built around structure rather than a specific message — headline, supporting proof, single action. That is what makes it reusable instead of something that needs a redesign for every campaign.'],
    ],
  },
  // ── WORDPRESS BUILDS ────────────────────────────────────────
  {
    slug: 'roller-shutters-online',
    cat: 'wp', badge: 'WooCommerce', badgeClass: 'bg-mint',
    imgKey: 'roller-shutters-online',
    title: 'Roller Shutters Online — Made-to-Measure Store',
    site: 'rollershuttersonline.example',
    service: 'woocommerce-development', industry: 'manufacturing-and-industrial',
    desc: 'An e-commerce store for a UK manufacturer of made-to-measure automated roller shutters, with configuration, delivery and installation handled in the buying flow.',
    long: [
      'A UK manufacturer selling made-to-measure automated roller shutters direct, with rapid delivery and installation.',
      'Made-to-measure is the difficult part of this build. Nothing has a fixed price: cost depends on dimensions, automation, finish and installation, so the store has to guide a customer through configuration and price it accurately before checkout — a very different problem from selling a fixed catalogue.',
      'WooCommerce suits this well because the checkout and pricing rules stay under the manufacturer’s control rather than inside a hosted platform’s constraints. Delivery and installation are treated as part of the product decision instead of a surprise at the final step.',
    ],
    tags: ['WooCommerce', 'Made-to-measure', 'Product configurator', 'Installation booking', 'UK manufacturer'],
    faqs: [
      ['Can WooCommerce handle made-to-measure pricing?', 'Yes, and it is one of the clearest reasons to choose it. Dimension-based pricing, option surcharges and installation costs can all be calculated in the cart. Hosted platforms tend to fight this because their pricing model assumes fixed SKUs.'],
      ['How should installation be sold alongside a product?', 'As part of the configuration, not as an afterthought at checkout. A customer who reaches the final step and discovers installation is extra frequently abandons; one who chose it three steps earlier has already accepted the cost.'],
      ['What makes a configurator work rather than confuse?', 'Asking questions in the order the customer can answer them — measurements first, then finish, then automation — and showing the price updating as they go. Configurators fail when they ask for a decision the customer has no basis to make yet.'],
    ],
  },
  {
    slug: 'nf-living',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'nf-living',
    title: 'NF Living — Contractor Network Platform',
    site: 'nfliving.example',
    service: 'wordpress-website-design', industry: 'real-estate-and-construction',
    desc: 'A platform connecting property businesses with a vetted network of contractors and suppliers, serving both sides of a marketplace from one site.',
    long: [
      'NF Living connects property businesses with a vetted network of contractors and suppliers — a two-sided platform where both audiences have to be served without either feeling like an afterthought.',
      'Marketplaces are structurally awkward on the web because the two sides want opposite things. Property businesses want assurance about vetting and reliability; contractors want to know what work is available and how they qualify. A single homepage trying to address both usually persuades neither.',
      'The site gives each side its own entry path and its own language, with the vetting process — the thing that makes the network worth joining from either direction — given real prominence rather than a passing mention.',
    ],
    tags: ['Two-sided platform', 'Contractor network', 'Vetting process', 'Dual audience', 'WordPress'],
    faqs: [
      ['How do you design for a two-sided marketplace?', 'Separate paths from the first click, with different language for each. The temptation is one homepage speaking to both, which produces copy vague enough to reach neither. Each side should feel the site was built for them.'],
      ['What matters most on a vetted network site?', 'Making the vetting concrete. "Vetted" on its own is a claim anyone can make; describing the actual checks — insurance, references, qualifications, review process — is what makes it worth something to both sides.'],
      ['Can WordPress run a marketplace?', 'For directory and network models, comfortably. Once you need transactions between users, escrow or complex matching, it is worth assessing whether a custom application is the better long-term call — we would say so rather than stretching WordPress past where it belongs.'],
    ],
  },
  {
    slug: 'crown-build-constructions',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'crown-build-constructions',
    title: 'Crown Build Constructions — Corporate Site',
    site: 'crownbuild.example',
    service: 'wordpress-website-design', industry: 'real-estate-and-construction',
    desc: 'A corporate WordPress site for a UK construction company covering extensions, loft conversions, refurbishments and plumbing.',
    long: [
      'Crown Build Constructions offers extensions, loft conversions, refurbishments and plumbing services across the UK.',
      'Each of those is a separate search with a separate customer. Someone pricing a loft conversion and someone with a plumbing problem share nothing except the company they might hire, so the site gives each service its own page rather than listing them together.',
      'Beyond structure, the build focuses on the two things homeowners assess before enquiring: evidence of comparable completed work, and clarity about how the project will be run. Both are given more space than the capability list that usually dominates construction websites.',
    ],
    tags: ['WordPress', 'Service pages', 'Extensions & loft conversions', 'Project galleries', 'UK construction'],
    faqs: [
      ['Why does each construction service need its own page?', 'Because they are separate searches with separate intent and budget. Someone searching "loft conversion cost" and someone searching "emergency plumber" want completely different pages. A combined services page ranks properly for neither.'],
      ['What do homeowners look for before enquiring?', 'Comparable finished work and a sense of how the project will be managed. Photographs of projects resembling theirs do more than any description, and a clear explanation of stages and communication addresses the fear of being left in the dark.'],
      ['Is WordPress a good fit for a construction company?', 'Usually, yes. Project galleries need updating regularly, and WordPress lets the team add completed jobs without a developer. A site nobody can update stops reflecting the business within a year.'],
    ],
  },
  {
    slug: 'jre-services',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'jre-services',
    title: 'JRE Services — Property Maintenance Site',
    site: 'jreservices.example',
    service: 'wordpress-website-design', industry: 'home-and-property-services',
    desc: 'A property maintenance site covering landscaping, gardening, fencing, roofing and driveway installation, with each trade given its own findable page.',
    long: [
      'JRE Services covers landscaping, gardening, fencing, roofing and driveway installation — five distinct trades under one business.',
      'The risk with a multi-trade business is looking like a generalist. Homeowners searching for a roofer want a roofer, and a page listing five services alongside each other reads as less expert than a specialist competitor.',
      'The site solves that with a genuine page per trade, each written as though it were the only thing the business does, while the surrounding structure makes the breadth available to anyone who wants a single contractor across several jobs. Seasonal work is accounted for too, since gardening and driveways peak at opposite ends of the year.',
    ],
    tags: ['Property maintenance', 'Multi-trade structure', 'Seasonal services', 'Quote flow', 'Local SEO'],
    faqs: [
      ['How does a multi-trade business avoid looking like a generalist?', 'A real page per trade, each written as though it were the whole business. Depth on the individual page is what signals expertise; the breadth can be discoverable without being the first thing a visitor reads.'],
      ['How do you handle seasonal demand on a website?', 'By making the seasonal service prominent when it is relevant and keeping its page live year-round. Removing a page out of season throws away the search presence it accumulated and it starts from nothing next year.'],
      ['Should each trade have separate town pages too?', 'Only if you can write something genuinely specific about each. Trade-plus-town pages work well, but duplicating one page across a dozen towns with the name swapped is what Google treats as doorway pages and demotes as a group.'],
    ],
  },
  {
    slug: 'sc-exterior-cleaning',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 's-c-exterior-cleaning',
    title: 'S.C Exterior Cleaning — Cleaning Services Site',
    site: 'scexteriorcleaning.example',
    service: 'wordpress-website-design', industry: 'home-and-property-services',
    desc: 'An exterior cleaning site covering window cleaning, pressure washing, and roof and gutter cleaning, built around before-and-after evidence.',
    long: [
      'S.C Exterior Cleaning offers window cleaning, pressure washing, and roof and gutter cleaning to domestic and commercial customers.',
      'Exterior cleaning is one of the few trades where the result is genuinely photogenic, and before-and-after imagery does more selling than any copy can. The site is built around that evidence rather than treating it as a gallery bolted on at the end.',
      'The services split naturally by frequency — window cleaning is recurring, pressure washing and roof work are occasional — so the site handles both a repeat-schedule enquiry and a one-off quote request without forcing either through the wrong form.',
    ],
    tags: ['Exterior cleaning', 'Before and after', 'Recurring vs one-off', 'Quote flow', 'Local SEO'],
    faqs: [
      ['Why do before-and-after photos work so well in this trade?', 'Because the result is visible and immediate, and it is the thing the customer is actually buying. One honest pair of photographs of a cleaned roof persuades more than a page of description, and it is evidence rather than assertion.'],
      ['How should recurring and one-off services be handled differently?', 'With different enquiry paths. A window cleaning round is a schedule to join; a pressure wash is a job to quote. Sending both through the same form means one of them always gets the wrong questions.'],
      ['Is roof and gutter cleaning worth a separate page?', 'Yes. It is a distinct search, usually more urgent, and often higher value than routine cleaning. Bundling it into a general services page loses the people searching for it specifically.'],
    ],
  },
  {
    slug: 'medway-drain-services',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'medway-drain-services',
    title: 'Medway Drain Services — Emergency Drainage Site',
    site: 'medwaydrains.example',
    service: 'wordpress-website-design', industry: 'home-and-property-services',
    desc: 'A drainage company site built for emergencies: unblocking and repair, with the phone number reachable in one tap from any point on the page.',
    long: [
      'Medway Drain Services handles emergency drain unblocking and repair — a category where almost every enquiry is urgent and most arrive from a phone.',
      'That single fact drives the whole build. Someone with a blocked drain and water rising is not comparing providers carefully; they are calling whoever looks capable and answers. The number stays reachable in one tap from anywhere on the page, and the site loads fast enough to be usable on poor mobile signal.',
      'Supporting content covers what to do before help arrives and what the work typically involves, which serves the smaller group researching a non-urgent repair without getting in the way of the emergency path.',
    ],
    tags: ['Emergency drainage', 'Tap-to-call', 'Mobile-first', 'Fast loading', 'Local SEO'],
    faqs: [
      ['What matters most for an emergency trade website?', 'One-tap calling and speed. The customer has a problem happening right now and will call whoever answers first. Everything else — galleries, testimonials, accreditations — is secondary to making the number impossible to miss.'],
      ['Does site speed really matter for a drainage company?', 'More than for most businesses. The enquiry comes from a phone, often on poor signal, from someone with an active problem. A page that takes five seconds to load has already lost them to the next result.'],
      ['Should an emergency business publish prices?', 'A call-out charge or a starting figure, yes. It filters out enquiries that will not proceed and it reduces the awkward conversation on arrival. Full pricing is rarely possible before seeing the job, and customers understand that.'],
    ],
  },
  {
    slug: 'imb-exterior-cleaning',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'imb-exterior-cleaning',
    title: 'IMB Exterior Cleaning — Domestic & Commercial',
    site: 'imbcleaning.example',
    service: 'wordpress-website-design', industry: 'home-and-property-services',
    desc: 'An exterior and commercial cleaning site covering gutter cleaning, roof moss removal and soft washing, serving both homeowners and commercial contracts.',
    long: [
      'IMB Exterior Cleaning offers gutter cleaning, roof moss removal and soft washing across domestic and commercial customers.',
      'Those two customer types buy very differently. A homeowner wants a price and a date; a commercial client wants insurance details, method statements, scheduling around their operations and often a recurring contract. Serving both from one path means underserving one of them.',
      'The site separates the two while keeping the specialist services — soft washing and moss removal in particular — findable in their own right, since those are the higher-value searches and the ones a general cleaning page would bury.',
    ],
    tags: ['Exterior cleaning', 'Domestic & commercial', 'Soft washing', 'Contract enquiries', 'Local SEO'],
    faqs: [
      ['How do domestic and commercial cleaning enquiries differ?', 'Domestic wants a price and a date. Commercial wants insurance, method statements, scheduling around their operations and usually an ongoing contract. The questions are different enough that one enquiry form serves neither well.'],
      ['Why give soft washing its own page?', 'Because it is a distinct, higher-value search and customers looking for it know the term. Folded into a general cleaning page it is invisible to exactly the people most ready to buy it.'],
      ['What do commercial clients look for before enquiring?', 'Evidence you can work safely and to a schedule: insurance cover, relevant accreditations, method statements and comparable contracts. Publishing those upfront removes a round of email and filters out enquiries you could not service anyway.'],
    ],
  },
  {
    slug: 'ad-consultancy-group',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'ad-consultancy-group',
    title: 'Ad Consultancy Group — Marketing Agency Site',
    site: 'adconsultancygroup.example',
    service: 'wordpress-website-design', industry: 'legal-and-professional-services',
    desc: 'An agency site covering PPC, SEO, social media and web design, structured so each service can rank and convert on its own terms.',
    long: [
      'Ad Consultancy Group is a digital marketing agency offering PPC, SEO, social media and web design.',
      'Agency websites face an obvious credibility test: a marketing agency whose own site is poorly structured or invisible in search has a problem it cannot argue its way out of. The build treats the site as a working demonstration rather than a brochure.',
      'Each service gets its own page written for how that buyer actually searches, because a client looking for PPC management and one looking for a website are different people with different urgency. The structure also gives the agency somewhere meaningful to publish, which is the part most agency sites neglect while advising clients to do exactly that.',
    ],
    tags: ['Digital agency', 'Service pages', 'PPC & SEO', 'Content structure', 'WordPress'],
    faqs: [
      ['Why does an agency site need to be technically strong?', 'Because prospects check. An agency selling SEO whose own site is slow or unfindable has a credibility problem no proposal fixes. The site is treated as a demonstration of the service rather than a description of it.'],
      ['Should each marketing service have its own page?', 'Yes. PPC, SEO, social and web design are separate searches with separate buyers and separate urgency. A combined services page cannot rank properly for any of them and cannot speak convincingly to any single buyer.'],
      ['What is the most common gap on agency websites?', 'No published content. Agencies advise clients to publish consistently and then leave their own blog untouched for a year — which is visible, and undermines the advice.'],
    ],
  },
  {
    slug: 'das-care-services',
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-lav',
    imgKey: 'das-care-services',
    title: 'DAS Care Services — Home Care Provider',
    site: 'dascare.example',
    service: 'wordpress-website-design', industry: 'care-homes-and-home-care',
    desc: 'A home care site for a Luton provider offering person-centred support at home, built around the anxious family member making the decision.',
    long: [
      'DAS Care Services provides person-centred home care across Luton and surrounding areas, founded on the principle that people should be able to live safely and independently in their own homes. The site states the provider’s experience, DBS-checked team, insurance and coverage area plainly on the page.',
      'Home care websites are almost never read by the person receiving the care. They are read by a family member, often late at night, worried and comparing providers — which shapes every decision here.',
      'So the practical questions come first: what areas are covered, what support is available, who the staff are and how to arrange a free consultation. The founder and registered manager is named with their background, because in care the deciding factor is usually whether a family trusts a specific person.',
    ],
    tags: ['Home care', 'Person-centred care', 'Free consultation', 'Named registered manager', 'Local coverage'],
    faqs: [
      ['Who actually reads a home care website?', 'Almost always a family member rather than the person needing care — usually an adult son or daughter, often researching in the evening while worried. Everything on the page should be written for them: practical, calm and specific.'],
      ['What should a care provider put on the homepage?', 'Coverage area, the type of support offered, who the staff are and how to take a first step at no cost. Families are contacting several providers the same evening, and the one that answers those plainly gets the call.'],
      ['Why name the registered manager?', 'Because in care the decision is about trusting a person, not a brand. A named manager with real experience and a photograph does more to reassure a family than any amount of copy about values.'],
    ],
  },
];

export const projects = RAW.map((p) => ({ ...p, img: img('projects', p.imgKey) }));

export const getProject = (slug) => projects.find((p) => p.slug === slug);
