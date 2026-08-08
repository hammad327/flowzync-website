'use client';
// ─────────────────────────────────────────────────────────────
//  ZYNC — the site assistant.
//
//  Two jobs:
//   1. Answer questions about the services, using /api/chat.
//   2. Capture a lead. Once someone shows buying intent, a short
//      inline form appears in the conversation. Filling it in
//      creates a real lead record (same table as the contact
//      form) rather than leaving the details buried in a chat log.
//
//  The form is deliberately explicit rather than the bot trying to
//  parse details out of free text — people mistype, and a lead
//  with a broken email address is worse than no lead.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogoMark } from '@/components/Logo';
import { site } from '@/lib/site';

const QUICK = ['What services do you offer?', 'How does your process work?', 'I want a quote'];

// Phrases that mean "I am considering buying", which is when the
// lead form earns its place on screen.
const INTENT = /\b(quote|price|pricing|cost|how much|budget|hire|start|get started|book|call|contact|interested|proposal|estimate)\b/i;

const SERVICES = [
  'Custom website design', 'WordPress website design', 'Elementor design',
  'WooCommerce development', 'Landing page', 'GHL funnel',
  'Business automation', 'Shopify store', 'SEO', 'Something else',
];

export default function ChatWidget() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { role: 'assistant', content: "Hi, I'm Zync — Flowzync's assistant. Ask me about custom websites, WordPress, Elementor, WooCommerce, funnels or automation. If you'd like a quote, I can take your details and pass them to the team." },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formErr, setFormErr] = useState('');
  const [lead, setLead] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const bodyRef = useRef(null);

  // The dashboard is not a place for a sales chat bubble.
  const hidden = path?.startsWith('/admin');

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, busy, open, showForm, sent]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setInput('');
    const next = [...msgs, { role: 'user', content: q }];
    setMsgs(next);
    setBusy(true);

    if (INTENT.test(q) && !sent) setShowForm(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-14) }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: 'assistant', content: data.reply || "I didn't quite catch that — could you rephrase?" }]);
    } catch {
      setMsgs((m) => [...m, { role: 'assistant', content: `I can't reach the server right now. Please try again, or email ${site.email} and a person will pick it up.` }]);
    } finally {
      setBusy(false);
    }
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setFormErr('');
    if (!lead.name.trim()) return setFormErr('Please add your name.');
    if (!lead.email.trim() && !lead.phone.trim()) return setFormErr('Please add an email or a phone number so we can reply.');
    setSaving(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lead,
          source: 'chatbot',
          sourcePage: path || '/',
          transcript: msgs.map((m) => `${m.role === 'user' ? 'Visitor' : 'Zync'}: ${m.content}`).join('\n'),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error);
      setSent(true);
      setShowForm(false);
      setMsgs((m) => [...m, {
        role: 'assistant',
        content: `Thanks ${lead.name.split(' ')[0]} — that's with the team now, along with what we discussed. Anything else you'd like to know in the meantime?`,
      }]);
    } catch {
      setFormErr(`That didn't save. Please try again, or email ${site.email}.`);
    } finally {
      setSaving(false);
    }
  };

  if (hidden) return null;

  const set = (k) => (e) => setLead((l) => ({ ...l, [k]: e.target.value }));

  return (
    <>
      <button className="ai-fab" onClick={() => setOpen(!open)} aria-label={open ? 'Close chat' : 'Chat with Zync'} aria-expanded={open}>
        <LogoMark variant="white" size={30} animated={false} />
        <span className="dot" />
      </button>

      <div className={`ai-panel ${open ? 'open' : ''}`} role="dialog" aria-label="Chat with Zync">
        <div className="ai-head">
          <div className="bot-av"><LogoMark variant="white" size={24} animated={false} /></div>
          <div><b>Zync</b><span><i className="on" /> Flowzync assistant</span></div>
          <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        <div className="ai-body" ref={bodyRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role === 'user' ? 'user' : 'bot'}`}>{m.content}</div>
          ))}
          {busy && <div className="typing"><i /><i /><i /></div>}

          {showForm && !sent && (
            <form className="ai-lead" onSubmit={submitLead}>
              <b>Leave your details</b>
              <p>The team will pick this up along with our conversation.</p>
              <input value={lead.name} onChange={set('name')} placeholder="Your name" aria-label="Your name" />
              <input value={lead.email} onChange={set('email')} type="email" placeholder="Email" aria-label="Email" />
              <input value={lead.phone} onChange={set('phone')} placeholder="Phone (optional)" aria-label="Phone" />
              <select value={lead.service} onChange={set('service')} aria-label="What you need">
                <option value="">What do you need?</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select value={lead.budget} onChange={set('budget')} aria-label="Budget range">
                <option value="">Budget range (optional)</option>
                <option>Under $1,000</option><option>$1,000 – $3,000</option>
                <option>$3,000 – $8,000</option><option>$8,000+</option><option>Not sure yet</option>
              </select>
              <textarea value={lead.message} onChange={set('message')} rows={2} placeholder="Anything else we should know?" aria-label="Message" />
              {formErr && <span className="ai-lead-err">{formErr}</span>}
              <div className="ai-lead-row">
                <button type="submit" disabled={saving}>{saving ? 'Sending…' : 'Send to the team'}</button>
                <button type="button" className="ghost" onClick={() => setShowForm(false)}>Not now</button>
              </div>
            </form>
          )}
        </div>

        {msgs.length <= 1 && (
          <div className="ai-quick">
            {QUICK.map((q) => <button key={q} onClick={() => send(q)}>{q}</button>)}
          </div>
        )}

        <div className="ai-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Type your question…"
            aria-label="Chat message"
          />
          <button onClick={() => send()} aria-label="Send message">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}
