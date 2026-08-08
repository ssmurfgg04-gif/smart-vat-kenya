# Phase 2 — Return Validity Module (RVM) & Validation Engine

_Date: 2026-08-08 · Status: engine shipped + content pivot_

## Summary

Phase 2 shipped the compliance layer that sits between a filed VAT return and a
health score: **the Validation module** (`engine/os/src/validation.ts`). It
compares declared figures against transmitted eTIMS data and classifies a return
as `clean`, `attention`, or `broken`, plus an invoice-classification helper for
input claims.

## Why

The Jan 2026 Special Table research landed in a disappointing place. The
supposed "Special Table" / "Taskforce Special List" concept — treated as a
mechanism for **blocking a buyer's input VAT based on the seller's KRA PIN** —
does not hold up as a concrete, actionable mechanism under current sources.

Reading the governing documents (VAT Act as amended by the Finance Act 2025,
Income Tax Act Sec. 30, eTIMS guidelines and portal docs) the "offset" duet of
buyer-claim blocking never appears as a rule. The scholarly sources we reviewed
(Allan Simiyu 2024 on VAT refund paralysis; KRA annual bulletins; CITPA guidance
memos on the VAT bill) make clear the actual recognition points for a return are:

1. **eTIMS enrolment and invoice transmission** — if an invoice was never
   transmitted, the buyer's claim collapses regardless of the supplier's register.
2. **Counterparty verification** — buyer PIN and seller PIN must both resolve on
   iTax/RAIS. Relying on a buyer's proper VAT database is the legal base for a claim.
3. **Output VAT vs. input VAT consistently** — the standard, and the real
   enforcement now sits in RAIS **Tax Alerts**, cross-checking eTIMS numbers
   against the filed return (systemic mismatch → an alert, not a supplier flag).
4. **The 12-month refund / input-claim clock** (Finance Lit): refunds recognised
   within the 12-month window; input VAT reclaimed within 6 months.

There is **no public supplier "Special Table" register**, and no mechanism whose
purpose is to block a compliant buyer's claim specifically because of the seller.
That DCDB-style idea came from SEO-mined content and does not survive contact with
the sources. What replaced it in the product:

## Engine changes (shipped)

| Module | Change |
|---|---|
| `validation.ts` (new) | `validateReturn` + `classifyMatchedInvoices`, tolerance 2%, codes `SALES_UNDER_REPORTED` / `SALES_OVER_DECLARED_OK` / `EXPENSES_UNSUPPORTED`, 14-day KRA query clock |
| `exposure.ts` | `assessRefund` enforces the 12-month refund clock and 120-day KRA processing window, `stale` outcome |
| `intel.ts` | KB updated: "Special Table → **Tax Alerts**" rule replaced vocabulary; golden set re-run (recall intact) |
| `index.ts` | exports `validation.js`, `os.validate()` + `os.iq` (isolation) |

## Content pivot

`src/components/resources/vat-special-table-risks.tsx` rebalanced:
- Discontinuation banner: VAT-Special-Table as an agent-facing mechanism is not
  supported by our sources; we keep the practical "don't file 6+ months of nil"
  advice because RAIS cross-checks are real.
- New section on **RAIS "Tax Alerts"** — the operative screen.
- Removed the "official KRA guidance confirms" claim that attributed a block.

## Next steps

- [ ] Port `validateReturn` into the portal flow (present alerts on a filed return).
- [ ] Wire `classifyMatchedLines` into the filing checklist page.
- [ ] Backlink matrix update so the Special Table page feeds the Tax Alerts / audit pages.
