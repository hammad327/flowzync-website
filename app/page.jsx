import Link from 'next/link';
import Image from 'next/image';
import BlogCover from '@/components/BlogCover';
import Typer from '@/components/Typer';
import HeroCanvas from '@/components/HeroCanvas';
import HeroFlow from '@/components/HeroFlow';
import ProcessFlow from '@/components/ProcessFlow';
import FAQ from '@/components/FAQ';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTABand from '@/components/CTABand';
import { services } from '@/lib/services';
import { getAllPosts } from '@/lib/posts';
import { Icon, colorHex } from '@/components/Icons';
import { site } from '@/lib/site';
import { industries } from '@/lib/industries';
import { clampTitle, clampDescription } from '@/lib/meta';
import { hreflangFor } from '@/lib/locales';
import Testimonials from '@/components/Testimonials';

const homeFaqs = [
  ['What does Flowzync actually do?', 'We are a full-stack digital studio: custom website design, landing pages, GoHighLevel funnels and CRM setup, WordPress and Shopify development, business automation, SEO and ongoing care. One team, one connected system — instead of five disconnected freelancers.'],
  ['How do we get started?', 'Request a free quote on the Contact page (or just ask Zync, the chat assistant, bottom-right). We\u2019ll review it, map your project, suggest the leanest path and send a clear proposal — no pressure, no obligation.'],
  ['Do you work with clients internationally?', 'Yes \u2014 we are a remote studio and our clients are worldwide. We work across time zones, schedule calls in your working hours, quote in your currency, and run every project through a shared project space so you always know exactly where things stand. There is no office to visit, which is part of why our pricing compares well to a local agency.'],
  ['What makes you different from other agencies?', 'Three things: everything is custom (no recycled templates), automation is designed in from day one (not bolted on later), and every build ships SEO-ready. You also work directly with senior specialists — no account-manager relay.'],
  ['Can you improve my existing website instead of rebuilding?', 'Often, yes. We offer audits, speed optimisation, SEO fixes and design refreshes. If a rebuild genuinely is the better investment, we\u2019ll show you exactly why before you decide.'],
  ['Do you offer support after launch?', 'Always. Every project includes a support window, and our monthly care plans cover updates, security, backups and content edits — handled by the same team who built your site.'],
];

export const metadata = {
  title: { absolute: 'Flowzync — Custom Websites, Funnels & Automation' },
  description: clampDescription(
    'Flowzync designs and builds custom websites, WordPress and Elementor sites, WooCommerce stores, GoHighLevel funnels and business automation — with SEO built in from day one.'
    ),
  alternates: {
    canonical: '/',
    // Every version must list every version including itself, or Google
    // ignores the cluster. x-default is English.
    languages: hreflangFor(site.url, '/'),
  },
};

// FAQPage schema on the homepage: this is the block Google AI Overview
// and AI assistants read when someone asks what the company does.
const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};


export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />

      {/* HERO */}
      <header className="hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.12" /><div className="orb orb2" data-plx="-0.08" /><div className="orb orb3" data-plx="0.05" />
        <div className="hero-grid-bg" />
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow"><span className="pulse" />Automation-first digital studio</div>
            <h1>
              <span className="line"><i>We craft dream</i></span>
              <span className="line"><i>websites <span className="grad-txt">powered by</span></i></span>
              <span className="line"><i><Typer words={['automation', 'GHL funnels', 'WordPress', 'Shopify', 'great design']} /></i></span>
            </h1>
            <p className="hero-sub">
              Custom websites, landing pages, funnels and stores — designed from a blank canvas,
              built to be found in search, and wired with automation so no enquiry is ever left sitting.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-p">
                <span>Start your project</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/portfolio" className="btn btn-o"><span>See our work</span></Link>
            </div>
            <div className="hero-stats">
              <div className="hstat"><div className="n"><span data-count="240">0</span><em>+</em></div><div className="l">Projects delivered</div></div>
              <div className="hstat"><div className="n"><span data-count="98">0</span><em>%</em></div><div className="l">Clients who stay</div></div>
              <div className="hstat"><div className="n">Worldwide</div><div className="l">Where our clients are</div></div>
            </div>
          </div>
          <HeroFlow />
        </div>
        <div className="hero-scrollcue" aria-hidden="true"><span /></div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="mq-track">
          {[0, 1].map((k) => (
            <span key={k}>
              <span>GoHighLevel</span><span>WordPress</span><span>Shopify</span><span>Figma</span><span>Zapier</span><span>Klaviyo</span><span>Make.com</span><span>Stripe</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="sec-tint">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />What we do</div>
            <h2>Every service your website <span className="grad-txt">will ever need</span></h2>
            <p>Design, development, funnels, automation, SEO and care — under one roof, speaking one language.</p>
          </div>
          <div className="svc-grid">
            {services.slice(0, 9).map((s, i) => (
              <Link href={`/services/${s.slug}`} className={`svc-card rv ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`} data-tilt key={s.slug}>
                <div className={`svc-ic ic-${s.color}`}><Icon name={s.icon} color={colorHex[s.color]} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="svc-link">
                  Explore service
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }} className="rv">
            <Link href="/services" className="btn btn-o">
              <span>View all {services.length} services</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS — dark band. Sits directly above the Blueprint so
          the page has a strong tonal break before the process section,
          and gives the industry links a home now that the industries
          band is gone. */}
      <section className="sec-dark">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Why it works</div>
            <h2>One team, one system, <span className="grad-txt">no handoffs</span></h2>
            <p>
              Most agencies split design, build and automation across three suppliers who
              never speak. Everything here is designed together from the first sketch,
              which is why the parts actually fit.
            </p>
          </div>
          <div className="why-grid rv">
            {[
              ['Designed together', 'The person designing the page knows what the automation behind it has to do, so nothing gets bolted on afterwards.'],
              ['Built to be edited', 'You get a site your own team can change without a developer. If you need us to change a price, we built it wrong.'],
              ['SEO from the first page', 'Structure, schema and speed are part of the build, not a retrofit six months later when nothing ranks.'],
              ['Fixed, itemised quotes', 'Scope written down and priced before work starts. No hourly billing and no variation the first time you change your mind.'],
            ].map(([t, d]) => (
              <div className="why-item" key={t}>
                <span className="why-dot" aria-hidden="true" />
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-links">
            <span>Built for</span>
            {industries.slice(0, 8).map((i) => (
              <Link href={`/industries/${i.slug}`} key={i.slug}>{i.trade}</Link>
            ))}
            <Link href="/industries" className="why-all">All industries →</Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />How we work</div>
            <h2>The Flowzync <span className="grad-txt">Blueprint</span></h2>
            <p>No mystery, no black box. Six phases between “hello” and launch day — each one ending with something concrete in your hands.</p>
          </div>
          <ProcessFlow />
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="sec-tint">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Featured work</div>
            <h2>Dream websites we've <span className="grad-txt">already built</span></h2>
          </div>
          <PortfolioGrid limit={4} />
          <div style={{ textAlign: 'center', marginTop: 44 }} className="rv">
            <Link href="/portfolio" className="btn btn-o">
              <span>View full portfolio</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Kind words</div>
            <h2>Clients who got their <span className="grad-txt">dream website</span></h2>
            <p style={{ marginInline: 'auto' }}>
              Unedited, apart from trimming for length. The awkward bits are left in —
              a page of nothing but praise tells you nothing.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* LATEST POSTS */}
      {posts.length > 0 && (
        <section className="sec-tint">
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />From the blog</div>
              <h2>Fresh thinking, <span className="grad-txt">published often</span></h2>
            </div>
            <div className="blog-grid">
              {posts.map((p, i) => (
                <Link href={`/blog/${p.slug}`} className={`post-card rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''}`} key={p.slug}>
                  <div className="post-thumb">
                    <BlogCover
                      photo={p.photo}
                      fallback={p.cover}
                      alt={p.title}
                      width={600}
                      height={380}
                      sizes="(max-width:680px) 100vw, 33vw"
                    />
                    <span className="post-cat">{p.category}</span>
                  </div>
                  <div className="post-body">
                    <div className="post-meta"><span>{new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span><span>{p.readTime} min read</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <span className="post-more">Read article <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />FAQ</div>
            <h2>Questions we hear <span className="grad-txt">every week</span></h2>
          </div>
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title="Ready to build your dream website?"
            text="Request a free quote — we'll review your project, show you what's possible and come back with a clear plan."
          />
        </div>
      </section>
    </>
  );
}
