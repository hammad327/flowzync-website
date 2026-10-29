'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Logo from '@/components/Logo';
const NAV = [['overview', 'Overview', '01'], ['articles', 'Journal studio', '02'], ['leads', 'Lead inbox', '03'], ['visibility', 'Search & audience', '04'], ['outreach', 'Outreach', '05'], ['connections', 'Connections', '06']];
const TODAY = () => new Date().toLocaleDateString('en-CA', {
  timeZone: 'Asia/Karachi'
});
const blank = () => ({
  slug: '',
  title: '',
  seoTitle: '',
  description: '',
  date: TODAY(),
  category: 'Insights',
  cover: '',
  photo: '',
  tags: [],
  faqs: [],
  content: '',
  draft: true
});
const statuses = ['New', 'Contacted', 'Converted', 'Not interested'];
const fmt = n => n === undefined || n === null ? '—' : Number(n).toLocaleString();
async function request(url, options = {}) {
  const r = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    cache: 'no-store'
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || 'Request failed.');
  return j;
}
const post = (url, data, method = 'POST') => request(url, {
  method,
  body: JSON.stringify(data)
});
export default function Admin() {
  const [signed, setSigned] = useState(false),
    [checking, setChecking] = useState(true),
    [password, setPassword] = useState(''),
    [tab, setTab] = useState('overview'),
    [error, setError] = useState(''),
    [notice, setNotice] = useState(''),
    [busy, setBusy] = useState(false);
  const [leads, setLeads] = useState([]),
    [leadStatus, setLeadStatus] = useState('all'),
    [query, setQuery] = useState(''),
    [leadOpen, setLeadOpen] = useState(null),
    [storage, setStorage] = useState({});
  const [articles, setArticles] = useState([]),
    [canPublish, setCanPublish] = useState(false),
    [article, setArticle] = useState(null),
    [dirty, setDirty] = useState(false),
    [preview, setPreview] = useState(''),
    [faqsText, setFaqsText] = useState('[]');
  const [inventory,setInventory]=useState(null);
  const [metrics, setMetrics] = useState(null),
    [inspect, setInspect] = useState('https://flowzync.com/'),
    [inspection, setInspection] = useState(null);
  const stopSending = useRef(false);
  const [sending, setSending] = useState(false);
  const [campaigns, setCampaigns] = useState([]),
    [campaignError, setCampaignError] = useState(''),
    [selectedCampaign, setSelectedCampaign] = useState(null),
    [recipients, setRecipients] = useState([]),
    [campaign, setCampaign] = useState({
      name: '',
      channel: 'email',
      subject: '',
      body: '',
      recipients: '',
      consentNote: ''
    });
  const run = async fn => {
    setBusy(true);
    setError('');
    setNotice('');
    try {
      await fn();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };
  const loadCampaigns = async () => {
    try {
      const j = await request('/api/admin/campaigns');
      setCampaigns(j.campaigns);
      setCampaignError('');
    } catch (e) {
      setCampaignError(e.message);
    }
  };
  const refresh = useCallback(async () => {
    const results = await Promise.allSettled([request('/api/admin'), request('/api/admin/posts'), request('/api/admin/metrics')]);
    if (results[0].status === 'fulfilled') {
      setLeads(results[0].value.leads || []);
      setStorage(results[0].value);
    } else setError(results[0].reason.message);
    if (results[1].status === 'fulfilled') {
      setArticles(results[1].value.articles || []);
      setCanPublish(results[1].value.canPublish);
    }
    if (results[2].status === 'fulfilled') setMetrics(results[2].value);
  }, []);
  useEffect(() => {
    fetch('/api/admin/session', {
      cache: 'no-store'
    }).then(r => setSigned(r.ok)).finally(() => setChecking(false));
    sessionStorage.removeItem('fz_admin');
  }, []);
  useEffect(() => {
    if (signed) {
      refresh();
      loadCampaigns();
    }
  }, [signed, refresh]);
  useEffect(() => {
    const fn = e => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', fn);
    return () => window.removeEventListener('beforeunload', fn);
  }, [dirty]);
  function navigate(next) {
    if (dirty && !window.confirm('Leave this article with unsaved changes?')) return;
    setTab(next);
    setDirty(false);
    setError('');
    setNotice('');
  }
  function change(key, value) {
    setArticle(a => ({
      ...a,
      [key]: value
    }));
    setDirty(true);
  }
  async function openArticle(p) {
    if (dirty && !window.confirm('Discard unsaved article changes?')) return;
    const j = await request('/api/admin/posts?file=' + encodeURIComponent(p.file));
    setArticle(j.article);
    setFaqsText(JSON.stringify(j.article.faqs || [], null, 2));
    setPreview('');
    setDirty(false);
  }
  async function saveArticle(draft) {
    let faqs;
    try {
      faqs = JSON.parse(faqsText);
      if (!Array.isArray(faqs)) throw new Error();
    } catch {
      throw new Error('FAQs must be a JSON list of {"q":"Question","a":"Answer"}.');
    }
    const j = await post('/api/admin/posts', {
      ...article,
      faqs,
      draft
    });
    setArticle(a => ({
      ...a,
      file: j.file,
      sha: j.sha,
      draft
    }));
    setDirty(false);
    setNotice(`${draft ? 'Draft saved' : 'Publication committed'}. Deployment is building; allow it to finish before checking the public URL. Commit ${j.commit.slice(0, 7)}.`);
    const list = await request('/api/admin/posts');
    setArticles(list.articles);
  }
  async function upload(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    await run(async () => {
      const form = new FormData();
      form.append('file', f);
      const r = await fetch('/api/admin/media', {
        method: 'POST',
        body: form
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error);
      change('cover', j.url);
      setNotice('Image committed. It becomes available when deployment finishes. Save the article to use it.');
    });
    e.target.value = '';
  }
  function insert(kind) {
    const examples = {
      link: '[Helpful link](https://example.com)',
      image: '![Describe the image](/images/uploads/your-image.png)',
      heading: '\n## Section heading\n',
      table: '\n| Option | When to use it |\n| --- | --- |\n| First | Explain clearly |\n'
    };
    change('content', (article.content || '') + '\n' + examples[kind]);
  }
  useEffect(()=>{if(signed&&tab==='visibility')request('/api/admin/indexing').then(setInventory).catch(e=>setError(e.message));},[signed,tab]);
  const shown = leads.filter(l => (leadStatus === 'all' || l.status === leadStatus) && [l.name, l.email, l.phone, l.message, l.service].join(' ').toLowerCase().includes(query.toLowerCase()));
  const totalViews = metrics?.audience?.data?.totals?.views;
  const keywordRows = metrics?.search?.data?.rows || [];
  const counts = Object.fromEntries(statuses.map(s => [s, leads.filter(l => l.status === s).length]));
  const campaignCount = [...new Set(campaign.recipients.split(/[\n,;]+/).map(x => x.trim()).filter(Boolean))].length;
  async function viewRecipients(c) {
    setSelectedCampaign(c);
    const j = await request('/api/admin/campaigns?id=' + c.id);
    setRecipients(j.recipients);
  }
  async function approveCampaign(c) {
    if (!window.confirm(`Approve sending this ${c.channel} campaign to its stored recipients? Review the recipient list and content first. Provider usage charges may apply.`)) return;
    await post('/api/admin/campaigns', {
      id: c.id,
      status: 'approved',
      confirm: true
    }, 'PATCH');
    await loadCampaigns();
    setNotice('Campaign approved. Use Send approved queue to process recipients in batches of five.');
  }
  if (checking) return <div className="studio-lock"><p>Opening your workspace…</p></div>;
  if (!signed) return <div className="studio-lock"><form onSubmit={e => {
      e.preventDefault();
      run(async () => {
        await post('/api/admin/session', {
          password
        });
        setPassword('');
        setSigned(true);
      });
    }}><Logo variant="color" size={48} wordSize={25} /><span className="studio-eyebrow">FLOWZYNC WORKSPACE</span><h1>Good work starts here.</h1><p>Manage your journal, enquiries and business growth in one place.</p><label>Dashboard password<input type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} /></label><button disabled={busy} className="studio-primary">{busy ? 'Signing in…' : 'Open workspace →'}</button>{error && <p role="alert" className="studio-error">{error}</p>}<a href="/">Back to Flowzync</a></form><div className="studio-lock-art"><span>CREATE.</span><span>CONNECT.</span><span>GROW.</span><p>A clearer view of your next step.</p></div></div>;
  return <div className="studio"><aside className="studio-sidebar"><Logo variant="color" size={34} wordSize={20} /><span className="studio-eyebrow">YOUR BUSINESS, IN SYNC</span><nav aria-label="Workspace">{NAV.map(([id, label, n]) => <button className={tab === id ? 'selected' : ''} key={id} onClick={() => navigate(id)}><span>{n}</span>{label}</button>)}</nav><div className="studio-side-bottom"><a href="/" target="_blank" rel="noreferrer">View website ↗</a><button onClick={() => run(async () => {
          await request('/api/admin/session', {
            method: 'DELETE'
          });
          setSigned(false);
          setArticle(null);
          setLeads([]);
        })}>Sign out</button><small>Private workspace · noindex</small></div></aside><div className="studio-main"><header className="studio-top"><div><span className="studio-eyebrow">FLOWZYNC / {NAV.find(x => x[0] === tab)?.[1].toUpperCase()}</span><h1>{{
              overview: 'A clear view. A better next move.',
              articles: 'Ideas, ready to publish.',
              leads: 'Every enquiry deserves care.',
              visibility: 'See what is working.',
              outreach: 'Start better conversations.',
              connections: 'Connected, with confidence.'
            }[tab]}</h1></div><button className="studio-secondary" disabled={busy} onClick={() => run(refresh)}>Refresh data ↻</button></header>{error && <div className="studio-alert error" role="alert">{error}</div>}{notice && <div className="studio-alert" role="status">{notice}</div>}
 {tab === 'overview' && <><div className="studio-stats"><Metric title="Total enquiries" value={leads.length} note="Contact forms + Zync chat" /><Metric title="Ready for follow-up" value={counts.New} note="New leads in your inbox" /><Metric title="Articles" value={articles.length} note="Journal inventory, including drafts" /><Metric title="Page views" value={totalViews} note={metrics?.audience?.connected ? 'GA4 · last 28 complete days' : 'Connect GA4 for real audience data'} /></div><div className="studio-two"><section className="studio-panel"><span className="studio-eyebrow">YOUR NEXT STEPS</span><h2>Keep momentum.</h2><div className="studio-action-list"><button onClick={() => navigate('articles')}><b>Publish something useful</b><span>Write, add images and links, preview, publish. ↗</span></button><button onClick={() => navigate('leads')}><b>Follow up on {counts.New || 0} new enquiries</b><span>See the context before your next conversation. ↗</span></button><button onClick={() => navigate('connections')}><b>Finish your connections</b><span>Unlock content publishing, reporting and sending. ↗</span></button></div></section><section className="studio-panel studio-dark"><span className="studio-eyebrow">MEASURE WHAT MATTERS</span><h2>Visibility is a signal.<br />Enquiries are the outcome.</h2><p>Search clicks, AI citations and website sessions measure different things. Use them together with qualified leads to decide what to improve.</p><button onClick={() => navigate('visibility')} className="studio-secondary">Open visibility report ↗</button></section></div>{(!storage.usingDatabase || storage.fallback || storage.databaseError) && <div className="studio-alert error">{storage.databaseError ? storage.databaseError : !storage.usingDatabase ? 'Lead storage is running in memory. Connect durable storage before relying on it.' : 'Some leads are held in temporary memory. Check the database connection and export those leads.'}</div>}<section className="studio-panel"><h2>Recent enquiries</h2><LeadTable leads={leads.slice(0, 5)} onOpen={setLeadOpen} /></section></>}
 {tab === 'articles' && <div className="studio-editor-grid"><section className="studio-panel studio-article-list"><div className="studio-panel-top"><h2>Journal library</h2><button onClick={() => {
              if (dirty && !window.confirm('Discard unsaved changes?')) return;
              setArticle(blank());
              setFaqsText('[]');
              setDirty(false);
              setPreview('');
            }} className="studio-primary">+ New</button></div>{!canPublish && <p className="studio-muted">Read access is available. Connect repository publishing in Connections to save drafts, upload images and publish.</p>}{articles.map(p => <button className={article?.file === p.file ? 'article-item active' : 'article-item'} key={p.file} onClick={() => run(() => openArticle(p))}><strong>{p.title || p.slug.replaceAll('-', ' ')}</strong><small>{p.draft ? 'Draft' : p.date || 'Open to edit'} · /blog/{p.slug}</small></button>)}</section><section className="studio-panel">{!article ? <div className="studio-empty"><span className="studio-big-number">Aa</span><h2>Make your next idea useful.</h2><p>Choose an article or start a new draft.</p></div> : <><div className="studio-panel-top"><div><span className="studio-eyebrow">{article.file ? 'EDIT ARTICLE' : 'NEW ARTICLE'}</span><h2>{article.draft ? 'Draft' : 'Published'}{dirty ? ' · Unsaved' : ''}</h2></div><div className="studio-buttons"><button disabled={busy || !canPublish} className="studio-secondary" onClick={() => run(() => saveArticle(true))}>Save draft</button><button disabled={busy || !canPublish} className="studio-primary" onClick={() => run(() => saveArticle(false))}>Publish article ↗</button></div></div><div className="studio-form-grid"><Field label="Article title" value={article.title} onChange={v => {
                change('title', v);
                if (!article.file && (!article.slug || article.slug === article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))) change('slug', v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
              }} /><Field label="URL slug · locked after creation" value={article.slug} disabled={Boolean(article.file)} onChange={v => change('slug', v)} /><Field label="SEO title" value={article.seoTitle} onChange={v => change('seoTitle', v)} /><Field label="Category" value={article.category} onChange={v => change('category', v)} /><Field label="Publication date" type="date" value={article.date} onChange={v => change('date', v)} /><Field label="Tags · comma separated" value={article.tags.join(', ')} onChange={v => change('tags', v.split(',').map(x => x.trim()).filter(Boolean))} /></div><label>Search description<textarea rows={3} value={article.description} onChange={e => change('description', e.target.value)} /><small className="studio-muted">{article.description.length} characters · write an accurate summary, not a keyword list.</small></label><div className="studio-form-grid"><Field label="Cover image URL" value={article.cover} onChange={v => change('cover', v)} /><label>Upload cover · PNG, JPEG, WebP ≤ 2 MB<input type="file" accept="image/png,image/jpeg,image/webp" disabled={busy || !canPublish} onChange={upload} /></label><Field label="Optional photograph URL" value={article.photo} onChange={v => change('photo', v)} /></div><div className="studio-toolbar"><strong>Article content</strong>{['heading', 'link', 'image', 'table'].map(k => <button key={k} onClick={() => insert(k)}>+ {k}</button>)}<button disabled={busy} onClick={() => run(async () => setPreview((await post('/api/admin/preview', {
                content: article.content
              })).html))}>Preview</button></div><textarea className="studio-markdown" rows={20} value={article.content} onChange={e => change('content', e.target.value)} placeholder="Write Markdown. Use ## headings, [links](https://…), images, lists and tables." />{preview && <div className="studio-preview prose" dangerouslySetInnerHTML={{
              __html: preview
            }} />}<label>Frequently asked questions · JSON list<textarea rows={5} value={faqsText} onChange={e => {
                setFaqsText(e.target.value);
                setDirty(true);
              }} placeholder={'[{"q":"Question?","a":"Clear answer."}]'} /></label><div className="studio-search-preview"><small>GOOGLE PREVIEW · ILLUSTRATIVE</small><span>flowzync.com › blog › {article.slug || 'your-article'}</span><h3>{article.seoTitle || article.title || 'Your article title'}</h3><p>{article.description || 'Your search description appears here. Search engines may choose a different snippet.'}</p></div><p className="studio-muted">Publishing creates a versioned repository commit. The live URL updates only after deployment succeeds. Saving an existing published article as a draft removes it from public publication on the next deployment.</p></>}</section></div>}
 {tab === 'leads' && <><div className="studio-stats">{statuses.map(s => <Metric key={s} title={s} value={counts[s]} note="Lead status" />)}</div><section className="studio-panel"><div className="studio-filters"><input placeholder="Search name, contact, service or message" aria-label="Search enquiries" value={query} onChange={e => setQuery(e.target.value)} /><select aria-label="Lead status" value={leadStatus} onChange={e => setLeadStatus(e.target.value)}><option value="all">All statuses</option>{statuses.map(s => <option key={s}>{s}</option>)}</select><button onClick={() => {
              const rows = [['Name', 'Email', 'Phone', 'Service', 'Status', 'Created'], ...shown.map(l => [l.name, l.email, l.phone, l.service, l.status, l.created_at])];
              const csv = rows.map(r => r.map(v => '"' + String(v || '').replace(/^[\t\r\n =+@-]/, "'").replaceAll('"', '""') + '"').join(',')).join('\n');
              const a = document.createElement('a');
              a.href = URL.createObjectURL(new Blob([csv], {
                type: 'text/csv'
              }));
              a.download = 'flowzync-leads.csv';
              a.click();
              URL.revokeObjectURL(a.href);
            }} className="studio-secondary">Export CSV</button></div><LeadTable leads={shown} onOpen={setLeadOpen} /></section></>}
 {leadOpen && <div className="studio-modal" role="dialog" aria-modal="true" aria-label="Enquiry details"><section className="studio-panel"><button className="studio-close" onClick={() => setLeadOpen(null)} aria-label="Close enquiry">×</button><span className="studio-eyebrow">ENQUIRY DETAILS</span><h2>{leadOpen.name || 'New enquiry'}</h2><p>{leadOpen.email} · {leadOpen.phone}</p><p><b>{leadOpen.service}</b> · {leadOpen.budget} · {leadOpen.timeline}</p><label>Status<select value={leadOpen.status} onChange={e => run(async () => {
              const next = e.target.value;
              await post('/api/admin', {
                id: leadOpen.id,
                status: next
              }, 'PATCH');
              setLeadOpen(l => ({
                ...l,
                status: next
              }));
              await refresh();
            })}>{statuses.map(s => <option key={s}>{s}</option>)}</select></label><p className="studio-muted">Source: {leadOpen.source} · {leadOpen.source_page}</p><pre>{leadOpen.message || 'No message provided.'}</pre>{leadOpen.transcript && <details><summary>Chat transcript</summary><pre>{leadOpen.transcript}</pre></details>}</section></div>}
 {tab === 'visibility' && <><div className="studio-stats"><Metric title="Website sessions" value={metrics?.audience?.data?.totals?.sessions} note="GA4 · last 28 complete days" /><Metric title="Page views" value={totalViews} note="GA4 · not unique people" /><Metric title="Google indexed snapshot" value={metrics?.indexing?.googleIndexed} note="27 Oct 2026 · historical account report" /><Metric title="Bing indexed snapshot" value={metrics?.indexing?.bingIndexed} note="28 Oct 2026 · historical account report" /></div><section className="studio-panel"><div className="studio-panel-top"><h2>Queries bringing search visibility</h2><span className="studio-badge">{metrics?.search?.connected ? 'Connected · Google API' : 'Connection needed'}</span></div>{!metrics?.search?.connected ? <Empty text={metrics?.search?.error || 'Connect Google Search Console to show actual keyword clicks, impressions and average position.'} /> : <><p className="studio-muted">{metrics.search.data.start} to {metrics.search.data.end} · {metrics.search.data.note}</p><div className="studio-table-scroll"><table><thead><tr><th>Query</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg. position</th></tr></thead><tbody>{keywordRows.map(r => <tr key={r.keys.join('|')}><td>{r.keys.join(' / ')}</td><td>{fmt(r.clicks)}</td><td>{fmt(r.impressions)}</td><td>{(r.ctr * 100).toFixed(1)}%</td><td>{r.position.toFixed(1)}</td></tr>)}</tbody></table></div>{!keywordRows.length && <Empty text="No query rows returned for this property and period." />}</>}</section><div className="studio-two"><section className="studio-panel"><h2>Audience over time</h2>{!metrics?.audience?.connected ? <Empty text={metrics?.audience?.error || 'Connect GA4 for visitor reports.'} /> : <><p className="studio-muted">{metrics.audience.data.period} · daily users, sessions, views</p><div className="studio-table-scroll"><table><thead><tr><th>Date</th><th>Active users</th><th>Sessions</th><th>Views</th></tr></thead><tbody>{metrics.audience.data.rows.map(r => <tr key={r.dimensionValues[0].value}><td>{r.dimensionValues[0].value}</td>{r.metricValues.map((v, i) => <td key={i}>{fmt(v.value)}</td>)}</tr>)}</tbody></table></div></>}</section><section className="studio-panel"><h2>Google URL inspection</h2><p className="studio-muted">Read the current indexed snapshot for one URL. This does not request indexing or run a live crawl.</p><input aria-label="URL to inspect" value={inspect} onChange={e => setInspect(e.target.value)} /><button disabled={busy} className="studio-primary" onClick={() => run(async () => setInspection(await request('/api/admin/metrics?inspect=' + encodeURIComponent(inspect))))}>Inspect URL</button>{inspection && <pre>{JSON.stringify(inspection.inspectionResult?.indexStatusResult || inspection, null, 2)}</pre>}<h3>Technical audit</h3><p>{metrics?.audit?.details || 'Saved audit available in the repository.'}</p><p className="studio-muted">There is no official overall Google SEO score. PageSpeed lab scores, indexed totals, average query positions and AI citations are separate measurements. Saved indexed counts above are dated snapshots.</p><a href="https://search.google.com/search-console" target="_blank" rel="noreferrer">Google Search Console ↗</a><br /><a href="https://www.bing.com/webmasters/" target="_blank" rel="noreferrer">Bing Webmaster Tools ↗</a></section></div></>}
 {tab === 'visibility' && <section className="studio-panel"><div className="studio-panel-top"><div><span className="studio-eyebrow">PAGE INVENTORY</span><h2>{inventory?.urls?.length||'—'} public URLs</h2></div><button className="studio-secondary" disabled={busy} onClick={()=>run(async()=>{const j=await post('/api/admin/indexing',{});setNotice(`IndexNow accepted ${j.submitted} URLs. This does not guarantee indexing.`);})}>Notify IndexNow of current sitemap</button></div><p className="studio-muted">{inventory?.note} Audit date: {inventory?.auditDate||'—'}. No overall ranking score is implied.</p><div className="studio-table-scroll"><table><thead><tr><th>Page</th><th>Modified</th><th>Saved technical audit</th><th>Google index snapshot</th></tr></thead><tbody>{inventory?.urls?.map(p=><tr key={p.url}><td><a href={p.url} target="_blank" rel="noreferrer">{new URL(p.url).pathname}</a></td><td>{String(p.modified||'').slice(0,10)}</td><td>{p.findings.length?p.findings.map(f=>f.message).join('; '):'No findings · 28 Oct audit'}</td><td><button disabled={busy} onClick={()=>run(async()=>{setInspect(p.url);setInspection(await request('/api/admin/metrics?inspect='+encodeURIComponent(p.url)));window.scrollTo({top:300,behavior:'smooth'});})}>Inspect</button></td></tr>)}</tbody></table></div></section>}
 {tab === 'outreach' && <><div className="studio-alert">Draft → review recipients → approve → send a batch → inspect results. No campaign sends automatically when saved. WhatsApp uses an approved one-variable template and opted-in international numbers; account discovery is not performed.</div>{campaignError && <div className="studio-alert error">{campaignError}</div>}<div className="studio-two"><section className="studio-panel"><h2>Create a campaign</h2><Field label="Campaign name" value={campaign.name} onChange={v => setCampaign(c => ({
              ...c,
              name: v
            }))} /><label>Channel<select value={campaign.channel} onChange={e => setCampaign(c => ({
                ...c,
                channel: e.target.value
              }))}><option value="email">Email · Resend</option><option value="whatsapp">WhatsApp · official Cloud API</option></select></label>{campaign.channel === 'email' && <Field label="Email subject" value={campaign.subject} onChange={v => setCampaign(c => ({
              ...c,
              subject: v
            }))} />}<label>{campaign.channel === 'email' ? 'Message' : 'Approved template body variable'}<textarea rows={7} value={campaign.body} onChange={e => setCampaign(c => ({
                ...c,
                body: e.target.value
              }))} /></label><label>Recipient list · one address per line<textarea rows={6} value={campaign.recipients} onChange={e => setCampaign(c => ({
                ...c,
                recipients: e.target.value
              }))} placeholder={campaign.channel === 'email' ? 'person@example.com' : 'Use opted-in numbers, e.g. +447700900123'} /><small className="studio-muted">{campaignCount} unique entries · up to 500 · duplicates removed on save</small></label><label>Import a plain-text list<input type="file" accept=".txt,.csv" onChange={async e => {
                const f = e.target.files?.[0];
                if (f) {
                  if (f.size > 100000) {
                    setError('List is too large.');
                    return;
                  }
                  const text = await f.text();
                  setCampaign(c => ({
                    ...c,
                    recipients: text
                  }));
                }
              }} /></label><label>Recipient source / permission record<textarea rows={3} value={campaign.consentNote} onChange={e => setCampaign(c => ({
                ...c,
                consentNote: e.target.value
              }))} placeholder="Where did this list come from? For WhatsApp, record how these recipients opted in to Flowzync messages." /></label><button className="studio-primary" disabled={busy} onClick={() => run(async () => {
              const j = await post('/api/admin/campaigns', campaign);
              setNotice(`Draft created with ${j.recipients} unique recipients. Nothing sent.`);
              await loadCampaigns();
            })}>Save campaign draft</button></section><section className="studio-panel"><div className="studio-panel-top"><h2>Your campaigns</h2><button className="studio-secondary" onClick={() => run(loadCampaigns)}>Refresh</button></div>{!campaigns.length && <Empty text="Your first campaign will appear here. Sending remains disabled until storage and provider connections are ready." />}{campaigns.map(c => <div className="studio-campaign" key={c.id}><div><strong>{c.name}</strong><span className="studio-badge">{c.channel} · {c.status}</span></div><p>{c.subject || 'WhatsApp template message'}</p><div className="studio-buttons"><button onClick={() => run(() => viewRecipients(c))}>Review recipients</button>{c.status !== 'approved' ? <button disabled={busy} onClick={() => run(() => approveCampaign(c))}>Approve campaign</button> : <button onClick={() => run(async () => {
                  await post('/api/admin/campaigns', {
                    id: c.id,
                    status: 'paused'
                  }, 'PATCH');
                  await loadCampaigns();
                })}>Pause</button>}</div></div>)}<button className="studio-primary" disabled={busy || !campaigns.some(c => c.status === 'approved')} onClick={() => run(async () => {
              stopSending.current = false;
              setSending(true);
              let total = 0;
              try {
                for (let i = 0; i < 100 && !stopSending.current; i++) {
                  const j = await post('/api/admin/campaigns/process', {});
                  total += j.results.length;
                  setNotice(`${total} recipients processed. Provider acceptance is not delivery. You can stop after this batch.`);
                  if (!j.results.length) break;
                }
                if (selectedCampaign) await viewRecipients(selectedCampaign);
              } finally {
                setSending(false);
              }
            })}>Send approved queue</button>{sending && <button className="studio-secondary" onClick={() => {
              stopSending.current = true;
              setNotice('Stopping after the current batch.');
            }}>Stop after this batch</button>}<p className="studio-muted">Only approved campaigns are processed. Keep this workspace open while sending; the durable queue can resume after closing it. Uncertain sends are held for provider-log review instead of automatically retried. Provider billing and account limits apply.</p>{selectedCampaign && <><h3>{selectedCampaign.name} · recipient review</h3><pre>{selectedCampaign.body}</pre><p className="studio-muted">Permission/source: {selectedCampaign.consent_note}</p><div className="studio-table-scroll"><table><thead><tr><th>Recipient</th><th>Status</th><th>Provider reference</th></tr></thead><tbody>{recipients.map(r => <tr key={r.id}><td>{r.address}</td><td>{r.status}{r.error && <small>{r.error}</small>}</td><td>{r.provider_id || '—'}</td></tr>)}</tbody></table></div></>}</section></div></>}
 {tab === 'connections' && <><div className="studio-alert">Credentials stay in server environment variables. Never paste API keys into article content or campaign messages. Connection badges show configuration presence; successful report/send requests verify provider access.</div><div className="studio-connection-grid">{[['cms', 'Journal publishing', 'CONTENT_GITHUB_TOKEN', 'Fine-grained repository Contents read/write access. Set CONTENT_GITHUB_REPO if using a different repository. Images and posts create versioned commits.'], ['google', 'Search Console', 'GOOGLE_SERVICE_ACCOUNT_JSON', 'Enable Search Console API and grant the service account read access to the Flowzync property. GSC_PROPERTY defaults to https://flowzync.com/.'], ['ga4', 'Audience analytics', 'GA4_PROPERTY_ID', 'Enable Analytics Data API; grant the service account Viewer access to your actual GA4 property. Reporting does not install tracking.'], ['database', 'Campaign storage', 'SUPABASE_URL + SUPABASE_SERVICE_KEY', 'Run migrations/20261028-admin.sql once. The private campaign queue, progress and suppressions never go into the public repository.'], ['email', 'Email delivery', 'RESEND_API_KEY + OUTREACH_FROM', 'Verify the sender domain; set OUTREACH_POSTAL_ADDRESS and a long UNSUBSCRIBE_SECRET. Save drafts before approving sends.'], ['whatsapp', 'WhatsApp Business', 'WHATSAPP_ACCESS_TOKEN + WHATSAPP_PHONE_NUMBER_ID', 'Configure an approved one-variable body template, language and API version. Add signed delivery/STOP webhooks before sending. No phone-account enumeration.']].map(([key, title, env, text]) => <section className="studio-panel" key={key}><span className={'studio-badge ' + (metrics?.integrations?.[key] ? 'ready' : '')}>{metrics?.integrations?.[key] ? 'Configured' : 'Setup needed'}</span><h2>{title}</h2><code>{env}</code><p>{text}</p></section>)}</div><section className="studio-panel"><h2>Backlinks that support your work</h2><p>Build relevant profiles and client-approved case-study credits. Links are earned from real businesses; putting an outbound link on your own site does not create a backlink.</p><ul><li>Clutch: an accurate web design, WordPress and automation company profile, with permission-based client reviews. Basic profile availability does not guarantee a website backlink; paid directory links are not required.</li><li>WordPress.org: publish useful, production-ready plugin/theme contributions where you have relevant expertise. Do not post promotional support links.</li><li>Existing clients: an approved project credit or detailed case study linked from their site.</li><li>LinkedIn company profile: consistent name, services and canonical website URL.</li></ul><p className="studio-muted">These are opportunities, not links already placed or guaranteed ranking improvements. Account creation, identity claims and outreach need owner details.</p></section></>}
 <footer className="studio-footer">Flowzync Workspace <span>Private operations · {new Date().getFullYear()}</span></footer></div></div>;
}
function Field({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false
}) {
  return <label>{label}<input type={type} value={value || ''} disabled={disabled} onChange={e => onChange(e.target.value)} /></label>;
}
function Metric({
  title,
  value,
  note
}) {
  return <section className="studio-metric"><span>{title}</span><strong>{fmt(value)}</strong><small>{note}</small></section>;
}
function Empty({
  text
}) {
  return <div className="studio-empty"><p>{text}</p></div>;
}
function LeadTable({
  leads,
  onOpen
}) {
  return !leads.length ? <Empty text="No enquiries to show yet." /> : <div className="studio-table-scroll"><table><thead><tr><th>Contact</th><th>Service</th><th>Received</th><th>Status</th><th /></tr></thead><tbody>{leads.map(l => <tr key={l.id}><td><strong>{l.name || 'Enquiry'}</strong><small>{l.email || l.phone}</small></td><td>{l.service || '—'}</td><td>{l.created_at ? new Date(l.created_at).toLocaleDateString('en-GB') : '—'}</td><td><span className="studio-badge">{l.status}</span></td><td><button onClick={() => onOpen(l)}>Details ↗</button></td></tr>)}</tbody></table></div>;
}
