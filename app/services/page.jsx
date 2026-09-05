import Link from 'next/link';
import { pageFaqs, faqSchema } from '@/lib/pageFaqs';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/services';
import { Icon, colorHex } from '@/components/Icons';
import HeroCanvas from '@/components/HeroCanvas';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph } from '@/lib/meta';

export const metadata = {
  title: 'Web Design, Funnels, WordPress & Automation',
  description: clampDescription(
    'Explore Flowzync services: custom website design, landing pages, GoHighLevel funnels, business automation, WordPress and Shopify development, SEO, UI/UX and maintenance.'
    ),
  alternates: { canonical: '/services' },
  openGraph: openGraph({
    title: 'Web Design, Funnels, WordPress & Automation',
    description: 'Explore Flowzync services: custom website design, landing pages, GoHighLevel funnels, business automation, WordPress and Shopify development, SEO, UI/UX and maintenance.',
    url: '/services',
  }),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema('services')) }} />
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

      <section className="sec-tint">
        <div className="wrap">
          {/* The service grid had no section heading at all, so the page
              went straight from its h1 to thirteen h3 cards. That is a
              gap in the outline and it wastes the strongest on-page
              keyword slot after the h1. */}
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What we do</div>
            <h2>Web design, development and <span className="grad-txt">automation services</span></h2>
            <p>
              Thirteen services, each a full engagement rather than a task: strategy,
              design, build, launch and support. Most clients start with one and add
              others once the first is earning its keep.
            </p>
          </div>
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

      {/* Hub-page FAQs. These pages are where broad searches land and
          what an AI assistant reads when asked a general question, so
          they carry question-and-answer content too. Static <details>
          keeps the answers in the HTML without a client component. */}
      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Common questions</div>
            <h2>Asked <span className="grad-txt">most often</span></h2>
          </div>
          <div className="faq-list">
            {pageFaqs.services.map(([q, a]) => (
              <details className="faq-static" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-soft">
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
