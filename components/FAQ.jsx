'use client';
import { useState } from 'react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <div className={`faq ${open === i ? 'open' : ''}`} key={i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {q}
            <span className="chev">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="#5B4FE9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
