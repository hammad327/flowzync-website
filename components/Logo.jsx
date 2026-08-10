// ─────────────────────────────────────────────────────────────
//  Flowzync — "The Zync Loop"
//
//  One unbroken line. It rises into a loop, cuts through as a Z,
//  then rises again — a circuit that never closes, which is what
//  a synced system looks like: always moving, always returning.
//
//  Monoline, no fills, no container box. Legible from 16px to a
//  billboard, works in one colour, and is unmistakable at a glance.
//
//  <LogoMark />           icon only  — favicon, chat bot, avatars
//  <Logo />               icon + wordmark — nav, footer
//  variant="color"        gradient mark (light backgrounds)
//  variant="onDark"       same gradient, brightened for dark backgrounds
//  variant="white"        solid white mark
//  variant="mono"         inherits currentColor (print, stamps)
//
//  onDark exists so the footer and the nav read as the same logo. A flat
//  white mark next to a gradient one looks like two different brands.
// ─────────────────────────────────────────────────────────────
'use client';
import { useId } from 'react';

// The single path that is the entire brand.
export const ZYNC_PATH =
  'M9 31C7 20 12 13.5 18.5 13.5H34L14 34.5H29.5C36 34.5 41 28 39 17';

export function LogoMark({ variant = 'color', size = 38, animated = true }) {
  const uid = useId().replace(/:/g, '');
  const stroke =
    variant === 'white' ? '#FFFFFF'
    : variant === 'mono' ? 'currentColor'
    : `url(#zg-${uid})`;

  // Same gradient, lifted for legibility against the dark footer.
  const stops =
    variant === 'onDark'
      ? ['#8F86FF', '#A99BFF', '#3BE3BC']
      : ['#5B4FE9', '#7C6CF5', '#06C299'];

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className={`zmark${animated ? ' zmark-anim' : ''}`}
    >
      {(variant === 'color' || variant === 'onDark') && (
        <defs>
          <linearGradient id={`zg-${uid}`} x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor={stops[0]} />
            <stop offset=".5" stopColor={stops[1]} />
            <stop offset="1" stopColor={stops[2]} />
          </linearGradient>
        </defs>
      )}
      <path
        d={ZYNC_PATH}
        stroke={stroke}
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="zmark-line"
      />
    </svg>
  );
}

export default function Logo({ variant = 'color', size = 38, wordSize = 20, showWord = true }) {
  const dark = variant === 'white' || variant === 'onDark';
  return (
    <span className="lg" style={{ fontSize: wordSize }}>
      <LogoMark variant={variant} size={size} />
      {showWord && (
        <span className="lg-word" style={{ color: dark ? '#fff' : 'var(--ink)' }}>
          flow<b className={dark ? 'lg-w' : 'lg-c'}>zync</b>
        </span>
      )}
    </span>
  );
}
