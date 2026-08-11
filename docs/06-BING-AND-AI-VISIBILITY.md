# Bing & AI Visibility Guide

**Why this deserves its own guide:** ChatGPT's web search and Microsoft Copilot
both retrieve from **Bing's index**. A page that isn't in Bing is invisible to
those tools no matter how well it ranks on Google.

Most people never look at Bing because their Google traffic looks fine. That's
exactly why there's opportunity here — and why "ChatGPT doesn't know about
Flowzync" is a Bing problem before it's an AI problem.

---

## Contents

1. [Why ChatGPT can't find you yet](#1-why-chatgpt-cant-find-you-yet)
2. [Fixing the errors Bing reported](#2-fixing-the-errors-bing-reported)
3. [IndexNow — already set up](#3-indexnow--already-set-up)
4. [Your weekly Bing routine](#4-your-weekly-bing-routine)
5. [The AI Performance report](#5-the-ai-performance-report)
6. [Getting cited by AI tools](#6-getting-cited-by-ai-tools)
7. [Checking whether it's working](#7-checking-whether-its-working)
8. [Realistic timelines](#8-realistic-timelines)

---

## 1. Why ChatGPT can't find you yet

When ChatGPT says it has nothing on Flowzync, that is not a mysterious AI
problem. It's a chain, and it breaks at the first link:

```
Your page  →  Bing index  →  ChatGPT / Copilot answers
```

Your site launched days ago. Bing has **discovered** your URLs but hasn't
finished crawling and indexing them — which is precisely what its "Discovered
but not crawled" message means. Until pages are indexed, no AI tool can cite
them, because there is nothing to retrieve.

**There is also a second thing happening,** and it's worth being clear-eyed
about. AI tools describe brands using what *other* sites say about them, not
only what your own site claims. Right now nothing on the internet mentions
Flowzync except Flowzync. That takes months of directory listings, mentions and
links to change — see section 6 and `04-BACKLINKS.md`.

**So: nothing is broken.** You are early. The work below shortens the wait.

---

## 2. Fixing the errors Bing reported

### ✅ Already fixed in the code

Bing flagged **"Meta Description too long or too short"** on your homepage and
`/services`, plus **"Title too long"**.

It had only crawled two pages at that point. An audit of all 42 pages found the
same problem on 38 of them, so this is now handled at the source: `lib/meta.js`
enforces the limits on **every** page automatically at build time.

| Element | Limit | How it's enforced |
|---|---|---|
| Title | ≤ 60 characters | Trimmed at a separator, brand suffix dropped first |
| Description | 25–158 characters | Trimmed at a sentence boundary where possible |

Descriptions that run slightly long are now shortened gracefully rather than
becoming an error. You can write naturally without counting characters.

**After you deploy**, re-run URL Inspection on those two pages and the errors
will clear.

### If Bing reports something else

| Bing says | What it means | Fix |
|---|---|---|
| Discovered but not crawled | Known but queued | Normal for a new site. Request indexing, use IndexNow. |
| URL cannot appear on Bing | Blocked or failing checks | Check robots.txt, then request indexing |
| Title too long | Over ~60 chars | Now auto-handled |
| Meta description too long/short | Outside 25–160 | Now auto-handled |
| Multiple H1 tags | More than one `<h1>` | Not an issue on this site — one per page |

---

## 3. IndexNow — already set up

**This is the single biggest lever you have on AI visibility**, and it's built in.

IndexNow tells Bing the moment a page changes, instead of waiting for a crawl.
It cuts Bing indexing from **weeks to hours** — and since ChatGPT retrieves from
Bing's index, that directly shortens the path to being citable.

**What's already running:**

- A verification key file at `/<key>.txt` (Bing checks this to confirm you own
  the domain)
- `/api/indexnow`, which submits every page in your sitemap
- A **daily cron** in `vercel.json` that runs it automatically

**You don't need to do anything.** It starts on your next deploy.

**To trigger it manually** after publishing something important:

```
https://www.flowzync.com/api/indexnow?check=1
```

You should see `{"ok":true,"submitted":42}`. A `202` status is also success — it
means Bing accepted the submission and is validating the key.

**To confirm Bing is receiving it:** Bing Webmaster Tools → **IndexNow** in the
left menu. Submissions appear within a day or two.

> One submission covers Bing, Yandex, Seznam and Naver — they share the
> IndexNow protocol.

> **Note on Vercel's Hobby plan:** it allows two daily cron jobs, which is
> exactly what's configured (keep-alive at 06:00 UTC, IndexNow at 07:00). If you
> add a third, one will be rejected.

---

## 4. Your weekly Bing routine

Ten minutes, once a week.

### Every week

1. **URL Inspection** — check one or two important pages. Confirm "URL can be
   indexed by Bing" with no errors.
2. **Site Explorer** — is your indexed page count growing? That's the number
   that matters right now.
3. **Search Performance** — impressions appearing yet? Clicks come later.
4. **AI Performance (BETA)** — see section 5.

### After publishing anything

1. **URL Submission** → paste the new URL → submit. You get a daily quota; use
   it on pages you actually care about.
2. IndexNow handles the rest automatically.

### Monthly

- **Site Scan** — run the on-demand crawler. It's a free technical audit and
  catches issues before they compound.
- **Backlinks** — Bing shows backlink data for **any** domain, including
  competitors. Genuinely useful, and Google Search Console won't do it.
- **Keyword Research** — Bing's is free and has no impression threshold, unlike
  most keyword tools.

---

## 5. The AI Performance report

Bing Webmaster Tools includes an **AI Performance** report (BETA). It shows how often Microsoft Copilot and partner AI experiences cite your site's pages when generating answers — the first dashboard from a major search engine dedicated to tracking citations in AI responses.

**Why it matters to you:** ChatGPT retrieves through Bing's index, and the dashboard reports on Bing index usage by AI products. It isn't a direct ChatGPT report, but it's the closest free signal available.

**What you'll see:**

- **Total citations** — how often your pages were used as sources
- **Grounding queries** — the phrases the AI generated internally when it went
  looking for content. These are gold: they show how AI tools *rephrase* what
  users ask, which is often not how you'd have guessed.
- **Cited pages** — which of your pages get pulled into answers

**Expect it to be empty for now.** Measurable data typically appears two to four weeks after Bing indexation expands. Check monthly rather than daily.

**What it won't tell you:** anything about ChatGPT specifically, Perplexity,
Claude or Google AI Overviews. None of those publish this data. Treat Bing's
numbers as directional.

---

## 6. Getting cited by AI tools

Being indexed makes you *eligible*. Being cited requires more.

### What's already built into your site

- **Q&A structure** — every service, industry and location page has FAQ blocks
  with direct answers. This is the format AI tools extract from most readily.
- **FAQPage and Service schema** on every page, so machines can parse the
  content unambiguously.
- **`/llms.txt`** — a plain-text summary of your services, industries, locations
  and common questions, written for AI crawlers. Check it at
  `www.flowzync.com/llms.txt`.
- **Declarative writing** — "WooCommerce charges no per-sale platform fee" is
  quotable. "We deliver exceptional solutions" is not. Keep writing this way.
- **Server-rendered HTML**, so crawlers that don't run JavaScript still see
  everything.

### What you need to do

**1. Get mentioned somewhere other than your own site.** This is the big one.

AI models describe a brand using what the wider internet says about it. Right
now, nothing does. Your first ten directory listings and mentions matter more
here than another ten pages on your own site. Work through `04-BACKLINKS.md` —
Clutch, GoodFirms, DesignRush and LinkedIn are the highest-value starting points
because AI tools cite those directories constantly for agency queries.

**2. Answer questions nobody else answers properly.**

AI tools cite the page that answers the question most directly. Broad topics are
saturated. Specific ones aren't:

- ✅ "How much does WooCommerce cost compared to Shopify for 500 products?"
- ❌ "Web design tips"

Your blog post on site speed and SEO is written this way deliberately: it takes
a position, gives specifics, and answers the title question in the first
paragraph.

**3. Publish consistently.** Freshness affects retrieval. A site that publishes
weekly gets crawled more often than one that publishes twice a year.

**4. Be specific and verifiable.** Include real numbers, named tools, actual
process details. Vague marketing language is unciteable — there's nothing in it
to quote.

---

## 7. Checking whether it's working

There's no single dashboard, so use several signals.

### Is Bing indexing you?

Search `site:flowzync.com` at **bing.com**. Count the results, and watch it grow
week to week. This is your leading indicator — everything else depends on it.

### Are AI tools aware of you?

Ask them directly, and be patient about the order things happen in:

1. **Branded first:** "What is Flowzync?" — recognition of your own name comes
   before anything else, usually once several pages are indexed.
2. **Then long-tail:** "web design agency for dental practices" — this takes
   months and depends on third-party mentions.

Ask in **ChatGPT with web search enabled**, Perplexity, and Copilot. Without web
search on, they're answering from training data that predates your site
entirely, so a blank result tells you nothing.

### Is anyone arriving from AI tools?

The only hard evidence. In Google Analytics, look for referrals from:

- `chatgpt.com`
- `perplexity.ai`
- `copilot.microsoft.com`
- `claude.ai`
- `gemini.google.com`

Even a handful confirms the pipeline works.

### Are AI crawlers visiting?

Vercel → your project → **Logs**. Look for user agents like `GPTBot`,
`ChatGPT-User`, `PerplexityBot`, `ClaudeBot` and `BingBot`. Their presence means
you're being fetched, which precedes being cited.

---

## 8. Realistic timelines

| When | What to expect |
|---|---|
| **Days 1–3** | IndexNow submits your pages; Bing begins crawling |
| **Week 1–2** | Core pages indexed on Bing. `site:flowzync.com` starts returning results. |
| **Week 2–4** | ChatGPT search can find you for **specific** queries — your brand name, or an exact page title |
| **Month 1–3** | AI Performance data starts appearing. Branded queries answered correctly. |
| **Month 3–6** | Citations for long-tail topical queries, **if** you have third-party mentions |
| **Month 6–12** | Competitive unbranded queries — the same curve as normal SEO |

**Two things to be honest with yourself about:**

Being cited by AI tools follows the same curve as ranking, because they draw on
the same signals. There is no shortcut that ranking doesn't also require.

And the limiting factor right now is not your website — it's genuinely good.
It's that nothing else on the internet mentions you yet. Directory listings and
backlinks are the bottleneck, not code.

---

## Quick reference

| Task | Where |
|---|---|
| Submit a URL | Bing WMT → URL Submission |
| Check a page's status | Bing WMT → URL Inspection |
| See indexed pages | Bing WMT → Site Explorer |
| AI citations | Bing WMT → AI Performance |
| Confirm IndexNow | Bing WMT → IndexNow |
| Trigger IndexNow now | `flowzync.com/api/indexnow?check=1` |
| Free technical audit | Bing WMT → Site Scan |
| Competitor backlinks | Bing WMT → Backlinks |
| Free keyword data | Bing WMT → Keyword Research |
| Your AI summary file | `flowzync.com/llms.txt` |

**Also worth turning on:** Bing Webmaster Tools links to **Microsoft Clarity**,
a free analytics tool with session recordings and heatmaps. Genuinely useful for
seeing where people give up on your contact form, and it costs nothing.
