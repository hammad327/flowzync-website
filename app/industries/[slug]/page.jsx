import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { industries, getIndustry } from '@/lib/industries';
import { getService } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }) {
  const i = getIndustry(params.slug);
  if (!i) return {};
  return {
    title: { absolute: i.seoTitle },
    description: i.seoDescription,
    keywords: i.keywords,
    alternates: { canonical: `${site.url}/industries/${i.slug}` },
    openGraph: {
      title: i.seoTitle,
      description: i.seoDescription,
      url: `${site.url}/industries/${i.slug}`,
    },
  };
}

export default function IndustryPage({ params }) {
  const i = getIndustry(params.slug);
  if (!i) notFound();

  const related = (i.related || []).map(getService).filter(Boolean);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: `${site.url}/industries` },
        { '@type': 'ListItem', position: 3, name: i.title, item: `${site.url}/industries/${i.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: i.title,
      description: i.seoDescription,
      serviceType: `Website design for ${i.trade.toLowerCase()}`,
      ...(i.covers?.length ? { hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${i.trade} we build for`,
        itemListElement: i.covers.map((c) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `Website design for ${c.toLowerCase()}` },
        })),
      } } : {}),
      provider: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url },
      audience: { '@type': 'BusinessAudience', name: i.trade },
      url: `${site.url}/industries/${i.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: i.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div className="page-hero" style={{ paddingBottom: 50 }}>
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/industries">Industries</Link> <span>›</span>{' '}
            <span style={{ color: 'var(--ink)' }}>{i.title}</span>
          </nav>
          <div className="sd-hero">
            <div className="rv rv-l in">
              <div className="eyebrow"><span className="pulse" />{i.trade}</div>
              <h1>Websites for <span className="grad-txt">{i.trade.toLowerCase()}</span></h1>
              <p className="lede" style={{ marginBottom: 32 }}>{i.intro}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-p">
                  <span>Get a fixed quote</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/portfolio" className="btn btn-o"><span>See our work</span></Link>
              </div>
            </div>
            <div className="sd-media rv rv-s in" data-tilt>
              <Image src={i.img} alt={i.title} width={1200} height={800} priority />
              <div className="sd-media-chip"><b>{i.trade}</b></div>
            </div>
          </div>
        </div>
      </div>

      {/* WHO THIS COVERS — the long-tail terms live here */}
      {i.covers?.length > 0 && (
        <section style={{ paddingTop: 26, paddingBottom: 0 }}>
          <div className="wrap">
            <div className="cov rv">
              <h3>Who this covers</h3>
              <p>
                We build for every business in this sector. If yours isn&apos;t named below,
                it almost certainly still fits — ask us.
              </p>
              <div className="cov-tags">
                {i.covers.map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* THE PROBLEMS THIS TRADE ACTUALLY HAS */}
      <section style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What goes wrong</div>
            <h2>The problems we <span className="grad-txt">fix first</span></h2>
            <p>These are the issues we find on almost every {i.trade.toLowerCase().replace(/s$/, '')} website we audit.</p>
          </div>
          <div className="pain-list">
            {i.pains.map(([t, x], n) => (
              <div className={`pain rv ${n % 2 ? 'rv-d1' : ''}`} key={t}>
                <div className="pain-x">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <h4>{t}</h4>
                  <p>{x}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD FOR THIS TRADE */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What we build</div>
            <h2>Built specifically for <span className="grad-txt">{i.trade.toLowerCase()}</span></h2>
          </div>
          <div className="feat-grid">
            {i.sections.map(([t, x], n) => (
              <div className={`feat rv ${n % 3 === 1 ? 'rv-d1' : n % 3 === 2 ? 'rv-d2' : ''}`} key={t}>
                <div className="num">{String(n + 1).padStart(2, '0')}</div>
                <h4>{t}</h4>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES — internal linking */}
      {related.length > 0 && (
        <section>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />Services involved</div>
              <h2>What this build <span className="grad-txt">draws on</span></h2>
            </div>
            <div className="svc-grid">
              {related.map((s, n) => (
                <Link href={`/services/${s.slug}`} key={s.slug} className={`svc-card rv ${n === 1 ? 'rv-d1' : n === 2 ? 'rv-d2' : ''}`} data-tilt>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="svc-link">
                    Explore service
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ — the block AI assistants quote from */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />FAQ</div>
            <h2>{i.trade} <span className="grad-txt">ask us this</span></h2>
          </div>
          <FAQ items={i.faqs} />
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Other trades</div>
            <h2>We also build for <span className="grad-txt">these</span></h2>
          </div>
          <div className="ind-mini">
            {industries.filter((o) => o.slug !== i.slug).map((o) => (
              <Link href={`/industries/${o.slug}`} key={o.slug} className="ind-minicard rv">
                <b>{o.title}</b>
                <span>{o.trade}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title={`Ready for a website built for ${i.trade.toLowerCase()}?`}
            text="Tell us the areas you serve and the services you offer — we'll map the pages you need and send a fixed quote."
          />
        </div>
      </section>
    </>
  );
}
