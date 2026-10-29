import { readOptOut } from '@/lib/admin/outreach';
import { db } from '@/lib/admin/db';
export const dynamic = 'force-dynamic';
export async function GET(req) {
  const token = new URL(req.url).searchParams.get('token');
  if (!readOptOut(token)) return new Response('This unsubscribe link is invalid.', {
    status: 400
  });
  const safe = token.replace(/[^A-Za-z0-9._-]/g, '');
  return new Response(`<!doctype html><html lang="en"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width"><title>Flowzync email preferences</title><body style="font:18px system-ui;padding:8vh 8vw;max-width:650px"><h1>Stop outreach emails</h1><p>Confirm to stop future Flowzync outreach to this address.</p><form method="post"><input type="hidden" name="token" value="${safe}"><button style="padding:14px 22px">Unsubscribe</button></form></body></html>`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex'
    }
  });
}
export async function POST(req) {
  try {
    const f = await req.formData();
    const v = readOptOut(f.get('token') || new URL(req.url).searchParams.get('token'));
    if (!v) return new Response('Invalid link.', {
      status: 400
    });
    await db('outreach_suppressions', {
      method: 'POST',
      headers: {
        Prefer: 'resolution=ignore-duplicates'
      },
      body: JSON.stringify(v)
    });
    return new Response('You are unsubscribed from future Flowzync outreach.', {
      headers: {
        'Content-Type': 'text/plain',
        'X-Robots-Tag': 'noindex'
      }
    });
  } catch {
    return new Response('Could not save your preference. Please email info@flowzync.com.', {
      status: 503
    });
  }
}
