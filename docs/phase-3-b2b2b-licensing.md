# Phase 3 - B2B2B Licensing Sprint

_Date: 2026-08-08 · Status: plan ready_

## Summary

License the SmartVAT OS to other KRA-registered tax agents and accounting firms.
The engine (phases 0–2) is the product; the license turns our cost-to-serve advantage
into recurring ARR from agents who want our compliance stack without building it.

## Why Now

- Phase 0–2 engine is production-grade: deadline engine, amnesty triage, 17th Guarantee
  filing, health scoring, exposure screening, refund diagnosis, benchmarks, Tax
  Alerts/validation engine, client shell, WhatsApp + M-PESA + Paystack ports, webhooks,
  PIN/TCC/eTIMS integrations, 122 tests green.
- Kenya agent market is fragmented: ~3,000 KRA-registered agents, most running
  manual WhatsApp/Excel workflows. None have a compliant automation stack.
- ODPC + data localization (Phase 0 acceptance) is a **legal moat** offshore
  platforms cannot copy. Agents licensing our stack inherit the moat.
- First-mover on "Tax Alerts + validation engine" content + engine = brand authority.

## License Model

| Tier | Target | Includes | Price (KES/mo) |
|------|--------|----------|----------------|
| **Starter** | Solo agent / small firm | Engine API (filing, reminders, health, exposure), WhatsApp + M-PESA ports, in-memory store, no custom branding | 15,000 |
| **Professional** | 5–20 clients | Starter + persistent Postgres store, custom reminder copy, priority support, white-label WhatsApp sender ID, webhook dashboard | 45,000 |
| **Enterprise** | 20+ clients / multi-branch | Professional + dedicated infra (Kenya DC), SLA, custom webhooks, co-branded portal, training + onboarding | 120,000+ |

**Revenue share option**: Agents on Starter/Professional can opt for 20% of their
client fees instead of flat fee (whichever is higher, min KES 10,000/mo).

## Delivery Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  SmartVAT OS (single tenant per licensee)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ Filing Svc  │  │ Health/Exp  │  │ Client Shell│        │
│  │ (Gava-wired)│  │ (Alerts/Val)│  │ (WhatsApp,  │        │
│  └─────────────┘  └─────────────┘  │  M-PESA)    │        │
│        │             │            └─────────────┘        │
│        ▼             ▼                  │                │
│  ┌─────────────────────────────────────┐                 │
│  │         Licensee Config Layer       │                 │
│  │  (branding, pricing, webhooks, keys)│                 │
│  └─────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
          │                    │                    │
          ▼                    ▼                    ▼
    ┌─────────┐         ┌─────────┐         ┌─────────┐
    │ Licensee│         │ Licensee│         │ Licensee│
    │   A     │         │   B     │         │   C     │
    │ (own    │         │ (own    │         │ (own    │
    │  Gava   │         │  Gava   │         │  Gava   │
    │  creds) │         │  creds) │         │  creds) │
    └─────────┘         └─────────┘         └─────────┘
```

- Each licensee gets their own **GavaConnect credentials** (PIN → key/secret per product).
- Shared engine code; per-licensee config via env / database.
- Deployed on Kenya-hosted infra (Postgres + object store) - satisfies ODPC
  data-localization for licensee and their clients.

## Sprint Plan (6 weeks)

### Week 1 - Multi-tenant Core & Config Schema
- [ ] Add `licensee_id` to `ClientStore` schema; scope all queries by licensee
- [ ] Licensee config table: branding, WhatsApp sender ID, M-PESA credentials, webhook endpoints, pricing overrides
- [ ] Config injection into `createFullEngine` - `FullEngineConfig` gets `licenseeId`, resolves credentials from config store
- [ ] Unit tests: licensee isolation (store, filing, portals)

### Week 2 - Licensee Onboarding & Provisioning
- [ ] Admin CLI / API: `createLicensee({ name, tier, gavaCreds, whatsapp, mpesa })`
- [ ] Generate per-licensee `GavaClient` from stored creds; validate on create
- [ ] Seed licensee config with defaults (reminder copy, 17th Guarantee terms)
- [ ] Provision isolated DB schema or row-level security per licensee
- [ ] Docs: licensee onboarding guide (how to get Gava creds, WhatsApp Business API, Daraja)

### Week 3 - White-Label Client Portal (licensee-facing)
- [ ] Licensee dashboard: view their clients, health scores, filing status, revenue
- [ ] White-label WhatsApp sender ID (licensee's business name in messages)
- [ ] Webhook dashboard: view filing outcomes, payment receipts, Tax Alerts
- [ ] Embeddable client portal iframe for licensee's website (brand colors, logo)
- [ ] Licensee billing: usage metering (filings, reminders, STK pushes) → invoice

### Week 4 - Compliance Pack for Licensees (ODPC inheritance)
- [ ] DPA template pre-filled with SmartVAT as sub-processor
- [ ] Data localization evidence pack (Kenya DC cert, backup region)
- [ ] Breach notification procedure (72h) templated for licensee
- [ ] DPIA guidance for health-score profiling (licensee as controller)
- [ ] Privacy policy generator (licensee brand, SmartVAT as processor)

### Week 5 - Sales Enablement & Pilot
- [ ] Agent pitch deck: "17th Guarantee + Tax Alerts engine = your moat"
- [ ] Pilot agreement template (3 months, KES 15k/mo, success criteria)
- [ ] Identify 3–5 pilot agents (existing network, KRA-registered, 10–50 clients)
- [ ] Onboard pilots: credentials, WhatsApp, M-PESA, test filing cycle
- [ ] Weekly pilot sync; collect NPS, bug reports, feature requests

### Week 6 - Launch & Scale
- [ ] Refine from pilot feedback; harden multi-tenant isolation
- [ ] Public licensing page (smartvatkenya.co.ke/license)
- [ ] Legal: MSA + DPA templates reviewed by counsel
- [ ] Support runbook for licensee onboarding (tier 1/2/3 escalation)
- [ ] KPI dashboard: licensee count, client count, filing success rate, ARR

## Success Metrics

| Metric | Target (Month 3) | Target (Month 6) |
|--------|------------------|------------------|
| Licensees onboarded | 3 pilots → 5 paid | 15 |
| Clients on platform | 150 | 500 |
| Filing success rate | ≥ 98% | ≥ 99% |
| ARR | KES 225k | KES 1.5M |
| Churn | 0% | < 5% |

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| GavaConnect credential revocation | Medium | High | Licensee owns creds; we only store encrypted; automated health check alerts on auth failure |
| ODPC enforcement on licensee data | Low | High | Kenya hosting + DPA pack + breach procedure; licensee inherits our compliance |
| Licensee misrepresents 17th Guarantee | Medium | Medium | Contractual terms define guarantee as process (file on 17th, fix rejects free, human QC), not financial; audit clause |
| Competitor copies engine | Low | Medium | Core moat = Kenya data localization + ODPC registration + golden dataset (real filing outcomes) |

## Open Questions

- [ ] Finalize revenue-share vs flat-fee split with finance
- [ ] Confirm Kenya DC provider (AWS Nairobi? Local colo? Safaricom cloud?)
- [ ] Decide on per-licensee DB isolation: schema-per-tenant vs RLS (Postgres 16 RLS is performant)
- [ ] Legal review of MSA + DPA before pilot contracts

## Next Actions (this week)

1. Scaffold licensee config schema + multi-tenant store scope
2. Draft pilot MSA + DPA templates
3. Shortlist 5 pilot agents from network
4. Provision staging Kenya-hosted infra for pilot

---

**Phase 3 ships the business model.** Phase 0–2 built the engine; Phase 3 turns it into a licensable product that compounds as more agents join and the golden dataset grows.
