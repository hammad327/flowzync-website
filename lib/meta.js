// ─────────────────────────────────────────────────────────────
//  META LENGTH GUARDS
//
//  Search engines truncate long titles and descriptions, and Bing
//  Webmaster Tools reports anything outside the limits as an error
//  that blocks its quality checks.
//
//  Rather than trusting every page's copy to stay in range forever,
//  these run at build time on every page. Writing a description
//  that is slightly too long is then harmless — it gets trimmed at
//  a sentence boundary instead of mid-word, so the result still
//  reads as a finished sentence.
//
//  Limits:
//    Title        ≤ 60 characters  (Google/Bing show ~60)
//    Description  25–158 characters (they show ~160)
// ─────────────────────────────────────────────────────────────

const TITLE_MAX = 60;
const DESC_MAX = 158;
const DESC_MIN = 25;

/**
 * Trims a title to fit. Drops the brand suffix first, since that is
 * the least informative part, and only cuts words as a last resort.
 */
export function clampTitle(title, max = TITLE_MAX) {
  if (!title) return title;
  let t = title.trim();
  if (t.length <= max) return t;

  // 1. Drop a trailing brand suffix: "… — Flowzync" or "… | Flowzync"
  const withoutBrand = t.replace(/\s*[—–|-]\s*Flowzync\s*$/i, '').trim();
  if (withoutBrand.length <= max) return withoutBrand;
  t = withoutBrand;

  // 2. Drop the segment after the last separator, which is usually the
  //    secondary phrase rather than the primary keyword.
  const parts = t.split(/\s*[|—–]\s*/);
  while (parts.length > 1 && parts.join(' | ').length > max) parts.pop();
  const joined = parts.join(' | ');
  if (joined.length <= max && joined.length > 0) return joined;

  // 3. Last resort: cut on a word boundary. No ellipsis — a clipped
  //    title reads better than one advertising that it was clipped.
  return t.slice(0, max).replace(/\s+\S*$/, '').trim();
}

/**
 * Trims a description to fit, preferring to drop whole trailing
 * sentences so the result still ends cleanly.
 */
export function clampDescription(desc, max = DESC_MAX) {
  if (!desc) return desc;
  const d = desc.trim().replace(/\s+/g, ' ');
  if (d.length <= max) return d;

  // Build two candidates and keep whichever uses the space better —
  // a clean sentence break is nicer, but not at the cost of throwing
  // away half the snippet Google will happily display.
  let bySentence = '';
  const sentences = d.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (sentences && sentences.length > 1) {
    for (const s of sentences) {
      if ((bySentence + s).trim().length > max) break;
      bySentence += s;
    }
    bySentence = bySentence.trim();
  }

  const byWord = (() => {
    const cut = d.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[,;:—–-]$/, '').trim();
    return cut.endsWith('.') ? cut : `${cut}…`;
  })();

  // Prefer the sentence break unless it wastes more than ~25 characters.
  if (bySentence.length >= DESC_MIN && bySentence.length >= max - 25) return bySentence;
  return byWord.length >= DESC_MIN ? byWord : bySentence || byWord;
}

/** Convenience wrapper for a page's metadata object. */
export function pageMeta({ title, description, ...rest }) {
  return {
    ...(title ? { title: { absolute: clampTitle(title) } } : {}),
    ...(description ? { description: clampDescription(description) } : {}),
    ...rest,
  };
}
