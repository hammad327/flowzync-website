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
    // Lighthouse's Trust and Safety audits flagged all of these as
    // missing. None of them change how the site behaves; they close
    // off attacks the browser can prevent for us if we ask.
    const security = [
      // Force HTTPS for two years, including subdomains. Without this a
      // visitor's first request over http is interceptable before the
      // redirect happens.
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },

      // Clickjacking: nobody has a reason to frame this site.
      { key: 'X-Frame-Options', value: 'DENY' },

      // Stops a browser second-guessing a declared Content-Type, which
      // is how a text upload becomes an executable script.
      { key: 'X-Content-Type-Options', value: 'nosniff' },

      // Send the full URL to ourselves, only the origin to third
      // parties, nothing at all when downgrading to http.
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

      // Origin isolation. same-origin would break the OAuth-style popup
      // flows some payment and booking providers use, so this uses the
      // allow-popups variant, which still isolates the browsing context.
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },

      // We do not use any of these. Declaring it stops an injected
      // script asking on our behalf.
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
    ];

    return [
      { source: '/:path*', headers: security },
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
