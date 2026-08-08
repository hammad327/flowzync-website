# 1. GitHub + Vercel — from zero to live

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

## Step 1 — Install Git

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

## Step 2 — Tell Git who you are

Once per computer, ever:

```bash
git config --global user.name "Your Name"
git config --global user.email "info@flowzync.com"
```

---

## Step 3 — Create the GitHub repository

1. Sign up free at [github.com](https://github.com).
2. Click the **+** (top right) → **New repository**.
3. Fill in:
   - **Repository name:** `flowzync-website`
   - **Visibility:** **Private** ← important, this is your business's code
   - **Do not** tick "Add a README", ".gitignore" or "license". Leave it empty.
4. Click **Create repository**.

Leave that page open — you'll need the URL in the next step.

---

## Step 4 — Push your site to GitHub

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

## Step 5 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Sign up** → **Continue with GitHub**.
2. Authorise Vercel to access your repositories.
3. **Add New** → **Project**.
4. Find `flowzync-website` → **Import**.
5. Vercel detects Next.js on its own. **Change nothing** in the build settings.
6. Before clicking Deploy, expand **Environment Variables** and add each of these
   (name on the left, value on the right, **Add** after each one):

| Name | Value | Why |
|---|---|---|
| `ADMIN_PASSWORD` | a long password you invent | Unlocks `/admin` |
| `SUPABASE_URL` | from Supabase | Stores leads permanently |
| `SUPABASE_SERVICE_KEY` | from Supabase | Same |
| `GMAIL_USER` | your Gmail address | Emails you new leads |
| `GMAIL_APP_PASSWORD` | Google App Password | Same |
| `CONTACT_TO` | `info@flowzync.com` | Where leads arrive |
| `GROQ_API_KEY` | free from console.groq.com | Makes Zync conversational |

See `SETUP-LEADS.md` for how to get the Supabase and Gmail values. You can add
them later too — Settings → Environment Variables → then **Redeploy**.

7. Click **Deploy** and wait ~2 minutes.

You'll get a URL like `flowzync-website.vercel.app`. Open it. That's your site,
live on the internet.

---

## Step 6 — Connect your domain

1. In Vercel: your project → **Settings** → **Domains**.
2. Type `www.flowzync.com` → **Add**.
3. Add `flowzync.com` as well. Vercel will offer to redirect it to the `www`
   version — **accept that**. Pick one and stick to it forever; both versions
   answering separately splits your SEO between two addresses.
4. Vercel shows you DNS records to create. Log in wherever you bought the domain
   (GoDaddy, Namecheap, Hostinger…), find **DNS Management**, and add exactly
   what Vercel shows. Usually:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

   **Use the values Vercel actually displays**, not these — they change.

5. Wait. DNS usually takes 10–30 minutes, occasionally up to 48 hours. Vercel's
   Domains page shows a green tick when it's ready.
6. **SSL is automatic.** Vercel issues the certificate once DNS resolves. Check
   for the padlock in the browser bar. If it hasn't appeared after an hour with
   DNS confirmed, click **Refresh** on the domain in Vercel.

---

## Step 7 — The everyday workflow

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

## When something goes wrong

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

**"I've broken everything"**
You haven't. Every version is saved in GitHub. Vercel → Deployments → find a
working one → **⋯** → **Promote to Production**. You're back in 30 seconds.
