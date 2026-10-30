// Website-sourced fallback and guided discovery. The optional AI layer uses
// these same public facts and returns validated structured replies.
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const CHAT_GREETING = "Hi, I’m Zync. Explore Flowzync’s services, see our work or request a quote.";
export const CHAT_NOTICE = 'Website information only. Please avoid sensitive details.';
const primary = ['custom-website-design', 'wordpress-website-design', 'ghl-funnels', 'automations'];
const aliases = [
  ['ghl-funnels-for-care-agencies', /\b(care agenc|home care|care home)/i],
  ['woocommerce-development', /\b(woocommerce|woo commerce|ecommerce|e-commerce|online store|checkout|shopify)\b/i],
  ['elementor-design', /\belementor\b/i],
  ['wordpress-website-design', /\b(wordpress|word press|wp)\b/i],
  ['ghl-crm-setup', /\b(crm|saas|pipeline)\b/i],
  ['ghl-funnels', /\b(ghl|gohighlevel|go high level|highlevel|funnel)\b/i],
  ['landing-pages', /\b(landing|campaign page)\b/i],
  ['automations', /\b(automation|automations|automate|workflow|workflows|zapier|make\.com)\b/i],
  ['seo-optimization', /\b(seo|search engine|ranking|rankings|indexing|indexed|google)\b/i],
  ['graphic-design', /\b(graphic|logo|branding)\b/i],
  ['ui-ux-design', /\b(ui|ux|user experience|interface)\b/i],
  ['maintenance-support', /\b(maintenance|backup|backups|security|support plan|website support)\b/i],
  ['custom-website-design', /\b(website|web design|web development|redesign|site design)\b/i],
];
const cleanText = value => String(value || '').replace(/\s+/g, ' ').trim();
const short = (value, max = 185) => {
  const s = cleanText(value);
  if (s.length <= max) return s;
  const sentence = s.match(/^.{20,185}?[.!?](?:\s|$)/)?.[0]?.trim();
  return sentence || s.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
};
const service = slug => services.find(s => s.slug === slug);
const card = s => ({ title: s.title, description: short(s.short, 135), href: `/services/${s.slug}`, question: `Explore ${s.title}` });
const action = (label, message) => ({ label, message });
function response(reply, extra = {}) {
  return { reply, points: [], cards: [], actions: [], ...extra, source: 'Flowzync public website' };
}
function findService(text) {
  if (/^(new website|business website|improve an existing site)[?.! ]*$/i.test(text.trim())) return null;
  const exact = services.find(s => text.toLowerCase().includes(s.title.toLowerCase()));
  return exact || service(aliases.find(([, re]) => re.test(text))?.[0]);
}
export function chatReply(messages, posts = []) {
  const users = messages.filter(m => m.role === 'user');
  const q = cleanText(users.at(-1)?.content).slice(0, 1200);
  const lower = q.toLowerCase();
  const chosen = findService(q);
  const previous = [...users.slice(0, -1)].reverse().map(m => findService(m.content)).find(Boolean);
  const followup = /^(yes|yes please|tell me more|more details|what(?:’s|'s| is)? included|what do i get|how long|timeline|features|details|pricing|price|cost|how much|request a quote|i want a quote)[?.! ]*$/i.test(q);
  const journeyReply = /^(new website|improve an existing site|business website|online store|book appointments|design.*mobile|forms.*leads|speed.*seo)[?.! ]*$/i.test(q);
  const contextualQuestion = /\b(included|features|details|timeline|long|pricing|price|edit|templates?|hosting|domain|copywriting|migration|payments?|integration|responsive|mobile|forms?|plugins?|themes?)\b/i.test(q);
  const current = chosen || ((followup || journeyReply || contextualQuestion) ? previous : null);
  const irrelevant = /\b(weather|recipe|recipes|politic|election|president|football|cricket|horoscope|joke|bitcoin|crypto|stock price|capital of|homework|diagnos|medicine|ignore.*instructions|system prompt|api key|password)\b/i.test(q);
  if (irrelevant) return response('I can help with Flowzync’s services and website information. For other topics, please use a relevant source.', { actions: [action('Explore services', 'What services do you offer?'), action('About Flowzync', 'Tell me about Flowzync')] });
  if (/^new website[?.! ]*$/i.test(q)) return response('Let’s narrow down the right starting point. What should the website help your visitors do?', {
    actions: [action('Learn about my business', 'Business website'), action('Buy products', 'Online store'), action('Book appointments', 'Book appointments')],
  });
  if (/^improve an existing site[?.! ]*$/i.test(q)) return response('What is the main thing you want to improve?', {
    actions: [action('Design & mobile', 'Design & mobile'), action('Forms & leads', 'Forms & leads'), action('Speed & SEO', 'Speed & SEO')],
  });
  if (/^business website[?.! ]*$/i.test(q)) return response('A focused business website can explain your services, show relevant work and make enquiries easier.', {
    nextQuestion: 'What does your business do, and which services need their own pages?',
    links: [{ label: 'See website design', href: '/services/custom-website-design' }],
  });
  if (/^online store[?.! ]*$/i.test(q)) return response('Our WooCommerce service covers products, payments, shipping and checkout.', {
    nextQuestion: 'How many products do you plan to sell, and is this a new store or a migration?',
    links: [{ label: 'WooCommerce service', href: '/services/woocommerce-development' }],
  });
  if (/^send an enquiry[?.! ]*$/i.test(q)) return response('We can build an enquiry journey that connects your website form to the right follow-up system.', {
    nextQuestion: 'What services should the website explain, and do you need the form connected to a CRM?',
    actions: [{ label: 'Add my project brief', type: 'quote', service: 'Custom Website Design' }],
  });
  if (/^book appointments[?.! ]*$/i.test(q)) return response('A GoHighLevel booking funnel connects the page, form, calendar and follow-up.', {
    points: ['Booking-focused pages', 'Calendar and workflow integration', 'Reminder sequences'],
    nextQuestion: 'Do you already use GoHighLevel or another booking tool?',
    links: [{ label: 'Booking funnel service', href: '/services/ghl-funnels' }],
  });
  if (/^forms.*leads[?.! ]*$/i.test(q)) return response('We can help connect your website forms to your CRM and follow-up workflow.', {
    nextQuestion: 'Is the form failing to submit, or are enquiries missing after submission?',
    links: [{ label: 'Form troubleshooting guide', href: '/blog/website-contact-form-not-sending-emails' }],
  });
  if (/^design.*mobile[?.! ]*$/i.test(q)) return response('Our website design work includes responsive layouts and a clear customer journey.', {
    nextQuestion: 'Which page needs the most attention, and what is your website address?',
    links: [{ label: 'Website redesign service', href: '/services/custom-website-design' }],
  });
  if (/^speed.*seo[?.! ]*$/i.test(q)) return response('Our SEO service includes technical checks, on-page optimisation and content structure.', {
    nextQuestion: 'What is the main issue: slow pages, missing search visibility or traffic without enquiries?',
    links: [{ label: 'SEO service details', href: '/services/seo-optimization' }],
  });
  if (/\b(ceo|chief executive|founder|owner|hammad|tahir|leadership)\b/i.test(q)) return response(`${site.leadership.name} is the CEO of Flowzync.`, {
    links: [{ label: 'Hammad Tahir on LinkedIn', href: site.leadership.linkedin }, { label: 'Leadership & team', href: '/about/team' }],
  });
  if (/\b(quote|pricing|price|cost|budget|how much|estimate|proposal|hire)\b/i.test(q)) {
    return response('Each project is quoted individually, based on its scope.', {
      points: [current ? `Tell us what you need for your ${current.title.toLowerCase()} project.` : 'Share the service you need and a short project brief.', 'The team will review your requirements and discuss suitable options.'],
      actions: [{ label: 'Request a quote', type: 'quote', service: current?.title || '' }],
      links: [{ label: 'Contact page', href: '/contact' }],
    });
  }
  if (!current && /^(who|what|where|when|how|tell|about|your|flowzync|company|can you|are you|is your|is flowzync|do you)\b/i.test(q) && /\b(about|company|team|who are|who is|where are|location|located|based|hours|working days)\b/i.test(q)) {
    return response('Flowzync is a remote studio of designers, developers and automation specialists, working with clients worldwide.', {
      points: ['Custom websites, WordPress, GoHighLevel funnels and connected business systems.', 'Remote collaboration with clients worldwide.', site.business.hoursNote],
      links: [{ label: 'Meet Flowzync', href: '/about' }, { label: 'Our team', href: '/about/team' }],
      actions: [action('Explore services', 'What services do you offer?')],
    });
  }
  if (/\b(process|how (do|does).*work|project steps)\b/i.test(q) && !current) {
    return response('A clear process, from the first conversation to launch.', {
      points: ['Discover: understand your audience, goals and scope.', 'Plan & design: review the structure and design direction.', 'Build & connect: develop and check your website and workflows.', 'Launch & support: handover, guidance and support options.'],
      links: [{ label: 'Our approach', href: '/#process-heading' }], actions: [{ label: 'Discuss a project', type: 'quote' }],
    });
  }
  if (/\b(portfolio|projects|examples|case stud|your work|recent work)\b/i.test(q)) return response('Explore our website, funnel and automation projects.', { links: [{ label: 'View our work', href: '/portfolio' }], actions: [action('WordPress services', 'Explore WordPress Website Design'), action('GoHighLevel services', 'Explore GHL Funnel Building')] });
  if (/\b(blog|articles|journal|insights)\b/i.test(q)) return response('Our journal shares practical website, SEO and automation guidance.', {
    cards: posts.slice(0, 2).map(p => ({ title: p.title, description: short(p.description, 120), href: `/blog/${p.slug}` })), links: [{ label: 'All insights', href: '/blog' }],
  });
  if (/\b(contact|email|call|book|speak|talk to|human|person)\b/i.test(q)) return response('Send a project enquiry here, or contact the team directly.', { actions: [{ label: 'Open enquiry form', type: 'quote', service: current?.title || '' }], links: [{ label: 'Contact page', href: '/contact' }, { label: site.email, href: `mailto:${site.email}` }] });
  // A project brief advances discovery even if no AI provider is available.
  // Use only visitor-provided project facts; never re-ask answered stage/platform.
  const brief = users.map(m => m.content).join(' ');
  const stage = /\b(new (?:wordpress )?(?:website|site|project)|starting from scratch)\b/i.test(brief) ? 'new' : /\b(existing (?:website|site)|redesign|improv(?:e|ing) (?:my|our|an|the))\b/i.test(brief) ? 'existing' : null;
  const goal = /\b(enquir(?:y|ies)|leads?|contact forms?)\b/i.test(brief) ? 'enquiries' : /\b(appointments?|bookings?|book appointments)\b/i.test(brief) ? 'bookings' : /\b(sell|products?|online store|checkout)\b/i.test(brief) ? 'sales' : null;
  const sector = /\b(plumb(?:ing|er)?|hvac|electrician|roofing|cleaning|care agenc(?:y|ies)|care home|dental|dentist|clinic|coach(?:ing)?|insurance|real estate|restaurant|retail|construction|education|recruitment|salon|charit(?:y|ies))\b/i.test(brief) || /\b(?:we sell|we provide|we offer|my business is|our business is)\b/i.test(brief);
  const area = /\b(we serve|i serve|service area|based in|located in|worldwide|globally|london|manchester|new york|dubai)\b/i.test(brief);
  const update = /^(we|i|my|our)\b/i.test(q) || /\b(we use|i use|new website|existing site|enquiries|appointments|serve|based in|london|manchester|new york|dubai|worldwide)\b/i.test(q);
  if (update && (stage || users.length > 2)) {
    const wp = /\bwordpress\b/i.test(brief);
    const ghl = /\b(gohighlevel|go high level|ghl)\b/i.test(brief);
    if (!stage) return response('Thanks for explaining the project. Is this a new build or an existing website you want to improve?', { actions: [action('New build', 'New website'), action('Existing website', 'Improve an existing site')] });
    if (!goal) return response(`For your ${stage} website, what should visitors be able to do first?`, { actions: [action('Send an enquiry', 'Send an enquiry'), action('Buy products', 'Online store'), action('Book appointments', 'Book appointments')] });
    if (!sector) return response(`Understood—your ${stage} website should focus on ${goal}.`, { nextQuestion: 'What does your business do, and what services or products should the website explain?' });
    const intro = wp && ghl ? 'A WordPress website with enquiry forms and GoHighLevel follow-up fits our website and automation services.' : `We can discuss a ${stage} website built around your ${goal} goal.`;
    if (!area) return response(intro, { nextQuestion: 'Which areas does your business serve, and which services need their own pages?', links: [{ label: wp ? 'WordPress service' : 'Website design service', href: wp ? '/services/wordpress-website-design' : '/services/custom-website-design' }] });
    return response('That gives the team a useful starting brief.', { points: [`${stage === 'new' ? 'New build' : 'Existing website improvement'} focused on ${goal}`, wp && ghl ? 'WordPress and GoHighLevel integration requirements' : 'Pages and features scoped around your business'], nextQuestion: 'You can add the remaining requirements to a project enquiry for the team to review.', actions: [{ label: 'Prepare my enquiry', type: 'quote', service: wp ? 'WordPress Website Design' : current?.title || '' }] });
  }
  if (current) {
    if (/\b(time|long|timeline|deadline|delivery|when)\b/i.test(q)) {
      const faq = current.faqs?.find(([title]) => /how long|how fast|turnaround/i.test(title));
      return response(faq ? short(faq[1], 260) : 'Timing depends on the project scope. The team can confirm a schedule after reviewing your brief.', { links: [{ label: current.title, href: `/services/${current.slug}` }], actions: [{ label: 'Discuss my project', type: 'quote', service: current.title }], nextQuestion: 'Would you like to discuss your requirements?' });
    }
    if (/\bshopify\b/i.test(q)) return response('Our published ecommerce service focuses on WooCommerce. Explore that service or ask the team whether your Shopify requirements are a fit.', { cards: [card(current)], actions: [{ label: 'Ask the team', type: 'quote', service: current.title }] });
    const questionWords = q.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !['what','does','your','have','will','with','that','this','about','website','wordpress','flowzync','please'].includes(w)).map(w => w.replace(/s$/, ''));
    const faqs = (current.faqs || []).map(([question, answer]) => ({question,answer,score: questionWords.filter(w => question.toLowerCase().includes(w)).length * 2 + questionWords.filter(w => answer.toLowerCase().includes(w)).length})).sort((a,b) => b.score-a.score);
    if (faqs[0]?.score >= 3 || (/\b(edit|templates?|hosting|migrat)\b/i.test(q) && faqs[0]?.score >= 1)) return response(short(faqs[0].answer, 300), { links: [{ label: 'Full service details', href: `/services/${current.slug}` }] });
    const detail = /included|features|more|details|explore|yes/i.test(q);
    const browsing = /^explore /i.test(q);
    const websiteBuild = ['custom-website-design','wordpress-website-design','elementor-design'].includes(current.slug);
    const questions = {
      'seo-optimization': 'What is your website address, and which search issue would you like to improve?',
      'automations': 'Which tools do you want to connect, and which task is manual today?',
      'ghl-funnels': 'What offer or booking journey should the funnel support?',
      'ghl-crm-setup': 'Do you need a new CRM setup or improvements to an existing pipeline?',
      'ghl-funnels-for-care-agencies': 'Do you need help with family enquiries, recruitment or follow-up?',
      'landing-pages': 'Which campaign or offer will the landing page support?',
      'woocommerce-development': 'Is this a new store or an existing store you want to improve?',
      'maintenance-support': 'What platform is your site built on, and which support do you need?',
      'graphic-design': 'Which brand assets do you need, and do you already have brand guidelines?',
      'ui-ux-design': 'Which website or application journey would you like to improve?',
    };
    return response(`Our professional team provides ${current.title}. Key areas include:`, {
      points: current.features.slice(0, 3).map(([title]) => title),
      links: [{ label: 'View service page', href: `/services/${current.slug}` }],
      actions: browsing && websiteBuild && !stage ? [action('New website', 'New website'), action('Improve existing site', 'Improve an existing site')] : [],
      nextQuestion: browsing ? (questions[current.slug] || (!stage ? 'Is this a new project or an existing website you want to improve?' : undefined)) : undefined,
    });
  }
  if (/\b(services|offer|offering|what can you|what do you do|help my business|more services|other services|all services)\b/i.test(q)) {
    const ordered = [...primary.map(service), ...services.filter(s => !primary.includes(s.slug))];
    const more = /more|other/i.test(q);
    const n = users.filter(m => /^(show )?more services[?.! ]*$/i.test(m.content.trim())).length;
    const start = more ? ((Math.max(1, n) % Math.ceil(ordered.length / 4)) * 4) : 0;
    const cards = ordered.slice(start, start + 4).map(card);
    return response(start ? 'Here are a few more ways Flowzync can help.' : 'We offer a wide range of website, funnel and automation services. Explore a few below.', {
      cards, actions: [action('More services', 'Show more services')], links: [{ label: 'All services', href: '/services' }], nextQuestion: 'Choose “Explore in chat” for a quick overview.',
    });
  }
  if (/^(hi|hello|hey|salam|assalam\s*o?\s*alaikum|thanks|thank you|ok|okay)[!. ]*$/i.test(q)) return response(/thank|ok/i.test(q) ? 'You’re welcome. What would you like to explore next?' : CHAT_GREETING, { actions: [action('Explore services', 'What services do you offer?'), action('See our work', 'Show me your portfolio'), { label: 'Request a quote', type: 'quote' }] });
  return response('I can guide you through Flowzync’s published services, projects and company details. For a custom requirement, the team can confirm what’s possible.', { actions: [action('Explore services', 'What services do you offer?'), action('About Flowzync', 'Tell me about Flowzync'), { label: 'Ask the team', type: 'quote' }] });
}
