---
title: "Website Contact Form Not Sending Emails? Work Through This"
description: "Why contact form submissions silently vanish, how to tell whether the form or the email is at fault, and the fix that stops it happening again."
updated: "2026-10-27"
date: "2026-09-26"
category: "Support"
cover: "/images/blog/contact-form-not-sending.svg"
faqs:
  - q: "Why is my website contact form not sending emails?"
    a: "Usually the email is being sent and then discarded. Shared hosting sends mail from an address that fails SPF and DKIM checks for your domain, so it is silently binned as spoofing. The form is working; the delivery is not. A proper transactional email service with an authenticated sending domain fixes it permanently."
  - q: "How do I know whether submissions are reaching me at all?"
    a: "Store them. A form that only emails has no record, so a delivery failure looks identical to nobody enquiring. Log every submission to a database, a spreadsheet or your CRM and send the email as a notification on top. Then a missing email is an inconvenience rather than a lost customer."
  - q: "Why do form emails go to spam?"
    a: "Because the sending server is not authorised to send on behalf of your domain. If a form sends from enquiries@yourdomain.com but the message leaves a shared host with no SPF or DKIM alignment, receiving servers treat it as forged. Sending from an authenticated service and putting the customer's address in reply-to fixes it."
  - q: "How many enquiries could I be losing?"
    a: "There is no way to know retrospectively, which is the uncomfortable part — a silently failing form leaves no trace at either end. That is the argument for storing submissions before anything else, because it is the only change that makes the problem visible."
---

The uncomfortable thing about a broken contact form is that it looks exactly like a quiet month. No error, no bounce, no complaint. Just fewer enquiries than you expected, and no way to tell the difference.

Here is how to find out which one you are looking at, in order.

## Step one: is it sending, or is it being thrown away?

These are different problems and almost everyone diagnoses the wrong one.

Submit the form yourself and watch what the page does. If you get the thank-you message, the form worked — the submission was accepted by the server. The question is now entirely about email delivery.

Then check, in order: the inbox, the spam folder, and your mail server's logs if you can reach them. If the message is in spam, you have an authentication problem, not a form problem. If it is nowhere at all, it was rejected before it arrived.

## Step two: check the delivery configuration

Most contact forms on small business sites use whatever the hosting provides — PHP `mail()` on shared hosting, or a plugin's default sending. That sends your message from a server which has no authorisation to send mail for your domain.

Receiving mail servers check two things: **SPF**, a published list of servers allowed to send for your domain, and **DKIM**, a cryptographic signature proving the message came from one of them. A form emailing *from* enquiries@yourdomain.com via a random shared host fails both. The message looks, by every available signal, like somebody forging your address.

Gmail and Microsoft 365 have both tightened this considerably. What used to land in spam is now frequently discarded with no bounce at all — which is precisely why this fails silently.

The other common variant: the form sets the **from** address to the customer's email so you can hit reply. That is worse. You are now sending mail claiming to be from gmail.com, via your host, and Gmail's own SPF record says that server is not allowed. Put the customer's address in **reply-to** and send from your own authenticated domain.

## Step three: the fix that holds

**Send through a transactional email service.** Postmark, Resend, SendGrid, Mailgun, Amazon SES — any of them, several free at the volumes a contact form produces. You verify your domain once, add the DNS records they give you, and messages are then properly signed and authorised.

**Authenticate the domain properly.** SPF, DKIM and a DMARC record. Thirty minutes at your DNS provider, and it improves every email your domain sends, not just the form.

**Send from your domain, reply to the customer.** From: `website@yourdomain.com`. Reply-To: the customer's address. You keep one-click replies and lose the spoofing problem.

**Put the enquiry in the subject line.** "Website enquiry — Sarah Jenkins — boiler service, Maidstone" is findable in six months. "New form submission" is not.

## Step four: stop relying on email at all

This is the part that actually matters, and it is the step people skip because the form is working again.

Email is a notification channel. It is not storage. Any system where the only copy of a customer enquiry travels through spam filters is a system that will lose enquiries eventually.

**Store every submission before sending anything.** Database, spreadsheet, CRM — the destination matters less than the fact that it exists. The email becomes a convenience on top of a record you already hold.

**Send to more than one person.** One inbox is one holiday, one staff change or one full mailbox away from silence.

**Add a second channel for urgent enquiries.** An SMS or a message into whatever the team actually watches during the day. Email is not where urgent things get noticed.

**Check the record weekly against the emails.** Any gap is your delivery rate, measured rather than assumed.

## The ones that catch people out

**An over-eager spam filter.** Some plugins silently discard anything with a URL in it, or anything submitted faster than a threshold. Legitimate enquiries disappear with no log. Check what your anti-spam is rejecting rather than trusting it.

**A full mailbox.** Mail to a mailbox at quota is rejected. The sender may get a bounce; often the form does not surface it.

**A forwarding chain.** Mail forwarded from one address to another frequently breaks SPF alignment at the second hop and gets dropped there, even though it arrived at the first address perfectly.

**A changed email address.** Someone updated the office address months ago and the form still points at the old one, which silently rejects.

**An expired plugin licence.** Some form plugins stop sending, rather than stop working, when a licence lapses. The form looks fine.

## The quickest check you can do right now

Submit your own form with a note, and at the same time send yourself an ordinary email from a free webmail account. If the ordinary email arrives and the form submission does not, the problem is your form's sending path — not your inbox, not your filters, not a quiet month.

---

*Form delivery, storage and notification are part of every site we build, and something we fix on sites we did not. [Here is what support covers](/services/maintenance-support).*

## Sources and scope

The recommendations in this guide are Flowzync’s practical opinion. The linked documentation supports the relevant platform or technical requirements; it does not establish a promised commercial result.

- [MDN: sending form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).
