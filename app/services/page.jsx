import Link from 'next/link';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/services';
import { Icon, colorHex } from '@/components/Icons';
import HeroCanvas from '@/components/HeroCanvas';
import { site } from '@/lib/site';
import { clampTitle, clampDescription } from '@/lib/meta';

export const metadata = {
  title: 'Web Design, Funnels, WordPress & Automation',
  description: clampDescription(
    'Explore Flowzync services: custom website design, landing pages, GoHighLevel funnels, business automation, WordPress and Shopify development, SEO, UI/UX and maintenance.'
    ),
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Web Design, Funnels, WordPress & Automation',
    description: clampDescription('Explore Flowzync services: custom website design, landing pages, GoHighLevel funnels, business automation, WordPress and Shopify development, SEO, UI/UX and maintenance.'),
    url: '/services',
    type: 'website',
  },
};

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Flowzync Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${site.url}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Services</div>
          <h1 style={{ margin: '0 auto 18px' }}>Pick your project.<br /><span className="grad-txt">We'll handle the rest.</span></h1>
          <p className="lede" style={{ margin: '0 auto' }}>
            Every service is a full engagement — strategy, design, build and support.
            Mix and match, or bring us the whole stack.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="svc-grid">
            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} className={`svc-card rv ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`} data-tilt key={s.slug}>
                <div className={`svc-ic ic-${s.color}`}><Icon name={s.icon} color={colorHex[s.color]} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="svc-link">
                  View details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title="Not sure which service fits?"
            text="Tell us your goal — we'll recommend the leanest path to get there. Or ask Zync, our AI assistant, right now."
            cta="Talk to a strategist"
          />
        </div>
      </section>
    </>
  );
}
