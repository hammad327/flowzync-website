# Flowzync — Website Project

A complete, SEO-first Next.js website for **www.flowzync.com**.

**What's inside**
- 13 service pages, each with its own metadata, Service + FAQPage schema
- 4 industry landing pages (plumbers, dental, leak detection, local business)
- Filterable portfolio and a markdown blog with category filtering and RSS
- Zync — an AI assistant that answers questions **and captures leads**
- A private lead dashboard at `/admin` where every enquiry lands

**Two files do most of the configuration:**

| File | What it controls |
|---|---|
| `lib/site.js` | Domain, email, social links, business address and phone |
| `lib/images.js` | Every image on the site — change a path, the site updates |

### 👉 Your instructions: **[`INSTRUCTIONS.md`](INSTRUCTIONS.md)**

**One file, everything you need to do**, top to bottom — setup checklist, GitHub
and Vercel, publishing blog posts, SEO and indexing timelines, and backlinks.

Start there. The same content is also split into separate guides in `/docs` if
you'd rather work through them one at a time.

| Guide | Covers |
|---|---|
| [`docs/00-START-HERE.md`](docs/00-START-HERE.md) | Master checklist — read this first |
| [`docs/01-GITHUB-AND-DEPLOY.md`](docs/01-GITHUB-AND-DEPLOY.md) | GitHub + Vercel from scratch, and the daily push workflow |
| [`docs/02-PUBLISHING-BLOG-POSTS.md`](docs/02-PUBLISHING-BLOG-POSTS.md) | How to write and publish a post |
| [`docs/03-AFTER-LAUNCH-SEO.md`](docs/03-AFTER-LAUNCH-SEO.md) | Indexing timelines, Search Console, launch-day checklist |
| [`docs/04-BACKLINKS.md`](docs/04-BACKLINKS.md) | Where to get links and what to avoid |
| [`SETUP-LEADS.md`](SETUP-LEADS.md) | Lead dashboard and database setup |

> **Before going live**, read `SETUP-LEADS.md`. Until you set `ADMIN_PASSWORD`
> the dashboard stays locked, and until you connect a database, leads are not
> stored permanently.

---

## Swapping the placeholder images

Every image currently shows a branded placeholder. To replace one:

1. Drop your file into `/public/images/<folder>/`
2. Open `lib/images.js`, find the matching key, and change the path

That's the whole job — nothing else references image files directly.
Recommended sizes are commented next to each group in that file.

---

## A note on claims

Load times, PageSpeed scores and "we reply within X hours" have been removed
site-wide, and the portfolio shows what was built rather than performance
figures. If you add such claims back, make sure you can evidence them — they
are the easiest thing for a prospect to check and disprove.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

> Note: animations, page-switching speed and image loading are all much faster in
> the production build (`npm run build && npm start`) and on Vercel than in dev mode.

---

## 2. Deploy — GitHub + Vercel (free, ~10 minutes)

### Step A — put the code on GitHub
1. Create a free account at https://github.com and click **New repository**
   (name it e.g. `flowzync-website`, keep it **Private**, don't add any files).
2. On your computer, inside this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/flowzync-website.git
   git push -u origin main
   ```
   (If `git` isn't installed: https://git-scm.com/downloads — or use **GitHub
   Desktop** and just drag the folder in.)

### Step B — connect Vercel
1. Go to https://vercel.com → sign up **with GitHub** (one click).
2. Click **Add New → Project** → pick your repository → **Deploy**.
   Vercel auto-detects Next.js; no settings needed.
3. Two minutes later your site is live at `https://your-project.vercel.app`.

### Step C — environment variables (chat + contact form)
Vercel → your project → **Settings → Environment Variables** → add the keys from
`.env.example` (see §5 and §6 below) → **Redeploy** (Deployments → ⋯ → Redeploy).

### From now on
Every `git push` (or file edit on github.com) redeploys automatically in ~1 minute.
That's also how you publish blog posts daily (§4).

---

## 3. Using your own domain

### Option A — your domain + Vercel hosting (recommended, easiest)
1. Vercel → project → **Settings → Domains** → type `yourdomain.com` → Add.
2. Vercel shows you two DNS records. Log in to wherever you bought the domain
   (GoDaddy, Namecheap, Hostinger…) → DNS settings → add them:
   - `A` record: host `@` → `76.76.21.21`
   - `CNAME` record: host `www` → `cname.vercel-dns.com`
3. Wait 5–30 minutes. HTTPS certificate is automatic. Done.
4. Finally, update `url` in `lib/site.js` to `https://yourdomain.com`, commit & push
   (this fixes canonical URLs and the sitemap).

### Option B — host on your own server (VPS / cPanel with Node.js)
1. Server needs **Node.js 18+**. Upload the project (without `node_modules`).
2. On the server:
   ```bash
   npm install
   npm run build
   npm start          # serves on port 3000
   ```
3. Keep it alive with PM2: `npm i -g pm2 && pm2 start npm --name flowzync -- start`
4. Point your domain's A record to the server IP, and put Nginx/Apache in front
   as a reverse proxy to port 3000 (your host's docs cover this in 5 lines).
   On shared cPanel hosting, use the **"Setup Node.js App"** tool with
   `npm start` as the run command.

> Plain "static HTML" hosting won't work as-is because the AI chat and contact
> form are server APIs. If you ever need a static-only export, ask us/Claude to
> strip the API routes — but Vercel's free tier makes that unnecessary.

---

## 4. Publishing a blog post (daily-friendly)

Create a new file in `content/blog/`, e.g. `2026-07-06-my-post.md`:

```markdown
---
title: "Your Post Title"
description: "One-sentence summary shown in cards and Google results."
date: "2026-07-06"
author: "Your Name"
category: "Web Design"
cover: "https://images.unsplash.com/photo-xxxx?w=1400&q=80"
---

Write your article in **Markdown**. Headings, lists, images,
[links](/services/custom-website-design) and quotes all work.
```

Save → commit → push. The post appears on `/blog`, the home page, the sitemap,
and gets its own SEO page with article schema. **Filename = URL slug.**

**No-code publishing:** on github.com open `content/blog` → **Add file →
Create new file** → paste → **Commit**. Vercel publishes it within a minute.
Works from your phone.

**SEO tip (from the bundled copywriting skill):** always link 1–2 relevant
service pages inside each post (like the samples do) — internal links tell
Google which pages matter.

---

## 5. AI chat — free setup (no Anthropic key needed)

The bot works out of the box with a built-in knowledge base. To make it fully
conversational, add **one** free key:

| Provider | Get a key (free) | Env variable |
| -------- | ---------------- | ------------ |
| **Groq** (recommended — fast Llama 3.3) | https://console.groq.com → API Keys | `GROQ_API_KEY` |
| **Google Gemini** | https://aistudio.google.com/apikey | `GEMINI_API_KEY` |
| Anthropic Claude (optional, paid) | https://console.anthropic.com | `ANTHROPIC_API_KEY` |

Locally: copy `.env.example` → `.env.local`, paste the key, restart `npm run dev`.
On Vercel: Settings → Environment Variables → add it → Redeploy.

The bot checks Groq → Gemini → Anthropic → built-in answers, so you can add or
remove keys anytime. Pricing questions always redirect to the quote form with a
"we reply within 2 hours" promise. Teach it new facts in the `SYSTEM` prompt in
`app/api/chat/route.js`.

---

## 6. Contact form → your Gmail

1. Google account → enable **2-Step Verification**.
2. Create an **App Password**: https://myaccount.google.com/apppasswords
3. Set env variables (locally in `.env.local`, and on Vercel):
   ```
   GMAIL_USER=youraddress@gmail.com
   GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   CONTACT_TO=optional-other-inbox@gmail.com
   ```
Submissions arrive as a formatted email; hitting **Reply** answers the client
directly. The **GoHighLevel webhook** version is already written and commented
out in `app/api/contact/route.js` — when you're ready, paste your GHL inbound
webhook URL and uncomment that block.

---

## 7. Where to edit what

| You want to change…            | Edit this file                          |
| ------------------------------ | --------------------------------------- |
| Brand name, domain, email      | `lib/site.js`                           |
| Colours & fonts                | `app/globals.css` (top `:root` block)   |
| Services (add/edit/remove)     | `lib/services.js` ← one object = full SEO page, nav item, footer link, sitemap entry |
| Portfolio projects & filters   | `lib/projects.js`                       |
| Process steps ("How We Work")  | `components/ProcessTimeline.jsx`        |
| Home page sections & FAQs      | `app/page.jsx`                          |
| About / Contact                | `app/about/page.jsx`, `app/contact/page.jsx` |
| AI bot personality             | `app/api/chat/route.js` (SYSTEM prompt) |
| Hero animation                 | `components/HeroVisual.jsx`             |

---

## 8. SEO — done for you + your backlink playbook

**Already built in:** unique titles/descriptions/canonicals per page, static
pre-rendering, `sitemap.xml` + `robots.txt` (auto-includes services & posts),
Organization / Service / FAQPage / BlogPosting schema, breadcrumbs, internal
links between services and from blog posts into service pages, optimised images.

**After deploying (15 minutes, do once):**
1. Google Search Console → add your domain → submit `https://yourdomain.com/sitemap.xml`
2. Bing Webmaster Tools → import from Search Console (one click)

**Backlinks — how to actually earn them** (links *from other sites to yours*;
they can't be coded in, but here's the plan we use):
1. **Profiles first (easy wins):** create your Google Business Profile, and add
   your site link on Clutch, GoodFirms, DesignRush, Trustpilot, Crunchbase,
   LinkedIn company page, and relevant local directories.
2. **GHL/Shopify/WordPress communities:** genuinely helpful answers in Facebook
   groups, the GHL ideas board, r/gohighlevel, r/shopify — with your site in
   your profile, not spammed in posts.
3. **Publish linkable assets weekly** (the blog engine makes this painless):
   checklists, teardown posts, free templates. These are what other sites link to.
4. **Guest posts & podcasts:** pitch marketing/web-design blogs and podcasts;
   every appearance = a quality backlink.
5. **Partner pages:** agencies you collaborate with, tools you use (many have
   "experts" or "partners" directories — GHL and Shopify both do).
Avoid buying links or Fiverr "1000 backlinks" packs — they do more harm than good.

---

## 9. Bundled & recommended Claude skills

This project ships with five skills in `.claude/skills/` — when you open the
folder in **Claude Code**, Claude automatically uses them:

- `copywriting` + `copy-editing` — conversion copy for pages & posts
- `seo-audit` + `programmatic-seo` — audits and scale-page strategy
- `web-design-guidelines` — design review checklist

Two more packs worth installing globally in Claude Code:

```bash
# Superpowers (workflow & engineering skills)
/plugin marketplace add obra/superpowers
/plugin install superpowers

# UI/UX Pro Max (design intelligence)
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

Example prompts once installed: *"use the copywriting skill to rewrite the
landing-pages service intro"*, *"run a seo-audit on my services pages"*.
