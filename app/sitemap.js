import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { locations } from '@/lib/locations';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';
import { localeCodes } from '@/lib/locales';

// Google ignores <priority> and <changefreq>; lastmod must be accurate
// rather than identical everywhere, so pages carry the date of their
// last real update. /admin is deliberately absent — it is private.
// Bump this whenever the static pages genuinely change. Do NOT wire it
// to the build date — a lastmod that moves on every deploy without the
// content changing is the fastest way to have Google stop trusting the
// field entirely, and then it ignores the accurate ones too.
const PAGES_UPDATED = new Date('2026-10-27');

export default function sitemap() {
  const staticPages = ['', '/services', '/industries', '/locations', '/portfolio', '/about', '/about/team', '/contact', '/blog', '/privacy', '/cookies', '/editorial-policy', '/resources/website-project-brief'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: ['', '/blog'].includes(p) ? new Date(Math.max(new Date('2026-10-28').getTime(), ...getAllPosts().map(post => new Date(post.updated || post.date).getTime()))) : ['/privacy', '/about', '/about/team', '/locations', '/resources/website-project-brief'].includes(p) ? new Date('2026-10-30') : ['/about', '/portfolio', '/cookies', '/editorial-policy', '/resources/website-project-brief'].includes(p) ? new Date('2026-10-27') : PAGES_UPDATED,
  }));
  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: ['graphic-design', 'wordpress-website-design'].includes(s.slug) ? new Date('2026-10-27') : PAGES_UPDATED,
  }));
  const industryPages = industries.map((i) => ({
    url: `${site.url}/industries/${i.slug}`,
    lastModified: new Date('2026-10-27'),
  }));
  const locationPages = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: new Date('2026-10-30'),
  }));
  const projectPages = projects.map((p) => ({
    url: `${site.url}/portfolio/${p.slug}`,
    lastModified: new Date('2026-10-27'),
  }));
  const blogPages = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
  }));
  // Language landing pages. One per language, genuinely written —
  // see lib/locales.js for why this is not a full translation.
  const localePages = localeCodes.map((code) => ({
    url: `${site.url}/${code}`,
    lastModified: new Date('2026-10-27'),
  }));
  return [...staticPages, ...servicePages, ...industryPages, ...locationPages,
          ...projectPages, ...blogPages, ...localePages];
}
