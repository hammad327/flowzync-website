import PortfolioGrid from '@/components/PortfolioGrid';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { clampTitle, clampDescription, openGraph } from '@/lib/meta';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Portfolio — Websites, Funnels & Stores',
  description: clampDescription(
    'Browse Flowzync\u2019s portfolio: custom website designs, GoHighLevel funnels, WordPress builds and Shopify stores — each with the story and the results behind it.'
    ),
  alternates: { canonical: '/portfolio' },
  openGraph: openGraph({
    title: 'Portfolio — Websites, Funnels & Stores',
    description: 'Browse Flowzync\u2019s portfolio: custom website designs, GoHighLevel funnels, WordPress builds and Shopify stores — each with the story and the results behind it.',
    url: '/portfolio',
  }),
};

// CollectionPage + ItemList. Each project is a CreativeWork rather
// than a bare list item, so the work itself is described rather than
// just linked — this page is the site's main proof asset.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${site.url}/portfolio#collection`,
  name: 'Flowzync portfolio',
  url: `${site.url}/portfolio`,
  isPartOf: { '@id': `${site.url}/#website` },
  about: { '@id': `${site.url}/#organization` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: projects.length,
    itemListElement: projects.map((pr, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      item: {
        '@type': 'CreativeWork',
        name: pr.title,
        ...(pr.desc ? { description: pr.desc } : {}),
        ...(pr.img ? { image: `${site.url}${pr.img}` } : {}),
        creator: { '@id': `${site.url}/#organization` },
      },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Portfolio</div>
          <h1 style={{ margin: '0 auto 18px' }}>Work we're <span className="grad-txt">proud to sign</span></h1>
          <p className="lede" style={{ margin: '0 auto' }}>
            Every project below started as someone's dream website. Filter by type to see what we'd craft for you.
          </p>
        </div>
      </div>
      <section style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Selected work</div>
            <h2>Websites, funnels and stores <span className="grad-txt">we have built</span></h2>
          </div>
        </div>
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>
      {/* Internal links out of the portfolio. This page had exactly one,
          which wastes the authority it collects — it is the page people
          link to and the one they land on from search. */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What went into these</div>
            <h2>The work <span className="grad-txt">behind the work</span></h2>
            <p>
              Most of the projects above combine several of these. If one of them looks
              close to what you need, its page explains what the build actually involves.
            </p>
          </div>
          <div className="pf-links rv">
            {[
              ['/services/custom-website-design', 'Custom website design'],
              ['/services/wordpress-website-design', 'WordPress website design'],
              ['/services/shopify-ecommerce', 'Shopify stores'],
              ['/services/woocommerce-development', 'WooCommerce development'],
              ['/services/landing-pages', 'Landing pages'],
              ['/services/ghl-funnels', 'GoHighLevel funnels'],
              ['/services/automations', 'Business automation'],
              ['/services/ui-ux-design', 'UI/UX design'],
              ['/services/seo-optimization', 'SEO optimisation'],
              ['/industries', 'Websites by industry'],
              ['/locations', 'Areas we cover'],
              ['/blog', 'How we think about this'],
            ].map(([href, label]) => (
              <Link href={href} key={href} className="pf-link">
                {label}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title="Your project could be next"
            text="Send us your idea — we'll map what's possible and come back with a plan."
            cta="Start a project"
          />
        </div>
      </section>
    </>
  );
}
