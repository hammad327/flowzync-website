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
  ],
  'landing-pages': [
    'website-traffic-but-no-leads',
    'what-is-a-quiz-funnel',
    'how-many-leads-should-a-website-generate',
  ],
  'ghl-funnels': [
    'ghl-funnel-mistakes',
    'what-is-a-quiz-funnel',
    'gohighlevel-vs-hubspot-small-business',
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
  ],
  'ghl-crm-setup': [
    'gohighlevel-vs-hubspot-small-business',
    'care-agency-crm-what-to-look-for',
    'missed-call-text-back-for-small-business',
  ],
  'wordpress-website-design': [
    'how-much-does-a-wordpress-website-cost',
    'elementor-vs-custom-wordpress-theme',
    'wordpress-vs-gohighlevel-for-your-website',
  ],
  'elementor-design': [
    'elementor-vs-custom-wordpress-theme',
    'how-much-does-a-wordpress-website-cost',
  ],
  'woocommerce-development': [
    'woocommerce-vs-shopify-small-business',
    'how-much-does-a-wordpress-website-cost',
  ],
  'seo-optimization': [
    'why-is-my-website-not-showing-up-on-google',
    'seo-basics-new-websites',
    'schema-markup-explained-for-small-business',
    'move-website-without-losing-google-rankings',
    'local-seo-checklist-small-business',
    'how-to-get-your-business-mentioned-by-ai-chatgpt',
  ],
  'graphic-design': [
    'cheap-website-design-what-you-actually-get',
  ],
  'ui-ux-design': [
    'website-traffic-but-no-leads',
    'how-many-pages-should-a-small-business-website-have',
  ],
  'maintenance-support': [
    'website-maintenance-what-it-includes',
    'website-contact-form-not-sending-emails',
    'does-website-speed-affect-seo-rankings',
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

/** Posts to show on an industry page, resolved against real posts. */
export const postsForIndustry = (slug, allPosts, limit = 3) =>
  (industryPosts[slug] || [])
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit);
