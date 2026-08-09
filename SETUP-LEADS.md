# Lead capture & dashboard — setup

Every enquiry, whether it comes from the contact form or from a chat with
Zync, is stored in one place and shown at **`/admin`**.

There are two things to switch on. Both are free.

---

## 1. Set the dashboard password (required)

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

## 2. Store leads permanently (strongly recommended)

Without a database, leads are kept in memory. On Vercel each request can hit
a different server instance, and instances restart constantly, so **leads
will be lost**. The dashboard shows an orange warning whenever this is the case.

### Set up Supabase (about 10 minutes, free tier is plenty)

**Yes — you need to create a project.** The URL and API keys are generated per
project, so there's nothing to copy until one exists. There's no credit card
required and commercial use is allowed on the free plan.

#### Step 1 — Create the project

1. Sign up at [supabase.com](https://supabase.com) → **New project**
2. Fill in:
   - **Name:** `flowzync` (only you see this)
   - **Database password:** click Generate, then **save it in your password
     manager**. You won't need it for this site, but it's the only way to reach
     the database directly later and Supabase won't show it again.
   - **Region:** pick the one closest to your visitors. For UK traffic choose
     **West EU (London)** or **Central EU (Frankfurt)**.
3. **Create new project**, then wait ~2 minutes while it provisions.

#### Step 2 — Create the leads table

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

#### Step 3 — Copy your two values

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

#### Step 4 — Add both to Vercel

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

#### Step 5 — Redeploy, then check

Variables only apply to **new** deployments. Vercel → **Deployments** → most
recent → **⋯** → **Redeploy**.

Then open `https://www.flowzync.com/admin` and sign in. **The orange "stored in
memory only" warning should be gone.** If it is, you're connected.

Submit a test enquiry through the contact form and confirm it appears in the
dashboard, then check it's also visible in Supabase → **Table Editor** → `leads`.

#### Quickest way to test the connection

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

#### If the form returns a 400 error

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

#### If the warning is still showing

1. Did you redeploy? Adding variables alone changes nothing.
2. Check for typos in the variable **names** — they're case-sensitive and must be
   exactly `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`.
3. Check you copied the **secret** key, not the publishable/anon one.
4. Check the SQL from Step 2 actually ran — Supabase → Table Editor should show a
   `leads` table.
5. Look at Vercel → **Logs** and submit a test enquiry. The error message there
   will name the actual problem.

---

## 2b. ⚠️ The free-tier pause — already handled, but know about it

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

## 3. Email notifications (optional but useful)

Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` (see `.env.example`) and every new
lead also arrives in your inbox, with the chat transcript attached when it
came from Zync.

Email is best-effort: if sending fails, the lead is still saved. You will
never lose an enquiry because of a mail problem.

---

## How the pieces connect

```
Contact form  ─┐
               ├──►  POST /api/leads  ──►  Supabase `leads` table  ──►  /admin
Zync chat form ─┘                     └──►  email notification
```

Both entry points write the same record shape, which is why the dashboard
shows one list rather than two. The `source` column tells you which was which.

## Statuses

`New` → `Contacted` → `Converted`, or `Not interested`. Change one from the
dropdown in the dashboard; it saves immediately.
