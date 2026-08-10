// Issues a fresh spam-check question for the contact form and chatbot.
import { createChallenge } from '@/lib/challenge';

export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json(createChallenge(), {
    headers: { 'Cache-Control': 'no-store' },
  });
}
