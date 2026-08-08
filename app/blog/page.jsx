import Link from 'next/link';
import Image from 'next/image';
import CTABand from '@/components/CTABand';
import { getAllPosts, getCategories } from '@/lib/posts';
import BlogGrid from '@/components/BlogGrid';
import { site } from '@/lib/site';
import HeroCanvas from '@/components/HeroCanvas';

export const metadata = {
  title: 'Blog — Web Design, Funnels & Automation Insights',
  description:
    'Practical articles from the Flowzync team on web design, GoHighLevel funnels, WordPress, Shopify, SEO and automation. New posts published regularly.',
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: 'Blog — Web Design, Funnels & Automation Insights',
    description: 'Practical articles from the Flowzync team on web design, GoHighLevel funnels, WordPress, Shopify, SEO and automation. New posts published regularly.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  return (
    <>
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

      <section style={{ paddingTop: 30 }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
              No posts yet — drop a .md file into <code>content/blog/</code> to publish your first article.
            </p>
          ) : (
            <BlogGrid posts={posts} categories={categories} />
          )}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
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
