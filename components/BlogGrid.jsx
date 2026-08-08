'use client';
// Blog index with category filtering. The posts are rendered on the
// server and passed in, so the list is in the HTML for crawlers —
// the filter only hides and shows what is already there.
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogGrid({ posts, categories }) {
  const [cat, setCat] = useState('all');
  const shown = cat === 'all' ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      {categories.length > 1 && (
        <div className="pf-filters">
          <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>
            All posts
          </button>
          {categories.map((c) => (
            <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      )}

      {shown.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
          Nothing filed under {cat} yet.
        </p>
      ) : (
        <div className="blog-grid">
          {shown.map((p, i) => (
            <Link href={`/blog/${p.slug}`} className={`post-card rv in ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`} key={p.slug}>
              <div className="post-thumb">
                {p.cover && <Image src={p.cover} alt={p.title} width={600} height={380} />}
                <span className="post-cat">{p.category}</span>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{p.readTime} min read</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="post-more">
                  Read article
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
