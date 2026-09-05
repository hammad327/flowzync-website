// ─────────────────────────────────────────────────────────────
//  FAQs FOR THE HUB PAGES
//
//  Every service, industry, location, project and blog post already
//  carries its own FAQs. These cover the six index pages, which are
//  the ones people actually land on from a broad search and the ones
//  an AI assistant is most likely to read when asked a general
//  question about the company.
//
//  Written as the question someone would type, answered in a way that
//  can be quoted on its own — an answer that only makes sense in the
//  context of the page around it is no use to an answer engine.
// ─────────────────────────────────────────────────────────────

export const pageFaqs = {
  services: [
    ['What services does Flowzync offer?', 'Custom website design, landing pages, GoHighLevel funnels and CRM setup, business automation, WordPress and Elementor sites, WooCommerce stores, SEO, UI/UX design, graphic design, and ongoing maintenance and support. Twelve services, each a full engagement rather than a task.'],
    ['Can I hire you for just one service?', 'Yes, and most clients do. People usually start with one thing — a website, a funnel, an automation build — and add others once the first is earning its keep. There is no bundle you have to buy into.'],
    ['How much do your services cost?', 'Every project is scoped and quoted individually, fixed and itemised before any work starts. There is no published price list because scope drives everything, and no hourly billing. A small business website typically starts around the low thousands; a funnel or automation build depends entirely on how many steps and integrations it needs.'],
    ['Do you work with businesses outside the UK and US?', 'Yes. We are a remote studio with clients across North America, Europe, the Middle East, Australia and New Zealand. Calls are scheduled in your working hours and quotes can be issued in your currency.'],
  ],

  industries: [
    ['Which industries do you build websites for?', 'Home and property services, healthcare and medical, dental and veterinary practices, legal and professional services, accountancy, financial and mortgage advice, e-commerce and retail, hospitality and food, real estate and construction, beauty and wellness, education, automotive, recruitment, SaaS and technology, care and childcare, charities, manufacturing, and local business generally.'],
    ['Why does the industry change how a website is built?', 'Because it changes what the site has to do. An emergency plumber needs a phone number in one tap; a dental practice needs treatment pages and finance options; a manufacturer needs tolerances and certifications published before a buyer will shortlist them. The same design applied to all three would fail two of them.'],
    ['My industry is not listed. Can you still help?', 'Almost certainly. The listed sectors are the ones we work in most often and can say something specific about, not a limit on what we take on. Tell us what you do and we will say plainly whether we are the right fit.'],
  ],

  locations: [
    ['Where is Flowzync based?', 'Flowzync is a remote studio. The business is registered in Lahore, Pakistan, and we work with clients worldwide across every time zone. We do not have offices in the cities listed on this site — those pages describe markets we work in, not places we occupy.'],
    ['Do you work with clients in my country?', 'We take on work anywhere. We have delivered projects across the United States, United Kingdom, Canada, Australia, Ireland, New Zealand, the UAE and Europe. Calls are scheduled in your working hours and quotes can be issued in your currency.'],
    ['Does being remote affect the project?', 'It changes the schedule of a call and nothing else. Design reviews, revisions and handover all happen online exactly as they would with a local studio. It is also the honest reason our quotes compare well with a local agency — there are no premises or account managers inside the price.'],
    ['My town is not listed. Do you still work there?', 'Yes. The towns with their own page are the ones we can say something genuinely specific about. If yours is not among them it is not a limit — get in touch and we will quote it like any other project.'],
  ],

  portfolio: [
    ['What kind of projects has Flowzync built?', 'Custom websites, landing pages, GoHighLevel funnels and quiz funnels, webinar funnels, automation and CRM systems, WooCommerce stores, and email template design — across coaching, healthcare, dental, home care, trades, construction, insurance, cleaning, travel, events and property.'],
    ['Can I see a live site you have built?', 'Several of the projects link to a live URL or a preview. Where a client site has since been redesigned or taken private we show the screenshot as delivered rather than linking to something that no longer represents the work.'],
    ['Do you publish results and conversion figures?', 'No, and deliberately. We describe what was built rather than claiming what it earned, because performance figures we cannot independently evidence are worth nothing to you and are exactly what Google’s spam policies and consumer protection law bite on.'],
    ['Can you build something similar for my business?', 'Usually, yes — but we would rather build what your business actually needs than copy a project that suited someone else. Tell us the problem and we will come back with a fixed, itemised quote.'],
  ],

  about: [
    ['What does Flowzync do?', 'Flowzync designs and builds custom websites, landing pages, GoHighLevel funnels, WordPress and WooCommerce sites, and business automation — with SEO structure built in from the start rather than retrofitted.'],
    ['Is Flowzync an agency or a studio?', 'A studio, and the difference matters. There are no account managers relaying messages: you work directly with the senior designers and developers building your project. It is a small, senior-only team by choice.'],
    ['How long has Flowzync been operating?', 'Since 2021, working remotely with clients worldwide from the start.'],
    ['What makes Flowzync different from other agencies?', 'Three things, honestly. Everything is designed from a blank canvas rather than adapted from a template; automation is designed in from day one instead of bolted on later; and every quote is fixed and itemised before work starts, with no hourly billing.'],
  ],

  blog: [
    ['What does the Flowzync blog cover?', 'Practical answers on web design costs, WordPress and WooCommerce, GoHighLevel funnels, SEO and Google indexing, local search, AI search visibility, and website maintenance — one question per article, answered in the first two sentences.'],
    ['Who writes these articles?', 'The Flowzync team, based on work actually shipped for clients. Every post carries a named author rather than being published under the company name.'],
    ['How often do you publish?', 'Regularly rather than on a fixed schedule. We would rather publish one genuinely useful article a month than four thin ones a week — and where the honest answer is that you do not need the thing we sell, the articles say so.'],
  ],
};

/** FAQPage schema for one hub page. */
export const faqSchema = (key) => {
  const items = pageFaqs[key];
  if (!items?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
};
