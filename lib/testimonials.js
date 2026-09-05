// ─────────────────────────────────────────────────────────────
//  CLIENT TESTIMONIALS
//
//  ⚠️  READ THIS BEFORE EDITING
//
//  These must be real. A fabricated review is a Google policy
//  violation, and in the US, UK, EU and Australia it is also a
//  consumer-protection offence — the FTC's rule on fake reviews
//  carries per-review penalties.
//
//  Replace each entry below with a quote you actually received, or
//  delete it. Ask clients for one line in their own words; do not
//  write it for them and ask them to approve it.
//
//  WHY THEY READ AS REAL
//  Genuine reviews are lopsided. They name one specific thing, they
//  ramble slightly, they mention a hesitation or a snag, and they
//  do not all praise the same three qualities in the same rhythm.
//  Anything that reads like marketing copy in a client's mouth gets
//  discounted by readers and by Google's review-spam systems alike.
//
//  SCHEMA
//  `schema: true` publishes the entry as a Review in structured data.
//  Only set it on quotes you can evidence — an email, a form, a
//  Clutch or Google review you can point to. Review markup on
//  unverifiable praise is exactly what manual actions are for.
// ─────────────────────────────────────────────────────────────

// ⚠️  `colour` is the avatar background behind WHITE 15px bold initials,
// so it must reach 4.5:1 against #FFFFFF or Lighthouse fails the page on
// contrast. The bright brand tints (#06C299, #FF9E6D, #3B82F6 …) all sat
// between 2.0 and 4.2 and had to be darkened. Check any new colour
// before adding it.
export const testimonials = [
  {
    id: 'marcus-kane',
    quote:
      "They didn't just build what we asked for — they built what we were trying to describe. I'd sent over three competitor sites and a very vague brief, and the first Figma round already had the thing I couldn't put into words. Booking form goes straight into our system now, which was the bit our last developer never got working.",
    name: 'Marcus Kane',
    role: 'Founder',
    company: 'ScaleDental Co.',
    initials: 'MK',
    colour: '#5B4FE9',
    service: 'custom-website-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'sofia-reyes',
    quote:
      "Our old WordPress site genuinely embarrassed us — partners avoided sending clients to it. The new one loads instantly and finally looks like the firm we are. Two things I'd flag for anyone reading: they push back on you, and the content stage takes longer than you think because they make you write properly. Both turned out to be the point.",
    name: 'Sofia Reyes',
    role: 'Partner',
    company: 'Lumen Legal',
    initials: 'SR',
    colour: '#04866A',
    service: 'wordpress-website-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'daniel-aoki',
    quote:
      "The store rebuild felt like getting a different business back. Customers mention the site unprompted in reviews now, which never happened before. Checkout drop-off is down and I stopped dreading the analytics tab.",
    name: 'Daniel Aoki',
    role: 'Owner',
    company: 'Northpeak Gear',
    initials: 'DA',
    colour: '#A66747',
    service: 'woocommerce-development',
    rating: 5,
    schema: false,
  },
  {
    id: 'priya-raghavan',
    quote:
      "I'll be honest, I only came to them because two agencies had quoted me numbers I couldn't justify for a five-person clinic. What I got was a fixed quote, itemised, and it didn't move. The site went live nine days later than planned — my fault, I sat on the copy for a fortnight — and they were fine about it. No change fee, no passive-aggressive emails.",
    name: 'Priya Raghavan',
    role: 'Practice Manager',
    company: 'Meridian Clinics',
    initials: 'PR',
    colour: '#7C4DFF',
    service: 'custom-website-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'tom-brennan',
    quote:
      "We had leads sitting in a Gmail inbox and a spreadsheet nobody updated. They put the whole thing into GoHighLevel, wired up the follow-up sequence and showed my office manager how to run it in one call. She hasn't needed me since. That's the honest measure of whether a setup worked.",
    name: 'Tom Brennan',
    role: 'Director',
    company: 'Brennan Property Services',
    initials: 'TB',
    colour: '#0B7DB1',
    service: 'ghl-crm-setup',
    rating: 5,
    schema: false,
  },
  {
    id: 'hannah-whitfield',
    quote:
      "Straight-talking, which I wasn't expecting. I asked whether they could get us ranking for a term I'd been sold on by a previous agency and they told me plainly it wasn't worth chasing, then explained what to go after instead. Took about eight months before the enquiries really shifted. They said it would.",
    name: 'Hannah Whitfield',
    role: 'Marketing Lead',
    company: 'Harbor Realty',
    initials: 'HW',
    colour: '#E11D74',
    service: 'seo-optimization',
    rating: 5,
    schema: false,
  },
  {
    id: 'omar-haddad',
    quote:
      "Timezones were my worry — we're in Dubai and they aren't. Turned out to be a non-issue. Calls were always in our afternoon, and updates were in the shared board so I could read them whenever. I've worked with a local agency that was harder to get hold of.",
    name: 'Omar Haddad',
    role: 'Managing Director',
    company: 'Atlas Group',
    initials: 'OH',
    colour: '#A46A07',
    service: 'custom-website-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'grace-muteti',
    quote:
      "Small thing that mattered a lot: they built the site so I can actually edit it. Previous one, I had to email someone to change a price. Now I change it myself in about thirty seconds and nothing breaks. Whoever set that up was thinking about the year after launch, not just launch day.",
    name: 'Grace Muteti',
    role: 'Owner',
    company: 'Aurelia Studio',
    initials: 'GM',
    colour: '#0E8478',
    service: 'elementor-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'ryan-doyle',
    quote:
      "Landing page for a single campaign, nothing fancy. Went live in under two weeks and doubled what our old page converted at. I've since had three more built. It's the least dramatic working relationship I have and I mean that as a compliment.",
    name: 'Ryan Doyle',
    role: 'Growth Manager',
    company: 'PulseFit',
    initials: 'RD',
    colour: '#8558EC',
    service: 'landing-pages',
    rating: 5,
    schema: false,
  },
  {
    id: 'elena-kovac',
    quote:
      "WooCommerce with subscriptions, which apparently is where a lot of builds go wrong. Ours didn't. The one bug we hit after launch — a VAT rounding thing on renewals — was fixed the same day I reported it, and they explained what had caused it rather than just saying 'fixed'.",
    name: 'Elena Kovač',
    role: 'Co-founder',
    company: 'Velora Skin',
    initials: 'EK',
    colour: '#CD3F85',
    service: 'woocommerce-development',
    rating: 5,
    schema: false,
  },
  {
    id: 'james-okonkwo',
    quote:
      "I run a trades business, I'm not a website person, and I've been burned before. What sold me was that they asked what a job is worth to me before they talked about design at all. The site is built around getting the phone to ring, and it does. Enquiries roughly doubled over the first half of the year.",
    name: 'James Okonkwo',
    role: 'Owner',
    company: 'Okonkwo Heating & Plumbing',
    initials: 'JO',
    colour: '#D73D3D',
    service: 'custom-website-design',
    rating: 5,
    schema: false,
  },
  {
    id: 'sarah-lindqvist',
    quote:
      "Not everything was perfect — we went a round longer on the homepage than either of us wanted, and there was a week where I felt out of the loop. I said so, they changed how they were reporting, and it didn't happen again. That's more useful to me than a flawless project would have been, honestly.",
    name: 'Sarah Lindqvist',
    role: 'Operations Director',
    company: 'TaskHive',
    initials: 'SL',
    colour: '#3472D8',
    service: 'automations',
    rating: 5,
    schema: false,
  },
];

/** The subset marked as verifiable — the only ones safe to publish as Review schema. */
export const schemaTestimonials = testimonials.filter((t) => t.schema);

/** Testimonials relevant to one service page, newest-first order preserved. */
export const testimonialsForService = (slug) => testimonials.filter((t) => t.service === slug);

/**
 * Review structured data, built ONLY from entries marked `schema: true`.
 *
 * AggregateRating is deliberately withheld until there are enough
 * verifiable reviews to support it — Google treats a rating average
 * built on a handful of unverifiable quotes as review spam, and the
 * penalty costs more than the stars are worth.
 */
export function reviewSchema(orgId) {
  if (!schemaTestimonials.length) return [];
  return schemaTestimonials.map((t) => ({
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    itemReviewed: { '@id': orgId },
  }));
}
