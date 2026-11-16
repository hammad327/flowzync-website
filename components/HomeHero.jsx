'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  { label: 'Websites', theme: 'forest', kicker: 'Custom website design · WordPress · E-commerce', first: 'Custom websites.', second: 'First impressions that last.', description: 'A distinctive website. A clear message. A better way for the right customers to find you and take the next step.', cta: 'Let’s talk about your website', href: '/contact', explore: 'Explore website design', service: '/services/custom-website-design', note: 'Designed around your business. Built for the people you want to reach.' },
  { label: 'Funnels & CRM', theme: 'ivory', kicker: 'GoHighLevel · Landing pages · Booking journeys', first: 'Turn a little interest', second: 'into what’s next.', description: 'Give every campaign a focused landing page, every enquiry a place in your CRM, and every customer a clear next step.', cta: 'Plan your funnel', href: '/contact', explore: 'Explore GoHighLevel funnels', service: '/services/ghl-funnels', note: 'From the first click to the next conversation. Thoughtfully connected.' },
  { label: 'Automation', theme: 'teal', kicker: 'Business automation · Zapier · Make · Follow-up', first: 'Less chasing.', second: 'More moving forward.', description: 'Connect the tools behind your website. Simplify the follow-up, reduce repetitive tasks and make room for the work that matters.', cta: 'Connect your business systems', href: '/contact', explore: 'Explore business automation', service: '/services/automations', note: 'Useful systems that support your team, long after launch day.' },
];
// ── SLIDE VISUALS ─────────────────────────────────────────────
// Each slide carries a small illustration of the thing it describes,
// so the hero is not a slab of text on a flat colour. They are markup
// and CSS only (one real project screenshot aside), hidden from
// assistive tech because the copy beside them already says it, and
// not rendered below 1100px where the headline needs the width.
//
// The enquiry, pipeline and workflow shown are illustrations of how
// the pieces fit — not figures, and deliberately carry no numbers.
function VisualSite({ shot }) {
  return <div className="hv hv-site" aria-hidden="true">
    <div className="hv-browser">
      <div className="hv-chrome"><i/><i/><i/><span>yourbusiness.com</span></div>
      {shot && <div className="hv-shot"><Image src={shot.src} alt="" width={shot.w} height={shot.h} sizes="460px" /></div>}
    </div>
    <div className="hv-chip hv-chip-a"><b/><div><strong>New enquiry</strong><small>From the contact page</small></div></div>
    <div className="hv-chip hv-chip-b"><em>✓</em><div><strong>Call booked</strong><small>Added to your calendar</small></div></div>
  </div>;
}
function VisualPipeline() {
  const cols = [['New', ['Website enquiry', 'Landing page lead']], ['Booked', ['Discovery call']], ['Follow-up', ['Proposal sent', 'Reminder set']]];
  return <div className="hv hv-pipe" aria-hidden="true">
    <div className="hv-pipe-top"><span>Pipeline</span><small>One place for every enquiry</small></div>
    <div className="hv-pipe-cols">{cols.map(([title, cards]) => <div key={title}><h4>{title}</h4>{cards.map(c => <p key={c}><i/>{c}</p>)}</div>)}</div>
  </div>;
}
function VisualFlow() {
  const steps = [['Form submitted', 'Trigger'], ['Contact created in CRM', 'Instant'], ['SMS and email reply sent', 'Automatic'], ['Reminder scheduled', 'Follow-up']];
  return <div className="hv hv-flow" aria-hidden="true">
    {steps.map(([t, tag], i) => <div className="hv-flow-step" key={t}><span>{i + 1}</span><strong>{t}</strong><small>{tag}</small></div>)}
  </div>;
}

function Arrow({ back = false }) { return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={back ? 'M20 12H4m6-6-6 6 6 6' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>; }

export default function HomeHero({ shot }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [manual, setManual] = useState(false);
  const tabs = useRef([]);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || engaged || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) { setManual(false);setActive(value => (value + 1) % slides.length); }
    }, 8000);
    return () => window.clearInterval(timer);
  }, [paused, engaged, reduced, active]);
  const choose = (index, focus = false) => {
    const next = (index + slides.length) % slides.length;
    setActive(next);setManual(true);setPaused(true);
    if (focus) tabs.current[next]?.focus();
  };
  const onKeys = event => {
    if (['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {
      event.preventDefault();
      choose(event.key === 'Home' ? 0 : event.key === 'End' ? slides.length-1 : active + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  };
  return <section className="hs" data-theme={slides[active].theme} aria-roledescription="carousel" aria-label="Website design, funnels and automation" onMouseEnter={() => setEngaged(true)} onMouseLeave={() => setEngaged(false)} onFocusCapture={() => setEngaged(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setEngaged(false); }}>
    <div className="hs-decoration" aria-hidden="true"><span/><span/><span/></div>
    <div className="hs-viewport"><div className="hs-track" style={{transform:`translateX(-${active * 100}%)`}} aria-live={manual ? 'polite' : 'off'}>
      {slides.map((slide,index) => <div className="hs-slide" key={slide.label} id={`hero-panel-${index}`} role="tabpanel" aria-labelledby={`hero-tab-${index}`} aria-hidden={active !== index} inert={active !== index ? '' : undefined}>
        <div className="hp-wrap hs-content"><div className="hs-kicker"><span/> {slide.kicker}</div>
          {index === 0 ? <h1 className="hs-title" id="home-heading"><span>{slide.first}</span>{' '}<em>{slide.second}</em></h1> : <h2 className="hs-title"><span>{slide.first}</span>{' '}<em>{slide.second}</em></h2>}
          <p className="hs-description">{slide.description}</p>
          <div className="hs-actions"><Link className="hs-primary" href={slide.href} tabIndex={active === index ? undefined : -1}>{slide.cta}<span aria-hidden="true">↗</span></Link><Link href={slide.service} className="hs-secondary" tabIndex={active === index ? undefined : -1}>{slide.explore}<Arrow/></Link></div>
          <p className="hs-note">{slide.note}</p>
          {index === 0 ? <VisualSite shot={shot}/> : index === 1 ? <VisualPipeline/> : <VisualFlow/>}
        </div>
      </div>)}
    </div></div>
    <div className="hp-wrap hs-controls"><div className="hs-tabs" role="tablist" aria-label="Choose a service" onKeyDown={onKeys}>{slides.map((slide,index)=><button key={slide.label} ref={el => { tabs.current[index] = el; }} role="tab" id={`hero-tab-${index}`} aria-controls={`hero-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => choose(index)}><span>0{index+1}</span>{slide.label}<i aria-hidden="true"/></button>)}</div><div className="hs-buttons"><span className="hs-count" aria-hidden="true">0{active+1} / 03</span><button type="button" onClick={() => setPaused(value=>!value)} aria-label={paused || reduced ? 'Play slideshow' : 'Pause slideshow'} aria-pressed={paused} disabled={reduced} title={reduced ? 'Automatic motion is off because reduced motion is enabled' : undefined}>{paused || reduced ? <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true"><path d="m6 4 9 6-9 6Z" fill="currentColor"/></svg> : <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4v12m8-12v12" stroke="currentColor" strokeWidth="2"/></svg>}</button><button type="button" onClick={()=>choose(active-1)} aria-label="Previous slide"><Arrow back/></button><button type="button" onClick={()=>choose(active+1)} aria-label="Next slide"><Arrow/></button></div></div>
  </section>;
}
