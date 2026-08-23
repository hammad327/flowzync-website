'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects, FILTERS } from '@/lib/projects';
import { domainLabel } from '@/lib/site';

export default function PortfolioGrid({ limit }) {
  const [f, setF] = useState('all');
  const list = (limit ? projects.slice(0, limit) : projects).filter((p) => f === 'all' || p.cat === f);
  return (
    <>
      {!limit && (
        <div className="pf-filters">
          {FILTERS.map(([k, label]) => (
            <button key={k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{label}</button>
          ))}
        </div>
      )}
      <div className="pf-grid">
        {list.map((p) => (
          <article className="pf-item rv in" key={p.title}>
            <div className="pf-thumb">
              <div className="pf-chrome"><i /><i /><i /><span>{(p.site || domainLabel)}</span></div>
              <div className="pf-scroller">
                <Image src={p.img} alt={p.title} width={800} height={1100} />
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
                <h3>{p.title}</h3>
                <span className={`pf-badge ${p.badgeClass}`}>{p.badge}</span>
              </div>
              <p>{p.desc}</p>
              {p.tags?.length > 0 && (
                <div className="pf-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
