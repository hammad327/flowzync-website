import Link from 'next/link';
import Image from 'next/image';
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

const homeFaqs = [
  ['What does Flowzync actually do?', 'We are a full-stack digital studio: custom website design, landing pages, GoHighLevel funnels and CRM setup, WordPress and Shopify development, business automation, SEO and ongoing care. One team, one connected system — instead of five disconnected freelancers.'],
  ['How do we get started?', 'Request a free quote on the Contact page (or just ask Zync, the chat assistant, bottom-right). We\u2019ll review it, map your project, suggest the leanest path and send a clear proposal — no pressure, no obligation.'],
  ['Where are you based, and do you work with US and UK clients?', 'We are a remote studio and the majority of our clients are in the United States and United Kingdom. We cover US and UK business hours, quote in your currency, and run every project through a shared project space so you always know exactly where things stand. There is no office to visit \u2014 which is part of why our pricing compares well to a local agency.'],
  ['What makes you different from other agencies?', 'Three things: everything is custom (no recycled templates), automation is designed in from day one (not bolted on later), and every build ships SEO-ready. You also work directly with senior specialists — no account-manager relay.'],
  ['Can you improve my existing website instead of rebuilding?', 'Often, yes. We offer audits, speed optimisation, SEO fixes and design refreshes. If a rebuild genuinely is the better investment, we\u2019ll show you exactly why before you decide.'],
  ['Do you offer support after launch?', 'Always. Every project includes a support window, and our monthly care plans cover updates, security, backups and content edits — handled by the same team who built your site.'],
];

export const metadata = {
  title: 'Flowzync — Custom Websites, WordPress, Funnels & Automation Studio',
  description:
    'Flowzync designs and builds custom websites, WordPress and Elementor sites, WooCommerce stores, GoHighLevel funnels and business automation — with SEO built in from day one.',
  alternates: { canonical: site.url },
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
              <div className="hstat"><div className="n">US<em>/UK</em></div><div className="l">Where our clients are</div></div>
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
      <section>
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

      {/* HOW WE WORK */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
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
      <section>
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

      {/* INDUSTRIES — internal links to the niche pages */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Industries</div>
            <h2>Built around <span className="grad-txt">your trade</span></h2>
            <p>A plumber and a dental clinic need very different websites. Here is what changes.</p>
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

      {/* TESTIMONIALS */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Kind words</div>
            <h2>Clients who got their <span className="grad-txt">dream website</span></h2>
          </div>
          <div className="tst-grid">
            <div className="tst rv" data-tilt>
              <div className="stars">★★★★★</div>
              <p>"They didn't just build what we asked for — they built what we were trying to describe. The site feels exactly like our brand, and the whole process was calm and clear."</p>
              <div className="tst-who"><div className="avatar" style={{ background: '#5B4FE9' }}>MK</div><div><b>Marcus Kane</b><span>Founder, ScaleDental Co.</span></div></div>
            </div>
            <div className="tst rv rv-d1" data-tilt>
              <div className="stars">★★★★★</div>
              <p>"Our old WordPress site embarrassed us. The new one loads instantly, looks premium and finally represents the quality of our work. Worth every step of the process."</p>
              <div className="tst-who"><div className="avatar" style={{ background: '#06C299' }}>SR</div><div><b>Sofia Reyes</b><span>Partner, Lumen Legal</span></div></div>
            </div>
            <div className="tst rv rv-d2" data-tilt>
              <div className="stars">★★★★★</div>
              <p>"The Shopify redesign felt like getting a new business. Shopping the store is a pleasure now — customers tell us that in reviews, unprompted."</p>
              <div className="tst-who"><div className="avatar" style={{ background: '#FF9E6D' }}>DA</div><div><b>Daniel Aoki</b><span>Owner, Northpeak Gear</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      {posts.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="eyebrow"><span className="pulse" />From the blog</div>
              <h2>Fresh thinking, <span className="grad-txt">published often</span></h2>
            </div>
            <div className="blog-grid">
              {posts.map((p, i) => (
                <Link href={`/blog/${p.slug}`} className={`post-card rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : ''}`} key={p.slug}>
                  <div className="post-thumb">
                    {p.cover && <Image src={p.cover} alt={p.title} width={600} height={380} />}
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
      <section style={{ paddingTop: 0 }}>
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
