// ═══════════════════════════════════════════════════════════════
//  IMAGE REGISTRY — the ONE file to edit when you swap pictures
// ═══════════════════════════════════════════════════════════════
//
//  HOW TO REPLACE AN IMAGE (30 seconds, no code knowledge needed):
//
//   1. Put your file in  /public/images/<folder>/
//      e.g.  /public/images/projects/aurelia-studio.jpg
//   2. Find its key below and change the path to match your file.
//      Only the text inside the quotes changes.
//
//   That's it. Every page using that image updates automatically —
//   cards, hero, portfolio, Open Graph previews, everything.
//
//  EASIEST OPTION: name your uploaded file exactly like the
//  placeholder (same name, .jpg instead of .svg) and change only
//  the extension in the line below.
//
//  RECOMMENDED SIZES
//   · Service images ....... 1200 × 800   (landscape)
//   · Portfolio shots ...... 900 × 1600   (tall screenshots scroll on hover)
//   · Industry images ...... 1200 × 800   (landscape)
//   · Blog covers .......... 1400 × 900   (set in the post's .md file)
//   · Open Graph / social .. 1200 × 630
//
//  Use .jpg or .webp for photos, .svg or .png for graphics.
//  Every image is rendered through next/image, so it is automatically
//  compressed, resized per device and lazy-loaded below the fold.
// ═══════════════════════════════════════════════════════════════

export const images = {
  // ── SERVICE PAGE IMAGES ─ keyed by service slug ──────────────
  services: {
    'custom-website-design':   '/images/services/custom-website-design.svg',
    'wordpress-website-design':'/images/services/wordpress-website-design.svg',
    'elementor-design':        '/images/services/elementor-design.svg',
    'woocommerce-development': '/images/services/woocommerce-development.svg',
    'landing-pages':           '/images/services/landing-pages.svg',
    'ghl-funnels':             '/images/services/ghl-funnels.svg',
    'automations':             '/images/services/automations.svg',
    'ghl-crm-setup':           '/images/services/ghl-crm-setup.svg',
    'shopify-ecommerce':       '/images/services/shopify-ecommerce.svg',
    'seo-optimization':        '/images/services/seo-optimization.svg',
    'graphic-design':          '/images/services/graphic-design.svg',
    'ui-ux-design':            '/images/services/ui-ux-design.svg',
    'maintenance-support':     '/images/services/maintenance-support.svg',
  },

  // ── PORTFOLIO SCREENSHOTS ─ tall images scroll on hover ──────
  projects: {
    'aurelia-studio':    '/images/projects/aurelia-studio.svg',
    'pulsefit':          '/images/projects/pulsefit.svg',
    'scaledental':       '/images/projects/scaledental.svg',
    'harbor-realty':     '/images/projects/harbor-realty.svg',
    'fitlaunch':         '/images/projects/fitlaunch.svg',
    'lumen-legal':       '/images/projects/lumen-legal.svg',
    'brixton-co':        '/images/projects/brixton-co.svg',
    'northpeak-gear':    '/images/projects/northpeak-gear.svg',
    'velora-skin':       '/images/projects/velora-skin.svg',
    'meridian-clinics':  '/images/projects/meridian-clinics.svg',
    'taskhive':          '/images/projects/taskhive.svg',
    'kindle-oak':        '/images/projects/kindle-oak.svg',
    'atlas-group':       '/images/projects/atlas-group.svg',
  },

  // ── INDUSTRY LANDING PAGES ─ keyed by industry slug ──────────
  industries: {
    'website-for-plumbers':                '/images/industries/plumbers.svg',
    'website-for-dental-clinics':          '/images/industries/dental-clinics.svg',
    'website-for-water-leakage-detection': '/images/industries/water-leakage-detection.svg',
    'website-for-local-businesses':        '/images/industries/local-businesses.svg',
  },

  // ── SITE-WIDE ────────────────────────────────────────────────
  og: '/og.png',                 // social share card, 1200 × 630
  logoRaster: '/logo.png',       // raster logo for schema.org, 512 × 512
  fallback: '/images/placeholder.svg',
};

// Safe lookup — never returns undefined, so a missing key can't
// break a build or leave a blank card on the page.
export function img(group, key) {
  return images[group]?.[key] || images.fallback;
}
