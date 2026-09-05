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
  // Real client screenshots, full-page captures. The portfolio card
  // is a browser mockup that scrolls the shot on hover, which is why
  // these are tall rather than cropped to a card ratio.
  projects: {
    '5-star-quality-hvac':                       '/images/projects/5-star-quality-hvac.jpg',
    'ad-consultancy-group':                      '/images/projects/ad-consultancy-group.jpg',
    'beauty-and-spa-centre':                     '/images/projects/beauty-and-spa-centre.jpg',
    'bludo-lead-follow-up':                      '/images/projects/bludo-lead-follow-up.jpg',
    'business-breakpoint-quiz':                  '/images/projects/business-breakpoint-quiz.jpg',
    'business-coach':                            '/images/projects/business-coach.jpg',
    'cleaning-services':                         '/images/projects/cleaning-services.jpg',
    'conference-2025':                           '/images/projects/conference-2025.jpg',
    'construction-company':                      '/images/projects/construction-company.jpg',
    'crown-build-constructions':                 '/images/projects/crown-build-constructions.jpg',
    'das-care-services':                         '/images/projects/das-care-services.jpg',
    'dental-clinic-landing-page':                '/images/projects/dental-clinic-landing-page.jpg',
    'digital-marketing':                         '/images/projects/digital-marketing.jpg',
    'digital-marketing-email-template-design':   '/images/projects/digital-marketing-email-template-design.jpg',
    'elevate-assist':                            '/images/projects/elevate-assist.jpg',
    'gym-email-template-design':                 '/images/projects/gym-email-template-design.jpg',
    'heaven-sent-sleep-baby-care-fun':           '/images/projects/heaven-sent-sleep-baby-care-fun.jpg',
    'imb-exterior-cleaning':                     '/images/projects/imb-exterior-cleaning.jpg',
    'jre-services':                              '/images/projects/jre-services.jpg',
    'live-freedom-webinar':                      '/images/projects/live-freedom-webinar.jpg',
    'marketing-failing-to-deliver':              '/images/projects/marketing-failing-to-deliver.jpg',
    'medical-spa-medspa':                        '/images/projects/medical-spa-medspa.jpg',
    'medway-drain-services':                     '/images/projects/medway-drain-services.jpg',
    'myers-insurance-advisors':                  '/images/projects/myers-insurance-advisors.jpg',
    'nf-living':                                 '/images/projects/nf-living.jpg',
    'roddye-communications':                     '/images/projects/roddye-communications.jpg',
    'roller-shutters-online':                    '/images/projects/roller-shutters-online.jpg',
    's-c-exterior-cleaning':                     '/images/projects/s-c-exterior-cleaning.jpg',
    'the-right-size-for-any-situation':          '/images/projects/the-right-size-for-any-situation.jpg',
    'travel-explore-beauty-of-the-whole-world':  '/images/projects/travel-explore-beauty-of-the-whole-world.jpg',
  },

  // ── INDUSTRY LANDING PAGES ─ keyed by industry slug ──────────
  industries: {
    'home-and-property-services':      '/images/industries/home-and-property-services.svg',
    'healthcare-and-medical-practices':'/images/industries/healthcare-and-medical-practices.svg',
    'legal-and-professional-services': '/images/industries/legal-and-professional-services.svg',
    'ecommerce-and-retail':            '/images/industries/ecommerce-and-retail.svg',
    'hospitality-and-food':            '/images/industries/hospitality-and-food.svg',
    'real-estate-and-construction':    '/images/industries/real-estate-and-construction.svg',
    'beauty-wellness-and-fitness':     '/images/industries/beauty-wellness-and-fitness.svg',
    'education-and-training':          '/images/industries/education-and-training.svg',
    'automotive-and-transport':        '/images/industries/automotive-and-transport.svg',
    'local-and-small-business':        '/images/industries/local-and-small-business.svg',
    'dental-practices':                  '/images/industries/dental-practices.svg',
    'veterinary-practices':              '/images/industries/veterinary-practices.svg',
    'accountants-and-bookkeepers':       '/images/industries/accountants-and-bookkeepers.svg',
    'financial-services-and-mortgage-brokers': '/images/industries/financial-services-and-mortgage-brokers.svg',
    'recruitment-and-staffing':          '/images/industries/recruitment-and-staffing.svg',
    'saas-and-technology':               '/images/industries/saas-and-technology.svg',
    'care-homes-and-home-care':          '/images/industries/care-homes-and-home-care.svg',
    'charities-and-nonprofits':          '/images/industries/charities-and-nonprofits.svg',
    'manufacturing-and-industrial':      '/images/industries/manufacturing-and-industrial.svg',
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
