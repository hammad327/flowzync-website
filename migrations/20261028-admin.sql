-- Run once in the existing Supabase project's SQL editor. No public client access.
create table if not exists public.outreach_campaigns (
 id uuid primary key default gen_random_uuid(), name text not null,
 channel text not null check(channel in ('email','whatsapp')), subject text not null default '',
 body text not null, status text not null default 'draft' check(status in ('draft','approved','paused','completed')),
 consent_note text not null, created_at timestamptz not null default now()
);
create table if not exists public.outreach_recipients (
 id uuid primary key default gen_random_uuid(), campaign_id uuid not null references public.outreach_campaigns(id),
 address text not null, status text not null default 'queued' check(status in ('queued','processing','accepted','delivered','read','failed','suppressed','uncertain')),
 provider_id text, error text, updated_at timestamptz not null default now(), unique(campaign_id,address)
);
create table if not exists public.outreach_suppressions (
 channel text not null, address text not null, created_at timestamptz not null default now(), primary key(channel,address)
);
alter table public.outreach_campaigns enable row level security;
alter table public.outreach_recipients enable row level security;
alter table public.outreach_suppressions enable row level security;
revoke all on public.outreach_campaigns, public.outreach_recipients, public.outreach_suppressions from anon, authenticated;
grant all on public.outreach_campaigns, public.outreach_recipients, public.outreach_suppressions to service_role;
create or replace function public.claim_outreach(batch_size integer default 5)
returns setof public.outreach_recipients language plpgsql security definer set search_path=public as $$
begin
 -- A crash after provider submission is ambiguous. Never silently re-send it.
 update outreach_recipients set status='uncertain',error='Worker interrupted; inspect provider before retry',updated_at=now()
 where status='processing' and updated_at<now()-interval '10 minutes';
 return query update outreach_recipients r set status='processing',updated_at=now()
 where r.id in (select q.id from outreach_recipients q join outreach_campaigns c on c.id=q.campaign_id
 where q.status='queued' and c.status='approved' order by q.updated_at for update of q skip locked limit least(greatest(batch_size,1),10)) returning r.*;
end $$;
revoke all on function public.claim_outreach(integer) from public, anon, authenticated;
grant execute on function public.claim_outreach(integer) to service_role;
