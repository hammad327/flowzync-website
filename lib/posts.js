// ─────────────────────────────────────────────────────────────
// BLOG ENGINE — reads every .md file in /content/blog
//
// To publish: drop a new .md file in that folder and push. That's it.
// Copy content/blog/_TEMPLATE.md as your starting point.
//
// FILE NAMING → URL
//   2026-08-10-website-speed-seo.md  →  /blog/website-speed-seo
// The leading date orders the file list and is stripped from the URL,
// so the slug stays clean and keyword-focused.
//
// NOT PUBLISHED:
//   · files starting with _   (templates and work in progress)
//   · files with `draft: true` in the frontmatter
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { photoFor } from '@/lib/blogPhotos';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((file) => {
      // Strip the leading YYYY-MM-DD- so the URL is just the keyword.
      const slug = file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '1970-01-01',
        author: data.author || 'Flowzync Team',
        category: data.category || 'Insights',
        // `cover` stays the local illustration — it is the fallback and
        // the thing that is guaranteed to exist. `photo` is the stock
        // photograph, which may or may not resolve at runtime.
        cover: data.cover || '',
        photo: data.photo || photoFor(slug) || '',
        // `updated` in the frontmatter is a freshness signal for Google
        // and AI engines. Falls back to the publish date when absent.
        updated: data.updated || data.date || '1970-01-01',
        tags: Array.isArray(data.tags) ? data.tags : [],
        // `faqs: [{q, a}]` in the frontmatter. Rendered on the post AND
        // published as FAQPage schema — question-and-answer is the most
        // extractable structure there is for Google's answer boxes and
        // for AI assistants, so every post carries some.
        faqs: Array.isArray(data.faqs)
          ? data.faqs.filter((f) => f && f.q && f.a).map((f) => [String(f.q), String(f.a)])
          : [],
        draft: data.draft === true,
        wordCount: content.trim().split(/\s+/).length,
        readTime: Math.max(2, Math.round(content.split(/\s+/).length / 200)),
        content,
      };
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, html: marked.parse(post.content) };
}

// Every category used across the blog, for the index filter.
export function getCategories() {
  return [...new Set(getAllPosts().map((p) => p.category).filter(Boolean))].sort();
}

// Related posts: same category first, then most recent, so the bottom of
// every article links somewhere useful rather than dead-ending.
export function getRelatedPosts(slug, limit = 3) {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];
  const others = all.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
}
