// ─────────────────────────────────────────────────────────────
//  LOCATION PAGES  →  /locations/<slug>
//
//  Declaring a service area in schema tells Google where you work.
//  It does not make you rank in Leeds or Austin. Ranking in a town
//  needs a page written FOR that town, and this is where those live.
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
//  See docs/05-LOCATION-PAGES.md before adding more.
// ─────────────────────────────────────────────────────────────

const RAW = [
  {
    country: 'US',
    slug: 'web-design-austin',
    city: 'Austin',
    region: 'Texas',
    title: 'Web Design in Austin',
    seoTitle: 'Web Design Austin TX | Website Design & Development — Flowzync',
    seoDescription:
      'Website design for Austin businesses: custom builds, WordPress, Elementor and WooCommerce. Senior team, fixed quotes, no agency overhead. Serving Austin and Central Texas.',
    keywords: ['web design austin', 'website design austin tx', 'wordpress developer austin', 'web design agency austin', 'austin web designer'],
    intro:
      'Austin has more agencies per capita than almost any city its size, and the tech influx pushed rates to match. The result is that a local restaurant or clinic often gets quoted like a venture-backed startup. Most Austin businesses do not need a startup budget — they need a fast, findable site that books appointments.',
    context: [
      ['Startup pricing for non-startup businesses', 'Austin agency rates were set by SaaS budgets. We quote on the build, not on the local market rate.'],
      ['Sectors we see most here', 'SaaS and B2B marketing sites, real estate, food and beverage, health and wellness, and professional services scaling out of the Domain and East Austin.'],
      ['Built to be edited', 'Austin businesses change fast. Everything we build is editable by your team without a developer.'],
    ],
    faqs: [
      ['Do you work with businesses in Austin?', 'Yes, across Austin and Central Texas including Round Rock, Cedar Park, Georgetown and San Marcos. We work remotely, with calls scheduled in Central Time, and the working relationship is the same as a local agency without the premises cost built into your quote.'],
      ['Are you an Austin-based agency?', 'No, and we do not pretend otherwise. Flowzync works with US clients remotely. It is why our pricing compares well to an Austin agency, and it changes nothing about the work — design reviews, revisions and handover all happen online, exactly as they would with a studio in the Domain.'],
      ['How do you handle the time difference?', 'We cover US business hours for calls and reply to messages within the same working day. Most clients find the overlap works in their favour: work progresses overnight and there is new output waiting each morning.'],
      ['Can you help us rank in Austin searches?', 'Yes. That means a page for each service you offer, content genuinely about Austin rather than templated, a fully completed Google Business Profile, and consistent business details across every directory. Neighbourhood and service-specific terms are far more winnable than "web design Austin" itself.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'seo-optimization'],
  },
  {
    country: 'US',
    slug: 'web-design-dallas',
    city: 'Dallas',
    region: 'Texas',
    title: 'Web Design in Dallas',
    seoTitle: 'Web Design Dallas TX | Website Design & WooCommerce — Flowzync',
    seoDescription:
      'Website design for Dallas–Fort Worth businesses: custom sites, WordPress, WooCommerce and lead-generation builds. Fixed quotes, US hours, senior team only.',
    keywords: ['web design dallas', 'website design dallas tx', 'wordpress developer dallas', 'web design agency dfw', 'dallas web designer'],
    intro:
      'Dallas–Fort Worth is a services and trade economy: law firms, medical practices, HVAC and roofing contractors, logistics and B2B distribution. These businesses are not buying a brand statement. They are buying a phone that rings, which makes the site a lead-generation instrument first and a design piece second.',
    context: [
      ['Lead generation is the job', 'Call tracking, quote forms that qualify, and service pages built around how people actually search in DFW.'],
      ['A metroplex, not a city', 'Dallas, Fort Worth, Plano, Arlington, Irving and Frisco each behave as their own search market. Ranking across them needs a page for each.'],
      ['Trades and medical dominate', 'Contractors, clinics and professional services — sectors where speed of response beats visual flourish every time.'],
    ],
    faqs: [
      ['Do you build websites for contractors and trades?', 'Regularly. That usually means a sticky tap-to-call bar on mobile, a service area map, a page for each service you offer, financing and warranty information, and a quote form capturing enough detail to price without a site visit. We also wire automatic text and email responses so no enquiry sits unanswered.'],
      ['Do you cover Fort Worth, Plano and the wider metroplex?', 'Yes. If you want to be found in those cities specifically rather than just Dallas, we build a page for each with content genuinely about that area — thin duplicated pages get demoted by Google as a group, so we would rather build five real ones than fifty thin ones.'],
      ['Can you connect the website to our CRM?', 'Yes. We integrate with GoHighLevel, HubSpot, Salesforce, ServiceTitan and Jobber through their APIs, or via Zapier and Make.com where no direct integration exists. If a system has no integration route, we will tell you before you commit.'],
      ['Where is Flowzync based?', 'We are a remote studio working with US clients on US business hours. We say so upfront rather than implying a Dallas office — it is the honest explanation for why our quotes compare well with a local agency.'],
    ],
    related: ['custom-website-design', 'automations', 'seo-optimization'],
  },
  {
    country: 'US',
    slug: 'web-design-new-york',
    city: 'New York',
    region: 'New York',
    title: 'Web Design in New York',
    seoTitle: 'Web Design New York City | NYC Website Design — Flowzync',
    seoDescription:
      'Website design for New York businesses without Manhattan agency rates: custom builds, WordPress, Elementor and WooCommerce. Fixed quotes, senior team, US hours.',
    keywords: ['web design new york', 'website design nyc', 'wordpress developer new york', 'web design agency nyc', 'nyc web designer'],
    intro:
      'New York is the most competitive web design market in the United States, both to buy in and to rank in. Manhattan agency rates reflect Manhattan overheads more than they reflect the work, and the gap between what a small business pays and what it actually receives is wider here than anywhere else in the country.',
    context: [
      ['You are paying for the zip code', 'Manhattan agency pricing carries office space, account management and new business costs. We carry none of those.'],
      ['Every borough is its own market', 'Brooklyn, Queens, the Bronx and Staten Island behave as separate local searches, and each is far more winnable than "web design NYC".'],
      ['Ranking here takes patience', 'City-wide terms are a multi-year project against agencies with enormous budgets. Borough and service-specific terms are realistic, and we will say so rather than take your money on the broad ones.'],
    ],
    faqs: [
      ['How much does a website cost compared to a NYC agency?', 'Substantially less, because we do not carry Manhattan premises, account managers or a new business team. We will not publish figures without seeing your project, since scope drives everything, but every quote we send is fixed and itemised before any work starts — no hourly billing and no surprises.'],
      ['Can you get us ranking for "web design NYC"?', 'Honestly, that is a multi-year project against agencies with decades of domain history and large budgets. What is realistic is borough-level and service-specific terms — "WooCommerce developer Brooklyn", "dental website design Queens" — which bring better qualified enquiries anyway. Any agency guaranteeing you the broad term is guessing.'],
      ['Do you work with businesses across the five boroughs?', 'Yes, and across New Jersey and Westchester. Each area behaves as its own search market, so if being found in a specific one matters we build a page for it with real content about that area.'],
      ['Are you a New York agency?', 'No. Flowzync is a remote studio working with New York clients on Eastern Time. We state it plainly because the alternative — implying a Manhattan office you would eventually discover does not exist — is not a relationship worth starting.'],
    ],
    related: ['custom-website-design', 'landing-pages', 'seo-optimization'],
  },
  {
    country: 'US',
    slug: 'web-design-chicago',
    city: 'Chicago',
    region: 'Illinois',
    title: 'Web Design in Chicago',
    seoTitle: 'Web Design Chicago | Website Design & WordPress — Flowzync',
    seoDescription:
      'Website design for Chicago businesses: custom sites, WordPress, Elementor and WooCommerce stores. Fixed quotes, Central Time coverage, no agency overhead.',
    keywords: ['web design chicago', 'website design chicago', 'wordpress developer chicago', 'web design agency chicago', 'chicago web designer'],
    intro:
      'Chicago runs on established mid-market businesses — manufacturing, logistics, professional services, healthcare and a deep restaurant scene. These are companies with real operations and often decades of history, which usually means an existing website that has been patched by four different people and now needs untangling rather than replacing outright.',
    context: [
      ['Rebuilds, not launches', 'Most Chicago projects we take on are replacing something inherited. That means careful migration and a full redirect map so existing rankings survive.'],
      ['Neighbourhood-level search', 'Lincoln Park, Wicker Park, the Loop and Evanston behave as their own markets for local services.'],
      ['Integration matters', 'Established businesses run on existing systems. The website earns its keep by connecting to them, not sitting alongside as a brochure.'],
    ],
    faqs: [
      ['Can you rebuild our existing website without losing rankings?', 'Yes, and it is a large part of what we do. We audit what is already earning traffic, keep those URLs and that content, then rebuild the design and structure around them. Where URLs must change, we build a complete 301 redirect map so the search equity transfers instead of being thrown away.'],
      ['Do you work with manufacturers and B2B companies?', 'Regularly. That usually means a structured product or capability catalogue, downloadable spec sheets and certifications, quote request forms that capture technical detail, and integration with your existing ERP or CRM where an API exists.'],
      ['Do you cover the Chicago suburbs?', 'Yes — Naperville, Evanston, Schaumburg, Oak Park and the wider metro. If being found in a specific suburb matters, that suburb needs its own page with genuine local content rather than a duplicate.'],
      ['Where are you based?', 'We are a remote studio working with US clients on Central Time for Chicago projects. We are direct about this because it explains our pricing and because clients who find out later stop trusting you.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'woocommerce-development'],
  },
  {
    country: 'US',
    slug: 'web-design-miami',
    city: 'Miami',
    region: 'Florida',
    title: 'Web Design in Miami',
    seoTitle: 'Web Design Miami FL | Website Design & Ecommerce — Flowzync',
    seoDescription:
      'Website design for Miami and South Florida businesses: custom design, WordPress, WooCommerce and bilingual sites. Fixed quotes, US hours, senior team only.',
    keywords: ['web design miami', 'website design miami', 'wordpress developer miami', 'web design agency south florida', 'miami web designer'],
    intro:
      'Miami is visual, bilingual and heavily service-driven — real estate, hospitality, aesthetics and medical practices, and a large import and export trade. Two things matter here more than in most US markets: the site has to look genuinely designed rather than templated, and it very often needs to work properly in both English and Spanish.',
    context: [
      ['Bilingual as standard', 'Proper English and Spanish versions with correct hreflang markup, not a translate widget bolted on top.'],
      ['Design is the differentiator', 'Real estate, hospitality and aesthetics clients are judged on their visuals. Nothing we build starts from a theme.'],
      ['South Florida, not just Miami', 'Fort Lauderdale, Coral Gables, Boca Raton, Hialeah and West Palm Beach are separate local markets.'],
    ],
    faqs: [
      ['Can you build a bilingual English and Spanish website?', 'Yes. We build genuine dual-language sites with separate URLs per language and correct hreflang tags, so Google indexes and serves the right version. That is meaningfully different from a translation widget, which search engines largely ignore and which reads badly to native speakers.'],
      ['Do you work with real estate and hospitality businesses?', 'Frequently. Real estate usually means IDX or MLS integration, property search and enquiry capture. Hospitality means reservations, menus that are easy to update and gallery-led design. Both live or die on how good they look on a phone.'],
      ['Do you cover Fort Lauderdale and Palm Beach?', 'Yes, across South Florida. Each city is its own search market, so if you want to appear in Fort Lauderdale or Boca Raton specifically, those need their own pages with real local content.'],
      ['Are you based in Miami?', 'No. Flowzync is a remote studio working with South Florida clients on Eastern Time. We would rather tell you that here than have you find out on a call.'],
    ],
    related: ['custom-website-design', 'graphic-design', 'woocommerce-development'],
  },
  {
    country: 'US',
    slug: 'web-design-phoenix',
    city: 'Phoenix',
    region: 'Arizona',
    title: 'Web Design in Phoenix',
    seoTitle: 'Web Design Phoenix AZ | Website Design for Local Business — Flowzync',
    seoDescription:
      'Website design for Phoenix and Scottsdale businesses: custom sites, WordPress, lead generation and local SEO. Fixed quotes, US hours, no agency overhead.',
    keywords: ['web design phoenix', 'website design phoenix az', 'wordpress developer phoenix', 'web design agency scottsdale', 'phoenix web designer'],
    intro:
      'Phoenix is one of the fastest-growing metros in the country, and it shows in who is buying: home services, contractors, medical and dental practices, and a steady stream of businesses opening a second or third location. Search competition here is meaningfully softer than Los Angeles or Dallas, which makes it one of the more winnable US markets.',
    context: [
      ['A genuinely winnable search market', 'Fewer agencies producing real content locally means realistic first-page positions in months rather than years.'],
      ['Home services and healthcare', 'HVAC, roofing, pool service, dental and med spa — sectors where emergency calls and appointment booking drive everything.'],
      ['Multi-location from the start', 'Phoenix businesses expand fast. We structure sites so a second or third location slots in without a rebuild.'],
    ],
    faqs: [
      ['How competitive is search in Phoenix?', 'Considerably less than Los Angeles, Dallas or Chicago for comparable business density. Relatively few local agencies actively produce content, which means well-built service and location pages can reach page one faster here. It still takes months, not weeks, and anyone telling you otherwise is guessing.'],
      ['Do you build websites for home service businesses?', 'Yes, and it is one of our most common briefs. That means a tap-to-call bar always visible on mobile, service area coverage, a page for each service, financing information, and automatic text and email replies the moment an enquiry lands — because in home services, the first business to respond usually wins the job.'],
      ['Can the site handle multiple locations?', 'Yes. We build a proper location structure from the start with a page per location carrying its own address, hours, staff and LocalBusiness schema, so adding a third or fourth site later is a content task rather than a rebuild.'],
      ['Do you cover Scottsdale, Mesa and Tempe?', 'Yes, across the Valley. Each is its own search market, so if you want to rank in Scottsdale specifically, that needs its own page with content genuinely about Scottsdale.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    country: 'UK',
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
      ['Are you actually based in Manchester?', 'No, and we will not pretend otherwise. Flowzync is a remote studio working with UK clients. It is why our pricing compares well to a Manchester agency, and it makes no difference to the work — design reviews, revisions and handover all happen online, as they would with an agency two miles away.'],
      ['How do we communicate if you are not local?', 'Exactly as you would with any agency you are not sat next to. We schedule calls in UK business hours, share designs and progress through a project space you can check at any time, and reply to messages within the same working day.'],
      ['Can you help us rank in Manchester searches?', 'Yes — that is a large part of what we do. It means a page for each service you offer, local content that is genuinely about Manchester rather than templated, a fully completed Google Business Profile, and consistent business details across every directory. That last one is unglamorous and it is what most agencies skip.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'seo-optimization'],
  },
  {
    country: 'UK',
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
      ['Are you a Birmingham agency?', 'No. Flowzync is a remote studio working with UK clients on UK business hours. We are upfront about it because it explains our pricing, and because a client who finds out later is a client who stops trusting you.'],
    ],
    related: ['woocommerce-development', 'wordpress-website-design', 'custom-website-design'],
  },
  {
    country: 'UK',
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
      ['Are you a Leeds-based agency?', 'No. We are a remote studio working with UK clients on UK hours. We say so plainly rather than implying a local office — for firms in regulated sectors, working with a supplier who is straight about the basics tends to matter.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    country: 'UK',
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
      ['Are you based in Glasgow?', 'No. We are a remote studio working with Scottish and UK clients on UK business hours. We are direct about this — it is the reason our quotes compare well against a Glasgow agency.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'maintenance-support'],
  },
  {
    country: 'UK',
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
      ['Are you based in the Thames Valley?', 'No. We are a remote studio working with UK clients on UK business hours, and we say so upfront. For technical buyers this is rarely an issue — they care about build quality and process, both of which we are happy to be examined on.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'landing-pages'],
  },
  {
    country: 'UK',
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
      ['Are you based in Bristol?', 'No. Flowzync is a remote studio working with UK clients on UK hours. We would rather tell you that on this page than have you find out on a call.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'graphic-design'],
  },
  {
    country: 'UK',
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
      ['Are you based in Milton Keynes?', 'No. Flowzync is a remote studio working with UK clients on UK business hours, and we are upfront about it — it is the honest explanation for why our quotes compare well with a local agency.'],
    ],
    related: ['custom-website-design', 'automations', 'wordpress-website-design'],
  },
  {
    country: 'UK',
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
      ['Are you a London agency?', 'No. Flowzync is a remote studio working with London clients on UK business hours. We state it plainly because the alternative — implying a London office you would eventually discover does not exist — is not a relationship worth starting.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'landing-pages'],
  },
  // ── SMALLER US MARKETS ──────────────────────────────────────
  // Deliberately chosen over more big metros: search volume is lower
  // but so is competition, and almost nobody writes properly for them.
  {
    country: 'US',
    slug: 'web-design-boise',
    city: 'Boise',
    region: 'Idaho',
    title: 'Web Design in Boise',
    seoTitle: 'Web Design Boise ID | Website Design & Development — Flowzync',
    seoDescription:
      'Website design for Boise and Treasure Valley businesses: custom builds, WordPress, WooCommerce and lead-generation sites. Fixed quotes, Mountain Time hours.',
    keywords: ['web design boise', 'website design boise idaho', 'wordpress developer boise', 'web design agency boise', 'boise web designer'],
    intro:
      'Boise grew faster than its agency scene did. A lot of businesses here are running sites built five or six years ago for a much smaller version of the company, and the mismatch shows — outdated pricing, services that no longer exist, and a design from before half the city moved in. The upside is that search competition has not caught up either, which makes Boise one of the more winnable markets in the Mountain West.',
    context: [
      ['A market that outgrew its websites', 'Rapid population growth means a lot of businesses are trading on sites built for a company half their current size.'],
      ['Construction, outdoor and healthcare', 'Home builders, contractors, outdoor and recreation brands, dental and medical practices — the sectors that grew with the city.'],
      ['Genuinely low search competition', 'Far fewer local agencies producing content than a metro this size would suggest. Service-plus-city terms are realistically winnable.'],
    ],
    faqs: [
      ['Do you work with businesses in Boise?', 'Yes, across Boise, Meridian, Nampa, Eagle, Caldwell and the wider Treasure Valley. We work remotely with calls scheduled in Mountain Time, and the working relationship is the same as a local studio without the premises cost inside your quote.'],
      ['How competitive is search in Boise?', 'Considerably less than most cities its size. There are relatively few local agencies actively publishing content, which means well-built service and location pages can reach page one faster here than in Denver or Seattle. It still takes months rather than weeks, and anyone promising otherwise is guessing.'],
      ['Can you build a site for a construction or home services company?', 'Regularly. That usually means a page per service, a service area map, a gallery of completed work that loads fast on a phone, financing and warranty details, and a quote form that captures enough to price without a site visit. We also wire automatic text and email replies so no enquiry sits unanswered overnight.'],
      ['Are you based in Boise?', 'No. Flowzync is a remote studio working with US clients on US business hours, and we say so rather than implying a local office. It is also the honest reason our quotes compare well with a Treasure Valley agency.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    country: 'US',
    slug: 'web-design-chattanooga',
    city: 'Chattanooga',
    region: 'Tennessee',
    title: 'Web Design in Chattanooga',
    seoTitle: 'Web Design Chattanooga TN | Website Design — Flowzync',
    seoDescription:
      'Website design for Chattanooga businesses: custom sites, WordPress, WooCommerce and B2B lead generation. Fixed quotes, US hours, senior team only.',
    keywords: ['web design chattanooga', 'website design chattanooga tn', 'wordpress developer chattanooga', 'web design agency chattanooga', 'chattanooga web designer'],
    intro:
      'Chattanooga has some of the fastest municipal internet in the country and a genuine small-tech scene that grew out of it, sitting alongside a much older manufacturing and logistics base. That split matters when you are buying a website: a startup on the Innovation District corridor and a third-generation freight company want completely different things, and being sold the wrong one is the most common complaint we hear here.',
    context: [
      ['Two economies, two briefs', 'Startups want a product marketing site. Manufacturing and logistics firms want credibility and a qualified enquiry. Confusing the two wastes budget.'],
      ['Logistics and freight', 'A significant freight corridor. These sites live or die on how clearly they explain capability, capacity and coverage.'],
      ['Tourism and outdoor', 'Rock climbing, river and hiking businesses with sharply seasonal traffic — booking flows matter more than brochure pages.'],
    ],
    faqs: [
      ['Do you work with Chattanooga businesses?', 'Yes, across Chattanooga, Hixson, East Ridge, Cleveland and into North Georgia. We work remotely on Eastern Time, which covers your full working day for calls and replies.'],
      ['We are a manufacturer, not a retailer. Is a website worth it?', 'Usually more than for a retailer, because the buying committee researches you privately before ever making contact. A good site answers capability, capacity, certifications, tolerances and lead times without a call, and captures a qualified enquiry when the buyer is ready. The measure is the quality of enquiries, not traffic.'],
      ['Can you build a booking system for a seasonal tourism business?', 'Yes. That usually means a calendar with real availability, deposit or full payment at booking, group and waiver handling, automatic confirmation and reminder emails, and a way to close off dates fast when weather changes plans. We connect to an existing booking platform where you have one rather than replacing it for the sake of it.'],
      ['Are you a Chattanooga agency?', 'No. We are a remote studio working with US clients on US business hours. We would rather say that on this page than have you find out on a call.'],
    ],
    related: ['custom-website-design', 'landing-pages', 'seo-optimization'],
  },
  {
    country: 'US',
    slug: 'web-design-spokane',
    city: 'Spokane',
    region: 'Washington',
    title: 'Web Design in Spokane',
    seoTitle: 'Web Design Spokane WA | Website Design & SEO — Flowzync',
    seoDescription:
      'Website design for Spokane and Inland Northwest businesses: custom builds, WordPress, WooCommerce and local SEO. Fixed quotes, Pacific Time hours.',
    keywords: ['web design spokane', 'website design spokane wa', 'wordpress developer spokane', 'web design agency spokane', 'spokane web designer'],
    intro:
      'Spokane gets treated as an afterthought by agencies focused on Seattle, three hundred miles west across the mountains. In practice it is a regional hub for the whole Inland Northwest — eastern Washington, northern Idaho, western Montana — and businesses here compete for a catchment far larger than the city population suggests. Sites built for Spokane alone routinely under-serve that reach.',
    context: [
      ['A regional catchment, not a city one', 'Customers travel in from Coeur d’Alene, Pullman, Moses Lake and beyond. Service area pages matter more here than in a dense metro.'],
      ['Healthcare and higher education', 'A large medical district and several universities anchor the local economy, and both bring their own compliance and accessibility requirements.'],
      ['Very little local competition online', 'Few Spokane agencies publish sustained content. Service-plus-city terms are among the cheapest in the Pacific Northwest to compete for.'],
    ],
    faqs: [
      ['Do you cover the Inland Northwest, not just Spokane?', 'Yes — Spokane Valley, Coeur d’Alene, Post Falls, Liberty Lake, Pullman and the surrounding region. If being found in those specifically matters, we build a page for each with content genuinely about that area rather than a duplicate with the name swapped.'],
      ['Do you build accessible websites for healthcare and education?', 'Yes, and for those sectors we treat it as a requirement rather than an extra. That means WCAG 2.2 AA as the working standard: keyboard navigation, tested colour contrast, correct heading structure, labelled forms and real alt text. We test with a screen reader before launch, not just an automated scanner.'],
      ['How long before we see results from SEO here?', 'For a market this size, typically three to six months for service-plus-city terms to move meaningfully, assuming the site is technically sound and we are publishing. That is faster than a major metro because there is far less competing content. Anyone offering you a guaranteed position is selling something they cannot deliver.'],
      ['Are you based in Spokane?', 'No. Flowzync is a remote studio working with US clients on Pacific Time. We are upfront about it — it is part of why our quotes compare well with a local agency.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'maintenance-support'],
  },
  {
    country: 'US',
    slug: 'web-design-sarasota',
    city: 'Sarasota',
    region: 'Florida',
    title: 'Web Design in Sarasota',
    seoTitle: 'Web Design Sarasota FL | Website Design & Development — Flowzync',
    seoDescription:
      'Website design for Sarasota and Gulf Coast businesses: custom sites, WordPress, WooCommerce and booking-led builds. Fixed quotes, US hours, senior team.',
    keywords: ['web design sarasota', 'website design sarasota fl', 'wordpress developer sarasota', 'web design agency sarasota', 'sarasota web designer'],
    intro:
      'Sarasota’s customer base skews older and considerably wealthier than the Florida average, and that changes what a website has to do. Small type, low-contrast design and a checkout that assumes a steady hand on a phone will quietly cost you money here. The businesses that do well on the Gulf Coast are the ones whose sites are genuinely easy to use, not the ones that look the most fashionable.',
    context: [
      ['Design for the actual audience', 'Larger type, real contrast, generous tap targets and forms that forgive mistakes. This is not a compromise — it converts better.'],
      ['Seasonal traffic swings', 'Snowbird season roughly doubles demand for months at a time. Booking and enquiry flows have to cope with the peak without staffing for it year round.'],
      ['Hospitality, health and property', 'Restaurants, medical and dental practices, home services and real estate — the four sectors that carry the Gulf Coast economy.'],
    ],
    faqs: [
      ['Why does an older customer base change the design?', 'Because the things that look modern in a portfolio — thin grey type on white, tiny icons as the only label, hover-only menus — are precisely the things that lose an older visitor. We use larger base type, tested contrast, obvious buttons with words on them, and forms that explain an error rather than just turning a box red. It reads as clean rather than as accessible, and it converts better across every age group.'],
      ['Can the site handle seasonal demand?', 'Yes, and it should. We build booking and enquiry flows that let you close availability, add a waitlist or switch messaging without a developer, so the site reflects reality in season instead of taking bookings you cannot honour.'],
      ['Do you work with restaurants and hospitality?', 'Regularly. That usually means a menu that is real text rather than a PDF so it is searchable and readable on a phone, live reservation integration, correct opening hours in structured data so Google shows them, and photography that loads fast enough not to lose someone deciding where to eat tonight.'],
      ['Are you based in Sarasota?', 'No. We are a remote studio working with US clients on Eastern Time, and we say so plainly rather than implying a Gulf Coast office.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'landing-pages'],
  },

  // ── SMALLER UK TOWNS ────────────────────────────────────────
  {
    country: 'UK',
    slug: 'web-design-norwich',
    city: 'Norwich',
    region: 'Norfolk',
    title: 'Web Design in Norwich',
    seoTitle: 'Web Design Norwich | Website Design Norfolk — Flowzync',
    seoDescription:
      'Website design for Norwich and Norfolk businesses: custom sites, WordPress, WooCommerce and independent retail builds. Fixed quotes, UK business hours.',
    keywords: ['web design norwich', 'website design norwich', 'wordpress developer norwich', 'web design agency norfolk', 'ecommerce website norwich'],
    intro:
      'Norwich is geographically isolated in a way that shapes its economy — no motorway, a long train ride from anywhere, and as a result an unusually self-contained business community with strong independent retail and a well-established insurance and finance presence. Word of mouth carries further here than paid advertising, which means your website is most often the second thing someone checks after a recommendation, not the first thing they find.',
    context: [
      ['The site confirms a recommendation', 'Most visitors arrive already half-sold. The job is to remove doubt fast, not to persuade from cold.'],
      ['Independent retail and food', 'The Lanes and the market support a dense independent scene, much of it selling online to a national audience from a Norwich base.'],
      ['A cheap search market', 'Very few agencies compete seriously for Norfolk terms. Local and county-level search is realistically winnable within months.'],
    ],
    faqs: [
      ['Do you cover Norfolk as well as Norwich?', 'Yes — Great Yarmouth, King’s Lynn, Thetford, Dereham, Wymondham and the Broads. Norfolk terms are among the least contested in England, so a properly written page for a specific town here goes further than the same effort would in the South East.'],
      ['We sell nationally from Norwich. Does a local page still help?', 'Yes, but it is not the main event. A local page wins you the people searching with a place name and it strengthens your Google Business Profile. The national selling is done by product and category pages, and by content that answers what buyers ask before purchase. We build both and keep them from competing with each other for the same term.'],
      ['Can you build a WooCommerce store for an independent retailer?', 'Yes. WooCommerce suits independents well because you are not paying a percentage of every sale to the platform and you keep control of checkout, discounting and subscriptions. We handle payment gateways, stock sync with your till system where one exists, and shipping rules including the awkward ones like weight bands and fragile items.'],
      ['Are you based in Norwich?', 'No. Flowzync is a remote studio working with UK clients on UK business hours. We would rather be straight about that than imply a Norfolk office.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'seo-optimization'],
  },
  {
    country: 'UK',
    slug: 'web-design-stockport',
    city: 'Stockport',
    region: 'Greater Manchester',
    title: 'Web Design in Stockport',
    seoTitle: 'Web Design Stockport | Website Design Greater Manchester — Flowzync',
    seoDescription:
      'Website design for Stockport businesses: custom sites, WordPress, WooCommerce and lead-generation builds. Fixed quotes, UK hours, senior team only.',
    keywords: ['web design stockport', 'website design stockport', 'wordpress developer stockport', 'web design agency stockport', 'stockport web designer'],
    intro:
      'Stockport spent a decade being described as up-and-coming and then quietly became it. The town centre regeneration brought in creative and professional firms alongside a long-standing base of trades, manufacturing and family businesses. What has not happened is a matching rise in local agencies — most Stockport businesses still get pulled toward Manchester city centre pricing for work that does not need it.',
    context: [
      ['Manchester quality, not Manchester rates', 'Businesses here are routinely quoted city-centre prices. The build does not cost more because the client is ten minutes down the A6.'],
      ['Trades and family businesses', 'Long-established firms whose reputation is strong locally and whose website has not kept up with it.'],
      ['A far cheaper term than Manchester', '"Web design Stockport" is a fraction as contested as the Manchester equivalent, and the enquiries are better qualified.'],
    ],
    faqs: [
      ['Why target Stockport rather than Manchester?', 'Because you can actually win it. Manchester terms are fought over by dozens of agencies with years of domain history; Stockport, Cheadle, Bramhall and Marple are not. Someone searching with a town name is usually closer to buying than someone searching the city, so the enquiries tend to be better as well as cheaper to earn.'],
      ['Do you cover the rest of the borough?', 'Yes — Cheadle, Bramhall, Marple, Hazel Grove, Romiley and Reddish. If being found in a specific one matters we build a page for it with content genuinely about that area. We will not duplicate a template across all six; Google demotes that as a group.'],
      ['We are an established firm with an old website. Rebuild or fix?', 'It depends on what is actually wrong. If the structure and content are sound and the problem is speed, mobile layout or a dated look, a refresh is usually the better investment and we will say so. If the site fights you every time you edit it, or it was built on something no longer supported, patching it costs more over two years than replacing it. We audit first and show you the reasoning before you decide.'],
      ['Are you based in Stockport?', 'No. We are a remote studio working with UK clients on UK business hours, and we state it plainly.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'seo-optimization'],
  },
  {
    country: 'UK',
    slug: 'web-design-swindon',
    city: 'Swindon',
    region: 'Wiltshire',
    title: 'Web Design in Swindon',
    seoTitle: 'Web Design Swindon | Website Design Wiltshire — Flowzync',
    seoDescription:
      'Website design for Swindon and Wiltshire businesses: custom sites, WordPress, automation and B2B lead generation. Fixed quotes, UK business hours.',
    keywords: ['web design swindon', 'website design swindon', 'wordpress developer swindon', 'web design agency wiltshire', 'b2b website swindon'],
    intro:
      'Swindon sits on the M4 between Bristol and Reading, which has made it a logistics, distribution and back-office town rather than a shop-window one. Most businesses here sell to other businesses, and a lot of them have websites that were built as brochures when what they need is something that qualifies an enquiry before it reaches a salesperson.',
    context: [
      ['B2B, not retail', 'Distribution, facilities management, engineering and business services. The website’s job is to filter, not to browse.'],
      ['Automation earns its keep here', 'Enquiries that route themselves, quote requests that arrive complete, and CRM records that create themselves save real admin time.'],
      ['One of the cheapest markets on the M4', 'Far less contested than Reading or Bristol, with businesses of comparable size.'],
    ],
    faqs: [
      ['What does a B2B website actually need to do?', 'Explain a service clearly enough that a buyer can shortlist you without calling, prove you have done it before, and capture an enquiry with enough detail to quote. That usually means service pages with real specifics, case studies with numbers, capability and accreditation information, and a form that asks the qualifying questions your salesperson would ask first anyway.'],
      ['Can you automate what happens after an enquiry?', 'Yes, and it is usually the highest-return part of the project. An enquiry can create a CRM record, send an immediate acknowledgement, notify the right person by email and text, add a follow-up task, and chase automatically if nobody responds within an agreed window. Most of the value is in the chase — that is where enquiries quietly die.'],
      ['Do you cover Wiltshire more widely?', 'Yes — Chippenham, Trowbridge, Salisbury, Devizes, Marlborough and Royal Wootton Bassett. Those are small markets with almost no agency competition, which makes them cheap to rank in when a page is genuinely written for them.'],
      ['Are you based in Swindon?', 'No. Flowzync is a remote studio working with UK clients on UK business hours.'],
    ],
    related: ['automations', 'custom-website-design', 'ghl-crm-setup'],
  },
  {
    country: 'UK',
    slug: 'web-design-wakefield',
    city: 'Wakefield',
    region: 'West Yorkshire',
    title: 'Web Design in Wakefield',
    seoTitle: 'Web Design Wakefield | Website Design West Yorkshire — Flowzync',
    seoDescription:
      'Website design for Wakefield and West Yorkshire businesses: custom sites, WordPress, WooCommerce and local lead generation. Fixed quotes, UK hours.',
    keywords: ['web design wakefield', 'website design wakefield', 'wordpress developer wakefield', 'web design agency west yorkshire', 'wakefield web designer'],
    intro:
      'Wakefield is close enough to Leeds that most agencies treat it as an outlying postcode rather than a market, and it shows in what local businesses have been sold. We see a lot of template sites here that were cheap up front and expensive afterwards — impossible to edit, slow on mobile, and built on page builders that were abandoned by their developers years ago.',
    context: [
      ['The cheap-site hangover', 'A lot of businesses here are on their second or third rebuild because the first two were templates that could not be maintained.'],
      ['Trades, care and manufacturing', 'Construction, care providers, engineering and distribution — sectors where trust and compliance matter more than visual fashion.'],
      ['Winnable, unlike Leeds', 'Wakefield, Castleford, Pontefract and Normanton have almost no agency competition. Leeds has a great deal.'],
    ],
    faqs: [
      ['My last website was cheap and unmaintainable. How is this different?', 'The honest answer is that cheap sites are usually cheap because someone bought a theme, filled it in and left. The cost arrives later, when nobody can edit it and the plugins stop being updated. We design from scratch, build on tooling that will still be supported in five years, and hand over documentation plus a walkthrough so your team can edit content without us. You are welcome to ask what a site is built on before you commit — with anyone, not just us.'],
      ['Do you work with care providers?', 'Yes. Care sector sites carry requirements most builds do not: accessibility as a genuine standard rather than a checkbox, clear CQC information, careful handling of enquiries from families under stress, and recruitment pages that actually fill vacancies — which for most providers is half the reason the site exists.'],
      ['Do you cover the wider district?', 'Yes — Castleford, Pontefract, Normanton, Ossett and Horbury. These are small, genuinely uncontested markets. A page properly written for one of them can rank in weeks rather than the months a Leeds term would take.'],
      ['Are you based in Wakefield?', 'No. We are a remote studio working with UK clients on UK business hours, and we say so upfront.'],
    ],
    related: ['custom-website-design', 'wordpress-website-design', 'maintenance-support'],
  },

  // ── BEYOND THE US AND UK ────────────────────────────────────
  // We work worldwide. A locations page listing only two countries
  // reads as "we only serve two countries", which cost us enquiries.
  {
    country: 'CA',
    slug: 'web-design-calgary',
    city: 'Calgary',
    region: 'Alberta',
    title: 'Web Design in Calgary',
    seoTitle: 'Web Design Calgary | Website Design Alberta — Flowzync',
    seoDescription:
      'Website design for Calgary and Alberta businesses: custom builds, WordPress, WooCommerce and lead-generation sites. Fixed quotes, Mountain Time hours.',
    keywords: ['web design calgary', 'website design calgary', 'wordpress developer calgary', 'web design agency alberta', 'calgary web designer'],
    intro:
      'Calgary’s business community has spent the last decade deliberately diversifying away from oil and gas, and a lot of the resulting companies are selling something genuinely new with a website inherited from the old business. Energy services, agritech, logistics and professional services all show the same pattern: the offering moved on and the site did not.',
    context: [
      ['A diversifying economy', 'Companies repositioning out of energy need a site that explains what they do now, not what they did in 2015.'],
      ['Bilingual where it matters', 'Most Calgary businesses trade in English only, but anything selling federally or into Quebec needs French handled properly rather than machine-translated.'],
      ['Canadian privacy law applies', 'PIPEDA governs how you collect and store enquiry data. It shapes forms, analytics and consent, and it is not the same as GDPR.'],
    ],
    faqs: [
      ['Do you work with Canadian clients?', 'Yes. We work with clients worldwide and Canada is a regular market. Calls are scheduled in Mountain Time, quotes can be issued in Canadian dollars, and the working relationship is the same as it would be with a Calgary studio.'],
      ['Does the site need to comply with Canadian privacy law?', 'If you collect enquiries from Canadians, PIPEDA applies. In practice that means a privacy policy that says what you actually do with the data, meaningful consent at the point of collection rather than a pre-ticked box, and not quietly shipping personal data to tools you have not disclosed. We build to that by default and will flag anything in your existing setup that does not meet it.'],
      ['Can you build a bilingual English and French site?', 'Yes. That means separate URLs per language so each can rank, hreflang tags so Google serves the right one, and a CMS structure where content is genuinely translated rather than machine-generated. We work with your translator — we do not translate the copy ourselves, and any agency telling you machine translation is fine for a public site is doing you harm.'],
      ['Are you based in Canada?', 'No. Flowzync is a remote studio working with Canadian clients on Canadian business hours. We are upfront about it, and it is part of why our quotes compare well with a local agency.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'automations'],
  },
  {
    country: 'CA',
    slug: 'web-design-ottawa',
    city: 'Ottawa',
    region: 'Ontario',
    title: 'Web Design in Ottawa',
    seoTitle: 'Web Design Ottawa | Bilingual Website Design Ontario — Flowzync',
    seoDescription:
      'Website design for Ottawa businesses: custom builds, bilingual sites, WordPress and accessible public-sector-ready design. Fixed quotes, Eastern Time hours.',
    keywords: ['web design ottawa', 'website design ottawa', 'bilingual website design ottawa', 'wordpress developer ottawa', 'accessible web design ontario'],
    intro:
      'Ottawa is a government town, and that reaches much further than the public service itself. Contractors, consultancies, associations and technology suppliers all end up held to public-sector standards on accessibility and bilingualism whether or not they are formally required to be — because the person evaluating them applies the standards they know.',
    context: [
      ['Accessibility is table stakes', 'Ontario’s AODA requirements and federal procurement expectations mean WCAG compliance is judged, not assumed.'],
      ['English and French, properly', 'A half-translated site is more damaging here than an English-only one. Both languages need equal structure and equal upkeep.'],
      ['Associations and consultancies', 'Membership bodies, policy consultancies and technology suppliers to government — long sales cycles, credibility-led sites.'],
    ],
    faqs: [
      ['Do you build AODA and WCAG compliant websites?', 'Yes, and for Ottawa clients we treat WCAG 2.2 AA as the working baseline rather than an add-on. That means keyboard operability throughout, tested contrast ratios, correct heading and landmark structure, properly labelled forms, captions on video and real alternative text. We test with a screen reader before launch — automated scanners catch perhaps a third of what actually matters.'],
      ['How do you handle a truly bilingual site?', 'Separate indexable URLs for each language, hreflang so search engines serve the right version, a language switcher that keeps the visitor on the equivalent page rather than dumping them on the homepage, and a CMS where French content is edited as a first-class version rather than a field bolted onto the English. We coordinate with your translator; we do not machine-translate public copy.'],
      ['Can you work with a membership association?', 'Yes. Those usually need a public site and a members’ area behind it, event and conference pages, a directory, renewals connected to payment, and a way for staff who are not web specialists to publish without breaking the layout. We build the editing experience for the person who will actually use it.'],
      ['Are you based in Ottawa?', 'No. We are a remote studio working with Canadian clients on Eastern Time, and we say so plainly.'],
    ],
    related: ['custom-website-design', 'ui-ux-design', 'wordpress-website-design'],
  },
  {
    country: 'AU',
    slug: 'web-design-adelaide',
    city: 'Adelaide',
    region: 'South Australia',
    title: 'Web Design in Adelaide',
    seoTitle: 'Web Design Adelaide | Website Design South Australia — Flowzync',
    seoDescription:
      'Website design for Adelaide and South Australian businesses: custom sites, WordPress, WooCommerce and e-commerce. Fixed quotes, calls in ACST.',
    keywords: ['web design adelaide', 'website design adelaide', 'wordpress developer adelaide', 'web design agency south australia', 'ecommerce website adelaide'],
    intro:
      'Adelaide is consistently the cheapest capital city market in Australia to compete in online, and it is not because the businesses are smaller — wine, food, defence and health here sell nationally and internationally. It is because far fewer agencies fight for South Australian search terms than for Sydney or Melbourne ones. For a business selling beyond the state, that is a genuine and underused advantage.',
    context: [
      ['The cheapest capital market in the country', 'South Australian terms cost a fraction of the eastern states equivalents to compete for.'],
      ['Wine, food and export', 'Barossa, McLaren Vale and the Adelaide Hills producers selling direct nationally — subscription and case-based e-commerce, not simple carts.'],
      ['Australian Consumer Law shapes the copy', 'Refund, warranty and delivery statements are legally constrained here in ways that catch out overseas-built sites.'],
    ],
    faqs: [
      ['Do you work with Australian clients from overseas?', 'Yes, regularly. Calls are scheduled in Australian Central Standard Time and quotes can be issued in Australian dollars. The time difference means work progresses overnight for you, so there is usually new output waiting each morning.'],
      ['Can you build a wine or subscription e-commerce store?', 'Yes. Wine e-commerce has specifics most carts handle badly: mixed cases and bundles, per-state delivery rules, age verification, subscription and club memberships with pauses and skips, and freight pricing that changes with weight and destination. WooCommerce or Shopify both work — which one is right depends on how complex your club structure is, and we will tell you which after we understand it rather than before.'],
      ['Does Australian Consumer Law affect the website?', 'Yes, more than most people expect. Consumer guarantees cannot be contracted out of, so a returns policy copied from a US site is often unlawful here. Delivery timeframes and pricing must be stated accurately including GST, and testimonial and review claims are policed. We build to that and flag anything in your existing copy that is exposed — though for a legally binding review, use an Australian lawyer, not a web studio.'],
      ['Are you based in Adelaide?', 'No. Flowzync is a remote studio working with Australian clients on Australian business hours for calls. We say so upfront rather than implying a local office.'],
    ],
    related: ['woocommerce-development', 'custom-website-design'],
  },
  {
    country: 'AU',
    slug: 'web-design-gold-coast',
    city: 'Gold Coast',
    region: 'Queensland',
    title: 'Web Design on the Gold Coast',
    seoTitle: 'Web Design Gold Coast | Website Design Queensland — Flowzync',
    seoDescription:
      'Website design for Gold Coast businesses: custom sites, booking-led builds, WordPress and landing pages. Fixed quotes, calls in Queensland hours.',
    keywords: ['web design gold coast', 'website design gold coast', 'wordpress developer gold coast', 'web design agency queensland', 'gold coast web designer'],
    intro:
      'The Gold Coast runs on tourism, trades and small business, and almost all of it is decided on a phone. Visitors book accommodation and activities on mobile, homeowners find trades on mobile, and a site that is merely acceptable on a small screen loses to one that is genuinely built for it. Desktop-first design costs more money here than in most Australian markets.',
    context: [
      ['Mobile is not a version, it is the site', 'The overwhelming majority of local and visitor traffic is on a phone. Everything is designed for that first.'],
      ['Booking is the conversion', 'Accommodation, tours, activities and beauty — the enquiry form is often the wrong tool. Real-time booking is.'],
      ['Trades compete on speed of reply', 'Homeowners contact three businesses and hire whoever answers first. Automated response is worth more than a redesign.'],
    ],
    faqs: [
      ['Can you build real-time booking rather than an enquiry form?', 'Yes, and for tourism and beauty businesses it usually pays for itself quickly. That means live availability, deposit or full payment at the point of booking, automatic confirmations and reminders that cut no-shows, and cancellation rules applied without a staff member arbitrating. Where you already use a booking platform we integrate with it rather than replacing something that works.'],
      ['We are a trades business. What matters most?', 'Answering first. Most homeowners contact several businesses and hire whoever responds soonest, so an enquiry that triggers an instant text and email acknowledgement, notifies you on your phone, and chases automatically if nobody has replied within the hour will out-earn almost any design change. We build the site around that, not around a gallery.'],
      ['Do you cover Brisbane and northern New South Wales too?', 'Yes — Brisbane, Logan, Ipswich, Tweed Heads and Byron. Each is its own search market. If being found in a specific one matters, it needs its own page with content genuinely about that area rather than a duplicate.'],
      ['Are you based on the Gold Coast?', 'No. We are a remote studio working with Australian clients, with calls scheduled in Queensland hours. We would rather say that here than on a call.'],
    ],
    related: ['landing-pages', 'custom-website-design', 'automations'],
  },
  {
    country: 'IE',
    slug: 'web-design-cork',
    city: 'Cork',
    region: 'Munster',
    title: 'Web Design in Cork',
    seoTitle: 'Web Design Cork | Website Design Ireland — Flowzync',
    seoDescription:
      'Website design for Cork and Munster businesses: custom sites, WordPress, WooCommerce and GDPR-compliant builds. Fixed quotes, Irish business hours.',
    keywords: ['web design cork', 'website design cork', 'wordpress developer cork', 'web design agency ireland', 'ecommerce website cork'],
    intro:
      'Cork carries a large pharmaceutical, medtech and technology employment base alongside a genuinely independent local business scene, and the two rarely buy the same thing. What they share is that Irish sites sit under GDPR enforcement that is considerably more active than most businesses expect — the Data Protection Commission regulates several of the largest technology companies in the world from Dublin, and it applies the same rules to everyone else.',
    context: [
      ['GDPR is enforced here, not theoretical', 'Consent before non-essential cookies fire, honest privacy notices, and analytics configured lawfully. Retrofitting this is expensive.'],
      ['Multinational supply chains', 'Suppliers to the pharma and medtech clusters need credibility, accreditation and compliance content, not brochure copy.'],
      ['Independent food, drink and retail', 'A strong local scene selling nationally and into the UK, with the post-Brexit shipping complications that implies.'],
    ],
    faqs: [
      ['How do you handle GDPR on the website?', 'Properly, which means more than a banner. Non-essential cookies and analytics do not load until consent is given, refusing is as easy as accepting, the privacy notice describes what you actually collect and who you share it with, enquiry data has a defined retention period, and forms do not silently gather more than they need. If your current site fires Google Analytics before consent — very common — we will tell you.'],
      ['Do you work with Irish clients?', 'Yes. Ireland is a regular market for us. Calls run in Irish business hours, quotes are issued in euro, and VAT is handled correctly on the invoice.'],
      ['We ship to the UK. Does the site need to handle that differently?', 'Yes, and it is where a lot of Irish stores lose money. Post-Brexit you need customs and duty expectations set before checkout rather than sprung on the customer at delivery, correct VAT treatment on both sides, and shipping rules that separate Ireland, Northern Ireland and Great Britain properly. Getting this wrong produces refused parcels and chargebacks, not just complaints.'],
      ['Are you based in Cork?', 'No. Flowzync is a remote studio working with Irish clients on Irish business hours, and we say so upfront.'],
    ],
    related: ['woocommerce-development', 'custom-website-design', 'seo-optimization'],
  },
  {
    country: 'AE',
    slug: 'web-design-dubai',
    city: 'Dubai',
    region: 'United Arab Emirates',
    title: 'Web Design in Dubai',
    seoTitle: 'Web Design Dubai | Website Design UAE — Flowzync',
    seoDescription:
      'Website design for Dubai and UAE businesses: custom sites, bilingual Arabic and English builds, WordPress and e-commerce. Fixed quotes, Gulf hours.',
    keywords: ['web design dubai', 'website design dubai', 'arabic website design', 'wordpress developer dubai', 'web design company uae'],
    intro:
      'Dubai is a crowded, expensive market for web design, and a lot of what is sold here is presentation over substance — a striking homepage on top of a site that is slow, unfindable and impossible to update. The genuinely hard part in this market is bilingual: an Arabic version is not a translation layer, it is a mirrored interface with its own typography, and most agencies quote it as though it were a content field.',
    context: [
      ['Arabic is a right-to-left rebuild', 'Layout mirrors, type changes, numerals and dates behave differently. Done as an afterthought it always looks wrong.'],
      ['A genuinely international customer base', 'Sites here serve residents, expatriates and overseas buyers at once, often in two languages and two currencies.'],
      ['Free zone and mainland differences', 'Licensing affects what you may advertise and how you must present the business. It belongs in the brief, not in a post-launch scramble.'],
    ],
    faqs: [
      ['Can you build an Arabic and English website?', 'Yes, and we build the Arabic version as a proper right-to-left interface rather than translated text poured into a left-to-right layout. That means mirrored navigation and layout, Arabic typefaces chosen to sit correctly at the sizes used, numerals and dates handled to the convention you want, separate indexable URLs per language and hreflang so search engines serve the right one. We work with your Arabic copywriter or translator — we do not write or machine-translate Arabic ourselves.'],
      ['Do you work with UAE clients?', 'Yes. Calls run in Gulf Standard Time, which overlaps our working day comfortably, and the working relationship is the same as with a Dubai agency without the local overhead in the quote.'],
      ['Can you handle multiple currencies?', 'Yes — typically AED alongside USD, GBP or EUR, with the price shown in the visitor’s currency and the transaction settled in whichever your payment provider supports. The detail that matters is being explicit about which currency is actually charged; hiding a conversion until the bank statement is what generates chargebacks.'],
      ['Are you based in Dubai?', 'No. Flowzync is a remote studio working with UAE clients on Gulf business hours. We are straightforward about it rather than implying a local presence.'],
    ],
    related: ['custom-website-design', 'ui-ux-design'],
  },
  {
    country: 'NZ',
    slug: 'web-design-christchurch',
    city: 'Christchurch',
    region: 'Canterbury',
    title: 'Web Design in Christchurch',
    seoTitle: 'Web Design Christchurch | Website Design New Zealand — Flowzync',
    seoDescription:
      'Website design for Christchurch and Canterbury businesses: custom sites, WordPress, WooCommerce and tourism booking builds. Fixed quotes, NZ hours.',
    keywords: ['web design christchurch', 'website design christchurch', 'wordpress developer christchurch', 'web design agency new zealand', 'christchurch web designer'],
    intro:
      'Christchurch rebuilt itself over a decade and the business community that came out of it is unusually comfortable with starting again from scratch. That shows in briefs: clients here are more likely to want the thing done properly than done cheaply, and more likely to ask what happens in five years. It is a good market to build carefully for.',
    context: [
      ['A rebuilt business community', 'Construction, engineering and professional services that grew through the rebuild, now selling well beyond Canterbury.'],
      ['Tourism with a long booking lead', 'International visitors book months ahead in their own timezone and currency. The site sells while nobody is at the desk.'],
      ['Distance makes the website the shopfront', 'For most Canterbury exporters and tourism operators, the site is the entire first impression. There is no walk-in alternative.'],
    ],
    faqs: [
      ['Do you work with New Zealand clients?', 'Yes. Calls are scheduled in New Zealand time, which for us means early morning, and quotes can be issued in New Zealand dollars. The offset works in your favour day to day: you brief in the afternoon and there is usually progress waiting the next morning.'],
      ['Can you build for international tourism bookings?', 'Yes. That means live availability, prices shown in the visitor’s currency with the charged currency stated plainly, deposits and staged payments, automatic confirmations and pre-arrival emails in the visitor’s timezone rather than yours, and cancellation terms applied automatically. Where you already use a booking platform we integrate rather than replace.'],
      ['Do you cover the rest of the South Island?', 'Yes — Queenstown, Dunedin, Nelson, Timaru and Invercargill. These are small markets with very little agency competition, which makes properly written local pages unusually effective.'],
      ['Are you based in New Zealand?', 'No. Flowzync is a remote studio working with New Zealand clients, and we say so rather than implying a Christchurch office.'],
    ],
    related: ['custom-website-design', 'landing-pages', 'seo-optimization'],
  },
  // ── SECOND WAVE: smaller markets, chosen for winnability ─────
  {
    country: 'US',
    slug: 'web-design-fort-collins',
    city: 'Fort Collins',
    region: 'Colorado',
    title: 'Web Design in Fort Collins',
    seoTitle: 'Web Design Fort Collins CO | Website Design Northern Colorado — Flowzync',
    seoDescription:
      'Website design for Fort Collins and Northern Colorado businesses: custom builds, WordPress, WooCommerce and breweries, outdoor and university-adjacent brands.',
    keywords: ['web design fort collins', 'website design fort collins co', 'wordpress developer fort collins', 'web design agency northern colorado', 'fort collins web designer'],
    intro:
      'Fort Collins has a business mix you do not see often: a large university, one of the densest craft brewing scenes in the country, a serious outdoor industry, and a technology corridor that grew out of the university. What they share is customers who research carefully and are quietly unimpressed by anything that looks templated.',
    context: [
      ['Craft brewing and taprooms', 'Event calendars, taproom hours that are actually current, distribution information and direct sales — a specific set of needs most builders get wrong.'],
      ['Outdoor and recreation brands', 'Selling nationally from a Colorado base, where product photography and technical specification matter more than lifestyle copy.'],
      ['A market Denver agencies overlook', 'An hour north of Denver and treated as an outlying postcode, which keeps Northern Colorado search terms cheap to compete for.'],
    ],
    faqs: [
      ['Do you cover Northern Colorado, not just Fort Collins?', 'Yes — Loveland, Greeley, Windsor, Longmont and Boulder. Each behaves as its own local search market, and a page genuinely written for one goes further here than the same effort would in Denver.'],
      ['Can you build a site for a brewery or taproom?', 'Yes. That usually means an events calendar your staff can actually keep current, a beer list that updates without a developer, taproom hours in structured data so Google shows them correctly, distribution and stockist information, and merchandise or growler sales where you sell direct.'],
      ['We sell outdoor products nationally. Is a local page useful?', 'It helps, but it is not the main event. Local pages win the searches that include a place name and strengthen your Google Business Profile. National sales come from product and category pages and from content answering what buyers ask before purchase. We build both so they do not compete for the same term.'],
      ['Are you based in Fort Collins?', 'No. Flowzync is a remote studio working with US clients on US business hours, and we say so rather than implying a local office.'],
    ],
    related: ['custom-website-design', 'seo-optimization'],
  },
  {
    country: 'US',
    slug: 'web-design-des-moines',
    city: 'Des Moines',
    region: 'Iowa',
    title: 'Web Design in Des Moines',
    seoTitle: 'Web Design Des Moines IA | Website Design Iowa — Flowzync',
    seoDescription:
      'Website design for Des Moines and Iowa businesses: custom sites, WordPress, insurance and financial services builds, and B2B lead generation. Fixed quotes, US hours.',
    keywords: ['web design des moines', 'website design des moines iowa', 'wordpress developer des moines', 'web design agency iowa', 'des moines web designer'],
    intro:
      'Des Moines is an insurance and financial services town first, agriculture second, and both sectors buy websites the same way: carefully, with compliance in the room. The result is a market where the flashiest proposal usually loses and the one that understands review cycles usually wins.',
    context: [
      ['Insurance and financial services', 'Compliance-aware copy, disclosure requirements and agent locators — and a review process that a designer needs to plan for rather than resent.'],
      ['Agriculture and agribusiness', 'Equipment dealers, suppliers and co-operatives, where seasonality and dealer locators drive the structure.'],
      ['Genuinely uncontested search', 'One of the least competitive metros of its size in the country. Service-plus-city terms are reachable in months rather than years.'],
    ],
    faqs: [
      ['Do you work with insurance and financial services firms?', 'Yes. Those builds need compliance-reviewable copy, correct disclosures, agent or adviser locators, quote request flows that capture enough to be useful, and integration with the systems you already run on. We write to pass review the first time rather than expecting a rewrite after it.'],
      ['How competitive is search in Des Moines?', 'Among the least competitive metros of its size in the US. Very few local firms publish sustained content, so a properly built service page can reach page one within months. It still takes months, and anyone promising weeks is guessing.'],
      ['Do you cover the rest of Iowa?', 'Yes — West Des Moines, Ankeny, Ames, Cedar Rapids, Iowa City, Davenport and Sioux City. Small markets with almost no agency competition, which makes local pages unusually effective when they are genuinely written for the place.'],
      ['Are you based in Des Moines?', 'No. We are a remote studio working with US clients on Central Time, and we are upfront about it.'],
    ],
    related: ['custom-website-design', 'automations', 'seo-optimization'],
  },
  {
    country: 'UK',
    slug: 'web-design-huddersfield',
    city: 'Huddersfield',
    region: 'West Yorkshire',
    title: 'Web Design in Huddersfield',
    seoTitle: 'Web Design Huddersfield | Website Design West Yorkshire — Flowzync',
    seoDescription:
      'Website design for Huddersfield businesses: custom sites, WordPress, manufacturing and B2B builds, and local lead generation. Fixed quotes, UK business hours.',
    keywords: ['web design huddersfield', 'website design huddersfield', 'wordpress developer huddersfield', 'web design agency west yorkshire', 'huddersfield web designer'],
    intro:
      'Huddersfield still has a real manufacturing base — textiles, engineering, chemicals — sitting alongside a university and a town centre that has been through several rounds of regeneration. The manufacturers here often sell internationally from a website that has not been touched since 2016, which is a bigger commercial problem than most of them realise.',
    context: [
      ['Manufacturers selling internationally', 'Buyers in Germany or the US assess capability entirely from the website. An outdated one quietly removes you from shortlists you never see.'],
      ['A university town economy', 'Student housing, hospitality and services with sharply seasonal demand and a young, mobile-first audience.'],
      ['Cheaper than Leeds by a wide margin', 'Fifteen miles from Leeds and a fraction as contested in search, while the businesses are often just as substantial.'],
    ],
    faqs: [
      ['Do you build websites for manufacturers?', 'Yes, and it is one of the highest-return builds in this area. Capability and machine lists, tolerances and materials, certifications with numbers, downloadable datasheets, and an enquiry form that asks what your estimator would ask anyway. International buyers shortlist privately from exactly this information.'],
      ['Why target Huddersfield rather than Leeds?', 'Because it is winnable. Leeds terms are fought over by dozens of agencies with years of domain history; Huddersfield, Halifax, Dewsbury and Brighouse are not. Someone searching with a town name is usually closer to buying, so the enquiries tend to be better as well as cheaper to earn.'],
      ['Do you cover the wider area?', 'Yes — Halifax, Dewsbury, Brighouse, Holmfirth, Elland and Batley. If being found in a specific one matters we build a page genuinely about that area rather than duplicating a template, which Google demotes as a group.'],
      ['Are you based in Huddersfield?', 'No. Flowzync is a remote studio working with UK clients on UK business hours.'],
    ],
    related: ['custom-website-design', 'seo-optimization', 'wordpress-website-design'],
  },
  {
    country: 'UK',
    slug: 'web-design-ipswich',
    city: 'Ipswich',
    region: 'Suffolk',
    title: 'Web Design in Ipswich',
    seoTitle: 'Web Design Ipswich | Website Design Suffolk — Flowzync',
    seoDescription:
      'Website design for Ipswich and Suffolk businesses: custom sites, WordPress, WooCommerce, logistics and insurance builds. Fixed quotes, UK business hours.',
    keywords: ['web design ipswich', 'website design ipswich', 'wordpress developer ipswich', 'web design agency suffolk', 'ipswich web designer'],
    intro:
      'Ipswich has a port, a long-standing insurance presence and a business community that is noticeably self-contained — much like Norwich an hour north. Being off the main corridors keeps agency competition low, and it means local reputation carries further than advertising does. The website is usually the second thing someone checks, not the first thing they find.',
    context: [
      ['Port and logistics', 'Freight, haulage and distribution firms whose sites need to explain capability and capacity rather than browse like a catalogue.'],
      ['Insurance and professional services', 'A long-established sector locally, with the compliance-aware copy and structured enquiry flows that implies.'],
      ['One of the cheapest markets in England', 'Suffolk search terms are barely contested. A well-built local page can rank in weeks rather than months.'],
    ],
    faqs: [
      ['Do you cover Suffolk beyond Ipswich?', 'Yes — Bury St Edmunds, Felixstowe, Lowestoft, Woodbridge, Stowmarket and Sudbury. These are genuinely uncontested markets, so a page properly written for one of them goes a long way.'],
      ['We are a logistics firm. What should the site do?', 'Explain capability and capacity clearly, prove you have handled comparable work, carry your accreditations, and capture an enquiry with enough detail to quote. Often a tracking or customer portal integration is worth more than anything on the public pages.'],
      ['How quickly could we rank locally?', 'In a market this size, service-plus-town terms typically start moving within two to four months on a technically sound site with real content. That is faster than most of England because so little competing content exists. Nobody can promise a position, and we will not.'],
      ['Are you based in Ipswich?', 'No. We are a remote studio working with UK clients on UK business hours, and we would rather say that here than on a call.'],
    ],
    related: ['custom-website-design', 'automations', 'seo-optimization'],
  },
  {
    country: 'CA',
    slug: 'web-design-halifax-ns',
    city: 'Halifax',
    region: 'Nova Scotia',
    title: 'Web Design in Halifax',
    seoTitle: 'Web Design Halifax NS | Website Design Nova Scotia — Flowzync',
    seoDescription:
      'Website design for Halifax and Atlantic Canada businesses: custom builds, WordPress, WooCommerce, tourism booking and bilingual sites. Atlantic Time hours.',
    keywords: ['web design halifax', 'website design halifax ns', 'wordpress developer halifax', 'web design agency nova scotia', 'atlantic canada web design'],
    intro:
      'Halifax is the commercial centre for the whole of Atlantic Canada, which means businesses here serve a catchment far larger than the city suggests — four provinces, much of it rural, a lot of it on slower connections. Sites built for a Toronto audience routinely underperform here for exactly that reason.',
    context: [
      ['A regional catchment across four provinces', 'Customers in New Brunswick, PEI and Newfoundland. Service area structure matters far more than in a dense metro.'],
      ['Tourism with long booking lead times', 'Visitors book months ahead, in their own currency and timezone, often from outside Canada entirely.'],
      ['Build light, not heavy', 'Rural Atlantic connections are slower than urban Ontario. A heavy site loses customers here that it would keep in Toronto.'],
    ],
    faqs: [
      ['Do you work with clients in Atlantic Canada?', 'Yes. Calls run in Atlantic Time, quotes can be issued in Canadian dollars, and we build for the connection speeds your customers actually have rather than the ones a city office has.'],
      ['Does Canadian privacy law affect the site?', 'If you collect enquiries from Canadians, PIPEDA applies: a privacy notice describing what you genuinely do with the data, meaningful consent at collection rather than a pre-ticked box, and no quiet transfer of personal data to undisclosed tools. We build to that and will flag anything in an existing setup that does not meet it.'],
      ['Can you build tourism booking for international visitors?', 'Yes. Live availability, prices shown in the visitor currency with the charged currency stated plainly, deposits and staged payments, and confirmations timed to the visitor timezone rather than yours. Where you already use a booking platform we integrate rather than replace it.'],
      ['Are you based in Halifax?', 'No. Flowzync is a remote studio working with Canadian clients on Atlantic Time, and we say so upfront.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'seo-optimization'],
  },
  {
    country: 'AU',
    slug: 'web-design-newcastle-nsw',
    city: 'Newcastle',
    region: 'New South Wales',
    title: 'Web Design in Newcastle NSW',
    seoTitle: 'Web Design Newcastle NSW | Website Design Hunter Region — Flowzync',
    seoDescription:
      'Website design for Newcastle and Hunter region businesses: custom sites, WordPress, trades and industrial builds, and e-commerce. Calls in AEST.',
    keywords: ['web design newcastle nsw', 'website design newcastle', 'wordpress developer newcastle nsw', 'web design agency hunter region', 'newcastle web designer'],
    intro:
      'Newcastle spent a decade converting from heavy industry to services, health and education, and a lot of businesses here are selling something quite different from what they sold in 2015 through a website that never caught up. Being two hours from Sydney also means Sydney agencies quote Sydney rates for work that does not need them.',
    context: [
      ['A city that changed what it does', 'Firms repositioning out of mining and heavy industry need a site explaining what they do now, not what they did a decade ago.'],
      ['Trades and industrial services', 'A deep base of contractors and industrial suppliers, where responsiveness beats visual polish every time.'],
      ['Sydney quality without Sydney rates', 'Hunter region search terms cost a fraction of the Sydney equivalents, and the businesses are often just as substantial.'],
    ],
    faqs: [
      ['Do you work with Australian clients?', 'Yes, regularly. Calls are scheduled in AEST and quotes can be issued in Australian dollars. The time difference works in your favour day to day — you brief in the afternoon and there is usually progress waiting the next morning.'],
      ['Do you cover the Hunter region and Central Coast?', 'Yes — Maitland, Cessnock, Lake Macquarie, Port Stephens and the Central Coast. Each is its own search market, and they are considerably cheaper to compete in than Sydney.'],
      ['We are a trades business. What matters most?', 'Answering first. Most customers contact several businesses and hire whoever responds soonest, so an enquiry that triggers an instant text and email, notifies you on your phone and chases automatically will out-earn almost any design change.'],
      ['Does Australian Consumer Law affect the website?', 'Yes, more than most expect. Consumer guarantees cannot be contracted out of, so a returns policy copied from a US site is often unlawful here, and pricing must be stated accurately including GST. We build to that and flag exposed copy, though for a binding review use an Australian lawyer rather than a web studio.'],
    ],
    related: ['custom-website-design', 'automations', 'landing-pages'],
  },
  {
    country: 'IE',
    slug: 'web-design-galway',
    city: 'Galway',
    region: 'Connacht',
    title: 'Web Design in Galway',
    seoTitle: 'Web Design Galway | Website Design Ireland — Flowzync',
    seoDescription:
      'Website design for Galway and the west of Ireland: custom sites, WordPress, WooCommerce, tourism booking and GDPR-compliant builds. Irish business hours.',
    keywords: ['web design galway', 'website design galway', 'wordpress developer galway', 'web design agency ireland', 'tourism website galway'],
    intro:
      'Galway runs on tourism, medtech and a university, and the tourism half is almost entirely international — visitors booking months ahead from another continent, in another currency, at three in the morning your time. The website is not supporting the business in that window; it is the entire business.',
    context: [
      ['Tourism that sells while you sleep', 'International visitors booking months ahead across every timezone. Live availability and automatic confirmations are not optional here.'],
      ['Medtech and its supply chain', 'Suppliers to the medical device cluster, where certification, traceability and compliance content carry the credibility.'],
      ['GDPR enforced, not theoretical', 'Ireland regulates several of the largest technology companies in the world and applies the same rules locally. Retrofitting compliance is expensive.'],
    ],
    faqs: [
      ['Can you build booking for international tourism?', 'Yes. Live availability, prices in the visitor currency with the charged currency stated plainly, deposits and staged payments, confirmations and pre-arrival emails timed to the visitor timezone, and cancellation terms applied automatically rather than arbitrated by a person.'],
      ['How do you handle GDPR?', 'Properly, which is more than a banner. Non-essential cookies and analytics do not load before consent, refusing is as easy as accepting, the privacy notice describes what you genuinely collect and share, enquiry data has a defined retention period, and forms do not quietly gather more than they need.'],
      ['Do you cover the west of Ireland?', 'Yes — Ennis, Sligo, Westport, Castlebar, Athlone and Limerick. Small markets with very little agency competition, which makes properly written local pages unusually effective.'],
      ['Are you based in Ireland?', 'No. Flowzync is a remote studio working with Irish clients on Irish business hours, with quotes in euro and VAT handled correctly on the invoice.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'landing-pages'],
  },
  {
    country: 'ZA',
    slug: 'web-design-cape-town',
    city: 'Cape Town',
    region: 'Western Cape',
    title: 'Web Design in Cape Town',
    seoTitle: 'Web Design Cape Town | Website Design South Africa — Flowzync',
    seoDescription:
      'Website design for Cape Town and South African businesses: custom sites, WordPress, WooCommerce, tourism booking and POPIA-compliant builds. SAST hours.',
    keywords: ['web design cape town', 'website design cape town', 'wordpress developer cape town', 'web design agency south africa', 'ecommerce website cape town'],
    intro:
      'Cape Town has a strong creative and technology sector alongside tourism and wine, and it also has two constraints that shape every build here: data is expensive relative to income, and load-shedding means both your visitors and sometimes your servers lose power. A heavy website costs South African visitors real money to load, and they leave.',
    context: [
      ['Data cost is a design constraint', 'Mobile data is expensive here relative to income. Page weight is a commercial decision, not a technical nicety.'],
      ['Tourism and wine, sold internationally', 'Booking and direct sales to visitors in other currencies and timezones, planning months ahead.'],
      ['POPIA applies', "South Africa's data protection act has its own requirements around consent, purpose and retention. It is not identical to GDPR."],
    ],
    faqs: [
      ['Do you work with South African clients?', 'Yes. Calls run in South African Standard Time, which overlaps our working day comfortably, and quotes can be issued in rand or another currency you prefer.'],
      ['Why does page weight matter so much here?', 'Because mobile data is expensive relative to income, and a heavy site is a cost your visitor pays to view. We build light by default — compressed and correctly sized images, minimal JavaScript, and pages that stay usable on a slow connection. It is also the cheapest conversion improvement available in this market.'],
      ['Does POPIA affect the website?', 'Yes. It requires a lawful basis for processing, a defined purpose, consent where consent is the basis, and a retention period — broadly similar in shape to GDPR but not identical in detail. We build enquiry handling and analytics to meet it and flag anything in an existing setup that does not.'],
      ['Are you based in Cape Town?', 'No. Flowzync is a remote studio working with South African clients on South African business hours, and we are straightforward about it.'],
    ],
    related: ['custom-website-design', 'woocommerce-development', 'seo-optimization'],
  },
];

export const locations = RAW;

// Full country names, keyed by the code each entry carries. The index
// page groups from this rather than from a hardcoded US/UK split, so
// adding a country to RAW is all it takes to have it appear on the site.
export const COUNTRY_NAMES = {
  US: 'United States',
  UK: 'United Kingdom',
  CA: 'Canada',
  AU: 'Australia',
  IE: 'Ireland',
  NZ: 'New Zealand',
  AE: 'United Arab Emirates',
  SG: 'Singapore',
  ZA: 'South Africa',
};

// Display order — biggest markets first, then the rest alphabetically
// by whatever name the map above gives them.
const COUNTRY_ORDER = ['US', 'UK', 'CA', 'AU', 'IE', 'NZ', 'AE', 'SG', 'ZA'];

/**
 * Locations grouped by country, ready to render:
 *   [{ code: 'US', name: 'United States', items: [...] }, ...]
 * Countries with no pages yet simply do not appear.
 */
export const locationsByCountry = COUNTRY_ORDER
  .map((code) => ({
    code,
    name: COUNTRY_NAMES[code] || code,
    items: RAW.filter((l) => l.country === code),
  }))
  .filter((g) => g.items.length > 0);

export const usLocations = RAW.filter((l) => l.country === 'US');
export const ukLocations = RAW.filter((l) => l.country === 'UK');

export const getLocation = (slug) => locations.find((l) => l.slug === slug);
