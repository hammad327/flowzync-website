// ╔══════════════════════════════════════════════════════════╗
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
  '5-star-quality-hvac': { w: 800, h: 1410 },
  'ad-consultancy-group': { w: 800, h: 3056 },
  'beauty-and-spa-centre': { w: 800, h: 2976 },
  'bludo-lead-follow-up': { w: 800, h: 2078 },
  'business-breakpoint-quiz': { w: 800, h: 1970 },
  'business-coach': { w: 800, h: 2420 },
  'cleaning-services': { w: 800, h: 4274 },
  'conference-2025': { w: 800, h: 2789 },
  'construction-company': { w: 800, h: 3613 },
  'crown-build-constructions': { w: 800, h: 2747 },
  'das-care-services': { w: 800, h: 2283 },
  'dental-clinic-landing-page': { w: 800, h: 2597 },
  'digital-marketing-email-template-design': { w: 800, h: 944 },
  'digital-marketing': { w: 800, h: 2915 },
  'elevate-assist': { w: 800, h: 3397 },
  'gym-email-template-design': { w: 800, h: 671 },
  'heaven-sent-sleep-baby-care-fun': { w: 800, h: 2590 },
  'imb-exterior-cleaning': { w: 800, h: 2924 },
  'jre-services': { w: 800, h: 3362 },
  'live-freedom-webinar': { w: 800, h: 992 },
  'marketing-failing-to-deliver': { w: 800, h: 3738 },
  'medical-spa-medspa': { w: 800, h: 2428 },
  'medway-drain-services': { w: 800, h: 3733 },
  'myers-insurance-advisors': { w: 800, h: 3067 },
  'nf-living': { w: 800, h: 3262 },
  'roddye-communications': { w: 800, h: 1890 },
  'roller-shutters-online': { w: 800, h: 3023 },
  's-c-exterior-cleaning': { w: 800, h: 2859 },
  'the-right-size-for-any-situation': { w: 800, h: 3144 },
  'travel-explore-beauty-of-the-whole-world': { w: 800, h: 2678 },
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
