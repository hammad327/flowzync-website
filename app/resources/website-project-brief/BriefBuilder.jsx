'use client';
import { useState } from 'react';
const sections = [
  ['business', 'Your business & audience', 'Who do you help, what do you offer, and which markets do you serve?'],
  ['goal', 'The main goal', 'What should visitors do: enquire, book, buy or something else? What is not working today?'],
  ['pages', 'Pages & essential features', 'List the important pages, forms, booking steps or store features. Separate must-haves from later ideas.'],
  ['systems', 'Tools & follow-up', 'Which website platform, CRM, email or booking tools do you use? What should happen after an enquiry?'],
  ['content', 'Content & brand assets', 'What copy, logo, photos, projects or testimonials are ready? What still needs creating?'],
  ['scope', 'Scope, timing & decisions', 'Who approves the work? Are there fixed dates, budget preferences or existing URLs to preserve?'],
];
export default function BriefBuilder() {
  const [values, setValues] = useState({});
  const [notice, setNotice] = useState('');
  const completed = sections.filter(([key]) => values[key]?.trim()).length;
  const text = () => 'WEBSITE & AUTOMATION PROJECT BRIEF\nPrepared with Flowzync\nhttps://flowzync.com/resources/website-project-brief\n\n' + sections.map(([key, label]) => label.toUpperCase() + '\n' + (values[key]?.trim() || 'To discuss') + '\n').join('\n');
  const download = () => {
    const url = URL.createObjectURL(new Blob([text()], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'website-project-brief.txt'; a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Your brief has been downloaded. Review it before sharing.');
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(text()); setNotice('Brief copied. You can paste it into a document or project enquiry.'); }
    catch { setNotice('Copy is unavailable in this browser. Use Download my brief instead.'); }
  };
  return <div className="brief-tool" aria-labelledby="brief-tool-heading">
    <div className="brief-tool-top"><div><span className="brief-kicker">YOUR WORKSPACE</span><h2 id="brief-tool-heading">Turn the idea into a clear brief.</h2></div><span className="brief-progress">{completed} / 6 sections started</span></div>
    <p className="brief-muted">Your answers stay on this page until you copy or download them. No signup or email required. Download before leaving; refreshing clears the form.</p>
    <div className="brief-fields">{sections.map(([key, label, hint], i) => <label key={key}><span><small>{String(i + 1).padStart(2, '0')}</small>{label}</span><textarea rows={4} maxLength={2500} value={values[key] || ''} onChange={e => setValues(v => ({ ...v, [key]: e.target.value }))} placeholder={hint} /><em>{hint}</em></label>)}</div>
    <div className="brief-actions"><button className="btn btn-p" type="button" onClick={download}>Download my brief <span aria-hidden="true">↗</span></button><button className="btn btn-o" type="button" onClick={copy}>Copy brief</button></div>
    {notice && <p className="brief-notice" role="status">{notice}</p>}
  </div>;
}
