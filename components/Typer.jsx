'use client';
import { useEffect, useState } from 'react';
export default function Typer({ words }) {
  const [txt, setTxt] = useState('');
  useEffect(() => {
    let wi = 0, ci = 0, del = false, to;
    const tick = () => {
      const w = words[wi];
      setTxt(w.slice(0, ci));
      if (!del && ci < w.length) { ci++; to = setTimeout(tick, 90); }
      else if (!del) { del = true; to = setTimeout(tick, 1600); }
      else if (ci > 0) { ci--; to = setTimeout(tick, 45); }
      else { del = false; wi = (wi + 1) % words.length; to = setTimeout(tick, 300); }
    };
    tick();
    return () => clearTimeout(to);
  }, [words]);
  return <span className="typer">{txt}</span>;
}
