// RSS feed at /feed.xml — lets readers, aggregators and some AI
// crawlers pick up new posts without re-crawling the whole site.
import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export function GET() {
  const posts = getAllPosts();
  const updated = posts[0] ? new Date(posts[0].date) : new Date();

  const items = posts.map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${site.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${p.slug}</guid>
      <description>${esc(p.description)}</description>
      <category>${esc(p.category)}</category>
      <author>${esc(site.email)} (${esc(p.author)})</author>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.business.legalName)} Blog</title>
    <link>${site.url}/blog</link>
    <description>${esc(site.description)}</description>
    <language>en</language>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
