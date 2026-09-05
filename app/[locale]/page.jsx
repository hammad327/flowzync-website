import Link from 'next/link';
import { notFound } from 'next/navigation';
import HeroCanvas from '@/components/HeroCanvas';
import { locales, getLocale, localeCodes, hreflangFor } from '@/lib/locales';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const l = getLocale(params.locale);
  if (!l) return {};
  return {
    title: { absolute: clampTitle(l.title) },
    description: clampDescription(l.description),
    alternates: {
      canonical: `${site.url}/${l.code}`,
      languages: hreflangFor(site.url, '/'),
    },
    openGraph: openGraph({
      title: l.title,
      description: l.description,
      url: `${site.url}/${l.code}`,
      locale: l.code,
    }),
    twitter: twitterCard({ title: l.title, description: l.description }),
  };
}

export default function LocalePage({ params }) {
  const l = getLocale(params.locale);
  if (!l) notFound();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${site.url}/${l.code}#page`,
      name: l.title,
      url: `${site.url}/${l.code}`,
      description: l.description,
      inLanguage: l.hreflang,
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: l.hreflang,
      mainEntity: l.faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  return (
    // lang and dir are set here rather than on <html> because the root
    // layout is shared. Screen readers and Google both honour it at this
    // level, and it is what makes the Arabic page actually right-to-left.
    <div lang={l.hreflang} dir={l.dir} className={l.dir === 'rtl' ? 'rtl-page' : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />{l.name}</div>
          <h1 style={{ marginInline: 'auto' }}>{l.heading}</h1>
          <p className="lede" style={{ marginInline: 'auto' }}>{l.lede}</p>
          <div style={{ marginTop: 26 }}>
            <Link href="/contact" className="btn btn-p">
              <span>{l.cta}</span>
            </Link>
          </div>
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          <div className="loc-sections">
            {l.sections.map(([h, body]) => (
              <div className="loc-section" key={h}>
                <h2>{h}</h2>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-dark">
        <div className="wrap">
          <div className="sec-head center rv">
            <h2>{l.extra[0]}</h2>
            <p>{l.extra[1]}</p>
          </div>
          <div className="locale-services">
            <span>{l.servicesLabel}</span>
            {l.services.map((sv) => <em key={sv}>{sv}</em>)}
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="faq-list">
            {l.faqs.map(([q, a]) => (
              <details className="faq-static" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>

          <div className="locale-contact">
            <p>
              {l.contactLead}{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="locale-note">{l.ctaNote}</p>
            <Link href="/contact" className="btn btn-p" style={{ marginTop: 18 }}>
              <span>{l.cta}</span>
            </Link>
          </div>

          {/* Every language version links to every other, and back to
              English. Without these the hreflang cluster has no visible
              counterpart and the pages read as orphaned. */}
          <div className="locale-switch">
            {locales.filter((o) => o.code !== l.code).map((o) => (
              <Link href={`/${o.code}`} key={o.code} lang={o.hreflang}>{o.name}</Link>
            ))}
            <Link href="/" className="locale-en">{l.backToEnglish}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
