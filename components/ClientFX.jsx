'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Native scrolling and visible server-rendered content. No wheel interception,
// magnetic buttons, canvas loop or per-pointer layout work.
export default function ClientFX() {
  const path = usePathname();
  useEffect(() => {
    document.querySelectorAll('[data-count]').forEach((element) => {
      element.textContent = element.dataset.count;
    });
    const nav = document.querySelector('.nav');
    const update = () => nav?.classList.toggle('scrolled', window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [path]);
  return null;
}
