// ─────────────────────────────────────────────────────────────
//  HERO VISUAL — "The Zync Loop, at working size"
//
//  The brand mark blown up into a diagram you can actually read:
//  one line enters at the design stage, passes through the build,
//  and loops back out as automation. A single light travels it.
//
//  Deliberately calm. No cursor-tracking, no 3D tilt, no numbers,
//  no floating claim cards. A site assembling itself, once, then still.
//
//  Hidden entirely below 860px: on a phone the headline and the call
//  to action are what matter, and a decorative panel only pushes them
//  down the screen.
//
//  Server-rendered (no 'use client'): it's pure markup + CSS, so
//  it costs the page zero JavaScript and never delays the LCP.
// ─────────────────────────────────────────────────────────────
import { ZYNC_PATH } from '@/components/Logo';

export default function HeroFlow() {
  return (
    <div className="hf" aria-hidden="true">
      {/* the brand line, drawn large and slow behind everything */}
      <svg className="hf-loop" viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="hf-g" x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B4FE9" stopOpacity=".55" />
            <stop offset=".5" stopColor="#7C6CF5" stopOpacity=".4" />
            <stop offset="1" stopColor="#06C299" stopOpacity=".5" />
          </linearGradient>
        </defs>
        <path d={ZYNC_PATH} stroke="url(#hf-g)" strokeWidth="0.24" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* the site being built */}
      <div className="hf-card hf-float">
        <div className="hf-bar">
          <i /><i /><i />
          <span>www.flowzync.com</span>
        </div>
        <div className="hf-body">
          <div className="hf-nav">
            <span className="hf-mark" />
            <i /><i /><i />
            <span className="hf-pill" />
          </div>
          <div className="hf-hero">
            <b className="w70" />
            <b className="w46 thin" />
            <span className="hf-btn" />
          </div>
          <div className="hf-cards">
            <i className="c1" /><i className="c2" /><i className="c3" />
          </div>
          <div className="hf-rows">
            <b className="r1" /><b className="r2" />
          </div>
        </div>
      </div>

      {/* the automation rail: three stages, one travelling pulse */}
      <div className="hf-rail">
        <span className="hf-track" />
        <span className="hf-pulse" />
        <div className="hf-stages">
          <span className="hf-stage s1"><em />Design</span>
          <span className="hf-stage s2"><em />Build</span>
          <span className="hf-stage s3"><em />Automate</span>
        </div>
      </div>

    </div>
  );
}
