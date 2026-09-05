import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import HeroCanvas from '@/components/HeroCanvas';
import { projects, getProject } from '@/lib/projects';
import { getService } from '@/lib/services';
import { getIndustry } from '@/lib/industries';
import { site } from '@/lib/site';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  const title = `${p.title} | Portfolio`;
  return {
    title: { absolute: clampTitle(title) },
    description: clampDescription(p.desc),
    keywords: p.tags,
    alternates: { canonical: `${site.url}/portfolio/${p.slug}` },
    openGraph: openGraph({
      title,
      description: p.desc,
      url: `${site.url}/portfolio/${p.slug}`,
      image: p.img,
    }),
    twitter: twitterCard({ title, description: p.desc, image: p.img }),
  };
}

export default function ProjectPage({ params }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const service = p.service ? getService(p.service) : null;
  const industry = p.industry ? getIndustry(p.industry) : null;

  // Related work: same category first, so the next click stays relevant.
  const related = projects
    .filter((o) => o.slug !== p.slug)
    .sort((a, b) => (a.cat === p.cat ? -1 : 0) - (b.cat === p.cat ? -1 : 0))
    .slice(0, 3);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${site.url}/portfolio/${p.slug}#work`,
      name: p.title,
      description: p.desc,
      image: `${site.url}${p.img}`,
      url: `${site.url}/portfolio/${p.slug}`,
      keywords: p.tags.join(', '),
      creator: { '@id': `${site.url}/#organization` },
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${site.url}/portfolio` },
        { '@type': 'ListItem', position: 3, name: p.title, item: `${site.url}/portfolio/${p.slug}` },
      ],
    },
    // Question-and-answer is the most extractable structure there is for
    // Google's answer boxes and for AI assistants, which is why every
    // project carries it rather than only the service pages.
    ...(p.faqs?.length
      ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: p.faqs.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-hero" style={{ paddingBottom: 10 }}>
        <HeroCanvas />
        <div className="orb orb1" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span>{' '}
            <Link href="/portfolio">Portfolio</Link> <span>›</span>{' '}
            <span style={{ color: 'var(--ink)' }}>{p.title.split('—')[0].trim()}</span>
          </nav>
          <div className="eyebrow"><span className="pulse" />{p.badge}</div>
          <h1 style={{ fontSize: 'clamp(30px,4.4vw,46px)' }}>{p.title}</h1>
          <p className="lede">{p.desc}</p>
          {p.tags?.length > 0 && (
            <div className="pf-tags" style={{ border: 0, paddingTop: 8, marginTop: 14 }}>
              {p.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          )}
        </div>
      </div>

      <section className="sec-tint">
        <div className="wrap">
          <div className="proj-layout">
            <div className="proj-shot">
              <div className="pf-chrome"><i /><i /><i /><span>{p.site}</span></div>
              <Image src={p.img} alt={`${p.title} — full page design`} width={800} height={2000} priority />
            </div>
            <div className="proj-copy">
              <h2>About this project</h2>
              {p.long.map((para) => <p key={para.slice(0, 40)}>{para}</p>)}

              <div className="proj-links">
                {service && (
                  <Link href={`/services/${service.slug}`} className="pf-link">
                    {service.title}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                )}
                {industry && (
                  <Link href={`/industries/${industry.slug}`} className="pf-link">
                    {industry.trade}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {p.faqs?.length > 0 && (
        <section className="sec-soft">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="eyebrow"><span className="pulse" />Questions</div>
              <h2>What people ask about <span className="grad-txt">projects like this</span></h2>
            </div>
            <FAQ items={p.faqs} />
          </div>
        </section>
      )}

      <section className="sec-tint">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />More work</div>
            <h2>Other projects <span className="grad-txt">worth a look</span></h2>
          </div>
          <div className="proj-related">
            {related.map((o) => (
              <Link href={`/portfolio/${o.slug}`} key={o.slug} className="loc-card">
                <span className="ind-tag">{o.badge}</span>
                <h3>{o.title.split('—')[0].trim()}</h3>
                <p>{o.desc}</p>
                <span className="svc-link">
                  View project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <CTABand
            title="Want something like this for your business?"
            text="Tell us what you need and we'll come back with a fixed, itemised quote — no obligation."
          />
        </div>
      </section>
    </>
  );
}
