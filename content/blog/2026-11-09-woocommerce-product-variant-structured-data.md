---
title: "Product Variant Structured Data for WooCommerce"
seoTitle: "Product Variant Structured Data for WooCommerce"
description: "Audit WooCommerce product variant structured data for ProductGroup, variation URLs, offer prices, and availability using a real product example."
date: "2026-11-09"
publishAt: "2026-11-09T13:00:00+05:00"
category: "WooCommerce"
cover: "/images/blog/woocommerce-product-variant-structured-data.jpg"
tags: ["WooCommerce product variant structured data", "WooCommerce"]
---

A backpack comes in three colours. Only the slate one is out of stock. A product page that says “in stock” for the whole group can hide the detail that matters to the buyer.

## Start with what the customer can select

Pick one variable product with different stock levels and prices. Record the parent identifier, variation identifiers, images and availability. Open each shareable variation URL if your store uses them, and check which option the page actually shows. If it is a single page with selectors, verify the initial state and the selected variant experience separately.

Google's [product variant guidance](https://developers.google.com/search/docs/appearance/structured-data/product-variants) describes how to represent a product group and its variants. Compare your markup with the visible offer and your catalogue feed. Look for a stable group identifier, meaningful variant properties, and offer data that belongs to the specific variant. The price and stock for the black backpack shouldn't carry over to the slate one.

## Look for two sources of markup

A store can output product data from the theme, an SEO plugin and a custom snippet. Inspect the rendered page to find out which one emits each block before changing settings. Fix contradictory markup at the source. Then use Google's Rich Results Test on the relevant page URLs and compare the result with your own product matrix.

Retest when a variation goes out of stock or a sale ends. Good markup describes the live offer and can help systems interpret it, while how it appears in Search is Google's decision. Our [WooCommerce product data guide](/blog/woocommerce-ai-shopping-product-data) covers the catalogue details to align with the page.
