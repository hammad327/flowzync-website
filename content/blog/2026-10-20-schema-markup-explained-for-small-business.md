---
title: "Schema Markup Explained for Small Business Owners"
description: "What structured data actually does, which types are worth adding to a small business site, and the rule that keeps it from causing a manual action."
date: "2026-10-20"
category: "SEO"
cover: "/images/blog/schema-markup-explained.svg"
faqs:
  - q: "What is schema markup?"
    a: "A block of machine-readable data in a page's code that tells search engines what the page is about — that this string is a price, this one is an opening time, this one is a question and that one is its answer. It does not change what a visitor sees. It changes what a search engine can state confidently about you."
  - q: "Does schema markup improve rankings?"
    a: "Not directly. Google has been consistent that structured data is not a ranking factor. What it does is make you eligible for richer results — star ratings, FAQ dropdowns, event details — and those change how many people click a result that was already there. It also makes your facts easier for AI assistants to quote."
  - q: "Which schema types does a small business website need?"
    a: "LocalBusiness or Organization on the site, FAQPage wherever you answer real questions, Service on service pages, BreadcrumbList for navigation, and Article on blog posts. Review and Product markup only if you genuinely have reviews or products, because misusing those is what triggers penalties."
  - q: "Can schema markup get you penalised?"
    a: "Yes, through a structured data manual action. The cause is almost always marking up something that is not visible on the page — invented star ratings, FAQs no visitor can see, prices that do not appear. The rule is simple: if it is in the markup it must be on the page."
---

Schema markup is a block of code that sits in a page and describes its contents in a format search engines parse directly. It says: this is a business, this is its address, these are its opening hours, this is a question and this is its answer.

A visitor never sees it. Its only audience is machines.

## What it actually buys you

**Rich results.** The visual extras in search listings — review stars, FAQ dropdowns, breadcrumb trails, event dates. You cannot get these without markup, and they change how much of the page a result occupies and how many people click it.

**Accuracy.** Without markup, a search engine infers. It reads "Open 9–5" and guesses. With markup, you have stated it. The difference shows up in Google Business Profile consistency, in map results and in the panels Google assembles about you.

**Quotability for AI assistants.** This is newer and increasingly the stronger reason. When an assistant answers "how much does X cost in Y", it needs a source stating it plainly. A page with FAQPage markup presents question-and-answer pairs that are already separated and labelled. It is the single most extractable structure on the web, which is why it is worth having on every page that answers something rather than on one FAQ page.

## What it does not buy you

It is not a ranking factor. Google has said so repeatedly and consistently. Adding schema to a page nobody links to and nothing matches will not move it.

The honest framing: markup helps a result that already ranks perform better, and helps a machine understand you correctly. It does not create visibility that was not there.

## The types worth having

**LocalBusiness** (or the specific subtype — Dentist, Plumber, HomeAndConstructionBusiness) if customers come to you or you serve a defined area. Name, address, phone, hours, area served. One per site, usually in the footer or site-wide.

**Organization** if you are not location-based. Name, logo, contact, social profiles. This is what feeds the knowledge panel.

**FAQPage** on any page answering real questions. Highest return of anything here, and the easiest to get right because the only requirement is that the questions and answers are genuinely visible.

**Service** on service pages. What the service is, who provides it, where it is available.

**BreadcrumbList** wherever there is a hierarchy. Cheap, and it improves how the URL line renders in results.

**Article** on blog posts. Headline, publication date, last updated, author or publisher.

**Review and AggregateRating** only where real reviews genuinely exist on the page. This is the one that gets sites penalised.

## The rule that keeps you safe

**Everything in the markup must be visible on the page.**

That is the whole compliance story, and nearly every structured data manual action comes from breaking it:

- Star ratings in the markup that appear nowhere on the site
- FAQ markup for questions no visitor can read
- Prices in the data that do not exist on the page
- Review markup on a page with no reviews
- Author markup naming a person who appears nowhere

A structured data manual action strips every rich result from your site, and getting it lifted takes a review cycle. The upside of inventing a star rating is one line of code; the downside is losing all of them.

The corollary catches people out in the other direction too: if you remove something visible — an author byline, a price — the markup describing it has to go at the same time, or you have created the violation by deletion.

## How to add it

**If you use WordPress**, Rank Math or Yoast will generate most of it from fields you fill in. That is the right starting point for a small site and it handles Organization, LocalBusiness and Article competently. FAQ blocks are usually a block type you insert.

**If your site is custom-built**, it is a JSON-LD script in the page head or body. JSON-LD is Google's stated preference over the older inline formats.

**Do not install three plugins that all output schema.** Duplicate and conflicting markup on one page is a common and genuinely confusing mess. Pick one source.

## How to check it

Google's **Rich Results Test** tells you what rich results a page qualifies for, which is the practical question. The **Schema Markup Validator** at validator.schema.org checks syntax more broadly.

Then watch Search Console. Rich result reports appear under their own headings and will flag errors per type — and those warnings are worth reading rather than dismissing, because a type with errors usually stops producing results entirely rather than degrading gracefully.

## A realistic order

Start with Organization or LocalBusiness, once, site-wide. Add BreadcrumbList, which is nearly free. Then FAQPage on every page where you answer questions, because that is the one that earns its keep twice over — in search results and in AI answers.

Service and Article markup after that. Review markup only when there is something real to mark up.

The whole exercise is a day's work for most small sites, and the main discipline is resisting the urge to claim things the page does not say.

---

*Structured data is built into every site we deliver rather than retrofitted. [Here is what that includes](/services/seo-optimization).*
