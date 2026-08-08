# Start here — your complete to-do list

Everything you need to do, in the order you should do it.
Each numbered guide in this folder covers one job in full detail.

| # | Guide | When | Time |
|---|---|---|---|
| 1 | [`01-GITHUB-AND-DEPLOY.md`](01-GITHUB-AND-DEPLOY.md) | Before launch | ~45 min, once |
| 2 | [`02-PUBLISHING-BLOG-POSTS.md`](02-PUBLISHING-BLOG-POSTS.md) | Every time you post | ~5 min per post |
| 3 | [`03-AFTER-LAUNCH-SEO.md`](03-AFTER-LAUNCH-SEO.md) | Launch day + ongoing | ~2 hrs, then weekly |
| 4 | [`04-BACKLINKS.md`](04-BACKLINKS.md) | From week 2 onward | 2–3 hrs/month |
| 5 | [`05-UK-LOCATION-PAGES.md`](05-UK-LOCATION-PAGES.md) | Before launch — **read this** | ~20 min |
| 6 | [`../SETUP-LEADS.md`](../SETUP-LEADS.md) | Before launch | ~15 min, once |

---

## The short version

### Before you publish

- [ ] Fill in your real Lahore address and phone in `lib/site.js` (see below)
- [ ] Add a UK forwarding number to `lib/site.js` → guide 5 (highest-impact single step)
- [ ] Set `ADMIN_PASSWORD` so the lead dashboard isn't locked → `SETUP-LEADS.md`
- [ ] Connect Supabase so leads are actually saved → `SETUP-LEADS.md`
- [ ] Set `GMAIL_USER` + `GMAIL_APP_PASSWORD` so leads email you
- [ ] Add a free AI key (`GROQ_API_KEY`) so Zync is fully conversational
- [ ] Swap at least your best 4–6 portfolio images → `/public/images/README.md`
- [ ] Read every page and correct anything that isn't true of your business

### Launch day

- [ ] Push to GitHub, connect Vercel, point `flowzync.com` at it → guide 1
- [ ] Confirm SSL padlock shows on the live domain
- [ ] Verify the site in Google Search Console, submit your sitemap → guide 3
- [ ] Do the same in Bing Webmaster Tools → guide 3
- [ ] Create your Google Business Profile at your real Lahore address → guide 4
- [ ] Test the contact form and the chatbot on the live site, and check both leads land in `/admin`

### Every week after

- [ ] Publish blog posts → guide 2
- [ ] Check Search Console for errors and new queries → guide 3
- [ ] Ask for a review from every happy client → guide 3
- [ ] Build 2–3 quality backlinks → guide 4

---

## The one thing people skip that costs them most

**Keeping "where we are" and "where we work" as two separate claims.**

Your site is based in Lahore and serves the UK. Both are true, and the site now
says both — 172 service areas in your schema, a Lahore address in your
LocalBusiness markup, and eight UK location pages that state plainly where you
actually are.

The temptation is to blur it and imply a UK office. Don't. A Google Business
Profile at an address you don't staff gets permanently suspended and takes your
reviews with it, and in the web design niche competitors report it constantly.

**Read [`05-UK-LOCATION-PAGES.md`](05-UK-LOCATION-PAGES.md) before you list your
business anywhere.** It covers what works instead.

### Fill in your real details

Open `lib/site.js` and complete the `business` block:

```js
business: {
  street: '12 Main Boulevard, Gulberg III',
  city: 'Lahore',
  region: 'Punjab',
  postalCode: '54000',
  country: 'PK',
  phone: '+92 300 1234567',
  phoneUK: '+44 20 7946 0991',   // optional forwarding number
  ...
}
```

Until `street` and `phone` are filled in, the site publishes **no** LocalBusiness
schema at all. That's deliberate — a placeholder address is worse than none.

Then use that exact format, byte-for-byte, on every directory listing. Not "close
enough". Identical. Google cross-references listings to decide whether you're
real, and inconsistency reads as low confidence.
