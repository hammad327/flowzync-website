import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { locations } from '@/lib/locations';
import { getAllPosts } from '@/lib/posts';

// Google ignores <priority> and <changefreq>; lastmod must be accurate
// rather than identical everywhere, so pages carry the date of their
// last real update. /admin is deliberately absent — it is private.
const PAGES_UPDATED = new Date('2026-08-08');

export default function sitemap() {
  const staticPages = ['', '/services', '/industries', '/locations', '/portfolio', '/about', '/contact', '/blog'].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: PAGES_UPDATED,
  }));
  const servicePages = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: PAGES_UPDATED,
  }));
  const industryPages = industries.map((i) => ({
    url: `${site.url}/industries/${i.slug}`,
    lastModified: PAGES_UPDATED,
  }));
  const locationPages = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: PAGES_UPDATED,
  }));
  const blogPages = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...staticPages, ...servicePages, ...industryPages, ...locationPages, ...blogPages];
}
