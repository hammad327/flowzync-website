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
