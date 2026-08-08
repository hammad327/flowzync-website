# 3. After you publish — indexing, timelines and what to do

## The honest answer to "how long until I'm on Google?"

Two different things get confused here, so let's separate them.

**Indexing** = Google knows your page exists and will show it if someone
searches specifically enough.
**Ranking** = Google shows your page above competitors for a term people
actually search.

Indexing takes days. Ranking takes months. Here's realistic timing for a brand
new domain:

| When | What happens |
|---|---|
| **Hours 1–48** | Google discovers the site after you submit the sitemap. Homepage often indexed first. |
| **Days 2–7** | Homepage and main pages appear. Search `site:flowzync.com` to see what's in. |
| **Weeks 1–4** | Most or all 27 pages indexed. Some pages take longer with no reason given — normal. |
| **Weeks 2–8** | You start appearing for your own brand name and very long-tail terms ("website for water leakage detection lahore"). Usually pages 2–5. |
| **Months 3–6** | Long-tail and local terms move toward page 1, *if* you're publishing and building links consistently. |
| **Months 6–12** | Competitive terms ("custom website design") become realistically reachable. |

**If you publish today:** expect to be findable by name within about a week, and
to see the first meaningful non-brand traffic somewhere around month three.

**Nothing makes this faster.** There's no button, no paid submission, no service.
The one real lever is a brand-new domain's lack of history — that's earned by
time and links, not bought. Anyone promising page one in 30 days is selling you
something.

Long-tail beats broad, always. "Website for dental clinics in Lahore" might rank
in six weeks. "Web design" might never. That's exactly why the industry pages
exist.

---

## Launch day checklist

### 1. Google Search Console — do this first (15 min)

This is free, and it's the only place you can see what Google actually thinks of
your site.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → choose **Domain** (left box) → enter `flowzync.com`
3. It gives you a **TXT record**. Add it in your domain registrar's DNS settings
   (same place you added the Vercel records) → **Verify**
4. Left menu → **Sitemaps** → enter `sitemap.xml` → **Submit**
5. Top search bar → paste `https://www.flowzync.com` → **Request Indexing**

Repeat step 5 for your five most important pages. Don't do all 27 — it won't
help and there's a daily limit.

> **Nothing will show for 2–3 days.** Search Console reports on a delay. Empty
> graphs on day one are expected, not a problem.

### 2. Bing Webmaster Tools (5 min)

Skipping Bing is a common mistake — it powers **ChatGPT's web search** and
Copilot, so it matters more than its market share suggests.

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. **Import from Google Search Console** — one click, it copies everything
3. Confirm the sitemap imported

### 3. Google Business Profile — at your Lahore address (30 min)

Register this at your **real** address in Lahore. It won't help UK rankings, but
it brings local Pakistani enquiries and it's a legitimate trust signal that
directories and Google cross-check against your site.

1. [business.google.com](https://business.google.com) → **Manage now**
2. Enter your details — **exactly matching `lib/site.js`**
3. Choose the most specific primary category ("Website designer", not "Business
   services"), then add secondary ones
4. Verification is by postcard, phone or video and takes 1–2 weeks. Start today.
5. While waiting, complete everything: services, description, hours, service
   areas and 10+ real photos

**You cannot get a UK Business Profile** without a verified UK address with staff
present. Don't attempt it — see `05-UK-LOCATION-PAGES.md`. Your route to UK
visibility is organic location pages, which are already built.

### 4. Verify things actually work (10 min)

On the **live domain**, not localhost:

- [ ] Padlock shows in the address bar
- [ ] `flowzync.com` redirects to `www.flowzync.com` (or your chosen version)
- [ ] `www.flowzync.com/sitemap.xml` loads and lists your pages
- [ ] `www.flowzync.com/robots.txt` loads
- [ ] Submit the contact form → check it arrives in `/admin` **and** by email
- [ ] Open the chatbot, type "I want a quote" → the form appears → submit →
      check it appears in `/admin` marked as "Zync chat"
- [ ] Open the site on a **real phone**, not just a resized browser window
- [ ] Right-click → View Page Source → confirm your text is in the HTML

The last one matters: it proves Google can read your content without running
JavaScript. Your site passes, but re-check after any major change.

### 5. Analytics (optional, 10 min)

[Google Analytics](https://analytics.google.com) → create a GA4 property → copy
the Measurement ID (`G-XXXXXXX`) → send it over and I'll wire it in properly, or
add it via Vercel's Analytics tab which needs no code at all.

---

## Week one

- [ ] Search `site:flowzync.com` in Google. Count the pages. Growing? Good.
- [ ] Search Console → **Pages** → read any "Not indexed" reasons
- [ ] Publish 2–3 blog posts. New sites that publish get crawled more often.
- [ ] Start the backlink work in guide 4 — this is the slow one, so start early
- [ ] Ask your three most recent happy clients for a Google review

---

## Every week, ongoing

**15 minutes in Search Console:**

1. **Performance** → sort by Impressions. Terms you're getting impressions but
   few clicks for are your fastest wins — you're already ranking, you just need
   a better title and description on that page.
2. **Pages** → any new errors?
3. **Links** → watch your backlinks accumulate

**Then:**
- Publish (weekly minimum, daily if you can sustain it)
- 2–3 new quality backlinks
- Reply to every review on any platform, good or bad
- Post once on your Business Profile if you have one

Reviews are genuinely a ranking factor, and asking for them is free.

---

## What to expect, and what to ignore

**Normal, don't panic:**
- Some pages indexed, others not, with no explanation
- Rankings bouncing wildly for the first months
- Zero traffic in week one
- Impressions with no clicks at first

**Actually wrong, investigate:**
- `site:flowzync.com` returns nothing after 2 weeks → check Search Console for a
  manual action, and confirm robots.txt isn't blocking everything
- Traffic collapses overnight → check you didn't accidentally deploy a broken
  build, or rename URLs
- Pages indexed then dropped → usually thin content Google decided wasn't worth
  keeping

**Ignore entirely:**
- Emails offering to "submit your site to 500 search engines"
- Anyone guaranteeing rankings
- Cold callers claiming to be "from Google" — Google doesn't cold call
- Paid "instant indexing" services

---

## What actually moves rankings, in order

1. **Technical foundation** — done. Fast, crawlable, mobile, schema, SSR.
2. **Content depth per page** — thin pages don't rank. Your service and industry
   pages are substantial; keep new ones the same.
3. **Consistent publishing** — one post weekly beats seven then nothing.
4. **Backlinks from real, relevant sites** — slowest, highest impact. Guide 4.
5. **Local signals** — Business Profile completeness, reviews, NAP consistency.
6. **Structured data** — done, and it's what gets you quoted in AI answers.

Numbers 3, 4 and 5 are the ones only you can do. That's the job now.
