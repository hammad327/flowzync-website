// Metadata helpers preserve complete authored text. Search engines choose
// their own snippet width; 60/160 character rules are editorial guidelines,
// not hard indexing requirements. Keep the established helper API for callers.
export function clampTitle(title) {
  // Search engines choose display widths; preserve complete, descriptive authored titles.
  return title ? title.trim().replace(/\s+/g, ' ') : title;
}

/** Normalize whitespace without silently cutting the authored description. */
export function clampDescription(desc) {
  return desc ? desc.trim().replace(/\s+/g, ' ') : desc;
}

// ─────────────────────────────────────────────────────────────
//  OPEN GRAPH
//
//  Next.js merges `metadata` SHALLOWLY: a page that declares its own
//  `openGraph` object replaces the root layout's entirely, images and
//  all. That silently stripped og:image from 57 of 78 pages — every
//  service, industry, location and blog page — so anything shared to
//  LinkedIn, Facebook, Slack or WhatsApp rendered as a bare grey link.
//
//  Build the object with this instead of by hand, and the image, type
//  and site name always survive.
// ─────────────────────────────────────────────────────────────
export function openGraph({ title, description, url, type = 'website', image, ...rest }) {
  const img = image || '/og.png';
  return {
    type,
    siteName: 'Flowzync',
    locale: 'en_US',
    title: clampTitle(title),
    description: clampDescription(description),
    ...(url ? { url } : {}),
    images: [{ url: img, ...(!image ? {width:1200,height:630} : {}), alt: clampTitle(title) }],
    ...rest,
  };
}

/** Twitter/X card, which has the same replace-not-merge problem. */
export function twitterCard({ title, description, image }) {
  return {
    card: 'summary_large_image',
    title: clampTitle(title),
    description: clampDescription(description),
    images: [image || '/og.png'],
  };
}

/** Convenience wrapper for a page's metadata object. */
export function pageMeta({ title, description, ...rest }) {
  return {
    ...(title ? { title: { absolute: clampTitle(title) } } : {}),
    ...(description ? { description: clampDescription(description) } : {}),
    ...rest,
  };
}
