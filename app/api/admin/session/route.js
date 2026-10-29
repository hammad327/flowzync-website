import { authorised, sameOrigin, same, sessionValue, cookie, privateHeaders } from '@/lib/admin/auth';
const attempts = globalThis.__fzAuthAttempts || (globalThis.__fzAuthAttempts = new Map());
export async function GET(req) {
  return Response.json({
    ok: authorised(req)
  }, {
    status: authorised(req) ? 200 : 401,
    headers: privateHeaders
  });
}
export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({
    error: 'Origin not allowed.'
  }, {
    status: 403
  });
  if (!process.env.ADMIN_PASSWORD) return Response.json({
    error: 'Dashboard is locked. Configure ADMIN_PASSWORD on the server.'
  }, {
    status: 503
  });
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0];
  const now = Date.now();
  for (const [k, v] of attempts) if (v.until < now) attempts.delete(k);
  const a = attempts.get(ip) || {
    count: 0,
    until: now + 900000
  };
  if (a.count >= 10) return Response.json({
    error: 'Too many attempts. Try again in 15 minutes.'
  }, {
    status: 429
  });
  try {
    const {
      password
    } = await req.json();
    if (!same(password || '', process.env.ADMIN_PASSWORD)) {
      a.count++;
      attempts.set(ip, a);
      return Response.json({
        error: 'Password was not accepted.'
      }, {
        status: 401
      });
    }
    attempts.delete(ip);
    return Response.json({
      ok: true
    }, {
      headers: {
        ...privateHeaders,
        'Set-Cookie': cookie(sessionValue())
      }
    });
  } catch {
    return Response.json({
      error: 'Invalid request.'
    }, {
      status: 400
    });
  }
}
export async function DELETE() {
  return Response.json({
    ok: true
  }, {
    headers: {
      ...privateHeaders,
      'Set-Cookie': cookie('', 0)
    }
  });
}
