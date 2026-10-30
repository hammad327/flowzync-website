'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/Logo';
import { site } from '@/lib/site';
import { services } from '@/lib/services';
import './chat.css';

const GREETING = "Hi, I’m Zync. Explore Flowzync’s services, see our work or request a quote.";
const INITIAL = { role: 'assistant', content: GREETING, actions: [
  { label: 'Explore services', message: 'What services do you offer?' },
  { label: 'About Flowzync', message: 'Tell me about Flowzync' },
  { label: 'See our work', message: 'Show me your portfolio' },
] };
const safeHref = href => typeof href === 'string' && (/^\/(?!\/)/.test(href) || href === `mailto:${site.email}`);

function Reply({ message, busy, onAction }) {
  const { content, points = [], cards = [], links = [], actions = [], nextQuestion } = message;
  return <div className={`msg ${message.role === 'user' ? 'user' : 'bot'}`}>
    <p>{content}</p>
    {!!points.length && <ul>{points.slice(0, 4).map((p, i) => <li key={i}>{p}</li>)}</ul>}
    {!!cards.length && <div className="zync-cards">{cards.slice(0, 4).map(card => <article key={card.href} className="zync-card">
      <h3>{card.title}</h3><p>{card.description}</p>
      <div>{card.question && <button type="button" disabled={busy} onClick={() => onAction({ message: card.question })}>Explore in chat</button>}
        {safeHref(card.href) && <a href={card.href}>View page <span aria-hidden="true">↗</span></a>}</div>
    </article>)}</div>}
    {!!links.length && <div className="zync-links">{links.filter(l => safeHref(l.href)).map(l => <a key={l.href} href={l.href}>{l.label}<span aria-hidden="true"> ↗</span></a>)}</div>}
    {nextQuestion && <p className="zync-next">{nextQuestion}</p>}
    {!!actions.length && <div className="zync-actions">{actions.map((a, i) => <button type="button" disabled={busy} onClick={() => onAction(a)} key={i}>{a.label}</button>)}</div>}
  </div>;
}

export default function ChatWidget() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([INITIAL]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formErr, setFormErr] = useState('');
  const [lead, setLead] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [captcha, setCaptcha] = useState(null);
  const [answer, setAnswer] = useState('');
  const bodyRef = useRef(null);
  const fabRef = useRef(null);
  const chatInput = useRef(null);
  const formRef = useRef(null);
  const sending = useRef(false);
  const startedAt = useRef(Date.now());
  const loadCaptcha = useCallback(() => {
    fetch('/api/challenge', { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(setCaptcha).catch(() => setCaptcha(null));
  }, []);
  useEffect(() => {
    if (showForm) { loadCaptcha(); setAnswer(''); startedAt.current = Date.now(); formRef.current?.querySelector('input')?.focus(); }
  }, [showForm, loadCaptcha]);
  useEffect(() => {
    if (!open) return;
    if (!showForm) chatInput.current?.focus();
    const escape = e => { if (e.key === 'Escape') { setOpen(false); fabRef.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  useEffect(() => {
    const body = bodyRef.current;
    if (!open || !body) return;
    const latest = body.querySelector('.zync-thread')?.lastElementChild;
    const top = showForm && formRef.current ? formRef.current.offsetTop - 14 : latest ? latest.offsetTop - 14 : body.scrollHeight;
    body.scrollTo({ top, behavior: 'smooth' });
  }, [msgs, busy, open, showForm]);

  const openQuote = (service = '') => {
    setFormErr('');
    if (service) setLead(l => ({ ...l, service }));
    setShowForm(true);
  };
  const send = async text => {
    const q = (text ?? input).trim().slice(0, 1200);
    if (!q || sending.current || saving) return;
    sending.current = true;
    // A new conversation message always dismisses the quote form. Details
    // remain in component memory and the visitor can explicitly reopen it.
    setShowForm(false); setFormErr(''); setInput('');
    const next = [...msgs, { role: 'user', content: q }];
    setMsgs(next); setBusy(true);
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-14).map(({ role, content }) => ({ role, content })) }), signal: AbortSignal.timeout(20000) });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error('Chat unavailable');
      setMsgs(m => [...m, { ...data, role: 'assistant', content: data.reply }]);
    } catch {
      setMsgs(m => [...m, { role: 'assistant', content: 'I couldn’t load that answer. Please try again or contact the team.', links: [{ label: 'Contact Flowzync', href: '/contact' }] }]);
    } finally { sending.current = false; setBusy(false); chatInput.current?.focus(); }
  };
  const onAction = a => a.type === 'quote' ? openQuote(a.service) : a.message && send(a.message);
  const submitLead = async e => {
    e.preventDefault();
    if (saving) return;
    setFormErr('');
    if (!lead.name.trim()) return setFormErr('Please add your name.');
    if (!lead.email.trim() && !lead.phone.trim()) return setFormErr('Add an email or phone number so the team can reply.');
    if (!captcha?.token || !answer.trim()) return setFormErr('Please complete the quick check.');
    setSaving(true);
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'chatbot', sourcePage: path || '/',
          transcript: msgs.map(m => `${m.role === 'user' ? 'Visitor' : 'Zync'}: ${[m.content, ...(m.points || [])].join('\n')}`).join('\n'),
          captchaToken: captcha?.token, captchaAnswer: answer, website: '', startedAt: startedAt.current }), signal: AbortSignal.timeout(25000) });
      const data = await res.json();
      if (!res.ok || !data.ok) { setFormErr(data.error || 'We couldn’t save that. Please try again.'); setAnswer(''); loadCaptcha(); return; }
      setSent(true); setShowForm(false);
      setMsgs(m => [...m, { role: 'assistant', content: `Thanks, ${lead.name.trim().split(' ')[0]}. Your enquiry is with the team.`, points: ['A person will review your project and reply using the contact details you provided.'], actions: [{ label: 'Explore services', message: 'What services do you offer?' }] }]);
    } catch { setFormErr('We couldn’t confirm your enquiry. Please contact the team before trying again.'); setAnswer(''); loadCaptcha(); }
    finally { setSaving(false); }
  };
  if (path?.startsWith('/admin')) return null;
  const set = k => e => setLead(l => ({ ...l, [k]: e.target.value }));
  return <>
    <button ref={fabRef} className="ai-fab" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close chat' : 'Chat with Zync'} aria-expanded={open} aria-controls="zync-chat"><LogoMark variant="white" size={30} animated={false} /><span className="dot" /></button>
    <section id="zync-chat" className={`ai-panel ${open ? 'open' : ''}`} role="dialog" aria-label="Chat with Zync" aria-hidden={!open} inert={!open ? '' : undefined}>
      <header className="ai-head"><div className="bot-av"><LogoMark variant="white" size={24} animated={false} /></div><div><b>Zync</b><span>Flowzync website assistant</span></div><button type="button" className="ai-close" onClick={() => { setOpen(false); fabRef.current?.focus(); }} aria-label="Close chat">×</button></header>
      <div className="zync-toolbar"><span>How can we help?</span><button type="button" disabled={busy || saving} onClick={() => showForm ? setShowForm(false) : openQuote()}>{showForm ? 'Back to chat' : sent ? 'Send another enquiry' : 'Request a quote'}<span aria-hidden="true"> ↗</span></button></div>
      <div className="ai-body" ref={bodyRef}>
        <div className="zync-thread" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" aria-busy={busy}>
          {msgs.map((m, i) => <Reply key={i} message={m} busy={busy || saving} onAction={onAction} />)}
          {busy && <div className="typing" role="status" aria-label="Preparing a reply"><i /><i /><i /></div>}
        </div>
        {showForm && <form className="ai-lead" ref={formRef} onSubmit={submitLead} aria-label="Request a project quote">
          <div className="zync-form-head"><div><span>LET’S TALK</span><h2>Your project, next.</h2></div><button type="button" disabled={saving} aria-label="Close quote form" onClick={() => { setShowForm(false); chatInput.current?.focus(); }}>×</button></div>
          <p>Share a few details. The team will review your requirements and get back to you.</p>
          <fieldset disabled={saving}>
            <label>Your name <span aria-hidden="true">*</span><input value={lead.name} onChange={set('name')} autoComplete="name" required maxLength={120} /></label>
            <label>Email<input value={lead.email} onChange={set('email')} type="email" autoComplete="email" maxLength={200} placeholder="you@company.com" /></label>
            <label>Phone <span className="zync-optional">optional if email provided</span><input value={lead.phone} onChange={set('phone')} type="tel" autoComplete="tel" maxLength={50} placeholder="+country code" /></label>
            <p className="zync-field-note">Provide an email or phone number for a reply.</p>
            <label>Service<select value={lead.service} onChange={set('service')}><option value="">Choose a service</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}<option>Something else</option></select></label>
            <label>Budget <span className="zync-optional">optional · USD</span><select value={lead.budget} onChange={set('budget')}><option value="">Select a range</option><option>Under $1,000</option><option>$1,000 – $3,000</option><option>$3,000 – $8,000</option><option>$8,000+</option><option>Not sure yet</option></select></label>
            <label>Project brief<textarea value={lead.message} onChange={set('message')} rows={3} maxLength={4000} placeholder="What would you like to build or improve?" /></label>
            <div className="ai-captcha"><label htmlFor="zync-check">{captcha ? `Quick check: ${captcha.question}` : 'Loading quick check…'}</label><input id="zync-check" value={answer} onChange={e => setAnswer(e.target.value)} inputMode="numeric" autoComplete="off" aria-label="Quick check answer" maxLength={8} />{!captcha && <button type="button" onClick={loadCaptcha}>Retry</button>}</div>
            {formErr && <p className="ai-lead-err" role="alert">{formErr}</p>}
            <p className="zync-field-note">Your details and this conversation go to the team. <a href="/privacy">Privacy</a></p>
            <button className="zync-submit" type="submit" disabled={!captcha || saving}>{saving ? 'Sending enquiry…' : 'Send enquiry'}<span aria-hidden="true"> ↗</span></button>
          </fieldset>
          <button className="zync-back" type="button" disabled={saving} onClick={() => { setShowForm(false); chatInput.current?.focus(); }}>Continue chatting</button>
        </form>}
      </div>
      <p className="zync-privacy">Website information only. Avoid sensitive details. <a href="/privacy">Privacy</a></p>
      <form className="ai-input" onSubmit={e => { e.preventDefault(); send(); }}><input ref={chatInput} value={input} onChange={e => setInput(e.target.value)} maxLength={1200} placeholder="Ask about Flowzync…" aria-label="Chat message" disabled={saving} /><button type="submit" disabled={busy || saving || !input.trim()} aria-label="Send message"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg></button></form>
    </section>
  </>;
}
