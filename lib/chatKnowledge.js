// Public website facts only. Provider-generated prose is deliberately not used:
// visitors receive the same sourced, bounded answer regardless of API configuration.
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
  const current = chosen || (followup ? previous : null);
  const irrelevant = /\b(weather|recipe|recipes|politic|election|president|football|cricket|horoscope|joke|bitcoin|crypto|stock price|capital of|homework|diagnos|medicine|ignore.*instructions|system prompt|api key|password)\b/i.test(q);
  if (irrelevant) return response('I can help with Flowzync’s services and website information. For other topics, please use a relevant source.', { actions: [action('Explore services', 'What services do you offer?'), action('About Flowzync', 'Tell me about Flowzync')] });
  if (/\b(quote|pricing|price|cost|budget|how much|estimate|proposal|hire)\b/i.test(q)) {
    return response('Each project is quoted individually, based on its scope.', {
      points: [current ? `Tell us what you need for your ${current.title.toLowerCase()} project.` : 'Share the service you need and a short project brief.', 'The team will review your requirements and discuss suitable options.'],
      actions: [{ label: 'Request a quote', type: 'quote', service: current?.title || '' }],
      links: [{ label: 'Contact page', href: '/contact' }],
    });
  }
  if (!current && /\b(about|company|team|who are|who is|where are|location|based|hours|working days)\b/i.test(q)) {
    return response('Flowzync is a remote studio of designers, developers and automation specialists, working with clients worldwide.', {
      points: ['Custom websites, WordPress, GoHighLevel funnels and connected business systems.', `Based in ${site.business.city}, ${site.business.country === 'PK' ? 'Pakistan' : site.business.country}.`, site.business.hoursNote],
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
  if (current) {
    if (/\b(time|long|timeline|deadline|delivery|when)\b/i.test(q)) {
      const faq = current.faqs?.find(([title]) => /how long|how fast|turnaround/i.test(title));
      return response(faq ? short(faq[1], 260) : 'Timing depends on the project scope. The team can confirm a schedule after reviewing your brief.', { links: [{ label: current.title, href: `/services/${current.slug}` }], actions: [{ label: 'Discuss my project', type: 'quote', service: current.title }], nextQuestion: 'Would you like to discuss your requirements?' });
    }
    if (/\bshopify\b/i.test(q)) return response('Our published ecommerce service focuses on WooCommerce. Explore that service or ask the team whether your Shopify requirements are a fit.', { cards: [card(current)], actions: [{ label: 'Ask the team', type: 'quote', service: current.title }] });
    const detail = /included|features|more|details|explore|yes/i.test(q);
    return response(detail ? `Here’s a quick look at ${current.title.toLowerCase()}.` : current.short, {
      points: current.features.slice(0, 3).map(([title]) => title),
      links: [{ label: 'View service page', href: `/services/${current.slug}` }],
      actions: [action('Typical timeline', `What is the timeline for ${current.title}?`), { label: 'Request a quote', type: 'quote', service: current.title }],
      nextQuestion: 'What would you like to build or improve?',
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
