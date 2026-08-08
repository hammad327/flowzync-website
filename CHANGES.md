# What changed in this update

## 1. Branding
- Domain is now `https://www.flowzync.com` and email `info@flowzync.com`,
  set once in `lib/site.js` and flowing into meta tags, schema, the footer,
  forms, the sitemap and canonical URLs.
- `lib/site.js` also holds a `business` block for your address and phone.
  **LocalBusiness schema is only published once you fill in a real street and
  phone** — placeholder location data hurts local trust signals, so the site
  stays silent rather than guessing.

## 2. New logo — "The Zync Loop"
One unbroken monoline stroke: it rises into a loop, cuts through as a Z, then
rises again. An icon, not a lettermark, and simple enough to read at 16px.

Used everywhere from a single source (`ZYNC_PATH` in `components/Logo.jsx`):
navigation, footer, favicon, Apple touch icon, the social share card, the Zync
chat bubble and chat header, the admin dashboard, and the placeholder images.
Hovering the logo redraws it as one continuous line.

## 3. Hero visual, rebuilt
The old isometric stack that tilted toward your cursor is gone — that
cursor-tracking was almost certainly what felt wrong. In its place: the brand
line drawn large behind a clean browser card, with a Design → Build → Automate
rail and a single travelling pulse.

It is pure markup and CSS with **no JavaScript**, so it cannot delay your
largest-contentful-paint. Everything arrives in one ~900ms stagger and settles.
Reduced-motion users get a static version.

## 4. Claims removed
- The whole `4.9s → 1.1s / ×3 / 6 wks` metric block is gone from the portfolio,
  replaced with what was actually built ("Redirect map", "Klaviyo flows").
- Removed site-wide: "reply within 2 hours", "within 2 business hours",
  "under 24 hours", "sub-2-second loads", PageSpeed scores and Core Web Vitals
  claims — from pages, service content, case studies, the footer, the contact
  page and the chatbot's instructions.

## 5. Images made swappable
`lib/images.js` is now the single place images are defined. Branded placeholders
are in place at every path so nothing looks broken. See the README.

## 6. New pages
- `/services/wordpress-website-design` (renamed from `wordpress-development`,
  with a **301 redirect** so existing links and rankings carry over)
- `/services/elementor-design`
- `/services/woocommerce-development`
- `/industries/website-for-plumbers`
- `/industries/website-for-dental-clinics`
- `/industries/website-for-water-leakage-detection`
- `/industries/website-for-local-businesses`
- `/industries` index, linked from the navigation, homepage and footer
- **8 UK location pages** at `/locations/<slug>` — Manchester, Birmingham, Leeds,
  Glasgow, Bristol, Reading, Milton Keynes and London, each with its own market
  analysis, FAQs and Service + FAQPage schema
- `/locations` index listing all coverage areas

Each carries Service, FAQPage and BreadcrumbList schema, and FAQ answers are
written as direct declarative statements — the format AI assistants quote.

## 7. Lead capture and dashboard
- Zync now shows a short form once someone mentions pricing, quotes or getting
  started, and creates a real lead record with the chat transcript attached.
- The contact form writes to **the same table**, so `/admin` shows one list.
- `/admin` is password-protected, `noindex`, blocked in robots.txt and served
  with an `X-Robots-Tag` header. Search, filter and status tracking included.
- **Read `SETUP-LEADS.md`** — this needs two environment variables to be safe
  in production.

## 7b. Location and service areas

- Business location is your real address in **Lahore, Pakistan** — LocalBusiness
  schema switches on once you fill `street` and `phone` in `lib/site.js`
- `areaServed` declares **172 service areas**: Pakistan and the UK, 17 Pakistani
  cities and provinces, 39 UK counties and nations, and 120+ UK towns
- Every location page states plainly that Flowzync is Lahore-based and works
  remotely — presented as a pricing advantage rather than buried

**Where we are** and **where we work** are deliberately kept as two separate
claims. Both are true. A UK address you don't staff would get a Google Business
Profile permanently suspended, so the site never implies one.

## 8. SEO plumbing
- Canonical URL on every page; sitemap covering all 27 URLs
- robots.txt disallowing `/admin` and `/api/`
- `/feed.xml` RSS feed; `/llms.txt` generated from live site data
- Blog: category filtering, related posts, author box, "last updated" support
  (add `updated:` to a post's frontmatter)
- Every page is server-rendered — view source and the content is in the HTML

---

## Still to do (needs your input or accounts)

These are from the brief but depend on things only you can provide:

- **Google Business Profile**, directory listings and review collection —
  account work, not code. Add your address and phone to `lib/site.js` first so
  the NAP matches exactly everywhere.
- **Sanity CMS** — the blog currently publishes from markdown files in
  `content/blog/`, which works well and costs nothing. Moving to Sanity is
  worth it if you want to publish from a browser without touching files; it
  needs a Sanity account before it can be wired up.
- **Backlinks** — the strategy in your brief is sound; it is outreach work.
- **Real portfolio images and case studies.** Unique, specific work is the
  single biggest differentiator against generic AI-looking competitor sites.
