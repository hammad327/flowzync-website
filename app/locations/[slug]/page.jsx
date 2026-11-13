import Image from 'next/image';
import styles from './location.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import { locations, getLocation } from '@/lib/locations';
import { getService } from '@/lib/services';
import { industries } from '@/lib/industries';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const l = getLocation(params.slug);
  if (!l) return {};
  return {
    title: { absolute: clampTitle(l.seoTitle) },
    description: clampDescription(l.seoDescription),
    keywords: l.keywords,
    alternates: { canonical: `${site.url}/locations/${l.slug}` },
    openGraph: openGraph({
      title: l.seoTitle,
      description: l.seoDescription,
      url: `${site.url}/locations/${l.slug}`,
    }),
    twitter: twitterCard({ title: l.seoTitle, description: l.seoDescription }),
  };
}

export default function LocationPage({ params }) {
  const l = getLocation(params.slug);
  if (!l) notFound();

  const portfolio = l.showcase || (l.related.includes('woocommerce-development') ? 'roller-shutters-online' : '5-star-quality-hvac');
  const project = projects.find((item) => item.slug === portfolio);
  const related = (l.related || []).map(getService).filter(Boolean);

  // At least eight onward city links, same country first. The top-up
  // walks the list starting from this city's own position rather than
  // from the beginning, so the extra links are spread across every
  // location instead of all pointing at the same first few.
  const sameCountry = locations.filter((o) => o.slug !== l.slug && o.country === l.country);
  const start = locations.findIndex((o) => o.slug === l.slug);
  const rotated = locations.slice(start + 1).concat(locations.slice(0, start));
  const nearby = [...sameCountry];
  for (const o of rotated) {
    if (nearby.length >= 8) break;
    if (!nearby.some((x) => x.slug === o.slug)) nearby.push(o);
  }

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
      description: clampDescription(l.seoDescription),
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

      <div className={styles.hero}>
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/locations">Areas we cover</Link> <span>›</span> <span>{l.city}</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <div className="eyebrow">{l.region} · Remote studio</div>
              <h1>Web design in <span className="grad-txt">{l.city}</span></h1>
              <p className="lede">{l.intro}</p>
              <div className={styles.actions}>
                <Link href="/contact" className="btn btn-p">Discuss your project <span aria-hidden="true">→</span></Link>
                <Link href="/portfolio" className="btn btn-o">View portfolio</Link>
              </div>
            </div>
            {project && <Link href={`/portfolio/${project.slug}`} className={styles.showcase}>
              <Image src={project.img} alt="" width={840} height={520} sizes="(max-width: 760px) 100vw, 45vw" priority />
              <div><small>Selected Flowzync work</small><strong>{project.title}</strong><span>See the project →</span></div>
            </Link>}
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
                <h3>{t}</h3>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="wrap">
          <h2>From brief to launch</h2>
          <div className={styles.steps}>
            <div><h3>Agree the scope</h3><p>We map your pages, integrations and priorities before quoting.</p></div>
            <div><h3>Review the design</h3><p>See the pages before development and give feedback in shared reviews.</p></div>
            <div><h3>Launch with a handover</h3><p>We test the site and walk your team through everyday edits.</p></div>
          </div>
          <Link href="/resources/website-project-brief">Use the free website project brief →</Link>
        </div>
      </section>

      {/* SERVICES */}
      {related.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />What we do here</div>
              <h2>Website services for <span className="grad-txt">{l.city}</span></h2>
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
            <div className="eyebrow"><span className="pulse" />Elsewhere</div>
            <h2>We also work <span className="grad-txt">with these cities</span></h2>
          </div>
          <div className="ind-mini">
            {/* Same country first, then topped up from elsewhere. Cities
                that are the only one in their country — Dubai, Cape Town,
                Christchurch — otherwise ended up with a single internal
                link and sat in "Discovered – currently not indexed". */}
            {nearby.slice(0, 8).map((o) => (
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
            text="Tell us what you do and who you serve — we'll map the pages you need and send an itemised quote."
          />
        </div>
      </section>
    </>
  );
}
