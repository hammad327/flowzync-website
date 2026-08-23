// ─────────────────────────────────────────────────────────────
//  BLOG COVER GENERATOR
//
//  Run:  node scripts/generate-blog-covers.mjs
//
//  Writes one 1400×900 SVG per entry in COVERS below, into
//  /public/images/blog/. Re-running overwrites them, so tweaking the
//  palette here restyles every cover at once.
//
//  WHY SVG RATHER THAN PHOTOGRAPHS
//  Each of these is 1–3 KB and needs no image CDN, no remote fetch and
//  no optimisation pass, so a blog card costs almost nothing to paint.
//  The three original posts pointed at Unsplash URLs, which meant the
//  server had to fetch a third-party image before it could render the
//  card — slower, and broken entirely if that host is unreachable.
//
//  TO USE REAL PHOTOGRAPHY INSTEAD
//  Drop a 1400×900 .jpg or .webp into /public/images/blog/ and point
//  the post's `cover:` at it. Nothing else needs to change, and a
//  raster cover is actually better for Google's article rich results —
//  they do not accept SVG, which is why the schema falls back to the
//  OG image whenever a cover is an SVG.
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'images', 'blog');

// Brand palette, matching app/globals.css.
const INK = '#14123B';
const PURPLE = '#5B4FE9';
const VIOLET = '#7C6CF5';
const MINT = '#06C299';
const PEACH = '#FF9E6D';

// Background pairs, rotated so adjacent cards in the grid never match.
const SKINS = [
  ['#EDEBFF', '#E0F9F2'],
  ['#E8F6FF', '#EFEBFF'],
  ['#FFF0E8', '#F1ECFF'],
  ['#E9FBF4', '#EAF2FF'],
  ['#F3ECFF', '#E4F7FF'],
];

const chrome = (o = 0.10) => `rgba(20,18,59,${o})`;

// ── MOTIFS ────────────────────────────────────────────────────
// Each returns SVG drawn inside a 700×470 box centred on the canvas.
// Deliberately wordless: at blog-card size any caption is unreadable,
// and a clean graphic reads better than 8px of grey text.
const MOTIFS = {
  // Rising bars — cost, pricing, timelines, anything with a number.
  bars: (a, b) => {
    const h = [120, 190, 265, 340, 415];
    return `
    ${h.map((v, i) => `<rect x="${60 + i * 120}" y="${450 - v}" width="86" height="${v}" rx="16"
      fill="url(#g1)" opacity="${0.42 + i * 0.145}"/>`).join('')}
    <path d="M92 300 L212 232 L332 176 L452 116 L572 62" fill="none" stroke="${b}"
      stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    ${[[92, 300], [212, 232], [332, 176], [452, 116], [572, 62]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="${b}" stroke-width="6"/>`).join('')}`;
  },

  // Two panels, one favoured — comparisons and "X vs Y".
  versus: (a, b) => `
    <rect x="30" y="70" width="290" height="330" rx="26" fill="#fff" stroke="${chrome(0.13)}" stroke-width="3"/>
    <rect x="62" y="112" width="150" height="20" rx="10" fill="${a}" opacity=".85"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="62" y="${162 + i * 40}" width="${226 - i * 34}" height="14" rx="7" fill="${chrome(0.14)}"/>`).join('')}
    <rect x="380" y="40" width="290" height="390" rx="26" fill="#fff" stroke="${b}" stroke-width="4"/>
    <rect x="412" y="86" width="150" height="20" rx="10" fill="${b}"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="412" y="${140 + i * 40}" width="${226 - i * 26}" height="14" rx="7" fill="${chrome(0.16)}"/>`).join('')}
    <circle cx="350" cy="235" r="46" fill="url(#g1)"/>
    <path d="M334 235h32M350 219v32" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,

  // Search field over ranked results — anything about Google.
  search: (a, b) => `
    <rect x="40" y="52" width="620" height="92" rx="46" fill="#fff" stroke="${chrome(0.13)}" stroke-width="3"/>
    <circle cx="106" cy="98" r="24" fill="none" stroke="${b}" stroke-width="8"/>
    <path d="M124 116l26 26" stroke="${b}" stroke-width="8" stroke-linecap="round"/>
    <rect x="176" y="88" width="300" height="20" rx="10" fill="${chrome(0.16)}"/>
    ${[0, 1, 2].map((i) => `
      <rect x="40" y="${196 + i * 96}" width="620" height="76" rx="20" fill="#fff"
        stroke="${i === 0 ? b : chrome(0.11)}" stroke-width="${i === 0 ? 4 : 3}"/>
      <circle cx="88" cy="${234 + i * 96}" r="17" fill="${i === 0 ? b : chrome(0.16)}"/>
      <rect x="124" y="${216 + i * 96}" width="${330 - i * 60}" height="15" rx="8" fill="${chrome(0.2)}"/>
      <rect x="124" y="${244 + i * 96}" width="${450 - i * 90}" height="12" rx="6" fill="${chrome(0.1)}"/>`).join('')}`,

  // Constellation — AI, automation, anything about connected systems.
  nodes: (a, b) => {
    const pts = [[110, 130], [330, 62], [560, 148], [200, 300], [430, 262], [620, 340], [120, 410], [360, 420]];
    const links = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [6, 7]];
    return `
    ${links.map(([i, j]) => `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}"
      stroke="${b}" stroke-width="3" opacity=".38"/>`).join('')}
    ${pts.map(([x, y], i) => {
      const r = [0, 4, 7].includes(i) ? 30 : 19;
      return `<circle cx="${x}" cy="${y}" r="${r}" fill="${i % 3 === 0 ? 'url(#g1)' : '#fff'}"
        stroke="${b}" stroke-width="5"/>`;
    }).join('')}`;
  },

  // Ticked rows — checklists and step-by-step guides.
  checklist: (a, b) => `
    <rect x="90" y="30" width="520" height="410" rx="28" fill="#fff" stroke="${chrome(0.12)}" stroke-width="3"/>
    ${[0, 1, 2, 3, 4].map((i) => {
      const y = 92 + i * 72;
      const done = i < 3;
      return `
      <rect x="132" y="${y - 24}" width="48" height="48" rx="14"
        fill="${done ? 'url(#g1)' : 'none'}" stroke="${done ? 'none' : chrome(0.2)}" stroke-width="4"/>
      ${done ? `<path d="M144 ${y}l11 12 21-24" fill="none" stroke="#fff" stroke-width="7"
        stroke-linecap="round" stroke-linejoin="round"/>` : ''}
      <rect x="204" y="${y - 9}" width="${350 - i * 42}" height="18" rx="9"
        fill="${chrome(done ? 0.2 : 0.1)}"/>`;
    }).join('')}`,

  // Funnel — leads, conversion, enquiries.
  funnel: (a, b) => `
    ${[0, 1, 2].map((i) => {
      const top = 60 + i * 110, inset = i * 96;
      return `<path d="M${70 + inset} ${top} H${630 - inset} L${556 - inset} ${top + 86} H${144 + inset} Z"
        fill="url(#g1)" opacity="${0.4 + i * 0.24}"/>`;
    }).join('')}
    <circle cx="350" cy="416" r="42" fill="${b}"/>
    <path d="M334 416l11 12 22-26" fill="none" stroke="#fff" stroke-width="8"
      stroke-linecap="round" stroke-linejoin="round"/>`,

  // Box tree — site structure, how many pages, navigation.
  sitemap: (a, b) => `
    <rect x="265" y="34" width="170" height="76" rx="20" fill="url(#g1)"/>
    <path d="M350 110v52M120 162h460M120 162v46M350 162v46M580 162v46" stroke="${b}"
      stroke-width="4" stroke-linecap="round"/>
    ${[50, 280, 510].map((x) => `<rect x="${x}" y="208" width="140" height="70" rx="18" fill="#fff" stroke="${b}" stroke-width="4"/>`).join('')}
    <path d="M120 278v40M85 318h70M85 318v34M155 318v34M350 278v40M315 318h70M315 318v34M385 318v34" stroke="${chrome(0.26)}" stroke-width="4" stroke-linecap="round"/>
    ${[[30, 352], [120, 352], [260, 352], [350, 352]].map(([x, y]) => `<rect x="${x}" y="${y}" width="110" height="58" rx="15" fill="#fff" stroke="${chrome(0.2)}" stroke-width="3"/>`).join('')}`,

  // Shield and gear — maintenance, security, care plans.
  shield: (a, b) => `
    <path d="M350 34l210 74v146c0 118-88 176-210 212-122-36-210-94-210-212V108z"
      fill="url(#g1)" opacity=".2"/>
    <path d="M350 34l210 74v146c0 118-88 176-210 212-122-36-210-94-210-212V108z"
      fill="none" stroke="${b}" stroke-width="7" stroke-linejoin="round"/>
    <circle cx="350" cy="238" r="66" fill="none" stroke="${b}" stroke-width="7"/>
    <circle cx="350" cy="238" r="24" fill="${b}"/>
    ${Array.from({ length: 8 }, (_, i) => {
      const ang = (i * Math.PI) / 4;
      const x1 = 350 + Math.cos(ang) * 66, y1 = 238 + Math.sin(ang) * 66;
      const x2 = 350 + Math.cos(ang) * 94, y2 = 238 + Math.sin(ang) * 94;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${b}" stroke-width="13" stroke-linecap="round"/>`;
    }).join('')}`,

  // Document stack — briefs, writing, blogging.
  doc: (a, b) => `
    <rect x="150" y="86" width="380" height="330" rx="26" fill="#fff" opacity=".55"
      stroke="${chrome(0.12)}" stroke-width="3" transform="rotate(-6 340 250)"/>
    <rect x="176" y="60" width="380" height="340" rx="26" fill="#fff" stroke="${b}" stroke-width="4"/>
    <rect x="216" y="108" width="180" height="24" rx="12" fill="url(#g1)"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="216" y="${164 + i * 42}" width="${300 - (i % 3) * 66}" height="15" rx="8" fill="${chrome(0.15)}"/>`).join('')}
    <circle cx="516" cy="372" r="46" fill="url(#g1)"/>
    <path d="M498 372l13 14 25-30" fill="none" stroke="#fff" stroke-width="8"
      stroke-linecap="round" stroke-linejoin="round"/>`,

  // Browser window — design, builds, redesigns, speed.
  browser: (a, b) => `
    <rect x="40" y="46" width="620" height="380" rx="26" fill="#fff" stroke="${b}" stroke-width="4"/>
    <path d="M40 122h620" stroke="${chrome(0.13)}" stroke-width="3"/>
    ${[80, 118, 156].map((x, i) => `<circle cx="${x}" cy="84" r="11" fill="${[PEACH, '#FFC947', MINT][i]}"/>`).join('')}
    <rect x="200" y="72" width="330" height="24" rx="12" fill="${chrome(0.09)}"/>
    <rect x="80" y="160" width="240" height="90" rx="18" fill="url(#g1)" opacity=".9"/>
    <rect x="80" y="272" width="180" height="17" rx="9" fill="${chrome(0.17)}"/>
    <rect x="80" y="304" width="240" height="17" rx="9" fill="${chrome(0.1)}"/>
    <rect x="80" y="352" width="132" height="42" rx="21" fill="${b}"/>
    <rect x="368" y="160" width="252" height="234" rx="20" fill="${chrome(0.06)}"/>
    ${[0, 1, 2].map((i) => `<rect x="400" y="${196 + i * 66}" width="${188 - i * 40}" height="15" rx="8" fill="${chrome(0.16)}"/>`).join('')}`,
};

// ── POST → MOTIF ──────────────────────────────────────────────
// Pick a motif that fits the subject, and check the blog grid after:
// posts render newest-first in rows of three, so two posts published
// close together should not share a motif or the row looks duplicated.
const COVERS = {
  'wordpress-website-cost': 'bars',
  'woocommerce-vs-shopify': 'versus',
  'website-not-on-google': 'search',
  'website-brief': 'doc',
  'gohighlevel-vs-hubspot': 'versus',
  'elementor-vs-custom-theme': 'browser',
  'how-many-pages-website': 'sitemap',
  'local-seo-checklist': 'checklist',
  'traffic-but-no-leads': 'funnel',
  'website-build-timeline': 'bars',
  'does-my-business-need-a-blog': 'doc',
  'cheap-website-design': 'browser',
  'ai-search-visibility': 'nodes',
  'google-business-profile': 'checklist',
  'website-maintenance': 'shield',
  // The three original posts, moved off remote Unsplash URLs.
  'website-speed-seo-rankings': 'bars',
  'seo-basics-new-websites': 'search',
  'ghl-funnel-mistakes': 'funnel',
  'website-redesign-signs': 'versus',
};

const build = (motif, i) => {
  const [bg1, bg2] = SKINS[i % SKINS.length];
  const accent = [PURPLE, MINT, VIOLET, PEACH, PURPLE][i % 5];
  const grad = i % 3 === 0 ? [PURPLE, MINT] : i % 3 === 1 ? [VIOLET, PURPLE] : [PURPLE, PEACH];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 900" width="1400" height="900" role="img">
<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient>
<linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${grad[0]}"/><stop offset="1" stop-color="${grad[1]}"/></linearGradient>
<pattern id="dots" width="38" height="38" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="${INK}" opacity=".07"/></pattern>
</defs>
<rect width="1400" height="900" fill="url(#bg)"/>
<rect width="1400" height="900" fill="url(#dots)"/>
<circle cx="1210" cy="150" r="190" fill="${grad[1]}" opacity=".10"/>
<circle cx="180" cy="770" r="150" fill="${grad[0]}" opacity=".09"/>
<g transform="translate(350 215)">${MOTIFS[motif](accent, grad[0])}</g>
<g transform="translate(1252 792)" opacity=".5">
<path d="M9 31C7 20 12 13.5 18.5 13.5H34L14 34.5H29.5C36 34.5 41 28 39 17" fill="none" stroke="${INK}" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;
};

fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const [slug, motif] of Object.entries(COVERS)) {
  if (!MOTIFS[motif]) throw new Error(`Unknown motif "${motif}" for ${slug}`);
  fs.writeFileSync(path.join(OUT, `${slug}.svg`), build(motif, n));
  n += 1;
}
console.log(`Wrote ${n} covers to ${OUT}`);
