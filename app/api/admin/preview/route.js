import { guard, privateHeaders } from '@/lib/admin/auth';
import { markdownHtml } from '@/lib/markdown';
export async function POST(req) {
  const d = guard(req);
  if (d) return d;
  const {
    content
  } = await req.json();
  if (typeof content !== 'string' || content.length > 150000) return Response.json({
    error: 'Preview is too large.'
  }, {
    status: 400
  });
  return Response.json({
    html: markdownHtml(content)
  }, {
    headers: privateHeaders
  });
}
