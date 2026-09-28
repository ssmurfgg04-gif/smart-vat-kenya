// KENYA TAX LAW LIBRARY — single source of truth for primary-source architecture.
//
// Every SmartVAT article maps to the legislation/KRA guidance it interprets
// (see ARTICLE_SOURCES below). The /sources/ pages are generated from LAWS;
// the "Official sources" block on every resource page is generated from
// ARTICLE_SOURCES. Add a law here once; cite it everywhere.
//
// Accuracy rule: quotes must be either (a) near-verbatim statute text, or
// (b) plainly labelled paraphrase. Section numbers are checked against
// kenyalaw.org at each Finance Act season. LAST_VERIFIED gates the stamp.

export const LAST_VERIFIED = "2026-09-27"

export interface LawProvision {
  section: string
  title: string
  says: string
  means: string
}

export interface Law {
  id: string
  name: string
  shortName: string
  category: "statute" | "regulations" | "finance-act" | "kra-guidance" | "regional"
  cap?: string
  year: string
  amendedBy?: string[]
  officialUrl: string
  officialLabel: string
  oneLiner: string
  whyItMatters: string
  provisions: LawProvision[]
  relatedSlugs: string[]
}

const KRA_VAT_URL = "https://www.kra.go.ke/individual/filing-paying/types-of-taxes/value-added-tax"
const KENYA_LAW = "http://kenyalaw.org:8181/exist/kenyalex/actview.xql?actid="
const KRA_TPA_URL = "https://www.kra.go.ke/business/holding-tax-compliance/obligations/penalties"

export const LAWS: Law[] = [
  {
    id: "vat-act-2013",
    name: "Value Added Tax Act, 2013",
    shortName: "VAT Act",
    category: "statute",
    cap: "Cap. 476",
    year: "2013",
    amendedBy: ["Finance Act 2023", "Finance Act 2024", "Finance Act 2025", "Finance Act 2026"],
    officialUrl: `${KENYA_LAW}CAP476`,
    officialLabel: "Full text on Kenya Law (kenyalaw.org)",
    oneLiner:
      "The statute that creates Kenya's VAT: the 16% standard rate, what is zero-rated and exempt, who must register, and how input tax credit works.",
    whyItMatters:
      "If a question is about what VAT is charged, at what rate, on what, and who must charge it — the answer lives here first. Everything KRA does in VAT administration executes this Act.",
    provisions: [
      {
        section: "s.5",
        title: "Charging provision — 16% on taxable supplies",
        says:
          "VAT is charged at 16% of the taxable value on supplies of goods and services made in Kenya by a registered person in the course of business, other than zero-rated or exempt supplies.",
        means:
          "The 16% rate is statutory, not a KRA choice. If someone quotes you a different rate on a standard supply, the Act — not the invoice — wins.",
      },
      {
        section: "s.14",
        title: "Compulsory registration — KES 5,000,000 turnover",
        says:
          "A person whose taxable turnover meets or exceeds KES 5,000,000 in any period of twelve consecutive months must apply to be registered for VAT.",
        means:
          "The threshold is measured on rolling twelve-month taxable turnover, not calendar year, and it is the KES 5M figure per KRA's operative guidance (the reported KES 8M increase is tracked on our threshold explainer until KRA confirms it).",
      },
      {
        section: "s.17",
        title: "Input tax deduction",
        says:
          "A registered person may deduct input tax on purchases used in making taxable supplies, subject to the documentary and timing conditions in the Act.",
        means:
          "Your claimable input VAT is tied to supplies that are themselves taxable — which is why exempt supplies poison input credit and why eTIMS invoices matter as evidence.",
      },
      {
        section: "s.29 & s.30",
        title: "Returns and payment by the 20th",
        says:
          "A registered person must file a VAT return and pay any tax due by the 20th day of the month following the tax period — including nil returns.",
        means:
          "The 20th is a statutory deadline, not a courtesy reminder. Filing on time matters even when you owe nothing, because the penalty for missing it is not zero.",
      },
      {
        section: "s.34",
        title: "VAT refunds — the 12-month rule",
        says:
          "Excess input tax may be refunded or credited; claims must be made within twelve months of the date the excess arose.",
        means:
          "Sit on a refund position too long and it expires. This deadline is the single most expensive thing credit-position SMEs ignore.",
      },
      {
        section: "First Schedule",
        title: "Zero-rated supplies (0%)",
        says:
          "Lists supplies taxed at 0% — including exports, unprocessed agricultural products, and specified medical and educational materials — with input VAT still claimable.",
        means:
          "Zero-rated is not 'no VAT paperwork': you still invoice at 0%, file returns, and can build refund positions from claimed inputs.",
      },
      {
        section: "Second Schedule",
        title: "Exempt supplies",
        says:
          "Lists supplies outside the VAT net entirely — including most financial services, insurance and education — on which no output VAT is charged and related input VAT is not claimable.",
        means:
          "Exempt is often the worse outcome for a business: no output VAT but you also lose the input credit, so VAT on your costs becomes a real cost.",
      },
    ],
    relatedSlugs: [
      "vat-rates-kenya",
      "vat-threshold-kenya",
      "vat-threshold-explainer",
      "how-to-calculate-vat-in-kenya",
      "input-vat-deduction-guide",
      "vat-refund-guide-kenya",
      "do-i-need-to-register-for-vat-kenya",
      "vat-vs-turnover-tax",
    ],
  },
  {
    id: "tax-procedures-act-2015",
    name: "Tax Procedures Act, 2015",
    shortName: "TPA",
    category: "statute",
    cap: "Cap. 469",
    year: "2015",
    amendedBy: ["Finance Act 2023", "Finance Act 2025", "Finance Act 2026"],
    officialUrl: KRA_TPA_URL,
    officialLabel: "KRA penalties & offences guidance",
    oneLiner:
      "The administrative backbone of Kenyan tax: registration duties, filing and payment deadlines, penalties, interest, audits and — since 2023 — electronic tax invoicing (eTIMS).",
    whyItMatters:
      "Almost every KRA penalty an SME meets is computed under this Act. If the VAT Act says what you owe, the TPA says what happens if you get it wrong — and by when.",
    provisions: [
      {
        section: "s.39",
        title: "Late filing penalty",
        says:
          "The penalty for failing to file a return by the due date is the higher of KES 10,000 or 5% of the tax due, with late-payment consequences under s.40.",
        means:
          "Even a nil return filed late can trigger the KES 10,000 minimum. 'I owed nothing' is not a defence to late filing.",
      },
      {
        section: "s.40",
        title: "Late payment — 5% plus 1% monthly interest",
        says:
          "Tax unpaid by the due date attracts a penalty of 5% of the unpaid amount plus compounding interest of 1% per month until paid.",
        means:
          "A KES 100,000 VAT bill ignored for a year grows by roughly KES 17,000+ in penalties and interest alone — and the interest keeps compounding while you wait.",
      },
      {
        section: "s.59A",
        title: "Electronic tax invoicing (eTIMS)",
        says:
          "Registered persons must use KRA's electronic tax invoice management system to issue invoices; failure to integrate or comply carries escalating penalties, including up to KES 100,000 per month (capped) for integration failures under s.59A(5).",
        means:
          "eTIMS is not optional software advice — it is a statutory duty. The penalties for ignoring it are in the same Act as the duty.",
      },
      {
        section: "s.86 (as amended by Finance Act 2026, in force 1 July 2026)",
        title: "eTIMS non-compliance penalty — minimums now bite",
        says:
          "For electronic filing and payment non-compliance, the penalty from 1 July 2026 is the higher of 5% of the tax due, KES 100,000 (companies) or KES 10,000 (individuals). Before 1 July 2026 the regime was two times the tax due (Finance Act 2023).",
        means:
          "Uninvoiced or wrongly invoiced sales now cost at least ten thousand shillings per failure for individuals — the minimums made small-business enforcement realistic for KRA.",
      },
      {
        section: "s.95",
        title: "Penalty for failing to register",
        says:
          "A person required to register who fails to apply is liable to a penalty of KES 100,000 per month for the period of failure.",
        means:
          "Staying invisible to KRA is the most expensive strategy available: the non-registration penalty accrues monthly and can dwarf the tax originally at stake.",
      },
      {
        section: "s.59A & Amnesty framework",
        title: "Waivers and amnesty mechanics",
        says:
          "KRA may waive or vary penalties on application; the 2026 amnesty (under the Tax Procedures (Tax Amnesty) Regulations, 2026) waives 100% of pre-2026 penalties, interest and fines for applications made before 31 December 2026.",
        means:
          "Penalties are negotiable through the statutory process — but only if you apply. Most SMEs never ask, which is exactly why the waiver process exists.",
      },
    ],
    relatedSlugs: [
      "kra-penalty-for-late-vat-filing",
      "kra-vat-penalties-reference",
      "kra-tax-amnesty-2026",
      "etims-penalties-2026",
      "etims-penalty-50000-per-month-kenya",
      "what-happens-if-i-don-t-register-for-vat",
      "vat-deregistration-kenya",
    ],
  },
  {
    id: "finance-act-2026",
    name: "Finance Act, 2026",
    shortName: "Finance Act 2026",
    category: "finance-act",
    year: "2026",
    officialUrl: "https://www.kra.go.ke/individual/understanding-your-obligations/various-taxes-under-income-tax-act",
    officialLabel: "KRA Finance Act resource centre",
    oneLiner:
      "The current year's tax amendments: eTIMS penalty minimums, VAT treatment of digital payment services, and the infrastructure for pre-populated VAT returns.",
    whyItMatters:
      "Finance Acts are how Kenyan tax law actually changes year to year. The 2026 Act is the one currently reshaping eTIMS enforcement and fintech VAT.",
    provisions: [
      {
        section: "eTIMS minimums (TPA s.86 amendment)",
        title: "Higher of 5% of tax due, KES 100,000 (companies) or KES 10,000 (individuals)",
        says:
          "Amends the Tax Procedures Act so that from 1 July 2026, electronic filing and payment non-compliance attracts the higher of 5% of the tax due or the statutory minimums — replacing the earlier 'two times the tax due' penalty from the Finance Act 2023.",
        means:
          "Small businesses lost their 'too small to chase' shield. A sole trader invoicing without eTIMS now faces a five-figure minimum, not a rounding error.",
      },
      {
        section: "Payment services VAT",
        title: "16% VAT on payment processing, gateway and aggregation services",
        says:
          "Payment processing, settlement, merchant acquiring, gateway and aggregation services supplied over a software platform move from exempt to taxable at 16%, effective 1 July 2026.",
        means:
          "Fintech pricing changes from July 2026 — merchants' payment fees now carry VAT, and fintechs must re-engineer invoicing and input credit apportionment.",
      },
      {
        section: "Pre-populated returns",
        title: "Data foundation for auto-populated VAT returns",
        says:
          "Provides the framework under which KRA pre-fills VAT returns from eTIMS and ledger data — with full auto-population rolling out toward 2027.",
        means:
          "Your eTIMS invoices effectively become your draft VAT return. Errors made at invoicing time now surface as return errors, so invoice hygiene is return hygiene.",
      },
    ],
    relatedSlugs: [
      "finance-act-vat-changes-kenya",
      "etims-penalties-2026",
      "vat-fintech-digital-payments-kenya",
      "vat-2027-auto-filled-returns",
      "vat-auto-populated-return",
    ],
  },
  {
    id: "finance-act-2025",
    name: "Finance Act, 2025",
    shortName: "Finance Act 2025",
    category: "finance-act",
    year: "2025",
    officialUrl: "https://www.kra.go.ke/individual/understanding-your-obligations/various-taxes-under-income-tax-act",
    officialLabel: "KRA Finance Act resource centre",
    oneLiner:
      "The 2025 amendments: reported VAT threshold change to KES 8M (operative status still pending KRA confirmation), plus CETIS pre-clearance groundwork.",
    whyItMatters:
      "The 2025 Act is where the threshold uncertainty SMEs keep asking about comes from — reported change, not yet the number KRA's systems apply.",
    provisions: [
      {
        section: "VAT registration threshold (reported)",
        title: "Reported increase of the mandatory threshold to KES 8,000,000",
        says:
          "Commentary on the Act reports an increase of the mandatory VAT registration threshold from KES 5,000,000 to KES 8,000,000; KRA's operative guidance continued to apply KES 5M as of our verification date.",
        means:
          "Until KRA's systems and guidance confirm the new number, planning on 5M keeps you safe: registering voluntarily when unsure is cheaper than a s.95 non-registration penalty.",
      },
      {
        section: "CETIS groundwork",
        title: "Pre-clearance e-invoicing direction (CETIS, 2027)",
        says:
          "Sets the legislative direction toward a pre-clearance e-invoicing model (CETIS) in which invoices are validated before transactions complete — following the pattern of Uganda's EFRIS.",
        means:
          "Businesses have 2026 to get eTIMS-clean before invoice validation moves upstream of the sale. Late adopters will feel it at the till, not at filing.",
      },
    ],
    relatedSlugs: [
      "vat-threshold-kenya",
      "vat-threshold-explainer",
      "cetis-kenya-2027",
      "finance-act-vat-changes-kenya",
    ],
  },
  {
    id: "finance-act-2024",
    name: "Finance Act, 2024",
    shortName: "Finance Act 2024",
    category: "finance-act",
    year: "2024",
    officialUrl: "https://www.kra.go.ke/individual/understanding-your-obligations/various-taxes-under-income-tax-act",
    officialLabel: "KRA Finance Act resource centre",
    oneLiner:
      "The 2024 amendments: replaced the 1.5% digital service tax with Significant Economic Presence tax and made further eTIMS and VAT administration changes.",
    whyItMatters:
      "It rewired how Kenya taxes foreign digital businesses — the change behind our SEP tax and digital services explainers.",
    provisions: [
      {
        section: "Significant Economic Presence tax",
        title: "DST replaced by SEP tax",
        says:
          "Repeals the 1.5% digital service tax on non-resident digital marketplaces and introduces Significant Economic Presence tax on non-residents with a significant economic presence in Kenya, computed on deemed taxable profit.",
        means:
          "Foreign platforms' Kenyan revenue is still taxed — but by a profit-based proxy rather than turnover. Non-resident suppliers also carry 16% VAT obligations under the 2023 digital marketplace regulations.",
      },
      {
        section: "VAT administration",
        title: "VAT administrative amendments",
        says:
          "Amended VAT administration provisions including refund process mechanics and eTIMS enforcement refinements.",
        means:
          "Refund documentation and audit positioning tightened — sloppy input credit records got more expensive from 2024 onward.",
      },
    ],
    relatedSlugs: [
      "significant-economic-presence-tax-kenya",
      "vat-digital-services-kenya",
      "vat-refund-guide-kenya",
      "vat-refund-audit-defense",
    ],
  },
  {
    id: "vat-digital-marketplace-regulations-2023",
    name: "VAT (Electronic, Internet and Digital Marketplace Supply) Regulations, 2023",
    shortName: "Digital Marketplace Regulations",
    category: "regulations",
    year: "2023",
    officialUrl: "https://www.kra.go.ke/business/holding-tax-compliance/digital-service-tax",
    officialLabel: "KRA digital services guidance",
    oneLiner:
      "The rules that pull foreign and local digital marketplace supplies into Kenya's 16% VAT net — and require non-resident suppliers to register.",
    whyItMatters:
      "If you sell digital services to Kenyan customers, or you buy SaaS from abroad, these regulations decide whether 16% VAT belongs on the invoice.",
    provisions: [
      {
        section: "Reg. 4-6",
        title: "Non-resident registration duty",
        says:
          "Non-resident suppliers of digital marketplace supplies to Kenyan consumers must register for VAT and charge 16% on those supplies, with simplified registration through KRA's portal.",
        means:
          "Kenyan customers of foreign SaaS/streaming platforms are paying Kenyan VAT through those platforms — and Kenyan businesses should expect VAT lines on invoices that previously had none.",
      },
      {
        section: "Reg. 8",
        title: "Local platforms as collection agents",
        says:
          "Kenyan operators of digital marketplaces may be required to account for VAT on supplies made through their platforms by non-resident sellers.",
        means:
          "Marketplaces became tax collectors: if you run one, your sellers' compliance is now partially your liability.",
      },
    ],
    relatedSlugs: [
      "vat-digital-services-kenya",
      "vat-fintech-digital-payments-kenya",
      "significant-economic-presence-tax-kenya",
    ],
  },
  {
    id: "tax-amnesty-regulations-2026",
    name: "Tax Procedures (Tax Amnesty) Regulations, 2026",
    shortName: "Amnesty Regulations 2026",
    category: "regulations",
    year: "2026",
    officialUrl: "https://www.kra.go.ke/business/holding-tax-compliance/tax-amnesty",
    officialLabel: "KRA tax amnesty page",
    oneLiner:
      "The statutory basis of the 2026 amnesty: 100% waiver of penalties, interest and fines on pre-2026 tax arrears for applications made before 31 December 2026.",
    whyItMatters:
      "This is the cheapest date in Kenyan tax compliance right now: debts reset to principal and businesses return to good standing before the eTIMS-driven enforcement era.",
    provisions: [
      {
        section: "Reg. 3-4",
        title: "Scope — 100% waiver on pre-2026 arrears",
        says:
          "Waives all penalties, interest and fines accrued on tax due before 1 January 2026, for taxpayers who apply within the window and pay the principal tax outstanding.",
        means:
          "The waiver covers the pain (penalties and interest), not the tax itself — the principal must still be paid, but the accumulated snowball disappears.",
      },
      {
        section: "Reg. 5",
        title: "Deadline — 31 December 2026",
        says:
          "Applications must be made by 31 December 2026; unpaid principal outside the amnesty terms continues attracting the normal s.40 penalty and interest regime.",
        means:
          "After the window closes, the old arithmetic returns: 5% + 1% monthly compounding. Waiting is a decision with a price.",
      },
    ],
    relatedSlugs: [
      "kra-tax-amnesty-2026",
      "nil-returns-tax-amnesty",
      "tax-compliance-certificate-kenya",
    ],
  },
  {
    id: "kra-practice-notes",
    name: "KRA Practice Notes, Public Notices & eTIMS Guidelines",
    shortName: "KRA guidance",
    category: "kra-guidance",
    year: "2024-2026",
    officialUrl: "https://www.kra.go.ke/helping-you-do-business/etims",
    officialLabel: "KRA eTIMS portal & guidelines",
    oneLiner:
      "KRA's operational instructions: how eTIMS onboarding actually works, portal error handling, deadline notices and the practical interpretations SMEs are held to daily.",
    whyItMatters:
      "KRA guidance is what its staff and systems actually do. We mirror the key official eTIMS/VAT PDFs in our forms library so the documents stay reachable when KRA's site moves them.",
    provisions: [
      {
        section: "eTIMS Onboarding Guidelines",
        title: "Device types, activation and rollout notices",
        says:
          "Define eTIMS versions (OSCU/VSCU, mobile, online portal, paypoint), activation steps, and the phased rollout of obligations by taxpayer segment.",
        means:
          "Which eTIMS variant you must run and when is defined here — and it is what our eTIMS diagnostic reasons over.",
      },
      {
        section: "Public Notices (2025-2026)",
        title: "Deadline changes, maintenance windows, amnesty notices",
        says:
          "KRA's legally binding announcements about filing deadline changes, iTax/eTIMS maintenance windows and amnesty procedures.",
        means:
          "When a deadline moves or a portal breaks, this is the document that moved it — and our deadline calendar and status pages track it so you don't have to.",
      },
    ],
    relatedSlugs: [
      "etims-onboarding-guide",
      "etims-mandate-guide",
      "kra-itax-maintenance-schedule",
      "kra-itax-traffic-update",
      "vat-deadline-reminders",
    ],
  },
  {
    id: "income-tax-act-cap-470",
    name: "Income Tax Act (Cap. 470)",
    shortName: "Income Tax Act",
    category: "statute",
    cap: "Cap. 470",
    year: "1974",
    amendedBy: ["Finance Act 2023", "Finance Act 2024", "Finance Act 2025"],
    officialUrl: `${KENYA_LAW}CAP470`,
    officialLabel: "Full text on Kenya Law (kenyalaw.org)",
    oneLiner:
      "The statute behind PAYE, withholding tax, turnover tax interactions, rental income and the creator-economy taxes our calculators model alongside VAT.",
    whyItMatters:
      "Businesses meet tax as a system, not one Act at a time: whether you also owe turnover tax, withholding on royalties, or tax on YouTube income is decided here, not in the VAT Act.",
    provisions: [
      {
        section: "s.35",
        title: "Withholding tax",
        says:
          "Requires deduction of tax at source on specified payments — including royalties to resident and non-resident content creators and service providers — at rates in the Act's schedules.",
        means:
          "The 'YouTube 5% tax' and similar creator-economy deductions are withholding mechanics under this Act, not VAT — they coexist with any VAT/GST applied by the platform.",
      },
      {
        section: "s.7A & rental rules",
        title: "Rental income taxation",
        says:
          "Rental income for resident individuals is taxable under the monthly rental income regime; VAT applies separately to commercial rent where the landlord is VAT-registered.",
        means:
          "Landlords ask 'is rent VAT-able?' — the honest answer is: income tax under this Act always applies; the 16% depends on your VAT registration status and the property's use.",
      },
      {
        section: "Turnover Tax framework",
        title: "Small-business turnover tax (1%/2%)",
        says:
          "Businesses with turnover below the VAT threshold and under KES 25M may fall under turnover tax at 1% (2% above KES 25M... within regime limits), instead of VAT and full income tax mechanics.",
        means:
          "Choosing between turnover tax and voluntary VAT registration is a real optimisation decision for SMEs just under the threshold — our VAT vs turnover tax guide runs the numbers.",
      },
    ],
    relatedSlugs: [
      "youtube-5-percent-tax-kenya",
      "vat-vs-turnover-tax",
      "non-resident-rental-income-tax-kenya",
      "vat-commercial-rent-kenya",
      "vat-for-landlords-kenya",
      "small-taxpayer-regime-kenya",
    ],
  },
  {
    id: "eac-customs-management-act",
    name: "East African Community Customs Management Act (EACCMA)",
    shortName: "EACCMA",
    category: "regional",
    year: "2004",
    amendedBy: ["EACCMA (Amendment) Acts", "Finance Acts (customs provisions)"],
    officialUrl: "https://www.kra.go.ke/business/starting-a-business/customs",
    officialLabel: "KRA customs division",
    oneLiner:
      "The regional customs law governing imports: duties, the iCMS clearance system, and the interface between customs valuation and VAT on imports.",
    whyItMatters:
      "Importers live in a two-tax world: customs duties under the EACCMA, then VAT on the customs value. The consolidated cargo rules changed that arithmetic for small shipments.",
    provisions: [
      {
        section: "Ninth Schedule & valuation",
        title: "Duty rates and customs value",
        says:
          "Sets import duty rates and the rules for computing customs value, which then forms the base on which import VAT (16%) is computed by KRA customs/iCMS.",
        means:
          "Under-declaring to save duty backfires twice: duties plus VAT both recompute on the corrected value, and undervaluation penalties sit outside the amnesty's comfort zone.",
      },
      {
        section: "Consolidated cargo provisions",
        title: "Grouped/consolidated shipments treatment",
        says:
          "Governs how consolidated (grouped) shipments are declared and valued — the mechanism behind the new benchmark where certain consolidated cargo is assessed at a flat value per shipment.",
        means:
          "For small importers using groupage, the per-shipment benchmark changed landed-cost maths overnight; our consolidated cargo benchmark page works through the scenarios.",
      },
    ],
    relatedSlugs: [
      "consolidated-cargo-benchmark-kenya",
      "vat-for-importers-kenya",
      "icms-export-guide",
    ],
  },
]

export const lawById: Record<string, Law> = Object.fromEntries(LAWS.map((l) => [l.id, l]))

// ---------------------------------------------------------------------------
// ARTICLE → SOURCE mapping. Every resource slug maps to the laws it
// interprets + optional extra official KRA URLs. Unmapped slugs fall back to
// the VAT Act + TPA + KRA guidance (the default Kenyan VAT answer trio).
// ---------------------------------------------------------------------------

const A: Record<string, { laws: string[]; official?: { url: string; label: string }[] }> = {
  // Registration cluster
  "do-i-need-to-register-for-vat-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "vat-registration-options-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "how-to-register-for-vat-in-kenya": {
    laws: ["vat-act-2013", "kra-practice-notes"],
    official: [{ url: "https://itax.kra.go.ke/KRA-Portal/", label: "KRA iTax portal" }],
  },
  "vat-registration-checklist": { laws: ["vat-act-2013", "kra-practice-notes"] },
  "vat-threshold-kenya": { laws: ["vat-act-2013", "finance-act-2025"] },
  "vat-threshold-explainer": { laws: ["vat-act-2013", "finance-act-2025"] },
  "what-happens-if-i-don-t-register-for-vat": { laws: ["tax-procedures-act-2015", "vat-act-2013"] },
  "vat-deregistration-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "vat-vs-turnover-tax": { laws: ["vat-act-2013", "income-tax-act-cap-470"] },
  "small-taxpayer-regime-kenya": { laws: ["income-tax-act-cap-470", "vat-act-2013"] },
  "kra-pin-registration-foreigners": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "how-to-register-kra-pin-individual": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "how-to-create-kra-pin": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "how-to-apply-for-kra-pin": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },

  // Rates & calculation cluster
  "vat-rates-kenya": { laws: ["vat-act-2013"] },
  "how-to-calculate-vat-in-kenya": { laws: ["vat-act-2013"] },
  "input-vat-deduction-guide": { laws: ["vat-act-2013"] },
  "vat-input-guide": { laws: ["vat-act-2013"] },
  "withholding-vat-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "vat-rates-east-africa-comparison": { laws: ["vat-act-2013", "eac-customs-management-act", "finance-act-2026"] },
  "vat-commercial-rent-kenya": { laws: ["vat-act-2013", "income-tax-act-cap-470"] },
  "vat-for-landlords-kenya": { laws: ["income-tax-act-cap-470", "vat-act-2013"] },
  "non-resident-rental-income-tax-kenya": { laws: ["income-tax-act-cap-470"] },
  "vat-special-table-risks": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },

  // Filing & returns cluster
  "how-to-file-vat-return-on-itax": {
    laws: ["vat-act-2013", "tax-procedures-act-2015"],
    official: [{ url: "https://itax.kra.go.ke/KRA-Portal/", label: "KRA iTax portal" }],
  },
  "vat-return-filing-checklist": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "how-to-file-nil-returns-2026": {
    laws: ["tax-procedures-act-2015", "kra-practice-notes"],
    official: [{ url: "https://itax.kra.go.ke/KRA-Portal/", label: "KRA iTax portal" }],
  },
  "vat-auto-populated-return": { laws: ["vat-act-2013", "finance-act-2026"] },
  "vat-2027-auto-filled-returns": { laws: ["finance-act-2026", "kra-practice-notes"] },
  "vat-return-dispute-auto-populated": { laws: ["tax-procedures-act-2015", "finance-act-2026"] },
  "vat-auto-population-input-tax-credit": { laws: ["vat-act-2013", "finance-act-2026"] },
  "vat-ledger-explained-kenya": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "nil-returns-tax-amnesty": { laws: ["tax-amnesty-regulations-2026", "tax-procedures-act-2015"] },
  "vat-deadline-reminders": { laws: ["vat-act-2013", "kra-practice-notes"] },

  // Penalties & amnesty cluster
  "kra-penalty-for-late-vat-filing": { laws: ["tax-procedures-act-2015"] },
  "kra-vat-penalties-reference": { laws: ["tax-procedures-act-2015"] },
  "kra-fine-70000": { laws: ["tax-procedures-act-2015"] },
  "kra-tax-amnesty-2026": { laws: ["tax-amnesty-regulations-2026", "tax-procedures-act-2015"] },
  "kra-penalty-waiver-kenya": { laws: ["tax-procedures-act-2015", "tax-amnesty-regulations-2026"] },
  "tax-compliance-certificate-kenya": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "kra-vat-audit-process": { laws: ["tax-procedures-act-2015", "vat-act-2013"] },
  "vat-refund-audit-defense": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "etims-penalties-2026": { laws: ["tax-procedures-act-2015", "finance-act-2026"] },
  "etims-penalty-50000-per-month-kenya": { laws: ["tax-procedures-act-2015", "finance-act-2026"] },

  // eTIMS cluster
  "etims-mandate-guide": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "etims-onboarding-guide": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-invoicing-guide": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "etims-compliance-checklist": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "etims-vs-shuru-comparison": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-pending-sync": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-down-offline-invoicing": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-account-locked": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-invoice-rejected": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-device-not-registered": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-cu-pin-invalid": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-duplicate-invoice": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-buyer-pin-missing": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "etims-what-does-kra-see": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "etims-can-i-claim-my-expenses": { laws: ["vat-act-2013", "kra-practice-notes"] },
  "etims-corporate-client-invoice-requirement": { laws: ["tax-procedures-act-2015", "kra-practice-notes"] },
  "etims-fuel-stations": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "kplc-blackout-etims-compliance": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "cetis-kenya-2027": { laws: ["finance-act-2025", "finance-act-2026", "kra-practice-notes"] },

  // Sector & situation cluster
  "vat-for-importers-kenya": { laws: ["eac-customs-management-act", "vat-act-2013"] },
  "consolidated-cargo-benchmark-kenya": { laws: ["eac-customs-management-act", "vat-act-2013"] },
  "icms-export-guide": { laws: ["eac-customs-management-act", "vat-act-2013"] },
  "vat-for-startups-tech-businesses": { laws: ["vat-act-2013", "income-tax-act-cap-470"] },
  "vat-for-freelancers-creators": { laws: ["income-tax-act-cap-470", "vat-act-2013"] },
  "youtube-5-percent-tax-kenya": { laws: ["income-tax-act-cap-470"] },
  "vat-for-restaurants-hospitality": { laws: ["vat-act-2013"] },
  "vat-for-construction-real-estate-kenya": { laws: ["vat-act-2013"] },
  "vat-for-ngos-kenya": { laws: ["vat-act-2013", "income-tax-act-cap-470"] },
  "vat-labour-outsourcing-kenya": { laws: ["vat-act-2013"] },
  "vat-digital-services-kenya": { laws: ["vat-digital-marketplace-regulations-2023", "finance-act-2024"] },
  "significant-economic-presence-tax-kenya": { laws: ["finance-act-2024", "vat-digital-marketplace-regulations-2023"] },
  "vat-fintech-digital-payments-kenya": { laws: ["finance-act-2026", "vat-digital-marketplace-regulations-2023"] },

  // Refunds & problems cluster
  "vat-refund-guide-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "vat-bad-debt-refund-kenya": { laws: ["vat-act-2013", "tax-procedures-act-2015"] },
  "real-tax-bill-kenyan-sme": { laws: ["vat-act-2013", "income-tax-act-cap-470", "tax-procedures-act-2015"] },

  // Portals & errors cluster
  "itax-portal-not-working": { laws: ["kra-practice-notes"] },
  "kra-status-code-500-itax-errors": { laws: ["kra-practice-notes"] },
  "kra-itax-maintenance-schedule": { laws: ["kra-practice-notes"] },
  "kra-itax-traffic-update": { laws: ["kra-practice-notes"] },
  "kra-pin-not-working": { laws: ["kra-practice-notes"] },
  "kra-portal-vs-service": { laws: ["vat-act-2013", "kra-practice-notes"] },
  "kra-health-check": { laws: ["kra-practice-notes", "tax-procedures-act-2015"] },
  "kra-data-sources": { laws: ["kra-practice-notes"] },
  "mpesa-error-codes": { laws: ["kra-practice-notes"] },
  "safaricom-not-working": { laws: ["kra-practice-notes"] },

  // FAQ / finance act
  "faq": { laws: ["vat-act-2013", "tax-procedures-act-2015", "finance-act-2026", "kra-practice-notes"] },
  "finance-act-vat-changes-kenya": { laws: ["finance-act-2025", "finance-act-2026", "vat-act-2013"] },
}

export interface ArticleSource {
  laws: Law[]
  official: { url: string; label: string }[]
}

export function sourcesForSlug(slug: string): ArticleSource {
  const entry = A[slug]
  const lawIds = entry?.laws ?? ["vat-act-2013", "tax-procedures-act-2015", "kra-practice-notes"]
  const official = entry?.official ?? []
  return {
    laws: lawIds.map((id) => lawById[id]).filter(Boolean),
    official,
  }
}

// Convenience: export the union of every referenced law id (for the hub page)
export const REFERENCED_LAW_IDS = LAWS.map((l) => l.id)

// The two most-load-bearing citations, reused site-wide
export const KRA_VAT_GUIDANCE_URL = KRA_VAT_URL
