# Flowzync — Everything You Need To Do

**Your complete instruction manual.** Print it, bookmark it, work through it top
to bottom. Nothing here requires a developer.

*Last updated: 8 August 2026*

---

## Contents

1. [Before you publish](#1-before-you-publish) — the checklist
2. [GitHub + Vercel setup](#2-github--vercel--from-zero-to-live) — one-time, ~45 min
3. [Publishing blog posts](#3-publishing-a-blog-post) — your daily workflow
4. [After launch: indexing & SEO](#4-after-you-publish--indexing-timelines-and-what-to-do) — how long until Google finds you
5. [Backlinks](#5-backlinks--the-slow-high-impact-one) — the monthly habit
6. [Ranking in US and UK cities](#6-ranking-in-us-and-uk-cities) — **read before listing anywhere**
7. [Lead dashboard setup](#7-lead-capture--dashboard-setup) — required before launch
8. [Quick reference](#8-quick-reference) — commands and links

---

## 1. Before you publish

Everything you need to do, in the order you should do it.
Each section below covers one job in full detail.

| # | Section | When | Time |
|---|---|---|---|
| 1 | [GitHub + Vercel setup](#2-github--vercel--from-zero-to-live) | Before launch | ~45 min, once |
| 2 | [Publishing blog posts](#3-publishing-a-blog-post) | Every time you post | ~5 min per post |
| 3 | [After launch: SEO](#4-after-you-publish--indexing-timelines-and-what-to-do) | Launch day + ongoing | ~2 hrs, then weekly |
| 4 | [Backlinks](#5-backlinks--the-slow-high-impact-one) | From week 2 onward | 2–3 hrs/month |
| 5 | [`05-LOCATION-PAGES.md`](05-LOCATION-PAGES.md) | Before launch — **read this** | ~20 min |
| 6 | [Lead dashboard setup](#7-lead-capture--dashboard-setup) | Before launch | ~15 min, once |

---

### The short version

#### Before you publish

- [ ] Fill in your real Lahore address and phone in `lib/site.js` (see below)
- [ ] Add a UK forwarding number to `lib/site.js` → section 6 (highest-impact single step)
- [ ] Set `ADMIN_PASSWORD` so the lead dashboard isn't locked → [section 7](#7-lead-capture--dashboard-setup)
- [ ] Connect Supabase so leads are actually saved → [section 7](#7-lead-capture--dashboard-setup)
- [ ] Set `GMAIL_USER` + `GMAIL_APP_PASSWORD` so leads email you
- [ ] Add a free AI key (`GROQ_API_KEY`) so Zync is fully conversational
- [ ] Swap at least your best 4–6 portfolio images → `/public/images/README.md`
- [ ] Read every page and correct anything that isn't true of your business

#### Launch day

- [ ] Push to GitHub, connect Vercel, point `flowzync.com` at it → section 2
- [ ] Confirm SSL padlock shows on the live domain
- [ ] Verify the site in Google Search Console, submit your sitemap → section 4
- [ ] Do the same in Bing Webmaster Tools → section 4
- [ ] Create your Google Business Profile at your real Lahore address → section 5
- [ ] Test the contact form and the chatbot on the live site, and check both leads land in `/admin`

#### Every week after

- [ ] Publish blog posts → section 3
- [ ] Check Search Console for errors and new queries → section 4
- [ ] Ask for a review from every happy client → section 4
- [ ] Build 2–3 quality backlinks → section 5

---

### The one thing people skip that costs them most

**Keeping "where we are" and "where we work" as two separate claims.**

Your site is based in Lahore and serves the UK. Both are true, and the site now
says both — 172 service areas in your schema, a Lahore address in your
LocalBusiness markup, and eight UK location pages that state plainly where you
actually are.

The temptation is to blur it and imply a UK office. Don't. A Google Business
Profile at an address you don't staff gets permanently suspended and takes your
reviews with it, and in the web design niche competitors report it constantly.

**Read [`05-LOCATION-PAGES.md`](05-LOCATION-PAGES.md) before you list your
business anywhere.** It covers what works instead.

#### Fill in your real details

Open `lib/site.js` and complete the `business` block:

```js
business: {
  street: '12 Main Boulevard, Gulberg III',
  city: 'Lahore',
  region: 'Punjab',
  postalCode: '54000',
  country: 'PK',
  phone: '+92 300 1234567',
  phoneUK: '+44 20 7946 0991',   // optional forwarding number
  ...
}
```

Until `street` and `phone` are filled in, the site publishes **no** LocalBusiness
schema at all. That's deliberate — a placeholder address is worse than none.

Then use that exact format, byte-for-byte, on every directory listing. Not "close
enough". Identical. Google cross-references listings to decide whether you're
real, and inconsistency reads as low confidence.


---

## 2. GitHub + Vercel — from zero to live

**What you're building:** a setup where you edit a file, run three commands, and
your live site updates itself a minute later. No FTP, no cPanel, no "uploading
the site" ever again.

**How it works:**

```
Your computer  ──git push──►  GitHub  ──automatic──►  Vercel  ──►  www.flowzync.com
```

You only do the left arrow. Everything right of it happens on its own.

Do this once. It takes about 45 minutes. After that, publishing is three commands.

---

### Step 1 — Install Git

Git is the tool that sends your code to GitHub.

- **Windows / Mac:** download from [git-scm.com/downloads](https://git-scm.com/downloads)
  and install with all the default options.
- **Check it worked.** Open Terminal (Mac) or Git Bash (Windows) and run:

```bash
git --version
```

You should see something like `git version 2.43.0`. If you get "command not
found", close the window, open a new one, and try again — the installer needs a
fresh terminal.

> **Prefer buttons to typing?** Install [GitHub Desktop](https://desktop.github.com)
> instead. Everything below is possible by clicking. I'll note the equivalents.

---

### Step 2 — Tell Git who you are

Once per computer, ever:

```bash
git config --global user.name "Your Name"
git config --global user.email "info@flowzync.com"
```

---

### Step 3 — Create the GitHub repository

1. Sign up free at [github.com](https://github.com).
2. Click the **+** (top right) → **New repository**.
3. Fill in:
   - **Repository name:** `flowzync-website`
   - **Visibility:** **Private** ← important, this is your business's code
   - **Do not** tick "Add a README", ".gitignore" or "license". Leave it empty.
4. Click **Create repository**.

Leave that page open — you'll need the URL in the next step.

---

### Step 4 — Push your site to GitHub

Open a terminal **inside your project folder** (the one with `package.json` in it).

> **Finding the folder in terminal:** type `cd ` (with a space), then drag the
> project folder from Finder/Explorer into the terminal window and press Enter.

Then run these, one line at a time:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/flowzync-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**GitHub will ask you to log in.** It will *not* accept your normal password.
You need a Personal Access Token:

1. GitHub → click your avatar → **Settings**
2. Scroll to the bottom → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
4. Note: `flowzync deploys`. Expiration: **No expiration** (or 1 year).
5. Tick the **`repo`** checkbox (the top one — it selects everything under it).
6. **Generate token**, then **copy it immediately** — GitHub never shows it again.
7. Paste it when the terminal asks for your **password**.

Save that token in your password manager. You'll need it on any new computer.

Refresh your GitHub repo page. Your files should be there.

> **GitHub Desktop version:** File → Add Local Repository → choose your folder →
> Publish repository → untick "Keep this code private" only if you want it public.

---

### Step 5 — Deploy on Vercel

#### 5a. If you already have a Vercel account (email + password)

You don't need a new account. You just need to link GitHub to the one you have.

1. Log in at [vercel.com](https://vercel.com) with your email and password as usual.
2. Click your **avatar** (top right) → **Account Settings**.
3. Open the **Authentication** tab in the left menu.
4. Find **GitHub** under login connections → click **Connect**.
5. GitHub asks you to authorise Vercel → **Authorize**.
6. GitHub then asks where to install the Vercel app. Choose either:
   - **All repositories**, or
   - **Only select repositories** → pick `flowzync-website`

   Either is fine. "Only select repositories" is tidier if you'll have other
   projects later.

Your GitHub account is now linked. You can still log in with email and password —
this only adds the connection Vercel needs to read your code.

> **If Connect does nothing or errors:** you're likely already logged into a
> *different* GitHub account in that browser. Log out of GitHub, log back in as
> the right account, and try again.

#### 5b. If you already deployed this site to Vercel before

Important: your original project folder contained a `.vercel` file, which means a
Vercel project already exists for this site — possibly with your domain already
attached to it.

**Connect that existing project to GitHub rather than creating a new one.**
Otherwise you'll end up with two projects and have to move the domain across.

1. Vercel dashboard → click your **existing Flowzync project**
2. **Settings** → **Git** (left menu)
3. **Connect Git Repository** → choose **GitHub** → select `flowzync-website`
4. Set the production branch to **`main`**
5. **Save**

From now on every push to `main` deploys automatically to that same project,
keeping your domain, your environment variables and your deployment history.

Skip to **Step 6** if your domain is already connected there.

#### 5c. If this is a brand new project

1. Vercel dashboard → **Add New** → **Project**
2. Find `flowzync-website` in the list → **Import**

   > Repo not showing? Click **Adjust GitHub App Permissions** at the bottom of
   > the list and grant access to it.

3. Vercel detects Next.js automatically. **Change nothing** in the build settings.

#### 5d. Add your environment variables

Environment variables are secrets — passwords and API keys — that your site needs
but that must never sit in your code where GitHub could see them. Vercel stores
them separately and injects them at build time.

##### Adding them, click by click

1. Vercel dashboard → click your **project**
2. **Settings** (top tabs) → **Environment Variables** (left menu)
3. For each row in the table below:
   - **Key** → paste the name exactly, e.g. `ADMIN_PASSWORD`
   - **Value** → paste the value
   - **Environments** → leave all three ticked (Production, Preview, Development)
   - Click **Save**
4. Repeat for each one.

> **On a brand new project**, the same box appears on the import screen before
> you click Deploy. Either place works.

##### What to add

| Key | Value | What it does |
|---|---|---|
| `ADMIN_PASSWORD` | a long password you invent | Unlocks `/admin`. Until this is set, the dashboard stays locked. |
| `SUPABASE_URL` | from Supabase → Settings → API | Stores leads permanently |
| `SUPABASE_SERVICE_KEY` | from Supabase → Settings → API (`service_role`) | Same |
| `GMAIL_USER` | your Gmail address | Emails you each new lead |
| `GMAIL_APP_PASSWORD` | Google App Password, 16 characters | Same |
| `CONTACT_TO` | `info@flowzync.com` | Where lead emails arrive |
| `GROQ_API_KEY` | free from [console.groq.com](https://console.groq.com) | Makes Zync fully conversational |

[section 7](#7-lead-capture--dashboard-setup) walks through getting the Supabase and Gmail values.

##### ⚠️ They don't apply until you redeploy

This catches everyone. Adding a variable does **nothing** to your live site until
a new deployment runs.

**Deployments** tab → find the most recent one → **⋯** (three dots) →
**Redeploy** → confirm. Two minutes later they're live.

Any `git push` also triggers a fresh deployment and picks them up.

##### Notes

- **No quotes.** Paste `mypassword123`, not `"mypassword123"` — Vercel adds no
  formatting, so quotes become part of the value.
- **No spaces** before or after the value. This is the most common cause of
  "my password isn't working".
- **The Gmail App Password** is 16 characters and may display with spaces
  (`abcd efgh ijkl mnop`). Spaces are fine, paste it as shown.
- **Editing later:** hover the variable → **⋯** → **Edit**. Redeploy after.
- **Never put secrets in your code.** That's the entire point of this screen.
  Anything prefixed `NEXT_PUBLIC_` is visible to visitors — none of the above
  should ever carry that prefix.

### Step 6 — Connect flowzync.com

#### First, how this actually works

A common misunderstanding: **Vercel does not push files to your domain.** There's
no upload, and no hosting account of yours involved.

What happens instead is that you repoint the domain. A domain name is really just
an address-book entry saying "when someone types flowzync.com, go to this
server". You change that entry to point at Vercel, and from then on Vercel serves
the site directly whenever anyone visits.

```
Visitor types flowzync.com
        ↓
DNS looks up where it points  ──►  Vercel  ──►  serves your latest deployment
```

So when you `git push`, Vercel rebuilds and swaps in the new version. The domain
never changes — it's already pointing at Vercel, and it just gets whatever is
current. Nothing is ever "uploaded to your domain" again.

#### 6a. Add the domain in Vercel

1. Vercel → your project → **Settings** → **Domains**
2. Type `www.flowzync.com` → **Add**
3. Add `flowzync.com` as well. Vercel offers to redirect it to the `www` version
   — **accept**. Pick one and stick with it forever; both answering separately
   splits your SEO across two addresses.
4. Vercel now shows the exact DNS records you need. Leave this tab open.

#### 6b. ⚠️ Before you touch DNS — do you have email on this domain?

**If `info@flowzync.com` currently receives email, read this first.**

Vercel may offer you two options: change your **nameservers**, or add individual
**records**.

- **Changing nameservers** hands full DNS control to Vercel — and **wipes your
  existing MX records**, which is what routes your email. Your email stops
  working, often without an obvious cause.
- **Adding records** changes only where the website points and leaves email
  untouched.

**Use the records method.** It's the safer option and there's no real downside.

If you're not sure whether you have email on the domain: check whether anyone
sends or receives from an `@flowzync.com` address. If yes, records method. If
you're still unsure, records method anyway.

#### 6c. Add the DNS records at your registrar

Log in wherever you bought the domain — GoDaddy, Namecheap, Hostinger, PKNIC,
whoever. Find **DNS Management**, **DNS Zone Editor** or **Advanced DNS**.

##### Use the values Vercel shows you, not examples from a guide

Vercel now issues a **unique hostname per project**, so your CNAME value will
look something like:

```
e1169130cebb685f.vercel-dns-017.com.
```

That long string is specific to your project. The older shared values
(`cname.vercel-dns.com` and `76.76.21.21`) still work, but use whatever Vercel's
Domains screen currently displays — it is always the correct answer.

##### The two records you need

| Type | Name / Host | Value |
|---|---|---|
| CNAME | `www` | the per-project hostname Vercel shows you |
| A | `@` | the IP Vercel shows for the apex domain |

**To see the apex record:** on the Domains screen, click **View DNS
configuration** next to `flowzync.com` (the one without `www`). Vercel shows its
record separately from the `www` one.

Apex domains usually need an **A record**, because most registrars don't allow a
CNAME on the bare domain. Some registrars offer **ALIAS**, **ANAME** or **CNAME
flattening** — if yours does, you can use that with the same hostname instead.

##### Filling in the fields

- **Name / Host:** enter just `www`, not `www.flowzync.com`. Most registrars add
  the domain automatically — if you type the full thing you'll end up with
  `www.flowzync.com.flowzync.com`.
- **`@`** means the bare domain. Some registrars want the field left blank, or
  the word `@`, or the domain itself. Check their help text.
- **Trailing dot:** Vercel shows the value ending in a dot. Most registrars
  accept it; if yours rejects it, delete the final dot and save again.
- **TTL:** leave at default, or 3600 if forced to choose.

##### ⚠️ Remove conflicting records first

This is the most common reason things don't work:

- If a **CNAME or A record for `www`** already exists, **edit it** rather than
  adding a second. Two records for the same name conflict and produce
  intermittent failures that are miserable to diagnose.
- Same for **`@`** — one A record only.
- Parked-domain or "coming soon" records from your registrar count. Delete them.
- **Leave MX records alone.** Those are your email.

#### 6d. Wait, then check

DNS changes take **10–30 minutes** typically, occasionally up to 48 hours. There
is no way to speed this up.

Vercel's **Domains** page shows a green tick when it can see the change. Refresh
it every so often.

**SSL is automatic.** Vercel issues the certificate itself once DNS resolves —
you don't buy one or install anything. Check for the padlock in the address bar.
If it hasn't appeared an hour after DNS is confirmed working, click **Refresh**
next to the domain in Vercel.

#### 6e. Confirm it's done

- [ ] `www.flowzync.com` loads your site
- [ ] `flowzync.com` redirects to the `www` version
- [ ] Padlock visible in the address bar
- [ ] Send a test email to `info@flowzync.com` and confirm it still arrives

That last one takes ten seconds and is worth doing.

#### If it isn't working

**"Invalid Configuration" in Vercel**
This is the normal state *before* your records exist and are visible — it is not
an error on Vercel's side. Work through it in this order:

1. Have you actually added the records at your registrar yet? Adding the domain
   in Vercel does nothing on its own.
2. Compare the value character by character against what Vercel shows. The
   per-project hostname is long and easy to mistype — copy and paste it.
3. Check the **Name** field is `www`, not `www.flowzync.com`.
4. Delete any older conflicting record for the same name.
5. Then wait. DNS takes 10–30 minutes typically. Check progress at
   [dnschecker.org](https://dnschecker.org) — search `www.flowzync.com` and pick
   CNAME from the dropdown.
6. Once it resolves, click **Refresh** next to the domain in Vercel.

Vercel rechecks periodically on its own, so it often clears without you doing
anything further.

**Site loads at the `.vercel.app` URL but not your domain**
DNS hasn't propagated, or the records went to the wrong place. Check at
[dnschecker.org](https://dnschecker.org) — enter `www.flowzync.com` and see
whether it resolves to Vercel worldwide.

**Old website still showing**
Your browser cached it. Try a private window, or a different device on mobile
data.

**Email stopped working**
You almost certainly changed nameservers. Switch them back to your registrar's
defaults, then use the records method from 6c instead.

### Step 7 — The everyday workflow

From now on, whenever you change anything — a blog post, a price, a photo:

```bash
git add .
git commit -m "Add blog post about Elementor pricing"
git push
```

That's it. Vercel sees the push, rebuilds, and your change is live in about
60–90 seconds. You can watch it happen in the Vercel dashboard.

> **GitHub Desktop version:** it lists your changed files. Type a summary in the
> box, click **Commit to main**, then **Push origin**. Same result.

**The message after `-m` is for you**, not the site. Write what you changed, so
that when something breaks in three months you can find the moment it happened.

---

### When something goes wrong

**"Support for password authentication was removed"**
You typed your GitHub password. Use the Personal Access Token from Step 4.

**"failed to push some refs" / "rejected"**
Someone (or you, on another machine) changed the repo. Run `git pull` first,
then `git push`.

**Vercel build failed**
Open the build log in Vercel and read the last red lines. Usually a typo in a
file you just edited. Your live site is unaffected — Vercel only swaps to the new
version if the build succeeds. Fix the file, push again.

**Site didn't update after pushing**
Check the repo on github.com — is your change actually there? If not, the push
failed. If it is, check Vercel's Deployments tab for a failed build.

**"Vercel deploys, but it's not my domain / it made a second project"**
You imported as a new project instead of connecting the existing one. Either move
the domain across (Settings → Domains on both projects), or delete the new project
and follow Step 5b instead.

**"[someone] attempted to deploy a commit to [team] on Vercel, but they're not a
member of the team"**

Ignore the suggestion to upgrade to Pro — you almost certainly don't need to.

Vercel identifies who made a deployment by the **email address on the git
commit**, not by who pushed it. If that email doesn't match a verified email on
your Vercel account, Vercel decides a stranger is deploying to your project and
blocks it. On the free Hobby plan, only the account owner can deploy, so it stops
there.

The fix is to make your commit email match your Vercel account.

**Step 1 — find the email Vercel knows you by**

Vercel → avatar → **Account Settings** → **General**. Note the email shown. Also
check **Authentication** and confirm GitHub shows as connected.

**Step 2 — check what git is putting on your commits**

```bash
git config user.email
```

If that doesn't match Step 1, that's your problem.

**Step 3 — fix it**

```bash
git config --global user.email "the-email-from-step-1"
git commit --amend --reset-author --no-edit
git push --force
```

`--amend --reset-author` rewrites the last commit with the corrected author.
`--force` is safe here: it's your own repository and nobody else is working in it.

That push triggers a fresh deployment, which should now succeed.

**If it still fails, check these in order:**

1. **Is the GitHub account connected the right one?** If you have a personal and
   a work GitHub account, Vercel may be linked to the wrong one. Account Settings
   → Authentication → check which username is shown.
2. **Is your commit email verified on Vercel?** Account Settings → General →
   add and verify the email if it isn't listed. Vercel only matches verified
   addresses.
3. **Does GitHub hide your email?** If you've enabled email privacy, GitHub
   rewrites your commits to `12345678+username@users.noreply.github.com`. Add
   that exact address to your Vercel account as a verified email, or turn off
   "Keep my email addresses private" in GitHub → Settings → Emails.
4. **Was this a CLI deploy?** If you previously ran `vercel` from the terminal
   while logged into a different account, run `vercel logout` then `vercel login`
   with the correct one. Deploying through git push avoids this entirely, and is
   what you want day to day.

You do **not** need to make the repository public, and you do **not** need Pro
for a single-person project. Both suggestions in Vercel's error message apply to
genuine multi-person teams.

**"I've broken everything"**
You haven't. Every version is saved in GitHub. Vercel → Deployments → find a
working one → **⋯** → **Promote to Production**. You're back in 30 seconds.


---

## 3. Publishing a blog post

Once GitHub and Vercel are connected (section 2), publishing is: create one file,
run three commands. Your post is live in about 90 seconds.

---

### The 5-minute version

**1.** Create a new file in `content/blog/` named:

```
YYYY-MM-DD-your-keyword-here.md
```

The filename **becomes the URL**, so this:

```
content/blog/2026-08-12-elementor-vs-custom-code.md
```

becomes:

```
www.flowzync.com/blog/elementor-vs-custom-code
```

Put your target keyword in the filename. Use hyphens, lowercase, no spaces, no
punctuation. Never rename a file after publishing — that breaks the URL and
throws away any ranking it earned.

**2.** Paste this template at the top, then write below it:

```markdown
---
title: "Elementor vs Custom Code: Which Should You Choose in 2026?"
description: "A straight comparison of Elementor and custom-coded websites — cost, speed, flexibility and who each one actually suits."
date: "2026-08-12"
author: "Your Name"
category: "Web Design"
cover: "/images/blog/elementor-vs-custom-code.jpg"
---

Your opening paragraph goes here. Answer the question in the title within the
first 100 words — this is the part AI assistants and featured snippets quote.

## Your first heading

Write normally. Blank line between paragraphs.

- Bullet points like this
- Work fine

**Bold** and *italic* work as you'd expect.

## Another heading

[Link to a service page](/services/elementor-design) — always link back to at
least one service or industry page from every post.
```

**3.** Publish:

```bash
git add .
git commit -m "New post: Elementor vs custom code"
git push
```

Done. Check `www.flowzync.com/blog` in two minutes.

---

### The frontmatter fields

Everything between the two `---` lines. Keep the quotes.

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Put the keyword near the front. Aim under 60 characters so Google doesn't truncate it. |
| `description` | Yes | 140–160 characters. This is your search-result snippet — write it to earn the click, not to describe the page. |
| `date` | Yes | `YYYY-MM-DD`. Controls ordering. |
| `author` | Yes | A real person's name. Named authors are a trust signal for Google and for AI citation. |
| `category` | Yes | Powers the filter buttons on `/blog`. Reuse existing ones — every new value creates a new filter. |
| `cover` | Recommended | 1400 × 900. Put the file in `/public/images/blog/`. |
| `updated` | Optional | Add when you revise an old post. Shows "Updated [date]" and refreshes `dateModified` in the schema. |

> **Apostrophes in your title** need care. `title: "Google's rules"` is fine
> (double quotes outside). `title: 'Google's rules'` will break the build.
> Stick to double quotes and you'll never hit this.

---

### Writing posts that actually rank

**One keyword per post.** Don't try to rank a single post for ten things. Ten
posts each targeting one long-tail phrase will beat one post targeting ten,
every time.

**Answer the title question in the first 100 words.** Don't warm up. AI Overview,
ChatGPT and Perplexity lift the paragraph that answers the question directly —
give them a clean one to lift.

**Write in declarative statements.** "WooCommerce charges no per-sale platform
fee; Shopify charges a monthly subscription plus transaction fees on some
gateways." That's quotable. "We deliver exceptional e-commerce solutions" is not.

**Link to a service or industry page from every post.** This is the whole point
of the blog — it feeds authority to the pages that make you money. A post with
no internal links is a dead end.

**Use `##` headings that match how people search.** "How much does an Elementor
website cost?" beats "Pricing considerations".

**800+ words for anything competitive.** Thin posts don't rank regardless of how
well optimised they are. If you only have 300 words to say, say it in an
existing post instead.

#### Post types worth rotating

| Type | Example | Why it works |
|---|---|---|
| Comparison | "Elementor vs Custom Code" | High intent, people are deciding |
| Cost | "How Much Does a WooCommerce Store Cost?" | Huge search volume, almost nobody answers honestly |
| Checklist | "Website Checklist for Plumbers" | Links straight to an industry page |
| How-to | "How to Speed Up a WordPress Site" | Earns links naturally |
| Mistakes | "5 WooCommerce Mistakes That Lose Sales" | Very shareable |

---

### Editing an existing post

Change the file, add `updated: "2026-09-01"` to the frontmatter, push. The post
shows "Updated" and Google sees a fresher `dateModified`.

Refreshing an old post that's ranking on page two is often a better use of an
hour than writing something new.

---

### Deleting a post

Delete the file and push. But be careful: if the post has any traffic or links,
you're throwing that away. Rewriting it is nearly always the better move.

---

### Do you need to tell Google about each post?

No. Your sitemap updates automatically on every deploy, and Google recrawls
sites that publish regularly.

For a post you particularly care about, you can nudge it: Google Search Console →
paste the URL in the top search bar → **Request Indexing**. Use it for genuinely
important pages, not every post — there's a daily quota and it doesn't help
things rank, only get *seen* slightly sooner.

---

### Later: publishing without touching files

Right now you publish by editing markdown files. That's free, fast and has no
moving parts.

If you'd rather write in a browser — or you want a non-technical person posting —
the upgrade is **Sanity CMS**: a proper editor UI, with the site rebuilding
automatically when you hit publish. It needs a Sanity account set up and the site
rewired to pull from it. Worth doing once daily posting is a real habit rather
than a plan.


---

## 4. After you publish — indexing, timelines and what to do

### The honest answer to "how long until I'm on Google?"

Two different things get confused here, so let's separate them.

**Indexing** = Google knows your page exists and will show it if someone
searches specifically enough.
**Ranking** = Google shows your page above competitors for a term people
actually search.

Indexing takes days. Ranking takes months. Here's realistic timing for a brand
new domain:

| When | What happens |
|---|---|
| **Hours 1–48** | Google discovers the site after you submit the sitemap. Homepage often indexed first. |
| **Days 2–7** | Homepage and main pages appear. Search `site:flowzync.com` to see what's in. |
| **Weeks 1–4** | Most or all 27 pages indexed. Some pages take longer with no reason given — normal. |
| **Weeks 2–8** | You start appearing for your own brand name and very long-tail terms ("website for water leakage detection lahore"). Usually pages 2–5. |
| **Months 3–6** | Long-tail and local terms move toward page 1, *if* you're publishing and building links consistently. |
| **Months 6–12** | Competitive terms ("custom website design") become realistically reachable. |

**If you publish today:** expect to be findable by name within about a week, and
to see the first meaningful non-brand traffic somewhere around month three.

**Nothing makes this faster.** There's no button, no paid submission, no service.
The one real lever is a brand-new domain's lack of history — that's earned by
time and links, not bought. Anyone promising page one in 30 days is selling you
something.

Long-tail beats broad, always. "Website for dental clinics in Lahore" might rank
in six weeks. "Web design" might never. That's exactly why the industry pages
exist.

---

### Launch day checklist

#### 1. Google Search Console — do this first (15 min)

This is free, and it's the only place you can see what Google actually thinks of
your site.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → choose **Domain** (left box) → enter `flowzync.com`
3. It gives you a **TXT record**. Add it in your domain registrar's DNS settings
   (same place you added the Vercel records) → **Verify**
4. Left menu → **Sitemaps** → enter `sitemap.xml` → **Submit**
5. Top search bar → paste `https://www.flowzync.com` → **Request Indexing**

Repeat step 5 for your five most important pages. Don't do all 27 — it won't
help and there's a daily limit.

> **Nothing will show for 2–3 days.** Search Console reports on a delay. Empty
> graphs on day one are expected, not a problem.

#### 2. Bing Webmaster Tools (5 min)

Skipping Bing is a common mistake — it powers **ChatGPT's web search** and
Copilot, so it matters more than its market share suggests.

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. **Import from Google Search Console** — one click, it copies everything
3. Confirm the sitemap imported

#### 3. Google Business Profile — at your Lahore address (30 min)

Register this at your **real** address in Lahore. It won't help UK rankings, but
it brings local Pakistani enquiries and it's a legitimate trust signal that
directories and Google cross-check against your site.

1. [business.google.com](https://business.google.com) → **Manage now**
2. Enter your details — **exactly matching `lib/site.js`**
3. Choose the most specific primary category ("Website designer", not "Business
   services"), then add secondary ones
4. Verification is by postcard, phone or video and takes 1–2 weeks. Start today.
5. While waiting, complete everything: services, description, hours, service
   areas and 10+ real photos

**You cannot get a UK Business Profile** without a verified UK address with staff
present. Don't attempt it — see `05-LOCATION-PAGES.md`. Your route to UK
visibility is organic location pages, which are already built.

#### 4. Verify things actually work (10 min)

On the **live domain**, not localhost:

- [ ] Padlock shows in the address bar
- [ ] `flowzync.com` redirects to `www.flowzync.com` (or your chosen version)
- [ ] `www.flowzync.com/sitemap.xml` loads and lists your pages
- [ ] `www.flowzync.com/robots.txt` loads
- [ ] Submit the contact form → check it arrives in `/admin` **and** by email
- [ ] Open the chatbot, type "I want a quote" → the form appears → submit →
      check it appears in `/admin` marked as "Zync chat"
- [ ] Open the site on a **real phone**, not just a resized browser window
- [ ] Right-click → View Page Source → confirm your text is in the HTML

The last one matters: it proves Google can read your content without running
JavaScript. Your site passes, but re-check after any major change.

#### 5. Analytics (optional, 10 min)

[Google Analytics](https://analytics.google.com) → create a GA4 property → copy
the Measurement ID (`G-XXXXXXX`) → send it over and I'll wire it in properly, or
add it via Vercel's Analytics tab which needs no code at all.

---

### Week one

- [ ] Search `site:flowzync.com` in Google. Count the pages. Growing? Good.
- [ ] Search Console → **Pages** → read any "Not indexed" reasons
- [ ] Publish 2–3 blog posts. New sites that publish get crawled more often.
- [ ] Start the backlink work in section 5 — this is the slow one, so start early
- [ ] Ask your three most recent happy clients for a Google review

---

### Every week, ongoing

**15 minutes in Search Console:**

1. **Performance** → sort by Impressions. Terms you're getting impressions but
   few clicks for are your fastest wins — you're already ranking, you just need
   a better title and description on that page.
2. **Pages** → any new errors?
3. **Links** → watch your backlinks accumulate

**Then:**
- Publish (weekly minimum, daily if you can sustain it)
- 2–3 new quality backlinks
- Reply to every review on any platform, good or bad
- Post once on your Business Profile if you have one

Reviews are genuinely a ranking factor, and asking for them is free.

---

### What to expect, and what to ignore

**Normal, don't panic:**
- Some pages indexed, others not, with no explanation
- Rankings bouncing wildly for the first months
- Zero traffic in week one
- Impressions with no clicks at first

**Actually wrong, investigate:**
- `site:flowzync.com` returns nothing after 2 weeks → check Search Console for a
  manual action, and confirm robots.txt isn't blocking everything
- Traffic collapses overnight → check you didn't accidentally deploy a broken
  build, or rename URLs
- Pages indexed then dropped → usually thin content Google decided wasn't worth
  keeping

**Ignore entirely:**
- Emails offering to "submit your site to 500 search engines"
- Anyone guaranteeing rankings
- Cold callers claiming to be "from Google" — Google doesn't cold call
- Paid "instant indexing" services

---

### What actually moves rankings, in order

1. **Technical foundation** — done. Fast, crawlable, mobile, schema, SSR.
2. **Content depth per page** — thin pages don't rank. Your service and industry
   pages are substantial; keep new ones the same.
3. **Consistent publishing** — one post weekly beats seven then nothing.
4. **Backlinks from real, relevant sites** — slowest, highest impact. Guide 4.
5. **Local signals** — Business Profile completeness, reviews, NAP consistency.
6. **Structured data** — done, and it's what gets you quoted in AI answers.

Numbers 3, 4 and 5 are the ones only you can do. That's the job now.


---

## 5. Backlinks — the slow, high-impact one

A backlink is another website linking to yours. Google treats each one roughly as
a vote of confidence, weighted by how much it trusts the site voting.

This is the single biggest factor separating you from competitors ranking for
terms you want — and the only one that can't be finished in an afternoon. Treat
it as a standing monthly habit, not a launch task.

**Ten links from real, relevant sites beat a hundred from link farms.** The
hundred can actively get you penalised.

---

### Week one: the ones everyone should have

Free, fast, and they establish your NAP consistency baseline.

- [ ] **Google Business Profile** — covered in section 4. Most important listing you own.
- [ ] **Bing Places** — [bingplaces.com](https://www.bingplaces.com). Feeds ChatGPT search.
- [ ] **Apple Maps** — [mapsconnect.apple.com](https://mapsconnect.apple.com)
- [ ] **LinkedIn company page** — with the website link filled in
- [ ] **Facebook business page** — same
- [ ] **Instagram bio link**
- [ ] **Crunchbase** — [crunchbase.com](https://crunchbase.com), free listing

> **Before you submit any of these:** decide your exact NAP format and keep it
> byte-identical. `Suite 4` vs `Ste. 4` vs `#4` reads as three different
> businesses to Google's cross-referencing.

---

### Weeks 2–4: agency directories

These carry real weight for web design specifically, and clients genuinely browse
them.

| Directory | Notes |
|---|---|
| [Clutch.co](https://clutch.co) | The big one for agencies. Free profile. They verify by interviewing your clients — worth the effort. |
| [GoodFirms](https://goodfirms.co) | Free listing, decent authority |
| [DesignRush](https://designrush.com) | Has a free tier |
| [The Manifest](https://themanifest.com) | Clutch's sister site |
| [Sortlist](https://sortlist.com) | Good in some regions |
| Local chamber of commerce | Often a strong local signal |
| Industry associations | Any you're eligible to join |

Fill each profile in **completely**. Half-finished profiles rank badly within the
directory, which is where the actual client enquiries come from.

---

### Ongoing: the ones that compound

#### Client footer credits — your best source

Ask every happy client to add "Website by Flowzync" linking to your site in their
footer.

Highly relevant, naturally placed, and permanent. Build it into your handover
conversation: *"Would you mind if we add a small credit in the footer? It helps
us a lot and it's how most of our clients find us."* Most say yes if you ask at
the moment they're pleased with the work.

**Vary the anchor text across clients.** If forty sites all link with the exact
phrase "custom website design", that pattern looks manufactured. Mix:

- `Flowzync` (brand — should be your most common)
- `Website by Flowzync`
- `web design agency`
- `www.flowzync.com` (bare URL)
- `built by Flowzync`

Natural link profiles are mostly brand and URL anchors. Exact-match keyword
anchors should be the minority.

#### Guest posts

Write a genuinely useful article for a blog your clients read — small business,
startup, local business, marketing. Link back to a *relevant* service or blog
page, not always the homepage.

Finding them: search `"write for us" + small business blog` or
`"guest post" + web design`. Pitch a specific title, not "can I write for you".

One good guest post on a real, read blog beats fifty directory submissions.

#### Testimonial links

Every tool you pay for — hosting, Elementor, a plugin, your CRM — wants
testimonials, and most publish them with a link back.

Email them offering one. Cost: ten minutes. Success rate: surprisingly high.

#### Partnerships

Hosting providers, marketing agencies, photographers, copywriters, local business
consultants. Anyone who serves your clients but doesn't compete with you.

Offer mutual referrals and a link on each other's "partners" page. These also
send actual clients, which matters more than the link.

#### Press and local PR

- Local business news sites
- "Best web design agency in [city]" listicles — email the author, ask to be
  considered, mention what makes you different
- Startup roundups

---

### The rules

**Do:**
- Prioritise relevance over volume
- Grow steadily — a handful of quality links monthly
- Vary anchor text naturally
- Track everything in Search Console → **Links**

**Never:**
- **Buy links** from link farms or PBNs. Google penalises this and recovery is
  brutal. Any Fiverr gig offering "500 backlinks for $20" is exactly this.
- Spam blog comments or forum signatures
- Do reciprocal link exchanges at scale
- Build 200 links in one week — sudden spikes look bought, because they usually are

If an offer sounds like a shortcut, it's the thing that tanks sites.

---

### Tracking

**Google Search Console → Links** (free) — shows what Google has actually counted.
The only source that matters.

**Ahrefs Webmaster Tools** (free for your own verified site) — better interface,
shows new and lost links.

**Ubersuggest** — limited free daily searches, useful for checking competitors'
link profiles to find directories you've missed.

---

### A realistic monthly rhythm

Two to three hours, once a month:

- 1 guest post pitched or written
- 2–3 directory or citation listings
- Ask 2 recent clients for footer credits
- 1 testimonial submitted
- 15 minutes reviewing Search Console → Links

That's roughly 5–8 quality links a month. Sustained for a year, that's a link
profile most local competitors won't match — and it's the thing that makes the
competitive keywords in section 4's month 6–12 window actually reachable.


---

## 6. Ranking in US and UK cities

You want to rank in US and UK cities. That's achievable, and the site is built
for it. This guide covers how it works and — importantly — the one mistake that
would undo it.

---

### Where you are vs where you work

Your site now makes one claim only: **Flowzync is a remote studio serving the US
and UK.** That's true, and it's all your structured data says.

Your `areaServed` markup declares **311 service areas** — the US and UK as
countries, all 50 US states plus DC, 100+ US cities, 39 UK counties and 120+ UK
towns.

What the site never does is claim an office in a city you aren't in. Every
location page carries a panel saying plainly that Flowzync is remote and has no
office there, framed as the reason the pricing compares well. Buyers who'd object
find out immediately; buyers who don't care get a reason to trust you.

**If you ever add a real registered address**, put it in `lib/site.js` and the
LocalBusiness schema switches on automatically. Until then the site publishes no
address at all — which is the correct, safe default.

⚠️ **Never claim a US or UK office you don't staff.** A Google Business Profile
at an address without staff present gets permanently suspended and takes your
reviews with it. In web design specifically, competitors report this constantly.

### Why service areas alone won't rank you

Here's the part most people get wrong.

**`areaServed` markup tells Google where you work. It does not make you rank in
Leeds or Austin.** It's a supporting signal, not a ranking one. If declaring 172 areas were
enough, everyone would declare all of them.

What actually ranks you in a UK town is **a page written for that town**. That's
what `/locations/` is for.

#### What's already built

**Fourteen location pages** — six US, eight UK — each with genuinely different
content:

| US page | Angle |
|---|---|
| `/locations/web-design-austin` | Startup pricing for non-startup businesses |
| `/locations/web-design-dallas` | Trades, medical, lead generation across DFW |
| `/locations/web-design-new-york` | Most competitive, honest about it |
| `/locations/web-design-chicago` | Rebuilds and migrations, B2B |
| `/locations/web-design-miami` | Bilingual, design-led, real estate |
| `/locations/web-design-phoenix` | Home services, genuinely winnable market |

| UK page | Angle |
|---|---|
| `/locations/web-design-manchester` | Crowded, expensive agency market |
| `/locations/web-design-birmingham` | Trade and manufacturing catalogues |
| `/locations/web-design-leeds` | Regulated professional services |
| `/locations/web-design-glasgow` | First proper website, migrations |
| `/locations/web-design-reading` | Thames Valley tech, B2B and SaaS |
| `/locations/web-design-bristol` | Brand-led independents, ecommerce |
| `/locations/web-design-milton-keynes` | Logistics and B2B, winnable search |
| `/locations/web-design-london` | Most competitive, honest about it |

Each has its own market analysis, its own FAQs, its own service focus and its own
Service + FAQPage schema. Read two side by side — they don't sound like the same
page with a name swapped, and that's deliberate.

---

### ⚠️ The rule for adding more

**Never duplicate a page and swap the town name.**

Google calls near-identical location pages **doorway pages**. It doesn't just
ignore them — it demotes them as a group, and that can drag down the rest of your
site with them. This is the single fastest way to damage a site that's otherwise
built correctly.

**Add a town only when you have something true to say about it:**

- A client you've worked with there
- An industry you understand in that area
- A market condition you can describe accurately
- A price or competition reality specific to that place

If you can't fill the three "local picture" points with something genuine, don't
add the page yet.

**Eight strong pages beat eighty thin ones.** The eighty will actively cost you.

#### How to add one

Open `lib/locations.js`, copy an existing entry, and replace **every field** with
real content:

```js
{
  slug: 'web-design-nottingham',
  city: 'Nottingham',
  region: 'Nottinghamshire',
  title: 'Web Design in Nottingham',
  seoTitle: 'Web Design Nottingham | Website Design & WordPress — Flowzync',
  seoDescription: '...',           // 140–160 chars, write it to earn the click
  keywords: ['web design nottingham', ...],
  intro: '...',                    // what's actually distinctive about this market
  context: [ ['...', '...'], ... ],// 3 genuine local observations
  faqs: [ ['...', '...'], ... ],   // 4 questions, answered directly
  related: ['custom-website-design', ...],
}
```

Push it, and the page, its schema, its sitemap entry and its internal links all
generate automatically.

**Target smaller towns first.** "Web design Milton Keynes" is far more winnable
than "web design London" — fewer agencies produce real content for them, and the
enquiries are often better qualified. Your best early wins will come from towns
most agencies ignore.

---

### Realistic expectations

| Term | Difficulty | Realistic timeline |
|---|---|---|
| "web design milton keynes" | Low | 3–6 months |
| "woocommerce developer leeds" | Low–medium | 3–6 months |
| "web design manchester" | High | 12+ months |
| "web design london" | Very high | Multi-year |

Service-plus-town terms are your route in. Broad city terms in Manchester or
London mean competing with agencies holding decades of domain history and large
budgets — reachable eventually, not soon.

**One thing you cannot get:** the Google Maps local pack for UK searches. That
requires a verified UK address with staff present. You're competing in the
organic results below it, which is a perfectly good place to be — for B2B web
design work, most enquiries come from organic, directories and referrals anyway.

---

### What makes the biggest difference next

#### 1. A UK phone number (~30 min, highest impact)

Completely legitimate from anywhere, and UK prospects are far likelier to call a
UK number.

| Provider | Cost |
|---|---|
| [Twilio](https://twilio.com) | ~£1–2/month |
| [Skype Number](https://www.skype.com/en/features/online-number/) | ~£4/month |
| [Zadarma](https://zadarma.com) | ~£2/month |

Forward it to your phone, then add it to `lib/site.js`:

```js
phoneUK: '+44 20 7946 0991',
```

It appears in your schema and contact points automatically. **Answer it** — a
number nobody picks up is worse than none.

#### 2. One real UK case study

A named UK client with their city is worth more than every piece of location
markup on the site combined. It's the thing prospects actually check.

#### 3. UK spelling and currency

The service pages already use UK spelling ("optimisation"). Keep it. Quote in
GBP when talking to UK clients, and reference things they recognise — VAT,
Companies House, GDPR and the ICO.

#### 4. Your Google Business Profile — register it in Lahore

You can and should have one, at your real Lahore address. It won't help UK
rankings, but it brings local Pakistani enquiries and it's a legitimate trust
signal. Register it honestly at the address in `lib/site.js`.

---

### Before you go live

- [ ] Fill in `street`, `phone`, `postalCode` in `lib/site.js` — LocalBusiness
      schema stays switched off until you do
- [ ] Get a UK forwarding number and add `phoneUK`
- [ ] Read all eight location pages and correct anything that isn't true of how
      you actually work
- [ ] Decide your exact business name, address and phone format, and use it
      byte-for-byte identically on every directory listing


---

## 7. Lead capture & dashboard setup

Every enquiry, whether it comes from the contact form or from a chat with
Zync, is stored in one place and shown at **`/admin`**.

There are two things to switch on. Both are free.

---

### 1. Set the dashboard password (required)

Until you do this, `/admin` stays locked and the API refuses every request.
It never falls open.

In Vercel → Project → Settings → Environment Variables, add:

```
ADMIN_PASSWORD = something-long-and-not-guessable
```

Redeploy, then open `https://www.flowzync.com/admin` and sign in with it.

> This is a single shared password, which suits a small team. If more than
> two or three people need access — or you need to know *who* changed a
> lead's status — replace it with a proper auth provider.

---

### 2. Store leads permanently (strongly recommended)

Without a database, leads are kept in memory. On Vercel each request can hit
a different server instance, and instances restart constantly, so **leads
will be lost**. The dashboard shows an orange warning whenever this is the case.

#### Set up Supabase (about 10 minutes, free tier is plenty)

**Yes — you need to create a project.** The URL and API keys are generated per
project, so there's nothing to copy until one exists. There's no credit card
required and commercial use is allowed on the free plan.

##### Step 1 — Create the project

1. Sign up at [supabase.com](https://supabase.com) → **New project**
2. Fill in:
   - **Name:** `flowzync` (only you see this)
   - **Database password:** click Generate, then **save it in your password
     manager**. You won't need it for this site, but it's the only way to reach
     the database directly later and Supabase won't show it again.
   - **Region:** pick the one closest to your visitors. For UK traffic choose
     **West EU (London)** or **Central EU (Frankfurt)**.
3. **Create new project**, then wait ~2 minutes while it provisions.

##### Step 2 — Create the leads table

Open **SQL Editor** in the left menu → **New query** → paste this → **Run**:

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

-- Row Level Security on, with no public policies: the table is
-- reachable only with the service key, which lives on the server.
alter table leads enable row level security;

create index leads_created_at_idx on leads (created_at desc);
```

You should see "Success. No rows returned" — that's correct, it created a table
rather than fetching anything.

##### Step 3 — Copy your two values

Left menu → **Settings** (gear icon).

**A. Project URL** → open the **API** (or **Data API**) section and copy
**Project URL**. It looks like:

```
https://abcdefghijklmnop.supabase.co
```

That's your `SUPABASE_URL`.

**B. The secret key** → open the **API Keys** section.

Supabase changed their key system, so what you see depends on your project:

| What you see | What to copy |
|---|---|
| A **Secret keys** section with `sb_secret_...` | Copy that. This is the current format. |
| Only **Legacy API keys** with `anon` and `service_role` | Click **Create new API keys** to generate a secret key, or copy the **service_role** key from the Legacy tab — both work. |

Either goes into `SUPABASE_SERVICE_KEY`. New projects created today usually have
both; the legacy `service_role` key is being deprecated at the end of 2026, so
prefer `sb_secret_...` if it's offered.

> ⚠️ **Copy the secret key, not the publishable one.**
>
> - **Publishable** (`sb_publishable_...`) or **anon** — safe in public code,
>   and has no access to your leads. Wrong key here.
> - **Secret** (`sb_secret_...`) or **service_role** — bypasses Row Level
>   Security and can read everything. This is the one the server needs.
>
> Because the secret key bypasses RLS, it must **only** live in Vercel's
> environment variables. Never in your code, never in the browser, and never
> with a `NEXT_PUBLIC_` prefix.

##### Step 4 — Add both to Vercel

1. Vercel → your project → **Settings** → **Environment Variables**
2. Add the first:
   - **Key:** `SUPABASE_URL`
   - **Value:** paste the Project URL
   - Leave all three environments ticked → **Save**
3. Add the second:
   - **Key:** `SUPABASE_SERVICE_KEY`
   - **Value:** paste the secret key
   - Leave all three environments ticked → **Save**

Watch for: no quotes around the values, no trailing spaces, and no trailing slash
on the URL.

##### Step 5 — Redeploy, then check

Variables only apply to **new** deployments. Vercel → **Deployments** → most
recent → **⋯** → **Redeploy**.

Then open `https://www.flowzync.com/admin` and sign in. **The orange "stored in
memory only" warning should be gone.** If it is, you're connected.

Submit a test enquiry through the contact form and confirm it appears in the
dashboard, then check it's also visible in Supabase → **Table Editor** → `leads`.

##### Quickest way to test the connection

Visit this URL in your browser on the live site:

```
https://www.flowzync.com/api/keep-alive
```

It tells you exactly what is wrong in plain language:

| Response | Meaning |
|---|---|
| `{"ok":true,"database":"connected"}` | Everything works. |
| `The leads table does not exist...` | The SQL from Step 2 was never run. Run it in the Supabase SQL Editor. |
| `Supabase rejected the key...` | You used the publishable/anon key instead of the secret one. |
| `Could not reach Supabase at all...` | `SUPABASE_URL` is wrong, or has a trailing slash. |

This is the same endpoint the daily cron uses, so it is always up to date and
exposes no data.

##### If the form returns a 400 error

The form deliberately shows visitors a friendly message, but the response
includes a `hint` field naming the cause. Open your browser's **DevTools →
Network** tab, submit the form, click the `leads` request and look at the
response:

| Hint | Fix |
|---|---|
| `table-missing` | Run the SQL from Step 2 in the Supabase SQL Editor. |
| `bad-key` | You copied the publishable/anon key. Use the secret key. |
| `cannot-reach-database` | Check `SUPABASE_URL` — no trailing slash, no quotes. |
| `schema-mismatch` | The table exists but the columns differ. Drop it and re-run the Step 2 SQL exactly. |
| `invalid-input` | The submission had no name, email or phone at all. |

The full Supabase error is always in **Vercel → Logs**.

##### If the warning is still showing

1. Did you redeploy? Adding variables alone changes nothing.
2. Check for typos in the variable **names** — they're case-sensitive and must be
   exactly `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`.
3. Check you copied the **secret** key, not the publishable/anon one.
4. Check the SQL from Step 2 actually ran — Supabase → Table Editor should show a
   `leads` table.
5. Look at Vercel → **Logs** and submit a test enquiry. The error message there
   will name the actual problem.

---

### 2b. ⚠️ The free-tier pause — already handled, but know about it

**Supabase pauses free projects after 7 days of no activity.** A paused database
can't accept writes, so your contact form and chatbot would silently fail to save
enquiries until someone noticed and restored it manually.

For a new site that hasn't got traffic yet, this is a realistic risk rather than
a theoretical one.

**This is already solved.** The site includes a keep-alive route at
`/api/keep-alive`, and `vercel.json` tells Vercel to call it once a day at 06:00
UTC. That single lightweight read resets the 7-day timer, so the project never
pauses.

You don't need to configure anything — it activates on your first deploy. Two
optional extras:

- **Check it's running:** Vercel → your project → **Cron Jobs** tab. You'll see
  the schedule and the last run.
- **Lock the endpoint:** add a `CRON_SECRET` environment variable with any long
  random string. Vercel sends it automatically on cron requests, and the route
  will then reject anyone else. Optional — the endpoint exposes no data either
  way.

Worth knowing regardless:

- The free tier keeps **no backups**. If the leads matter commercially, export
  them periodically (Supabase → Table Editor → leads → Export CSV), or move to
  the Pro plan which adds daily backups.
- A paused project is **not** a deleted one — the data survives and you restore
  it from the dashboard. But any enquiry that arrived while it was paused is gone.
- Free tier allows **2 active projects** and 500 MB of database storage. Lead
  records are tiny; you will not approach that limit.

---

### 3. Email notifications (optional but useful)

Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` (see `.env.example`) and every new
lead also arrives in your inbox, with the chat transcript attached when it
came from Zync.

Email is best-effort: if sending fails, the lead is still saved. You will
never lose an enquiry because of a mail problem.

---

### How the pieces connect

```
Contact form  ─┐
               ├──►  POST /api/leads  ──►  Supabase `leads` table  ──►  /admin
Zync chat form ─┘                     └──►  email notification
```

Both entry points write the same record shape, which is why the dashboard
shows one list rather than two. The `source` column tells you which was which.

### Statuses

`New` → `Contacted` → `Converted`, or `Not interested`. Change one from the
dropdown in the dashboard; it saves immediately.


---

## 8. Quick reference

### The three commands you'll use forever

```bash
git add .
git commit -m "what you changed"
git push
```

Live in 60–90 seconds. That's the whole publishing process.

### Files you'll actually edit

| File | Controls |
|---|---|
| `lib/site.js` | Domain, email, Lahore address, phone, service areas |
| `lib/locations.js` | UK location pages — **read section 6 before adding** |
| `lib/images.js` | Every image on the site |
| `content/blog/*.md` | Your blog posts |
| `lib/services.js` | Service page content |
| `lib/industries.js` | Industry page content |

### Links you'll need

| What | Where |
|---|---|
| Your live site | https://www.flowzync.com |
| Lead dashboard | https://www.flowzync.com/admin |
| Vercel dashboard | https://vercel.com/dashboard |
| GitHub repo | https://github.com/YOUR-USERNAME/flowzync-website |
| Google Search Console | https://search.google.com/search-console |
| Bing Webmaster Tools | https://www.bing.com/webmasters |
| Google Business Profile | https://business.google.com |
| Supabase (leads database) | https://supabase.com/dashboard |
| Groq (free AI key) | https://console.groq.com |
| Twilio (UK phone number) | https://twilio.com |
| Check DNS propagation | https://dnschecker.org |

### Emergency: "I broke the live site"

You didn't — every version is saved.

**Vercel → Deployments → find a working one → ⋯ → Promote to Production.**

Back to normal in 30 seconds. Then fix the file and push again.

### The five-minute weekly routine

1. Search Console → **Performance** → sort by Impressions. Pages with impressions
   but few clicks need a better title and description — the fastest wins available.
2. Search Console → **Pages** → any new errors?
3. Publish a post.
4. Ask one client for a review or a footer credit.
5. Reply to every review.

Do that for six months and you'll be ahead of most competitors in your niche.
