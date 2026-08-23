---
title: "Why Is My Website Not Showing Up on Google?"
description: "Twelve reasons, in the order you should check them — starting with the one that catches roughly half of all new sites and takes two minutes to fix."
date: "2026-02-11"
author: "Hamza Khan"
category: "SEO"
cover: "/images/blog/website-not-on-google.svg"
---

If your website is not showing up on Google, the cause is almost always one of three things: **Google has not found it, Google has found it but chosen not to index it, or Google has indexed it and you are simply not ranking well enough to see yourself.** These are completely different problems with completely different fixes, so the first job is working out which one you have.

Here is how to tell, in about five minutes.

## Step one: find out which problem you have

Search Google for `site:yourdomain.com` — exactly that, with your own domain.

**If you get no results at all**, Google has not indexed a single page. That is problem one or two, and it is genuinely urgent.

**If you get some pages but not the ones you care about**, Google is indexing selectively. That is problem two.

**If all your pages are there**, Google knows about your site perfectly well. You are not ranking, which is problem three — a slower, more normal problem, and not an emergency.

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

**"Crawled – currently not indexed"** — Google looked and decided the page was not worth including. Almost always a content problem: thin, duplicated, or near-identical to other pages on the site. Twelve location pages that differ only by town name land here routinely.

**"Discovered – currently not indexed"** — Google knows the URL exists but has not prioritised crawling it. Usually means low site authority or too many low-value URLs competing for crawl budget.

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
