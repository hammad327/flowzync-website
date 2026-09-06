'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, FILTERS } from '@/lib/projects';
import { domainLabel } from '@/lib/site';

// The card scrolls a full-page screenshot on hover. Those screenshots
// run from 671px to 4274px tall, so one shared duration meant the long
// ones raced past at roughly ten times the pace of the short ones.
// Instead every card gets its own duration, set from the height the
// image actually renders at, so they all travel at one reading speed.
const SPEED = 150;      // css pixels per second
const MIN_DUR = 4;      // nothing should snap
const MAX_DUR = 20;     // nothing should outlast a plausible hover

export default function PortfolioGrid({ limit }) {
  const [f, setF] = useState('all');
  const gridRef = useRef(null);
  const list = (limit ? projects.slice(0, limit) : projects).filter((p) => f === 'all' || p.cat === f);

  // Card width depends on the viewport, so the travel distance can only
  // be known once the browser has laid the grid out. Read every card in
  // one pass, then write in one pass — interleaving the two would force
  // a reflow per card.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const measure = () => {
      const cards = [...grid.querySelectorAll('.pf-item')];
      const read = cards.map((card) => {
        const scroller = card.querySelector('.pf-scroller');
        const img = scroller?.querySelector('img');
        if (!scroller || !img) return null;
        return { card, distance: img.getBoundingClientRect().height - scroller.getBoundingClientRect().height };
      });
      for (const m of read) {
        if (!m) continue;
        const dur = m.distance <= 0
          ? 0
          : Math.min(MAX_DUR, Math.max(MIN_DUR, m.distance / SPEED));
        m.card.style.setProperty('--pf-dur', `${Math.round(dur * 10) / 10}s`);
      }
    };

    measure();

    // Re-measure when the grid is resized — a filter change, an
    // orientation flip or a window drag all change the card width.
    // ResizeObserver already batches, so no debounce is needed.
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [f, limit]);

  return (
    <>
      {!limit && (
        <div className="pf-filters">
          {FILTERS.map(([k, label]) => (
            <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{label}</button>
          ))}
        </div>
      )}
      <div className="pf-grid" ref={gridRef}>
        {list.map((p) => (
          // The inline --pf-dur is the server-rendered estimate, computed
          // from the screenshot's real pixel height at a nominal card
          // width. The effect above replaces it with the measured value
          // once laid out; this is what applies before hydration.
          <article className="pf-item rv in" key={p.slug} style={{ '--pf-dur': `${p.scrollDur}s` }}>
            <div className="pf-thumb">
              <div className="pf-chrome"><i /><i /><i /><span>{(p.site || domainLabel)}</span></div>
              <div className="pf-scroller">
                <Image src={p.img} alt={p.title} width={p.shot.w} height={p.shot.h} sizes="(max-width:700px) 100vw, 400px" />
              </div>
              <div className="pf-hint">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Hover to scroll
              </div>
              <div className="pf-overlay">
                <div>
                  <div className="cat">{p.badge}</div>
                  <span className="pf-overlay-title" aria-hidden="true">{p.title.split('—')[0].trim()}</span>
                </div>
              </div>
            </div>
            <div className="pf-body">
              <div className="row">
                <h3><Link href={`/portfolio/${p.slug}`}>{p.title}</Link></h3>
                <span className={`pf-badge ${p.badgeClass}`}>{p.badge}</span>
              </div>
              <p>{p.desc}</p>
              {p.tags?.length > 0 && (
                <div className="pf-tags">
                  {p.tags.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
                </div>
              )}
              <Link href={`/portfolio/${p.slug}`} className="svc-link" style={{ marginTop: 14 }}>
                View project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
