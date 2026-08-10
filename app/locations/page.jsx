import Link from 'next/link';
import HeroCanvas from '@/components/HeroCanvas';
import CTABand from '@/components/CTABand';
import { usLocations, ukLocations } from '@/lib/locations';
import { serviceArea, site } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Areas We Cover | Web Design Worldwide — Flowzync' },
  description:
    'Flowzync works with clients worldwide, with dedicated pages for the cities we work in most — New York, Austin, Dallas, Chicago, Miami, Phoenix, London, Manchester and more.',
  alternates: { canonical: `${site.url}/locations` },
};

export default function LocationsPage() {
  return (
    <>
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

      <section>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />United States</div>
            <h2>Web design across <span className="grad-txt">the US</span></h2>
          </div>
          <div className="ind-grid">
            {usLocations.map((l, n) => (
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

          <div className="sec-head rv" style={{ marginTop: 64 }}>
            <div className="eyebrow"><span className="pulse" />United Kingdom</div>
            <h2>Web design across <span className="grad-txt">the UK</span></h2>
          </div>
          <div className="ind-grid">
            {ukLocations.map((l, n) => (
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
      </section>

      {/* FULL COVERAGE — honest, and useful for long-tail search */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Full coverage</div>
            <h2>Everywhere else <span className="grad-txt">we work</span></h2>
            <p>
              We work with clients worldwide. The cities below are simply where we work most often \u2014 if yours isn&apos;t
              listed with its own page yet, we still work there — just get in touch.
            </p>
          </div>
          <div className="loc-cloud rv">
            <h4>United States</h4>
            <p>{serviceArea.usCities.join(' · ')}</p>
            <h4>United Kingdom</h4>
            <p>{serviceArea.ukTowns.join(' · ')}</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
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
