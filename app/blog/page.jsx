import Link from 'next/link';
import Image from 'next/image';
import CTABand from '@/components/CTABand';
import { getAllPosts } from '@/lib/posts';
import BlogGrid from '@/components/BlogGrid';
import { site } from '@/lib/site';
import HeroCanvas from '@/components/HeroCanvas';
import { clampTitle, clampDescription, openGraph } from '@/lib/meta';

export const metadata = {
  title: 'Blog — Web Design, Funnels & Automation Insights',
  description: clampDescription(
    'Practical articles from the Flowzync team on web design, GoHighLevel funnels, WordPress, Shopify, SEO and automation. New posts published regularly.'
    ),
  alternates: { canonical: `${site.url}/blog` },
  openGraph: openGraph({
    title: 'Blog — Web Design, Funnels & Automation Insights',
    description: 'Practical articles from the Flowzync team on web design, GoHighLevel funnels, WordPress, Shopify, SEO and automation. New posts published regularly.',
    url: '/blog',
  }),
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Blog + ItemList so the index is understood as a collection rather
  // than an unrelated page of links. It also gives AI assistants an
  // ordered, dated map of everything we have published, which is what
  // they use to decide whether a source is actively maintained.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog#blog`,
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    description:
      'Practical articles on web design, WordPress, WooCommerce, GoHighLevel funnels, SEO and business automation.',
    inLanguage: 'en',
    publisher: { '@id': `${site.url}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      author: { '@type': 'Person', name: p.author },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Blog</div>
          <h1 style={{ margin: '0 auto 18px' }}>Ideas worth <span className="grad-txt">building on</span></h1>
          <p className="lede" style={{ margin: '0 auto' }}>
            Practical thinking on design, funnels, automation and SEO — written by the people who build them daily.
          </p>
        </div>
      </div>

      <section className="sec-tint" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="eyebrow"><span className="pulse" />Latest articles</div>
            <h2>Straight answers on <span className="grad-txt">websites, funnels and search</span></h2>
            <p>
              One question per article, answered in the first two sentences. Where the
              honest answer is that you do not need the thing, we say that instead.
            </p>
          </div>
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
              No posts yet — drop a .md file into <code>content/blog/</code> to publish your first article.
            </p>
          ) : (
            <BlogGrid posts={posts} />
          )}
        </div>
      </section>

      <section className="sec-soft">
        <div className="wrap">
          <CTABand
            title="Reading is good. Building is better."
            text="If an article sparked an idea for your own website or funnel, let's talk it through — the first call is free."
          />
        </div>
      </section>
    </>
  );
}
