#!/usr/bin/env python3
"""Audit every prerendered public page. Run after npm run build; --live checks production too.
Outputs one CSV row per page and JSON findings; no score implies guaranteed indexing/approval.
"""
import argparse,collections,concurrent.futures,csv,datetime,hashlib,json,re,sys,time,urllib.parse,urllib.request,xml.etree.ElementTree as ET
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
HOST='https://flowzync.com'
TODAY=datetime.date(2026,10,27)
class Page(HTMLParser):
 def __init__(self,html):
  super().__init__(convert_charrefs=True);self.meta={};self.links=[];self.ids=[];self.images=[];self.scripts=[];self.schemas=[];self.maintext=[];self.headings=[];self.anchors=[];self.title='';self.lang='';self.canon=[];self.hreflang={};self.main=0;self.skip=0;self.in_title=False;self.hlevel=0;self.htext='';self.jsonscript=False;self.jsontext='';self.inhead=False;self.feed(html)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang','')
  if a.get('id'):self.ids.append(a['id'])
  if tag=='head':self.inhead=True
  if tag=='main':self.main+=1
  if tag=='title':self.in_title=True
  if tag in ('script','style'):
   self.skip+=1
   if tag=='script':
    self.scripts.append({**a,'head':self.inhead})
    if a.get('type')=='application/ld+json':self.jsonscript=True;self.jsontext=''
  if tag=='meta':self.meta[a.get('name') or a.get('property')]=a.get('content','')
  if tag=='link':
   if a.get('rel')=='canonical':self.canon.append(a.get('href',''))
   if a.get('hreflang'):self.hreflang[a['hreflang']]=a.get('href')
  if tag=='img':self.images.append(a)
  if tag=='a':self.links.append((a.get('href',''),bool(self.main)))
  if re.fullmatch('h[1-6]',tag):self.hlevel=int(tag[1]);self.htext=''
 def handle_endtag(self,tag):
  if tag=='head':self.inhead=False
  if tag=='main':self.main=max(0,self.main-1)
  if tag=='title':self.in_title=False
  if tag in ('script','style'):
   if tag=='script' and self.jsonscript:
    try:self.schemas.append(json.loads(self.jsontext))
    except Exception as e:self.schemas.append({'parse_error':str(e)})
    self.jsonscript=False
   self.skip=max(0,self.skip-1)
  if re.fullmatch('h[1-6]',tag):self.headings.append((self.hlevel,self.htext.strip()));self.hlevel=0
 def handle_data(self,data):
  if self.jsonscript:self.jsontext+=data
  if self.skip:return
  if self.in_title:self.title+=data
  if self.main:self.maintext.append(data)
  if self.hlevel:self.htext+=data
 def text(self):return re.sub(r'\s+',' ',' '.join(self.maintext)).strip()
def entities(value):
 if isinstance(value,list):
  for i in value:yield from entities(i)
 elif isinstance(value,dict):
  if '@type' in value:yield value
  for v in value.values():
   if isinstance(v,(list,dict)):yield from entities(v)
def norm(s):return re.sub(r'[^\w]+',' ',unescape(re.sub('<[^>]+>',' ',s))).strip().lower()
def public_file(url):
 u=urllib.parse.urlsplit(url)
 if u.netloc and u.netloc not in ('flowzync.com','www.flowzync.com'):return None
 if u.path=='/_next/image':return public_file(urllib.parse.parse_qs(u.query).get('url',[''])[0])
 return ROOT/'public'/urllib.parse.unquote(u.path).lstrip('/')
def request(url):
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'FlowzyncSiteAudit/1.0'})
  with urllib.request.urlopen(req,timeout=20) as res:
   b=res.read();return {'status':res.status,'final':res.url,'headers':dict(res.headers),'html':b.decode('utf-8','replace')}
 except Exception as e:return {'status':getattr(e,'code',0),'error':str(e)}
def run(live=False):
 files=sorted((ROOT/'.next/server/app').rglob('*.html'));pages={};findings=[]
 def flag(route,kind,message):findings.append({'route':route,'severity':kind,'message':message})
 for f in files:
  route='/'+str(f.relative_to(ROOT/'.next/server/app'))[:-5]
  if route=='/index':route='/'
  if route in ('/admin','/_not-found'):continue
  pages[route]=Page(f.read_text())
 sitemap=ET.fromstring((ROOT/'.next/server/app/sitemap.xml.body').read_text())
 urls=[e.text for e in sitemap.findall('.//{*}loc')]
 sitemap_routes={urllib.parse.urlsplit(u).path or '/' for u in urls}
 if sitemap_routes!=set(pages):flag('/sitemap.xml','error','Sitemap/page inventory mismatch: '+str(sitemap_routes^set(pages)))
 inbound=collections.Counter()
 for route,p in pages.items():
  if len(p.canon)!=1 or p.canon[0].rstrip('/')!=(HOST+route).rstrip('/'):flag(route,'error','Missing, duplicate or incorrect canonical')
  if not p.title or len(p.title)<8:flag(route,'error','Missing/descriptively empty title')
  if len(p.meta.get('description',''))<25:flag(route,'error','Missing/descriptively empty description')
  if '…' in p.meta.get('description',''):flag(route,'warning','Authored description contains ellipsis')
  if not p.lang:flag(route,'error','Document language missing')
  if 'noindex' in p.meta.get('robots','') or 'noindex' in p.meta.get('googlebot',''):flag(route,'error','Public page unexpectedly noindex')
  if sum(n==1 for n,_ in p.headings)!=1:flag(route,'error','Expected one descriptive H1')
  if not p.meta.get('viewport'):flag(route,'error','Responsive viewport missing')
  for key in ('og:title','og:description','og:image','og:url','twitter:card','twitter:title','twitter:description'):
   if not p.meta.get(key):flag(route,'error','Missing social metadata: '+key)
  if p.meta.get('og:url','').rstrip('/')!=(HOST+route).rstrip('/'):flag(route,'error','Incorrect Open Graph URL')
  if len(p.ids)!=len(set(p.ids)):flag(route,'error','Duplicate HTML ids')
  if len(p.text().split())<80:flag(route,'warning','Very little main content; review purpose rather than padding')
  for href,main in p.links:
   u=urllib.parse.urlsplit(href)
   if u.scheme in ('mailto','tel') or (u.netloc and u.netloc not in ('flowzync.com','www.flowzync.com')):continue
   if not u.path and not u.fragment:flag(route,'error','Empty link');continue
   target=urllib.parse.urljoin(route,href);t=urllib.parse.urlsplit(target);dest=t.path or '/'
   if dest in pages:
    if main and dest!=route:inbound[dest]+=1
    if t.fragment and urllib.parse.unquote(t.fragment) not in pages[dest].ids:flag(route,'error',f'Missing fragment {href}')
   elif dest.startswith(('/api/','/_next/')) or (ROOT/'.next/server/app'/ (dest.lstrip('/')+'.body')).is_file():continue
   else:
    fp=public_file(dest)
    if not fp or not fp.is_file():flag(route,'error',f'Broken internal link {href}')
  for im in p.images:
   if 'alt' not in im:flag(route,'error','Image missing alt attribute')
   if not im.get('width') or not im.get('height'):flag(route,'warning','Image missing intrinsic dimensions')
   fp=public_file(im.get('src',''))
   if fp and not fp.is_file():flag(route,'error','Missing image: '+im.get('src',''))
  for val in p.schemas:
   if isinstance(val,dict) and val.get('parse_error'):flag(route,'error','JSON-LD parse error')
   for e in entities(val):
    if e.get('@type')=='FAQPage':
     for q in e.get('mainEntity',[]):
      if norm(q.get('name','')) not in norm(p.text()) or norm(q.get('acceptedAnswer',{}).get('text','')) not in norm(p.text()):flag(route,'error','FAQ schema/content mismatch: '+q.get('name',''))
    if e.get('@type')=='BlogPosting' and route.startswith('/blog/'):
     if e.get('author',{}).get('name')!='Flowzync':flag(route,'error','Article needs explicit matching publisher byline')
     for k in ('datePublished','dateModified'):
      try:
       d=datetime.date.fromisoformat(str(e.get(k,''))[:10])
       if d>TODAY:flag(route,'error','Future article date')
      except Exception:flag(route,'error','Missing/invalid article date')
  ah=[s for s in p.scripts if s.get('src')=='https://analytics.ahrefs.com/analytics.js']
  if len(ah)!=1 or not ah[0].get('head') or ah[0].get('data-key')!='B3pAHykQTgCT7Tvk/Ux78g':flag(route,'error','Ahrefs snippet mismatch')
  if any('adsbygoogle' in s.get('src','') for s in p.scripts):flag(route,'error','AdSense enabled without audited publisher/CMP configuration')
  if route.startswith('/blog/'):
   if 'Sources and scope' not in p.text():flag(route,'error','Article sources/scope missing')
   if '/editorial-policy' not in [l[0] for l in p.links]:flag(route,'error','Editorial attribution link missing')
  for policy in ('/privacy','/cookies','/editorial-policy'):
   if policy not in [l[0] for l in p.links]:flag(route,'error','Global policy link missing: '+policy)
 for key,fn in [('title',lambda p:p.title),('description',lambda p:p.meta.get('description',''))]:
  vals=collections.defaultdict(list)
  for route,p in pages.items():vals[fn(p)].append(route)
  for val,routes in vals.items():
   if len(routes)>1:flag(', '.join(routes),'error','Duplicate '+key+': '+val)
 for route in pages:
  if route!='/' and not inbound[route] and route not in ('/privacy','/cookies','/editorial-policy'):flag(route,'error','No contextual internal inbound link')
 # Reciprocal homepage language cluster.
 cluster=['/','/es','/fr','/de','/ar']
 for route in cluster:
  for code,dest in [('en','/'),('es','/es'),('fr','/fr'),('de','/de'),('ar','/ar'),('x-default','/')]:
   if pages[route].hreflang.get(code,'').rstrip('/')!=(HOST+dest).rstrip('/'):flag(route,'error','Missing/incorrect reciprocal hreflang: '+code)
 # Baseline checks protect every previously published URL, not only a handpicked sample.
 for url in json.loads((ROOT/'docs/seo-url-baseline-2026-10-27.json').read_text()):
  if (urllib.parse.urlsplit(url).path or '/') not in pages:flag(url,'error','Existing URL removed')
 # Supplementary discovery formats must contain all blogs.
 feed=ET.fromstring((ROOT/'.next/server/app/feed.xml.body').read_text())
 feed_urls={e.text for e in feed.findall('.//item/link')}
 blogurls={HOST+route for route in pages if route.startswith('/blog/')}
 if feed_urls!=blogurls:flag('/feed.xml','error','RSS does not match all published blogs')
 llms=(ROOT/'.next/server/app/llms.txt.body').read_text()
 for url in blogurls:
  if url not in llms:flag('/llms.txt','error','Published article missing: '+url)
 results={}
 if live:
  with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
   futs={pool.submit(request,HOST+route):route for route in pages}
   for fut in concurrent.futures.as_completed(futs):
    route=futs[fut];res=fut.result();results[route]={k:v for k,v in res.items() if k not in ('html','headers')}
    if len(results)%25==0:
     print(f'Live pages checked: {len(results)}/{len(pages)}',flush=True)
     (ROOT/'.next/seo-live-progress.json').write_text(json.dumps(results))
    if res['status']!=200:flag(route,'error','Live HTTP '+str(res['status']));continue
    lp=Page(res['html'])
    if lp.title!=pages[route].title:flag(route,'error','Live page differs from audited release')
    if lp.canon!=pages[route].canon:flag(route,'error','Live canonical differs from audited build')
    if 'noindex' in {k.lower():v for k,v in res.get('headers',{}).items()}.get('x-robots-tag',''):flag(route,'error','Live public noindex header')
    if [s for s in lp.scripts if s.get('src')=='https://analytics.ahrefs.com/analytics.js']==[]:flag(route,'error','Live Ahrefs snippet absent')
  extras=['/blog/2026-06-17-seo-basics-new-websites','/blog/2026-06-24-ghl-funnel-mistakes','/robots.txt','/sitemap.xml','/feed.xml','/llms.txt','/a-page-that-does-not-exist-20261027','/blog/a-post-that-does-not-exist-20261027','/api/challenge']
  with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
   more={pool.submit(request,HOST+route):route for route in extras}
   for fut in concurrent.futures.as_completed(more):
    route=more[fut];res=fut.result();results[route]={k:v for k,v in res.items() if k not in ('html','headers')}
    if route in ['/robots.txt','/sitemap.xml','/feed.xml','/llms.txt','/api/challenge'] and res['status']!=200:flag(route,'error','Discovery/resource HTTP '+str(res['status']))
    if route=='/api/challenge' and 'noindex' not in {k.lower():v for k,v in res.get('headers',{}).items()}.get('x-robots-tag',''):flag(route,'error','API noindex header missing')
  for route,dest in [('/blog/2026-06-17-seo-basics-new-websites','/blog/seo-basics-new-websites'),('/blog/2026-06-24-ghl-funnel-mistakes','/blog/ghl-funnel-mistakes')]:
   if results[route].get('final')!=HOST+dest:flag(route,'error','Legacy redirect failed')
  for route in extras[6:8]:
   if results[route]['status']!=404:flag(route,'error','Unknown URL must return genuine 404')
 rows=[]
 for route,p in pages.items():
  issues=[f for f in findings if f['route']==route]
  rows.append({'url':HOST+route,'type':route.split('/')[1] or 'home','title':p.title,'title_characters':len(p.title),'description':p.meta.get('description',''),'description_characters':len(p.meta.get('description','')),'main_words':len(p.text().split()),'h1_count':sum(l==1 for l,_ in p.headings),'canonical':p.canon[0] if p.canon else '', 'contextual_inbound_links':inbound[route],'images':len(p.images),'schema_entities':sum(len(list(entities(s))) for s in p.schemas),'live_status':results.get(route,{}).get('status','not run'),'automated_errors':sum(f['severity']=='error' for f in issues),'advisories':'; '.join(f['message'] for f in issues if f['severity']=='warning'),'account_checks':'GSC selected canonical/indexing and AdSense approval require account access'})
 out=ROOT/'docs/seo-page-audit-2026-10-27.csv'
 with out.open('w') as f:
  w=csv.DictWriter(f,fieldnames=rows[0].keys(),lineterminator='\n');w.writeheader();w.writerows(rows)
 report={'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':len(pages),'blogs':len(blogurls),'live_checked':live,'findings':findings,'live':results,'scope':'Automated page, link, schema-content and HTTP checks; not a guarantee of ranking, legal compliance or approval.'}
 (ROOT/'docs/seo-audit-results-2026-10-27.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({'pages':len(pages),'blogs':len(blogurls),'errors':sum(f['severity']=='error' for f in findings),'warnings':sum(f['severity']=='warning' for f in findings),'findings':findings[:40]},ensure_ascii=False,indent=2))
 return 1 if any(f['severity']=='error' for f in findings) else 0
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--live',action='store_true');sys.exit(run(parser.parse_args().live))
