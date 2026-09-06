// ─────────────────────────────────────────────────────────────
//  MEASURE PORTFOLIO SCREENSHOTS  →  lib/projectShots.js
//
//  Run this after adding or replacing anything in
//  /public/images/projects:
//
//      node scripts/measure-project-shots.mjs
//
//  WHY THIS EXISTS
//  The portfolio card scrolls a full-page screenshot on hover. The
//  screenshots are wildly different lengths — the shortest is 671px
//  tall, the longest 4274px — so a single transition duration made
//  the long ones race past and the short ones crawl. The card now
//  sets its own duration from the real pixel height, which it can
//  only do if the height is known at build time.
//
//  next/image also wants the true intrinsic size: give it the wrong
//  ratio and it reserves the wrong amount of space, which shows up
//  as layout shift while the image loads.
//
//  This reads the dimensions straight out of the JPEG/PNG headers,
//  so it needs no image library.
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'public', 'images', 'projects');
const OUT = path.join(process.cwd(), 'lib', 'projectShots.js');

/** Width and height from a JPEG's start-of-frame marker. */
function jpegSize(b) {
  let i = 2;
  while (i < b.length - 9) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    // SOF0-SOF15, excluding the DHT/JPG/DAC markers that share the range.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
    }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}

/** Width and height from a PNG's IHDR chunk, which is always first. */
const pngSize = (b) => ({ w: b.readUInt32BE(16), h: b.readUInt32BE(20) });

const sizes = {};
for (const file of fs.readdirSync(DIR).sort()) {
  const ext = path.extname(file).toLowerCase();
  const buf = fs.readFileSync(path.join(DIR, file));
  const size = ext === '.png' ? pngSize(buf) : jpegSize(buf);
  if (!size?.w || !size?.h) {
    console.warn(`  ! could not read dimensions: ${file}`);
    continue;
  }
  sizes[file.replace(/\.[^.]+$/, '')] = size;
}

const rows = Object.entries(sizes)
  .map(([k, v]) => `  '${k}': { w: ${v.w}, h: ${v.h} },`)
  .join('\n');

fs.writeFileSync(OUT, `// ╔══════════════════════════════════════════════════════════╗
// ║  GENERATED FILE — DO NOT EDIT BY HAND                     ║
// ║  node scripts/measure-project-shots.mjs                   ║
// ╚══════════════════════════════════════════════════════════╝
//
//  True pixel dimensions of every portfolio screenshot, keyed by
//  the image filename (which is the project's imgKey).
//
//  Used for two things:
//   1. next/image gets the real intrinsic size, so it reserves the
//      right space and the card does not shift as the image loads.
//   2. The hover-scroll duration is derived from the height, so a
//      4000px screenshot and a 700px one travel at the same speed.

export const projectShots = {
${rows}
};

//  How fast the hover scroll should travel, in CSS pixels per second.
//  Low enough to read a section as it passes; the previous fixed 6s
//  worked out at roughly 460px/s on the longest screenshot.
//
//  These three constants mirror the ones in components/PortfolioGrid.jsx.
//  They produce the server-rendered estimate, which is what applies
//  before hydration; the component then measures the real card width
//  and overwrites it. Keep them in step so the two agree.
export const SCROLL_SPEED = 150;

//  The visible height of the card's screenshot window (.pf-thumb is
//  330px, of which .pf-chrome takes 50px), and a typical card width on
//  a desktop grid. Repeated here because the estimate has to exist
//  before the browser has laid anything out.
export const CARD_WINDOW_H = 280;
export const CARD_RENDER_W = 560;

/**
 * Seconds for one hover scroll of a screenshot, so that every card
 * travels at the same reading speed regardless of page length.
 * Clamped: nothing snaps, and nothing outlasts a plausible hover.
 */
export function scrollDuration(imgKey) {
  const shot = projectShots[imgKey];
  if (!shot) return 8;
  const renderedH = shot.h * (CARD_RENDER_W / shot.w);
  const distance = renderedH - CARD_WINDOW_H;
  if (distance <= 0) return 0;
  // Rounded to a tenth — 30 of these are inlined as style attributes.
  return Math.round(Math.min(20, Math.max(4, distance / SCROLL_SPEED)) * 10) / 10;
}
`);

console.log(`✓ ${Object.keys(sizes).length} screenshots measured → lib/projectShots.js`);
