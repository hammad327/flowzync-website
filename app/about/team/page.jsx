import Link from 'next/link';
import CTABand from '@/components/CTABand';
import { team } from '@/lib/team';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

const TITLE = 'Our Team — The People Who Build Your Project';
const DESC =
  'Explore how design, WordPress development, CRM strategy and automation responsibilities come together on a Flowzync project.';

export const metadata = {
  title: { absolute: clampTitle(TITLE) },
  description: clampDescription(DESC),
  alternates: { canonical: `${site.url}/about/team` },
  openGraph: openGraph({ title: TITLE, description: DESC, url: `${site.url}/about/team` }),
  twitter: twitterCard({ title: TITLE, description: DESC }),
};

const FAQS = [
  ['Who will actually work on my project?', 'The project proposal identifies the responsibilities and contact arrangement for your build. You can discuss design, development and automation requirements directly with the studio before agreeing the scope.'],
  ['How big is the team?', 'We organise projects around the required disciplines rather than advertising a fixed headcount. Your scope identifies the design, development, automation and handover work included.'],
  ['Can I speak to the person building my site?', 'Yes, directly. Most questions get a faster and better answer from the person who wrote the code than from someone summarising it, so we do not put a layer in between.'],
  ['Where is the team based?', 'Flowzync is a remote studio working across time zones, based in Lahore, Pakistan. We schedule calls in your working hours and we say this plainly rather than implying a local office — it is also the honest reason our quotes compare well with a local agency.'],
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
    mainEntity: { '@id': `${site.url}/#organization` },
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
        <div className="orb orb1" data-plx="0.1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: 'center' }}>
            <Link href="/">Home</Link> <span>›</span>{' '}
            <Link href="/about">About</Link> <span>›</span>{' '}
            <span style={{ color: 'var(--ink)' }}>Team</span>
          </nav>
          <div className="eyebrow"><span className="pulse" />The team</div>
          <h1 style={{ marginInline: 'auto' }}>The disciplines behind <span className="grad-txt">your project.</span></h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Design, development and automation need a shared brief. Here is how the responsibilities fit together; your proposal confirms the team arrangement for your project.
          </p>
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          <div className="team-grid">
            {team.map((m, i) => (
              <div className={`tm rv ${['', 'rv-d1', 'rv-d2', 'rv-d3'][i % 4]}`} key={m.name}>
                <div className="avatar" style={{ background: m.colour }} aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <b>{m.role}</b><span>Project discipline</span>
                <p className="tm-bio">Project responsibilities include {m.knows.map(k=>k.toLowerCase()).join(', ')}. The scope confirms the work needed for your build.</p>
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
            <div className="eyebrow"><span className="pulse" />How we collaborate</div>
            <h2>Clear ownership for <span className="grad-txt">every stage</span></h2>
            <p>A website project can involve several disciplines. What matters is knowing who owns each decision and how you review the work. We agree the scope, milestones, communication route and handover responsibilities before the project begins.</p>
            <p>Ask about the editing workflow, integration access and ongoing support at the proposal stage. We would rather resolve those questions before you commit than leave them to launch week.</p>
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
            title="Want to discuss the right team for your project?"
            text="Tell us what you need and we will explain the scope, responsibilities and next steps."
          />
        </div>
      </section>
    </>
  );
}
