# SmartVAT Backlink & Authority Playbook

**The problem it solves:** cold outreach emails get ghosted because they ask
for a favour. This playbook replaces "please link to us" with systems where
linking SmartVAT is the *byproduct* of someone doing something useful for
themselves. Zero spam, all legal, mostly asynchronous.

**The asset stack this playbook activates (all shipped):**

| Asset | Location | Why it earns links |
|---|---|---|
| Open datasets + ready citations | `/statistics/` + `/data/*.json` | Journalists & researchers cite data; citations are copy-paste |
| Embeddable calculators | `/tools/embed/` + `/widget/*.html` | Webmasters embed a useful tool; the attribution link is baked in |
| Open-source npm package | `packages/vatkenya` + `/open-source/` | GitHub/npm pages rank & get cited by AI; awesome-lists accept tools |
| Kenya Tax Law Library | `/sources/` | The only page-per-law practical reference in Kenya; linkable from any tax argument |
| Editorial policy + verification chain | `/about/editorial-policy/` | Makes SmartVAT quotable for newsrooms with sourcing standards |

---

## Loop 1 — The widget loop (passive, compounding)

**Mechanism:** every embedded calculator carries one attribution link.
50 embeds = 50 referring domains. This is how Calendly and Canva grew —
value in exchange for the badge.

**Actions (repeat monthly, 2 hours):**
1. Search Google for sites that NEED a VAT calculator:
   - `intitle:"VAT" kenya blog comments` → Kenyan business bloggers
   - Kenyan accounting firm sites with "resources" or "tools" pages:
     `site:.co.ke accountant resources tools`, `bookkeeping Kenya "useful links"`
   - Business directories & SME support orgs (KEPSA, KCB blogs, Absa SME hub,
     Business Daily SME pages, Kenyan startup tool roundups)
2. For each hit, send the 3-line embed email (templates below) — you're
   offering them a free feature for their readers, not asking for a link.
3. Track embeds: GA4 referrer growth + a Google Alert on
   `"smartvatkenya.co.ke/widget"`.

**Realistic curve:** 5-10 embeds month one, compounding ~10%/month as
roundup articles ("5 free tax tools for Kenyan SMEs") discover the page.

## Loop 2 — The dataset loop (digital PR without the PR agency)

**Mechanism:** journalists don't link to homepages; they cite *numbers with
provenance*. Every dataset on `/statistics/` ships APA/MLA/BibTeX strings —
the citation friction is zero.

**Actions:**
1. Build the journalist list (30 names is enough): business/finance desk of
   Business Daily, Nation, Standard, The Star, plus Kenyan fintech/trade
   newsletters (TechCabal Kenya, WeeTracker, Africa Report contributors) and
   freelance tax/finance writers on X/LinkedIn.
2. Each month, when a tax story is live (budget day, Finance Act passage,
   amnesty deadlines, eTIMS enforcement waves), pitch ONE statistic with the
   methodology attached — see template 3. You are a source, not a marketer.
3. Respond within the hour when they ask for more — speed wins sources lists.
4. Register on Qwoted / SourceBottle / Featured (HARO successors) as a Kenya
   tax source; answer 1-2 requests weekly with a stat + the relevant page.

**The killer stat available right now:** "Late-filing penalties on a KES
137,931 VAT bill left unpaid for 12 months total KES 282,321 — twice the
tax itself — and 100% of that pain is waivable under the 2026 amnesty until
31 December." That sentence + the scenario dataset is a complete story pitch.

## Loop 3 — The broken-link loop (KRA's links rot; ours don't)

**Mechanism:** Kenyan news sites and blogs link to KRA PDFs and iTax URLs
that 404 when KRA reorganises its portal (which it does constantly). A dead
link is an *embarassment* to its owner — replacing it is doing them a favour.

**Actions (monthly, 90 minutes):**
1. Crawl candidates with a free broken-link checker (Ahrefs free tool,
   Broken Link Checker plugin, or `linkchecker` CLI) across:
   - Business Daily / Nation / Standard tax articles from 2022-2025
   - Kenyan accounting-firm blogs and university tax-course pages
   - SME-support org resource pages
2. Filter for dead links pointing at KRA pages/PDFs about VAT or eTIMS.
3. Send template 4: "your page links to a KRA URL that now 404s; the current
   equivalent lives here" — where "here" is the relevant SmartVAT guide or
   the official KRA URL (offer both; the honest version converts better).

**Why this works when cold "link to me" emails fail:** you lead with their
problem, not your need.

## Loop 4 — The open-source loop (developers are publishers)

**Mechanism:** npm + GitHub pages are high-authority, dofollow, and indexed
by AI assistants. Every Kenyan fintech dev searching "how to calculate VAT
kenya javascript" should land on `vatkenya`.

**Actions (once, then passive):**
1. `cd packages/vatkenya && npm publish` (owner: create the npm account
   "smartvatkenya" with 2FA first).
2. Submit to lists that curate country-specific dev tools:
   - GitHub topics: add `kenya`, `vat`, `kra`, `tax` to the repo topics
   - `awesome-kenya` style lists (search GitHub for "awesome kenya")
   - Dev.to / Hashnode post: "I open-sourced Kenya's tax maths — here's what's
     inside" (canonical to `/open-source/`, link back to the site)
   - Stack Overflow answers on Kenyan VAT calculation questions citing the
     package + law sections (answer first, link as reference — SO rules)
3. Add the npm badge/link to `/open-source/` once live.

## Loop 5 — The entity loop (Wikidata & knowledge graph)

**Mechanism:** Google's Knowledge Graph, Bing and every AI's entity store
cross-check brands against Wikidata. A Wikidata item makes "SmartVAT Kenya"
a *thing* rather than a *string* — it's what upgrades AI answers from
paraphrase to citation.

**Actions (once, ~45 minutes):**
1. Create a Wikidata account, search for existing "SmartVAT" items to avoid
   collision (there are unrelated EU VAT software items — ours must be
   clearly scoped as the Kenyan firm).
2. Create item with EXACTLY these claims (no more, no puffery):
   - instance of: business (Q4830453)
   - industry: tax consulting (Q169606)
   - country: Kenya (Q114)
   - headquarters location: Nairobi (Q3870)
   - official website: https://smartvatkenya.co.ke
   - described at URL: https://smartvatkenya.co.ke/about/
   - official name: Smart VAT Kenya Limited
3. Once the Q-ID exists (e.g. Q13xxxxx), add it to `sameAs` in
   `src/layouts/BaseLayout.astro` and redeploy — one line.
   **Pre-built:** collision check already run (2026-09-28 — zero existing
   "SmartVAT" items, name is clear). Two ready paths:
   `scripts/wikidata-create.mjs` (API, needs a bot password from
   Special:BotPasswords via env `WIKIDATA_USERNAME`/`WIKIDATA_BOT_PASS`) or
   paste `scripts/wikidata-quickstatements.txt` into QuickStatements.
4. Same-day second step: Google Business Profile is already live? Confirm the
   profile URL matches the `sameAs` socials.

## Loop 6 — The professional loop (the people who already trust tax answers)

**Mechanism:** accountants, tax lecturers and SME-organization officers hand
out resources to clients and students. Give them a page worth handing out.

**Actions:**
1. Universities (UoN, Strathmore, KESRA, JKUAT): email the tax-law lecturer,
   not the "webmaster" — offer the law library + datasets as course reading
   (template 5). One .reading-list placement = permanent .ac.ke link.
2. ICPAK: pitch a CPD-eligible article or webinar co-hosted with SmartVAT on
   "Teaching clients the 2026 eTIMS minimums" — the event page links us.
3. Kenya Chamber of Commerce / KEPSA / county business forums: offer the
   deadline calendar + statistics as member resources.
4. Partner page exists (`/partners/`): add a "recommended by" block once the
   first two firms say yes.

## Outreach templates (why these don't get ghosted)

Rules behind all of them: under 120 words, one idea, value stated in the
first sentence, no "we", no ask in email one, plain text, real signature.

### Template 1 — widget offer (bloggers/directories)
> Subject: a free Kenya VAT calculator for [their site section]
>
> Hi [name] — your [article/page] on [topic] answers a question your readers
> always follow up with: "ok, but how much VAT on MY amount?"
>
> We built a free embeddable Kenya VAT calculator (16%/zero-rated/exempt,
> updated per Finance Act) that drops in with one iframe — no scripts for you
> to host: https://smartvatkenya.co.ke/tools/embed/
>
> Yours if useful. Either way, nice piece.
> [Name], SmartVAT Kenya

### Template 2 — the 3-line embed nudge (accounting firms)
> Subject: tool suggestion for your resources page
>
> Hi [name] — [Firm] has a resources page; your clients keep asking about
> KRA penalties. Our estimator (exact TPA formulas, 2026 minimums) embeds in
> one line: https://smartvatkenya.co.ke/tools/embed/
>
> Free, no signup. If it earns its place, keep it forever.

### Template 3 — journalist data pitch
> Subject: KES 282,321 — what a 12-month-late VAT bill actually costs
>
> Hi [name] — with [amnesty deadline / Finance Act] in the news: we computed
> (methodology + dataset, CC BY 4.0) that penalties and compounding interest
> on a KES 137,931 VAT bill reach KES 282,321 within 12 months — 25% more
> than the tax itself.
>
> Full dataset with citations: https://smartvatkenya.co.ke/statistics/
> Happy to walk through the maths or share figures for any scenario — we file
> these returns daily.
>
> [Name], SmartVAT Kenya (Nairobi)

### Template 4 — broken-link fix
> Subject: dead KRA link on your [page title] page
>
> Hi [name] — your [page] links to a KRA VAT page that now 404s (KRA
> reorganised the portal again). The current official page is [URL]; we also
> maintain a step-by-step equivalent that tracks these changes:
> [SmartVAT URL]. Either fixes your readers' experience.
>
> [Name], SmartVAT Kenya

### Template 5 — lecturer/course reading
> Subject: primary-source reading pack for [course code] students
>
> Hi Dr [name] — we maintain a Kenya tax law library mapping VAT Act, TPA and
> Finance Act provisions to worked examples, plus open datasets with
> citations, free for educational use:
> https://smartvatkenya.co.ke/sources/ · https://smartvatkenya.co.ke/statistics/
>
> If it fits [course], add it to the reading list with our blessing.

## Cadence summary (owner: ~3 hours/week total)

| Week | Action |
|---|---|
| Every Monday | 5 widget/embed emails + 1 broken-link fix (Loop 1+3) |
| Monthly | 1 journalist data pitch + 2 HARO-style answers (Loop 2) |
| Monthly | Check GA4 ai_referral + citation matrix (docs/aeo-citation-testing.md) |
| Quarterly | 1 university/professional placement attempt (Loop 6) |
| Once | npm publish, Wikidata item, awesome-list submissions (Loop 4+5) |

## What NOT to do (protect the authority we're building)

- No buying links, PBNs, or link farms — AI retrieval systems weight
  referring-domain *quality* above count, and Google's spam systems nuke the
  rest. One manual action undoes a year of this playbook.
- No exact-match anchor spam ("VAT calculator Kenya" ×200). Natural anchors
  only: brand, page title, URL, "this tool", "source".
- No AI-comment/link-in-bio spam on forums — it converts at zero and burns
  the domain's name with the exact professionals we want citing us.
- Don't claim KRA affiliation anywhere. "Independent interpretation with
  linked primary sources" is the moat — keep the line bright.
