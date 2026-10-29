import fs from 'node:fs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import matter from 'gray-matter';
export const repo = process.env.CONTENT_GITHUB_REPO || 'hammad327/flowzync-website';
const branch = process.env.CONTENT_GITHUB_BRANCH || 'main';
export const cmsReady = () => Boolean(process.env.CONTENT_GITHUB_TOKEN);
export async function github(resource, init = {}) {
  if (!cmsReady()) throw new Error('Publishing needs CONTENT_GITHUB_TOKEN on the server. Reading existing articles is available.');
  const r = await fetch(`https://api.github.com/repos/${repo}/${resource}`, {
    ...init,
    cache: 'no-store',
    signal: AbortSignal.timeout(20000),
    headers: {
      Authorization: `Bearer ${process.env.CONTENT_GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.headers || {})
    }
  });
  if (!r.ok) {
    if (r.status === 409 || r.status === 422) throw new Error('Content changed elsewhere. Reload the article before saving.');
    throw new Error(`Repository request failed (${r.status}). Check token access and branch protection.`);
  }
  return r.json();
}
const slugFrom = f => f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
export function parseFile(file, raw, sha = null) {
  const {
    data,
    content
  } = matter(raw);
  return {
    file,
    sha,
    slug: slugFrom(file),
    title: data.title || '',
    seoTitle: data.seoTitle || data.title || '',
    description: data.description || '',
    date: String(data.date || '').slice(0, 10),
    updated: data.updated || '',
    category: data.category || 'Insights',
    cover: data.cover || '',
    photo: data.photo || '',
    tags: data.tags || [],
    faqs: data.faqs || [],
    draft: data.draft === true,
    content
  };
}
export async function listArticles() {
  if (cmsReady()) {
    const files = await github(`contents/content/blog?ref=${encodeURIComponent(branch)}`);
    return files.filter(x => x.name.endsWith('.md') && !x.name.startsWith('_')).map(x => ({
      file: x.name,
      slug: slugFrom(x.name),
      sha: x.sha
    }));
  }
  return fs.readdirSync(path.join(process.cwd(), 'content/blog')).filter(f => f.endsWith('.md') && !f.startsWith('_')).map(file => parseFile(file, fs.readFileSync(path.join(process.cwd(), 'content/blog', file), 'utf8')));
}
export function validFile(file) {
  return /^\d{4}-\d{2}-\d{2}-[a-z0-9][a-z0-9-]{1,140}\.md$/.test(file);
}
export async function readArticle(file) {
  if (!validFile(file)) throw new Error('Invalid article file.');
  if (cmsReady()) {
    const f = await github(`contents/content/blog/${file}?ref=${encodeURIComponent(branch)}`);
    return parseFile(file, Buffer.from(f.content, 'base64').toString(), f.sha);
  }
  return parseFile(file, fs.readFileSync(path.join(process.cwd(), 'content/blog', file), 'utf8'));
}
export function validateArticle(p) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug || '') || p.slug.length > 140 || p.slug.length < 2) throw new Error('Use a lowercase slug with hyphens.');
  for (const [key, min, max] of [['title', 5, 200], ['seoTitle', 5, 200], ['description', 30, 500], ['content', 100, 150000]]) if (typeof p[key] !== 'string' || p[key].trim().length < min || p[key].length > max) throw new Error(`Check ${key}: ${min}–${max} characters required.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date || '') || Number.isNaN(Date.parse(p.date))) throw new Error('Choose a valid publication date.');
  if (p.date > new Date().toLocaleDateString('en-CA', {
    timeZone: 'Asia/Karachi'
  }) && !p.draft) throw new Error('Future-dated posts must stay in draft until publication day.');
  for (const key of ['cover', 'photo']) {
    const u = p[key] || '';
    if (u && !/^\/(?!\/)[^\s<>"']+$/.test(u) && !/^https:\/\/[^\s<>"']+$/.test(u)) throw new Error('Images need an HTTPS or site-relative URL.');
  }
  if (!p.draft && !p.cover) throw new Error('Add a cover image before publishing.');
  if (p.file && (!validFile(p.file) || slugFrom(p.file) !== p.slug)) throw new Error('Published URL slugs are locked. Edit the article without changing its slug.');
}
export async function saveArticle(p) {
  validateArticle(p);
  const file = p.file || `${p.date}-${p.slug}.md`;
  const existing = await listArticles();
  if (!p.file && existing.some(x => x.slug === p.slug)) throw new Error('That slug already exists. Open its article to edit.');
  if (p.file && !p.sha) throw new Error('Reload this article to obtain its current version.');
  const data = {
    title: p.title.trim(),
    seoTitle: p.seoTitle.trim(),
    description: p.description.trim(),
    date: p.date,
    updated: new Date().toISOString().slice(0, 10),
    category: p.category || 'Insights',
    cover: p.cover || '',
    photo: p.photo || '',
    tags: (p.tags || []).map(String).slice(0, 20),
    faqs: (p.faqs || []).filter(f => f.q && f.a).slice(0, 20),
    draft: Boolean(p.draft)
  };
  const raw = matter.stringify(p.content, data);
  const result = await github(`contents/content/blog/${file}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `${p.draft ? 'Save draft' : 'Publish article'}: ${p.title}`,
      branch,
      content: Buffer.from(raw).toString('base64'),
      ...(p.sha ? {
        sha: p.sha
      } : {})
    })
  });
  return {
    file,
    sha: result.content.sha,
    commit: result.commit.sha,
    url: `/blog/${p.slug}`,
    deploymentPending: true
  };
}
export async function uploadImage(bytes, ext) {
  const name = `${Date.now()}-${randomUUID()}.${ext}`;
  await github(`contents/public/images/uploads/${name}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Upload article image',
      branch,
      content: bytes.toString('base64')
    })
  });
  return `/images/uploads/${name}`;
}
