import Link from 'next/link';
export default function CTABand({ title, text, cta = 'Book my free audit' }) {
  return (
    <div className="cta-band rv">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link href="/contact" className="btn">
        <span>{cta}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  );
}
