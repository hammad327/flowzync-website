// ─────────────────────────────────────────────────────────────
//  INTERNAL LINKING — services and industries → work and reading
//
//  WHY THIS FILE EXISTS
//  Search Console reported 100 URLs as "Discovered – currently not
//  indexed". Measuring inbound internal links per page (ignoring the
//  nav and footer, which are on every page and signal nothing) showed
//  an almost exact match with that list:
//
//      services     146 inbound links   mostly indexed
//      industries    58                 mostly indexed
//      locations     12                 mixed
//      portfolio      3                 almost all not indexed
//      blog           2                 almost all not indexed
//
//  "Discovered – currently not indexed" means Google found the URL,
//  usually from the sitemap, and decided it was not worth crawling.
//  A sitemap entry is a weak signal; an internal link from a page
//  Google already trusts is a strong one. The service and industry
//  pages carry nearly all of this site's internal authority and
//  previously linked to neither a single project nor a single article.
//
//  So: projects are matched automatically (every project already
//  carries its service and industry), and articles are mapped by hand
//  below, because a keyword match produces plausible-looking rubbish
//  and a link that is not genuinely relevant helps nobody.
//
//  ── ADDING A POST ───────────────────────────────────────────
//  Put its slug against any service or industry it genuinely belongs
//  to. Leaving it out is fine — it still gets links from /blog and
//  from the related-posts block on other articles. Listing it
//  everywhere is worse than listing it nowhere.
// ─────────────────────────────────────────────────────────────

/** Service slug → post slugs worth reading alongside it. */
export const servicePosts = {
  'custom-website-design': [
    'how-long-does-it-take-to-build-a-website',
    'how-to-write-a-website-brief',
    'cheap-website-design-what-you-actually-get',
    'website-redesign-signs',
    'homepage-audit-service-business',
    'website-project-timeline-client-delays',
    'portfolio-case-study-without-metrics',
    'mobile-service-page-first-screen',
  ],
  'landing-pages': [
    'website-traffic-but-no-leads',
    'what-is-a-quiz-funnel',
    'how-many-leads-should-a-website-generate',
    'mobile-service-page-first-screen',
    'wordpress-form-thank-you-page',
    'ga4-generate-lead-form-tracking',
  ],
  'ghl-funnels': [
    'ghl-funnel-mistakes',
    'what-is-a-quiz-funnel',
    'gohighlevel-vs-hubspot-small-business',
    'gohighlevel-ai-lead-follow-up',
    'gohighlevel-stop-follow-up-after-booking',
  ],
  'ghl-funnels-for-care-agencies': [
    'gohighlevel-for-care-agencies',
    'why-care-agencies-lose-enquiries',
    'care-agency-crm-what-to-look-for',
  ],
  'automations': [
    'missed-call-text-back-for-small-business',
    'website-contact-form-not-sending-emails',
    'gohighlevel-vs-hubspot-small-business',
    'gohighlevel-rescheduled-appointment-reminders',
    'gohighlevel-duplicate-contacts-form-routing',
    'gohighlevel-stop-follow-up-after-booking',
    'gohighlevel-lead-assignment-no-owner',
    'gohighlevel-ai-lead-follow-up',
  ],
  'ghl-crm-setup': [
    'gohighlevel-vs-hubspot-small-business',
    'care-agency-crm-what-to-look-for',
    'missed-call-text-back-for-small-business',
    'gohighlevel-duplicate-contacts-form-routing',
    'gohighlevel-lead-assignment-no-owner',
    'gohighlevel-rescheduled-appointment-reminders',
  ],
  'wordpress-website-design': [
    'how-much-does-a-wordpress-website-cost',
    'elementor-vs-custom-wordpress-theme',
    'wordpress-vs-gohighlevel-for-your-website',
    'wordpress-security-update-checklist',
    'wordpress-hero-image-lcp',
    'wordpress-form-thank-you-page',
    'woocommerce-staging-live-orders',
  ],
  'elementor-design': [
    'elementor-vs-custom-wordpress-theme',
    'how-much-does-a-wordpress-website-cost',
    'elementor-editable-client-handover',
  ],
  'woocommerce-development': [
    'woocommerce-vs-shopify-small-business',
    'how-much-does-a-wordpress-website-cost',
    'woocommerce-black-friday-checklist',
    'woocommerce-ai-shopping-product-data',
    'merchant-center-price-mismatch',
    'woocommerce-coupon-testing',
    'woocommerce-shipping-zone-wrong-rate',
    'woocommerce-product-variant-structured-data',
    'woocommerce-staging-live-orders',
    'woocommerce-stripe-test-payments-webhooks',
    'woocommerce-holiday-shipping-cutoff',
    'woocommerce-black-friday-sale-ends',
    'woocommerce-order-email-not-arriving',
    'woocommerce-mixed-cart-pickup-shipping',
    'woocommerce-refund-test-before-launch',
  ],
  'seo-optimization': [
    'bing-ai-performance-topics-portfolio-small-business',
    'why-is-my-website-not-showing-up-on-google',
    'seo-basics-new-websites',
    'schema-markup-explained-for-small-business',
    'move-website-without-losing-google-rankings',
    'local-seo-checklist-small-business',
    'how-to-get-your-business-mentioned-by-ai-chatgpt',
    'ai-search-visibility-dashboard-small-business',
    'search-console-high-impressions-low-ctr',
    'ai-search-service-page-comparison-questions',
    'gsc-wrong-page-ranking-local-query',
    'website-service-area-vs-city-pages',
    'google-business-profile-holiday-hours',
    'ga4-generate-lead-form-tracking',
  ],
  'graphic-design': [
    'cheap-website-design-what-you-actually-get',
  ],
  'ui-ux-design': [
    'website-traffic-but-no-leads',
    'how-many-pages-should-a-small-business-website-have',
    'mobile-service-page-first-screen',
    'homepage-audit-service-business',
  ],
  'maintenance-support': [
    'website-maintenance-what-it-includes',
    'website-contact-form-not-sending-emails',
    'does-website-speed-affect-seo-rankings',
    'wordpress-security-update-checklist',
    'wordpress-hero-image-lcp',
    'woocommerce-order-email-not-arriving',
  ],
};

/** Industry slug → post slugs worth reading alongside it. */
export const industryPosts = {
  'care-homes-and-home-care': [
    'why-care-agencies-lose-enquiries',
    'care-agency-website-what-families-look-for',
    'care-agency-website-cqc-requirements',
    'should-home-care-agencies-publish-prices',
    'how-care-agencies-get-found-on-google',
    'carer-recruitment-website-fill-shifts',
    'care-agency-crm-what-to-look-for',
    'gohighlevel-for-care-agencies',
  ],
  'home-and-property-services': [
    'local-seo-checklist-small-business',
    'missed-call-text-back-for-small-business',
    'google-business-profile-not-showing-in-maps',
    'home-services-website-quote-form',
    'website-service-area-vs-city-pages',
    'gsc-wrong-page-ranking-local-query',
  ],
  'healthcare-and-medical-practices': [
    'missed-call-text-back-for-small-business',
    'local-seo-checklist-small-business',
  ],
  'dental-practices': [
    'missed-call-text-back-for-small-business',
    'google-business-profile-optimization-checklist',
  ],
  'veterinary-practices': [
    'missed-call-text-back-for-small-business',
    'local-seo-checklist-small-business',
  ],
  'ecommerce-and-retail': [
    'woocommerce-vs-shopify-small-business',
    'does-website-speed-affect-seo-rankings',
    'woocommerce-black-friday-checklist',
    'woocommerce-ai-shopping-product-data',
    'merchant-center-price-mismatch',
    'woocommerce-holiday-shipping-cutoff',
    'woocommerce-mixed-cart-pickup-shipping',
    'woocommerce-coupon-testing',
  ],
  'legal-and-professional-services': [
    'how-many-leads-should-a-website-generate',
    'does-my-business-need-a-blog',
  ],
  'accountants-and-bookkeepers': [
    'local-seo-checklist-small-business',
    'does-my-business-need-a-blog',
  ],
  'financial-services-and-mortgage-brokers': [
    'how-many-leads-should-a-website-generate',
    'what-is-a-quiz-funnel',
  ],
  'real-estate-and-construction': [
    'local-seo-checklist-small-business',
    'google-business-profile-not-showing-in-maps',
  ],
  'hospitality-and-food': [
    'google-business-profile-optimization-checklist',
    'local-seo-checklist-small-business',
  ],
  'beauty-wellness-and-fitness': [
    'missed-call-text-back-for-small-business',
    'google-business-profile-optimization-checklist',
  ],
  'education-and-training': [
    'what-is-a-quiz-funnel',
    'does-my-business-need-a-blog',
  ],
  'automotive-and-transport': [
    'google-business-profile-not-showing-in-maps',
    'local-seo-checklist-small-business',
  ],
  'recruitment-and-staffing': [
    'carer-recruitment-website-fill-shifts',
    'how-many-leads-should-a-website-generate',
  ],
  'saas-and-technology': [
    'how-to-get-your-business-mentioned-by-ai-chatgpt',
    'schema-markup-explained-for-small-business',
  ],
  'local-and-small-business': [
    'local-seo-checklist-small-business',
    'google-business-profile-not-showing-in-maps',
    'how-many-leads-should-a-website-generate',
    'google-business-profile-holiday-hours',
    'website-service-area-vs-city-pages',
  ],
  'charities-and-nonprofits': [
    'does-my-business-need-a-blog',
    'how-many-leads-should-a-website-generate',
  ],
  'manufacturing-and-industrial': [
    'how-to-write-a-website-brief',
    'schema-markup-explained-for-small-business',
  ],
};

/** Posts to show on a service page, resolved against real posts. */
export const postsForService = (slug, allPosts, limit = 3) =>
  (servicePosts[slug] || [])
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit);

/**
 * Everything mapped to a service beyond the cards already shown. Rendered
 * as a plain link list, so a topic with a dozen articles still gives each
 * one a link from a page Google trusts without a dozen cards.
 */
export const morePostsForService = (slug, allPosts, skip = 4, limit = 12) =>
  postsForService(slug, allPosts, 99).slice(skip, skip + limit);

export const morePostsForIndustry = (slug, allPosts, skip = 4, limit = 12) =>
  postsForIndustry(slug, allPosts, 99).slice(skip, skip + limit);

/** Posts to show on an industry page, resolved against real posts. */
export const postsForIndustry = (slug, allPosts, limit = 3) =>
  (industryPosts[slug] || [])
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit);
