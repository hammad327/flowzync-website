# Flowzync — aapke liye baqi manual/account actions

**Audit date: 27 October 2026.** Yeh ek consolidated file hai: technical checks, changes aur sirf woh pending kaam jo business evidence ya private account access ke baghair complete nahi ho sakte. Existing page slugs/URLs preserve kiye gaye hain.

## Abhi kya complete hua

- 151 public HTML pages ka full build inventory: home, 5 listing hubs, About + Team, Contact, 13 services, 19 industries, 37 locations, 30 portfolio pages, 36 blog posts, 4 language pages aur 3 naye policy pages.
- Har public page par canonical, title/description uniqueness, H1, social metadata, language information, JSON-LD syntax, visible FAQ/schema consistency, internal links/fragments aur local image files check hue.
- Tamam 36 blogs mein publisher/byline, editorial/correction links aur article contents navigation. 35 purane articles mein relevant first-party sources aur scope notes add hue; 27 October ke article mein sources pehle se maujood the.
- Shopify/WooCommerce cost crossover, AI crawler controls, CQC rating display, FAQ rich results, word-count rules, local ranking claims aur migration promises mein targeted corrections.
- 37 location introductions ko practical project guidance mein rewrite kiya; unverified competitor pricing/ranking promises remove kiye. Har location par remote Lahore delivery aur no-local-office disclosure.
- Privacy Policy `/privacy`, Cookies & Analytics `/cookies`, Editorial Policy `/editorial-policy`, footer links aur contact/chat data-use notices publish kiye.
- Unsupported 240+, 98% aur 2-hour claims ki jagah process information. Traceable sources ke baghair testimonials publication se remove; team page par unverified individual identities ki jagah project disciplines. Invented-sounding historic headcount timeline ki jagah actual working process. Original records source control mein recoverable hain.
- Complete authored metadata ko arbitrary character-count par cut karna band kiya; missing hub social cards correct kiye. API routes ko `X-Robots-Tag: noindex, nofollow` diya.
- All blog URLs RSS aur llms.txt mein shamil. Sitemap dates substantive updates ke mutabiq hain; build time ke saath automatically change nahi hotin.

**Evidence:** `seo-page-audit-2026-10-27.csv` mein har page ki alag row hai. `seo-audit-results-2026-10-27.json` mein errors aur live verification state hai. `live_checked: false` ka matlab sirf build audit hai; `true` production checks ko indicate karta hai. Yeh report Google ke selected canonical/indexing decision ka substitute nahi.

## Final live verification

- Application release: `0314443abb87f6ef496e00f8e5aee5a1be878ad2`; Vercel deployment successful.
- All **151/151 public URLs returned HTTP 200** and matched the audited build’s titles and canonicals. **36/36 blogs included.** Final automated findings: **0 errors, 0 warnings** within the checks described in the report.
- Both legacy dated blog URLs reached their intended clean destinations. Robots, sitemap, RSS, llms.txt and the challenge endpoint returned HTTP 200. Unknown top-level and blog URLs returned genuine HTTP 404. API noindex header verified.
- Browser snapshot checks: **151 desktop + 151 narrow mobile renders**, no H1-count or horizontal-overflow failures. This is not a complete accessibility certification.
- IndexNow accepted **151 URLs** on 27 October 2026; acceptance does not guarantee indexing.
- The full live audit is recorded in `seo-audit-results-2026-10-27.json`; each public page is listed in `seo-page-audit-2026-10-27.csv`.

## 1. AdSense account — sab se pehle

**Update: 28 October 2026.** AdSense account create ho gaya hai. Actual account-issued publisher `ca-pub-3418740156485364` ke liye site-wide `google-adsense-account` metadata aur `/ads.txt` publish kiye. Production HTTP 200 aur exact values verify hui; build passed. Account ne ownership verified aur **Review requested / Getting ready** confirm kiya. Approval abhi pending hai.

- **Complete:** Owner verified/submitted customer information. Fresh AdSense dashboard confirms **We have got your info / completed all steps**. Private payment details are not stored here.
- European consent message **published with explicit owner approval**: Flowzync site name/logo/privacy URL and Do not consent choice for all listed regions. Account publication confirmed; website delivery remains unverified until AdSense tag integration. Ad-serving script/placements abhi enable nahi kiye; actual CMP integration, withdrawal entry point aur applicable US opt-outs complete hone par hi ads activate karein.
- Google review ke result aur identity/tax/address requirements monitor karein. Actual identity documents/agreements owner complete kare. Existing Google profile ko blindly submit na karein.
- Site ads.txt initially dashboard mein Not found tha; file ab live hai, Google ka next fetch status update karega.
- Approval ke baad conservative blog placements preview karein; navigation/forms/CTAs obscure na hon. Apne ads par clicks ya purchased click/traffic exchanges use na karein. Policies, contact/about pages ya SEO score approval guarantee nahi.

## 2. Google Search Console — account actions completed 27 October 2026

Signed-in `https://flowzync.com/` property mein yeh actions complete hue:

- `/sitemap.xml` dobara submit kiya; Google ne **Sitemap submitted successfully** confirm kiya. Sitemap tamam 151 public URLs cover karta hai; processing/indexing acceptance se alag hai.
- Failed **Duplicate without user-selected canonical** validation restart ki. Current validation **Started 27/10/2026**, **Pending 4, Failed 0** hai. Yeh passed result nahi.
- Chaar affected duplicate pages aur dono alternate-canonical examples ke current **Test live URL** results mein fetch/indexing allowed aur correct non-www self-canonical verify hua:
  - `/blog/care-agency-website-what-families-look-for`
  - `/blog/gohighlevel-for-care-agencies`
  - `/services/graphic-design`
  - `/services/wordpress-website-design`
  - `/services/landing-pages`
  - `/industries/hospitality-and-food`
- In chhe URLs ki **Indexing requested** confirmations mili. Naye 27 October article aur dono clean legacy blog destinations ki requests bhi accept hui:
  - `/blog/bing-ai-performance-topics-portfolio-small-business`
  - `/blog/seo-basics-new-websites`
  - `/blog/ghl-funnel-mistakes`
- `/blog` hub aur `/about/team` ki requests bhi accept hui. **Total: 11 priority URL requests accepted**; baqi URLs resubmitted sitemap se discover ho sakte hain.
- Purane dated URLs ke redirects production audit mein verified hain. Google ka existing 404 validation **Started**, Pending 2 / Failed 0 tha; ongoing validation reset nahi kiya. Redirecting old URLs ka separately indexed hona zaroori nahi.
- **Manual actions** aur **Security issues**: No issues detected. HTTPS report: zero non-HTTPS issues. Breadcrumbs report: zero invalid items. Yeh reports Google ke crawled sample ko represent karti hain, tamam 151 pages ka independent certification nahi.
- Core Web Vitals: mobile aur desktop par insufficient real-user usage data; field pass claim nahi kiya ja sakta.
- Historic August/September snapshots mein missing canonical aur unrelated external Google-selected canonical tha. Current live tests correct hain; Google-selected canonical sirf recrawl/indexing ke baad update hota hai. Historic discrepancy ko current compromise ka proof nahi maana gaya.
- WordPress ke pehle live test mein temporary JavaScript resource fetch failure hua; fresh Google retest mein correct canonical aur valid BreadcrumbList mila. Actual production chunk files HTTP 200 aur deployed build se matching the.

**Ab baqi:** Google ke next crawl/validation results monitor karein; sitemap coverage aur selected canonical ko processing ke baad compare karein. Requests ko baar baar submit karne se queue priority improve nahi hoti. Google har eligible URL index karne ka wada nahi karta. `Discovered – currently not indexed` ka solution sirf console switch nahi: useful distinctive content, internal discovery aur stable delivery maintain karni hogi. Public HTTP/build audit aur account inspection alag evidence hain.

## 3. Bing Webmaster Tools — 28 October account review

- Signed-in Flowzync property reviewed. Existing sitemap last crawled 24 August with 79 URLs; current `/sitemap.xml` resubmitted on 28 October. Bing confirmed **Processing**. Current public sitemap contains 151 URLs; discovered/indexed totals update after processing.
- Fresh website Site Scan started: **Flowzync full SEO GEO audit 28 Oct 2026**, 300-page limit, subdomains excluded. Confirmed Queued. Previous 52-day-old scan covered 131 pages with 0 errors / 0 warnings; that historic result does not certify this release.
- Recommendations report currently lists one moderate issue: insufficient high-quality inbound links. Backlinks and comparison base report returned **No data available**, so referring-domain totals/competitor gaps cannot be reliably quantified from this account today. Do not interpret missing report data as proof of zero backlinks.
- Block URLs: 0 active/expired blocks. Crawl Control showed Default; no artificial crawl restriction was added. IndexNow report shows recent self-submitted URLs, including service pages. No need to resubmit unchanged URLs merely to increase submission counts.
- Homepage Bing index snapshot: Discovered but not crawled. Fresh live test: **URL can be indexed by Bing**. Homepage **Indexing requested** confirmed. Eligibility/request acceptance is not indexing.
- Homepage live test identified three empty image alternatives on blog cards. These were intentionally decorative, not missing HTML attributes. The cards now expose meaningful article-illustration labels and accessible image links; exact slugs remain unchanged. Production build and Vercel deployment passed. Production homepage HTML has no empty image alternatives; a fresh Bing live retest reports **No SEO/GEO issues found**.
- Site Explorer stored summary: 68 indexed, 0 crawl errors, 1 warning, 36 excluded among 105 known URLs. This differs from the 151 current public pages. Guidelines-issues filter returned no data; not every exclusion is an error.
- New 27 October AI article index snapshot said **Blocked**, while fresh live test said **URL can be indexed** and **No SEO/GEO issues found**. Indexing request accepted. This unresolved Bing index decision must be monitored; no site-side block was found. If it persists after recrawl, ask Bing support to investigate using both snapshot and live-test evidence. No support message sent.
- **10 priority URL submissions accepted** (daily quota now 0): homepage, new AI article, blog/services hubs, WordPress, graphic design, landing pages, hospitality industry page, and the two care-agency articles previously flagged by Google. No quota bypass or repeated identical requests. All other public URLs remain covered by sitemap/IndexNow.
- Live markup insights returned a Bing-side loading error; do not report this as invalid structured data without evidence.
- AI Performance (3-month account report) showed 1 citation to the homepage; grounding queries/topics unavailable. No special GEO approval switch or guaranteed citation setting exists.

### Remaining work and legitimate backlinks

Wait for Bing's fresh crawl/scan results and investigate any new affected URLs rather than deleting pages to hide reports. Backlink recommendation requires earned links: ask existing clients (with permission) for relevant case-study credits, ensure owned business/social profiles link to the correct canonical domain, publish original documented project results, and pursue relevant editorial contributions. Outreach/public profile changes require owner instruction/approval; no messages were sent and no paid/automated links were purchased. Record verified link sources and compare a genuinely similar business once Bing supplies usable report data.

Ahrefs dashboard remains pending: exact analytics script/key is installed, but collection/recheck requires the Ahrefs project account. Bing/IndexNow acceptance does not guarantee indexing or AI citations.

## 4. Business evidence — ek baar verify karke restore karein

**Kyun baqi hai:** Code mein maujood marketing copy khud apne claims ka evidence nahi hoti. Main fabricated proof create nahi kar sakta.

- Real legal business name/form, public business contact, actual location aur founding year confirm karein. Lahore/remote information existing site configuration se retained hai; fake overseas office, forwarding address ya unstaffed Google Business Profile na banayein. Remote-only businesses ki profile eligibility alag se verify karein.
- Team names, roles, biographies aur publication permission confirm karein. Named Person profiles tab restore karein jab identities/consent verified hon. Tab tak public team page actual project responsibilities explain karti hai.
- Client testimonials ke original messages/public review URLs aur permission provide/record karein. `lib/testimonials.js` ke pending records mein `verified: true` aur a real `sourceUrl` ke baghair quotes publish nahi hote. Email evidence ho to public source URL invent karne ki jagah evidence/permission ko private record mein rakhein aur publishing code ko appropriately adapt karein.
- Project screenshots, company names, artwork aur photographs use karne ka right confirm karein. Stock images ko actual team/client photography na kahein. Portfolio performance results add karne se pehle measurement period, baseline aur client approval ho.
- 240 projects, 98% retention, response-time guarantees ya growth percentages sirf supporting records aur defined measurement ke saath publish karein.
- Location pages mein actual project examples, genuine local service details aur approved client evidence add karna useful hoga. Sirf city names aur generic market claims se local authority establish nahi hoti. New near-duplicate location pages create na karein.

## 5. Privacy operations aur content ownership

**Kyun baqi hai:** Repository se production secrets, vendor contracts aur actual records-retention decisions verify nahi hote.

- Confirm karein ke Vercel, Supabase, email aur AI providers mein se kaun production mein active hai; Privacy Policy ko actual setup ke saath match rakhein. Vendor data agreements, processing locations aur applicable transfer safeguards owner/adviser assess karein.
- Enquiry/client data ki actual retention schedule, deletion/export process aur access controls agree/implement karein. Notice mein automatic deletion ka jhoota promise nahi kiya gaya. Privacy request ke liye `info@flowzync.com` inbox monitor karein.
- Ek real enquiry apne contact details se submit karke stored record aur email delivery dono confirm karein. Is audit mein aapke behalf par personal/test leads send nahi kiye gaye.
- Care/health/recruitment information ko generic sales CRM/chat mein bina appropriate assessment na collect karein. Relevant territory ke regulator/data-protection adviser se specific requirements confirm karein.
- Service prices, timelines, support SLAs aur contract terms ko apne actual commercial offer se match karein. Blog estimates binding quotes nahi hain.

## Performance aur browser evidence

Initial pre-release live homepage mobile PageSpeed lab run (27 October 2026, 11:38 AM Pakistan time): Performance 99, Accessibility 97, Best Practices 100, SEO 100; LCP 2.3s, TBT 0ms, CLS 0.019. Report: https://pagespeed.web.dev/analysis/https-flowzync-com/7byj7zxdpb?form_factor=mobile . Is initial run ke contrast findings ke mutabiq small homepage labels darken kiye gaye. These are one-page lab measurements, not every-page scores or real-user Core Web Vitals. Field report showed No Data. Post-release run (11:56 AM Pakistan time): Performance **93**, Accessibility **100**, Best Practices **100**, SEO **100**, Agentic Browsing 3/3; LCP 2.6s, TBT 0ms, CLS 0.019. Report: https://pagespeed.web.dev/analysis/https-flowzync-com/m3d2czhfqd?form_factor=mobile . Contrast issue resolved in this run. Performance varies with network/measurement conditions; the post-release result is reported as observed, not replaced by the higher initial score. LCP is slightly above the 2.5s good threshold in this single lab run; field Core Web Vitals remains unverified because no real-user dataset was available.

## Verification ki limits

Har generated public URL automated checks se guzra. Browser snapshot QA mein tamam 151 public pages desktop par load/H1/overflow checks se guzre. 320px viewport par bhi tamam 151 pages ke geometry/H1 checks aur new article anchors check hue; har viewport/browser/device combination ka exhaustive certification nahi. External search rankings, Google-selected canonical, backlinks, account approval, asset ownership aur legal compliance ko local test pass se certify nahi kiya ja sakta. Content was reviewed for specific technical/editorial risks; sources do not independently substantiate every first-person business anecdote. Owner evidence is still needed for those statements.

## Official references used

- [Google people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [Google generative AI optimization](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google documentation updates: FAQ rich result retirement](https://developers.google.com/search/updates)
- [Google Search Console page indexing](https://support.google.com/webmasters/answer/7440203)
- [Google AdSense program policies](https://support.google.com/adsense/answer/48182?hl=en)
- [Google Publisher Policies](https://support.google.com/publisherpolicies/answer/10502938?hl=en)
- [AdSense required privacy content](https://support.google.com/adsense/answer/1348695?hl=en)
- [Certified CMP requirements](https://support.google.com/adsense/answer/13554116?hl=en)
- [AdSense site readiness](https://support.google.com/adsense/answer/12176698)
- [AdSense ads.txt guide](https://support.google.com/adsense/answer/12171612)
- [Ahrefs Analytics documentation](https://help.ahrefs.com/en/articles/10247870-about-ahrefs-web-analytics)
- [CQC rating display requirements](https://www.cqc.org.uk/cqc-ratings-and-promotional-graphics/how-providers-must-display-ratings)
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots)

## Repeatable developer checks

```sh
npm run build
node scripts/check-homepage.mjs
node scripts/check-site-seo.mjs
python scripts/audit-all-pages.py
# After the audited application commit is successfully deployed:
python scripts/audit-all-pages.py --live
```

CSV/JSON are evidence for the checks described above, not a universal “perfect SEO” certificate. Use current account reports to track unresolved Google/Bing decisions.

## 28 October — workspace activation

See `ADMIN-WORKSPACE-SETUP-2026-10-28.md` for the exact one-time publishing, reporting and campaign connections. The code is implemented, but CMS token, Google reporting credentials, durable queue migration and sending providers must be configured and verified before live use. Supabase/Vercel connections were declined for this task; the required configuration can be completed manually in those existing accounts. No campaign was sent and no phone-account enumeration was performed.


## Workspace — complete activation and operator guide

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

## 30 October 2026 — ads.txt and authority follow-up

**Verified:** https://flowzync.com/ads.txt returns HTTP 200, text/plain and `google.com, pub-3418740156485364, DIRECT, f08c47fec0942fa0`. HTTP and www variants resolve to the same HTTPS file. Robots does not block it. The publisher ID matches the signed-in AdSense account.

**AdSense account:** site remains Getting ready. The ads.txt Not found report last updated 28 October 2026, 18:02 PKT. Account help describes this as the last crawl result. Review was already requested; the current screen has no manual ads.txt recheck button. No new review/recheck was claimed. Wait for Google to fetch the working file and update its report; do not delete/re-add the site or change a correct publisher ID. Site approval is separate and remains pending.

**Authority:** the new free project-brief resource provides a useful page to share. Its existence is not an earned backlink. No verified DA/DR score or score increase is claimed. See docs/04-BACKLINKS.md for the consolidated owner/partner actions. Client permission, editorial acceptance and truthful profile details are still needed before those external actions can be completed. No outreach was sent.
