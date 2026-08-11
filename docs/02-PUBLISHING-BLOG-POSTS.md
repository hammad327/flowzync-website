# 2. Publishing a blog post

Once GitHub and Vercel are connected (guide 1), publishing is: create one file,
run three commands. Your post is live in about 90 seconds.

---

## The 5-minute version

**1. Copy the template.** `content/blog/_TEMPLATE.md` is your starting point —
it has the frontmatter filled in and a writing checklist inside. Copy it, don't
edit it.

**2. Name your copy:**

```
YYYY-MM-DD-your-target-keyword.md
```

The date orders your posts and is **stripped from the URL**, so this:

```
content/blog/2026-08-14-woocommerce-vs-shopify-cost.md
```

becomes:

```
www.flowzync.com/blog/woocommerce-vs-shopify-cost
```

Put your keyword in the filename. Lowercase, hyphens, no spaces. **Never rename
it after publishing** — that breaks the URL and throws away any ranking it earned.

**3. Fill in the frontmatter** (between the `---` lines) and write below it.

**4. Delete `draft: true`** when you're ready. While that line is present the post
is invisible on the live site, so you can safely push work in progress.

**5. Publish:**

```bash
git add -A
git commit -m "New post: WooCommerce vs Shopify cost"
git push
```

Live in about 90 seconds.

---

## Drafts and files that never publish

Two ways to keep something out of the live site:

| Method | Use it for |
|---|---|
| `draft: true` in the frontmatter | A post you're still writing |
| Filename starting with `_` | Templates and notes |

Both are safe to commit and push.

---

## The frontmatter fields

Everything between the two `---` lines. Keep the quotes.

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Put the keyword near the front. Aim under 60 characters so Google doesn't truncate it. |
| `description` | Yes | 140–160 characters. This is your search-result snippet — write it to earn the click, not to describe the page. |
| `date` | Yes | `YYYY-MM-DD`. Controls ordering. |
| `author` | Yes | A real person's name. Named authors are a trust signal for Google and for AI citation. |
| `category` | No | Not shown publicly any more. Harmless to leave in. |
| `draft` | No | `true` keeps the post off the live site. |
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
