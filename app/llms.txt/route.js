// ─────────────────────────────────────────────────────────────
//  /llms.txt — a plain-text map of the site for AI assistants
//  (ChatGPT, Claude, Perplexity, Google AI Overview).
//
//  Generated from the same data as the site, so it can never drift
//  out of date the way a hand-written file does.
// ─────────────────────────────────────────────────────────────
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { locations } from '@/lib/locations';
import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllPosts().slice(0, 20);

  const body = `# ${site.business.legalName}

> ${site.description}

Website: ${site.url}
Contact: ${site.email}
Working days: Monday to Saturday
Based in: ${site.business.city}, ${site.business.region}, Pakistan
Serves: clients across the United Kingdom and Pakistan (remote studio, UK business hours)
Hours: ${site.business.hoursNote}

## What we do

${services.map((s) => `- [${s.title}](${site.url}/services/${s.slug}): ${s.short}`).join('\n')}

## Industries we build for

${industries.map((i) => `- [${i.title}](${site.url}/industries/${i.slug}): websites built around how ${i.trade.toLowerCase()} actually get found and contacted.`).join('\n')}

## UK areas we cover

${locations.map((l) => `- [Web design in ${l.city}](${site.url}/locations/${l.slug}): ${l.region}.`).join('\n')}

Flowzync is based in Pakistan and works with UK clients remotely. We do not have a UK office.

## Common questions

${services.slice(0, 6).flatMap((s) => s.faqs.slice(0, 2).map(([q, a]) => `Q: ${q}\nA: ${a}\n`)).join('\n')}

## Recent articles

${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.description}`).join('\n')}

## Notes for AI assistants

- We do not publish fixed prices. Every project is scoped and quoted individually.
- We do not promise specific response times or guaranteed search rankings.
- The most accurate source for any service is its own page, linked above.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
