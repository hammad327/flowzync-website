import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import assert from 'node:assert/strict';
const root='.next/server/app';
const walk=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(join(dir,entry.name)):[join(dir,entry.name)]);
const files=walk(root).filter(path=>path.endsWith('.html'));
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"');
const pages=[];
for(const file of files){
 const route='/'+relative(root,file).replace(/\.html$/,'').replace(/^index$/,'');
 if(route==='/admin'||route==='/_not-found')continue;
 const html=readFileSync(file,'utf8');
 const canon=[...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
 assert.equal(canon.length,1,`${route}: exactly one canonical`);
 assert.equal(canon[0].replace(/\/$/,''),('https://flowzync.com'+route).replace(/\/$/,''),`${route}: canonical must identify this page`);
 assert.ok(!/<meta name="(?:robots|googlebot)" content="[^"]*noindex/.test(html),`${route}: unexpected noindex`);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${route}: one H1`);
 const title=decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]||'');
 assert.ok(title.length>8,`${route}: meaningful title`);
 const desc=decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1]||'');
 assert.ok(desc.length>=25,`${route}: description`);
 assert.ok(html.includes('class="sync-word"'),`${route}: brand name alongside the icon`);
 assert.ok(html.includes('https://flowzync.com/og.png')||html.includes('property="og:image"'),`${route}: social image`);
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const head=html.match(/<head>([\s\S]*?)<\/head>/)?.[1]||'';
 assert.equal((head.match(/src="https:\/\/analytics\.ahrefs\.com\/analytics\.js"/g)||[]).length,1,`${route}: one Ahrefs script in head`);
 assert.ok(head.includes('data-key="B3pAHykQTgCT7Tvk/Ux78g"'),`${route}: Ahrefs property key`);
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'';
 const links=[...new Set([...main.matchAll(/<a\b[^>]*href="(\/[^"?#]*)"/g)].map(m=>m[1]))];
 for(const target of links){
  if(target.startsWith('/api/')||/\.[a-z0-9]+$/i.test(target))continue;
  assert.ok(existsSync(join(root,(target==='/'?'index':target.slice(1))+'.html')),`${route}: internal link missing ${target}`);
 }
 pages.push({route,title,description:desc,canonical:canon[0],links,schemaCount:schemas.length});
}
const titles=new Map();for(const page of pages){assert.ok(!titles.has(page.title),`Duplicate title: ${page.title}`);titles.set(page.title,page.route);}
const baseline=JSON.parse(readFileSync('docs/seo-url-baseline-2026-10-27.json','utf8'));
const available=new Set(pages.map(p=>p.canonical.replace(/\/$/,'')));
for(const url of baseline)assert.ok(available.has(url.replace(/\/$/,'')),`Existing URL removed: ${url}`);
const inbound=new Map();for(const page of pages)for(const target of page.links)inbound.set(target,(inbound.get(target)||0)+1);
assert.ok(inbound.get('/about/team')>0,'Team page needs a contextual link');
const about=readFileSync(join(root,'about.html'),'utf8');
assert.ok(about.includes('Clear project deliverables')&&!about.includes('data-count='),'About must use process facts rather than unsupported metrics');
assert.ok(about.includes('cnt-worldwide'),'Worldwide needs its own balanced typography');
const manifests=JSON.parse(readFileSync('.next/routes-manifest.json','utf8'));
const dated=manifests.redirects.find(rule=>rule.source.startsWith('/blog/:date'));
assert.ok(dated&&dated.permanent!==false,'Dated blog URL redirect must remain');
for(const path of ['/blog/2026-06-17-seo-basics-new-websites','/blog/2026-06-24-ghl-funnel-mistakes'])assert.ok(new RegExp(dated.regex).test(path),`Dated URL redirect does not match ${path}`);
assert.equal(dated.destination,'/blog/:slug');
const withoutBodyLinks=pages.filter(p=>p.route!=='/'&&!inbound.has(p.route)).map(p=>p.route);
writeFileSync('/tmp/flowzync-build-audit.json',JSON.stringify({pages,withoutBodyLinks},null,2));
console.log(`Site SEO checks passed: ${pages.length} indexable pages, self-canonicals, unique titles, H1s, metadata, JSON-LD, brand names and internal routes.`);
console.log(`All ${baseline.length} pre-existing sitemap URLs preserved. URLs without contextual inbound links: ${withoutBodyLinks.join(', ')||'none'}.`);
