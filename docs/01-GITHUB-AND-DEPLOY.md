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

### 5a. If you already have a Vercel account (email + password)

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

### 5b. If you already deployed this site to Vercel before

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

### 5c. If this is a brand new project

1. Vercel dashboard → **Add New** → **Project**
2. Find `flowzync-website` in the list → **Import**

   > Repo not showing? Click **Adjust GitHub App Permissions** at the bottom of
   > the list and grant access to it.

3. Vercel detects Next.js automatically. **Change nothing** in the build settings.

### 5d. Add your environment variables

Environment variables are secrets — passwords and API keys — that your site needs
but that must never sit in your code where GitHub could see them. Vercel stores
them separately and injects them at build time.

#### Adding them, click by click

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

#### What to add

| Key | Value | What it does |
|---|---|---|
| `ADMIN_PASSWORD` | a long password you invent | Unlocks `/admin`. Until this is set, the dashboard stays locked. |
| `SUPABASE_URL` | from Supabase → Settings → API | Stores leads permanently |
| `SUPABASE_SERVICE_KEY` | from Supabase → Settings → API (`service_role`) | Same |
| `GMAIL_USER` | your Gmail address | Emails you each new lead |
| `GMAIL_APP_PASSWORD` | Google App Password, 16 characters | Same |
| `CONTACT_TO` | `info@flowzync.com` | Where lead emails arrive |
| `GROQ_API_KEY` | free from [console.groq.com](https://console.groq.com) | Makes Zync fully conversational |

`SETUP-LEADS.md` walks through getting the Supabase and Gmail values.

#### ⚠️ They don't apply until you redeploy

This catches everyone. Adding a variable does **nothing** to your live site until
a new deployment runs.

**Deployments** tab → find the most recent one → **⋯** (three dots) →
**Redeploy** → confirm. Two minutes later they're live.

Any `git push` also triggers a fresh deployment and picks them up.

#### Notes

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

## Step 6 — Connect flowzync.com

### First, how this actually works

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

### 6a. Add the domain in Vercel

1. Vercel → your project → **Settings** → **Domains**
2. Type `www.flowzync.com` → **Add**
3. Add `flowzync.com` as well. Vercel offers to redirect it to the `www` version
   — **accept**. Pick one and stick with it forever; both answering separately
   splits your SEO across two addresses.
4. Vercel now shows the exact DNS records you need. Leave this tab open.

### 6b. ⚠️ Before you touch DNS — do you have email on this domain?

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

### 6c. Add the DNS records at your registrar

Log in wherever you bought the domain — GoDaddy, Namecheap, Hostinger, PKNIC,
whoever. Find **DNS Management**, **DNS Zone Editor** or **Advanced DNS**.

#### Use the values Vercel shows you, not examples from a guide

Vercel now issues a **unique hostname per project**, so your CNAME value will
look something like:

```
e1169130cebb685f.vercel-dns-017.com.
```

That long string is specific to your project. The older shared values
(`cname.vercel-dns.com` and `76.76.21.21`) still work, but use whatever Vercel's
Domains screen currently displays — it is always the correct answer.

#### The two records you need

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

#### Filling in the fields

- **Name / Host:** enter just `www`, not `www.flowzync.com`. Most registrars add
  the domain automatically — if you type the full thing you'll end up with
  `www.flowzync.com.flowzync.com`.
- **`@`** means the bare domain. Some registrars want the field left blank, or
  the word `@`, or the domain itself. Check their help text.
- **Trailing dot:** Vercel shows the value ending in a dot. Most registrars
  accept it; if yours rejects it, delete the final dot and save again.
- **TTL:** leave at default, or 3600 if forced to choose.

#### ⚠️ Remove conflicting records first

This is the most common reason things don't work:

- If a **CNAME or A record for `www`** already exists, **edit it** rather than
  adding a second. Two records for the same name conflict and produce
  intermittent failures that are miserable to diagnose.
- Same for **`@`** — one A record only.
- Parked-domain or "coming soon" records from your registrar count. Delete them.
- **Leave MX records alone.** Those are your email.

### 6d. Wait, then check

DNS changes take **10–30 minutes** typically, occasionally up to 48 hours. There
is no way to speed this up.

Vercel's **Domains** page shows a green tick when it can see the change. Refresh
it every so often.

**SSL is automatic.** Vercel issues the certificate itself once DNS resolves —
you don't buy one or install anything. Check for the padlock in the address bar.
If it hasn't appeared an hour after DNS is confirmed working, click **Refresh**
next to the domain in Vercel.

### 6e. Confirm it's done

- [ ] `www.flowzync.com` loads your site
- [ ] `flowzync.com` redirects to the `www` version
- [ ] Padlock visible in the address bar
- [ ] Send a test email to `info@flowzync.com` and confirm it still arrives

That last one takes ten seconds and is worth doing.

### If it isn't working

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
