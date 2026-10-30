# Zync and journal update — 30 October 2026

- Replaced plain paragraph replies with structured, bounded service cards, feature lists, page links and explicit in-chat exploration actions.
- Responses are selected from the published service configuration, site facts and latest public articles. External generative-provider calls were removed from this chat route to enforce the requested website-only scope; no provider credential changes are needed. Unsupported questions receive a brief scope explanation and relevant choices.
- Greeting and notice are shorter. Privacy wording now describes the current server-only processing rather than suggesting a third-party AI transfer that no longer occurs on this route.
- Quote controls have dedicated scoped CSS, visible labels, focus states, captcha error/retry state and responsive sizing. A new chat message dismisses the form. Draft form fields stay only in component memory until explicit submission or page unload. Visitors can reopen it with the persistent quote action.
- Existing enquiry endpoint, spam verification, lead storage and notifications remain in place. No production test lead or external message was submitted for this UI verification.
- Added the 30 October problem/solution article `/blog/wordpress-security-update-checklist`, with official WordPress and WooCommerce sources and a local SVG cover. Topic is timely following the 28 October core security release, not a claim of measured global search popularity.
- Existing public slugs preserved. Homepage/journal/feed/sitemap discover the article through the existing publication system. Privacy page last-modified updated for the changed notice.

## Checks

- Production build passed.
- `node --experimental-vm-modules scripts/check-zync.mjs` passed: sourced replies, service discovery and pagination, contextual service/timing, quote/company/process, off-topic routing and dismissal contract.
- Automated public audit: 153 pages / 38 published articles, zero findings in defined checks. The report is dated and is not a guarantee of indexing, ranking or approval.
- Managed local browser preview unavailable (preview runtime did not resolve the existing Next dependency); no application scripts were changed to compensate. Live browser checks follow deployment.

## Live UI verification

Authenticated access is not needed for this public chat. Verified live greeting, four service cards, website links, quote controls and loaded spam check. Sending a new message dismissed the form. No enquiry was submitted. Visual QA found inherited global section padding on the new chat container; an explicit container padding reset removes it. Long answers now scroll to the start of the newest reply so visitors see its introduction and first choices rather than only the final card.
