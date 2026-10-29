import { createHmac, timingSafeEqual } from 'node:crypto';
const COOKIE = 'fz_session';
const digest = v => createHmac('sha256', process.env.ADMIN_PASSWORD || 'disabled').update(v).digest('hex');
export function same(a, b) {
  const x = Buffer.from(String(a)),
    y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}
export function sessionValue() {
  const payload = Buffer.from(JSON.stringify({
    exp: Date.now() + 8 * 3600000
  })).toString('base64url');
  return `${payload}.${digest(payload)}`;
}
export function authorised(req) {
  if (!process.env.ADMIN_PASSWORD) return false;
  const bearer = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (bearer && same(bearer, process.env.ADMIN_PASSWORD)) return true;
  const value = (req.headers.get('cookie') || '').split(';').map(x => x.trim()).find(x => x.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1) || '';
  const [p, s] = value.split('.');
  if (!p || !s || !same(s, digest(p))) return false;
  try {
    return JSON.parse(Buffer.from(p, 'base64url')).exp > Date.now();
  } catch {
    return false;
  }
}
export function sameOrigin(req) {
  const origin = req.headers.get('origin');
  if (!origin) return true;
  try {
    const host = req.headers.get('host') || new URL(req.url).host;
    const protocol = (req.headers.get('x-forwarded-proto') || new URL(req.url).protocol.replace(':','')).split(',')[0].trim();
    return new URL(origin).origin === `${protocol}://${host}`;
  } catch { return false; }
}
export function guard(req) {
  if (!authorised(req)) return Response.json({
    error: 'Sign in to continue.'
  }, {
    status: 401
  });
  if (!['GET', 'HEAD'].includes(req.method)) {
    if (!sameOrigin(req)) return Response.json({
      error: 'Origin not allowed.'
    }, {
      status: 403
    });
  }
  return null;
}
export function cookie(value, maxAge = 28800) {
  return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;
}
export const privateHeaders = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow'
};
