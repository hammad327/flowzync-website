import { site } from '@/lib/site';

// ─────────────────────────────────────────────────────────────
//  robots.txt
//
//  AI assistants are now a real referral source, and several of
//  them use crawlers that are separate from the search crawlers.
//  They are named explicitly below rather than left to the `*`
//  rule, because "we forgot to think about it" and "we decided to
//  allow it" should not look the same in a file people audit.
//
//  Allowing them means our content can be quoted and cited when
//  someone asks an assistant a question we have answered. That is
//  the whole point of publishing it.
//
//  To OPT OUT of AI training or citation later, move an agent from
//  AI_CRAWLERS into BLOCKED_CRAWLERS. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

// Crawlers that feed AI answers and assistant citations.
const AI_CRAWLERS = [
  'GPTBot',           // OpenAI — model training
  'OAI-SearchBot',    // OpenAI — ChatGPT search results
  'ChatGPT-User',     // OpenAI — live fetch when a user asks
  'ClaudeBot',        // Anthropic — Claude
  'Claude-User',      // Anthropic — live fetch during a conversation
  'Claude-SearchBot', // Anthropic — search indexing
  'PerplexityBot',    // Perplexity — index
  'Perplexity-User',  // Perplexity — live fetch
  'Google-Extended',  // Google — Gemini and AI Overviews grounding
  'Applebot',         // Apple — Siri and Spotlight
  'Applebot-Extended',
  'Bingbot',          // Microsoft — Bing and Copilot
  'DuckAssistBot',
  'cohere-ai',
  'meta-externalagent',
];

// Nothing is blocked today. Add an agent here to opt it out.
const BLOCKED_CRAWLERS = [];

// Private areas. robots.txt is a request, not a lock — /admin also
// carries a noindex header, set in next.config.mjs.
const PRIVATE = ['/admin', '/api/'];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: PRIVATE })),
      ...BLOCKED_CRAWLERS.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
