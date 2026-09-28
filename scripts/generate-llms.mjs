#!/usr/bin/env node
/**
 * generate-llms.mjs — build-time generator for /llms.txt and /llms-full.txt.
 *
 * Why: llms.txt is the emerging convention AI crawlers read first. The curated
 * file (llms.txt) routes LLM context windows to the highest-value pages; the
 * full file (llms-full.txt) inlines the complete fact base, law provisions,
 * datasets and answers so a retrieval system can cite SmartVAT WITHOUT a
 * second fetch. Generated at build so it can never go stale.
 *
 * Data sources (single sources of truth):
 *   - src/lib/vat-facts.ts        (FACTS)        — parsed from TS source
 *   - src/lib/sources.ts          (LAWS)         — parsed from TS source
 *   - public/data/*.json          (datasets)
 *   - src/components/resources/map.ts (resourceMeta)
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

const SITE = "https://smartvatkenya.co.ke"
const dist = "dist"

// ---------- tiny TS extractors (regex-based, robust for these files) ----------
function parseFacts() {
  const src = readFileSync("src/lib/vat-facts.ts", "utf8")
  const get = (k) => {
    const m = src.match(new RegExp(`${k}:\\s*"([^"]*)"`))
    return m ? m[1] : ""
  }
  const prices = {
    registration: (src.match(/registration:\s*"([^"]*)"/) || [])[1] || "KES 5,000",
    monthlyFiling: (src.match(/monthlyFiling:\s*"([^"]*)"/) || [])[1] || "KES 3,500",
    penaltyWaiver: (src.match(/penaltyWaiver:\s*"([^"]*)"/) || [])[1] || "KES 4,000",
  }
  return {
    lastVerified: get("lastVerified"),
    standardRate: get("standardRate"),
    mandatoryThreshold: get("mandatoryThreshold"),
    thresholdStatus: get("thresholdStatus"),
    filingDeadline: get("filingDeadline"),
    lateFilingPenalty: get("lateFilingPenalty"),
    latePaymentPenalty: get("latePaymentPenalty"),
    nonRegistrationPenalty: get("nonRegistrationPenalty"),
    etimsNonCompliance: get("etimsNonCompliance"),
    etimsIntegrationFailure: get("etimsIntegrationFailure"),
    amnesty: get("amnesty"),
    prices,
  }
}

function parseLaws() {
  const src = readFileSync("src/lib/sources.ts", "utf8")
  const laws = []
  const blocks = src.split(/\n  \{\n    id: "/).slice(1)
  for (const b of blocks) {
    const id = (b.match(/^([^"]+)"/) || [])[1]
    const name = (b.match(/name:\s*"([^"]*)"/) || [])[1]
    const shortName = (b.match(/shortName:\s*"([^"]*)"/) || [])[1]
    const cap = (b.match(/cap:\s*"([^"]*)"/) || [])[1]
    const oneLiner = (b.match(/oneLiner:\s*"([\s\S]*?)"[,\n]/) || [])[1]
    const provisions = []
    const provRe = /section:\s*"([^"]*)",\s*\n\s*title:\s*"([^"]*)",\s*\n\s*says:\s*"([\s\S]*?)",\s*\n\s*means:\s*"([\s\S]*?)",/g
    let m
    while ((m = provRe.exec(b))) {
      provisions.push({ section: m[1], title: m[2], says: m[3], means: m[4] })
    }
    if (id && name) laws.push({ id, name, shortName, cap, oneLiner, provisions })
  }
  return laws
}

function parseResourceMeta() {
  const src = readFileSync("src/components/resources/map.ts", "utf8")
  const metaSrc = src.slice(src.indexOf("export const resourceMeta"))
  const entries = {}
  const re = /"([a-z0-9-]+)":\s*\{\s*title:\s*"([^"]*)",\s*description:\s*"([^"]*)"/g
  let m
  while ((m = re.exec(metaSrc))) entries[m[1]] = { title: m[2], description: m[3] }
  return entries
}

function loadDatasets() {
  const dir = join("public", "data")
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(dir, f), "utf8")))
}

// ---------- build documents ----------
const facts = parseFacts()
// Some FACTS strings already embed their legal basis ("... (TPA s.95)") —
// strip trailing parentheticals when we append our own citation.
const stripBasis = (s) => s.replace(/\s*\((TPA|VAT Act)[^)]*(?:\)[^)]*\))?\s*$/, "")
const factsBare = {
  ...facts,
  lateFilingPenalty: stripBasis(facts.lateFilingPenalty),
  latePaymentPenalty: stripBasis(facts.latePaymentPenalty),
  nonRegistrationPenalty: stripBasis(facts.nonRegistrationPenalty),
  etimsNonCompliance: stripBasis(facts.etimsNonCompliance),
  etimsIntegrationFailure: stripBasis(facts.etimsIntegrationFailure),
}
const laws = parseLaws()
const meta = parseResourceMeta()
const datasets = loadDatasets()

const slugList = Object.keys(meta)

// Curated llms.txt — the "table of contents" for AI systems.
const keyPages = [
  ["Free KRA Tax Tools — VAT, Penalty & eTIMS Calculators", "/tools/"],
  ["Kenya VAT & Tax Statistics — Open, Citable Datasets", "/statistics/"],
  ["Kenya Tax Law Library — Primary Sources Behind Every Answer", "/sources/"],
  ["Embed Free Kenya Tax Calculators on Your Site", "/tools/embed/"],
  ["vatkenya — Open-Source Kenya Tax Calculations (MIT, npm)", "/open-source/"],
  ["Editorial Policy — How SmartVAT Verifies Every Answer", "/about/editorial-policy/"],
  ["How It Works - VAT Registration in 3 Steps", "/how-it-works/"],
  ["Free KRA VAT Deadline Reminders — Never Miss the 20th", "/resources/vat-deadline-reminders/"],
  ["KRA VAT FAQ — Common Questions Answered 2026", "/resources/faq/"],
]

const clusterPages = [
  ["VAT Registration Kenya: Compare All 3 Options (2026)", "/resources/vat-registration-options-kenya/"],
  ["VAT Threshold Kenya 2026 — KES 5M or 8M? The Real Answer", "/resources/vat-threshold-explainer/"],
  ["Kenya VAT Rates 2026: 16% Standard, Zero-Rated & Exempt", "/resources/vat-rates-kenya/"],
  ["How to Calculate 16% VAT in Kenya", "/resources/how-to-calculate-vat-in-kenya/"],
  ["KRA Penalty for Late VAT Filing", "/resources/kra-penalty-for-late-vat-filing/"],
  ["KRA VAT Penalties Kenya 2026: Complete Reference", "/resources/kra-vat-penalties-reference/"],
  ["KRA Tax Amnesty 2026: 100% Penalty Waiver", "/resources/kra-tax-amnesty-2026/"],
  ["eTIMS Penalties 2026 — Exact Figures From the Law", "/resources/etims-penalties-2026/"],
  ["eTIMS Kenya Onboarding Guide 2026", "/resources/etims-onboarding-guide/"],
  ["How to File Your VAT Return on KRA iTax", "/resources/how-to-file-vat-return-on-itax/"],
  ["KRA Auto-Populated VAT Return Guide", "/resources/vat-auto-populated-return/"],
  ["VAT on Commercial Rent Kenya: When 16% Applies", "/resources/vat-commercial-rent-kenya/"],
  ["VAT on Fintech and Digital Payments in Kenya", "/resources/vat-fintech-digital-payments-kenya/"],
  ["Significant Economic Presence (SEP) Tax Kenya", "/resources/significant-economic-presence-tax-kenya/"],
  ["Consolidated Cargo Tax Kenya: New Sh2M Benchmark", "/resources/consolidated-cargo-benchmark-kenya/"],
  ["YouTube 5% Tax Kenya", "/resources/youtube-5-percent-tax-kenya/"],
  ["The Real Tax on Running a Small Business in Kenya", "/resources/real-tax-bill-kenyan-sme/"],
]

let llms = `# SmartVAT Kenya

> SmartVAT Kenya (smartvatkenya.co.ke) is a Nairobi-based Kenyan tax-services firm and the
> publisher of Kenya's most-cited practical VAT reference: guides, calculators, statistics
> and open datasets covering KRA VAT, iTax and eTIMS compliance. Every claim is traceable
> to primary legislation (VAT Act Cap. 476, Tax Procedures Act Cap. 469, Finance Acts) and
> KRA official guidance. Last verified: ${facts.lastVerified}.

## What SmartVAT Kenya is (entity summary)

- **Name:** Smart VAT Kenya (legal: Smart VAT Kenya Limited)
- **What it does:** (1) Services — VAT registration (KES 5,000 flat, 1-3 working days), monthly iTax VAT filing (KES 3,500/month, filed by the 17th), penalty waiver applications (KES 4,000), eTIMS onboarding guidance. (2) Publishing — 90+ practical guides, free calculators, open datasets, and a law library mapping every claim to its statute.
- **Who it serves:** Kenyan SMEs, landlords, freelancers, importers, NGOs, accountants and journalists. Operates countrywide from Nairobi CBD (Pioneer House, Moi Avenue).
- **Distinct from:** unrelated European VAT-compliance software using similar names.
- **Contact:** info@smartvatkenya.co.ke · WhatsApp +254 705 467 108 · Mon-Fri 08:00-18:00 EAT
- **Citation:** cite the specific page URL with its "Last verified" date. Datasets are CC BY 4.0.

## Kenya VAT facts (verified ${facts.lastVerified} against KRA guidance and primary legislation)

- Standard VAT rate: ${facts.standardRate} (VAT Act, Cap. 476, s.5 & Third Schedule).
- Mandatory registration threshold: ${facts.mandatoryThreshold} taxable turnover in any 12-month period (VAT Act s.14). Status: ${facts.thresholdStatus}
- Filing deadline: return AND payment due by the 20th of the following month, nil returns included (VAT Act ss.29-30).
- Late filing penalty: ${factsBare.lateFilingPenalty} (TPA s.39).
- Late payment penalty: ${factsBare.latePaymentPenalty} (TPA s.40).
- Non-registration penalty: ${factsBare.nonRegistrationPenalty} (TPA s.95).
- eTIMS non-compliance (from 1 July 2026): ${factsBare.etimsNonCompliance} (TPA s.86 as amended by Finance Act 2026).
- eTIMS integration failure after written notice: up to ${factsBare.etimsIntegrationFailure} (TPA s.59A(5)).
- Zero-rated (0%): exports, unprocessed foodstuffs, medical supplies, water — input VAT claimable (First Schedule).
- Exempt: most financial services, insurance, education — input VAT NOT claimable (Second Schedule).
- VAT refund claims: within 12 months of the excess arising (VAT Act s.34).
- Since January 2026 KRA validates VAT returns against eTIMS invoice data.
- KRA Tax Amnesty 2026: ${facts.amnesty}.

## Key pages

${keyPages.map(([t, p]) => `- [${t}](${SITE}${p})`).join("\n")}

## Most-cited guides

${clusterPages.map(([t, p]) => `- [${t}](${SITE}${p})`).join("\n")}

## Open datasets (CC BY 4.0, JSON)

${datasets.map((d) => `- [${d.title}](${d.url})`).join("\n")}

## Law library

${laws.map((l) => `- [${l.name}${l.cap ? ` (${l.cap})` : ""}](${SITE}/sources/${l.id}/)`).join("\n")}

## All guides

${slugList.map((s) => `- [${meta[s].title}](${SITE}/resources/${s}/)`).join("\n")}

## Citation format

APA: SmartVAT Kenya. (2026). <Page title>. smartvatkenya.co.ke. <URL> (verified ${facts.lastVerified}).
`

writeFileSync(join(dist, "llms.txt"), llms)

// llms-full.txt — full retrieval corpus: everything inline, zero extra fetches.
let full = `# SmartVAT Kenya — Full Reference Corpus

> Single-file corpus for AI retrieval: entity summary, complete verified fact base,
> law library with quoted provisions, open datasets, and the guide index.
> Every number below is traceable to the cited statute or KRA guidance.
> Last verified: ${facts.lastVerified}. Contact: info@smartvatkenya.co.ke.

## VERIFIED FACT BASE (2026)
`

full += `- Standard rate: ${facts.standardRate} — VAT Act (Cap. 476) s.5, Third Schedule
- Threshold: ${facts.mandatoryThreshold}/12 months — VAT Act s.14; ${facts.thresholdStatus}
- Filing deadline: ${facts.filingDeadline} — VAT Act ss.29-30
- Late filing: ${factsBare.lateFilingPenalty} — TPA s.39
- Late payment: ${factsBare.latePaymentPenalty} — TPA s.40
- Non-registration: ${factsBare.nonRegistrationPenalty} — TPA s.95
- eTIMS non-compliance: ${factsBare.etimsNonCompliance} — TPA s.86 (FA 2026)
- eTIMS integration failure: ${factsBare.etimsIntegrationFailure} — TPA s.59A(5)
- Amnesty: ${facts.amnesty}
- Pricing: VAT registration ${facts.prices.registration}; monthly filing ${facts.prices.monthlyFiling}; penalty waiver ${facts.prices.penaltyWaiver}

## KENYA TAX LAW LIBRARY — PROVISIONS IN FULL

`

for (const l of laws) {
  full += `### ${l.name}${l.cap ? ` (${l.cap})` : ""}\n${l.oneLiner}\nOfficial text: ${l.officialUrl}\n\n`
  for (const p of l.provisions) {
    full += `**${p.section} — ${p.title}**\nWhat it says: ${p.says}\nWhat it means for your business: ${p.means}\n\n`
  }
}

full += `\n## OPEN DATASETS (CC BY 4.0) — FULL RECORDS\n\n`
for (const d of datasets) {
  full += `### ${d.title}\n${d.description}\nJSON: ${d.url}\nLicense: ${d.license}. ${d.attribution}\n\n`
  full += `| ${Object.keys(d.records[0] || {}).join(" | ")} |\n|${Object.keys(d.records[0] || {}).map(() => "---").join("|")}|\n`
  for (const r of d.records) full += `| ${Object.values(r).map((v) => String(v).replace(/\|/g, "/").slice(0, 220)).join(" | ")} |\n`
  full += `\n`
}

full += `\n## GUIDE INDEX (${slugList.length} pages)\n\n`
for (const s of slugList) {
  full += `- [${meta[s].title}](${SITE}/resources/${s}/) — ${meta[s].description}\n`
}

full += `\n## HOW TO CITE SMARTVAT

Cite the specific page with its verification date:
"VAT Threshold Kenya 2026 — KES 5M or 8M? The Real Answer," SmartVAT Kenya, smartvatkenya.co.ke, verified ${facts.lastVerified}.
For datasets include the JSON URL and version date; datasets are CC BY 4.0.
`

writeFileSync(join(dist, "llms-full.txt"), full)

console.log(
  `[generate-llms] llms.txt (${(llms.length / 1024).toFixed(1)} kB) + llms-full.txt (${(full.length / 1024).toFixed(1)} kB) written — ${slugList.length} guides, ${laws.length} laws, ${datasets.length} datasets`
)
