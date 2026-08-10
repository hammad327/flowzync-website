// Blog index. Posts are rendered on the server, newest first — no
// categories, no filtering. One list, and you publish into it.
import Link from 'next/link';
import Image from 'next/image';

export default function BlogGrid({ posts }) {
  const shown = posts;

  return (
    <>
      {shown.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
          No posts yet.
        </p>
      ) : (
        <div className="blog-grid">
          {shown.map((p, i) => (
            <Link href={`/blog/${p.slug}`} className={`post-card rv in ${i % 3 === 1 ? 'rv-d1' : i % 3 === 2 ? 'rv-d2' : ''}`} key={p.slug}>
              <div className="post-thumb">
                {p.cover && <Image src={p.cover} alt={p.title} width={600} height={380} />}
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
