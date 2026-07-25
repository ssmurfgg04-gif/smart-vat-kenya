export type KRAForm = {
  slug: string
  file: string
  title: string
  category: "VAT" | "eTIMS"
  kind: "Guide" | "Manual"
  description: string
  pages: number
  source: string
}

export const KRA_FORMS: KRAForm[] = [
  {
    slug: "vat-overview",
    file: "kra-vat-overview.pdf",
    title: "Value Added Tax (VAT) Overview",
    category: "VAT",
    kind: "Guide",
    description:
      "Official KRA guide explaining what VAT is, who must register (KES 5M threshold), input tax deductions, and tax invoices.",
    pages: 7,
    source: "kra.go.ke/images/publications/VAT_8112023.pdf",
  },
  {
    slug: "vat-brochure",
    file: "kra-vat-brochure.pdf",
    title: "VAT E-Brochure",
    category: "VAT",
    kind: "Guide",
    description:
      "Plain-language brochure covering VAT rates (16% / 0%), how output and input tax work, and who pays VAT in Kenya.",
    pages: 5,
    source: "kra.go.ke/images/publications/VAT-E-brochure-Final.pdf",
  },
  {
    slug: "vat-return-step-by-step",
    file: "kra-vat-step-by-step-guide.pdf",
    title: "Filing the Auto-Populated VAT Return (Step-by-Step)",
    category: "VAT",
    kind: "Manual",
    description:
      "Step-by-step KRA manual for filing the monthly VAT return (VAT 3) in iTax, including CSV import for Sections B, D1 and E.",
    pages: 13,
    source: "kra.go.ke/images/publications/Pre-populated-VAT-return-Step-by-Step-Guide-27-11-2023.pdf",
  },
  {
    slug: "vat-refunds-guide",
    file: "kra-vat-refunds-guide.pdf",
    title: "VAT Refunds Guide",
    category: "VAT",
    kind: "Guide",
    description:
      "How to claim a VAT refund on iTax under Section 17(5) of the VAT Act 2013, including zero-rated supplies and bad-debt refunds.",
    pages: 1,
    source: "kra.go.ke/images/publications/VAT-REFUNDS-.pdf",
  },
  {
    slug: "etims-onboarding-guidelines",
    file: "kra-etims-onboarding-guidelines.pdf",
    title: "eTIMS Onboarding Guidelines",
    category: "eTIMS",
    kind: "Guide",
    description:
      "Eligibility criteria for every eTIMS solution (Lite, Client, Online Portal, VSCU/OSCU) so you pick the right one for your business.",
    pages: 4,
    source: "kra.go.ke/images/publications/eTIMS-Taxpayer-Guidelines_2024.pdf",
  },
  {
    slug: "etims-onboarding-procedure",
    file: "kra-etims-onboarding-procedure-guide.pdf",
    title: "eTIMS Application Procedure",
    category: "eTIMS",
    kind: "Manual",
    description:
      "Walks through signing up on the eTIMS portal at etims.kra.go.ke, submitting the application, and officer approval.",
    pages: 8,
    source: "kra.go.ke/images/publications/eTIMS-Onboarding-procedure-User-guide-2024.pdf",
  },
  {
    slug: "etims-online-portal-guide",
    file: "kra-etims-online-portal-guide.pdf",
    title: "eTIMS Online Portal User Guide",
    category: "eTIMS",
    kind: "Manual",
    description:
      "How to log in, classify items, and raise invoices through the eTIMS Online Portal (for service-only suppliers).",
    pages: 11,
    source: "kra.go.ke/images/publications/eTIMS-Onlineportal-User-guide-2024.pdf",
  },
  {
    slug: "etims-lite-vat-guide",
    file: "kra-etims-lite-vat-guide.pdf",
    title: "eTIMS Lite (VAT) User Guide",
    category: "eTIMS",
    kind: "Manual",
    description:
      "Using eTIMS Lite for non-VAT and small taxpayers — simplified invoicing from a phone or browser.",
    pages: 29,
    source: "kra.go.ke/images/publications/eTIMS-lite-VAT-User-Guide.2023.pdf",
  },
  {
    slug: "etims-oscu-vscu-guide",
    file: "kra-etims-oscu-vscu-guide.pdf",
    title: "OSCU / VSCU Sign-Up Guide",
    category: "eTIMS",
    kind: "Manual",
    description:
      "Step-by-step sign-up for the Online and Virtual Sales Control Units, for businesses integrating an existing invoicing system.",
    pages: 13,
    source: "kra.go.ke/images/publications/OSCU_VSCU_Step-by-Step_Guide-on-how-to-sign-up.pdf",
  },
  {
    slug: "etims-paypoint-windows",
    file: "kra-etims-paypoint-windows-guide.pdf",
    title: "eTIMS PayPoint (Windows) Guide",
    category: "eTIMS",
    kind: "Manual",
    description:
      "Installing and using eTIMS PayPoint on Windows for goods and services invoicing at the point of sale.",
    pages: 34,
    source: "kra.go.ke/images/publications/eTIMS-Paypoint-Windows-User-guide-2025.pdf",
  },
  {
    slug: "etims-paypoint-android",
    file: "kra-etims-paypoint-android-guide.pdf",
    title: "eTIMS PayPoint (Android) Guide",
    category: "eTIMS",
    kind: "Manual",
    description:
      "Installing and using eTIMS PayPoint on Android — ideal for small and micro taxpayers invoicing on the go.",
    pages: 30,
    source: "kra.go.ke/images/publications/eTIMS-Paypoint-Android-User-guide-2024.pdf",
  },
  {
    slug: "etims-acknowledgement-form",
    file: "kra-etims-acknowledgement-form.pdf",
    title: "eTIMS Acknowledgement & Commitment Form",
    category: "eTIMS",
    kind: "Guide",
    description:
      "Acknowledgement and commitment form for eTIMS Client (Windows/Android) and Software Integration onboarding.",
    pages: 2,
    source: "kra.go.ke/images/publications/eTIMS-confirmation-document.pdf",
  },
]
