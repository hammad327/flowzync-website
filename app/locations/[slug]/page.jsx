import Link from 'next/link';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { locations, getLocation } from '@/lib/locations';
import { getService } from '@/lib/services';
import { industries } from '@/lib/industries';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const l = getLocation(params.slug);
  if (!l) return {};
  return {
    title: { absolute: l.seoTitle },
    description: l.seoDescription,
    keywords: l.keywords,
    alternates: { canonical: `${site.url}/locations/${l.slug}` },
    openGraph: {
      title: l.seoTitle,
      description: l.seoDescription,
      url: `${site.url}/locations/${l.slug}`,
    },
  };
}

export default function LocationPage({ params }) {
  const l = getLocation(params.slug);
  if (!l) notFound();

  const related = (l.related || []).map(getService).filter(Boolean);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: `${site.url}/locations` },
        { '@type': 'ListItem', position: 3, name: l.title, item: `${site.url}/locations/${l.slug}` },
      ],
    },
    {
      // Service + areaServed, NOT LocalBusiness. This page says we
      // serve this city; it never claims we are located in it.
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Web design in ${l.city}`,
      description: l.seoDescription,
      serviceType: 'Website design and development',
      provider: { '@type': 'Organization', '@id': `${site.url}/#organization`, name: site.name, url: site.url },
      areaServed: { '@type': 'City', name: l.city, containedInPlace: { '@type': 'AdministrativeArea', name: l.region } },
      url: `${site.url}/locations/${l.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: l.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-hero" style={{ paddingBottom: 40 }}>
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/locations">Locations</Link> <span>›</span>{' '}
            <span style={{ color: 'var(--ink)' }}>{l.city}</span>
          </nav>
          <div className="eyebrow"><span className="pulse" />{l.region}</div>
          <h1 style={{ maxWidth: 820 }}>Web design in <span className="grad-txt">{l.city}</span></h1>
          <p className="lede" style={{ marginBottom: 30, maxWidth: 760 }}>{l.intro}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-p">
              <span>Get a fixed quote</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/portfolio" className="btn btn-o"><span>See our work</span></Link>
          </div>
        </div>
      </div>

      {/* WHAT'S DIFFERENT ABOUT THIS MARKET */}
      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />The local picture</div>
            <h2>Working with <span className="grad-txt">{l.city} businesses</span></h2>
          </div>
          <div className="feat-grid">
            {l.context.map(([t, x], n) => (
              <div className={`feat rv ${n % 3 === 1 ? 'rv-d1' : n % 3 === 2 ? 'rv-d2' : ''}`} key={t}>
                <div className="num">{String(n + 1).padStart(2, '0')}</div>
                <h4>{t}</h4>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST LOCATION NOTE — this is a trust asset, not a disclaimer */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="loc-note rv">
            <div className="loc-note-ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h3>Where we actually are</h3>
              <p>
                Flowzync is based in {site.business.city}, Pakistan. We work with {l.city} clients
                remotely, covering UK business hours, and we say so on every page rather than
                implying a local office. It is the honest reason our quotes compare well with a
                {' '}{l.city} agency — and everything else, from design reviews to handover,
                happens exactly as it would with a studio down the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {related.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />What we do here</div>
              <h2>Most requested in <span className="grad-txt">{l.city}</span></h2>
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

      {/* INDUSTRIES — cross-link the two page families */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />By trade</div>
            <h2>Built around <span className="grad-txt">your industry</span></h2>
          </div>
          <div className="ind-mini">
            {industries.map((i) => (
              <Link href={`/industries/${i.slug}`} key={i.slug} className="ind-minicard rv">
                <b>{i.title}</b>
                <span>{i.trade}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />FAQ</div>
            <h2>{l.city} clients <span className="grad-txt">ask us this</span></h2>
          </div>
          <FAQ items={l.faqs} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Elsewhere in the UK</div>
            <h2>We also work <span className="grad-txt">with these cities</span></h2>
          </div>
          <div className="ind-mini">
            {locations.filter((o) => o.slug !== l.slug).map((o) => (
              <Link href={`/locations/${o.slug}`} key={o.slug} className="ind-minicard rv">
                <b>{o.city}</b>
                <span>{o.region}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title={`Need a website for your ${l.city} business?`}
            text="Tell us what you do and who you serve — we'll map the pages you need and send a fixed, itemised quote."
          />
        </div>
      </section>
    </>
  );
}
