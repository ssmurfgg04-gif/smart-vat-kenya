# Content & Outreach Roadmap - Three-Bucket Segmentation

**Owner:** Smart VAT Kenya
**Why this replaces the old "VAT SMEs" blob:** KRA's April 2026 numbers (Editors Guild engagement) show "VAT SME" is not one market. It is at least three structurally different pain profiles. Targeting each bucket with its own content → own keyword set → own product is sharper than bidding on generic "VAT Kenya" terms.

The three buckets (verified, KRA disclosed figures):

| # | Segment | Size (approx) | Core pain | Product fit |
|---|---|---|---|---|
| 1 | Active remitters | ~25,600 | Deadline discipline, eTIMS expense validation, audit risk | Monthly filing + the 17th Guarantee - the heart of the business |
| 2 | Credit filers | ~60,500 | KRA owes them input-VAT refunds; refunds stall, get rejected, need reconciliation | **Refund recovery (% of recovery)** - the largest underserved segment; the 2028 factoring pipeline |
| 3 | Special Table (supply-chain) | 101,000+ taxpayer names / blocked input VAT | Input credits blocked (some 2+ years), supplier due-diligence on VSCU/Online Portal | **Special Table removal + supplier hygiene** as its own product, not a subtopic |

Shared tail: nil/zero filers (~30,200, deactivation risk) and TIMS-but-not-eTIMS (~45,285) are funneled from bucket 3's and the amnesty's content, not treated as a fourth pillar.

---

## 1. Bucket 3 - Special Table (101,000+ names) as its own product

Currently buried as a risk explainer (`vat-special-table-risks`). The market framing (101k people, 7,719 missing-trader enablers, some blocked 2+ years) warrants standing it up as a distinct offer.

- **Own the SERP:** "KRA VAT Special Table," "how to get off the Special Table," "supplier on Special Table blocked input VAT Kenya."
- **Product - "Special Table Reset":** fixed-fee engagement - find the blocking supplier(s), replace or rehabilitate the supplier, resubmit/seek removal, restore input-VAT credit. Flat published price = the LegalZoom move.
- **Buy-side angle (procurement managers):** a free "is my supplier on the Special Table" check - the mirror of the free amnesty ledger check. Emotional landmine for procurement teams; WhatsApp-native.
- **Cross-sell:** anyone you free from a blocker is a credit-filer candidate (bucket 2).

## 2. Bucket 2 - Credit filers (~60,500) as the refund-recovery segment

The sleeper. 60,500 businesses are owed money by KRA. They don't need "filing," they need recovery - and every stalled/mismatched/rejected refund is a pain point with a monetary value we can price as a % of recovery.

- **Own the SERPs:** "KRA VAT refund Kenya," "claim input VAT refund," "refund rejected iTax," "amended return vs refund".
- **Offer:** "We find money KRA owes you. % of what we recover - nothing if we don't." Gain-framed, unlike the fear-framed filing product. This is the psychology flip in the plan (loss aversion for remitters, gain framing for credit filers).
- **Pilot:** 5–10 friendly credit-filer clients in weeks 5–8 (per the revised priorities). Track recovery rate → becomes the case-study library and the proof for the factoring pitch (2028+).
- **Data hook:** the golden dataset logs which clients file sustained credit positions (`amountInput > amountOutput`); auto-flag them for the refund offer (Phase 0 engine already models `RecoveryCase`).

## 3. Bucket 1 - Active remitters (~25,600), the core

- Keep the flagship monthly-filing + 17th Guarantee offer. Content is the retention backbone: deadline reminders (the 17th), eTIMS expense-validation alerts, audit-readiness checklists.
- Existing pillar dominates bucket 1: `kra-vat-penalties-reference`, filing guides, `kra-vat-audit-process`, the amnesty cleanup page pulls nil-filers into bucket 1's orbit.

---

## 4. Content calendar by bucket (this quarter)

| Dispatch | Bucket | Piece |
|---|---|---|
| Now | 1 (all) | CETIS pre-positioning guide (done: `/resources/cetis-kenya-2027/`) - pre-clearance e-invoicing, Uganda EFRIS cautionary structure |
| Now | 2 | VAT refund deep-dive (existing `vat-refund-guide-kenya`) promoted as the credit-filer entry point |
| Now | 3 | Special Table reset: upgrade `vat-special-table-risks` → own product page + free "is my supplier flagged" check |
| Weeks 1–4 | 1/2/3 | A `:refund recovery` gateway, a Special Total standalone, amnesty cleanup (existing) |
| Weeks 5–8 | 2 | Refund-recovery pilot case study (first real recovered refund, anonymized) |
| Monthly | 1 | "sWhat KRA changed this month" - the beat-report engine (Trends-RSS triggered) |

## 5. Productization of the three buckets (short ladder)

- Bucket 1 → Monthly Filing (KES 3,500/mo) + the 17th Guarantee.
- Bucket 2 → Refund Recovery (% of recovery) - genuine gain-framed upsell.
- Bucket 3 → Special Table Reset (flat fee) + supplier-hygiene check (free lead magnet).

Each is a self-selling SKU with a flat published price - no discovery calls - the LegalZoom/LegalZoom moat.

## 6. This week's execution

- [ ] Promote `cetis-kenya-2027` to the top of the resources index (done: `featured: true`, index entry).
- [ ] Add reciprocal CETIS links from eTIMS guides (done: onboarding + invoicing).
- [ ] Add `cetis-kenya-2027` cross-link from `vat-special-table-risks` and `kra-vat-penalties-reference` (next).
- [ ] Draft the Special Table "own product" page + free supplier check CTA (next).
- [ ] Draft the refund-recovery offer page with %-of-recovery pricing (next).