import {guard,privateHeaders} from '@/lib/admin/auth';
import sitemap from '@/app/sitemap';
import {submitToIndexNow} from '@/lib/indexnow';
import audit from '@/docs/seo-audit-results-2026-10-28.json';
export const dynamic='force-dynamic';
export async function GET(req){const d=guard(req);if(d)return d;return Response.json({source:'Current generated XML sitemap',auditDate:'2026-10-28',auditScope:audit.scope,urls:sitemap().map(p=>({url:p.url,modified:p.lastModified,findings:(audit.findings||[]).filter(f=>f.route===new URL(p.url).pathname)})),note:'Listed URLs are public pages, not confirmed indexed pages. Technical audit results are dated; inspect a URL to read its current Google index snapshot.'},{headers:privateHeaders});}
export async function POST(req){const d=guard(req);if(d)return d;try{const all=sitemap().map(p=>p.url);const body=await req.json();const urls=Array.isArray(body.urls)?[...new Set(body.urls)]:all;if(!urls.length||urls.length>10000||urls.some(u=>!all.includes(u)))throw new Error('Submit only URLs in the current Flowzync sitemap.');const result=await submitToIndexNow(urls);return Response.json({...result,note:'Submission acceptance is not a guarantee of indexing or AI citations.'},{status:result.ok?200:502,headers:privateHeaders});}catch(e){return Response.json({error:e.message},{status:400});}}
