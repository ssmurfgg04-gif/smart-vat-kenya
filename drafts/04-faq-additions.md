# DRAFT — FAQ Additions (for existing pages)

Suggested FAQ entries to append to existing resource pages (`faq.tsx` = site FAQ page, `etims-*` pages = inline FAQ arrays). Write in the site's own voice; **facts below were verified 9 Aug 2026** — see sources at the bottom.

---

## For the master FAQ page (`/resources/faq/`) — new question groups

### Group 1 — eTIMS privacy & data: "Can KRA see my M-Pesa?" (cross-link to page 1 draft)

- **Q: Does eTIMS let KRA see my phone, computer or WhatsApp?**
  A: No. eTIMS transmits the invoice data you enter — seller and buyer PINs, date, description, quantity, price, tax, and a validation QR code. It does not read other apps, files, calls or messages. The only data KRA holds beyond your filings is what it collects from statutory records (eTIMS transactions, withholding tax certificates, customs, employment records).
  *(Reuse the wording from draft 1's "exactly what KRA sees" section.)*

- **Q: Is all the money in my M-Pesa or bank account taxed?**
  A: Money in an account is not income. Transfers, gifts, savings and family support are not taxable on their own. What is taxable is income you earn and fail to declare — and that's what KRA validates against its records of eTIMS invoices, withholding tax and returns. File truthfully and the picture is fine; file nothing while records show otherwise and the mismatch is the risk.

- **Q: If I issued eTIMS invoices during the year, can I still file a nil return?**
  A: No — KRA's systems cross-reference nil and non-filers against eTIMS, withholding and customs data, and that check is exactly what the 2026 compliance push runs on. If you transacted, file the accurate return (which often still means little or no tax below the thresholds).

## Group 2 — expense claimables: "Can I claim fuel / rent / electricity?" (cross-link to page 2 draft)

- **Q: Can I claim fuel as a business expense?**
  A: Yes, if the vehicle is registered in the business's name and the fuel purchase is backed by an eTIMS fuel receipt carrying your business PIN. Till receipts and handwritten dockets are proof of payment, not a claimable tax document. Fuel is now on the eTIMS fuel module — mandatory rollout finished December 2025, and receipts may be issued at the pump for both individual motorists and businesses; around 500 stations (16% of the country) were live by early 2026, so a station that can't issue yet is mid-onboarding.

- **Q: How do I claim Safaricom internet or airtime as a business expense?**
  A: Safaricom operates an official KRA compliance channel on its business portal (business.safaricom.co.ke/kra) — submit your business KRA PIN once and Safaricom's invoices transmit to iTax in real time with your PIN. Keep M-Pesa/payment records as supporting evidence either way.

- **Q: Can I claim KPLC electricity tokens as a business expense?**
  A: Only where the meter registration matches the party bearing the cost — if the meter and bill belong to your business, they support the claim and tokens prove payment. If you use a landlord's meter, the claim isn't yours without an invoice from the landlord.

- **Q: Can I claim rent without a receipt?**
  A: Rent is claimable where the landlord issues an eTIMS-compliant invoice bearing your PIN. Landlords earning KES 288,000–15 million a year in rent sit under Monthly Rental Income (MRI: 7.5% on gross rent since January 2024), and KRA is onboarding that base onto eTIMS precisely so tenants can claim — some landlords already issue monthly eTIMS rental invoices. If your landlord won't issue, make the ask in writing and keep every documented payment trail.

- **Q: Are M-Pesa till receipts valid for input VAT or deductions?**
  A: No — they are proof of payment only. Input VAT and expense claims require an eTIMS-invoice from the supplier. Keep both documents: M-Pesa for payment, eTIMS for the claim.

## 3. Error cluster (link to eTIMS troubleshooting pages)

- **Q: Why do I see "wrong obligation ID" or "NONVAT only" when creating an eTIMS invoice?**
  A: This error means your iTax obligations and your eTIMS registration are out of sync — e.g. you picked a NONVAT invoice type while no matching NONVAT obligation is active, or e-invoicing isn't activated on that PIN yet (the activation error reads "inactive/invalid PIN number"). Fix by reviewing your tax obligations in iTax, registering the right one (VAT / Income Tax — Business), and activating eTIMS for that PIN. If it persists, KRA eTIMS support (+254 711 099 999 / timsupport@kra.go.ke) activates or adjusts — usually within 1–2 working days.

- **Q: Can I claim my Facebook or Google ads, or AI subscriptions, without an eTIMS receipt?**
  A: Foreign providers do not issue KRA eTIMS invoices, so keep provider contracts and invoices plus the payment trail for these subscriptions; those are documentary support. Local claims still need eTIMS. This area changes frequently (digital services taxes apply), so check with an advisor rather than assuming.

- **Q: Do I still need accounting software if I use eTIMS?**
  A: Not for compliance alone — eTIMS Lite covers invoicing. But a bookkeeping tool (Zoho Books, QuickBooks, etc.) still handles the rest: receipts, profit, reporting, finance hygiene. Many businesses run eTIMS + accounting software side-by-side; the eTIMS invoices are the tax layer, the software is the business layer.

## Placements summary

| Entry | Target page |
| --- | --- |
| eTIMS = what KRA sees (3 qs) | `/resources/faq/` + new page 1 |
| Fuel / Safaricom / KPLC / rent / till | new page 2 + `/resources/faq/` |
| Wrong obligation ID / NONVAT | `/resources/etims-account-locked/` + new page 2 |
| Ads / AI / subscriptions | new page 2 + `/resources/faq/` |
| eTIMS vs accounting software | new page 2 + `/resources/faq/` |

**Fact-check status (all items resolved 9 Aug 2026):**

- Safaricom PIN mechanics — **VERIFIED**: official flow at business.safaricom.co.ke/kra (submit PIN once; invoices transmitted to iTax; "claim VAT seamlessly").
- KPLC meter/PIN rule — **VERIFIED PARTIAL**: no public "add PIN to tokens" flow documented; correct answer is the meter-registration rule (kept in draft 2). KRA does use Kenya Power account records among its datasets.
- Landlord eTIMS issuance — **VERIFIED**: MRI regime KES 288,000–15,000,000 @ 7.5% (effective 1 Jan 2024, Finance Act 2023); KRA onboarding landlords to eTIMS for tenant claims; eRITS filing channel (2025).
- Fuel module — **VERIFIED**: mandatory; deadline extended 30 Jun 2025 → 31 Dec 2025; 500+ stations (~16%) onboarded by Feb 2026; receipts issued at point of sale for individual motorists and businesses (KRA + The Kenya Times).
- KES 288,000 — **CLARIFIED**: it is the MRI entry band for landlords, NOT a general "no tax below 288k" exemption; TOT starts at KES 1M turnover; everyone with a PIN still files (late-filing penalty KES 2,000 or 5%). Corrected in all draft wording.
- "Wrong obligation ID / NONVAT" — **SOURCE DETAILS**: official iTax error text: "unable to generate a Tax Compliance Certificate due to Non-Compliance with eTIMS Registration as per your Active Tax Obligations" (iTax enhancements, Sep–Oct 2025); activation error "Unable to activate e-invoicing: inactive/invalid PIN number" — fix: verify obligations in iTax, activate eTIMS for the PIN, contact KRA eTIMS support (+254 711 099 999, timsupport@kra.go.ke).
- Penalty sanity-check — **VERIFIED**: 2024 e-invoice regs penalty up to KES 1,000,000 or 10% of tax per failure; VAT late filing KES 10,000 or 5% (higher); mismatch with casual "KES 10,000 eTIMS penalty" claims — use regs figures on the site.

**Sources:** KRA (kra.go.ke — eTIMS pages; iTax enhancements PDF; fuel station pages) · Business Daily (Feb 2026: nil-return reinstatement, 392,162 figure) · Safaricom Business KRA page · The Kenya Times / Sacco Review / Business Times Kenya (fuel module Feb 2026) · PropTraka / Veira / Buniva / Pangoni / KompliTax (MRI + landlords) · Wattanga interview (Sept 2025, M-Pesa access quote) · Money254 / Kenya Law (courts, M-Pesa data access, 288k).