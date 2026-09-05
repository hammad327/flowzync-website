import Link from 'next/link';
import { pageFaqs, faqSchema } from '@/lib/pageFaqs';
import HeroCanvas from '@/components/HeroCanvas';
import CTABand from '@/components/CTABand';
import { locationsByCountry, locations } from '@/lib/locations';
import { coverageGroups, site, serviceArea } from '@/lib/site';
import { clampTitle, clampDescription } from '@/lib/meta';

export const metadata = {
  title: { absolute: clampTitle('Areas We Cover | Web Design Worldwide — Flowzync') },
  description: clampDescription(
    'Flowzync works with clients worldwide — the US, UK, Canada, Australia, Ireland, New Zealand and the UAE — with a dedicated page for each city we work in most.'
    ),
  alternates: { canonical: `${site.url}/locations` },
};

// CollectionPage + ItemList for the city pages, plus an explicit
// areaServed list. The areaServed matters more here than anywhere:
// it is the machine-readable answer to "do they work in my country",
// which the prose alone leaves an assistant to infer.
const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${site.url}/locations#collection`,
  name: 'Areas we cover',
  url: `${site.url}/locations`,
  isPartOf: { '@id': `${site.url}/#website` },
  about: { '@id': `${site.url}/#organization` },
  description:
    'Flowzync is a remote studio working with clients worldwide. These pages describe the markets we work in most often — they are not office locations.',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: locations.length,
    itemListElement: locations.map((l, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      name: `Web design in ${l.city}`,
      url: `${site.url}/locations/${l.slug}`,
    })),
  },
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema('locations')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Areas we cover</div>
          <h1 style={{ marginInline: 'auto' }}>Working with clients <span className="grad-txt">worldwide</span></h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            We&apos;re a remote studio and our clients are all over the world. Below are the
            places we work in most often — each with a note on what that market actually
            looks like.
          </p>
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          {/* One block per country, generated from lib/locations.js.
              Adding a country there is all it takes to have it appear
              here — nothing on this page is hardcoded to US and UK. */}
          {locationsByCountry.map((group, gi) => (
            <div key={group.code}>
              <div className="sec-head rv" style={gi > 0 ? { marginTop: 64 } : undefined}>
                <div className="eyebrow"><span className="pulse" />{group.name}</div>
                <h2>Web design across <span className="grad-txt">{group.name}</span></h2>
              </div>
              <div className="ind-grid">
                {group.items.map((l, n) => (
                  <Link href={`/locations/${l.slug}`} key={l.slug} className={`loc-card rv ${n % 2 ? 'rv-d1' : ''}`} data-tilt>
                    <span className="ind-tag">{l.region}</span>
                    <h3>{l.city}</h3>
                    <p>{l.intro.split('. ').slice(0, 2).join('. ')}.</p>
                    <span className="svc-link">
                      Web design in {l.city}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL COVERAGE — honest, and useful for long-tail search */}
      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Full coverage</div>
            <h2>Everywhere else <span className="grad-txt">we work</span></h2>
            <p>
              We take on work anywhere in the world. The places below are simply where we
              have worked most often, so they are the ones we can say something useful about.
              If your town isn&apos;t here, it is not a limit — get in touch and we&apos;ll quote it
              like any other project.
            </p>
          </div>
          <div className="loc-cloud rv">
            {coverageGroups.map((c) => (
              <div key={c.country}>
                <h3>{c.country}</h3>
                <p>{c.places.join(' · ')}</p>
              </div>
            ))}
            <p className="loc-cloud-note">
              …and everywhere else. We work across every time zone, quote in your currency
              and run projects in a shared space, so distance changes the schedule of a call
              and nothing else.
            </p>
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
            {pageFaqs.locations.map(([q, a]) => (
              <details className="faq-static" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tint">
        <div className="wrap">
          <CTABand
            title="Not sure if we cover your area?"
            text="We work remotely with clients worldwide. Tell us where you are and what you need — we'll come back with a fixed quote."
          />
        </div>
      </section>
    </>
  );
}
