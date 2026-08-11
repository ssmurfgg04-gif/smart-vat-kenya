# eTIMS Integrator Sandbox — Start-Now Runbook

**Owner:** Smart VAT Kenya (builder lead)
**Status:** **JUST STARTED.** The sandbox is free, the certification has no published fee, and the cost is engineering time — our advantage. Begin sandbox work now, in parallel with the licensing sprint. Timeline anchor: CETIS procurement is for 2027–28; the approved-integrator list grows each quarter (35+ as at March 2025, up from ~7 a year earlier). Whoever holds a certificate before the next panic serves the wave.

---

## 1. What we're doing (one line)
Develop and test against KRA's public eTIMS sandbox, then submit the Bio Data Form (v3, 27 Sep 2023) for **eTIMS integrator certification** — giving SmartVAT the API license that becomes the SmartVAT OS engine layer (Phase 0/1).

## 2. The certification requirements (Bio Data Form, no published fee)
- Business registration + CR12
- Valid business permit
- Directors' IDs
- Tax Compliance Certificate (TCC)
- **3 qualified technical staff** (CVs + terms of employment) — our structural advantage as a builder-led shop
- Notarized solvency declaration
- Architecture documentation
- TIS (Tax Invoice System) software on optical disk
- The form asks an experience band (0–2 / 3–5 / 5+ years)

## 3. The sandbox flow (free, do it first)
1. Read the OSCU/VSCU technical specifications from the KRA eTIMS portal.
2. Get access to the **public sandbox** — build the integration, test invoice issuance, syncing, and error handling against test endpoints.
3. Build the compliance layer on top (not just invoicing): returns prep from invoice data, deadline engine, Special Table monitoring, health scores.
4. Submit the Bio Data Form with evidence of 3 technical staff + architecture docs + the working software.
5. Milestone: **interim approval certificate** → then approved-integrator status → then eTIMS VAT APIs when KRA extends the catalog (it has said it's extending to eTIMS and enhanced VAT compliance tools).

## 4. What "just start" means concretely this week
- [ ] Read the OSCU/VSCU specs (KRA eTIMS portal)
- [ ] Register for public sandbox access (free, developer.go.ke / eTIMS portal)
- [ ] Stand up the sandbox test harness — first eTIMS-format invoice submitted from our own code
- [ ] Draft the 3-technical-staff evidence pack (CVs + employment terms) even if names change later
- [ ] Kick off the notarized solvency declaration (administrative lead time)
- [ ] Begin the architecture-doc skeleton (system diagram: client → eTIMS API → SmartVAT OS)

## 5. Why now (not after the license clears)
- Certification is gated on **documentation and staff, not fees** — the long pole is evidence, not money.
- Sandbox development is independent of the tax-agent license and ODPC registration; running all three in parallel compresses the whole sprint.
- GavaConnect developer access is free and complementary (PIN/TCC/e-Slip checkers now; eTIMS/VAT APIs incoming). Apply in the same week.
- When CETIS lands, pre-clearance readiness will be served by whoever holds certificates — the ClearTax move is being certified *before* the wave.

## 6. Done when
- [ ] Sandbox harness producing valid eTIMS invoice payloads
- [ ] Bio Data Form submitted with full evidence pack
- [ ] Interim approval certificate received (assume 4–12 weeks, no published SLA)
- [ ] Approved-integrator status → eTIMS API license live in the SmartVAT OS engine