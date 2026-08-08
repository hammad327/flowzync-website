'use client';
import { useState } from 'react';
import { services } from '@/lib/services';
import HeroCanvas from '@/components/HeroCanvas';
import { site } from '@/lib/site';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

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
        }),
      });
      const data = await res.json();
      if (data.ok) { setSent(true); f.reset(); }
      else setErr(data.error || 'Something went wrong — please email us directly.');
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

            <form className="ct-form rv in rv-d1" onSubmit={submit} noValidate>
              <h3>Start your project</h3>
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
              <button type="submit" className="btn btn-p" disabled={busy} style={{ width: '100%', justifyContent: 'center', opacity: busy ? 0.7 : 1 }}>
                <span>{busy ? 'Sending…' : 'Send message'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              </button>
              {err && err !== 'field' && (
                <div className="form-ok" style={{ background: '#FFEBEB', color: '#B33' }}>{err}</div>
              )}
              {sent && (
                <div className="form-ok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#06C299"/><path d="m8 12.5 2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Quote received. We'll take a look and get back to you.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
