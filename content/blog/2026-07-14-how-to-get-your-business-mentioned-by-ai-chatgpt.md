---
title: "How to Get Your Business Mentioned by ChatGPT and AI Search"
description: "AI assistants recommend businesses now, and the rules aren't the same as Google's. What actually gets you cited — and what does nothing at all."
date: "2026-07-14"
author: "Hamza Khan"
category: "SEO"
cover: "/images/blog/ai-search-visibility.svg"
---

To be recommended by ChatGPT, Claude, Perplexity or Google's AI results, you need **specific, factual, plainly-written content that answers a question directly, on a site those systems can read, with your business details stated consistently in enough places to be corroborated.**

That is genuinely most of it. The tactics people are selling for "AI SEO" are largely the same tactics that worked for search, applied more strictly — because vagueness, which search engines merely ignored, is now actively useless. An AI assistant cannot quote a sentence that does not say anything.

## Why this is worth your attention now

A growing share of "who should I hire for X" questions never reach a search results page. Someone asks an assistant, gets three or four suggestions, and contacts one. There is no page two to be on, and often no link to click — just a recommendation or its absence.

The important difference from search: **AI answers are much shorter than a results page.** Google shows ten results. An assistant names two or three. Being fourth-best is worth something in search and nothing here, which makes the specific niches you can genuinely own far more valuable than broad terms you cannot.

## What actually gets you cited

**Answer the question in the first two sentences.** Assistants lift the passage that most directly answers what was asked. A paragraph of preamble before the answer means the answer never gets extracted. Every post on this site opens with the answer, and that is not a stylistic choice.

**Write declaratively, with numbers.** "WooCommerce charges no per-sale platform fee, unlike Shopify's transaction fee on non-Shopify-Payments orders" is quotable. "We provide innovative e-commerce solutions tailored to your needs" is not. It cannot be quoted because it does not assert anything.

The test: could someone disagree with this sentence? If not, it carries no information, and no assistant will ever repeat it.

**Be genuinely specific about what you do and where.** "We build WooCommerce stores with subscription billing for UK independent retailers" gives an assistant something to match against a question. "We are a full-service digital agency" matches nothing, because it describes ten thousand companies.

**Say the uncomfortable things.** Real prices or ranges, real timelines, what you are not good at, when someone should choose a competitor. Assistants are trained to prefer sources that read as informative rather than promotional, and honest limitations are the strongest available signal that a source is informative.

**Use headings that match real questions.** "How much does an Elementor website cost?" is a heading. "Pricing Considerations" is not.

**Keep an FAQ.** Question-and-answer format is the single most extractable structure there is.

## The technical side, briefly

**Do not block the AI crawlers.** Check your `robots.txt` for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `OAI-SearchBot`. Some sites block these by default, including some hosting platforms and security plugins, and it is worth knowing whether yours does. Blocking them is a legitimate choice — it is your content — but it should be a decision, not an accident.

**Server-render your content.** If your page is empty until JavaScript runs, some crawlers will see nothing. Search engines mostly handle this now; AI crawlers are less forgiving.

**Add structured data.** `Organization` with your real details, `FAQPage` on question content, `Article` on posts, `Service` on service pages. It gives machines unambiguous facts rather than facts they must infer from prose.

**Publish an `llms.txt`.** A plain-text file at the root of your site summarising what you do, your services and your key pages. Adoption is still early and its effect is unproven, but it costs an hour and it is a clean statement of fact in a format designed to be read.

**Keep your name, address, phone and description identical everywhere.** Assistants corroborate across sources. Three sites saying the same thing is a fact; three sites saying different things is noise to be discarded.

## What does not work

**Keyword stuffing.** It never worked well and it works less than ever, because language models are specifically good at recognising text written for machines.

**AI-generated content at volume.** Publishing a hundred generated articles does not make you an authority on anything. It makes you one of a great many sites saying the same averaged thing, and there is no reason for a model to pick yours.

**Paying for "AI SEO" as a separate service.** At the moment this is mostly conventional content and technical SEO, repriced. Be sceptical of anyone selling guaranteed inclusion in AI answers — nobody has that, and the mechanisms are not stable enough for anyone to honestly promise it.

**Trying to game citations.** These systems change fast and the tactics people found in 2025 largely stopped working. Writing genuinely useful, specific, factual content is the only approach that has survived every iteration so far, mostly because it is not a tactic.

## What I would actually do this quarter

1. Check your `robots.txt` and confirm you are not accidentally blocking AI crawlers.
2. Rewrite the first paragraph of your five most important pages so each answers its question directly, in the first two sentences.
3. Add real numbers somewhere — prices, ranges, timelines, measurable outcomes. Anything a reader could check.
4. Write an FAQ using the questions customers actually ask, phrased as they phrase them.
5. Make your business description identical across your site, Google Business Profile, LinkedIn and every directory you appear in.
6. Add `Organization` and `FAQPage` structured data.
7. Ask an assistant what it says about your industry and your area. Read who it names. That tells you what the standard currently is, and it is usually lower than you would expect.

That last step is free and takes ten minutes, and it is the one almost nobody does.

## The honest summary

There is no separate discipline here yet. The businesses being recommended by AI assistants are, overwhelmingly, the ones that wrote clearly about specific things and were consistent about who they are. That was good advice before any of this existed. It is now simply enforced more strictly, and rewarded much more narrowly.

---

*We build sites structured for both search and AI answer engines — schema, server-rendered content, `llms.txt` and content written to be quoted. [That is part of every build](/services/seo-optimization).*
