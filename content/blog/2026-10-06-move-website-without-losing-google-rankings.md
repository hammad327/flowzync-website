---
title: "How to Move a Website Without Losing Google Rankings"
description: "The redirect map, the order of operations and the checks that keep traffic intact through a redesign, a platform change or a new domain."
updated: "2026-10-27"
date: "2026-10-06"
category: "SEO"
cover: "/images/blog/website-migration.svg"
faqs:
  - q: "Will I lose rankings if I redesign my website?"
    a: "Not if the URLs stay the same and the content survives. Most traffic losses in a redesign come from changed URLs with no redirects, or from pages quietly dropped because nobody checked what they were ranking for. Both are avoidable with a crawl of the old site before anything is switched off."
  - q: "Do I need 301 redirects for a new website?"
    a: "For every URL that changes, yes — a permanent redirect to the closest equivalent page. Redirecting everything to the homepage is the common shortcut and Google increasingly treats those as soft 404s, so they pass little or nothing and the ranking is lost anyway."
  - q: "How long does it take to recover from a site migration?"
    a: "A clean migration usually shows a modest dip for two to four weeks while Google recrawls and reconciles the redirects, then recovers. A migration with broken redirects can take months, because you are rebuilding rather than transferring. The difference is almost entirely in the preparation."
  - q: "What is the most common mistake in a website migration?"
    a: "Launching with the staging site's robots.txt or noindex tags still in place. It is remarkably common, it deindexes the whole site, and it is often not noticed for a fortnight because nothing looks wrong on the page."
---

Most of the traffic lost in a website move is lost before launch, in decisions nobody recorded. A page gets dropped because it looked unimportant. A URL changes because the new system prefers a different structure. Nobody writes it down, and six weeks later the enquiries are down a third and the cause is untraceable.

The work that prevents this is dull and takes about a day.

## Before anything is built: know what you have

**Crawl the existing site.** Screaming Frog's free tier handles 500 URLs, which covers most small business sites. Export every URL with its title and status code. This is your inventory and nothing else substitutes for it.

**Export your top pages from Search Console.** Twelve months of data, sorted by clicks and by impressions. This tells you which pages are earning the traffic — and it is almost always a surprise. Some ancient blog post nobody remembers writing is often in the top five.

**Export your top queries.** You need to know what you currently rank for, so you can tell afterwards whether you still do.

**List your backlinks.** Whatever tool you have, or at minimum Search Console's links report. A page with external links pointing at it must either survive or redirect — those links are the hardest thing on the site to replace.

Put all of it in one spreadsheet. That spreadsheet is the migration.

## Build the redirect map

One row per old URL. Three columns: old URL, new URL, done.

**Map to the closest equivalent page.** A service page goes to the new service page. A blog post goes to the same post.

**Do not redirect everything to the homepage.** This is the standard shortcut and it does not work. Google treats a redirect to an irrelevant page as a soft 404, which passes little or no value — you have the cost of the redirect and none of the benefit. A visitor who clicked a specific result and landed on your homepage also leaves.

**If a page has no equivalent, decide deliberately.** Either keep it, or redirect to the nearest genuinely related page, or let it 404 on purpose. A clean 404 for a page that should not exist is correct and not a problem. The problem is only when it was ranking and nobody looked.

**Use permanent redirects for a permanent move.** A server-side 301 or 308 communicates that the destination replaces the old URL. A temporary redirect has a different purpose; match the status to the actual change.

**Watch for chains.** Old URL → interim URL → final URL loses value at each hop and slows crawling. Point every old URL straight at its final destination.

**Keep the trailing slash convention consistent** with whatever the new platform does, or you will create a redirect for every page on the site for no reason.

## Things that are easy to forget

Your **sitemap** needs regenerating and resubmitting. Your **robots.txt** needs to be the production one — this is the single most common catastrophic mistake, launching with staging's `Disallow: /` or a leftover `noindex` meta tag. Check it on launch day and again the next morning.

**Canonical tags** must point at the new URLs on the new domain, with the exact host you intend to be canonical. If the site answers on both www and the apex, pick one, redirect the other permanently, and make the canonical match. A canonical pointing at a URL that then redirects elsewhere is how you end up with Google choosing a different canonical than you did.

**Structured data** frequently gets lost in a rebuild because it lived in the old theme.

**Analytics and Search Console** need the new property set up in advance if the domain is changing, and the Change of Address tool used.

**Internal links** should point at the new URLs directly, not rely on the redirects. Redirects are for the outside world.

## Launch, in order

Put the redirects live at the same moment as the new site, not after. Then, the same day: fetch the homepage as Google via URL Inspection, submit the new sitemap, and spot-check twenty redirects from the map by hand — including the top ten pages from Search Console.

If the domain is changing, use the Change of Address tool in Search Console. It is not optional and it materially speeds up reassignment.

## The four weeks after

Temporary fluctuations are possible while search systems process a move. There is no universal two-week recovery period or guarantee that traffic will remain unchanged.

Watch the **Page Indexing** report for a rise in 404s or "redirect error". Watch **Crawl Stats** to confirm Google is working through the new URLs. Compare **top queries** against the export you took, and if a specific page has dropped, check its redirect first before concluding anything about content.

Keep the redirects for at least a year. There is no reason to remove them; old links persist far longer than anyone expects.

## The shortcut worth taking

If the content is fine and only the design is tired, keep every URL exactly as it is. A redesign that changes no URLs is the lowest-risk website project there is, and most of the migration work above simply disappears.

Changing URLs should be a decision with a reason behind it, not a side effect of the new platform's defaults.

---

*We keep URLs intact through redesigns, and redirect properly when they genuinely have to change. [Here is how we work](/services/custom-website-design).*

## Sources and scope

The recommendations in this guide are Flowzync’s practical opinion. The linked documentation supports the relevant platform or technical requirements; it does not establish a promised commercial result.

- [Google Search Central: site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
- [Google Search Console: page indexing](https://support.google.com/webmasters/answer/7440203).
