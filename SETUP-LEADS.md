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

### Set up Supabase (about 5 minutes, free tier is plenty)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run this once:

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

3. Go to **Settings → API** and copy:
   - **Project URL** → `SUPABASE_URL`
   - **service_role** key → `SUPABASE_SERVICE_KEY`

4. Add both to your Vercel environment variables and redeploy.

> The `service_role` key bypasses Row Level Security, so it must **only**
> ever live in server environment variables. Never put it in client code,
> and never prefix it with `NEXT_PUBLIC_`.

The orange warning in the dashboard disappears once this is working.

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
