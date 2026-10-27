'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/services';
import Logo from '@/components/Logo';

const groups = [
  { title:'Websites & e-commerce', note:'Make the right first impression.', slugs:['custom-website-design','wordpress-website-design','elementor-design','woocommerce-development'] },
  { title:'Funnels & customer journeys', note:'Turn interest into a next step.', slugs:['landing-pages','ghl-funnels','ghl-crm-setup','ghl-funnels-for-care-agencies'] },
  { title:'Growth & ongoing care', note:'Keep your business moving.', slugs:['automations','seo-optimization','ui-ux-design','graphic-design','maintenance-support'] },
];
const descriptions = {
 'custom-website-design':'A distinctive website, built around your brand.', 'wordpress-website-design':'Flexible websites your team can manage.', 'elementor-design':'Custom layouts with everyday editing in mind.', 'woocommerce-development':'A considered experience from product to checkout.', 'landing-pages':'Focused pages for your next campaign.', 'ghl-funnels':'Connected pages, forms and booking journeys.', 'ghl-crm-setup':'An organised home for your leads and follow-up.', 'ghl-funnels-for-care-agencies':'Enquiries and recruitment for care providers.', 'automations':'Connect tools and simplify repetitive tasks.', 'seo-optimization':'Stronger search foundations and useful content.', 'ui-ux-design':'Clearer, more intuitive digital experiences.', 'graphic-design':'A consistent identity across your business.', 'maintenance-support':'Ongoing updates, support and website care.',
};
export default function Nav() {
 const [open,setOpen]=useState(false),[dd,setDd]=useState(false);
 const timer=useRef(null),navRef=useRef(null),serviceButton=useRef(null),burger=useRef(null);
 const path=usePathname();
 const desktop=()=>typeof window!=='undefined'&&window.innerWidth>1100&&window.matchMedia('(hover: hover) and (pointer: fine)').matches;
 const close=()=>{setOpen(false);setDd(false);clearTimeout(timer.current);};
 useEffect(()=>{close();},[path]);
 useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open');},[open]);
 useEffect(()=>{
  const escape=e=>{if(e.key==='Escape'){if(dd){setDd(false);serviceButton.current?.focus();}else if(open){setOpen(false);burger.current?.focus();}}};
  const outside=e=>{if(!navRef.current?.contains(e.target))close();};
  document.addEventListener('keydown',escape);document.addEventListener('pointerdown',outside);
  return()=>{document.removeEventListener('keydown',escape);document.removeEventListener('pointerdown',outside);clearTimeout(timer.current);};
 },[dd,open]);
 const active=p=>p==='/'?path==='/':path?.startsWith(p);
 return <nav className="nav" aria-label="Main navigation" ref={navRef}>
  <Link href="/" onClick={close} aria-label="Flowzync home" className="nav-logo"><Logo variant="color" size={42} wordSize={24} showWord/></Link>
  <div id="primary-navigation" className={`nav-links ${open?'open':''}`}>
   <Link href="/" className={active('/')?'active':''} aria-current={active('/')?'page':undefined} onClick={close}>Home</Link>
   <div className={`nav-drop ${dd?'dd-open':''}`} onMouseEnter={()=>{if(desktop()){clearTimeout(timer.current);setDd(true);}}} onMouseLeave={()=>{if(desktop())timer.current=setTimeout(()=>setDd(false),200);}}>
    <button ref={serviceButton} type="button" className={active('/services')?'active':''} onClick={()=>setDd(desktop()?true:!dd)} aria-expanded={dd} aria-controls="services-mega">Services<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></button>
    <div id="services-mega" className="nav-drop-menu mega-menu"><div className="mega-grid">{groups.map((group,index)=><div className="mega-group" key={group.title}><div className="mega-group-heading"><span>0{index+1}</span><div><h2>{group.title}</h2><p>{group.note}</p></div></div><ul>{group.slugs.map(slug=>{const s=services.find(item=>item.slug===slug);return s&&<li key={slug}><Link href={`/services/${slug}`} onClick={close}><span><b>{s.title}</b><small>{descriptions[slug]}</small></span><span className="mega-arrow" aria-hidden="true">↗</span></Link></li>})}</ul></div>)}</div><div className="mega-bottom"><Link href="/services" onClick={close}>Explore all services <span aria-hidden="true">↗</span></Link><span>Not sure where to start? <Link href="/contact" onClick={close}>Tell us about your project →</Link></span></div></div>
   </div>
   <Link href="/industries" className={active('/industries')?'active':''} onClick={close}>Industries</Link>
   <Link href="/portfolio" className={active('/portfolio')?'active':''} onClick={close}>Our work</Link>
   <Link href="/blog" className={active('/blog')?'active':''} onClick={close}>Insights</Link>
   <Link href="/about" className={active('/about')?'active':''} onClick={close}>About</Link>
   <Link href="/contact" className={`nav-cta ${active('/contact')?'active':''}`} onClick={close}>Start a project <span aria-hidden="true">↗</span></Link>
  </div>
  <button ref={burger} className={`burger ${open?'open':''}`} onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="primary-navigation"><span/><span/><span/></button>
 </nav>;
}
