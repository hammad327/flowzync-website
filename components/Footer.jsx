import Link from 'next/link';
import Logo from '@/components/Logo';
import { site, domainLabel } from '@/lib/site';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { locations } from '@/lib/locations';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ft-in">
        <div className="ft-grid">
          {/* Brand — larger logo as the anchor of the footer */}
          <div className="ft-brand">
            <Link href="/" aria-label="Flowzync home" className="ft-logo">
              <Logo variant="white" size={52} wordSize={28} />
            </Link>
            <p>{site.tagline}. Custom websites, funnels and automation — designed, built and cared for by one senior team.</p>
            <div className="ft-social">
              <a href={site.social.twitter} aria-label="Twitter / X"><svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M18.9 2H22l-7.4 8.5L23.3 22h-6.8l-5.3-7-6.1 7H2l7.9-9L1.5 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a>
              <a href={site.social.linkedin} aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.2 8h4.6v14H.2V8Zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.6c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V22H7.8V8Z"/></svg></a>
              <a href={site.social.instagram} aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="2"/><circle cx="17.8" cy="6.2" r="1.4" fill="#fff"/></svg></a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h5>Services</h5>
            {services.slice(0, 6).map((s) => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}
            <Link href="/services" className="ft-all">All services →</Link>
          </nav>

          {/* Industries */}
          <nav aria-label="Industries">
            <h5>Industries</h5>
            {industries.map((i) => <Link key={i.slug} href={`/industries/${i.slug}`}>{i.trade}</Link>)}
            <Link href="/industries" className="ft-all">All industries →</Link>
          </nav>

          {/* UK areas */}
          <nav aria-label="Areas we cover">
            <h5>Areas</h5>
            {locations.slice(0, 5).map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`}>{l.city}</Link>
            ))}
            <Link href="/locations" className="ft-all">All areas →</Link>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h5>Company</h5>
            <Link href="/about">About us</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Contact Us */}
          <div className="ft-contact">
            <h5>Contact us</h5>
            <a href={`mailto:${site.email}`} className="ft-mail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {site.email}
            </a>
            <span className="ft-note">Remote studio · {site.business.servingLabel}</span>
            <span className="ft-note">{site.business.hoursNote}</span>
            <Link href="/contact" className="btn ft-cta">
              <span>Get a free quote</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} {site.business.legalName}. All rights reserved.</span>
          <span>Built with obsession · {domainLabel}</span>
        </div>
      </div>
    </footer>
  );
}
