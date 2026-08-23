// Contact-page FAQs. Kept in their own module because the page renders
// them (client component) while the layout publishes them as FAQPage
// schema (server component). One source, so the two cannot drift.
// Question-and-answer content is the most extractable structure there
// is for answer engines, which is why the contact page carries it too.
export const CONTACT_FAQS = [
  ['How quickly will I hear back?', 'Usually within one working day, and always from a person. We do not promise an hour — that is a number agencies quote and then miss. If your enquiry arrives on a Saturday evening, expect Monday.'],
  ['What should I include in my message?', 'What your business does, what you want the site or funnel to achieve, roughly when you need it, and a budget range if you have one. Links to sites you like help more than a long description. If you do not know some of that yet, send what you have — working it out is part of what the first conversation is for.'],
  ['Do I need to know my budget before contacting you?', 'No, but a range makes the first reply far more useful. Without one we are guessing at scope, and you get a proposal that may be aimed at a completely different project. If you are unsure what is realistic, say what the site is worth to you — how many enquiries a month would justify it.'],
  ['Is the quote really fixed?', 'Yes. We scope the work, write it down, and the price does not move unless you ask for something outside that scope — at which point we quote the addition separately before doing it. There is no hourly billing and no surprise on the final invoice.'],
  ['What if you are not the right fit for my project?', 'We will tell you, and where we can we will point you toward what is. Taking on work we cannot do well costs us more in the long run than turning it down does.'],
  ['Do you work with clients outside the UK and US?', 'Yes. We are a remote studio with clients across North America, Europe, the Middle East, Australia and New Zealand. Calls are scheduled in your working hours and quotes can be issued in your currency.'],
];
