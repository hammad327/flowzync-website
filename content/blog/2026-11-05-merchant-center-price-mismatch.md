---
title: "Fix a Merchant Center Price Mismatch in WooCommerce"
seoTitle: "Fix a Merchant Center Price Mismatch in WooCommerce"
description: "Trace a Google Merchant Center price mismatch from the submitted WooCommerce offer to its variation, currency, landing page, and checkout."
date: "2026-11-05"
publishAt: "2026-11-05T13:00:00+05:00"
category: "WooCommerce"
cover: "/images/blog/merchant-center-price-mismatch.jpg"
tags: ["Merchant Center price mismatch", "WooCommerce"]
---

The feed says £35, the product page opens at £45, and the item turns £35 only after someone chooses olive green. That difference gives you somewhere to start.

## Inspect one rejected item

Open the affected offer in Merchant Center and copy its item ID, price, currency and landing URL. Open that URL in a private window with no customer login. Record the product and variation that appear first, then check whether the price remains the same once you add it to the cart. Repeat for the target market if your storefront switches prices by country.

[WooCommerce variable products](https://woocommerce.com/document/variable-product/) can have their own prices, stock and images. If the submitted item represents a specific colour and size, check that the landing experience makes that offer easy to identify. Compare the visible price, the product markup and the feed. Google's [price mismatch troubleshooting guide](https://support.google.com/merchants/answer/9773429) explains how it compares the feed with the landing page.

## Work backward from the discrepancy

If the feed is stale, trace when the WooCommerce price changed and when the feed last refreshed. If the page is stale, inspect storefront caching. If the disagreement only occurs for logged-out visitors or one country, test the pricing rules for that visitor. Check time-limited sales on both sides of the transition and avoid entering a coupon-only price as the normal public price.

Fix the earliest step where the numbers diverge and check several related variations before waiting for Merchant Center to reprocess the data. Keep the screenshots with your item ID so you can tell a fresh discrepancy from an old report. See our [product data guide](/blog/woocommerce-ai-shopping-product-data) for the wider catalogue review.
