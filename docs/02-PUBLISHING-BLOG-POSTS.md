# 2. Publishing a blog post

Once GitHub and Vercel are connected (guide 1), publishing is: create one file,
run three commands. Your post is live in about 90 seconds.

---

## The 5-minute version

**1.** Create a new file in `content/blog/` named:

```
YYYY-MM-DD-your-keyword-here.md
```

The filename **becomes the URL**, so this:

```
content/blog/2026-08-12-elementor-vs-custom-code.md
```

becomes:

```
www.flowzync.com/blog/elementor-vs-custom-code
```

Put your target keyword in the filename. Use hyphens, lowercase, no spaces, no
punctuation. Never rename a file after publishing — that breaks the URL and
throws away any ranking it earned.

**2.** Paste this template at the top, then write below it:

```markdown
---
title: "Elementor vs Custom Code: Which Should You Choose in 2026?"
description: "A straight comparison of Elementor and custom-coded websites — cost, speed, flexibility and who each one actually suits."
date: "2026-08-12"
author: "Your Name"
category: "Web Design"
cover: "/images/blog/elementor-vs-custom-code.jpg"
---

Your opening paragraph goes here. Answer the question in the title within the
first 100 words — this is the part AI assistants and featured snippets quote.

## Your first heading

Write normally. Blank line between paragraphs.

- Bullet points like this
- Work fine

**Bold** and *italic* work as you'd expect.

## Another heading

[Link to a service page](/services/elementor-design) — always link back to at
least one service or industry page from every post.
```

**3.** Publish:

```bash
git add .
git commit -m "New post: Elementor vs custom code"
git push
```

Done. Check `www.flowzync.com/blog` in two minutes.

---

## The frontmatter fields

Everything between the two `---` lines. Keep the quotes.

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Put the keyword near the front. Aim under 60 characters so Google doesn't truncate it. |
| `description` | Yes | 140–160 characters. This is your search-result snippet — write it to earn the click, not to describe the page. |
| `date` | Yes | `YYYY-MM-DD`. Controls ordering. |
| `author` | Yes | A real person's name. Named authors are a trust signal for Google and for AI citation. |
| `category` | Yes | Powers the filter buttons on `/blog`. Reuse existing ones — every new value creates a new filter. |
| `cover` | Recommended | 1400 × 900. Put the file in `/public/images/blog/`. |
| `updated` | Optional | Add when you revise an old post. Shows "Updated [date]" and refreshes `dateModified` in the schema. |

> **Apostrophes in your title** need care. `title: "Google's rules"` is fine
> (double quotes outside). `title: 'Google's rules'` will break the build.
> Stick to double quotes and you'll never hit this.

---

## Writing posts that actually rank

**One keyword per post.** Don't try to rank a single post for ten things. Ten
posts each targeting one long-tail phrase will beat one post targeting ten,
every time.

**Answer the title question in the first 100 words.** Don't warm up. AI Overview,
ChatGPT and Perplexity lift the paragraph that answers the question directly —
give them a clean one to lift.

**Write in declarative statements.** "WooCommerce charges no per-sale platform
fee; Shopify charges a monthly subscription plus transaction fees on some
gateways." That's quotable. "We deliver exceptional e-commerce solutions" is not.

**Link to a service or industry page from every post.** This is the whole point
of the blog — it feeds authority to the pages that make you money. A post with
no internal links is a dead end.

**Use `##` headings that match how people search.** "How much does an Elementor
website cost?" beats "Pricing considerations".

**800+ words for anything competitive.** Thin posts don't rank regardless of how
well optimised they are. If you only have 300 words to say, say it in an
existing post instead.

### Post types worth rotating

| Type | Example | Why it works |
|---|---|---|
| Comparison | "Elementor vs Custom Code" | High intent, people are deciding |
| Cost | "How Much Does a WooCommerce Store Cost?" | Huge search volume, almost nobody answers honestly |
| Checklist | "Website Checklist for Plumbers" | Links straight to an industry page |
| How-to | "How to Speed Up a WordPress Site" | Earns links naturally |
| Mistakes | "5 WooCommerce Mistakes That Lose Sales" | Very shareable |

---

## Editing an existing post

Change the file, add `updated: "2026-09-01"` to the frontmatter, push. The post
shows "Updated" and Google sees a fresher `dateModified`.

Refreshing an old post that's ranking on page two is often a better use of an
hour than writing something new.

---

## Deleting a post

Delete the file and push. But be careful: if the post has any traffic or links,
you're throwing that away. Rewriting it is nearly always the better move.

---

## Do you need to tell Google about each post?

No. Your sitemap updates automatically on every deploy, and Google recrawls
sites that publish regularly.

For a post you particularly care about, you can nudge it: Google Search Console →
paste the URL in the top search bar → **Request Indexing**. Use it for genuinely
important pages, not every post — there's a daily quota and it doesn't help
things rank, only get *seen* slightly sooner.

---

## Later: publishing without touching files

Right now you publish by editing markdown files. That's free, fast and has no
moving parts.

If you'd rather write in a browser — or you want a non-technical person posting —
the upgrade is **Sanity CMS**: a proper editor UI, with the site rebuilding
automatically when you hit publish. It needs a Sanity account set up and the site
rewired to pull from it. Worth doing once daily posting is a real habit rather
than a plan.
