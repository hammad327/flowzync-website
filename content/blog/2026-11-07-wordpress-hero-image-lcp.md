---
title: "Fix a Slow WordPress Hero Image That Hurts LCP"
seoTitle: "Fix a Slow WordPress Hero Image That Hurts LCP"
description: "Diagnose a slow WordPress hero image with the browser waterfall, then address late discovery, excess bytes, and delay before the image paints."
date: "2026-11-07"
publishAt: "2026-11-07T08:00:00+05:00"
category: "WordPress"
cover: "/images/blog/wordpress-hero-image-lcp.jpg"
tags: ["WordPress hero image LCP", "WordPress"]
---

The homepage headline appears quickly. The large photo below it arrives two seconds later. Before swapping optimisation plugins, find out what your browser was doing during those two seconds.

## Find the element and its delay

Run a mobile test in PageSpeed Insights or record a load in Chrome's Performance tools. Confirm which element is reported as Largest Contentful Paint. On some pages it's a headline, so compressing the hero won't solve that particular trace. If it is the photo, look at when the request starts, how long it runs and how long the image waits before it paints. [web.dev's LCP guide](https://web.dev/articles/optimize-lcp) breaks down those phases.

When the request begins late, check whether a carousel script or CSS background delays discovery. When the request itself is slow, compare the delivered dimensions and format with the displayed size. When the image is downloaded but still invisible, look for an entrance animation, script work or styling that hides it until the slider initializes.

## Change one thing and measure again

Try placing the visible hero image in the initial page markup with appropriate responsive sizes. Avoid lazy-loading the initial LCP image and reserve high fetch priority for the asset that actually needs it. Resize and compress it without flattening fine detail. Keep explicit dimensions to reserve space during load.

Repeat with the same device profile and network settings, checking a few cold loads. Save the trace with your change so you can spot a regression later. Field data reflects real visits over time, so expect it to move differently from a single lab run. See [how speed fits into SEO](/blog/does-website-speed-affect-seo-rankings) for the wider picture.
