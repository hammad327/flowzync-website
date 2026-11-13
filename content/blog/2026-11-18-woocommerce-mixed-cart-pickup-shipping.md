---
title: "Test Local Pickup in a Mixed WooCommerce Cart"
seoTitle: "Test Local Pickup in a Mixed WooCommerce Cart"
description: "Test how WooCommerce handles a mixed cart with local pickup and delivery, from available shipping methods through order confirmation."
date: "2026-11-18"
publishAt: "2026-11-18T13:00:00+05:00"
category: "WooCommerce"
cover: "/images/blog/woocommerce-holiday-shipping-cutoff.jpg"
tags: ["WooCommerce local pickup mixed cart", "WooCommerce"]
faqs: [{"q": "Can every mixed cart be split by default?", "a": "It depends on your shipping and checkout configuration. Confirm supported behaviour before promising split fulfilment."}, {"q": "Where should collection instructions appear?", "a": "Show the essential details before payment and include them in the confirmation so customers can find them later."}]
---

A shop sells gift hampers and products that must be collected. Both end up in the same basket. The customer selects delivery, but the team cannot ship everything. Test that exact combination before you promote either product.

## Write down which fulfilment combinations you can handle

Create three baskets in a test store. Put an ordinary shippable item in one, a pickup-only item in another and both in the third. Decide whether the mixed basket should be collected in full, split by fulfilment method, or prompt the customer to place two orders. Your warehouse or shop team needs to be able to execute whichever rule you choose.

## Check the promise from product page to receipt

Explain pickup eligibility on the product page. Then test the basket with a guest account. Check each delivery option and total, place a test order, and read the order confirmation as a customer. The pickup location and any collection instructions should agree with the staff view. If your configuration relies on shipping zones, review [WooCommerce’s shipping zones documentation](https://woocommerce.com/document/setting-up-shipping-zones/) and confirm that guest addresses match as expected.

Keep this set of carts as a release check. Retest when you add an item with different handling rules or change checkout extensions.
