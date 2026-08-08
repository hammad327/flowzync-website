'use client';
// Ambient particle field behind the hero. Deliberately sparse and slow —
// it should read as atmosphere, never as an animation competing for
// attention. Pauses entirely off-screen and for reduced-motion users.
import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let w, h, raf, parts = [], visible = true;
    const COLORS = ['91,79,233', '124,108,245', '6,194,153'];
    const dpr = Math.min(devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = r.width * dpr;
      h = canvas.height = r.height * dpr;
      canvas.style.width = r.width + 'px';
      canvas.style.height = r.height + 'px';
      const n = Math.min(46, Math.floor(r.width / 26));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.5 + 0.9) * dpr,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      }));
    };

    const LINK = 120 * dpr;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.c},.4)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${a.c},${(1 - Math.sqrt(d) / LINK) * 0.13})`;
            ctx.lineWidth = dpr;
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
    };
    const tick = () => { draw(); raf = requestAnimationFrame(tick); };

    resize();
    addEventListener('resize', resize);

    // Stop painting when the hero scrolls away — saves battery and CPU.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduce && !raf) tick();
      if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
    }, { threshold: 0 });
    io.observe(canvas);

    if (reduce) draw(); else tick();

    return () => {
      removeEventListener('resize', resize);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
