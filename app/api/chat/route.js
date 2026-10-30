import { chatReply } from '@/lib/chatKnowledge';
import { getAllPosts } from '@/lib/posts';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    if (Number(req.headers.get('content-length')) > 24000) return Response.json({ error: 'Message is too long.' }, { status: 413, headers });
    const body = await req.text();
    if (body.length > 24000) return Response.json({ error: 'Message is too long.' }, { status: 413, headers });
    const { messages } = JSON.parse(body);
    if (!Array.isArray(messages)) return Response.json({ error: 'Please send a message.' }, { status: 400, headers });
    const clean = messages.filter(m => m && ['user', 'assistant'].includes(m.role) && typeof m.content === 'string').slice(-14).map(m => ({ role: m.role, content: m.content.slice(0, 1200) }));
    if (!clean.some(m => m.role === 'user')) return Response.json(chatReply([{ role: 'user', content: 'Hello' }]), { headers });
    return Response.json(chatReply(clean, getAllPosts()), { headers });
  } catch {
    return Response.json({ reply: 'Please try again, or contact the Flowzync team.', links: [{ label: 'Contact the team', href: '/contact' }] }, { status: 400, headers });
  }
}
