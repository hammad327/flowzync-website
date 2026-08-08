// ─────────────────────────────────────────────────────────────
//  Kept as an alias so any existing links, bookmarked webhooks or
//  third-party forms pointing at /api/contact keep working.
//  All enquiries now flow through the lead pipeline in /api/leads,
//  which stores the record AND sends the email notification.
// ─────────────────────────────────────────────────────────────
export { POST } from '@/app/api/leads/route';
