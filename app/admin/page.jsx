'use client';
// ─────────────────────────────────────────────────────────────
//  /admin — every lead from the contact form and from Zync, in
//  one table. Search, filter, and move a lead through its status
//  so follow-up never depends on somebody's memory.
//
//  The password is kept in sessionStorage, so a refresh does not
//  log you out but closing the tab does.
// ─────────────────────────────────────────────────────────────
import { Fragment, useCallback, useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const STATUSES = ['New', 'Contacted', 'Converted', 'Not interested'];
const STATUS_CLASS = {
  New: 'st-new', Contacted: 'st-cont',
  Converted: 'st-conv', 'Not interested': 'st-no',
};

export default function AdminPage() {
  const [pass, setPass] = useState('');
  const [token, setToken] = useState(null);
  const [leads, setLeads] = useState([]);
  const [warn, setWarn] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('all');
  const [service, setService] = useState('all');
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem('fz_admin');
    if (saved) setToken(saved);
  }, []);

  const load = useCallback(async (t) => {
    setLoading(true); setErr('');
    try {
      const res = await fetch('/api/admin', { headers: { Authorization: `Bearer ${t}` } });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data.error || 'That password was not accepted.');
        if (res.status === 401) { sessionStorage.removeItem('fz_admin'); setToken(null); }
        return;
      }
      setLeads(data.leads || []);
      setWarn(!data.usingDatabase);
      setFallback(Boolean(data.fallback));
      sessionStorage.setItem('fz_admin', t);
    } catch {
      setErr('Could not reach the server. Check your connection and try again.');
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { if (token) load(token); }, [token, load]);

  const signIn = (e) => {
    e.preventDefault();
    if (!pass.trim()) return;
    setToken(pass.trim());
  };

  const setLeadStatus = async (id, next) => {
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status: next } : l)));
    await fetch('/api/admin', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id, status: next }),
    }).catch(() => setErr('That status change did not save. Reload and try again.'));
  };

  const services = [...new Set(leads.map((l) => l.service).filter(Boolean))];

  const shown = leads.filter((l) => {
    if (status !== 'all' && l.status !== status) return false;
    if (service !== 'all' && l.service !== service) return false;
    if (!q.trim()) return true;
    const hay = [l.name, l.email, l.phone, l.service, l.message, l.source_page]
      .filter(Boolean).join(' ').toLowerCase();
    return hay.includes(q.toLowerCase());
  });

  const counts = STATUSES.reduce((a, s) => ({ ...a, [s]: leads.filter((l) => l.status === s).length }), {});
  const when = (d) => {
    if (!d) return '—';
    const dt = new Date(d);
    return dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
      + ' · ' + dt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  // ── locked ──────────────────────────────────────────────────
  if (!token) {
    return (
      <div className="adm-lock">
        <form className="adm-lockbox" onSubmit={signIn}>
          <Logo variant="color" size={40} wordSize={22} />
          <h1>Lead dashboard</h1>
          <p>Enter the dashboard password to continue.</p>
          <input
            type="password" value={pass} autoFocus
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password" aria-label="Dashboard password"
          />
          <button type="submit" className="btn btn-p"><span>Open dashboard</span></button>
          {err && <span className="adm-err">{err}</span>}
        </form>
      </div>
    );
  }

  // ── dashboard ───────────────────────────────────────────────
  return (
    <div className="adm">
      <header className="adm-head">
        <Logo variant="color" size={34} wordSize={19} />
        <div className="adm-headr">
          <span>{leads.length} lead{leads.length === 1 ? '' : 's'}</span>
          <button className="adm-ghost" onClick={() => load(token)} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
          <button className="adm-ghost" onClick={() => { sessionStorage.removeItem('fz_admin'); setToken(null); setLeads([]); }}>
            Sign out
          </button>
        </div>
      </header>

      {warn && (
        <div className="adm-warn">
          <b>Leads are being stored in memory only.</b>
          <span>They will disappear when the server restarts. Add SUPABASE_URL and SUPABASE_SERVICE_KEY to store them permanently — see SETUP-LEADS.md.</span>
        </div>
      )}
      {fallback && !warn && (
        <div className="adm-warn adm-warn-err">
          <b>Some leads could not be written to the database.</b>
          <span>
            They were kept in memory and emailed to you, so nothing was lost — but they
            will disappear when the server restarts. Open /api/keep-alive to see the exact
            cause, fix it, then copy those leads somewhere safe.
          </span>
        </div>
      )}
      {err && <div className="adm-warn adm-warn-err"><b>{err}</b></div>}

      <div className="adm-stats">
        {STATUSES.map((s) => (
          <button key={s} className={`adm-stat ${status === s ? 'on' : ''}`} onClick={() => setStatus(status === s ? 'all' : s)}>
            <b>{counts[s] || 0}</b><span>{s}</span>
          </button>
        ))}
      </div>

      <div className="adm-filters">
        <input
          className="adm-search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="Search name, email, phone or message" aria-label="Search leads"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
          <option value="all">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={service} onChange={(e) => setService(e.target.value)} aria-label="Filter by service">
          <option value="all">All services</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {shown.length === 0 ? (
        <div className="adm-empty">
          <p>{leads.length === 0 ? 'No leads yet. The first form or chat submission will appear here.' : 'No leads match those filters.'}</p>
        </div>
      ) : (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Received</th><th>Name</th><th>Contact</th><th>Service</th>
                <th>Source</th><th>Status</th><th />
              </tr>
            </thead>
            <tbody>
              {shown.map((l) => (
                <Fragment key={l.id}>
                  <tr>
                    <td className="adm-when">{when(l.created_at)}</td>
                    <td><b>{l.name || '—'}</b></td>
                    <td>
                      <div className="adm-contact">
                        {l.email && <a href={`mailto:${l.email}`}>{l.email}</a>}
                        {l.phone && <a href={`tel:${l.phone}`}>{l.phone}</a>}
                        {!l.email && !l.phone && '—'}
                      </div>
                    </td>
                    <td>{l.service || '—'}</td>
                    <td>
                      <span className={`adm-src ${l.source === 'chatbot' ? 'src-bot' : ''}`}>
                        {l.source === 'chatbot' ? 'Zync chat' : 'Form'}
                      </span>
                      {l._fallback && <span className="adm-src src-warn" title="Held in memory, not saved to the database">memory</span>}
                    </td>
                    <td>
                      <select
                        className={`adm-status ${STATUS_CLASS[l.status] || ''}`}
                        value={l.status} onChange={(e) => setLeadStatus(l.id, e.target.value)}
                        aria-label={`Status for ${l.name || 'lead'}`}
                      >
                        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td>
                      <button className="adm-ghost sm" onClick={() => setOpen(open === l.id ? null : l.id)}>
                        {open === l.id ? 'Hide' : 'Details'}
                      </button>
                    </td>
                  </tr>
                  {open === l.id && (
                    <tr className="adm-detail">
                      <td colSpan={7}>
                        <div className="adm-detailgrid">
                          {l.budget && <p><em>Budget</em>{l.budget}</p>}
                          {l.timeline && <p><em>Timeline</em>{l.timeline}</p>}
                          {l.source_page && <p><em>Came from</em>{l.source_page}</p>}
                        </div>
                        {l.message && <><h4>Message</h4><pre>{l.message}</pre></>}
                        {l.transcript && <><h4>Chat transcript</h4><pre>{l.transcript}</pre></>}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
