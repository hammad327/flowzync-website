export const maxDuration = 60;
import { guard, privateHeaders } from '@/lib/admin/auth';
import { uploadImage } from '@/lib/admin/content';
export async function POST(req) {
  const d = guard(req);
  if (d) return d;
  try {
    const form = await req.formData();
    const f = form.get('file');
    if (!f || f.size > 2 * 1024 * 1024) throw new Error('Choose a PNG, JPEG or WebP up to 2 MB.');
    const b = Buffer.from(await f.arrayBuffer());
    const ext = b.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) ? 'png' : b[0] === 255 && b[1] === 216 && b[2] === 255 ? 'jpg' : b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP' ? 'webp' : null;
    if (!ext) throw new Error('Only PNG, JPEG and WebP image files are accepted.');
    return Response.json({
      url: await uploadImage(b, ext),
      deploymentPending: true
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
