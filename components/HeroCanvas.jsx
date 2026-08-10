'use client';
// Ambient particle field behind the hero.
//
// The network drifts on its own, and reacts to the cursor: nodes within
// range ease away from it and brighten, and the cursor links itself into
// the web. It settles back the moment the mouse leaves — the effect
// should feel like the page noticing you, not like a toy.
//
// Deliberately sparse and slow. Pauses entirely when scrolled off-screen,
// and skips the interaction on touch devices and for reduced-motion users.
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let w, h, raf, parts = [], visible = true;
    // Cursor position in canvas space. Starts far away so nothing reacts
    // until the pointer actually arrives.
    let mx = -9999, my = -9999, mActive = false;
    const interactive =
      matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce;
    const COLORS = ['91,79,233', '124,108,245', '6,194,153'];
    const dpr = Math.min(devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = r.width * dpr;
      h = canvas.height = r.height * dpr;
      canvas.style.width = r.width + 'px';
      canvas.style.height = r.height + 'px';
      const n = Math.min(46, Math.floor(r.width / 26));
      parts = Array.from({ length: n }, () => {
        const x = Math.random() * w, y = Math.random() * h;
        return {
          x, y,
          // Home position — nodes always ease back to their own drift
          // path rather than being permanently shoved out of shape.
          hx: x, hy: y,
          vx: (Math.random() - 0.5) * 0.18 * dpr,
          vy: (Math.random() - 0.5) * 0.18 * dpr,
          r: (Math.random() * 1.5 + 0.9) * dpr,
          c: COLORS[(Math.random() * COLORS.length) | 0],
        };
      });
    };

    const LINK = 120 * dpr;
    const MOUSE_R = 150 * dpr;      // how far the cursor's influence reaches
    const PUSH = 0.55;              // how firmly nodes are nudged away

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of parts) {
        // free drift
        p.hx += p.vx; p.hy += p.vy;
        if (p.hx < 0 || p.hx > w) p.vx *= -1;
        if (p.hy < 0 || p.hy > h) p.vy *= -1;

        // cursor repulsion, easing back to the drift path when it leaves
        let tx = p.hx, ty = p.hy, lift = 0;
        if (mActive) {
          const dx = p.hx - mx, dy = p.hy - my;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_R && dist > 0.01) {
            const force = (1 - dist / MOUSE_R) ** 2;
            tx += (dx / dist) * force * MOUSE_R * PUSH;
            ty += (dy / dist) * force * MOUSE_R * PUSH;
            lift = force;            // nearby nodes also brighten and grow
          }
        }
        // ease toward the target so movement is fluid, never snappy
        p.x += (tx - p.x) * 0.12;
        p.y += (ty - p.y) * 0.12;
        p.lift = (p.lift || 0) + (lift - (p.lift || 0)) * 0.14;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c},${0.4 + p.lift * 0.5})`;
        ctx.arc(p.x, p.y, p.r * (1 + p.lift * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            const near = Math.max(a.lift || 0, b.lift || 0);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${a.c},${(1 - Math.sqrt(d) / LINK) * (0.13 + near * 0.3)})`;
            ctx.lineWidth = dpr * (1 + near * 0.6);
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // the cursor joins the web while it is over the hero
      if (mActive) {
        for (const p of parts) {
          const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
          if (d < MOUSE_R) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${p.c},${(1 - d / MOUSE_R) * 0.34})`;
            ctx.lineWidth = dpr;
            ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke();
          }
        }
      }
    };
    const tick = () => { draw(); raf = requestAnimationFrame(tick); };

    resize();
    addEventListener('resize', resize);

    // Track the pointer relative to the canvas, in canvas pixels.
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= r.left && e.clientX <= r.right &&
        e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) { mActive = false; return; }
      mx = (e.clientX - r.left) * dpr;
      my = (e.clientY - r.top) * dpr;
      mActive = true;
      // Wake the loop if reduced-motion left it drawing a single frame.
      if (reduce && !raf) draw();
    };
    const onLeave = () => { mActive = false; };
    if (interactive) {
      addEventListener('mousemove', onMove, { passive: true });
      addEventListener('mouseout', onLeave, { passive: true });
    }

    // Stop painting when the hero scrolls away — saves battery and CPU.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce && !raf) tick();
      if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
    }, { threshold: 0 });
    io.observe(canvas);

    if (reduce && !interactive) draw();
    else tick();

    return () => {
      removeEventListener('resize', resize);
      removeEventListener('mousemove', onMove);
      removeEventListener('mouseout', onLeave);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
