# Zync and journal update — 30 October 2026

- Replaced plain paragraph replies with structured, bounded service cards, feature lists, page links and explicit in-chat exploration actions.
- Guided answers use published service configuration, site facts and articles. Following live feedback, an optional conversation layer uses the existing configured providers with a bounded website context, structured output validation and an allowlist of page/service links. Unsupported questions remain outside scope; no new provider credential is required.
- Greeting and notice are shorter. Privacy wording discloses configured provider processing; the compact notice says AI can make mistakes and asks visitors to avoid sensitive details.
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

## Follow-up usability revision

The visitor reported repetitive menus and excessive space around the composer. Removed the separate toolbar, reduced the header/composer to a compact fixed layout, enlarged the responsive conversation area and hid old action buttons after the next message. Previous service menus become a short history summary. Quote mode shows the form on its own and returns to the conversation when dismissed or when a new message is sent. Added New conversation, guided new/existing-site discovery, and optional short structured provider replies grounded in published website context.

## Worldwide positioning and verified leadership

Removed public physical-base wording from site configuration, FAQs, privacy, location-page notes/social metadata, team page and llms.txt. Existing location and language slugs remain intact; only the footer language navigation was removed. Added owner-provided CEO name Hammad Tahir and exact LinkedIn profile to the leadership page, Person schema and assistant fact context. CEO questions have a direct deterministic answer with the allowlisted profile link. Service replies reference the professional team, relevant feature areas and published FAQs. Project-brief fallback now carries visitor-supplied new/existing, goal and business information forward instead of repeating the initial menu.

Internal assistant links use client-side navigation so the root-layout conversation survives a service-page visit. Only the latest assistant answer exposes action buttons; older discovery menus are collapsed into a brief history summary. The visible composer has a compact fixed area and the remaining responsive panel height belongs to the conversation.
