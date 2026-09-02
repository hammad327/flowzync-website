// ─────────────────────────────────────────────────────────────
//  BLOG COVER PHOTOGRAPHS
//
//  Maps a post slug to a stock photograph URL. Anything listed here
//  replaces that post's illustrated SVG cover on the blog cards and
//  the article hero.
//
//  ⚠️  THESE URLS ARE NOT VERIFIED
//  They were added without being fetched, because the build
//  environment has no outbound access to image hosts. A wrong or
//  retired photo ID gives a 404. That is survivable — components/
//  BlogCover.jsx falls back to the post's local SVG the moment an
//  image fails to load, so a bad URL costs you a nicer picture and
//  nothing else. It will never show a broken image.
//
//  CHECK THEM ANYWAY. Open /blog on the deployed site and look. Any
//  card still showing an illustration has a dead URL above it.
//
//  ── HOW TO ADD OR REPLACE ONE ────────────────────────────────
//  1. Find a photo on https://unsplash.com (free, commercial use, no
//     attribution required — though crediting the photographer is
//     good manners).
//  2. Right-click the full-size image → Copy image address. You want
//     the form https://images.unsplash.com/photo-XXXXXXXX-YYYYYYYY
//  3. Append ?w=1400&q=80&auto=format&fit=crop so it arrives sized
//     and compressed rather than at full resolution.
//  4. Paste it against the right slug below and redeploy.
//
//  Any host you use must also be listed in next.config.mjs under
//  images.remotePatterns, or Next's image optimiser refuses it.
//
//  ── A NOTE ON WHETHER PHOTOS ARE THE RIGHT CALL ──────────────
//  Remote photographs cost more than the SVGs did: the optimiser has
//  to fetch each one before it can render a card, they are tens of
//  kilobytes rather than two, and they depend on a third party
//  staying up. Generic stock imagery also does very little for a
//  reader. Real screenshots of your own work would beat both — the
//  same folder and the same `cover:` field take a local .jpg.
// ─────────────────────────────────────────────────────────────

export const blogPhotos = {
  // ── VERIFIED ────────────────────────────────────────────────
  // These three shipped on the live site before this change, so the
  // photo IDs are known good.
  'seo-basics-new-websites':
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1400&q=80&auto=format&fit=crop',
  'ghl-funnel-mistakes':
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop',
  'website-redesign-signs':
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1400&q=80&auto=format&fit=crop',

  // ── UNVERIFIED — check these on the deployed site ───────────
  // Widely-used Unsplash photographs matched to each subject. Any that
  // fail simply keep their illustrated cover.
  'how-much-does-a-wordpress-website-cost':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&auto=format&fit=crop',
  'woocommerce-vs-shopify-small-business':
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80&auto=format&fit=crop',
  'why-is-my-website-not-showing-up-on-google':
    'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1400&q=80&auto=format&fit=crop',
  'how-to-write-a-website-brief':
    'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1400&q=80&auto=format&fit=crop',
  'gohighlevel-vs-hubspot-small-business':
    'https://images.unsplash.com/photo-1552581234-26160f608093?w=1400&q=80&auto=format&fit=crop',
  'elementor-vs-custom-wordpress-theme':
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=80&auto=format&fit=crop',
  'how-many-pages-should-a-small-business-website-have':
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80&auto=format&fit=crop',
  'local-seo-checklist-small-business':
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop',
  'website-traffic-but-no-leads':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop',
  'how-long-does-it-take-to-build-a-website':
    'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1400&q=80&auto=format&fit=crop',
  'does-my-business-need-a-blog':
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80&auto=format&fit=crop',
  'cheap-website-design-what-you-actually-get':
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1400&q=80&auto=format&fit=crop',
  'how-to-get-your-business-mentioned-by-ai-chatgpt':
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80&auto=format&fit=crop',
  'google-business-profile-optimization-checklist':
    'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1400&q=80&auto=format&fit=crop',
  'does-website-speed-affect-seo-rankings':
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop',
  'website-maintenance-what-it-includes':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=80&auto=format&fit=crop',
};

/** The photograph for a post, or undefined if it has none. */
export const photoFor = (slug) => blogPhotos[slug];
