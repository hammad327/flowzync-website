/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strip React's dev-only prop types and console noise from the client
  // bundle in production.
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  // Ships smaller, more modern JavaScript to modern browsers, and lets
  // Next tree-shake the icon and utility imports properly.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  images: {
    // Local images live in /public/images and need no config.
    // This only matters if you point lib/images.js at a remote URL.
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // The WordPress service moved to a keyword-targeted URL.
      // 301 so any existing links and rankings carry over.
      {
        source: '/services/wordpress-development',
        destination: '/services/wordpress-website-design',
        permanent: true,
      },

      // Blog posts are FILED as YYYY-MM-DD-slug.md but SERVED at /blog/slug —
      // lib/posts.js strips the date prefix. Google discovered the dated
      // form somewhere (an older sitemap, most likely) and reported those
      // URLs as 404s, which is wasted crawl budget on every recrawl.
      // This maps any dated blog URL onto its real one, permanently.
      {
        source: '/blog/:date(\\d{4}-\\d{2}-\\d{2})-:slug',
        destination: '/blog/:slug',
        permanent: true,
      },

      // Common hand-typed / mistyped entry points. Cheap to support and
      // they stop otherwise-good inbound links landing on a 404.
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/service', destination: '/services', permanent: true },
      { source: '/service/:slug', destination: '/services/:slug', permanent: true },
      { source: '/industry', destination: '/industries', permanent: true },
      { source: '/industry/:slug', destination: '/industries/:slug', permanent: true },
      { source: '/location', destination: '/locations', permanent: true },
      { source: '/areas', destination: '/locations', permanent: true },
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/get-a-quote', destination: '/contact', permanent: true },
      { source: '/quote', destination: '/contact', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Belt and braces: the dashboard must never be indexed, even
        // if someone links to it from outside.
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }],
      },
    ];
  },
};
export default nextConfig;
