import { site } from '@/lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The lead dashboard and its API are private. They also carry
        // noindex headers — robots.txt alone is a request, not a lock.
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
