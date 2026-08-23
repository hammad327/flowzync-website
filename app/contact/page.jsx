'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import FAQ from '@/components/FAQ';
import { CONTACT_FAQS } from '@/lib/contactFaqs';
import HeroCanvas from '@/components/HeroCanvas';
import { site } from '@/lib/site';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const [answer, setAnswer] = useState('');
  const startedAt = useRef(Date.now());

  // Fetch a fresh, server-signed spam check on load.
  const loadCaptcha = () =>
    fetch('/api/challenge')
      .then((r) => r.json())
      .then(setCaptcha)
      .catch(() => setCaptcha(null));

  useEffect(() => { loadCaptcha(); startedAt.current = Date.now(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;
    if (!f.name.value.trim() || !f.email.value.trim()) { setErr('field'); setTimeout(() => setErr(''), 2500); return; }
    setBusy(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name.value, email: f.email.value,
          service: f.service.value, timeline: f.timeline.value, message: f.msg.value,
          source: 'form', sourcePage: '/contact',
          captchaToken: captcha?.token, captchaAnswer: answer,
          website: f.website?.value || '',      // honeypot
          startedAt: startedAt.current,
        }),
      });
      const data = await res.json();
      if (data.ok) { setSent(true); f.reset(); setAnswer(''); }
      else {
        setErr(data.error || 'Something went wrong — please email us directly.');
        // A used or failed challenge is spent: issue a new one so the
        // person can retry without reloading the page.
        setAnswer(''); loadCaptcha();
      }
    } catch {
      setErr(`Could not send that. Please try again, or email ${site.email}.`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <HeroCanvas />
        <div className="orb orb1" data-plx="0.1" /><div className="orb orb2" data-plx="-0.07" /><div className="hero-grid-bg" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="eyebrow"><span className="pulse" />Contact</div>
          <h1 style={{ margin: '0 auto 18px' }}>Let's build your <span className="grad-txt">dream website</span></h1>
          <p className="lede" style={{ margin: '0 auto' }}>
            Tell us where you are and where you want to be. Every enquiry is read by a person, not a filter.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="ct-grid">
            <div>
              <div className="ct-info-card rv in">
                <div className="ct-ic ic-lav"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="#5B4FE9" strokeWidth="2"/><path d="m4 7 8 6 8-6" stroke="#5B4FE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <div><b>Email us</b><span>{site.email}</span></div>
              </div>
              <div className="ct-info-card rv in rv-d1">
                <div className="ct-ic ic-mint"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="3" stroke="#06C299" strokeWidth="2"/><path d="M8 3v4m8-4v4M4 11h16" stroke="#06C299" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div><b>Free quote review</b><span>Tell us about the project — a person reads every one</span></div>
              </div>
              <div className="ct-info-card rv in rv-d2">
                <div className="ct-ic ic-peach"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 10.5c0 6-8 11.5-8 11.5S4 16.5 4 10.5a8 8 0 1 1 16 0Z" stroke="#FF7A3D" strokeWidth="2"/><circle cx="12" cy="10.5" r="3" stroke="#FF7A3D" strokeWidth="2"/></svg></div>
                <div><b>Remote studio</b><span>{site.business.servingLabel}</span></div>
              </div>
              <div className="ct-info-card rv in rv-d3">
                <div className="ct-ic ic-lav"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#5B4FE9" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#5B4FE9" strokeWidth="2" strokeLinecap="round"/></svg></div>
                <div><b>Working days</b><span>Monday to Saturday</span></div>
              </div>
            </div>

            {sent ? (
              <div className="ct-done" role="status" aria-live="polite">
                <div className="ct-done-ring">
                  <svg viewBox="0 0 52 52" width="72" height="72" aria-hidden="true">
                    <circle className="cd-circle" cx="26" cy="26" r="23" fill="none" stroke="#06C299" strokeWidth="2.5" />
                    <path className="cd-check" d="M15 27l8 8 15-16" fill="none" stroke="#06C299" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="cd-pulse" />
                </div>
                <h2 className="ct-form-h">Thanks — that&apos;s with us</h2>
                <p>
                  A person reads every enquiry, and we&apos;ll come back to you at the email
                  you gave us with a clear next step. No autoresponder, no sales sequence.
                </p>
                <div className="ct-done-next">
                  <span>While you wait</span>
                  <div>
                    <Link href="/portfolio" className="btn btn-o"><span>See our work</span></Link>
                    <Link href="/blog" className="btn btn-o"><span>Read the blog</span></Link>
                  </div>
                </div>
                <button
                  type="button" className="ct-done-again"
                  onClick={() => { setSent(false); setAnswer(''); loadCaptcha(); startedAt.current = Date.now(); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="ct-form rv in rv-d1" onSubmit={submit} noValidate>
                <h2 className="ct-form-h">Start your project</h2>
                <p>Fill this in and we'll come to the call already knowing your business.</p>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" placeholder="Jane Cooper" style={err === 'field' ? { borderColor: '#FF6B6B' } : undefined} />
                  </div>
                  <div className="f-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="jane@company.com" style={err === 'field' ? { borderColor: '#FF6B6B' } : undefined} />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-field">
                    <label htmlFor="service">Service needed</label>
                    <select id="service" name="service">
                      {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                      <option>Multiple / full stack</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="f-field">
                    <label htmlFor="timeline">Ideal timeline</label>
                    <select id="timeline" name="timeline">
                      <option>As soon as possible</option>
                      <option>Within a month</option>
                      <option>1–3 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>
                <div className="f-field">
                  <label htmlFor="msg">Tell us about the project</label>
                  <textarea id="msg" name="msg" placeholder="What are you building, and what does your dream website look like?" />
                </div>
                {/* Honeypot — hidden from people, irresistible to bots. */}
                <input
                  type="text" name="website" tabIndex={-1} autoComplete="off"
                  aria-hidden="true" className="hp-field" defaultValue=""
                />

                <div className="ct-captcha">
                  <label htmlFor="captcha">
                    {captcha ? captcha.question : 'Loading spam check…'}
                    <span>Quick check that you&apos;re human</span>
                  </label>
                  <input
                    id="captcha" name="captcha" inputMode="numeric" autoComplete="off"
                    value={answer} onChange={(e) => setAnswer(e.target.value)}
                    placeholder="?" aria-label="Answer the sum shown"
                  />
                </div>

                <button type="submit" className="btn btn-p" disabled={busy} style={{ width: '100%', justifyContent: 'center', opacity: busy ? 0.7 : 1 }}>
                  <span>{busy ? 'Sending…' : 'Send message'}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
                </button>
                {err && err !== 'field' && (
                  <div className="form-ok" style={{ background: '#FFEBEB', color: '#B33' }}>{err}</div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* The page was 146 words with no internal links — the thinnest on
          the site, and one of the few people actually search for by
          name ("flowzync contact"). These two sections give it
          something to rank with and somewhere to send people. */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Before you write</div>
            <h2>What happens after you <span className="grad-txt">hit send</span></h2>
          </div>
          <div className="ct-steps rv">
            {[
              ['We read it properly', 'A person reads your message, not an auto-responder. If something is unclear we ask rather than guess, because a quote built on a guess helps nobody.'],
              ['You get questions first', 'Usually a short reply with two or three questions. Anyone who sends a price back within the hour has quoted a project they have not understood yet.'],
              ['Then a fixed, itemised quote', 'Scope written down, price fixed before any work starts. No hourly billing, and no variation the first time you change your mind about a heading.'],
              ['No pressure either way', 'If we are not the right fit we will say so, and point you at what is. We would rather lose a project than take one we cannot do well.'],
            ].map(([t, d], n) => (
              <div className="ct-step" key={t}>
                <span className="ct-step-n">{n + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="eyebrow"><span className="pulse" />Common questions</div>
            <h2>Asked before <span className="grad-txt">almost every project</span></h2>
          </div>
          <FAQ items={CONTACT_FAQS} />
          <p className="ct-explore rv">
            Still deciding what you need? Browse{' '}
            <Link href="/services">everything we do</Link>, the{' '}
            <Link href="/industries">industries we build for</Link>, the{' '}
            <Link href="/locations">areas we cover</Link>, or some{' '}
            <Link href="/portfolio">recent work</Link>. The{' '}
            <Link href="/blog">blog</Link> answers most of the pricing and
            process questions in more depth than a form ever could.
          </p>
        </div>
      </section>
    </>
  );
}
