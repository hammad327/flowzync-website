import Link from 'next/link';
import Image from 'next/image';
import BlogCover from '@/components/BlogCover';
import { notFound } from 'next/navigation';
import CTABand from '@/components/CTABand';
import { getAllPosts, getPost, getRelatedPosts } from '@/lib/posts';
import { site } from '@/lib/site';
import { images } from '@/lib/images';
import HeroCanvas from '@/components/HeroCanvas';
import { clampTitle, clampDescription, openGraph, twitterCard } from '@/lib/meta';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// The image Google's article rich results and every social card want:
// an absolute, raster URL. Preference order is the stock photograph,
// then a raster cover, then the OG image — the illustrated SVG covers
// are never eligible, because neither Google nor LinkedIn will render
// an SVG preview.
function articleImage(p) {
  const abs = (u) => (u.startsWith('http') ? u : `${site.url}${u}`);
  if (p.photo) return abs(p.photo);
  if (p.cover && !p.cover.endsWith('.svg')) return abs(p.cover);
  return abs(images.og);
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: clampTitle(p.title, 48),   // 48 + ' | Flowzync' = 59
    description: clampDescription(p.description),
    alternates: { canonical: `${site.url}/blog/${p.slug}` },
    // Social cards need a raster image — LinkedIn, Slack and WhatsApp
    // will not render an SVG preview — so an SVG cover falls back to
    // the OG image, exactly as the Article schema below does.
    openGraph: openGraph({
      type: 'article',
      title: clampTitle(p.title, 48),   // 48 + ' | Flowzync' = 59
      description: p.description,
      url: `${site.url}/blog/${p.slug}`,
      image: articleImage(p),
      publishedTime: p.date,
      modifiedTime: p.updated || p.date,
      authors: [p.author],
    }),
    twitter: twitterCard({
      title: clampTitle(p.title, 48),
      description: p.description,
      image: articleImage(p),
    }),
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
      image: articleImage(p),
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
              <BlogCover
                photo={p.photo}
                fallback={p.cover}
                alt={p.title}
                width={1400}
                height={700}
                priority
                sizes="(max-width:900px) 100vw, 900px"
              />
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
                    <BlogCover
                      photo={o.photo}
                      fallback={o.cover}
                      alt={o.title}
                      width={600}
                      height={380}
                      sizes="(max-width:680px) 100vw, 33vw"
                    />
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
