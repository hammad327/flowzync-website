import Link from 'next/link';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { team, teamSchema } from '@/lib/team';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

const TITLE = 'Our Team — The People Who Build Your Project';
const DESC =
  'Meet the senior designers, developers and automation specialists at Flowzync. No juniors on your project, no account-manager relay — you work with the people doing the work.';

export const metadata = {
  title: { absolute: clampTitle(TITLE) },
  description: clampDescription(DESC),
  alternates: { canonical: `${site.url}/about/team` },
  openGraph: openGraph({ title: TITLE, description: DESC, url: `${site.url}/about/team` }),
  twitter: twitterCard({ title: TITLE, description: DESC }),
};

const FAQS = [
  ['Who will actually work on my project?', 'The people on this page. Flowzync is a senior-only studio, so the designer and developer you meet at the start are the ones building it — there are no juniors learning on your project and no account manager relaying messages between you and whoever is really doing the work.'],
  ['How big is the team?', 'Deliberately small. Five senior specialists covering design, WordPress and WooCommerce development, automation and CRM, and UX. We would rather turn work down than take it on with people who are not ready for it.'],
  ['Can I speak to the person building my site?', 'Yes, directly. Most questions get a faster and better answer from the person who wrote the code than from someone summarising it, so we do not put a layer in between.'],
  ['Where is the team based?', 'Flowzync is a remote studio working across time zones, with the business registered in Lahore, Pakistan. We schedule calls in your working hours and we say this plainly rather than implying a local office — it is also the honest reason our quotes compare well with a local agency.'],
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${site.url}/about/team#page`,
    name: TITLE,
    url: `${site.url}/about/team`,
    description: DESC,
    isPartOf: { '@id': `${site.url}/#website` },
    // Valid because every person below is visible on this page. Person
    // markup for people who appear nowhere on screen breaks Google's
    // structured-data guidelines.
    about: { '@id': `${site.url}/#organization` },
    mainEntity: teamSchema(site.url),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/about` },
      { '@type': 'ListItem', position: 3, name: 'Team', item: `${site.url}/about/team` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(([q, a]) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  },
];

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: 'center' }}>
            <Link href="/">Home</Link> <span>›</span>{' '}
            <Link href="/about">About</Link> <span>›</span>{' '}
            <span style={{ color: 'var(--ink)' }}>Team</span>
          </nav>
          <div className="eyebrow"><span className="pulse" />The team</div>
          <h1 style={{ marginInline: 'auto' }}>Small team. <span className="grad-txt">Senior only.</span></h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            No juniors learning on your project, no account-manager relay. You work
            directly with the people doing the work.
          </p>
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          <div className="team-grid">
            {team.map((m, i) => (
              <div className={`tm rv ${['', 'rv-d1', 'rv-d2', 'rv-d3'][i % 4]}`} key={m.name}>
                <div className="avatar" style={{ background: m.colour }} aria-hidden="true">{m.initials}</div>
                <b>{m.name}</b><span>{m.role}</span>
                <p className="tm-bio">{m.bio}</p>
                <div className="tm-knows">
                  {m.knows.map((k) => <span key={k}>{k}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-dark">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />How we hire</div>
            <h2>Why the team stays <span className="grad-txt">small</span></h2>
            <p>
              Growing an agency usually means hiring juniors and putting an account
              manager between them and the client. It scales revenue and it quietly
              lowers the quality of the work, because the person you spoke to is no
              longer the person building your project.
            </p>
            <p>
              We took the other route. Every person here is senior in their own
              discipline and works directly with clients, which caps how much work we
              can take at once — so we turn projects down rather than staff them
              badly. If we are booked, we will tell you that instead of starting late
              and hoping you do not notice.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Questions</div>
            <h2>Working with <span className="grad-txt">this team</span></h2>
          </div>
          <div className="faq-list">
            {FAQS.map(([q, a]) => (
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
            title="Want to talk to one of them?"
            text="Tell us about your project and you'll hear back from the person who would actually build it."
          />
        </div>
      </section>
    </>
  );
}
