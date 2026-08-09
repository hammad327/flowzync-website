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
];

export const locations = RAW;

export const usLocations = RAW.filter((l) => l.country === 'US');
export const ukLocations = RAW.filter((l) => l.country === 'UK');

export const getLocation = (slug) => locations.find((l) => l.slug === slug);
