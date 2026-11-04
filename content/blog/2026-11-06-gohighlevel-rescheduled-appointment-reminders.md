---
title: "Stop Old GoHighLevel Reminders After Rescheduling"
seoTitle: "Stop Old GoHighLevel Reminders After Rescheduling"
description: "Test a GoHighLevel appointment reminder workflow so moving or cancelling a booking does not leave a stale reminder queued for the original slot."
date: "2026-11-06"
publishAt: "2026-11-06T08:00:00+05:00"
category: "Automation"
cover: "/images/blog/gohighlevel-rescheduled-appointment-reminders.jpg"
tags: ["GoHighLevel rescheduled appointment reminders", "Automation"]
---

A consultation moves from Tuesday to Thursday. On Monday evening the client gets a reminder for Tuesday anyway. The calendar is right. The scheduled message is the part to investigate.

## Follow a booking through the workflow

Create a test contact you control and book a slot using the same calendar link clients use. In HighLevel, inspect which workflows enrolled the contact and where the reminder is waiting. Move the booking, then check whether the old enrolment is still waiting, whether a new one starts and which appointment details each message resolves to. Repeat the move through the team's usual calendar interface if they can reschedule on a client's behalf.

If you find two reminders, look for two owners. A calendar notification and a separate workflow may both send a similar message. Pick which system should send each reminder, then disable or narrow the overlapping path after a controlled test. Use [HighLevel's appointment workflow scenarios](https://help.gohighlevel.com/support/solutions/articles/155000002697/) to check the triggers and appointment conditions available in your account.

## Test the awkward cases

Book two appointments for one test contact. Moving one must leave the other intact. Cancel a test booking and make sure pending reminders for that appointment cannot send. Also test a same-day move, where a 24-hour reminder might already have passed. Give staff one place to check delivery history if a client says they received the wrong time.

Record the expected message, send time and calendar for each test. Before enabling the workflow for everyone, check one end-to-end booking with your team. Our [GoHighLevel follow-up guide](/blog/gohighlevel-ai-lead-follow-up) covers the separate decisions that happen after an enquiry arrives.
