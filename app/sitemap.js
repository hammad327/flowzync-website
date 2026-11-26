export const revalidate = 3600;

import { site } from '@/lib/site';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { locations } from '@/lib/locations';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';
import { localeCodes } from '@/lib/locales';

// ── lastmod: only where it is actually known ────────────────────
// Google ignores <priority> and <changefreq>, and uses <lastmod> only
// when it is "consistently and verifiably accurate". This file used to
// stamp 106 URLs with one of two hardcoded dates, whatever had really
// changed. A field that is visibly templated stops being trusted for the
// whole site — including the blog posts, whose dates are real.
//
// So: blog posts carry their own `updated`/`date` frontmatter, and the
// homepage and /blog carry the newest post's date, because their content
// changes when a post is published. Everything else has no lastmod, which
// Google handles fine, rather than a date nobody can stand behind.
//
// If you want lastmod on a page type later, it must come from a date that
// changes only when that page's content changes (e.g. an `updated` field
// on the service in lib/services.js) — never the build date.
//
// /admin is deliberately absent — it is private.
export default function sitemap() {
  const posts = getAllPosts();
  const newestPost = posts.length
    ? new Date(Math.max(...posts.map((p) => new Date(p.updated || p.date).getTime())))
    : undefined;
  const at = (path, lastModified) => ({ url: `${site.url}${path}`, ...(lastModified ? { lastModified } : {}) });

  const staticPages = [
    at('', newestPost),
    at('/blog', newestPost),
    ...['/services', '/industries', '/locations', '/portfolio', '/about', '/about/team', '/contact', '/privacy', '/cookies', '/editorial-policy', '/resources/website-project-brief'].map((p) => at(p)),
  ];
  const servicePages = services.map((s) => at(`/services/${s.slug}`));
  const industryPages = industries.map((i) => at(`/industries/${i.slug}`));
  const locationPages = locations.map((l) => at(`/locations/${l.slug}`));
  const projectPages = projects.map((p) => at(`/portfolio/${p.slug}`));
  const blogPages = posts.map((p) => at(`/blog/${p.slug}`, new Date(p.updated || p.date)));
  // Language landing pages. One per language, genuinely written —
  // see lib/locales.js for why this is not a full translation.
  const localePages = localeCodes.map((code) => at(`/${code}`));
  return [...staticPages, ...servicePages, ...industryPages, ...locationPages,
          ...projectPages, ...blogPages, ...localePages];
}
