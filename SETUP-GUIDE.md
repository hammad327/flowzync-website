# Flowzync — Complete Setup Guide

**Follow this top to bottom. Do not skip steps or change the order.**

The order matters: several steps produce values that later steps need, and doing
them out of sequence causes errors that look mysterious but aren't.

**Total time:** about 2 hours, plus waiting for DNS.

| Part | Steps | Time |
|---|---|---|
| A — Accounts and keys | 1–7 | 40 min |
| B — Code to GitHub | 8–13 | 25 min |
| C — Deploy on Vercel | 14–18 | 20 min |
| D — Domain on Hostinger | 19–25 | 20 min + waiting |
| E — Test everything | 26–29 | 15 min |
| F — Google and Bing | 30–33 | 25 min |
| G — Day-to-day | 34–35 | ongoing |

---

# PART A — Accounts and keys

Collect everything first, so Part C is copy-paste rather than tab-juggling.

Open a blank note. You'll paste seven values into it.

---

## Step 1 — Create your Supabase project

This is the database that stores your leads.

1. Go to **[supabase.com](https://supabase.com)** → **Start your project** → sign up
2. Click **New project**
3. Fill in:
   - **Name:** `flowzync`
   - **Database password:** click **Generate a password**, then **save it in your
     password manager**. Supabase will not show it again.
   - **Region:** **West EU (London)** if you're targeting UK clients, otherwise
     the closest one to you
4. Click **Create new project**
5. Wait about 2 minutes while it builds

---

## Step 2 — Create the leads table

**Do not skip this.** Without it your forms will return a 400 error.

1. In Supabase, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Paste this in exactly:

```sql
create table leads (
  id           uuid primary key default gen_random_uuid(),
  name         text,
  email        text,
  phone        text,
  service      text,
  budget       text,
  timeline     text,
  message      text,
  source       text default 'form',
  source_page  text,
  transcript   text,
  status       text default 'New',
  created_at   timestamptz default now()
);

alter table leads enable row level security;

create index leads_created_at_idx on leads (created_at desc);
```

4. Click **Run** (or Ctrl+Enter)
5. You should see **"Success. No rows returned"** — that's correct. It made a
   table; it didn't fetch anything.
6. **Verify it:** click **Table Editor** in the sidebar. You should see `leads`
   listed. If you don't, the SQL didn't run — go back and try again.

---

## Step 3 — Copy your Supabase URL

1. Click **Settings** (gear icon, bottom of sidebar)
2. Click **API** (or **Data API**)
3. Copy **Project URL** — looks like `https://abcdefghijklmnop.supabase.co`

📋 **Save it in your note as:** `SUPABASE_URL`

> No trailing slash. If it ends with `/`, delete that character.

---

## Step 4 — Copy your Supabase secret key

1. Still in **Settings**, click **API Keys**
2. What you do depends on what you see:

**If there's a "Secret keys" section** with a key starting `sb_secret_` →
copy that one.

**If you only see "Legacy API keys"** with `anon` and `service_role` → either
click **Create new API keys** and copy the new secret key, or copy the
**service_role** key. Both work.

📋 **Save it in your note as:** `SUPABASE_SERVICE_KEY`

> ⚠️ **This is the single most common mistake in the whole setup.**
>
> You need the **secret** key (`sb_secret_...` or `service_role`).
> **Not** the publishable key (`sb_publishable_...`) and **not** `anon`.
>
> The publishable key can't read your leads, and using it produces the 400 error
> on your contact form. If your forms fail later, come back and check this first.

---

## Step 5 — Create your Gmail App Password

This lets the site email you when a lead arrives.

1. Go to **[myaccount.google.com/security](https://myaccount.google.com/security)**
2. Turn on **2-Step Verification** if it isn't already (required for the next part)
3. Go to **[myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**
4. App name: `Flowzync Website` → **Create**
5. Copy the 16-character password shown

📋 **Save in your note as:** `GMAIL_USER` (your Gmail address) and
`GMAIL_APP_PASSWORD` (the 16 characters)

> Spaces in the password are fine — paste it exactly as shown. This is **not**
> your normal Gmail password, and it won't work if you use that instead.

---

## Step 6 — Get a free Groq API key

This makes the Zync chatbot fully conversational. Optional — the bot still works
and still captures leads without it — but it's free and takes a minute.

1. Go to **[console.groq.com](https://console.groq.com)** → sign up
2. **API Keys** → **Create API Key** → name it `flowzync`
3. Copy it immediately — it's shown once

📋 **Save in your note as:** `GROQ_API_KEY`

---

## Step 7 — Invent your admin password

This protects your lead dashboard at `/admin`. Make it long — it's the only thing
standing between the internet and your client list.

📋 **Save in your note as:** `ADMIN_PASSWORD`

**Your note should now have 7 values:**

```
SUPABASE_URL          = https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY  = sb_secret_xxxxx
GMAIL_USER            = you@gmail.com
GMAIL_APP_PASSWORD    = abcd efgh ijkl mnop
CONTACT_TO            = info@flowzync.com
GROQ_API_KEY          = gsk_xxxxx
ADMIN_PASSWORD        = your-long-password
```

---

# PART B — Get the code onto GitHub

---

## Step 8 — Install Git

1. Download from **[git-scm.com/downloads](https://git-scm.com/downloads)**
2. Install with **all default options**
3. Open **Terminal** (Mac) or **Git Bash** (Windows) and run:

```bash
git --version
```

You should see something like `git version 2.43.0`. If you get "command not
found", close the window, open a fresh one, and try again.

---

## Step 9 — Create your GitHub account

1. Sign up at **[github.com](https://github.com)**
2. **Use the same email address you'll use for Vercel.** This prevents a
   deployment error later that is genuinely confusing to diagnose.
3. Verify your email

📋 **Note down the email you used.**

---

## Step 10 — Tell Git who you are

⚠️ **Use the exact same email as Step 9.** If these don't match, Vercel will
refuse to deploy with a "not a member of the team" error.

```bash
git config --global user.name "Your Name"
git config --global user.email "the-same-email-from-step-9"
```

Check it took:

```bash
git config user.email
```

---

## Step 11 — Create the GitHub repository

1. On GitHub, click **+** (top right) → **New repository**
2. **Repository name:** `flowzync-website`
3. **Visibility:** **Private**
4. **Do not tick** "Add a README", ".gitignore" or "license" — leave it empty
5. Click **Create repository**

Leave this page open.

---

## Step 12 — Create a GitHub access token

GitHub won't accept your password when pushing code. You need a token.

1. GitHub → your avatar → **Settings**
2. Scroll to the bottom → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
4. **Note:** `flowzync deploys`
5. **Expiration:** No expiration (or 1 year)
6. **Tick the `repo` checkbox** (the top one — it selects everything beneath it)
7. **Generate token** → **copy it now**, GitHub never shows it again

📋 **Save it in your password manager.** You'll need it on any new computer.

---

## Step 13 — Push your code

1. Unzip the project folder somewhere sensible
2. Open Terminal / Git Bash **inside that folder**

   > **Tip:** type `cd ` (with a space), then drag the folder into the terminal
   > window and press Enter.

3. Run these one at a time:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/flowzync-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

4. When prompted:
   - **Username:** your GitHub username
   - **Password:** paste the **token** from Step 12, not your password

5. **Verify:** refresh your GitHub repo page. Your files should be there.

---

# PART C — Deploy on Vercel

---

## Step 14 — Connect Vercel to GitHub

**If you already have a Vercel account** (email and password):

1. Log in at **[vercel.com](https://vercel.com)** as normal
2. Avatar → **Account Settings** → **Authentication**
3. Find **GitHub** → **Connect** → **Authorize**
4. Choose **All repositories** or select `flowzync-website`

**If you don't have an account:** sign up at vercel.com → **Continue with
GitHub**, using the same email as Step 9.

---

## Step 15 — Import the project

**First check:** does a Flowzync project already exist in your dashboard?

**If yes** (you deployed this site before):
1. Open that project → **Settings** → **Git**
2. **Connect Git Repository** → **GitHub** → `flowzync-website`
3. Production branch: **main** → **Save**
4. Skip to Step 16

**If no:**
1. Dashboard → **Add New** → **Project**
2. Find `flowzync-website` → **Import**

   > Not listed? Click **Adjust GitHub App Permissions** at the bottom and grant
   > access to it.

3. Leave all build settings alone — Vercel detects Next.js automatically
4. **Don't click Deploy yet** — do Step 16 first

---

## Step 16 — Add your environment variables

Open your note from Part A.

1. Vercel → your project → **Settings** → **Environment Variables**
2. For each of the 7 values:
   - **Key:** the name (e.g. `SUPABASE_URL`)
   - **Value:** the value
   - Leave **all environments ticked**
   - Click **Save**

| Key | Value from |
|---|---|
| `SUPABASE_URL` | Step 3 |
| `SUPABASE_SERVICE_KEY` | Step 4 |
| `GMAIL_USER` | Step 5 |
| `GMAIL_APP_PASSWORD` | Step 5 |
| `CONTACT_TO` | `info@flowzync.com` |
| `GROQ_API_KEY` | Step 6 |
| `ADMIN_PASSWORD` | Step 7 |

**Watch for:**
- ❌ No quotes — paste `abc123`, not `"abc123"`
- ❌ No trailing spaces (invisible, and a very common cause of failure)
- ❌ No trailing slash on `SUPABASE_URL`

---

## Step 17 — Deploy

Click **Deploy** and wait ~2 minutes.

You'll get a URL like `flowzync-website.vercel.app`. **Open it.** Your site is
live on the internet.

---

## Step 18 — If you added variables after deploying

⚠️ **Environment variables only apply to new deployments.** If you deployed
before adding them, or you change one later:

1. **Deployments** tab → most recent → **⋯** → **Redeploy**
2. **Untick "Use existing Build Cache"**
3. **Redeploy**

---

# PART D — Connect flowzync.com (Hostinger)

### First, how this works

**Vercel does not upload anything to your domain.** You repoint the domain at
Vercel, and Vercel serves the site from then on. After this, every `git push`
updates the live site automatically — the domain never needs touching again.

---

## Step 19 — Add the domain in Vercel

1. Vercel → your project → **Settings** → **Domains**
2. Type `www.flowzync.com` → **Add**
3. Type `flowzync.com` → **Add** → when Vercel offers to **redirect to www**,
   **accept it**
4. Vercel now shows the DNS records you need

**Leave this tab open** — you'll copy from it in Step 22.

You'll see something like:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `e1169130cebb685f.vercel-dns-017.com.` |
| A | `@` | `76.76.21.21` |

⚠️ **Use YOUR values, not these.** The CNAME hostname is unique to your project.
Click **View DNS configuration** next to *each* domain — `www` and the bare
`flowzync.com` show different records.

"Invalid Configuration" at this point is **normal**. It just means the records
don't exist yet.

---

## Step 20 — Check your Hostinger nameservers

Hostinger's DNS editor only works if the domain uses Hostinger's nameservers.

1. Log in to **[hpanel.hostinger.com](https://hpanel.hostinger.com)**
2. Top menu → **Domains** → click your domain → **DNS / Nameservers**
3. Click the **Nameservers** tab
4. It should show two nameservers ending in **`dns-parking.com`**

**Any prefix is fine.** Hostinger uses several naming schemes — you might see
`ns1`/`ns2`, or names like `aurora`/`nebula`, `mars`/`venus`. What matters is the
`dns-parking.com` domain. If you see that, you're on Hostinger DNS and the next
steps will work.

**Leave them alone.** Do not click **Change Nameservers**.

> ⚠️ Vercel will offer you its own nameservers as an alternative. **Don't take
> it.** Switching hands all DNS control to Vercel and **wipes your MX records**,
> which stops `info@flowzync.com` receiving email. Adding records at Hostinger
> gets the same result with no risk to your mail.

**If the nameservers do NOT end in `dns-parking.com`**, your DNS is managed
somewhere else — make the same changes at whichever provider they point to.

---

## Step 21 — Disconnect anything using the domain

⚠️ **Skip this and your records will be silently overwritten.**

- **Hostinger Website Builder** connected to this domain? It manages DNS
  automatically. Disconnect the domain from it first.
- **Hostinger CDN** enabled? Turn it off — it interferes with the `www` CNAME.
- **Parked / "coming soon" page?** Remove it.

---

## Step 22 — Delete the conflicting records

In hPanel → **Domains** → your domain → **DNS / Nameservers** → **DNS records**
tab, look at the list at the bottom.

**Delete these if they exist** (click the **trash icon**, then confirm):

- Any **A record** with Name `@`
- Any **A record** with Name `www`
- Any **CNAME record** with Name `www`

⚠️ **Do not delete MX records or TXT records.** MX records are your email —
deleting them stops `info@flowzync.com` receiving mail.

> Two records for the same name conflict and cause intermittent failures that are
> miserable to diagnose. Delete first, then add.

---

## Step 23 — Add the Vercel records

Still on the **DNS records** tab, find the **Manage DNS records** section.

**Record 1 — the www CNAME:**

| Field | Enter |
|---|---|
| **Type** | `CNAME` |
| **Name** | `www` |
| **Points to / Target** | paste the hostname from Step 19, e.g. `e1169130cebb685f.vercel-dns-017.com.` |
| **TTL** | leave default (14400) |

Click **Add Record**.

**Record 2 — the root A record:**

| Field | Enter |
|---|---|
| **Type** | `A` |
| **Name** | `@` |
| **Points to** | the IP from Vercel, e.g. `76.76.21.21` |
| **TTL** | leave default |

Click **Add Record**.

**Field notes:**
- **Name:** enter just `www`, **not** `www.flowzync.com`. Hostinger appends the
  domain automatically — typing the full thing gives you
  `www.flowzync.com.flowzync.com`.
- **`@`** means the bare domain (`flowzync.com`).
- **Trailing dot:** if Hostinger rejects the value ending in `.`, delete that
  final dot and save again.
- **Copy and paste** the CNAME value — it's long and easy to mistype.

---

## Step 24 — Wait

DNS takes **10 minutes to 24 hours**. Usually 15–30 minutes. Nothing speeds it up.

**Check progress:** go to **[dnschecker.org](https://dnschecker.org)**, enter
`www.flowzync.com`, select **CNAME** from the dropdown. Green ticks worldwide
means it's propagated.

---

## Step 25 — Confirm in Vercel

1. Vercel → **Settings** → **Domains**
2. "Invalid Configuration" should become a **green tick**
3. If it hasn't after DNS shows as propagated, click **Refresh**

**SSL is automatic.** Vercel issues the certificate itself — you don't buy or
install anything. The padlock appears within minutes of DNS resolving.

---

# PART E — Test everything

---

## Step 26 — Check the database connection

Open this in your browser:

```
https://www.flowzync.com/api/keep-alive
```

| What you see | Meaning |
|---|---|
| `{"ok":true,"database":"connected"}` | ✅ Working — continue |
| `The leads table does not exist...` | Step 2 wasn't run. Go back and run the SQL. |
| `Supabase rejected the key...` | Wrong key in Step 4. You used the publishable/anon one. |
| `Could not reach Supabase at all...` | `SUPABASE_URL` is wrong or has a trailing slash. |

**Fix any error before continuing.** Everything below depends on this working.

---

## Step 27 — Test the contact form

1. Go to `https://www.flowzync.com/contact`
2. Fill it in with your own details → submit
3. You should see a success message

**Then check all three places:**
- [ ] `https://www.flowzync.com/admin` — sign in with your `ADMIN_PASSWORD`, the
      lead should be listed
- [ ] Your Gmail inbox — the notification email
- [ ] Supabase → **Table Editor** → `leads` — the row

**The orange "stored in memory only" warning in the dashboard should be gone.**
If it's still there, redo Step 18.

---

## Step 28 — Test the chatbot

1. On any page, click the **logo bubble** bottom-right
2. Type: **"I want a quote"**
3. A short form should appear inside the chat
4. Fill it in → **Send to the team**
5. Check `/admin` — it should appear marked **"Zync chat"** rather than "Form"

---

## Step 29 — Final checks

- [ ] `flowzync.com` redirects to `www.flowzync.com`
- [ ] Padlock shows in the address bar
- [ ] Site opens correctly on a **real phone**, not just a resized browser
- [ ] Send a test email to `info@flowzync.com` — confirm it still arrives
      (proves you didn't break MX in Step 22)
- [ ] Right-click → **View Page Source** → your text is visible in the HTML

---

# PART F — Get found on Google

---

## Step 30 — Fill in your real business details

1. Open `lib/site.js` in the project folder
2. Complete the `business` block:

```js
business: {
  street: '12 Main Boulevard, Gulberg III',
  city: 'Lahore',
  region: 'Punjab',
  postalCode: '54000',
  country: 'PK',
  phone: '+92 300 1234567',
  phoneUK: '',        // optional UK forwarding number
  ...
}
```

3. Save, then push:

```bash
git add .
git commit -m "Add business details"
git push
```

> Until `street` and `phone` are filled in, the site publishes **no**
> LocalBusiness schema. That's deliberate — a placeholder address is worse than
> none.
>
> **Whatever format you use here, use it byte-for-byte identically on every
> directory listing.** `Suite 4` and `Ste. 4` read as two different businesses
> to Google.

---

## Step 31 — Google Search Console

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. **Add property** → choose **Domain** (the left box) → enter `flowzync.com`
3. Google gives you a **TXT record**. Add it in Hostinger:
   - hPanel → **Domains** → your domain → **DNS / Nameservers** → **DNS records**
   - **Type:** `TXT`, **Name:** `@`, **Points to:** the value Google gave you
   - **Add Record**
4. Back in Google → **Verify** (may take a few minutes)
5. Left menu → **Sitemaps** → enter `sitemap.xml` → **Submit**
6. Top search bar → paste `https://www.flowzync.com` → **Request Indexing**

Repeat step 6 for your 5 most important pages. Not all 36 — there's a daily quota
and it won't help.

> **Nothing shows for 2–3 days.** Search Console reports on a delay. Empty graphs
> on day one are normal.

---

## Step 32 — Bing Webmaster Tools

Don't skip this — Bing powers **ChatGPT's web search**.

1. **[bing.com/webmasters](https://www.bing.com/webmasters)**
2. **Import from Google Search Console** — one click, copies everything

---

## Step 33 — Google Business Profile

Register at your **real Lahore address**. It won't help UK rankings, but it
brings local enquiries and it's a legitimate trust signal.

1. **[business.google.com](https://business.google.com)** → **Manage now**
2. Enter details **exactly matching Step 30**
3. **Primary category:** the most specific available — "Website designer", not
   "Business services"
4. Verification is by postcard, phone or video — takes 1–2 weeks, **start today**
5. While waiting, complete everything: services, description, hours, 10+ photos

> You **cannot** get a UK Business Profile without a verified UK address with
> staff present. Don't attempt it — suspensions are permanent. Your route to UK
> visibility is the location pages, which are already built.

---

# PART G — Day to day

---

## Step 34 — Publishing a blog post

1. Create a file in `content/blog/` named `YYYY-MM-DD-your-keyword.md`
2. Paste this at the top, then write below it:

```markdown
---
title: "Your Post Title Here"
description: "140-160 characters that earn the click in search results."
date: "2026-08-12"
author: "Your Name"
category: "Web Design"
cover: "/images/blog/your-image.jpg"
---

Your opening paragraph. Answer the title's question in the first 100 words —
this is what AI assistants and featured snippets quote.

## A heading

Write normally.

[Link to a service page](/services/elementor-design) — always link to at least
one service or industry page.
```

3. Publish:

```bash
git add .
git commit -m "New post: your title"
git push
```

Live in 60–90 seconds. The filename becomes the URL, so put your keyword in it
and **never rename it after publishing**.

---

## Step 35 — Changing anything else

Same three commands, always:

```bash
git add .
git commit -m "what you changed"
git push
```

| To change | Edit |
|---|---|
| Images | `lib/images.js` (see `/public/images/README.md`) |
| Phone, address, service areas | `lib/site.js` |
| Service page content | `lib/services.js` |
| Industry pages | `lib/industries.js` |
| UK location pages | `lib/locations.js` — **read `docs/05-LOCATION-PAGES.md` first** |

---

# Troubleshooting

| Problem | Fix |
|---|---|
| **Form returns 400** | Run Step 26. Almost always the `leads` table missing (Step 2) or the wrong Supabase key (Step 4). |
| **"Stored in memory only" warning** | You didn't redeploy after adding variables — Step 18. |
| **"Not a member of the team" on deploy** | Your git email doesn't match Vercel. Run:<br>`git config --global user.email "your-vercel-email"`<br>`git commit --amend --reset-author --no-edit`<br>`git push --force` |
| **"Invalid Configuration" on domain** | Records not added yet, or still propagating. Check dnschecker.org. Confirm Name is `www`, not `www.flowzync.com`. |
| **Domain shows old site** | Browser cache. Try a private window or mobile data. |
| **`DNS_PROBE_FINISHED_NXDOMAIN` but Vercel says Valid** | Your computer cached the "doesn't exist" answer from before the records were added. Run `ipconfig /flushdns` (Windows), then clear Chrome's own cache at `chrome://net-internals/#dns`. Test on mobile data to confirm it's only your machine. It clears itself within a few hours. |
| **Email stopped working** | You deleted MX records in Step 22. Restore them in Hostinger, or contact Hostinger support. |
| **GitHub rejects your password** | Use the token from Step 12, not your password. |
| **Vercel build failed** | Open the build log, read the last red lines. Your live site is unaffected — Vercel only swaps over on success. |
| **"I broke the live site"** | Vercel → **Deployments** → pick a working one → **⋯** → **Promote to Production**. Back in 30 seconds. |

---

# What happens after launch

**Indexing** (Google knows you exist) takes days. **Ranking** (appearing above
competitors) takes months. They're different things.

| When | What |
|---|---|
| Days 2–7 | Homepage indexed. Check with `site:flowzync.com` in Google. |
| Weeks 1–4 | Most pages indexed |
| Months 3–6 | Long-tail terms reach page 1 |
| Months 6–12 | Competitive terms become reachable |

**Nothing makes this faster.** Anyone promising page one in 30 days is selling
you something.

## Your weekly routine (15 minutes)

1. Search Console → **Performance** → sort by Impressions. Pages with impressions
   but few clicks need a better title and description — your fastest wins.
2. Search Console → **Pages** → any new errors?
3. Publish a blog post.
4. Ask one client for a review or a "Website by Flowzync" footer link.
5. Reply to every review.

Do that for six months and you'll be ahead of most competitors in your niche.

---

# Where to go deeper

| Topic | File |
|---|---|
| Backlinks — where to get them | `docs/04-BACKLINKS.md` |
| Ranking in US/UK cities | `docs/05-LOCATION-PAGES.md` |
| Bing, ChatGPT & AI visibility | `docs/06-BING-AND-AI-VISIBILITY.md` |
| Blog writing that ranks | `docs/02-PUBLISHING-BLOG-POSTS.md` |
| SEO timelines in detail | `docs/03-AFTER-LAUNCH-SEO.md` |
| Lead database detail | `SETUP-LEADS.md` |
