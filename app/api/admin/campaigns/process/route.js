import { guard, privateHeaders } from '@/lib/admin/auth';
import { processBatch } from '@/lib/admin/outreach';
export const maxDuration = 60;
export async function POST(req) {
  const d = guard(req);
  if (d) return d;
  try {
    return Response.json({
      results: await processBatch()
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 503
    });
  }
}
