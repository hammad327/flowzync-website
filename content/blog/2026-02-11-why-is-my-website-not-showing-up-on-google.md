---
title: "Why Is My Website Not Showing Up on Google?"
description: "Twelve reasons, in the order you should check them — starting with the one that catches roughly half of all new sites and takes two minutes to fix."
updated: "2026-10-27"
date: "2026-02-11"
author: "Hamza Khan"
category: "SEO"
cover: "/images/blog/website-not-on-google.svg"
faqs:
  - q: "Why is my website not showing up on Google?"
    a: "Use Search Console URL Inspection for the individual page. A site: search can give clues, but is not a complete index inventory. Check crawl access, status, noindex, canonical selection and page usefulness before deciding why it is missing."
  - q: "How long does it take Google to index a new website?"
    a: "A few days to a few weeks once Google knows the site exists. Submit a sitemap in Search Console and request indexing on your most important pages. A brand new domain rarely ranks for anything competitive in the first few months regardless of how well it is built."
  - q: "What does 'Discovered – currently not indexed' mean?"
    a: "Google has discovered the URL but has not yet crawled it. Investigate internal discovery, server capacity, duplicate URLs and the usefulness of the page. The status alone does not prove a domain-authority problem, and a sitemap does not guarantee crawling."
---

If your website is not showing up on Google, the cause is almost always one of three things: **Google has not found it, Google has found it but chosen not to index it, or Google has indexed it and you are simply not ranking well enough to see yourself.** These are completely different problems with completely different fixes, so the first job is working out which one you have.

Here is how to tell, in about five minutes.

## Step one: find out which problem you have

Search Google for `site:yourdomain.com` — exactly that, with your own domain.

**If you get no results**, investigate further with Search Console. A site: search is not an exhaustive or definitive index report.

**If you get some pages but not the ones you care about**, Google is indexing selectively. That is problem two.

**If the page appears**, it is a useful discovery signal, but use URL Inspection to confirm the canonical and current indexing information. Ranking for a commercial query is a separate question.

Most people asking this question assume they have problem three when they actually have problem one.

## If Google has not indexed anything

**Check you have not blocked it.** Visit `yourdomain.com/robots.txt`. If you see `Disallow: /` under `User-agent: *`, you are telling every search engine to stay away. On WordPress this is usually because "Discourage search engines from indexing this site" is still ticked under Settings → Reading — it gets switched on during development and forgotten at launch. This single checkbox is responsible for a startling share of "my new site isn't on Google" cases. Untick it.

**Check for a noindex tag.** View the page source and search for `noindex`. Same story: often left behind from a staging environment.

**Check the site is actually reachable.** If your host is intermittently down, or the site is behind a login, or there is an aggressive firewall rule, Googlebot may simply never get a successful response.

**Then tell Google it exists.** Set up [Google Search Console](https://search.google.com/search-console), verify ownership, submit your sitemap (usually `/sitemap.xml`), and use the URL Inspection tool to request indexing on your most important pages. This is not instant — a brand new site typically takes a few days to a few weeks.

## If some pages are indexed and others are not

Open Search Console → Indexing → Pages, and read the reasons listed. The common ones, and what they actually mean:

**"Alternative page with proper canonical tag"** — your page says the real version lives at a different URL, and Google believed it. Usually this is a www versus non-www mismatch, or http versus https. Every page on your site should declare a canonical URL on the exact host you actually serve, and the other version should redirect to it. This one is easy to have wrong for months without noticing, because nothing looks broken to a human visitor.

**"Duplicate without user-selected canonical"** — Google found several pages it thinks are the same and could not tell which you preferred. Declare a canonical.

**"Crawled – currently not indexed"** — Google crawled the URL but has not indexed it. Check duplication, canonical selection, technical responses and whether the content serves a distinct purpose. The report does not establish a single cause or guarantee a future outcome.

**"Discovered – currently not indexed"** — Google knows about the URL but has not yet crawled it. Check discovery paths, server availability and unnecessary duplicate URLs. Do not infer a specific authority score from this status.

**"Not found (404)"** — you or your sitemap are pointing at URLs that do not exist. Fix the links, or redirect the old URLs to the right ones.

## If everything is indexed and you still cannot find yourself

Then you are competing, and you are losing. That is a different and much more ordinary situation.

**You are probably searching for the wrong thing.** Searching your own business name and not appearing is a real problem. Searching "web design" and not appearing on page one is not a problem, it is arithmetic.

**Your results are personalised.** Your own browsing history distorts what you see. Use an incognito window, and remember Google localises heavily — a customer three towns over sees different results from you.

**You may be too new.** New domains rarely rank for anything competitive in the first few months, regardless of how good the site is. This is frustrating and there is no shortcut.

**Or you have nothing to rank.** A five-page brochure site with no content answering anything anyone searches for will not rank, because there is nothing on it that matches a query. This is the most common cause by a distance, and the one nobody wants to hear.

## The order I would work through it

1. Check `robots.txt` and the WordPress indexing checkbox. Two minutes.
2. Set up Search Console and submit a sitemap. Twenty minutes.
3. Read the Pages report and fix whatever it names, canonicals first.
4. Complete your Google Business Profile, if you serve a local area. It is free and it is the single highest-return hour available to most local businesses.
5. Write something genuinely useful for the searches your customers actually make. Then keep doing that.

Steps one to four are mechanical and you can do them yourself this week. Step five is the one that takes months and produces almost all of the result.

---

*If you have worked through this and are still stuck, [we will audit the site and tell you what is actually wrong](/services/seo-optimization) — including if the answer is that nothing is broken and you just need to publish more.*

## Sources and scope

The recommendations in this guide are Flowzync’s practical opinion. The linked documentation supports the relevant platform or technical requirements; it does not establish a promised commercial result.

- [Google Search Console: page indexing](https://support.google.com/webmasters/answer/7440203).
- [Google Search Central: people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
