# Flowzync Workspace — activation and operator guide

The redesigned `/admin` includes a journal editor, media upload, leads, search/audience reporting, URL inspection, campaign drafts, recipient review and bounded sending. Real provider connections are required. An interface being deployed does not mean those integrations are connected.

## Required once, in production

1. Keep the existing `ADMIN_PASSWORD`. Sign-in now issues an eight-hour HttpOnly, SameSite session cookie; password is not stored in sessionStorage. Configure a Vercel Firewall rate-limit rule for `/api/admin/session` in production because an in-process retry limit cannot coordinate across serverless instances.
2. **Publishing:** set `CONTENT_GITHUB_TOKEN` to a fine-grained GitHub token limited to the Flowzync repository with Contents read/write. Set `CONTENT_GITHUB_REPO=hammad327/flowzync-website` and optionally `CONTENT_GITHUB_BRANCH=main`. Do not put the token in browser code or this document. Review GitHub branch protection/deployment permissions. Token creation is an owner-authorised access step.
3. **Campaign database:** run `migrations/20261028-admin.sql` in the existing Supabase project. Existing leads are preserved; the migration adds private campaign, recipient and suppression tables and a batch-claim function. Set the existing `SUPABASE_URL` and secret `SUPABASE_SERVICE_KEY`. RLS is enabled and public/anon/authenticated table access is revoked. No private list is committed to GitHub.
4. **Google reporting:** enable Google Search Console API and Analytics Data API in your own Google Cloud project. Grant a dedicated service account read access to the Flowzync Search Console property and Viewer access to the actual GA4 property. Set `GOOGLE_SERVICE_ACCOUNT_JSON`, `GA4_PROPERTY_ID`, and `GSC_PROPERTY=https://flowzync.com/`. New service-account permissions require owner approval. Reporting reads existing data; it does not install a tracking tag or override visitors' consent.
5. **Email:** connect a verified Resend sender/domain and set `RESEND_API_KEY`, `OUTREACH_FROM`, `OUTREACH_POSTAL_ADDRESS` and a stable random `UNSUBSCRIBE_SECRET`. Verify SPF/DKIM and your DMARC policy with the mail provider. Do not rotate the unsubscribe secret casually: existing links depend on it. Campaign sends are separate from existing Gmail enquiry notifications. Nothing is sent until an operator approves a stored campaign and clicks Send approved queue.
6. **WhatsApp:** use your official WhatsApp Business Cloud API account and verified business phone. Set `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `WHATSAPP_API_VERSION` to a currently supported version for your app, `WHATSAPP_TEMPLATE_NAME`, `WHATSAPP_TEMPLATE_LANGUAGE`, `WHATSAPP_APP_SECRET`, and `WHATSAPP_VERIFY_TOKEN`. The selected approved template must have one body text parameter, used for the campaign body. Arbitrary phone-number account enumeration is not implemented. Import only opted-in numbers in international `+countrycode…` format. Subscribe the Meta app to messages and status events at `https://flowzync.com/api/whatsapp/webhook`, complete verification, and test STOP/unsubscribe processing before use. Template/provider charges and messaging limits apply.
7. Redeploy after environment changes. Use Connections to see configuration presence, then make actual API requests to verify each service. A configured badge is not proof of provider authorisation or sender verification.

## Publishing workflow

- New article → title, unique slug, SEO title/description, category, date, cover, optional photograph, tags, Markdown content and FAQ list.
- Insert links/images/headings/tables from the editor toolbar; preview sanitised Markdown before publishing.
- Uploaded PNG/JPEG/WebP images are limited to 2 MB and checked by file signature. Upload creates a repository commit; the URL becomes live after the corresponding deployment succeeds.
- Save draft does not publish it. Publish creates a repository commit and triggers the existing GitHub/Vercel pipeline. The response explicitly reports deployment pending; check your actual public URL after success.
- Existing slugs are locked. Edits require the current file SHA; concurrent modifications fail instead of overwriting another editor's version.
- Saving a currently published article as a draft removes it from publication in the next deployment. Use this deliberately. No permanent delete control was added.
- Raw HTML is escaped and unsafe Markdown link schemes are rejected. Use Markdown for content. Editorial sources and factual review remain necessary.

## Outreach workflow

1. Enter a name, channel, subject/body, plain recipient list and source/permission record. Duplicates are removed. Lists must contain addresses only, not full spreadsheet rows or headers.
2. Save draft → review exact stored recipients and message → approve → process the approved queue in batches of five. Saving a draft never sends.
3. The queue uses PostgreSQL row locks and skip-locked claims. Concurrent workers claim different recipients. Suppressions are checked immediately before each send. Pause prevents new work; a message already handed to a provider cannot be recalled.
4. Resend requests use a recipient-specific idempotency key. WhatsApp uses approved template messages. Provider acceptance is labelled `accepted`, not `delivered`. WhatsApp signed webhook events can confirm delivery/read/failure; inbound STOP/UNSUBSCRIBE/CANCEL adds suppression.
5. A network timeout or interrupted worker is ambiguous. Those rows become `uncertain`; they are not automatically resent. Inspect provider logs first. Unsubscribe links use a signed token and a confirmation POST; clicks from link scanners do not silently unsubscribe users.
6. This is operator-driven processing in bounded batches, not an unattended marketing platform. Keep the dashboard open during processing; closing it leaves remaining queued rows available to resume. Large campaigns require provider limits, monitored delivery/bounces and an appropriate worker schedule. This release does not claim unattended background completion or email open/click tracking.

## Reporting definitions

- Search Console API: up to 100 top query rows over a dated period; clicks, impressions, CTR and **average** position. Not a universal fixed keyword rank, and not all queries are necessarily returned.
- GA4 Data API: daily active users, sessions, views over the last 28 complete days. Daily users are not summed into a unique-person total.
- Indexed Google/Bing totals are explicitly dated manual account snapshots. Single-URL Google Inspection uses the configured API; it does not request indexing or run a live test.
- Saved technical audit details are historical. There is no official single Google “SEO score”. Do not present these checks as a ranking, indexing or revenue guarantee.
- Ahrefs analytics, AI-citation reporting, automatic all-page rank tracking and live Bing API totals are not integrated by this release. Their account dashboards remain separate until supported credentials/API contracts are configured.

## Backlinks and indexing — current limits

A relevant, real repository README now links to Flowzync's WordPress, GoHighLevel and automation services. This is one public source owned by the business, not a high-authority editorial endorsement or guaranteed ranking improvement. No directory account or client website was modified without verified identity/access. Clutch's free profile does not guarantee a website backlink from directory listings. For stronger relevant links, use accurate business profiles, permission-based client project credits and original useful contributions; do not buy spam links or post promotional forum comments.

All public pages remain in the XML sitemap. The new 28 October article is discoverable from the journal, homepage, feeds and sitemap. Google/Bing decide whether and when to index; submission cannot force all pages into results. Bing's manual daily quota was already exhausted by ten priority URLs; do not bypass it. The fresh Bing Site Scan and sitemap processing must finish before claiming all issues are resolved.

## Official implementation references

- https://docs.github.com/en/rest/repos/contents#create-or-update-file-contents
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect
- https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://business.whatsapp.com/policy
- https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages
- https://help.clutch.co/en/knowledge/get-listed-on-clutch


## Live publication verification — 29 October 2026

- Application commit: `16d1cf755d4a9cdaa6e5c7b5b9a8abe918e375b7`; production deployment succeeded.
- Live audit: 152 public pages, 37 published articles; zero findings in the defined automated checks. The dated 29 October CSV and JSON include live HTTP results. This does not guarantee indexing, ranking or AdSense approval.
- Authenticated browser verification: existing password sign-in succeeded; Journal studio loaded all articles, metadata and locked existing slugs; rendered Markdown preview worked. Reporting and connection screens correctly show missing Google/CMS/provider credentials. Existing lead records load.
- IndexNow submission from the authenticated workspace accepted all 152 current sitemap URLs. Acceptance is not indexing confirmation.
- New requested 28 October article is live at https://flowzync.com/blog/ai-search-visibility-dashboard-small-business .
- Outreach tables are not migrated: live workspace reports storage unavailable (404). Database environment configuration is present but does not prove migration completion. No messages sent.
- CMS save/upload/publish remains disabled until a server-side repository token is configured. Analytics require the Google service account and actual GA4 property. Email/WhatsApp require provider setup described above. These integrations were not activated.
- Public repository README now links to Flowzync and relevant service pages: one owned source, not earned third-party editorial backlinks. No directory accounts or client-site links were created.
- Supabase/Vercel plugin installation was declined; no additional installation is required to read this setup file. Production configuration and migration require owner-side access. Never put secrets into chat, source files or article content.
