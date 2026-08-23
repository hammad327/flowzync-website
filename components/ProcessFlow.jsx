'use client';
// ─────────────────────────────────────────────────────────────
// "The Flowzync Blueprint" — replaces the old vertical timeline.
// A pinned control panel tracks your scroll: the big number flips,
// the ring fills, and each phase card ignites as you reach it.
// Every phase names its deliverable, so clients know exactly
// what they receive — not just what we do.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react';

const PHASES = [
  {
    t: 'Discover', tag: 'Day 0–2', icon: 'compass',
    d: 'A free strategy call (or the short project form). We map your business, audience, goals and what "success" actually looks like — then send a fixed quote.',
    out: ['Project brief', 'Fixed quote'],
  },
  {
    t: 'Blueprint', tag: 'Step 1', icon: 'map',
    d: 'Research becomes a plan: sitemap, funnel logic, content outline and the exact tech stack. You approve the blueprint before a single pixel is drawn — no surprises later.',
    out: ['Sitemap & funnel map', 'Tech stack', 'Timeline'],
  },
  {
    t: 'Design', tag: 'Step 2', icon: 'pen',
    d: 'Real design concepts in Figma — not moodboards. We iterate together until the direction is unmistakably yours, then hand you a clickable prototype to walk through.',
    out: ['Design concepts', 'Clickable prototype'],
  },
  {
    t: 'Build & Automate', tag: 'Step 3', icon: 'bolt',
    d: 'Pixel-perfect development with motion, speed and SEO engineered in. Every form, calendar, CRM pipeline and follow-up automation is wired and tested as we go.',
    out: ['Staging site', 'Automations live'],
  },
  {
    t: 'Test & Polish', tag: 'Step 4', icon: 'shield',
    d: 'You click through staging on every device while we run speed, accessibility and automation QA. We obsess over details until you can\u2019t find anything to change.',
    out: ['QA report', 'Launch checklist'],
  },
  {
    t: 'Launch & Grow', tag: 'Ongoing', icon: 'rocket',
    d: 'We go live together, monitor everything closely afterwards, and hand over training videos. Then care plans keep you fast, secure and one message away from us.',
    out: ['Training videos', 'Care plan'],
  },
];

const PhaseIcon = ({ name }) => {
  const s = { stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const p = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none' };
  switch (name) {
    case 'compass': return <svg {...p}><circle cx="12" cy="12" r="9" {...s} /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" {...s} /></svg>;
    case 'map': return <svg {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" {...s} /><path d="M9 4v14M15 6v14" {...s} /></svg>;
    case 'pen': return <svg {...p}><path d="m14 4 6 6L8 22H2v-6L14 4Z" {...s} /><path d="m11 7 6 6" {...s} /></svg>;
    case 'bolt': return <svg {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" {...s} /></svg>;
    case 'shield': return <svg {...p}><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" {...s} /><path d="m9 12 2 2 4-4" {...s} /></svg>;
    case 'rocket': return <svg {...p}><path d="M12 15c-2 0-3-1-3-3 0-4 2-8 3-9 1 1 3 5 3 9 0 2-1 3-3 3Z" {...s} /><path d="M9 12c-2 1-3 3-3 6 2 0 4-1 5-2m1-4c2 1 3 3 3 6-2 0-4-1-5-2M12 18v3" {...s} /></svg>;
    default: return null;
  }
};

export default function ProcessFlow() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = [...el.querySelectorAll('.pfl-card')];
    const onScroll = () => {
      const mid = innerHeight * 0.55;
      let idx = 0;
      cards.forEach((c, i) => { if (c.getBoundingClientRect().top < mid) idx = i; });
      setActive(idx);
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const pct = (active + 1) / PHASES.length;
  const ph = PHASES[active];

  return (
    <div className="pflow" ref={ref}>
      {/* pinned control panel */}
      <div className="pfl-panel">
        <div className="pfl-dial">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" stroke="var(--border)" strokeWidth="6" fill="none" />
            <circle cx="60" cy="60" r="52" stroke="url(#pflg)" strokeWidth="6" fill="none" strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 52} strokeDashoffset={2 * Math.PI * 52 * (1 - pct)}
              transform="rotate(-90 60 60)" style={{ transition: 'stroke-dashoffset .7s cubic-bezier(.22,1,.36,1)' }} />
            <defs><linearGradient id="pflg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5B4FE9" /><stop offset="1" stopColor="#06C299" /></linearGradient></defs>
          </svg>
          <div className="pfl-dial-in">
            <b key={active} className="pfl-num">{String(active + 1).padStart(2, '0')}</b>
            <span>of {String(PHASES.length).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="pfl-now" key={`t${active}`}>
          <span className="pfl-ic"><PhaseIcon name={ph.icon} /></span>
          <b>{ph.t}</b>
          <em>{ph.tag}</em>
        </div>
        <div className="pfl-track">
          {PHASES.map((_, i) => <i key={i} className={i <= active ? 'on' : ''} />)}
        </div>
      </div>

      {/* phase cards */}
      <div className="pfl-steps">
        {PHASES.map((s, i) => (
          <article className={`pfl-card ${i === active ? 'on' : ''} ${i < active ? 'done' : ''}`} key={s.t}>
            <div className="pfl-card-head">
              <span className="pfl-idx">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.t}</h3>
              <span className="pfl-tag">{s.tag}</span>
            </div>
            <p>{s.d}</p>
            <div className="pfl-outs">
              <span className="pfl-outlabel">You receive</span>
              {s.out.map((o) => (
                <span className="pfl-out" key={o}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {o}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
