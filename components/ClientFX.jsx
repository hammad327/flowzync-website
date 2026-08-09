'use client';
// ─────────────────────────────────────────────────────────────
// Global motion engine:
//  · buttery wheel-based smooth scrolling (desktop, motion-safe)
//  · scroll progress bar + custom cursor
//  · reveal-on-scroll (up / left / right / scale variants)
//  · scroll parallax via [data-plx]
//  · 3D tilt via [data-tilt] and .pf-item
//  · magnetic buttons + animated counters
// ─────────────────────────────────────────────────────────────
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(pointer: fine)').matches && !matchMedia('(hover: none)').matches;

    /* ── smooth wheel scrolling (lerp) ───────────────────── */
    // CSS scroll-behavior:smooth fights the JS lerp (every scrollTo gets
    // browser-animated → stutter). Force instant while the engine runs.
    const htmlEl = document.documentElement;
    const prevBehavior = htmlEl.style.scrollBehavior;
    let target = scrollY, current = scrollY, raf = null, wheeling = false, last = 0;
    const maxScroll = () => htmlEl.scrollHeight - innerHeight;
    const glide = (t) => {
      const dt = Math.min(50, t - (last || t)); last = t;
      // time-based exponential damping → identical feel at any framerate
      current += (target - current) * (1 - Math.exp(-dt * 0.011));
      if (Math.abs(target - current) < 0.5) { current = target; raf = null; wheeling = false; last = 0; }
      else raf = requestAnimationFrame(glide);
      scrollTo(0, current);
    };
    const onWheel = (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      // trackpads emit streams of tiny pixel deltas — native scrolling
      // already feels right there; only smooth discrete mouse-wheel ticks
      if (e.deltaMode === 0 && Math.abs(e.deltaY) < 40 && !wheeling) return;
      // let native scrolling handle scrollable inner panels (chat, menus…)
      let n = e.target;
      while (n && n !== document.body) {
        if (n.scrollHeight > n.clientHeight + 2 && ['auto', 'scroll'].includes(getComputedStyle(n).overflowY)) return;
        n = n.parentElement;
      }
      e.preventDefault();
      const dy = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      if (!wheeling) { target = current = scrollY; wheeling = true; }
      target = Math.max(0, Math.min(maxScroll(), target + dy));
      if (!raf) { last = 0; raf = requestAnimationFrame(glide); }
    };
    const onNativeScroll = () => { if (!wheeling) { target = current = scrollY; } };
    if (fine && !reduce) {
      htmlEl.style.scrollBehavior = 'auto';
      addEventListener('wheel', onWheel, { passive: false });
      addEventListener('scroll', onNativeScroll, { passive: true });
    }

    /* ── progress bar / nav shadow / parallax ────────────── */
    const prog = document.getElementById('scroll-progress');

    // Parallax is DESKTOP ONLY. On touch devices it forced a layout
    // recalculation on every scroll event, which is what made scrolling
    // stutter and fight the browser's momentum. Phones get a completely
    // static hero instead, which is both smoother and kinder to battery.
    const wantsParallax = fine && !reduce && innerWidth > 980;

    let plxEls = [];
    const collectPlx = () => {
      plxEls = wantsParallax
        ? [...document.querySelectorAll('[data-plx]')].map((el) => {
            el.style.willChange = 'transform';
            // Cache the resting position once, so the scroll handler only
            // ever does arithmetic — never a layout read.
            const r = el.getBoundingClientRect();
            return { el, mid: r.top + scrollY + r.height / 2, k: parseFloat(el.dataset.plx || 0.1) };
          })
        : [];
    };
    collectPlx();

    const navEl = document.querySelector('.nav');
    let ticking = false;
    const paint = () => {
      ticking = false;
      const y = scrollY;
      const h = maxScroll();
      if (prog) prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      navEl?.classList.toggle('scrolled', y > 20);
      const mid = y + innerHeight / 2;
      for (const p of plxEls) {
        p.el.style.transform = `translate3d(0, ${-(p.mid - mid) * p.k}px, 0)`;
      }
    };
    // rAF-throttled: at most one paint per frame no matter how many
    // scroll events the browser fires.
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', collectPlx, { passive: true });
    paint();

    /* ── custom cursor ───────────────────────────────────── */
    const cur = document.getElementById('fx-cursor');
    const dot = document.getElementById('fx-dot');
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, craf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; } };
    const cloop = () => { cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16; if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; } craf = requestAnimationFrame(cloop); };
    const over = (e) => { cur?.classList.toggle('grow', !!e.target.closest('a,button,input,select,textarea,[data-tilt]')); };
    if (fine && !reduce) { addEventListener('mousemove', onMove); cloop(); addEventListener('mouseover', over); }

    /* ── magnetic buttons ────────────────────────────────── */
    const magMove = (e) => {
      const b = e.target.closest('.btn');
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.16}px, ${(e.clientY - r.top - r.height / 2) * 0.26}px)`;
    };
    const magOut = (e) => { const b = e.target.closest('.btn'); if (b) b.style.transform = ''; };

    /* ── 3D tilt cards ───────────────────────────────────── */
    const tiltMove = (e) => {
      const c = e.target.closest('[data-tilt], .pf-item');
      if (!c) return;
      const r = c.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
      c.style.transform = `perspective(900px) translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      c.style.setProperty('--gx', ((e.clientX - r.left) / r.width) * 100 + '%');
      c.style.setProperty('--gy', ((e.clientY - r.top) / r.height) * 100 + '%');
    };
    const tiltOut = (e) => { const c = e.target.closest('[data-tilt], .pf-item'); if (c) c.style.transform = ''; };
    if (fine && !reduce) {
      addEventListener('mousemove', magMove); addEventListener('mouseout', magOut);
      addEventListener('mousemove', tiltMove); addEventListener('mouseout', tiltOut);
    }

    return () => {
      htmlEl.style.scrollBehavior = prevBehavior;
      removeEventListener('wheel', onWheel); removeEventListener('scroll', onNativeScroll);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', collectPlx);
      removeEventListener('mousemove', onMove); removeEventListener('mouseover', over);
      removeEventListener('mousemove', magMove); removeEventListener('mouseout', magOut);
      removeEventListener('mousemove', tiltMove); removeEventListener('mouseout', tiltOut);
      if (raf) cancelAnimationFrame(raf); if (craf) cancelAnimationFrame(craf);
    };
  }, []);

  /* reveal-on-scroll + counters — re-run on every route change */
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));

    document.querySelectorAll('[data-count]:not(.done)').forEach((el) => {
      const co = new IntersectionObserver((es) => es.forEach((en) => {
        if (!en.isIntersecting) return;
        co.disconnect(); el.classList.add('done');
        const end = +el.dataset.count, t0 = performance.now(), dur = 1600;
        const tick = (t) => { const pr = Math.min((t - t0) / dur, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - pr, 3))); if (pr < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      }), { threshold: 0.4 });
      co.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="progress" id="scroll-progress" />
      <div className="cursor" id="fx-cursor" />
      <div className="cursor-dot" id="fx-dot" />
    </>
  );
}
