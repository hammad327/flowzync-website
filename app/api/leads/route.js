// POST /api/leads — public: the contact form and Zync both post here.
import { createLead } from '@/lib/leads';
import { notifyNewLead } from '@/lib/notify';

export async function POST(req) {
  try {
    const body = await req.json();
    const lead = await createLead(body);
    // Email notification is best-effort: a mail failure must never
    // lose the lead, because the record is already stored.
    notifyNewLead(lead).catch((e) => console.error('Lead email failed:', e));
    return Response.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error('Lead capture failed:', err);
    return Response.json(
      { ok: false, error: 'We could not save that. Please try again or email us directly.' },
      { status: 400 }
    );
  }
}
