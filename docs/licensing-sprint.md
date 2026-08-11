# Licensing Sprint — Runbook

**Owner:** Smart VAT Kenya
**Goal:** Convert claimed trust ("Registered KRA agent") into certified, regulated, un-copyable trust — tax agent license, ODPC registration, and a data-protection pack. All three are cheap, fast, and become the moat behind the 17th Guarantee.
**Status:** **JUST STARTED — these are no longer "verify then start".** Applied for the KRA tax agent license (KES 20,000) and ODPC registration (KES 4,000) now; turnaround times are known unknowns (4–12 weeks) so the paperwork is in flight while we build. Do not wait for approval before doing the sandbox work below.

---

## 1. The three licenses, in one line each

| License | Cost | Why you need it | Risk if you skip it |
|---|---|---|---|
| KRA Tax Agent License | KES 20,000 (non-refundable) | "Licensed by KRA under the Tax Procedures Act" is a better trust signal than any testimonial; lets you represent taxpayers before the Commissioner/TAT | Most "facilitators" in Nairobi operate in the iTax gray zone — a fragility, not a moat |
| ODPC Registration (Data Controller) | KES 4,000 (renewal KES 2,000, 24-month cert) | Mandatory at ≥KES 5M turnover OR ≥10 employees; SmartVAT (~200 clients, ~KES 8.4M revenue) is in scope | Unregistered processing of Kenyan data is an offence |
| ODPC Registration (Data Processor) | Same micro tier | You process taxpayer data on instructions of clients | See above |

---

## 2. Track A — KRA Tax Agent License (Tax Procedures (Tax Agents) Regulations 2019)

### 2.1 Qualification paths (you need ONE)
- ICPAK member with 3+ years' experience, OR
- Advocate with practicing certificate and 3+ years, OR
- Former tax administrator with 10+ years, OR
- **"Any other relevant qualifications and experience recognized by the Commissioner"** — the catch-all door for a competent non-accountant. **This is your path.**

### 2.2 What a licensed agent can do (your new scope)
- Prepare and submit returns on behalf of clients
- Liaise with KRA
- Advise and represent taxpayers before the Tax Appeals Tribunal
- Backs the 17th Guarantee as an operational, holdable promise (a licensed agent with a clean record can add professional-indemnity backing for the dispute-and-cover-our-error clause)

### 2.3 Application steps
1. Obtain the Tax Agent registration form (Tax Procedures Act portal / KRA).
2. Prepare fit-and-proper documentation: identity, qualifications, experience record (document the "relevant qualifications" argument explicitly — this is where you justify the catch-all path).
3. Prepare CR12 / business registration and KRA PIN for the applying entity.
4. Submit with the KES 20,000 non-refundable fee.
5. Await Tax Agents Committee review — assume 4–12 weeks; treat **application acknowledgement** as the first milestone, **interim approval certificate** as the real one.
6. Once certified: display "Licensed by KRA under the Tax Procedures Act" site-wide (hero, footer, About, WhatsApp auto-reply).

### 2.4 Legal truth to design around
KRA guidance is explicit: *"The appointment of a tax agent does not relieve taxpayers from performing any obligation imposed on them under a tax law that their tax agent has failed to perform."*
**Therefore the 17th Guarantee is a voluntary process undertaking with a defined boundary — not a statutory waiver and not a financial-insurance product.** Its enforceable core is: file by the 17th, fix rejects free, human review; plus the low-risk fallback of disputing with KRA and covering fees caused by our own error. Draft the terms precisely and get them reviewed before advertising loudly.

---

## 3. Track B — ODPC Registration (Data Controller + Processor)

### 3.1 Threshold check (confirm before relying on it)
- Mandatory registration if **turnover ≥ KES 5,000,000/year OR ≥ 10 employees**.
- SmartVAT at ~200 clients / ~KES 8.4M revenue is in scope. Confirm your exact current turnover/headcount.

### 3.2 Steps
1. Register via the ODPC portal (`odpc.go.ke`) as **Data Controller**.
2. Register as **Data Processor** (you process taxpayer data on clients' instructions).
3. Micro tier: KES 4,000 fee, KES 2,000 renewal, 24-month certificate.
4. Display the certificate on the site + link to your privacy policy.
5. Record a Data Protection Officer (can be internal, named on About page).

### 3.3 The compliance pack (build once, reuse everywhere)
- **Privacy policy** (plain English) — what data you collect (KRA PIN, ID, CR12, bank), why, retention.
- **DPA agreements** with all sub-processors (WhatsApp Business API via Meta, M-PESA/Daraja via Safaricom, any hosting provider).
- **Data localization**: process through a Kenya data center or keep a serving copy in Kenya. This is the marketing claim Zoho/QuickBooks cannot honestly make: **"ODPC-registered. Your data stays in Kenya."**
- **72-hour breach notification** procedure (48 hours processor→controller).
- **DPIA** for the compliance-health-score profiling product (ODPC's 2026 toolkit lists "systematic and extensive automated evaluation or profiling" as DPIA-triggering). Design privacy-by-default from the first schema.

### 3.4 Why this is a moat
Offshore platforms (Zoho Books approved integrator 2026, QuickBooks via connectors) process Kenyan taxpayer data through offshore infrastructure. Data localization + ODPC registration is a *true-by-law* differentiator no offshore competitor can copy.

---

## 4. Track C — The 17th Guarantee (process guarantee, not a financial promise)

**Decision:** We do NOT sell a "if we miss, we pay your fine" penalty guarantee. Underwriting a financial payout makes us an insurer before we have actuarial data, and KRA holds the client legally liable regardless — a payout after the fact is a messy, uninsurable overpromise. Instead we sell a guarantee on the *process we control*.

1. **The promise (what's on the site):**
   - "We file on the 17th" — deadline discipline, the headline.
   - "We fix rejects for free" — if KRA rejects a filing (not the client's error), we fix and resubmit at no extra cost within 24h.
   - "Reviewed by a person before it goes out" — human QC on every return.
2. **The "On-Time" fallback (contractual, defined, low-risk):** if the client ever receives a late-filing penalty while we manage the account, we *dispute it with KRA on their behalf* and cover any fee that results from our own error — not blanket liability. KRA frequently waives penalties for system/agent error, so the dispute is the realistic outcome.
3. **Price it in:** the process guarantee is included in KES 3,500/month assisted and KES 5,000–6,000/month full-service; explicit in terms.
4. **Advertise:** hero, footer, WhatsApp auto-reply, every ad. Headline: "We file on the 17th. We never leave you at the deadline."

---

## 5. Week-1 checklist (what to actually do now)

- [ ] Apply for KRA Tax Agent license (KES 20,000) — start today, turnaround is the long pole
- [ ] Register with ODPC as Data Controller + Processor (KES 4,000)
- [ ] Write the plain-English privacy policy
- [ ] Draft DPA template for sub-processors
- [ ] Write the 72-hour breach-notification procedure
- [ ] Document the "any other relevant qualifications" argument for the Tax Agent application
- [ ] Draft the 17th Guarantee terms (dispute + our-error coverage) and get legal review
- [ ] Plan the Kenya-hosted data architecture (Phase 0 engine → serving copy in Kenya)

## 6. Done when
- [ ] Tax Agent application acknowledged (milestone 1) → interim approval (milestone 2)
- [ ] ODPC certificates issued and displayed on site
- [ ] Privacy policy + DPA pack live
- [ ] 17th Guarantee (process guarantee) live publicly with defined terms
