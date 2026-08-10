'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/services';
import { Icon, colorHex } from '@/components/Icons';
import Logo from '@/components/Logo';

export default function Nav() {
  const [open, setOpen] = useState(false);      // mobile menu
  const [dd, setDd] = useState(false);          // services dropdown
  const ddT = useRef(null);                     // close grace-period timer
  const path = usePathname();

  // Hover opens the dropdown on desktop only. On a phone there is no
  // hover, so the button must do the work — and mouseenter firing from
  // a tap is exactly why the mobile menu felt stuck open.
  const hoverable = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const ddEnter = () => { if (!hoverable()) return; clearTimeout(ddT.current); setDd(true); };
  const ddLeave = () => { if (!hoverable()) return; clearTimeout(ddT.current); ddT.current = setTimeout(() => setDd(false), 320); };

  const is = (p) => (p === '/' ? path === '/' : path.startsWith(p));
  const closeAll = () => { setOpen(false); setDd(false); };

  // Stop the page scrolling behind the open mobile menu, and always
  // start a new page from a closed, collapsed state.
  useEffect(() => { closeAll(); }, [path]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <nav className="nav">
      <Link href="/" onClick={closeAll} aria-label="Flowzync home" className="nav-logo">
        <Logo variant="color" size={36} wordSize={20} />
      </Link>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link href="/" className={is('/') ? 'active' : ''} onClick={closeAll}>Home</Link>
        <div
          className={`nav-drop ${dd ? 'dd-open' : ''}`}
          onMouseEnter={ddEnter}
          onMouseLeave={ddLeave}
        >
          <button
            type="button"
            className={is('/services') ? 'active' : ''}
            onClick={() => setDd(!dd)}
            aria-expanded={dd}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="nav-drop-menu">
            <div className="nav-drop-inner">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} onClick={closeAll}>
                <span className={`ndi ic-${s.color}`}><Icon name={s.icon} color={colorHex[s.color]} size={19} /></span>
                <span><b>{s.title}</b><span>{s.short.split('—')[0]}</span></span>
              </Link>
            ))}
            <Link href="/services" onClick={closeAll} style={{ gridColumn: '1/-1', justifyContent: 'center' }}>
              <b style={{ color: 'var(--primary)' }}>View all services →</b>
            </Link>
            </div>
          </div>
        </div>
        <Link href="/industries" className={is('/industries') ? 'active' : ''} onClick={closeAll}>Industries</Link>
        <Link href="/locations" className={is('/locations') ? 'active' : ''} onClick={closeAll}>Areas</Link>
        <Link href="/portfolio" className={is('/portfolio') ? 'active' : ''} onClick={closeAll}>Portfolio</Link>
        <Link href="/blog" className={is('/blog') ? 'active' : ''} onClick={closeAll}>Blog</Link>
        <Link href="/about" className={is('/about') ? 'active' : ''} onClick={closeAll}>About</Link>
        <Link href="/contact" className={`nav-cta ${is('/contact') ? 'active' : ''}`} onClick={closeAll}>Contact us</Link>
      </div>

      <button
        className={`burger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
