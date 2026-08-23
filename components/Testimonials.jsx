'use client';
// ─────────────────────────────────────────────────────────────
//  TESTIMONIAL CAROUSEL
//
//  One row, auto-advancing, with arrows. Used on the homepage and
//  the About page from the same data in lib/testimonials.js.
//
//  It scrolls the real element rather than animating a transform,
//  which is what makes the awkward parts work for free: native
//  touch swiping and momentum on phones, scroll-snap alignment,
//  and correct behaviour when the browser scrolls a focused card
//  into view for a keyboard user.
//
//  Auto-advance stops the moment a person shows intent — pointer
//  over it, keyboard focus inside it, a touch, or a manual scroll —
//  and it never starts at all under prefers-reduced-motion. A
//  carousel that keeps moving while someone is trying to read is
//  worse than no carousel.
// ─────────────────────────────────────────────────────────────
import { useCallback, useEffect, useRef, useState } from 'react';
import { testimonials } from '@/lib/testimonials';

const AUTO_ADVANCE_MS = 5200;

export default function Testimonials({ items = testimonials }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // How far one "page" is: the width of a card plus its gap. Measured
  // from the DOM rather than hardcoded, so it stays correct across the
  // responsive breakpoints without duplicating the CSS numbers here.
  const step = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.querySelector('.tst');
    if (!card) return el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap || '24') || 24;
    return card.getBoundingClientRect().width + gap;
  }, []);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // 2px of slack: sub-pixel layout means scrollLeft rarely lands on
    // an exact 0 or an exact maximum.
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  const scrollByPage = useCallback(
    (dir) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: dir * step(), behavior: 'smooth' });
    },
    [step]
  );

  // ── auto-advance ───────────────────────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tick = () => {
      if (pausedRef.current || document.hidden) return;
      // Loop back to the start once the last card is showing, so the
      // row reads as continuous rather than dead-ending.
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: step(), behavior: 'smooth' });
      }
    };

    const id = setInterval(tick, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [step]);

  // ── pause on any sign of intent ────────────────────────────
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };

    // A manual scroll or swipe pauses for a while, then hands control
    // back — otherwise one stray trackpad nudge kills the carousel for
    // the rest of the visit.
    let releaseTimer;
    const onScroll = () => {
      updateArrows();
      pausedRef.current = true;
      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(() => { pausedRef.current = false; }, 6000);
    };

    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', updateArrows, { passive: true });

    updateArrows();
    return () => {
      clearTimeout(releaseTimer);
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('scroll', onScroll);
      removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByPage(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByPage(-1); }
  };

  if (!items.length) return null;

  return (
    <div className="tst-carousel">
      <button
        type="button"
        className="tst-arrow tst-arrow-prev"
        aria-label="Previous testimonials"
        aria-controls="testimonial-track"
        disabled={atStart}
        onClick={() => scrollByPage(-1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* A horizontally scrollable region needs to be reachable and
          operable by keyboard, which is what tabIndex + the arrow-key
          handler provide. The group label tells a screen-reader user
          what they have landed in. */}
      <div
        id="testimonial-track"
        className="tst-track"
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {items.map((t) => (
          <figure className="tst" key={t.id}>
            <div className="stars" aria-label={`${t.rating} out of 5`}>{'★'.repeat(t.rating)}</div>
            <blockquote><p>{t.quote}</p></blockquote>
            <figcaption className="tst-who">
              <div className="avatar" style={{ background: t.colour }} aria-hidden="true">{t.initials}</div>
              <div><b>{t.name}</b><span>{t.role}, {t.company}</span></div>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="tst-arrow tst-arrow-next"
        aria-label="Next testimonials"
        aria-controls="testimonial-track"
        disabled={atEnd}
        onClick={() => scrollByPage(1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
