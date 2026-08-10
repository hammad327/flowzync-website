// ─────────────────────────────────────────────────────────────
//  SPAM PROTECTION — a self-contained challenge, no third party.
//
//  Three layers, because no single one is reliable on its own:
//
//   1. A signed arithmetic question. The server issues it and signs
//      the answer, so nothing can be forged client-side and no
//      session storage is needed (important on serverless).
//   2. A honeypot field, hidden from people, filled in by bots.
//   3. A minimum elapsed time. Humans take more than three seconds
//      to read and complete a form; scripts submit instantly.
//
//  This blocks the overwhelming majority of automated spam without
//  making a real person decipher warped text or click traffic lights.
//  If you later want hCaptcha or Cloudflare Turnstile, they slot in
//  alongside this rather than replacing it.
// ─────────────────────────────────────────────────────────────
import crypto from 'crypto';

const TTL_MS = 30 * 60 * 1000;   // a challenge is valid for 30 minutes
const MIN_FILL_MS = 3000;        // faster than this is not a human

// Signed with ADMIN_PASSWORD if present, so the secret is never
// hard-coded. Falls back to a per-boot random value.
const SECRET =
  process.env.CAPTCHA_SECRET ||
  process.env.ADMIN_PASSWORD ||
  (globalThis.__fzCaptchaSecret ||= crypto.randomBytes(32).toString('hex'));

const sign = (payload) =>
  crypto.createHmac('sha256', SECRET).update(payload).digest('base64url');

/** Issues a question plus a signed token that encodes the answer. */
export function createChallenge() {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  // Addition only — subtraction trips people up more than it stops bots.
  const answer = a + b;
  const expires = Date.now() + TTL_MS;
  const payload = `${answer}.${expires}`;
  return {
    question: `What is ${a} + ${b}?`,
    token: `${Buffer.from(payload).toString('base64url')}.${sign(payload)}`,
  };
}

/**
 * Returns null when the submission looks human, or a short reason
 * string when it does not.
 */
export function verifyChallenge({ token, answer, honeypot, startedAt }) {
  // 1. Honeypot — a real person never sees this field.
  if (honeypot) return 'honeypot';

  // 2. Timing.
  const elapsed = Date.now() - Number(startedAt || 0);
  if (!startedAt || elapsed < MIN_FILL_MS) return 'too-fast';

  // 3. Signed answer.
  if (!token || typeof token !== 'string') return 'missing-token';
  const [encoded, sig] = token.split('.');
  if (!encoded || !sig) return 'malformed-token';

  const payload = Buffer.from(encoded, 'base64url').toString();
  const expected = sign(payload);
  // Timing-safe compare, guarding against unequal lengths.
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return 'bad-signature';

  const [correct, expires] = payload.split('.');
  if (Date.now() > Number(expires)) return 'expired';
  if (String(answer).trim() !== correct) return 'wrong-answer';

  return null;
}
