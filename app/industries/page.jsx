import Link from 'next/link';
import { pageFaqs, faqSchema } from '@/lib/pageFaqs';
import Image from 'next/image';
import HeroCanvas from '@/components/HeroCanvas';
import CTABand from '@/components/CTABand';
import { industries } from '@/lib/industries';
import { site } from '@/lib/site';
import { clampTitle, clampDescription } from '@/lib/meta';

export const metadata = {
  title: { absolute: clampTitle('Industry Website Design | Websites Built Per Trade — Flowzync') },
  description: clampDescription(
    'Website design built around one industry at a time — plumbers, dental clinics, leak detection specialists and local businesses. Each site built for how that trade actually gets found.'
    ),
  alternates: { canonical: `${site.url}/industries` },
};

// CollectionPage + ItemList so this reads as a browsable index rather
// than an unrelated page of links. It is also what an AI assistant uses
// to answer "which industries do they work with" without guessing from
// the prose.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${site.url}/industries#collection`,
  name: 'Industries we build websites for',
  url: `${site.url}/industries`,
  isPartOf: { '@id': `${site.url}/#website` },
  about: { '@id': `${site.url}/#organization` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: industries.length,
    itemListElement: industries.map((i, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      name: i.title,
      url: `${site.url}/industries/${i.slug}`,
    })),
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema('industries')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Industries</div>
          <h1 style={{ marginInline: 'auto' }}>Built for <span className="grad-txt">your trade</span></h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            A dental practice and an online store need very different websites. These pages
            set out what each sector actually needs — and what we build differently for it.
          </p>
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Industries</div>
            <h2>Websites built for <span className="grad-txt">how your trade gets found</span></h2>
            <p>
              A clinic, a contractor and a law firm are found in completely different ways.
              These pages describe what changes in the build for each.
            </p>
          </div>
          <div className="ind-grid">
            {industries.map((i, n) => (
              <Link href={`/industries/${i.slug}`} key={i.slug} className={`ind-card rv ${n % 2 ? 'rv-d1' : ''}`} data-tilt>
                <div className="ind-thumb">
                  <Image src={i.img} alt={i.title} width={1200} height={800} />
                </div>
                <div className="ind-body">
                  <span className="ind-tag">{i.trade}</span>
                  <h3>{i.title}</h3>
                  <p>{i.intro.split('. ').slice(0, 2).join('. ')}.</p>
                  {i.covers?.length > 0 && (
                    <span className="ind-covers">{i.covers.slice(0, 4).join(' · ')} + more</span>
                  )}
                  <span className="svc-link">
                    See what this trade needs
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }} className="rv">
            <p style={{ color: 'var(--muted)', marginBottom: 18 }}>
              Your industry not listed? We build for it too — tell us what you do.
            </p>
            <Link href="/contact" className="btn btn-o"><span>Ask about your industry</span></Link>
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
            {pageFaqs.industries.map(([q, a]) => (
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
            title="Want a site built for how your trade gets found?"
            text="Tell us the industry and the area you serve — we'll map the pages you need and send a fixed quote."
          />
        </div>
      </section>
    </>
  );
}
