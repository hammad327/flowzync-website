import Link from 'next/link';
import Image from 'next/image';
import HeroCanvas from '@/components/HeroCanvas';
import CTABand from '@/components/CTABand';
import { industries } from '@/lib/industries';
import { site } from '@/lib/site';

export const metadata = {
  title: { absolute: 'Industry Website Design | Websites Built Per Trade — Flowzync' },
  description:
    'Website design built around one industry at a time — plumbers, dental clinics, leak detection specialists and local businesses. Each site built for how that trade actually gets found.',
  alternates: { canonical: `${site.url}/industries` },
};

export default function IndustriesPage() {
  return (
    <>
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Industries</div>
          <h1 style={{ marginInline: 'auto' }}>Built for <span className="grad-txt">your trade</span></h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            A plumber and a dental clinic need very different websites. These pages set out
            what each industry actually needs — and what we build differently for it.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
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
              Your trade not listed? We build for it too — tell us what you do.
            </p>
            <Link href="/contact" className="btn btn-o"><span>Ask about your industry</span></Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
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
