// SINGLE SOURCE OF TRUTH for all legal/commercial facts on the site.
// Rule: every page imports from here. Never hardcode a number elsewhere.
// Update ONLY when law changes (Finance Act season) — then bump LAST_VERIFIED.

export const FACTS = {
  lastVerified: "2026-08-08",
  standardRate: "16%",
  standardRateSource: "VAT Act (Cap. 476); KRA VAT page, verified 2026-08-08",

  // THRESHOLD — decision tree outcome: KRA + PwC both say 5M operative as of 2026-08-08
  mandatoryThreshold: "KES 5,000,000",
  voluntaryFrom: "KES 5,000,000",
  thresholdStatus: "KRA official guidance applies KES 5M (verified 2026-08-08); an increase to KES 8M has been reported via Finance Act 2025 commentary. See our explainer: /resources/kra-portal-vs-service/",
  thresholdSource: "KRA: kra.go.ke/individual/filing-paying/types-of-taxes/value-added-tax",

  filingDeadline: "20th of the following month",
  filingDeadlineSource: "KRA iTax guidance",

  lateFilingPenalty: "Higher of KES 10,000 or 5% of tax due, plus 1% interest per month",
  latePaymentPenalty: "5% of unpaid tax plus 1% interest per month",

  nonRegistrationPenalty: "KES 100,000 per month (TPA s.95)",
  nonRegistrationSource: "Tax Procedures Act (Cap. 469), s.95 — verified 2026-08-08",

  etimsNonCompliance: "2x tax due, with Finance Act 2026 minimums of KES 100,000 (companies) / KES 10,000 (individuals)",
  etimsNonComplianceSource: "TPA s.86 as amended by Finance Act 2026 (Business Daily, 26 Jul 2026)",

  etimsIntegrationFailure: "KES 100,000 per month, capped at KES 1,000,000 (TPA s.59A(5))",
  etimsIntegrationSource: "Tax Procedures Act s.59A(5)",

  amnesty: "100% waiver of pre-2026 penalties, interest and fines until 31 December 2026",
  amnestySource: "KRA Tax Amnesty 2026",

  prices: {
    registration: "KES 5,000",
    monthlyFiling: "KES 3,500",
    penaltyWaiver: "KES 4,000",
  },

  contact: {
    whatsappDisplay: "+254 721 725 958",
    whatsappUrl: "https://wa.me/254721725958",
    email: "info@smartvatkenya.co.ke",
    address: "Pioneer House, Moi Avenue, Nairobi CBD, Kenya",
  },

  branding: {
    siteName: "Smart VAT Kenya",
    domain: "https://smartvatkenya.co.ke",
  },
} as const