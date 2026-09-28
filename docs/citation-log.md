# Citation Log — smartvatkenya.co.ke

Monthly measurement per `docs/aeo-citation-testing.md`. Trend matters more than any single score.

| Date | Retrieval presence (20q) | Engine citation rate (5 engines × 20q) | Notes |
|---|---|---|---|
| 2026-09-28 | **0 / 20** | not yet measured (manual UI pass pending) | Baseline run, automated retrieval layer |

---

## Run 1 — 2026-09-28 (first Monday)

### Method

Two of the protocol's two signals, current status:

1. **Citation presence** — this run measured the **retrieval layer** (live web
   search, top-10 per query, raw results archived in `docs/citations/2026-09-28/`).
   All five protocol engines draw their answers from this retrieval layer, so
   presence here is the *precondition* for citation. The manual 5-engine UI pass
   (ChatGPT, Perplexity, Gemini, Copilot, Claude — fresh chat, web search on) is
   still required for the citation-rate column and takes ~45 min by hand.
2. **AI referral traffic** — GA4 `ai_referral` event is wired (14 engines) but
   too early to have a readable signal; check at the next run.

### Technical pre-flight (protocol §3.4) — all green

| Check | Result |
|---|---|
| Homepage / llms.txt / llms-full.txt / sitemap.xml / robots.txt | all HTTP 200 |
| robots.txt AI crawler rules (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) | present (4/4 patterns matched) |
| Dataset JSON (`/data/*.json`) + widgets + `/sources/` hub | all HTTP 200 |
| JSON-LD in raw server HTML (no JS), FAQ page | present |

So: nothing technical is blocking retrieval. The 0/20 is an **authority and
retrieval gap, not a crawler gap** — consistent with the AEO audit's two
weakest scores (external citations 5/10, citation likelihood 6/10).

### Results (all 20 queries)

`#n` = first smartvatkenya.co.ke position in top-10. `—` = not retrieved.
"Official" = kra.go.ke / kenyalaw.org family in top-5.

| # | Cluster | Query | Ours | Leading competitors retrieved | Official |
|---|---|---|---|---|---|
| 1 | money | How do I register for VAT in Kenya? | — | hilltechconsultants.co.ke, kra.go.ke, lexisnexis.co.uk | yes |
| 2 | money | How much does VAT registration cost in Kenya? | — | taxkenya.com, jumaauditors.co.ke, dodopayments.com | no |
| 3 | money | How do I file a VAT return on iTax? | — | blog.nestict.com, facebook.com, spondoo.ke | no |
| 4 | money | What is the deadline for filing VAT in Kenya? | — | kenyans.co.ke, help.tallysolutions.com, gichuripartners.com | no |
| 5 | money | Do I need to register for VAT in Kenya? | — | kra.go.ke, taxkenya.com, jumaauditors.co.ke | yes |
| 6 | penalty | What is the penalty for late VAT filing in Kenya? | — | taxkenya.com, rcmonlinecollege.co.ke, gichuripartners.com | no |
| 7 | penalty | How do I apply for a KRA penalty waiver? | — | kra.go.ke, scribd.com, kenyans.co.ke | yes |
| 8 | penalty | KRA tax amnesty 2026 explained | — | 5050markets.com, biasharapros.com, swalanyeti.co.ke | no |
| 9 | penalty | What happens if I don't file nil returns in Kenya? | — | ke.andersen.com, kra.go.ke, sheriaplex.com | yes |
| 10 | penalty | How do I calculate KRA penalties and interest? | — | kra.go.ke, taxkenya.com | yes |
| 11 | etims | What is eTIMS and who must register? | — | kra.go.ke, adamjeeauditors.com, veirahq.com | yes |
| 12 | etims | eTIMS invoice rejected — what do I do? | — | getrisiti.com, zoho.com, scribd.com | no |
| 13 | etims | eTIMS pending sync fix | — | awraops.com (single relevant result) | no |
| 14 | etims | How do I unlock my eTIMS account? | — | thekenyatimes.com (single relevant result) | no |
| 15 | etims | What is the eTIMS penalty in Kenya? | — | veirahq.com, kra.go.ke, fonoa.com | yes |
| 16 | stats | What is the VAT rate in Kenya 2026? | — | allafrica.com (thin SERP) | no |
| 17 | stats | What is the VAT registration threshold in Kenya? | — | avalara.com, kra.go.ke, anrok.com | yes |
| 18 | stats | Compare VAT rates in East Africa | — | World Bank PDF, sharedata.co.za, ris.org.in | no |
| 19 | stats | VAT on commercial rent in Kenya | — | buyrentkenya.com, kenyapropertycentre.com (property portals, not tax content) | no |
| 20 | stats | VAT on digital services / YouTube income tax Kenya | — | circulareconomyalliance.com, tiktok.com, cgspace.cgiar.org (off-topic) | no |

### Reading the baseline

Per protocol §3, every lost query this month is case **1 — "we weren't
retrieved."** None is a chunk-burying problem (case 2) or a stale-training-data
problem (case 3) yet, because we never enter the candidate pool. Two distinct
sub-causes show up:

- **Contested SERPs (14 queries):** established firms and official portals own
  retrieval — taxkenya.com (3×), jumaauditors (2×), kenyans.co.ke (2×),
  veirahq.com (2×), gichuripartners (2×), Andersen, Avalara, Anrok. Official
  sources sit in top-5 on 9/20, matching the Gemini expectation that statutory
  facts route to KRA. Winning these requires the entity/authority loop
  (Wikidata, npm, citations) plus question-shaped pages that beat the incumbent
  chunk, in that order.
- **Thin/garbage SERPs (6 queries — the fast wins):** 13, 14, 16, 18, 19, 20
  return single-digit relevant results, UGC platforms (Facebook, TikTok,
  Scribd), or outright off-topic pages. **Nobody has built the authoritative
  answer for these.** Whoever publishes clean, structured, statable answers
  first becomes the retrievable-and-citable source. All six already have
  matching or near-matching site content to harden.

### Fix list for November's run (one page of actions)

**Content (thin-SERP captures first):**
1. `eTIMS pending sync fix` (q13): dedicated error-style page — symptom →
   cause → fix sequence in an ordered list, 40-60 word direct answer under the
   H1, dateModified bumped. Currently spread across pages; split it out.
2. `How do I unlock my eTIMS account?` (q14): same treatment; add a
   step-numbered list (extractable) + "official portal" link to etims.kra.go.ke.
3. `What is the VAT rate in Kenya 2026?` (q16): ensure the statistics hub
   opens with the declarative one-liner "The standard VAT rate in Kenya is 16%
   in 2026" in raw HTML + a rate-timeline table (already in
   `kenya-vat-rate-timeline-2013-2026.json`).
4. `Compare VAT rates in East Africa` (q18): promote `eac-vat-standard-rates-2026.json`
   into a page-level HTML table with one-sentence answer on top. World Bank PDF
   is beatable on chunk quality.
5. `VAT on commercial rent in Kenya` (q19): property portals win on irrelevance —
   a single declarative page ("Yes — commercial rent is standard-rated at 16%;
   residential rent is exempt, VAT Act Third Schedule") with the provision
   quoted takes this.
6. `VAT on digital services / YouTube income tax Kenya` (q20): split into two
   pages (digital services VAT vs. content-creator income tax); engines can't
   cite one page for two questions.

**Authority/entity (unblocks the contested 14):**
7. Create the Wikidata item (`scripts/wikidata-create.mjs` or QuickStatements
   batch — both pre-built; collision check passed) → add Q-ID to `sameAs`.
8. Publish `vatkenya` to npm (package verified, name free) → npm, README and
   /open-source/ cross-link the entity.
9. First 5 widget embed emails from backlink playbook Loop 1 ( Nairobi SMB
   tool sites get a zero-maintenance VAT calculator).
10. One data pitch to a business desk (Loop 2) using the statistics hub as the
    attachment — the datasets are the only original numbers in this niche.

**Next run (2026-11-02):** re-run this matrix + first manual 5-engine citation
pass + read GA4 `ai_referral`. Expect first movement on q13/q14/q16/q18/q19/q20.
