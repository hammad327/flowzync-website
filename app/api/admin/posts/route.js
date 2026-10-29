export const maxDuration = 60;
import { guard, privateHeaders } from '@/lib/admin/auth';
import { listArticles, readArticle, saveArticle, cmsReady } from '@/lib/admin/content';
export const dynamic = 'force-dynamic';
export async function GET(req) {
  const d = guard(req);
  if (d) return d;
  try {
    const file = new URL(req.url).searchParams.get('file');
    return Response.json(file ? {
      article: await readArticle(file)
    } : {
      articles: await listArticles(),
      canPublish: cmsReady()
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 400,
      headers: privateHeaders
    });
  }
}
export async function POST(req) {
  const d = guard(req);
  if (d) return d;
  try {
    if (Number(req.headers.get('content-length')) > 200000) return Response.json({
      error: 'Article is too large.'
    }, {
      status: 413
    });
    return Response.json({
      ok: true,
      ...(await saveArticle(await req.json()))
    }, {
      headers: privateHeaders
    });
  } catch (e) {
    return Response.json({
      error: e.message
    }, {
      status: 400,
      headers: privateHeaders
    });
  }
}
