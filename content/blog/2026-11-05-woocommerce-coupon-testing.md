---
title: "How to Test WooCommerce Coupons Before a Sale"
seoTitle: "How to Test WooCommerce Coupons Before a Sale"
description: "Run a practical WooCommerce coupon test for sale items, minimum spend, stacking, and shipping before sending customers to checkout."
date: "2026-11-05"
publishAt: "2026-11-05T08:00:00+05:00"
category: "WooCommerce"
cover: "/images/blog/woocommerce-coupon-testing.jpg"
tags: ["WooCommerce coupon testing", "WooCommerce"]
---

A customer adds the item from your campaign email, pastes the code, and gets an error. The code worked when you tested it as an admin. The difference might be the item, the cart total, or the account. Find out before your mailing list does.

## Give the coupon a cart it should reject

In [WooCommerce coupon settings](https://woocommerce.com/document/coupon-management/), write down your intended rules in plain English. For example, take £10 off orders over £60, exclude clearance, and allow one use per customer. Then build five carts: a qualifying basket, one below the threshold, one with a sale item, one with a second coupon, and a qualifying basket using an account that already redeemed the offer.

Keep the expected result beside each test. Check the actual total as well as the coupon message. If a basket contains qualifying and excluded items together, check exactly which lines received the discount. Add an address and change the shipping method to see whether the saving still makes sense.

## Repeat the path from your email

Use a private browser window on your phone. Open the actual campaign link, pick a variation, and try the code with the same account state your shoppers will have. Run a test order in a suitable sandbox and compare the checkout total with the order record and email.

Check the expiry against your store clock, especially if you advertise midnight. Give support the precise offer terms and a screenshot of what success looks like. If an advertised combination fails, correct the coupon or clarify the terms before sending traffic. Work through the remaining promotion checks in our [WooCommerce Black Friday guide](/blog/woocommerce-black-friday-checklist).
