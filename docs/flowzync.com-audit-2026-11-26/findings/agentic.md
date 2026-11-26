# AI agent readiness: flowzync.com (2026-11-26)

Method: live curl of robots.txt, llms.txt, /.well-known/*, Accept-negotiation probes; saved HTML in raw/pages; source review (app/contact/page.jsx, components/ChatWidget.jsx, app/robots.js, app/llms.txt/route.js, lib/challenge.js). claude-seo network scripts and PSI could not run (no DNS), and no browser or accessibility-tree run was done. The a11y assessment below is from SSR HTML and source, not a rendered tree.

## Scores
- Lighthouse Agentic Browsing: NOT MEASURED (PSI unreachable). No X/N reported. Do not infer one.
- Agent-UX heuristic (0-100, separate from Lighthouse): status PARTIAL (static/source-based estimate only). Category score: 72/100 (judgement, not a tool result).

## Access policy (robots.txt, live)
- Training: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, cohere-ai are all explicitly Allow: / (disallow only /admin, /api/). This is a deliberate opt-in to training; confirm it is the owner's intent.
- Search: OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot, Applebot, DuckAssistBot allowed.
- User-triggered: ChatGPT-User, Claude-User, Perplexity-User allowed. (Google-Agent not named; it generally ignores robots.txt anyway.)
- No Content-Signal line (Cloudflare policy, IETF draft expired 2026-04-04; vendor-matrix checked 2026-09-23). Optional; absence is not a defect.
- Sitemap and Host lines present. Caveat: `Host:` is a non-standard directive (harmless).

## Discovery files
| Path | Result |
|---|---|
| /llms.txt | 200 text/plain, 323 lines, route at app/llms.txt/route.js. Good: facts, services, industries, locations. |
| /llms-full.txt | 404 (opportunity) |
| /.well-known/ai-catalog.json, mcp.json, api-catalog, agent-card.json, security.txt, http-message-signatures-directory | all 404 (opportunity; drafts/proposals, not defects) |
| Markdown delivery | None. `Accept: text/markdown` returns HTML; /about.md 404. Opportunity. |

## Findings

### P1 (High)
1. Contact form blocks completion by an agent unless it executes JS and waits, and fails silently in one case.
   - Evidence: SSR HTML shows the captcha label as "Loading spam check…" (app/contact/page.jsx L166-167); question only appears after client fetch of /api/challenge. Server also enforces MIN_FILL_MS = 3000 (lib/challenge.js), so an agent that fills and submits instantly is rejected. Captcha input uses aria-label "Answer the sum shown" which overrides the visible question, so the a11y name never contains the sum. A text-only/fetch agent (no JS) cannot see the question at all.
   - Silent failure: if name/email empty, `setErr('field')` is set but the render condition `err && err !== 'field'` shows nothing (L ~176). Neither fields have `required`/`aria-required`; form is `noValidate`. An agent gets no signal why nothing happened.
   - Fix (app/contact/page.jsx): remove aria-label on #captcha so the label (question) is the accessible name; render the question text server-side placeholder-free or add `aria-live="polite"` on the label; add `required aria-required="true"` and `autoComplete="name"` / `"email"` to name/email; render the field error as `<p role="alert">` tied to inputs with aria-describedby/aria-invalid; give the error and success containers role="alert"/"status" (success already has role=status). Keep the 3s floor but surface its error message in the alert.
2. Chat widget "Get a quote" form is a second, better-labelled path, but the same captcha applies (components/ChatWidget.jsx L152: `Quick check: <question>`, aria-label "Quick check answer" again overrides the question). Same fix: drop the aria-label.

### P2 (Medium)
3. Hero CTAs in rotating slides carry `tabindex="-1"` on non-active slides (home: "Plan your funnel", "Connect your business systems"). Agents/keyboard users get only the active slide's CTA; acceptable, but ensure inactive slides are also `aria-hidden`/`inert` so they are not exposed as unreachable-but-present links. The persistent `nav-cta` "Start a project" -> /contact is on every page and is the reliable entry point (good).
4. CTA link text varies ("Start a project", "Tell us about your project", "Let's talk about your website"). All go to /contact, so an agent can find "request a quote", but no CTA says "quote". Add visible or aria text "Request a quote" on the nav CTA (e.g. `aria-label="Start a project: request a quote"`). Keep wording honest: the site says quotes are itemised after a conversation.
5. Chat widget effect on agents: panel is in SSR HTML with `role="dialog"`, `aria-hidden` and `inert` while closed, FAB has aria-label/aria-expanded/aria-controls. This is well done: closed state does not pollute the tree or trap focus. When open, thread is role=log aria-live=polite, which is fine. Risk is low; the one issue is the captcha label (finding 2). Chat replies come from a server assistant (/api/chat), so agents asking questions will get non-deterministic text; the static pages and llms.txt remain the authoritative source.

### P3 (Low / opportunities)
6. Markdown delivery: add `.md` twins or `Accept: text/markdown` negotiation for service pages and blog posts (content already originates as markdown in content/blog/*.md; lib/markdown.js renders it). Add `Vary: Accept` if negotiated. Opportunity only.
7. llms-full.txt: optional single-file corpus of the service pages (do not invent facts; reuse page copy).
8. Optional Content-Signal line in app/robots.js (draft/proposal; checked 2026-09-23), e.g. `Content-Signal: search=yes, ai-input=yes, ai-train=<owner decision>`. Needs the owner's decision on training; the current file already allows all training bots.
9. WebMCP (W3C community draft; Chrome origin trial M149-M156, vendor-matrix 2026-09-23): the one high-value tool is `request_quote({name, email, service, timeline, message})`, registered imperatively on /contact (`navigator.modelContext.registerTool`, feature-detected) and reusing the same submit path as the form (still needs the signed challenge, so the tool should fetch /api/challenge or the server should add an agent-safe path with rate limiting). Secondary read-only tools: `list_services`, `get_contact_options`. Only OpenAI's ChatGPT desktop browser is documented as calling it (imperative only); no ranking/traffic claims. Low priority; do after finding 1.
10. Web Bot Auth / ai-catalog.json: proposals, no action needed.

## What works
- 188/188 pages 200, server-rendered content (SSR HTML carries full text, one h1, `<main id="main-content">`, skip link, labelled `<nav>` landmarks).
- Contact form fields all have explicit `<label for>`, native selects, honeypot correctly `aria-hidden` + tabindex -1.
- Honest llms.txt that corrects the "no office in listed cities" misreading, states pricing policy and no ranking guarantees.
- Explicit, documented robots.txt for 16 AI user agents; /api and /admin excluded, API sends X-Robots-Tag noindex.
- Chat dialog hidden/inert when closed.

## Not verified
- Rendered accessibility tree, Lighthouse Agentic Browsing X/N, Agent-UX script score: tools unavailable offline (no DNS). Rerun lighthouse_agentic.py and agent_ux_check.py from a networked machine, or against a local `next start -p 3100` build for the latter.
- Behaviour of www.flowzync.com (expired cert, see CONTEXT.md): agents following www links will fail TLS; covered by the technical specialist.
