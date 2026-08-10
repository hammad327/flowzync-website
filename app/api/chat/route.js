// ─────────────────────────────────────────────────────────────
// AI CHAT API — works with FREE providers, in this order:
//   1. GROQ_API_KEY    → free at https://console.groq.com  (recommended)
//   2. GEMINI_API_KEY  → free at https://aistudio.google.com/apikey
//   3. ANTHROPIC_API_KEY (optional, paid)
//   4. Built-in knowledge base (no key needed at all)
// Set any ONE key in .env.local (or Vercel env vars) and the bot
// becomes fully conversational. Keys never reach the browser.
// ─────────────────────────────────────────────────────────────
import { services } from '@/lib/services';
import { site } from '@/lib/site';

const SYSTEM = `You are Zync, the friendly AI assistant on the ${site.name} website.
${site.name} is an automation-first digital studio helping clients build their dream websites and systems.

Services offered:
${services.map((s) => `- ${s.title}: ${s.short}`).join('\n')}

How we work (6 steps): 1) Share your vision — submit a free quote request, 2) Research & strategy, 3) Design concepts in Figma, 4) Build & integrate, 5) Review & polish, 6) Launch & ongoing support.
Typical timelines: landing pages 5–10 days; GHL funnels 2–4 weeks; websites 4–8 weeks; Shopify stores 4–8 weeks.
Contact: ${site.email}. Free quote via the Contact page, or collect the visitor's details right here in the chat — a lead form appears when someone asks about pricing or getting started.
We work Monday to Saturday.

NEVER promise a specific response time (no "within 2 hours", no "same day"). Say a person will get back to them, and leave it there.
NEVER quote page speed scores, load times or performance numbers.

BUDGET RULE: never tell anyone their budget is too small or that we cannot help them.
If someone mentions a limited budget, say we work to a range of budgets, invite them to
leave their details and describe what they need, and explain the team will come back with
options — a smaller starting scope, a phased build, or a recommendation. Nobody gets turned
away in the chat.

IMPORTANT PRICING RULE: never state prices or ranges. When asked about pricing or cost, explain that every project is scoped individually and invite them to leave their details in the short form that appears in this chat, or on the Contact page.

Rules: be warm and concise (2–4 short sentences unless detail is asked for). Focus on craftsmanship, quality and helping clients build their dream website — no revenue promises or income claims. If asked something unrelated, answer briefly and steer back to how ${site.name} can help.`;

// Fallback brain — used when no API key is configured.
function fallbackReply(text) {
  const t = text.toLowerCase();
  const has = (...ws) => ws.some((w) => t.includes(w));
  if (has('price', 'cost', 'much', 'budget', 'pricing', 'charge', 'quote'))
    return "Every project is scoped individually, so the honest answer comes from seeing yours. Leave your details in the short form just below and the team will come back with clear next steps — or use the Contact page if you prefer.";
  if (has('service', 'offer', 'do you do', 'what can you'))
    return `We offer ${services.length} services: ${services.map((s) => s.title).join(', ')}. Which one are you curious about? I can share details, or you can request a free quote on the Contact page.`;
  if (has('process', 'how do you work', 'steps', 'workflow'))
    return 'Our process has 6 steps: share your vision (free quote) → research & strategy → design concepts in Figma → build & integrate → review & polish → launch with ongoing support. You approve everything at each stage.';
  if (has('time', 'long', 'fast', 'when', 'deadline', 'start'))
    return 'Landing pages ship in 5–10 days, GHL funnels in 2–4 weeks, and full websites or stores in 4–8 weeks. We can usually start within a week of your quote being approved.';
  if (has('ghl', 'gohighlevel', 'highlevel', 'funnel'))
    return 'We build complete GoHighLevel funnels — lead magnets, VSL, webinar, application and booking funnels — plus the workflows behind them, and full CRM/SaaS setup for agencies. Want me to point you to the GHL Funnels service page?';
  if (has('elementor'))
    return 'We design Elementor sites properly: designed in Figma first, built with global typography and colour settings, reusable section templates and custom CSS where the builder runs out of road — so your team can edit it without breaking anything.';
  if (has('woocommerce', 'store', 'checkout'))
    return 'We build complete WooCommerce stores: product structure, payment gateways, shipping zones, tax rules, inventory sync and a checkout designed to be finished rather than abandoned. Migrations from Shopify, Wix or Magento included.';
  if (has('wordpress', 'wp'))
    return 'Our WordPress work covers custom theme design, custom plugin development, custom forms, WooCommerce and Elementor builds, plus monthly care plans that keep everything patched and backed up.';
  if (has('shopify', 'store', 'ecommerce', 'e-commerce'))
    return 'We design conversion-focused Shopify stores: custom OS 2.0 themes, migrations from other platforms, smart app stacks and monthly CRO sprints. Beautiful is the baseline — clarity is the goal.';
  if (has('seo', 'rank', 'google', 'index'))
    return 'Every site we build ships SEO-ready — clean markup, meta tags, schema and fast loads. We also run dedicated SEO campaigns: technical audits, on-page optimisation and content architecture. Sustainable rankings, no shortcuts.';
  if (has('blog', 'content'))
    return "Yes — we publish regularly on our blog. And if you're asking about content for YOUR site, we build blog systems your team can update daily without a developer.";
  if (has('contact', 'call', 'book', 'audit', 'talk', 'email'))
    return `Easiest way: leave your details in the form below, or use the Contact page — it takes a minute. You can also email ${site.email} directly.`;
  if (has('budget', 'cheap', 'afford', 'expensive', 'small business', 'startup', 'tight'))
    return 'We work to a range of budgets, so please don\u2019t rule yourself out. Tell us what you need in the form below \u2014 including roughly what you have to work with \u2014 and the team will come back with options. That might be a smaller starting scope, a phased build, or a straight recommendation if we are not the right fit.';
  if (has('plumber', 'dental', 'dentist', 'doctor', 'clinic', 'leak', 'salon', 'restaurant', 'local business', 'industry'))
    return 'We build industry-specific sites across ten sectors \u2014 home and property services, healthcare and medical, legal and professional, e-commerce, hospitality, real estate and construction, beauty and fitness, education, automotive, and local business generally. Each gets a page structure built around how that industry actually gets found. Tell me what you do and I will explain what changes.';
  if (has('hi', 'hello', 'hey', 'salam', 'assalam'))
    return 'Hello! 👋 Great to meet you. Are you exploring a new website, a funnel, a store — or not sure yet? Either way, I can point you in the right direction.';
  if (has('portfolio', 'work', 'example', 'case'))
    return 'You can see recent projects on the Portfolio page — custom design, GHL funnels, WordPress and Shopify builds. Hover over any project to see it in motion!';
  return "Happy to help with anything about our services, process, timelines or how to get started. For anything specific to your project, leave your details below or use the Contact page and the team will pick it up.";
}

async function askGroq(key, messages) {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 500,
      messages: [{ role: 'system', content: SYSTEM }, ...messages],
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || null;
}

async function askGemini(key, messages) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
        generationConfig: { maxOutputTokens: 500 },
      }),
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('').trim() || null;
}

async function askAnthropic(key, messages) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 500, system: SYSTEM, messages }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n').trim() || null;
}

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const clean = (messages || [])
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-14);
    const lastUser = [...clean].reverse().find((m) => m.role === 'user');
    if (!lastUser) return Response.json({ reply: 'Ask me anything about Flowzync!' });

    let reply = null;
    if (process.env.GROQ_API_KEY) reply = await askGroq(process.env.GROQ_API_KEY, clean).catch(() => null);
    if (!reply && process.env.GEMINI_API_KEY) reply = await askGemini(process.env.GEMINI_API_KEY, clean).catch(() => null);
    if (!reply && process.env.ANTHROPIC_API_KEY) reply = await askAnthropic(process.env.ANTHROPIC_API_KEY, clean).catch(() => null);
    return Response.json({ reply: reply || fallbackReply(lastUser.content) });
  } catch {
    return Response.json({ reply: `I hit a snag there — please try again in a moment, or email ${site.email}.` });
  }
}
