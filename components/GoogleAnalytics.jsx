'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const MEASUREMENT_ID = 'G-3PHR76JS7C';
const CONSENT_KEY = 'flowzync-analytics-consent';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Nothing renders until the saved choice has been read. The server cannot
  // know it, so it used to render the small "Analytics preferences" button,
  // which then grew into the full panel about a second after load — a layout
  // shift that alone pushed mobile CLS over 0.1 on the homepage and /portfolio.
  // A panel that simply appears at its final size is not a layout shift.
  const [ready, setReady] = useState(false);
  const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/api');

  useEffect(() => {
    if (isAdmin) {
      window['ga-disable-' + MEASUREMENT_ID] = true;
      return;
    }
    let choice;
    try { choice = localStorage.getItem(CONSENT_KEY); } catch {}
    window['ga-disable-' + MEASUREMENT_ID] = choice !== 'granted';
    setOpen(choice !== 'granted' && choice !== 'denied');
    setReady(true);
    if (choice !== 'granted' || document.getElementById('flowzync-ga4')) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const script = document.createElement('script');
    script.id = 'flowzync-ga4';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(script);
  }, [isAdmin]);

  function saveChoice(choice) {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch {
      setOpen(false);
      return;
    }
    if (choice === 'denied') {
      window['ga-disable-' + MEASUREMENT_ID] = true;
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.trim().split('=')[0];
        if (name !== '_ga' && !name.startsWith('_ga_')) continue;
        for (const domain of ['', location.hostname, '.' + location.hostname]) {
          document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
        }
      }
    }
    window.location.reload();
  }

  if (isAdmin || !ready) return null;
  return (
    <aside aria-label="Analytics preferences" style={{ position: 'fixed', bottom: 16, left: 16, zIndex: 1100, maxWidth: 'min(380px, calc(100vw - 32px))', padding: open ? 20 : 0, background: '#fff', color: '#162d2b', borderRadius: 14, boxShadow: '0 4px 28px #0002' }}>
      {open ? <>
        <strong>Analytics preferences</strong>
        <p style={{ fontSize: 15, lineHeight: 1.6, margin: '10px 0' }}>May we use Google Analytics cookies to understand visits and improve our website? You can change your choice here anytime. <a href="/cookies">Details</a></p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button type="button" className="btn" onClick={() => saveChoice('granted')}>Accept analytics</button>
          <button type="button" className="btn" onClick={() => saveChoice('denied')}>Decline analytics</button>
        </div>
      </> : <button type="button" onClick={() => setOpen(true)} style={{ padding: '9px 14px', border: '1px solid #087F78', borderRadius: 10, background: '#fff', color: '#087F78', cursor: 'pointer', fontSize: 13 }}>Analytics preferences</button>}
    </aside>
  );
}
