// ─────────────────────────────────────────────────────────────
//  PORTFOLIO PROJECTS
//
//  · `cat` must match a key in FILTERS below.
//  · `imgKey` points at an entry in lib/images.js → projects.
//    To swap a screenshot, change the path in lib/images.js —
//    you never need to touch this file for images.
//  · Tall screenshots (900 × 1600) scroll on hover automatically.
//
//  Note: we deliberately do not publish load times, PageSpeed
//  scores or turnaround claims here. The work speaks; numbers
//  that can't be independently verified only invite doubt.
// ─────────────────────────────────────────────────────────────
import { img } from '@/lib/images';

export const FILTERS = [
  ['all', 'All projects'],
  ['design', 'Website Design'],
  ['landing', 'Landing Pages'],
  ['ghl', 'GHL Funnels'],
  ['automation', 'Automations'],
  ['crm', 'CRM & SaaS'],
  ['wp', 'WordPress'],
  ['shopify', 'Shopify'],
  ['seo', 'SEO'],
  ['uiux', 'UI/UX'],
  ['graphic', 'Graphic Design'],
  ['care', 'Maintenance'],
];

const RAW = [
  {
    cat: 'design', badge: 'Custom Website Design', badgeClass: 'bg-lav',
    imgKey: 'aurelia-studio',
    title: 'Aurelia Studio — Brand Website',
    site: 'aureliastudio.com',
    desc: 'A fully bespoke website for an interior design studio: immersive galleries, unhurried scroll animations and a design system the team edits themselves.',
    tags: ['Figma design system', 'Next.js build', 'Editable galleries'],
  },
  {
    cat: 'landing', badge: 'Landing Page', badgeClass: 'bg-peach',
    imgKey: 'pulsefit',
    title: 'PulseFit — Launch Landing Page',
    site: 'pulsefit.app/launch',
    desc: 'A launch page for a fitness app: scroll-triggered product story, waitlist automation and a single, uncluttered path to signing up.',
    tags: ['Waitlist automation', 'A/B test ready', 'Conversion copy'],
  },
  {
    cat: 'ghl', badge: 'GHL Funnel', badgeClass: 'bg-ghl',
    imgKey: 'scaledental',
    title: 'ScaleDental — Booking Funnel',
    site: 'go.scaledental.co',
    desc: 'End-to-end GoHighLevel booking funnel with reminder automation and an AI receptionist for a six-location dental group.',
    tags: ['Calendar routing', 'Reminder workflows', 'Six locations'],
  },
  {
    cat: 'automation', badge: 'Automation', badgeClass: 'bg-ghl',
    imgKey: 'harbor-realty',
    title: 'Harbor Realty — Lead Response Engine',
    site: 'harborrealty.io',
    desc: 'Speed-to-lead automation across GHL and Make.com: automatic SMS replies, smart routing to the right agent, and review requests on autopilot.',
    tags: ['GHL + Make.com', 'Agent routing', 'Review requests'],
  },
  {
    cat: 'crm', badge: 'CRM & SaaS Setup', badgeClass: 'bg-ghl',
    imgKey: 'fitlaunch',
    title: 'FitLaunch — Coaching SaaS',
    site: 'app.fitlaunch.co',
    desc: 'White-label GHL SaaS setup with a niche snapshot, Stripe billing and automated onboarding for a fitness agency.',
    tags: ['SaaS mode', 'Stripe billing', 'Snapshot deploy'],
  },
  {
    cat: 'wp', badge: 'WordPress', badgeClass: 'bg-wp',
    imgKey: 'lumen-legal',
    title: 'Lumen Legal — Authority Site',
    site: 'lumenlegal.com',
    desc: 'Hand-coded WordPress theme, technical SEO overhaul and a content hub that established a boutique law firm as the local authority.',
    tags: ['Custom theme', 'Technical SEO', 'Content hub'],
  },
  {
    cat: 'wp', badge: 'WooCommerce', badgeClass: 'bg-wp',
    imgKey: 'brixton-co',
    title: 'Brixton & Co — Store Migration',
    site: 'brixtonandco.com',
    desc: 'Wix to custom WooCommerce migration with a full redirect map and a mobile-first checkout redesign.',
    tags: ['Wix → WooCommerce', 'Redirect map', 'Checkout redesign'],
  },
  {
    cat: 'shopify', badge: 'Shopify', badgeClass: 'bg-sh',
    imgKey: 'northpeak-gear',
    title: 'Northpeak Gear — Store Redesign',
    site: 'northpeakgear.com',
    desc: 'Conversion-first Shopify redesign with custom OS 2.0 sections, product bundles and a Klaviyo retention engine for an outdoor brand.',
    tags: ['OS 2.0 sections', 'Bundles', 'Klaviyo flows'],
  },
  {
    cat: 'shopify', badge: 'Shopify', badgeClass: 'bg-sh',
    imgKey: 'velora-skin',
    title: 'Velora Skin — DTC Launch',
    site: 'veloraskin.com',
    desc: 'Zero-to-launch skincare store: custom theme, subscription products and abandoned-cart flows wired in before opening day.',
    tags: ['Custom theme', 'Subscriptions', 'Cart recovery'],
  },
  {
    cat: 'seo', badge: 'SEO Campaign', badgeClass: 'bg-sh',
    imgKey: 'meridian-clinics',
    title: 'Meridian Clinics — Local SEO',
    site: 'meridianclinics.com',
    desc: 'Technical cleanup, service-page architecture and Google Business Profile optimisation for a three-city healthcare group.',
    tags: ['Local SEO', 'Service architecture', 'GBP optimisation'],
  },
  {
    cat: 'uiux', badge: 'UI/UX Design', badgeClass: 'bg-lav',
    imgKey: 'taskhive',
    title: 'TaskHive — SaaS Product Design',
    site: 'app.taskhive.io',
    desc: 'Complete product design for a project-management SaaS: research, user flows, an interactive Figma prototype and a documented design system.',
    tags: ['User research', 'Figma prototype', 'Design system'],
  },
  {
    cat: 'graphic', badge: 'Graphic Design', badgeClass: 'bg-peach',
    imgKey: 'kindle-oak',
    title: 'Kindle & Oak — Brand Identity',
    site: 'kindleandoak.com',
    desc: 'Full identity for an artisan furniture brand: logo suite, palette, packaging, social kit and a complete brand guide.',
    tags: ['Logo suite', 'Packaging', 'Brand guide'],
  },
  {
    cat: 'care', badge: 'Maintenance', badgeClass: 'bg-wp',
    imgKey: 'atlas-group',
    title: 'Atlas Group — Twelve Sites, One Plan',
    site: 'atlasgroup.co',
    desc: 'Ongoing care for a holding company\u2019s twelve WordPress properties: updates, security, backups and same-day content edits.',
    tags: ['12 properties', 'Security & backups', 'Same-day edits'],
  },
];

export const projects = RAW.map((p) => ({ ...p, img: img('projects', p.imgKey) }));
