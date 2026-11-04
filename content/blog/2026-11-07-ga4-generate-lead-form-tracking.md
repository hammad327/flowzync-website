---
title: "Track Real Form Submissions With GA4 Generate Lead"
seoTitle: "Track Real Form Submissions With GA4 Generate Lead"
description: "Track completed enquiries with GA4 generate_lead and verify that invalid forms, repeated clicks, and refreshes do not inflate the total."
date: "2026-11-07"
publishAt: "2026-11-07T13:00:00+05:00"
category: "Analytics"
cover: "/images/blog/ga4-generate-lead-form-tracking.jpg"
tags: ["GA4 generate_lead form tracking", "Analytics"]
---

If your analytics counts 40 leads and the team can find only 23 enquiries, try an invalid submission. Some setups count every press of the Submit button, including clicks that never created a lead.

## Fire on confirmed success

Ask your developer where the form knows the request succeeded. A reliable signal can be the success callback after the server accepts the submission, or a confirmation event emitted by the form integration. Avoid relying on the button click. If you rely on a thank-you page, test a refresh and a direct visit so both can't create additional conversions.

[GA4's recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead) include `generate_lead`. For an enquiry form, send it after confirmed success. Use a short form identifier such as `quote_request` if you need to distinguish forms. Keep names, emails, phone numbers and form responses out of analytics events and URLs.

## Check the event alongside the inbox

With test traffic and consent handled as your setup requires, open your debugger and submit an empty form. Then submit a valid enquiry and verify exactly one event. Double-click and refresh. If you use a calendar widget, decide whether a confirmed booking needs its own measurement. A widget open and a confirmed time are different outcomes.

Finally, compare your event with the enquiry in your inbox or CRM. Analytics measures observed website behaviour, while the CRM holds the actual records you can follow up. Keep those numbers separate in reporting and investigate a sudden gap. Use our [form delivery guide](/blog/website-contact-form-not-sending-emails) if the success event arrives but the enquiry does not.
