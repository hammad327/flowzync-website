// ─────────────────────────────────────────────────────────────
// BLOG ENGINE — reads every .md file in /content/blog
// To publish a post daily: drop a new .md file in that folder,
// commit/deploy (or just save if self-hosting). That's it.
// See README.md → "Publishing a blog post" for the template.
// ─────────────────────────────────────────────────────────────
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '1970-01-01',
        author: data.author || 'Flowzync Team',
        category: data.category || 'Insights',
        cover: data.cover || '',
        // `updated` in the frontmatter is a freshness signal for Google
        // and AI engines. Falls back to the publish date when absent.
        updated: data.updated || data.date || '1970-01-01',
        tags: Array.isArray(data.tags) ? data.tags : [],
        readTime: Math.max(2, Math.round(content.split(/\s+/).length / 200)),
        content,
      };
    })
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
