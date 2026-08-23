import Image from 'next/image';
import Link from 'next/link';
import CTABand from '@/components/CTABand';
import Testimonials from '@/components/Testimonials';
import { LogoMark } from '@/components/Logo';
import HeroCanvas from '@/components/HeroCanvas';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph } from '@/lib/meta';

export const metadata = {
  title: 'About Us — The Team Behind Flowzync',
  description: clampDescription(
    'Meet Flowzync: a remote studio of senior designers, developers and automation specialists serving clients worldwide since 2021.'
    ),
  alternates: { canonical: '/about' },
  openGraph: openGraph({
    title: 'About Us — The Team Behind Flowzync',
    description: 'Meet Flowzync: a remote studio of senior designers, developers and automation specialists serving clients worldwide since 2021.',
    url: '/about',
  }),
};

const VALUES = [
  ['Craft over shortcuts', 'We\u2019d rather ship one page we\u2019re proud of than five we\u2019d hide. Every detail gets the time it deserves.', 'M12 21s-7-4.6-9.5-9C.9 8.4 3 5 6.5 5c2 0 3.6 1.1 4.5 2.7C11.9 6.1 13.5 5 15.5 5 19 5 21.1 8.4 21.5 12c-2.5 4.4-9.5 9-9.5 9Z', 'lav'],
  ['Radical transparency', 'Weekly updates, honest timelines, no surprise invoices. You always know exactly where things stand.', 'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z', 'mint'],
  ['Ship, then perfect', 'Launch beats limbo. We get you live with quality, then keep improving with real feedback — not endless drafts.', 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z', 'peach'],
  ['Systems thinking', 'A website is never just pages — it\u2019s design, code and automation working as one machine. We build the machine.', 'm12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5', 'lav'],
];

const TEAM = [
  ['HT', 'Hammad Tahir', 'Founder & CEO', '#14123B', 'Sets the standard every project is measured against, and still reads every brief that comes in.'],
  ['AR', 'Ayaan Raza', 'Automation Lead', '#5B4FE9', 'Turns manual chaos into workflows that never sleep.'],
  ['ZM', 'Zara Malik', 'Design Director', '#06C299', 'Guardian of every pixel that leaves the studio.'],
  ['HK', 'Hamza Khan', 'Senior WordPress Engineer', '#FF9E6D', 'Writes the code page builders wish they could.'],
  ['NS', 'Nadia Shah', 'Shopify & UX Strategist', '#7C6CF5', 'Makes stores people actually enjoy shopping in.'],
];

const TOOLS = ['GoHighLevel', 'WordPress', 'Shopify', 'Figma', 'Next.js', 'Zapier', 'Make.com', 'Klaviyo', 'Stripe', 'Cloudflare', 'ACF Pro', 'Twilio'];

const CLIENTS = ['ScaleDental Co.', 'Lumen Legal', 'Northpeak Gear', 'Brightline Media', 'Harvest & Co.', 'Solstice Wellness', 'Trackline', 'Atlas Property'];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Flowzync',
  url: `${site.url}/about`,
  mainEntity: { '@id': `${site.url}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {/* HERO */}
      <div className="page-hero" style={{ paddingBottom: 40 }}>
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ab-grid">
            <div className="rv rv-l in">
              <div className="eyebrow"><span className="pulse" />About Flowzync</div>
              <h1>The team behind the <span className="grad-txt">systems behind the sites</span></h1>
              <p className="lede" style={{ marginBottom: 30 }}>
                We&apos;re a remote studio of senior designers, developers and automation
                specialists, working with clients worldwide. Since 2021 we&apos;ve
                treated websites the way engineers treat machines:
                every part — design, code, automation — has to work together, or none of it works.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-p">
                  <span>Work with us</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/portfolio" className="btn btn-o"><span>See the work</span></Link>
              </div>
            </div>
            <div className="ab-media rv rv-s in" data-tilt>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1100&q=80&auto=format&fit=crop"
                alt="The Flowzync team collaborating on a project" width={1100} height={825}
              />
              <div className="ab-float abf1" data-plx="0.08"><b className="grad-txt">5+ yrs</b><span>Craft &amp; counting</span></div>
              <div className="ab-float abf2" data-plx="-0.06"><b className="grad-txt">14 experts</b><span>Senior-only team</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section>
        <div className="wrap">
          <div className="counters counters-xl">
            <div className="cnt rv" data-tilt><div className="cnt-ic ic-lav"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#5B4FE9"/></svg></div><b><span data-count="240">0</span><em>+</em></b><span>Projects delivered</span></div>
            <div className="cnt rv rv-d1" data-tilt><div className="cnt-ic ic-mint"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.6-9.5-9C.9 8.4 3 5 6.5 5c2 0 3.6 1.1 4.5 2.7C11.9 6.1 13.5 5 15.5 5 19 5 21.1 8.4 21.5 12c-2.5 4.4-9.5 9-9.5 9Z" fill="#06C299"/></svg></div><b><span data-count="98">0</span><em>%</em></b><span>Clients who stay</span></div>
            <div className="cnt rv rv-d2" data-tilt><div className="cnt-ic ic-peach"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#FF7A3D" strokeWidth="2"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="#FF7A3D" strokeWidth="2"/></svg></div><b>Worldwide</b><span>Where our clients are</span></div>
            <div className="cnt rv rv-d3" data-tilt><div className="cnt-ic ic-lav"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#5B4FE9" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#5B4FE9" strokeWidth="2" strokeLinecap="round"/></svg></div><b><span data-count="2">0</span><em>h</em></b><span>Quote reply time</span></div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Our story</div>
            <h2>From two founders to a <span className="grad-txt">global studio</span></h2>
          </div>
          <div className="story-flow">
            <div className="story-rail" aria-hidden="true" />
            <div className="story rv rv-l"><b className="grad-txt">2021</b><h3>The beginning</h3><p>An automation engineer and a designer keep rescuing the same broken setups — beautiful websites with no follow-up, powerful CRMs nobody configured. They decide the fix is one studio that treats design, code and automation as a single craft. Flowzync is born.</p></div>
            <div className="story rv rv-r"><b className="grad-txt">2022</b><h3>Going remote-first</h3><p>The team grows to six senior specialists across three time zones. Working async forces a discipline that clients still feel today: everything documented, everything visible, no black boxes.</p></div>
            <div className="story rv rv-r"><b className="grad-txt">Today</b><h3>A studio, not an agency</h3><p>Senior specialists working with clients across the world, and the same obsession with every pixel and every workflow we started with. Still no juniors on your project, still no account-manager relay.</p></div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap mv-grid">
          <div className="mv-card mv-mission rv rv-l" data-tilt>
            <span className="mv-mark"><LogoMark variant="white" size={30} /></span>
            <em>Our mission</em>
            <h3>Make every business we touch feel unfairly well-built.</h3>
            <p>Design that earns trust, code that never slows down, and automation that answers before competitors even see the lead — all working as one system.</p>
          </div>
          <div className="mv-card mv-vision rv rv-r" data-tilt>
            <span className="mv-mark mv-mark2">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3.2" stroke="#5B4FE9" strokeWidth="2"/><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" stroke="#5B4FE9" strokeWidth="2"/></svg>
            </span>
            <em>Our vision</em>
            <h3>A web where small teams run like big ones.</h3>
            <p>We believe great systems — not bigger headcount — are how ambitious small businesses compete. We&apos;re building the studio that hands them those systems.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Core values</div>
            <h2>How we <span className="grad-txt">show up</span></h2>
          </div>
          <div className="vals vals-4">
            {VALUES.map(([t, x, path, c], i) => (
              <div className={`val rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : i === 3 ? 'rv-d3' : ''}`} data-tilt key={t}>
                <div className={`vic ic-${c}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d={path} stroke={c === 'lav' ? '#5B4FE9' : c === 'mint' ? '#06C299' : '#FF7A3D'} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/></svg>
                </div>
                <h3>{t}</h3>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />The difference</div>
            <h2>Why clients <span className="grad-txt">choose us</span></h2>
          </div>
          <div className="vs-grid">
            <div className="vs-col vs-them rv rv-l">
              <h3>Typical agency</h3>
              <ul>
                <li>Recycled templates with your logo swapped in</li>
                <li>Junior staff learning on your project</li>
                <li>Automation &quot;available as an add-on later&quot;</li>
                <li>SEO means installing a plugin</li>
                <li>Long silences between updates</li>
                <li>Launch, invoice, disappear</li>
              </ul>
            </div>
            <div className="vs-col vs-us rv rv-r" data-tilt>
              <h3><LogoMark variant="white" size={26} /> Flowzync</h3>
              <ul>
                <li>Every design crafted from a blank canvas</li>
                <li>Senior-only team — you work with the builders</li>
                <li>Automation designed in from day one</li>
                <li>SEO architecture built into every page</li>
                <li>Weekly updates you can actually read</li>
                <li>Care plans and a team one message away</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />The team</div>
            <h2>Small team. <span className="grad-txt">Senior only.</span></h2>
            <p>No juniors learning on your project, no account-manager relay. You work directly with the people doing the work.</p>
          </div>
          <div className="team-grid">
            {TEAM.map(([ini, name, role, bg, bio], i) => (
              <div className={`tm rv ${i === 1 ? 'rv-d1' : i === 2 ? 'rv-d2' : i === 3 ? 'rv-d3' : ''}`} data-tilt key={name}>
                <div className="avatar" style={{ background: bg }}>{ini}</div>
                <b>{name}</b><span>{role}</span>
                <p className="tm-bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CLIENTS SAY — placed straight after the team, because the
          reader has just been told who we are and this is the evidence. */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />In their words</div>
            <h2>What it&apos;s like <span className="grad-txt">working with us</span></h2>
            <p>
              Trimmed for length, otherwise as they were sent. We have left in the
              projects that ran late and the week someone felt out of the loop —
              a wall of unbroken praise tells you nothing useful.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CLIENTS + TOOLS */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Trusted by</div>
            <h2>Companies &amp; tools <span className="grad-txt">we work with</span></h2>
          </div>
        </div>
        <div className="mq-label rv"><span>Companies we work with</span></div>
        <div className="marquee rv">
          <div className="mq-track">
            {[0, 1].map((k) => (
              <span key={k}>{CLIENTS.map((c) => <span key={c}>{c}</span>)}</span>
            ))}
          </div>
        </div>
        <div className="mq-label rv"><span>Technologies &amp; tools</span></div>
        <div className="marquee mq-pills rv">
          <div className="mq-track mq-rev">
            {[0, 1].map((k) => (
              <span key={k}>{TOOLS.map((t) => <span className="pill pill-alt" key={t}>{t}</span>)}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 56 }}>
        <div className="wrap">
          <CTABand
            title="Sound like a team you'd enjoy working with?"
            text="Request a free quote — friendly, useful and clear. You'll get a much sharper picture of your project."
          />
        </div>
      </section>
    </>
  );
}
