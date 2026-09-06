// ─────────────────────────────────────────────────────────────
//  STOCK PHOTOGRAPHS — services, industries and project heroes
//
//  Service and industry pages previously showed a generated SVG
//  placeholder. These maps put a real photograph there instead.
//
//  ⚠️  THESE URLS ARE NOT VERIFIED
//  They were written without being fetched, because this build
//  environment has no outbound access to image hosts. A retired or
//  mistyped photo ID returns a 404 — which is survivable, because
//  components/Photo.jsx swaps in the page's local SVG the moment an
//  image fails to load. A dead URL costs you a nicer picture and
//  nothing else; it never shows a broken image icon.
//
//  CHECK THEM ON THE DEPLOYED SITE. Open /services and /industries
//  and look. Anything still showing a flat illustration has a dead
//  URL against it here — replace it using the recipe below.
//
//  ── HOW TO REPLACE ONE ───────────────────────────────────────
//  1. Find a photo on https://unsplash.com. Unsplash photos are free
//     for commercial use with no attribution required (crediting the
//     photographer is still good manners).
//  2. Right-click the full-size image → Copy image address. You want
//     the form https://images.unsplash.com/photo-XXXXXXXX-YYYYYYYY
//  3. Append ?w=1400&q=80&auto=format&fit=crop so it arrives already
//     sized and compressed rather than at full resolution.
//  4. Paste it against the right slug below and redeploy.
//
//  Any host you use must also appear in next.config.mjs under
//  images.remotePatterns, or Next's image optimiser refuses it.
//
//  ── WHAT WOULD BE BETTER ─────────────────────────────────────
//  Stock photography is filler. A screenshot of work you have
//  actually delivered in that sector beats any of these, and drops
//  straight into lib/images.js as a local file with no remote
//  dependency at all.
// ─────────────────────────────────────────────────────────────

const P = (id) => `https://images.unsplash.com/${id}?w=1400&q=80&auto=format&fit=crop`;

// ── SERVICE PAGES ─ keyed by service slug ────────────────────
export const servicePhotos = {
  'custom-website-design':          P('photo-1559028012-481c04fa702d'),
  'landing-pages':                  P('photo-1517245386807-bb43f82c33c4'),
  'ghl-funnels':                    P('photo-1552664730-d307ca884978'),
  'ghl-funnels-for-care-agencies':  P('photo-1576091160399-112ba8d25d1d'),
  'automations':                    P('photo-1531297484001-80022131f5a1'),
  'ghl-crm-setup':                  P('photo-1454165804606-c3d57bc86b40'),
  'wordpress-website-design':       P('photo-1461749280684-dccba630e2f6'),
  'elementor-design':               P('photo-1498050108023-c5249f4df085'),
  'woocommerce-development':        P('photo-1441986300917-64674bd600d8'),
  'seo-optimization':               P('photo-1542744173-8e7e53415bb0'),
  'graphic-design':                 P('photo-1626785774573-4b799315345d'),
  'ui-ux-design':                   P('photo-1522542550221-31fd19575a2d'),
  'maintenance-support':            P('photo-1516321318423-f06f85e504b3'),
};

// ── INDUSTRY PAGES ─ keyed by industry slug ──────────────────
export const industryPhotos = {
  'home-and-property-services':              P('photo-1621905251189-08b45d6a269e'),
  'healthcare-and-medical-practices':        P('photo-1576091160550-2173dba999ef'),
  'legal-and-professional-services':         P('photo-1589829545856-d10d557cf95f'),
  'ecommerce-and-retail':                    P('photo-1472851294608-062f824d29cc'),
  'hospitality-and-food':                    P('photo-1414235077428-338989a2e8c0'),
  'real-estate-and-construction':            P('photo-1560518883-ce09059eeffa'),
  'beauty-wellness-and-fitness':             P('photo-1560066984-138dadb4c035'),
  'education-and-training':                  P('photo-1523240795612-9a054b0db644'),
  'automotive-and-transport':                P('photo-1486262715619-67b85e0b08d3'),
  'local-and-small-business':                P('photo-1521737604893-d14cc237f11d'),
  'dental-practices':                        P('photo-1588776814546-1ffcf47267a5'),
  'veterinary-practices':                    P('photo-1601758228041-f3b2795255f1'),
  'accountants-and-bookkeepers':             P('photo-1554224154-26032ffc0d07'),
  'financial-services-and-mortgage-brokers': P('photo-1450101499163-c8848c66ca85'),
  'recruitment-and-staffing':                P('photo-1521791136064-7986c2920216'),
  'saas-and-technology':                     P('photo-1551434678-e076c223a692'),
  'care-homes-and-home-care':                P('photo-1516307365426-bea591f05011'),
  'charities-and-nonprofits':                P('photo-1559027615-cd4628902d4a'),
  'manufacturing-and-industrial':            P('photo-1565043666747-69f6646db940'),
};

// ── PROJECT PAGE HEROES ─ keyed by project slug ──────────────
//  The project page leads with a wide photograph of the sector, and
//  keeps the full-page screenshot in the framed browser mock beneath
//  it. Only projects whose subject differs from their industry need
//  an entry — everything else falls back to the industry photo, so
//  there is one fewer URL to keep alive.
export const projectPhotos = {
  'live-freedom-webinar-funnel':            P('photo-1591115765373-5207764f72e7'),
  'conference-2025-event-page':             P('photo-1540575467063-178a50c2df87'),
  'travel-agency-website':                  P('photo-1436491865332-7a61a109cc05'),
  'gym-email-template-design':              P('photo-1534438327276-14e5300c3a48'),
  'digital-marketing-email-template-design':P('photo-1596526131083-e8c633c948d2'),
  'cleaning-services-website':              P('photo-1581578731548-c64695cc6952'),
  'sc-exterior-cleaning':                   P('photo-1527515637462-cff94eecc1ac'),
  'imb-exterior-cleaning':                  P('photo-1527515637462-cff94eecc1ac'),
  'medway-drain-services':                  P('photo-1585704032915-c3400ca199e7'),
  '5-star-quality-hvac':                    P('photo-1631545806609-6e8c5ff36ed7'),
  'roller-shutters-online':                 P('photo-1504328345606-18bbc8c9d7d1'),
  'nf-living':                              P('photo-1560448204-e02f11c3d0e2'),
  'medical-spa-website':                    P('photo-1570172619644-dfd03ed5d881'),
  'beauty-and-spa-centre':                  P('photo-1600334089648-b0d9d3028eb2'),
  'dental-clinic-landing-page':             P('photo-1606811841689-23dfddce3e95'),
  'myers-insurance-advisors':               P('photo-1450101499163-c8848c66ca85'),
  'das-care-services':                      P('photo-1584515933487-779824d29309'),
  'heaven-sent-sleep-baby-care-funnel':     P('photo-1555252333-9f8e92e65df9'),
  'business-coach-funnel':                  P('photo-1552664730-d307ca884978'),
  'business-breakpoint-quiz-funnel':        P('photo-1454165804606-c3d57bc86b40'),
  'construction-company-website':           P('photo-1504307651254-35680f356dfd'),
  'crown-build-constructions':              P('photo-1503387762-592deb58ef4e'),
  'jre-services':                           P('photo-1621905251189-08b45d6a269e'),
};

/** Photograph for a service page, or undefined. */
export const servicePhoto = (slug) => servicePhotos[slug];

/** Photograph for an industry page, or undefined. */
export const industryPhoto = (slug) => industryPhotos[slug];

/**
 * Photograph for a project page. Falls back to the project's industry
 * so every project gets something relevant without 30 hand-picked URLs.
 */
export const projectPhoto = (slug, industrySlug) =>
  projectPhotos[slug] || industryPhotos[industrySlug];
