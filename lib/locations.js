// ─────────────────────────────────────────────────────────────
//  UK LOCATION PAGES  →  /locations/<slug>
//
//  Declaring a service area in schema tells Google where you work.
//  It does not make you rank in Leeds. Ranking in a UK town needs a
//  page written FOR that town, and this is where those live.
//
//  ⚠️  THE ONE RULE THAT DECIDES IF THESE HELP OR HURT
//
//  Each page must say something genuinely specific about that place.
//  Duplicating one page and swapping the town name creates what
//  Google calls "doorway pages" — and it demotes them as a group,
//  which can drag the rest of the site down with them.
//
//  Five real pages beat fifty thin ones. Add a new town only when
//  you have something true to say about it: a client there, a sector
//  you understand, a market condition you can describe.
//
//  See docs/05-UK-LOCATION-PAGES.md before adding more.
// ─────────────────────────────────────────────────────────────

const RAW = [
  {
    slug: 'web-design-manchester',
    city: 'Manchester',
    region: 'Greater Manchester',
    title: 'Web Design in Manchester',
    seoTitle: 'Web Design Manchester | Website Design & WordPress — Flowzync',
    seoDescription:
      'Website design for Manchester businesses: custom builds, WordPress, Elementor and WooCommerce. Remote studio working UK hours, with fixed quotes and no agency overhead.',
    keywords: ['web design manchester', 'website design manchester', 'wordpress developer manchester', 'web design agency manchester', 'woocommerce developer manchester'],
    intro:
      'Manchester has one of the densest digital agency markets outside London, which is good news and bad news if you are buying. Good, because standards are high. Bad, because Northern Quarter agency rates now sit close to London ones, and a lot of what you are paying for is the office, the account manager and the pitch process rather than the build.',
    context: [
      ['A crowded, expensive agency market', 'Manchester agency day rates have climbed steadily with the city. We work remotely with no premises to fund, so the quote reflects the build rather than the overhead behind it.'],
      ['Sectors we see most here', 'Professional services, property, health and fitness, and a steady stream of ecommerce brands outgrowing Shopify\u2019s limits and moving to WooCommerce.'],
      ['You deal with the builders', 'No account manager relay. The people designing and coding your site are the people you talk to.'],
    ],
    faqs: [
      ['Do you work with businesses in Manchester?', 'Yes. We work with clients across Greater Manchester — including Stockport, Bolton, Salford, Oldham and Trafford — as a remote studio. Everything runs through a shared project space, with calls scheduled in UK hours, so the working relationship is the same as a local agency without the premises cost built into your quote.'],
      ['Are you actually based in Manchester?', 'No, and we will not pretend otherwise. Flowzync is based in Lahore, Pakistan, and we work with UK clients remotely. It is why our pricing compares well to a Manchester agency, and it makes no difference to the work — design reviews, revisions and handover all happen online, as they would with an agency two miles away.'],
      ['How do we communicate across time zones?', 'Pakistan is four to five hours ahead of the UK depending on the season, which means our morning covers your start of day. We schedule calls in UK business hours and reply to messages within the same working day.'],
      ['Can you help us rank in Manchester searches?', 'Yes — that is a large part of what we do. It means a page for each service you offer, local content that is genuinely about Manchester rather than templated, a fully completed Google Business Profile, and consistent business details across every directory. That last one is unglamorous and it is what most agencies skip.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'seo-optimization'],
  },
  {
    slug: 'web-design-birmingham',
    city: 'Birmingham',
    region: 'West Midlands',
    title: 'Web Design in Birmingham',
    seoTitle: 'Web Design Birmingham | Website Design & WooCommerce — Flowzync',
    seoDescription:
      'Website design for Birmingham and West Midlands businesses: custom sites, WordPress, Elementor and WooCommerce stores. Fixed quotes, UK hours, no agency overhead.',
    keywords: ['web design birmingham', 'website design birmingham', 'wordpress developer birmingham', 'web design agency west midlands', 'ecommerce website birmingham'],
    intro:
      'Birmingham and the Black Country still run on trade, manufacturing and distribution — businesses where the website is a catalogue, a credibility check and a quote request form rather than a brand statement. A lot of agencies here sell those firms something far more elaborate than they need.',
    context: [
      ['Trade and manufacturing first', 'Product catalogues, technical spec sheets, trade account applications and quote forms. Less concerned with animation, more concerned with a customer finding the right part.'],
      ['Serving the wider West Midlands', 'Coventry, Wolverhampton, Solihull, Dudley and Walsall — each usually needs its own service-area page if you want to appear across the region rather than just the city.'],
      ['Built to be updated', 'Trade businesses add products and price lists constantly. Everything we build is editable by your team without a support ticket.'],
    ],
    faqs: [
      ['Do you build websites for trade and manufacturing businesses?', 'Regularly. That usually means a structured product or service catalogue, downloadable spec sheets and certificates, trade account application forms, and a quote request that captures enough detail to price without a phone call. We also connect these to your existing systems where an API exists.'],
      ['Can you build a WooCommerce store for trade pricing?', 'Yes. WooCommerce handles trade and retail price tiers, minimum order quantities, account-only visibility and bulk discounts — either through configuration or custom development where the standard options fall short.'],
      ['Do you cover Coventry, Wolverhampton and Solihull?', 'Yes, we work across the West Midlands. If you want to be found in those towns specifically rather than just Birmingham, we would build a page for each with content genuinely about that area — thin duplicated pages get demoted by Google as a group.'],
      ['Where is Flowzync based?', 'Lahore, Pakistan. We work with UK clients remotely, covering UK business hours. We are upfront about it because it explains our pricing, and because a client who finds out later is a client who stops trusting you.'],
    ],
    related: ['woocommerce-development', 'wordpress-website-design', 'custom-website-design'],
  },
  {
    slug: 'web-design-leeds',
    city: 'Leeds',
    region: 'West Yorkshire',
    title: 'Web Design in Leeds',
    seoTitle: 'Web Design Leeds | Website Design for Professional Services — Flowzync',
    seoDescription:
      'Website design for Leeds businesses: custom sites, WordPress and Elementor builds for professional services, finance and legal firms. Fixed quotes, UK hours.',
    keywords: ['web design leeds', 'website design leeds', 'wordpress developer leeds', 'web design agency west yorkshire', 'law firm website leeds'],
    intro:
      'Leeds is a professional services city — legal, financial, accountancy and the back-office operations that support them. Those firms have a specific problem: their websites have to convey authority and competence to a cautious buyer, while staying inside regulatory rules about how services can be described.',
    context: [
      ['Regulated sectors need care', 'Legal and financial firms have advertising rules about claims, testimonials and how services are described. We build the structure; your compliance sign-off covers the copy.'],
      ['Authority is the conversion lever', 'For a firm competing on trust, the things that convert are named people with credentials, real case detail, and clear explanations of process and cost.'],
      ['Across West Yorkshire', 'Bradford, Wakefield, Huddersfield and Halifax — separate towns with separate search behaviour, and worth separate pages if you serve them.'],
    ],
    faqs: [
      ['Do you build websites for law firms and accountants?', 'Yes. That typically means a page for each practice area or service written for how clients actually search, profiles for each fee earner with qualifications, transparent fee structures where your regulator permits, and a consultation booking flow. Structure and build are ours; final wording should be signed off by your firm, as responsibility for claims sits with the regulated practitioner.'],
      ['Can you help us rank for our practice areas?', 'That is usually the highest-return work for professional firms. A single services page cannot rank for ten practice areas. A dedicated page per area, each answering the questions clients actually ask, is what moves you up — and it takes months rather than weeks for competitive terms.'],
      ['Do you work with businesses outside Leeds in Yorkshire?', 'Yes — Bradford, Wakefield, Huddersfield, Halifax, York, Harrogate and Sheffield. If being found in a specific town matters, that town needs its own page with real content about it.'],
      ['Are you a Leeds-based agency?', 'No. We are based in Lahore, Pakistan, and work with UK clients remotely on UK hours. We say so plainly rather than implying a local office — for firms in regulated sectors, working with a supplier who is straight about the basics tends to matter.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    slug: 'web-design-glasgow',
    city: 'Glasgow',
    region: 'Scotland',
    title: 'Web Design in Glasgow',
    seoTitle: 'Web Design Glasgow | Website Design & WordPress Scotland — Flowzync',
    seoDescription:
      'Website design for Glasgow and Scottish businesses: custom sites, WordPress, Elementor and WooCommerce. Remote studio on UK hours with fixed, itemised quotes.',
    keywords: ['web design glasgow', 'website design glasgow', 'wordpress developer glasgow', 'web design agency scotland', 'ecommerce website scotland'],
    intro:
      'Glasgow has a smaller agency market than Manchester or London, which cuts both ways: less choice, but also less of the price inflation. Most businesses here are buying their first proper website rather than their third redesign, and the questions they ask are practical ones about cost, ownership and who fixes it when something breaks.',
    context: [
      ['First proper website, usually', 'Plenty of Glasgow businesses are moving off a builder platform or a site a relative made years ago. That migration needs care so existing search rankings survive.'],
      ['Scotland-wide reach', 'Edinburgh, Aberdeen, Dundee, Stirling and Inverness. Scottish search results are noticeably less contested than the English city equivalents, which makes ranking realistic sooner.'],
      ['Ownership matters here', 'You own the domain, the hosting account, the design files and the code. No hostage arrangements, which is a common complaint about the sites people come to us to replace.'],
    ],
    faqs: [
      ['Can you move our site off Wix or Squarespace?', 'Yes, and migrations are common work for us. We move the content, rebuild the design properly, and — critically — map every old URL to its new one with 301 redirects so the search rankings you have already earned carry across instead of being thrown away.'],
      ['Do you work across Scotland or just Glasgow?', 'Across Scotland. Edinburgh, Aberdeen, Dundee, Stirling, Perth and Inverness included. If you want to appear in searches for a specific city, that city needs its own page with genuine local content rather than a find-and-replace of this one.'],
      ['Will we own everything at the end?', 'Completely. Domain, hosting account, design files, source code and any licences are all registered in your name and handed over at launch. If you ever move to another developer, nothing is locked to us.'],
      ['Where are you based?', 'Lahore, Pakistan. We work with Scottish and UK clients remotely, on UK business hours. We are direct about this — it is the reason our quotes compare well against a Glasgow agency.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'maintenance-support'],
  },
  {
    slug: 'web-design-reading',
    city: 'Reading',
    region: 'Berkshire',
    title: 'Web Design in Reading',
    seoTitle: 'Web Design Reading | Website Design Thames Valley — Flowzync',
    seoDescription:
      'Website design for Reading and Thames Valley businesses: custom sites, WordPress, product and SaaS marketing sites. Fixed quotes, UK hours, senior team only.',
    keywords: ['web design reading', 'website design reading', 'web design agency berkshire', 'wordpress developer reading', 'saas website design thames valley'],
    intro:
      'Reading sits at the centre of the Thames Valley technology corridor, which means an unusual concentration of software companies, IT consultancies and B2B service firms for a town of its size. These buyers tend to be technically literate, which changes the conversation — they ask about page speed, build stack and how the CMS works, and they can tell when an answer is vague.',
    context: [
      ['Technically literate buyers', 'Clients here often have in-house developers. We work well alongside them, and we are comfortable being asked exactly how something is built.'],
      ['B2B and SaaS marketing sites', 'Feature pages, pricing tables, documentation, demo request flows and CRM integration — closer to product marketing than to a brochure site.'],
      ['Less contested than London', 'Thames Valley search terms are meaningfully cheaper to compete for than the equivalent London ones, while the clients are often just as substantial.'],
    ],
    faqs: [
      ['Do you build SaaS and B2B marketing websites?', 'Yes. That usually means feature and use-case pages, a pricing table with tier comparison, integration and documentation sections, demo or trial request flows connected to your CRM, and a blog built for content marketing at volume. We build the marketing site; your product team keeps the app.'],
      ['Can you work alongside our in-house developers?', 'That is often the best setup. We can handle design and the marketing site while your team owns the product, and we deliver a documented component system so anything we build stays maintainable by your developers after handover.'],
      ['Do you cover the wider Thames Valley?', 'Yes — Slough, Bracknell, Wokingham, Newbury, Maidenhead, Basingstoke and High Wycombe. Ranking in each of those specifically means a page for each with real local content, not a duplicated template.'],
      ['Where is your team based?', 'Lahore, Pakistan. We work remotely with UK clients on UK business hours, and we say so upfront. For technical buyers this is rarely an issue — they care about the build quality and the process, both of which we are happy to be examined on.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'landing-pages'],
  },
  {
    slug: 'web-design-bristol',
    city: 'Bristol',
    region: 'South West England',
    title: 'Web Design in Bristol',
    seoTitle: 'Web Design Bristol | Website Design & Ecommerce South West — Flowzync',
    seoDescription:
      'Website design for Bristol and South West businesses: custom design, WordPress, WooCommerce and brand-led builds. Fixed quotes, UK hours, no template shortcuts.',
    keywords: ['web design bristol', 'website design bristol', 'wordpress developer bristol', 'web design agency south west', 'ecommerce website bristol'],
    intro:
      'Bristol has a strong independent and creative business culture, and it shows in what clients here ask for. Brand character matters more than it does in most cities, and a templated site is spotted immediately. That suits us — everything we build is designed from a blank canvas rather than adapted from a theme.',
    context: [
      ['Brand-led, not template-led', 'Independent retailers, studios, food and drink brands and B2B firms who want a site that could not belong to anyone else.'],
      ['Independent ecommerce', 'A lot of Bristol brands sell direct, and many need WooCommerce\u2019s flexibility on subscriptions, bundles and checkout rather than a hosted platform\u2019s constraints.'],
      ['Across the South West', 'Bath, Gloucester, Cheltenham, Exeter, Swindon and Taunton — separate markets with far less agency competition than the city itself.'],
    ],
    faqs: [
      ['Do you use templates or design from scratch?', 'From scratch. Every project starts with a Figma design of each page, approved by you before a line of code is written. We build in WordPress, Elementor or custom code depending on who needs to edit it afterwards, but the design is always yours alone.'],
      ['Can you build a WooCommerce store with subscriptions?', 'Yes. WooCommerce handles recurring products, subscription boxes, memberships and bundle pricing, along with the payment gateways and stock sync behind them. It is usually the right choice when a hosted platform\u2019s checkout rules are getting in your way.'],
      ['Do you work with businesses across the South West?', 'Yes — Bath, Gloucester, Cheltenham, Swindon, Exeter, Plymouth and Taunton. Those towns are far easier to rank in than Bristol itself, and each needs its own page with content genuinely about that area.'],
      ['Are you based in Bristol?', 'No. Flowzync is based in Lahore, Pakistan, and we work with UK clients remotely on UK hours. We would rather tell you that on this page than have you find out on a call.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'graphic-design'],
  },
  {
    slug: 'web-design-milton-keynes',
    city: 'Milton Keynes',
    region: 'Buckinghamshire',
    title: 'Web Design in Milton Keynes',
    seoTitle: 'Web Design Milton Keynes | Website Design Buckinghamshire — Flowzync',
    seoDescription:
      'Website design for Milton Keynes businesses: custom sites, WordPress, WooCommerce and logistics or B2B service websites. Fixed quotes, UK business hours.',
    keywords: ['web design milton keynes', 'website design milton keynes', 'wordpress developer milton keynes', 'web design agency buckinghamshire', 'b2b website milton keynes'],
    intro:
      'Milton Keynes is built around business parks, distribution and B2B services, and it has far fewer agencies than its business population would suggest. That makes it one of the more winnable markets in the South East — the search competition is a fraction of Reading or London, while the companies are substantial.',
    context: [
      ['Logistics and B2B services', 'Distribution, fulfilment, facilities management and business services — sites that need to explain a complex service clearly and capture a qualified enquiry.'],
      ['A genuinely winnable search market', 'Fewer agencies competing locally means realistic first-page positions in months rather than years, particularly for service-plus-town terms.'],
      ['Integration is usually the real job', 'These businesses run on existing systems. The website earns its keep by connecting to them rather than sitting alongside as a brochure.'],
    ],
    faqs: [
      ['Do you build websites for logistics and B2B service companies?', 'Yes. These usually need clear service explanation pages, capability and capacity information, case studies, a qualified enquiry form that captures enough to quote, and often a customer portal or tracking integration. The website\u2019s job is to filter and qualify, not just to look presentable.'],
      ['Can you connect our website to our existing systems?', 'Usually. We integrate with CRMs, warehouse and inventory systems, accounting software and booking tools through their APIs, or through Zapier and Make.com where a direct API is not available. If a system has no integration route at all, we will tell you that before you commit.'],
      ['How competitive is search in Milton Keynes?', 'Considerably less than most South East towns of comparable business density. There are relatively few local agencies actively producing content, which means well-built service and location pages can reach page one faster here than in Reading or London. It still takes months, not weeks.'],
      ['Where is Flowzync based?', 'Lahore, Pakistan. We work with UK clients remotely on UK business hours, and we are upfront about it — it is the honest explanation for why our quotes compare well with a local agency.'],
    ],
    related: ['custom-website-design', 'automations', 'wordpress-website-design'],
  },
  {
    slug: 'web-design-london',
    city: 'London',
    region: 'Greater London',
    title: 'Web Design in London',
    seoTitle: 'Web Design London | Website Design & Development — Flowzync',
    seoDescription:
      'Website design for London businesses without London agency rates: custom builds, WordPress, Elementor and WooCommerce. Fixed quotes, UK hours, senior team only.',
    keywords: ['web design london', 'website design london', 'wordpress developer london', 'web design agency london', 'affordable web design london'],
    intro:
      'London is the most competitive web design market in the UK by a wide margin, both to buy in and to rank in. Agency rates here reflect Central London overheads more than they reflect the work, and the gap between what a small business pays and what it actually receives is wider here than anywhere else in the country.',
    context: [
      ['You are paying for the postcode', 'Central London agency pricing carries premises, account management and new business costs. We carry none of those, and the quote shows it.'],
      ['Every sector, every borough', 'Professional services, hospitality, retail, health and property — and boroughs like Croydon, Bromley, Camden and Hackney each behave as their own local market in search.'],
      ['Ranking here takes patience', 'London terms are the hardest in the country. Borough-level and service-specific terms are realistic; "web design London" is a multi-year project, and we will say so rather than take your money on it.'],
    ],
    faqs: [
      ['How much does a website cost compared to a London agency?', 'Substantially less, because we do not carry Central London premises, account managers or a new business team. We will not publish figures without seeing your project, since scope drives everything, but every quote we send is fixed and itemised before any work starts — no hourly billing and no surprises.'],
      ['Can you get us ranking for "web design London"?', 'Honestly, that is a multi-year project against agencies with enormous budgets and decades of domain history. What is realistic is borough-level and service-specific terms — "WooCommerce developer Croydon", "dental website design North London" — which bring better qualified enquiries anyway. Any agency guaranteeing you the broad term is guessing.'],
      ['Do you work with businesses across London boroughs?', 'Yes, across all of Greater London. Each borough behaves as its own search market, so if being found in a specific area matters we would build a page for it with content genuinely about that area rather than a duplicate.'],
      ['Are you a London agency?', 'No. Flowzync is based in Lahore, Pakistan, and we work with London clients remotely on UK business hours. We state it plainly because the alternative — implying a London office you would eventually discover does not exist — is not a relationship worth starting.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'landing-pages'],
  },
];

export const locations = RAW;

export const getLocation = (slug) => locations.find((l) => l.slug === slug);
