// Emails a new lead to the inbox. Shared by the contact form and the
// chatbot so both produce an identical, scannable notification.
import nodemailer from 'nodemailer';
import { site } from '@/lib/site';

const row = (label, value) =>
  value ? `<tr><td style="padding:7px 0;color:#8B89A6;width:120px">${label}</td><td style="padding:7px 0;color:#14123B"><b>${value}</b></td></tr>` : '';

export async function notifyNewLead(lead) {
  const user = (process.env.GMAIL_USER || '').trim();
  // App passwords are displayed with spaces; Gmail expects them without.
  const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

  if (!user || !pass) {
    console.warn(
      '⚠️  Lead email NOT sent — GMAIL_USER and/or GMAIL_APP_PASSWORD are missing.\n' +
      '    The lead is still saved. Add both in Vercel and redeploy.\n' +
      '    Lead:', lead.name, lead.email
    );
    return { sent: false, reason: 'not-configured' };
  }

  const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });

  // Fail loudly in the log rather than silently swallowing the reason.
  try {
    await transporter.verify();
  } catch (err) {
    console.error(
      '⚠️  Gmail rejected the credentials, so no lead email was sent.\n' +
      '    Most likely: GMAIL_APP_PASSWORD is a normal Google password rather than\n' +
      '    a 16-character App Password, or 2-Step Verification is off.\n' +
      '    Error:', err.message
    );
    return { sent: false, reason: 'auth-failed', error: err.message };
  }
  const origin = lead.source === 'chatbot' ? 'Zync chat' : 'Contact form';

  await transporter.sendMail({
    from: `"Flowzync Website" <${user}>`,
    to: process.env.CONTACT_TO || site.email,
    replyTo: lead.email || undefined,
    subject: `New lead — ${lead.name || lead.email || lead.phone} (${lead.service || origin})`,
    text: [
      `Source: ${origin}`, `Name: ${lead.name}`, `Email: ${lead.email}`,
      `Phone: ${lead.phone}`, `Service: ${lead.service}`, `Budget: ${lead.budget}`,
      `Timeline: ${lead.timeline}`, `Page: ${lead.source_page}`, ``,
      `Message:`, lead.message || '(none)',
      lead.transcript ? `\n\nChat transcript:\n${lead.transcript}` : '',
    ].join('\n'),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px">
        <h2 style="color:#5B4FE9;margin-bottom:4px">New lead</h2>
        <p style="color:#8B89A6;margin-top:0;font-size:13px">via ${origin}</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          ${row('Name', lead.name)}${row('Email', lead.email)}${row('Phone', lead.phone)}
          ${row('Service', lead.service)}${row('Budget', lead.budget)}${row('Timeline', lead.timeline)}
          ${row('Page', lead.source_page)}
        </table>
        ${lead.message ? `<p style="background:#F7F8FD;border-left:4px solid #5B4FE9;padding:14px;border-radius:0 8px 8px 0;white-space:pre-wrap;font-size:14px">${lead.message}</p>` : ''}
        ${lead.transcript ? `<details style="margin-top:16px"><summary style="cursor:pointer;color:#5B4FE9;font-size:13px">Chat transcript</summary><pre style="white-space:pre-wrap;background:#F7F8FD;padding:12px;border-radius:8px;font-size:12px;color:#4A4869">${lead.transcript}</pre></details>` : ''}
        <p style="color:#8B89A6;font-size:12px;margin-top:20px">Also saved to your dashboard at ${site.url}/admin</p>
      </div>`,
  });
  console.log('Lead email sent to', process.env.CONTACT_TO || site.email);
  return { sent: true };
}
