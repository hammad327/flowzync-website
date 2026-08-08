import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import { services, getService } from '@/lib/services';
import { getServiceDetails } from '@/lib/serviceDetails';
import { site } from '@/lib/site';
import { Icon, colorHex } from '@/components/Icons';
import HeroCanvas from '@/components/HeroCanvas';

// Pre-render every service at build time → instant loads + full SEO
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: { absolute: s.seoTitle },
    description: s.seoDescription,
    keywords: s.keywords,
    alternates: { canonical: `${site.url}/services/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.seoDescription, url: `${site.url}/services/${s.slug}` },
  };
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const d = getServiceDetails(params.slug) || {};

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
        { '@type': 'ListItem', position: 3, name: s.title, item: `${site.url}/services/${s.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.title,
      description: s.seoDescription,
      serviceType: s.title,
      provider: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: 'Worldwide',
      url: `${site.url}/services/${s.slug}`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${s.title} — what's included`,
        itemListElement: s.features.map(([t]) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faqs.map(([q, a]) => ({
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
            <Link href="/">Home</Link> <span>›</span> <Link href="/services">Services</Link> <span>›</span> <span style={{ color: 'var(--ink)' }}>{s.title}</span>
          </nav>
          <div className="sd-hero">
            <div className="rv rv-l in">
              <div className="eyebrow"><span className="pulse" />{s.title}</div>
              <h1>{s.title.split(' ').slice(0, -1).join(' ')} <span className="grad-txt">{s.title.split(' ').slice(-1)}</span></h1>
              <p className="lede" style={{ marginBottom: 32 }}>{s.hero}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-p">
                  <span>Get a free quote</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/portfolio" className="btn btn-o"><span>See related work</span></Link>
              </div>
            </div>
            <div className="sd-media rv rv-s in" data-tilt>
              <Image src={s.img} alt={`${s.title} — Flowzync`} width={1200} height={900} priority />
              <div className="sd-media-chip">
                <span className={`ndi ic-${s.color}`}><Icon name={s.icon} color={colorHex[s.color]} size={20} /></span>
                <b>{s.title}</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      {d.benefits && (
        <section style={{ paddingTop: 30 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />Benefits</div>
              <h2>Why it <span className="grad-txt">pays off</span></h2>
            </div>
            <div className="bnf-grid">
              {d.benefits.map(([t, x], i) => (
                <div className={`bnf rv ${i % 2 ? 'rv-d1' : ''}`} data-tilt key={t}>
                  <span className="bnf-check">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <h4>{t}</h4>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT'S INCLUDED */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What's included</div>
            <h2>Everything inside <span className="grad-txt">{s.title.toLowerCase()}</span></h2>
          </div>
          <div className="feat-grid">
            {s.features.map(([t, x], i) => (
              <div className={`feat rv ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`} key={t}>
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{t}</h4>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH — service-specific */}
      {d.approach && (
        <section>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />Our approach</div>
              <h2>How we deliver <span className="grad-txt">{s.title.toLowerCase()}</span></h2>
            </div>
            <div className="apr-grid">
              {d.approach.map(([t, x], i) => (
                <div className={`apr rv ${i % 4 === 1 ? 'rv-d1' : i % 4 === 2 ? 'rv-d2' : i % 4 === 3 ? 'rv-d3' : ''}`} key={t}>
                  <span className="apr-num grad-txt">{String(i + 1).padStart(2, '0')}</span>
                  <div className="apr-line" />
                  <h4>{t}</h4>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY US — dark band */}
      {d.whyUs && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="why-band rv rv-s">
              <div className="sec-head" style={{ marginBottom: 36 }}>
                <div className="eyebrow eyebrow-dark"><span className="pulse" />Why Flowzync</div>
                <h2 style={{ color: '#fff' }}>Why teams choose us <span className="grad-txt">for this</span></h2>
              </div>
              <div className="why-grid">
                {d.whyUs.map(([t, x], i) => (
                  <div className="why-card" key={t}>
                    <span className="why-idx">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{t}</h4>
                    <p>{x}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TECHNOLOGIES + INDUSTRIES — sliding bars */}
      {(d.tech || d.industries) && (
        <section style={{ paddingTop: 0, overflow: 'hidden' }}>
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="eyebrow"><span className="pulse" />Stack &amp; sectors</div>
              <h2>Tools we build with. <span className="grad-txt">Industries we serve.</span></h2>
            </div>
          </div>
          {d.tech && (
            <>
              <div className="mq-label rv"><span>Tools we build with</span></div>
              <div className="marquee mq-pills rv">
                <div className="mq-track">
                  {[0, 1].map((k) => (
                    <span key={k}>{d.tech.map((t) => <span className="pill" key={t}>{t}</span>)}</span>
                  ))}
                </div>
              </div>
            </>
          )}
          {d.industries && (
            <>
              <div className="mq-label rv"><span>Who we serve</span></div>
              <div className="marquee mq-pills rv">
                <div className="mq-track mq-rev">
                  {[0, 1].map((k) => (
                    <span key={k}>{d.industries.map((t) => <span className="pill pill-alt" key={t}>{t}</span>)}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {/* FAQ */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />FAQ</div>
            <h2>{s.title} — <span className="grad-txt">common questions</span></h2>
          </div>
          <FAQ items={s.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title={`Ready to start your ${s.title.toLowerCase()} project?`}
            text="Request a free quote — we'll scope your project and come back with a clear, fixed proposal."
          />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv"><h2 style={{ fontSize: 26 }}>Explore related services</h2></div>
          <div className="svc-grid">
            {services.filter((x) => x.slug !== s.slug).slice(0, 3).map((x) => (
              <Link href={`/services/${x.slug}`} className="svc-card rv" data-tilt key={x.slug}>
                <div className={`svc-ic ic-${x.color}`}><Icon name={x.icon} color={colorHex[x.color]} /></div>
                <h3>{x.title}</h3>
                <p>{x.short}</p>
                <span className="svc-link">View service <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
