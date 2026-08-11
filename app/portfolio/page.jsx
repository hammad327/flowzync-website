import PortfolioGrid from '@/components/PortfolioGrid';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { clampTitle, clampDescription } from '@/lib/meta';

export const metadata = {
  title: 'Portfolio — Websites, Funnels & Stores',
  description: clampDescription(
    'Browse Flowzync\u2019s portfolio: custom website designs, GoHighLevel funnels, WordPress builds and Shopify stores — each with the story and the results behind it.'
    ),
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Websites, Funnels & Stores',
    description: clampDescription('Browse Flowzync\u2019s portfolio: custom website designs, GoHighLevel funnels, WordPress builds and Shopify stores — each with the story and the results behind it.'),
    url: '/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <>
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
          <PortfolioGrid />
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
