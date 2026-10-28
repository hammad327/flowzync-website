import Link from 'next/link';
import Image from 'next/image';
import HomeHero from '@/components/HomeHero';
import { LogoMark } from '@/components/Logo';
import { Icon } from '@/components/Icons';
import { services } from '@/lib/services';
import { projects } from '@/lib/projects';
import { getAllPosts } from '@/lib/posts';
import { industries } from '@/lib/industries';
import { site } from '@/lib/site';
import { hreflangFor } from '@/lib/locales';
import { openGraph, twitterCard } from '@/lib/meta';
import './home.css';

const title = 'Custom Website Design & Business Automation | Flowzync';
const description = 'Custom website design, WordPress development, GoHighLevel funnels and business automation. Connect your website to a better customer journey with Flowzync.';
export const metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: '/', languages: hreflangFor(site.url, '/') },
  openGraph: openGraph({ title, description, url: site.url }),
  twitter: twitterCard({ title, description }),
};

const faqs = [
  ['What does Flowzync do?', 'Flowzync designs and builds custom websites, WordPress and Elementor sites, WooCommerce stores, landing pages and GoHighLevel funnels. We also set up CRMs, automate follow-up and offer technical SEO and ongoing website care.'],
  ['Can you improve my existing website?', 'Yes. We can review the design, content, technical SEO and performance of your current website. Depending on what you need, we can improve the existing site or plan a redesign while keeping important URLs and content in place.'],
  ['How much does a website or automation project cost?', 'The cost depends on the pages, functionality and integrations you need. Tell us about your business and we will provide an itemised proposal with the scope agreed before work starts.'],
  ['Do you work with clients internationally?', 'Yes. Flowzync is a remote studio working with clients worldwide. Calls are arranged around your working hours, with project progress and feedback shared throughout the build.'],
  ['Will I be able to edit my website after launch?', 'Yes. We plan the editing experience around your team and provide handover guidance. Ongoing care plans are available for updates, security, backups and content changes.'],
  ['Can you connect my website to GoHighLevel?', 'Yes. We connect forms, calendars, pipelines and follow-up workflows in GoHighLevel. We can also connect tools through Zapier and Make, depending on your current systems.'],
];
const groups = [
  { number:'01', icon:'palette', label:'Design & development', title:'A website that feels\nlike your business.', text:'A clear, considered experience that gives people a reason to stay, explore and get in touch.', links:['custom-website-design','wordpress-website-design','elementor-design','woocommerce-development'], href:'custom-website-design', cta:'Explore website design' },
  { number:'02', icon:'funnel', label:'Funnels & CRM', title:'A clearer path from\ninterest to enquiry.', text:'Focused pages, booking journeys and a CRM that keeps the next step within reach.', links:['landing-pages','ghl-funnels','ghl-crm-setup','ghl-funnels-for-care-agencies'], href:'ghl-funnels', cta:'Explore funnels & CRM' },
  { number:'03', icon:'bolt', label:'Automation & growth', title:'Less busywork.\nMore moving forward.', text:'Connect the tools behind your website, simplify follow-up and keep improving after launch.', links:['automations','seo-optimization','maintenance-support'], href:'automations', cta:'Explore automation' },
];
const steps = [
  ['Discover', 'We listen first.', 'Your audience, your goals and the parts of your business that could work better.', 'A clear brief & scope'],
  ['Plan & design', 'Make it tangible.', 'A thoughtful page structure and a design direction you can review before we build.', 'A shared direction'],
  ['Build & connect', 'Bring it together.', 'Your website, forms and workflows built together, then checked across devices.', 'A connected experience'],
  ['Launch & support', 'Move forward.', 'A practical handover, guidance for your team and support options for what comes next.', 'Confidence after launch'],
];
function Arrow({ diagonal = false, ...props }) { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
function Label({ children, light = false }) { return <div className={`hp-label${light ? ' hp-label-light' : ''}`}><span />{children}</div>; }
function Button({ children, href = '/contact', secondary = false }) { return <Link href={href} className={`hp-button${secondary ? ' hp-button-secondary' : ''}`}><span>{children}</span><Arrow diagonal /></Link>; }

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featured = ['heaven-sent-sleep-baby-care-funnel','nf-living','roller-shutters-online'].map(slug => projects.find(p => p.slug === slug)).filter(Boolean);
  const schema = { '@context':'https://schema.org', '@graph': [
    { '@type':'WebPage', '@id':`${site.url}/#webpage`, url:site.url, name:title, description, isPartOf:{'@id':`${site.url}/#website`}, about:{'@id':`${site.url}/#organization`}, inLanguage:'en' },
    { '@type':'FAQPage', mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}})) },
  ] };
  return <div className="premium-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <HomeHero />
    <div className="hp-wrap"><div className="hp-platform-strip"><p>The right tools.<br /><strong>Working together.</strong></p><ul aria-label="Platforms we work with"><li>WordPress</li><li>GoHighLevel</li><li>WooCommerce</li><li>Figma</li><li>Zapier<span>_</span></li><li>Make.</li></ul></div></div>

    <section className="hp-work" id="selected-work" aria-labelledby="work-heading"><div className="hp-wrap"><div className="hp-section-head"><div><Label>Selected work</Label><h2 id="work-heading">Different businesses.<br /><em>The same care.</em></h2></div><div className="hp-head-aside"><p>Design shaped around the people<br />on the other side of the screen.</p><Link href="/portfolio" className="hp-text-link">View all projects <Arrow diagonal /></Link></div></div>
      <div className="hp-project-grid">{featured.map((project,i)=><article className={`hp-project hp-project-${i}`} key={project.slug}><Link className="hp-project-art" href={`/portfolio/${project.slug}`} aria-label={`View ${project.title}`}><div className="hp-project-browser"><div className="hp-project-chrome"><span /><small>FLOWZYNC / SELECTED WORK</small><span>↗</span></div><Image src={project.img} alt={project.title} width={project.shot.w} height={project.shot.h} sizes="(max-width:700px) 85vw, 44vw" /></div><span className="hp-open" aria-hidden="true"><Arrow diagonal /></span></Link><div className="hp-project-meta"><div><h3><Link href={`/portfolio/${project.slug}`}>{project.title.split(' — ')[0]}</Link></h3><p>{i===0?'A reassuring GoHighLevel funnel for parents.':i===1?'A WordPress platform for a contractor network.':'A WooCommerce store with product configuration.'}</p></div><span>{project.badge}</span></div></article>)}</div>
    </div></section>

    <section className="hp-services" id="home-services" aria-labelledby="services-heading"><div className="hp-wrap"><div className="hp-section-head"><div><Label>What we do</Label><h2 id="services-heading">Everything your website needs.<br /><em>One connected team.</em></h2></div><p className="hp-head-copy">Custom website design, GoHighLevel funnels and business automation, planned as one experience.</p></div>
      <div className="hp-service-grid">{groups.map(group=><article className="hp-service" key={group.number}><div className="hp-service-top"><span>{group.number} / {group.label}</span><Icon name={group.icon} color="currentColor" size={25} /></div><h3>{group.title.split('\n').map((line,i)=><span key={i}>{line}{i===0&&<br />}</span>)}</h3><p>{group.text}</p><ul>{group.links.map(slug=>{const service=services.find(s=>s.slug===slug);return service&&<li key={slug}><Link href={`/services/${slug}`}>{service.title}<span aria-hidden="true">↗</span></Link></li>})}</ul><Link className="hp-service-cta" href={`/services/${group.href}`}>{group.cta}<Arrow /></Link></article>)}</div>
      <div className="hp-service-bottom"><span>Need something more specific?</span><Link href="/services" className="hp-text-link">Explore all services <Arrow diagonal /></Link></div>
    </div></section>

    <section className="hp-connection" aria-labelledby="connection-heading"><div className="hp-wrap hp-connection-inner"><div className="hp-connection-copy"><Label light>The Flowzync approach</Label><h2 id="connection-heading">Your website is<br />a starting point.<br /><em>Connection is the difference.</em></h2><p>A form submission should have somewhere to go. A booking should reach your calendar. The next reply should be easy to manage.</p><p>We think about the journey beyond the page, then build the design and the systems to support it.</p><Link href="/services/automations" className="hp-text-link">See how we connect your tools <Arrow diagonal /></Link></div><div className="hp-system" aria-label="Example customer enquiry workflow"><div className="hp-system-top"><span>ONE CONNECTED EXPERIENCE</span><LogoMark variant="onDark" size={31}/></div>{[['01','Make the right impression','A clear, useful website that feels like your business.','Website'],['02','Give every enquiry a home','Forms and bookings connected to your CRM.','CRM'],['03','Keep the conversation moving','Follow-up, reminders and the next step.','Automation']].map(([n,t,d,badge])=><div className="hp-system-row" key={n}><span className="hp-system-no">{n}</span><div><h3>{t}</h3><p>{d}</p></div><span className="hp-system-badge">{badge}</span></div>)}<div className="hp-system-footer"><span className="hp-live-dot"/> Thoughtfully designed. Connected from the start.</div></div></div></section>

    <section className="hp-foundations" aria-labelledby="foundations-heading"><div className="hp-wrap"><div className="hp-section-head"><div><Label>Built on the right foundations</Label><h2 id="foundations-heading">Good design goes<br /><em>below the surface.</em></h2></div><p className="hp-head-copy">The details that make your website useful today, and easier to look after tomorrow.</p></div><div className="hp-foundation-grid">{[['01','Search from the start','Clear page structure, descriptive content, internal links and technical SEO considered during the build.','seo-optimization','Explore SEO'],['02','Made for real people','Responsive layouts, readable type and straightforward journeys across desktop and mobile.','ui-ux-design','Explore UI & UX'],['03','Ready for everyday use','An editing experience your team can understand, with handover guidance and ongoing care options.','maintenance-support','Explore website care']].map(([n,t,d,slug,link])=><article key={n}><span className="hp-foundation-num">{n}</span><h3>{t}</h3><p>{d}</p><Link href={`/services/${slug}`} className="hp-text-link">{link}<Arrow diagonal /></Link></article>)}</div><div className="hp-industry-line"><span>Built around your business</span><div>{industries.slice(0,5).map(industry=><Link key={industry.slug} href={`/industries/${industry.slug}`}>{industry.trade}</Link>)}<Link href="/industries">All industries ↗</Link></div></div></div></section>

    <section className="hp-process" aria-labelledby="process-heading"><div className="hp-wrap"><div className="hp-section-head"><div><Label>How we work</Label><h2 id="process-heading">A clear process.<br /><em>Room for your ambition.</em></h2></div><Link href="/about" className="hp-text-link">Meet Flowzync <Arrow diagonal /></Link></div><div className="hp-process-grid">{steps.map(([label,t,d,takeaway],i)=><article key={label}><span className="hp-step-num">0{i+1}</span><span className="hp-step-label">{label}</span><h3>{t}</h3><p>{d}</p><small>{takeaway}<Arrow diagonal /></small></article>)}</div></div></section>

    {posts.length>0&&<section className="hp-insights" aria-labelledby="insights-heading"><div className="hp-wrap"><div className="hp-section-head"><div><Label>Ideas & insights</Label><h2 id="insights-heading">A little clarity.<br /><em>A better next step.</em></h2></div><Link href="/blog" className="hp-text-link">Explore the journal <Arrow diagonal /></Link></div><div className="hp-post-grid">{posts.map(post=><article className="hp-post" key={post.slug}><Link className="hp-post-image" href={`/blog/${post.slug}`}><Image src={post.cover || '/brand/sync-tile.svg'} alt={`Article illustration: ${post.title}`} width={600} height={380} sizes="(max-width:700px) 90vw, 30vw" /></Link><div className="hp-post-meta"><span>{post.category}</span><span>{post.readTime} min read</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><Link href={`/blog/${post.slug}`} className="hp-text-link" aria-label={`Read ${post.title}`}>Read article <Arrow diagonal /></Link></article>)}</div></div></section>}

    <section className="hp-faq" aria-labelledby="faq-heading"><div className="hp-wrap hp-faq-grid"><div><Label>Before we begin</Label><h2 id="faq-heading">Good questions.<br /><em>Clear answers.</em></h2><p>Have something else in mind?<br />Let’s talk about your project.</p><a className="hp-text-link" href={`mailto:${site.email}`}>{site.email}<Arrow diagonal/></a></div><div className="hp-faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>

    <section className="hp-contact" aria-labelledby="contact-heading"><div className="hp-wrap"><div className="hp-contact-box"><div className="hp-contact-mark" aria-hidden="true"><LogoMark variant="mono" size={290}/></div><div className="hp-contact-content"><Label>What’s next for your business?</Label><h2 id="contact-heading">Let’s build something<br /><em>that works together.</em></h2><p>A better website. A smoother workflow. A fresh start.<br />Tell us what you have in mind.</p><Button>Tell us about your project</Button><span className="hp-contact-note">A conversation first. A clear proposal next.</span></div></div></div></section>
  </div>;
}
