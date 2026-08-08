# 5. Ranking in UK towns from Pakistan

You're based in Lahore and you want to rank in UK areas. That's achievable, and
the site is now built for it. This guide covers how it works and — importantly —
the one mistake that would undo it.

---

## The two claims, kept separate

Your site now makes two different statements, and keeping them apart is what
makes this both effective and safe:

| Claim | Where it appears | Status |
|---|---|---|
| **We are located in Lahore, Pakistan** | LocalBusiness schema, footer, location pages | ✅ True |
| **We serve clients across the UK** | `areaServed` — 172 areas | ✅ True |

Your structured data now declares **172 service areas**: Pakistan and the UK as
countries, 17 Pakistani cities and provinces, 39 UK counties and nations, and
120+ UK towns from Croydon to Inverness.

What it never does is claim a UK address. That distinction isn't pedantry — it's
the difference between a legitimate service-area business and a Google Business
Profile suspension that takes your reviews with it permanently.

**Being upfront is also a selling point.** Every location page carries a "Where
we actually are" panel explaining you're in Lahore, working UK hours, and that
this is why the pricing compares well. Buyers who'd object find out immediately
instead of on a call; buyers who don't care get a reason to trust you.

---

## Why service areas alone won't rank you

Here's the part most people get wrong.

**`areaServed` markup tells Google where you work. It does not make you rank in
Leeds.** It's a supporting signal, not a ranking one. If declaring 172 areas were
enough, everyone would declare all of them.

What actually ranks you in a UK town is **a page written for that town**. That's
what `/locations/` is for.

### What's already built

Eight UK location pages, each with genuinely different content:

| Page | Angle |
|---|---|
| `/locations/web-design-manchester` | Crowded, expensive agency market |
| `/locations/web-design-birmingham` | Trade and manufacturing catalogues |
| `/locations/web-design-leeds` | Regulated professional services |
| `/locations/web-design-glasgow` | First proper website, migrations |
| `/locations/web-design-reading` | Thames Valley tech, B2B and SaaS |
| `/locations/web-design-bristol` | Brand-led independents, ecommerce |
| `/locations/web-design-milton-keynes` | Logistics and B2B, winnable search |
| `/locations/web-design-london` | Most competitive, honest about it |

Each has its own market analysis, its own FAQs, its own service focus and its own
Service + FAQPage schema. Read two side by side — they don't sound like the same
page with a name swapped, and that's deliberate.

---

## ⚠️ The rule for adding more

**Never duplicate a page and swap the town name.**

Google calls near-identical location pages **doorway pages**. It doesn't just
ignore them — it demotes them as a group, and that can drag down the rest of your
site with them. This is the single fastest way to damage a site that's otherwise
built correctly.

**Add a town only when you have something true to say about it:**

- A client you've worked with there
- An industry you understand in that area
- A market condition you can describe accurately
- A price or competition reality specific to that place

If you can't fill the three "local picture" points with something genuine, don't
add the page yet.

**Eight strong pages beat eighty thin ones.** The eighty will actively cost you.

### How to add one

Open `lib/locations.js`, copy an existing entry, and replace **every field** with
real content:

```js
{
  slug: 'web-design-nottingham',
  city: 'Nottingham',
  region: 'Nottinghamshire',
  title: 'Web Design in Nottingham',
  seoTitle: 'Web Design Nottingham | Website Design & WordPress — Flowzync',
  seoDescription: '...',           // 140–160 chars, write it to earn the click
  keywords: ['web design nottingham', ...],
  intro: '...',                    // what's actually distinctive about this market
  context: [ ['...', '...'], ... ],// 3 genuine local observations
  faqs: [ ['...', '...'], ... ],   // 4 questions, answered directly
  related: ['custom-website-design', ...],
}
```

Push it, and the page, its schema, its sitemap entry and its internal links all
generate automatically.

**Target smaller towns first.** "Web design Milton Keynes" is far more winnable
than "web design London" — fewer agencies produce real content for them, and the
enquiries are often better qualified. Your best early wins will come from towns
most agencies ignore.

---

## Realistic expectations

| Term | Difficulty | Realistic timeline |
|---|---|---|
| "web design milton keynes" | Low | 3–6 months |
| "woocommerce developer leeds" | Low–medium | 3–6 months |
| "web design manchester" | High | 12+ months |
| "web design london" | Very high | Multi-year |

Service-plus-town terms are your route in. Broad city terms in Manchester or
London mean competing with agencies holding decades of domain history and large
budgets — reachable eventually, not soon.

**One thing you cannot get:** the Google Maps local pack for UK searches. That
requires a verified UK address with staff present. You're competing in the
organic results below it, which is a perfectly good place to be — for B2B web
design work, most enquiries come from organic, directories and referrals anyway.

---

## What makes the biggest difference next

### 1. A UK phone number (~30 min, highest impact)

Completely legitimate from anywhere, and UK prospects are far likelier to call a
UK number.

| Provider | Cost |
|---|---|
| [Twilio](https://twilio.com) | ~£1–2/month |
| [Skype Number](https://www.skype.com/en/features/online-number/) | ~£4/month |
| [Zadarma](https://zadarma.com) | ~£2/month |

Forward it to your phone, then add it to `lib/site.js`:

```js
phoneUK: '+44 20 7946 0991',
```

It appears in your schema and contact points automatically. **Answer it** — a
number nobody picks up is worse than none.

### 2. One real UK case study

A named UK client with their city is worth more than every piece of location
markup on the site combined. It's the thing prospects actually check.

### 3. UK spelling and currency

The service pages already use UK spelling ("optimisation"). Keep it. Quote in
GBP when talking to UK clients, and reference things they recognise — VAT,
Companies House, GDPR and the ICO.

### 4. Your Google Business Profile — register it in Lahore

You can and should have one, at your real Lahore address. It won't help UK
rankings, but it brings local Pakistani enquiries and it's a legitimate trust
signal. Register it honestly at the address in `lib/site.js`.

---

## Before you go live

- [ ] Fill in `street`, `phone`, `postalCode` in `lib/site.js` — LocalBusiness
      schema stays switched off until you do
- [ ] Get a UK forwarding number and add `phoneUK`
- [ ] Read all eight location pages and correct anything that isn't true of how
      you actually work
- [ ] Decide your exact business name, address and phone format, and use it
      byte-for-byte identically on every directory listing
