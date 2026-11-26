# flowzync.com: Action Plan

From the 26 November 2026 audit (`FULL-AUDIT-REPORT.md`). ✅ = done in code during this audit. Every other item needs you: a dashboard setting, a fact only you know, or a business decision.

## Critical: this week

1. **Fix the `www` certificate in Vercel.** *(you, ~10 min)*
   - Go to Vercel → your project → Settings → Domains. Make sure `www.flowzync.com` is listed. Set it to **Redirect to `flowzync.com`**, with **308 Permanent** (not 307).
   - If Vercel shows a DNS warning on `www`, open your domain registrar and make sure `www` is a CNAME pointing to `cname.vercel-dns.com`. Vercel then issues a new certificate automatically.
   - Check: `https://www.flowzync.com` should redirect to `https://flowzync.com` with no security warning.
2. **Add a `CRON_SECRET` to Vercel.** *(you, 2 min)* Go to Settings → Environment Variables and add `CRON_SECRET` with any long random string, then redeploy. Until you do, the daily IndexNow submission stays off: the endpoint was open to anyone and now refuses requests without the secret.
3. ✅ Closed the open `/api/indexnow` and `/api/keep-alive` endpoints. The second one showed anyone the email address your leads go to.
4. ✅ Removed every unsupported claim found: "award-quality", "certified", "first-page results", "fast turnaround", "team on call", invented percentages, a measured conversion rise, Shopify, "results" on /portfolio, and the "no page builders" FAQ.

## High: next 1–2 weeks

5. ✅ **Price signal — decided: projects start from $100.** Shown under every service headline, in a cost FAQ and the Service schema on all 13 service pages, the homepage and services FAQs, llms.txt and the Zync chat. Change it in one place: `pricing` in `lib/site.js`. *(Original note:)* For each money page (custom website, GoHighLevel funnels, GHL for care, WordPress, WooCommerce), publish a "projects typically start from …" or a range, with what moves the price. Every competitor in the results shows one. Give me the figures and I'll add them; I won't invent them.
6. **Location — decided: not shown.** The owner is targeting the USA and the UK and does not want the base named. Nothing was added; the site continues to describe Flowzync honestly as a remote studio, and no page implies an office in any city. Trust has to come from elsewhere instead: verifiable portfolio items (14), directory profiles and reviews (19), client credit links (18). *(Original note:)* For example: "Flowzync is a remote studio based in Lahore, Pakistan, working with clients worldwide". It would go on /about, /contact, the privacy page and the Organization schema. Today nothing on the site says where the business is, and that is the weakest trust signal it has. This doesn't need the team page linked.
7. ✅ **DAS Care Services — confirmed: a website only.** It stays under WordPress design. The GoHighLevel-for-care page therefore has no project proof yet; the first care client who uses GoHighLevel should become its case study. *(Original note:)* It is filed under WordPress now, because its page describes a website build. If you also did GoHighLevel work for them, describe it and it moves back to the care GoHighLevel page as proof. Right now that page has no project proof.
8. **Pick one page for "GoHighLevel for care agencies".** *(me, once you agree)* The blog post and the service page compete for the same search. Recommended: the service page owns the term, and the post is retitled to a narrower question (e.g. what GoHighLevel does and doesn't replace for a care provider) and links to it. State the scope too, either UK or UK and US: the page uses UK-only terms (DBS, right-to-work).
9. ✅ Titles and descriptions: 49 + 46 fixed; 0 remain.
10. ✅ Mobile layout shift fixed (consent banner).

## Medium: within a month

11. **Location pages: keep, strengthen, or consolidate.** *(you decide, I implement)*
    - The specialists suggest keeping about 24–26 cities: the major US and UK cities, Dubai and Cape Town, plus Sarasota and Boise, which have distinct angles.
    - Give each kept page something only it has: a real project from that country, a local regulation or market detail, a real client quote.
    - Noindex or merge the thinnest pages (`findings/local.md` and `findings/content.md` list them).
    - Look at Search Console impressions per city before deciding.
12. **Pause the 330-word micro-post format.** *(you)* 28 posts in 16 days on one skeleton reads as scaled content. Merge the overlapping ones (four GoHighLevel posts, the WooCommerce seasonal posts) and expand only those that get impressions. Delete `content/blog/2026-10-29-testing.md` (a draft, not published).
13. **Resolve the other cannibalised pairs** *(me, once you agree)*: the GBP checklist vs the local SEO checklist, and WordPress cost vs cheap website design. `findings/content.md` names the owner page for each.
14. **Make portfolio items verifiable.** *(you)* For each project, add the year, your role, the client's country and a live link where the client agrees. 28 of 30 currently show a `.example` site name.
15. **Answer-first openings and question headings on the care posts.** *(me)* Rewrites are in `findings/geo.md`.
16. **Context-aware hero buttons.** *(me)* "Get a free quote" should pre-select the service on /contact, and "See related work" should open /portfolio already filtered.
17. **Schema graph `@id`s, and `areaServed` on industry Service nodes.** *(me)* JSON-LD is in `findings/schema.md`.

## Authority: ongoing (this is what moves DA/DR)

18. **Ask your 30 portfolio clients for a credit link.** A "Website by Flowzync" link in the footer is the most valuable link you can get.
19. **Profiles, US/UK first:** Clutch, GoodFirms, DesignRush, UpCity (US), Sortlist, Crunchbase, the GoHighLevel partner directory, and UK and US care-sector supplier lists. Use the same name, email and URL everywhere, and add each live profile to `sameAs` in `lib/site.js`.
20. *(Skipped by owner decision: the base is not to be shown.)* **A Google Business Profile in Lahore**, as a service-area business if your premises qualify. Never create profiles at virtual addresses in target cities: that is spam and gets suspended.
21. **2–4 short YouTube walkthroughs** of real builds (a GoHighLevel care pipeline, a WordPress handover). Video is the biggest gap in the AI-search review.

## Monitoring

22. Search Console → Pages: watch "Duplicate, Google chose different canonical" fall once item 1 is done. That error is consistent with the `www` problem.
23. Rerun this audit in about 4 weeks, ideally with Google API credentials so it includes real field data and indexing status.
