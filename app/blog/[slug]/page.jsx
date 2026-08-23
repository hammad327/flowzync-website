import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CTABand from '@/components/CTABand';
import { getAllPosts, getPost, getRelatedPosts } from '@/lib/posts';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import HeroCanvas from '@/components/HeroCanvas';
import { clampTitle, clampDescription } from '@/lib/meta';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: clampTitle(p.title, 48),   // 48 + ' | Flowzync' = 59
    description: clampDescription(p.description),
    alternates: { canonical: `${site.url}/blog/${p.slug}` },
    openGraph: {
      type: 'article',
      title: clampTitle(p.title, 48),   // 48 + ' | Flowzync' = 59
      description: clampDescription(p.description),
      url: `${site.url}/blog/${p.slug}`,
      images: p.cover ? [p.cover] : [],
      publishedTime: p.date,
    },
  };
}

export default function BlogPost({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: clampDescription(p.description),
      // Absolute URL — a relative path in schema resolves against nothing
      // and is simply dropped. Google's Article rich results also require
      // a raster image (jpg/png/gif), so an SVG cover falls back to the
      // OG image rather than publishing an ineligible one.
      image: p.cover && !p.cover.endsWith('.svg')
        ? (p.cover.startsWith('http') ? p.cover : `${site.url}${p.cover}`)
        : `${site.url}${images.og}`,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      inLanguage: 'en',
      wordCount: p.wordCount,
      ...(p.tags.length ? { keywords: p.tags.join(', ') } : {}),
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/blog/${p.slug}` },
      // A named human author, not the Organization. Author identity is a
      // direct E-E-A-T signal and it is what AI assistants attribute to.
      author: {
        '@type': 'Person',
        name: p.author,
        worksFor: { '@id': `${site.url}/#organization` },
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: { '@type': 'ImageObject', url: `${site.url}/logo.png` },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
        { '@type': 'ListItem', position: 3, name: p.title, item: `${site.url}/blog/${p.slug}` },
      ],
    },
  ];

  // Same-category posts first — a more useful link than 'most recent'.
  const others = getRelatedPosts(p.slug, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero" style={{ paddingBottom: 10 }}>
        <HeroCanvas />
        <div className="orb orb1" /><div className="hero-grid-bg" />
        <div className="wrap article" style={{ position: 'relative', zIndex: 1 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <Link href="/blog">Blog</Link> <span>›</span> <span style={{ color: 'var(--ink)' }}>{p.title}</span>
          </nav>
          <div className="eyebrow"><span className="pulse" />{p.category}</div>
          <h1 style={{ fontSize: 'clamp(30px,4.4vw,48px)' }}>{p.title}</h1>
          <div className="post-meta" style={{ marginTop: 16 }}>
            <span>{p.author}</span>
            <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>{p.readTime} min read</span>
            {p.updated && p.updated !== p.date && (
              <span>Updated {new Date(p.updated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            )}
          </div>
        </div>
      </div>

      <section style={{ paddingTop: 10 }}>
        <div className="wrap article">
          {p.cover && (
            <div className="article-cover">
              <Image src={p.cover} alt={p.title} width={1400} height={700} priority />
            </div>
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />

          {/* Author box — a named human is a trust signal for readers,
              for Google's quality guidelines and for AI citation. */}
          <aside className="post-author">
            <span className="post-author-av">{p.author.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
            <div>
              <b>{p.author}</b>
              <span>Writes for {site.name}. Every article here is based on work we have actually shipped for clients.</span>
            </div>
          </aside>
        </div>
      </section>

      {others.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head"><h2 style={{ fontSize: 26 }}>Keep reading</h2></div>
            <div className="blog-grid">
              {others.map((o) => (
                <Link href={`/blog/${o.slug}`} className="post-card" key={o.slug}>
                  <div className="post-thumb">
                    {o.cover && <Image src={o.cover} alt={o.title} width={600} height={380} />}
                  </div>
                  <div className="post-body">
                    <div className="post-meta"><span>{new Date(o.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span><span>{o.readTime} min</span></div>
                    <h3>{o.title}</h3>
                    <p>{o.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CTABand
            title="Want this done for your business?"
            text="Everything we write about, we build daily. Book a free call and let's apply it to your project."
          />
        </div>
      </section>
    </>
  );
}
