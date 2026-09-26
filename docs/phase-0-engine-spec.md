# Phase 0 - SmartVAT OS: Internal Engine Spec

**Purpose:** Automate our own agency first. Every manual step in the current operation (200+ clients: registrations, monthly filings, amnesty/waiver work, refunds) is a spec. Phase 0 is internal-only - client-facing tiers come in Phase 1 on the same engine.

**North star of Phase 0:** cut cost-to-serve and error rate so the KES 3,500/month filing approaches software margin - while building the **golden dataset** (real filings, Special Table incidents, waiver outcomes) that trains the risk engine and AI later. The data is worth more than the software.

**Recipe for success:** design privacy-by-default from the first schema (DPIA-triggering health score coming later), host on Kenya infrastructure (serving copy per localization rule), and encode the intervention we already know works: remind → simplify → deterrence-framed.

---

## 1. Domain model

```
Client
  id
  fullName
  kraPin
  nationalId
  phone (WhatsApp)
  email
  businessName
  registrationNumber (CR12 / business license)
  address
  bankAccount
  tinType (individual / company / non-resident)
  vatStatus: 'registered' | 'pending' | 'deregistered' | 'never'
  status: 'active' | 'churned' | 'prospect'
  created_at

ClientDocument                     // document collection
  id
  client_id -> Client
  kind: 'id' | 'cr12' | 'bank' | 'tcc' | 'cr12-update' | 'power-of-attorney'
  storageRef (Kenya-hosted object store)
  verified: boolean
  uploaded_at

FilingPeriod
  id
  client_id -> Client
  taxType: 'vat' | 'paye' | ...        // vat first
  periodStart, periodEnd              // e.g. July 2026
  dueDate (20th of following month)
  status: 'pending' | 'collected' | 'filed' | 'filed-late' | 'liable-to-penalty'
  amountOutputTax, amountInputTax
  amountDue                          // output - input
  filingDate (target: the 17th)
  receiptOfConfirmation (KRA reference)
  filedById -> TeamMember
```

```
AmnestyCase                   // three-path triage, this quarter
  id, client_id -> Client
  path: 'auto-paid' | 'auto-to-file' | 'principal-lump' | 'principal-plan' | 'dispute-adr'
  outstandingReturns: [FilingPeriod ids]
  principalOwed: Amount
  penaltiesAndInterest: Amount
  status: 'checking' | 'filing' | 'planning' | 'waived' | 'excluded'
  ledgerCheckAt, waivedAt, deadline (2026-12-31)

RecoveryCase                  // the sleeper market - refunds
  id, client_id -> Client
  kind: 'refund' | 'objection' | 'audit-defence'
  amountClaimed, amountRecovered
  status: 'open' | 'submitted' | 'under-review' | 'recovered' | 'rejected'
  successFeeBasis: percent-of-recovery

Invoice                       // golden dataset + future factoring pipeline
  id, client_id -> Client
  eTimsRef (from eTIMS, now; from CETIS pre-clearance later)
  issuedAt, amount, vatAmount
  buyerPin, validated
  isCreditNote, isOffline
  status: 'ok' | 'rejected' | 'pending-sync' | 'special-table-blocked'

Payment

  id, client_id -> Client
  provider: 'mpesa' (Daraja), amount, ref, received_at
  billingCycleRef
```

---

## 2. Core workflows

### 2.1 Deadline engine (the 17th - the product's soul, made mechanical)
- Rule: `filingTargetDate = 17th of the period corpus month` for every VAT filing.
- Timer: daily job that enumerates all `FilingPeriod.status IN (pending, collected)` due within 3 days of the 17th.
- Outbound: WhatsApp (Cloud Business API) reminder with a **deterrence-framed** message - lead with the consequence, per Kenya's RCTs:
  > "Your July 2026 VAT return is due in 3 days. A missed deadline costs KES 10,000 automatically. Ready to file?" 
- Log: every reminder + every filing + every KRA confirmation receipt → audit trail.
- Guarantee trigger: any `status='filed-late'` where the delay is on us → route to 17th-Guarantee case: dispute with KRA on the client's behalf + cover any fee caused by our error (process guarantee - no blanket financial payout).

### 2.2 Amnesty triage (three-path decision logic)
Input: KRA PIN → iTax ledger check.
- path = classify:
  1. principal fully paid by 2025-12-31 → `auto-paid` (no application)
  2. no principal, only late-filing penalties → `auto-to-file` (file outstanding returns → automatic)
  3. pre-2026 principal, can pay lump → `manual-lump`
  4. pre-2026 principal, needs instalments → `manual-plan` (iTax payment plan, cleared by 2026-12-31)
  5. active dispute → `dispute-adr` (route to ADR/principal settlement first)
- Output: workflow actions for each path + a clear deadline countdown to 2026-12-31.
- Reject edge cases: any post-2025 liability → excluded (`out-of-scope`).

### 2.3 Waiver / refund / objection tracking
- Single `RecoveryCase` ledger; status transitions recorded with timestamps and team member.
- For credit filers (~52% of active VAT): auto-flag `amountInput > amountOutput` sustained → surface refund-recovery offer (success-fee, % of recovery).

### 2.4 M-PESA billing (Daraja) + receipts
- Paybill integration: registration `listens` to STK / C2B; upon confirmation, mark client paid and email/WhatsApp the receipt.
- Receipts generated and stored for every payment (already a claim on the site - make it mechanical).

---

## 3. Data & compliance by design (non-negotiable)
- **Host in Kenya** or keep a serving copy in Kenya (DPA localization rule).
- **Encryption at rest + in transit** for KRA PINs, IDs, financial data.
- **Access control**: least-privilege; only licensed staff can view/process.
- **Breach procedure**: 72-hour ODPC notification, 48-hour processor→controller.
- **Golden dataset capture**: every filing/waiver outcome logged with structured codes so it can later train the risk engine and the "what actually works in Kenya" reports (IKESRA findings: knowledge + automation improve SME compliance).

---

## 4. Stack recommendation (techie-first)
- Backend + DB: Postgres (structural compliance, Kenya-hosted).
- Object store: Kenya-region storage for docs (localization).
- WhatsApp: Cloud Business API (on-prem deprecated Oct 2025) - service conversations free.
- Payments: Safaricom Daraja (M-PESA) + receipts.
- Jobs/cron: the deadline engine and Trends-RSS monitor (geo=KE, category=b, tax-keyword filters: KRA, tax, eTIMS, Finance Bill, amnesty).
- GavaConnect: PIN check, TCC checker, NIL filing, e-Slip checker now; tie into eTIMS/VAT APIs when they land.
- Identity/auth: our own staff auth only in Phase 0 (internal).

---

## 5. Phase 0 acceptance criteria
- [ ] Client records + document collection live and used for every new registration
- [ ] Deadline engine reminds + files on the 17th with a judgment proof trail
- [ ] Amnesty triage accurately classifies the 3 (5) paths from a real ledger
- [ ] M-PESA billing + receipts automated
- [ ] Golden dataset growing with structured filing/waiver/refund outcomes
- [ ] Data-hosted-in-Kenya + privacy-by-default demonstrated

## 6. Not in Phase 0 (later)
- Self-serve / assisted / full-service tiers (Phase 1)
- GavaConnect/eTIMS API integration at scale (Phase 2)
- B2B2B licensing to other agents (Phase 3)
- Invoice factoring enablement on validated invoices (2028+)