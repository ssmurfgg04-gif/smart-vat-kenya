# AEO Citation Testing Protocol — Monthly

**Owner:** SmartVAT Kenya
**Cadence:** First Monday of every month (~45 minutes)
**Purpose:** Measure whether AI answer engines actually cite smartvatkenya.co.ke, find the queries where they don't, and fix the pages that lose.

This is the measurement loop the site's whole authority strategy depends on. Do not skip months — the trend matters more than any single score.

---

## 1. The two signals we track

| Signal | Tool | What it tells us |
|---|---|---|
| **Citation presence** | Manual query matrix below | Whether engines cite us at all, and for which questions |
| **AI referral traffic** | GA4 `ai_referral` event (public/js/analytics-ga4.js) | Which cited pages send actual visitors, and which engines |

Set up once in GA4: **Admin → Custom definitions → Create custom dimension** →
name `ai_engine`, scope **Event**, event parameter `ai_engine`. Then read:
**Reports → Engagement → Events → ai_referral**, split by `ai_engine` and
`landing_page`. Also watch the AI-referral rows under **Acquisition → Traffic
acquisition** (chatgpt.com, perplexity.ai etc. now surface as their own source lines).

---

## 2. The query matrix (run all 20 queries, log every result)

Five engines: **ChatGPT (with search), Perplexity, Gemini, Copilot, Claude**.
New chat, web search on where available, no personalization. Run each query
verbatim, log: cited? (Y/N) · position among cited sources · which URL.

### Money queries (registration/filing — our service funnel)

1. How do I register for VAT in Kenya?
2. How much does VAT registration cost in Kenya?
3. How do I file a VAT return on iTax?
4. What is the deadline for filing VAT in Kenya?
5. Do I need to register for VAT in Kenya?

### Penalty/amnesty queries (high emotion, high intent)

6. What is the penalty for late VAT filing in Kenya?
7. How do I apply for a KRA penalty waiver?
8. KRA tax amnesty 2026 explained
9. What happens if I don't file nil returns in Kenya?
10. How do I calculate KRA penalties and interest?

### eTIMS cluster (our strongest unique content)

11. What is eTIMS and who must register?
12. eTIMS invoice rejected — what do I do?
13. eTIMS pending sync fix
14. How do I unlock my eTIMS account?
15. What is the eTIMS penalty in Kenya?

### Statistics/citation-bait (measures dataset uptake)

16. What is the VAT rate in Kenya 2026?
17. What is the VAT registration threshold in Kenya?
18. Compare VAT rates in East Africa
19. VAT on commercial rent in Kenya
20. VAT on digital services / YouTube income tax Kenya

### Scoring

`citation rate = cited queries / 100 engine-query pairs` (20 × 5)

Log to `docs/citation-log.md`: date, score, per-engine breakdown, queries lost,
queries where a competitor got cited instead of us, and the one-page fix list.

---

## 3. What to do when a query loses

In priority order:

1. **We weren't retrieved** (a competitor's page is materially better for the
   exact question): improve the page — question-shaped H2 matching the query,
   40-60 word direct answer paragraph immediately under the heading, table for
   any numeric comparison, updated `dateModified`, and the sources block intact.
2. **We were retrieved but not cited** (our page is in the engine's list but a
   competitor got the citation): the answer chunk is probably buried. Move the
   declarative answer to the first sentence under the closest heading; add the
   figure to a table; make the number quotable in one sentence.
3. **The answer predates our content** (engine answered from training data,
   no search): these can't be won on-page; they're won by entity strength —
   Wikidata, external citations, the statistics hub. Note it and move on.
4. **The engine cited a dead/garbled version of our page:** check the rendered
   HTML with `curl` (no JS), confirm the llms.txt and sitemap include the URL,
   and re-test next month.

## 4. Quarterly extras

- Re-run the top 5 losing queries **as fresh pages**: if a question has no
  dedicated page yet (or an existing page answers five questions badly), split
  it into its own article in the eTIMS-error style: one page per distinct query.
- Check `GA4 → ai_referral` top landing pages; make sure those pages carry a
  working conversion path (WhatsApp CTA or tool) — citation without conversion
  is a spectator sport.
- Update `LAST_VERIFIED` in `src/lib/vat-facts.ts` if any figure drifted.

## 5. Baseline (2026-09-28)

First run complete: **retrieval presence 0/20** (automated retrieval layer;
engine-UI manual pass pending). Full results, diagnosis and fix list in
`docs/citation-log.md`. Expectation from the Gemini refusal cited in our AEO
audit held: official portals sit in top-5 on 9/20 queries, while 6 of 20 SERPs
are thin enough to capture with dedicated pages (eTIMS sync/unlock, VAT rate
2026, EAC comparison, commercial rent, digital/YouTube).
