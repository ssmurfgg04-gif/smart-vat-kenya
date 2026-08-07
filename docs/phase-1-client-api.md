# SmartVAT OS & Client — API Reference

**Scope:** the `engine/os` package (`@smartvat/os`) is the compliance product layer
that sits on the `engine/gavaconnect` KRA client. It turns raw API access into a
product: the 17th-of-the-month deadline engine, weighted health score, Special
Table exposure, amnesty/refund diagnosis, sector benchmarks, a grounded KRA-rules
assistant, a filing orchestrator, and the Phase-1 client shell (WhatsApp + M-PESA).

Everything is dependency-injected through small ports so the whole layer is
unit-testable offline. No vendor SDK is hard-required; a real deployment plugs a
`GavaClient`, a WhatsApp messenger and an M-PESA gateway into the same contracts
the tests use.

---

## 1. Core layers

| Module        | What it does |
| ------------- | ------------ |
| `deadlines.ts`  | "17th Guarantee": plans a period's target (17th) vs KRA due (20th), working-day buffer, holiday-aware; `dueWithin(daysAhead)` lists what is owed. |
| `health.ts`     | Weighted compliance score (on-time .4 / eTIMS .2 / continuity .15 / TCC .1 / supplier .1 / zero-rated .05), `level()`, risk flags. |
| `exposure.ts`   | `screenSuppliers` (Special Table port, blocked input VAT), `diagnoseAmnesty` (3-path), `assessRefund`. |
| `benchmarks.ts` | 7-sector input-VAT midpoint + band (`compareToBenchmark`). |
| `intel.ts`      | KRA-rules KB, lexical `retrieve`, `LlmPort` (offline fallback), `TaxAssistant`, golden `evaluateRetrieval`. |
| `filing.ts`     | `createFilingService` — orchestrates the gavaconnect providers over the deadline engine. |
| `gavawiring.ts` | Deployment wiring: translate an `ObligationPeriod` into concrete KRA NIL/TOT input over a live `GavaClient`. |
| `client.ts`     | Per-client shell: `ask`, `due`/`runFiling`, `notify`, `pay`, `recordPayment`. |
| `whatsapp.ts`, `mpesa.ts` | Messenger + M-PESA STK push ports with in-memory test impls. |

### Composition root — `SmartVatOs`
```ts
import { SmartVatOs } from "@smartvat/os"
const os = new SmartVatOs({ assistant: { topK: 4 } })
await os.ask("late filing penalty")
os.planPeriod("2026-07")        // { targetDate: 2026-08-17, dueDate: 2026-08-20, ... }
await os.health({ snapshot })
os.benchmark("retail", 0.1)
```

---

## 2. Deadline engine

```ts
import { planPeriod, dueWithin } from "@smartvat/os"
planPeriod("2026-07")          // target 2026-08-17, buffer 2 (Thu, Wed... weekends skipped)
planPeriod("2026-07", { holidays: new Set(["2026-08-19"]) })
dueWithin(31)                  // periods owed in the window
planPeriod(period, { targetDay: 17, dueDay: 20 })  // defaults
```
`bufferWorkingDays` counts whole working days strictly **after** target and
**before** due, skipping weekends and caller-supplied holidays — a weekend or
holiday immediately before the 20th shortens the usable buffer.

---

## 3. Filing orchestrator + live wiring

Two ways to drive filings:

**(a) Injected (tests / local)** — any `FilingProvider`:
```ts
import { createFilingService } from "@smartvat/os"
const filing = createFilingService([myProvider], { deadlineConfig: { now } })
await filing.runAll(10)          // [{ periodId, provider, ok, ack?, error? }]
```
`runAll` never throws; failed periods surface as `ok:false` and (optionally)
route to a `RejectionHandler`.

**(b) Real KRA (deployment)** — wire a `GavaClient`:
```ts
import { createWiredFilingService } from "@smartvat/os"
const filing = createWiredFilingService(gavaClient, {
  kraPin: "A000000001Z", mode: "nil",   // or "tot"
})
await filing.runAll(31)                 // files Jul-2026 on the 17th via NIL
```
`gavawiring.ts` translates each `ObligationPeriod` into the exact
`NilFileInput` / `TotFileInput` the gavaconnect adapter expects, then drives it.

---

## 4. Client shell — Phase 1 surface

`createClient` binds a taxpayer's phone, assistant, filing service and billing:
```ts
import { createClient, createInMemoryMessenger, createInMemoryGateway, TaxAssistant } from "@smartvat/os"
const client = createClient({
  clientId: "demo", phone: "254712345678",
  messenger: createInMemoryMessenger([]),
  billing: createInMemoryGateway({ byMerchantRequest: new Map() }),
  assistant: new TaxAssistant(),
  filing: /* your FilingService */, runDays: 31,
})
await client.notify("Your VAT return is due on the 17th")
await client.pay(499, "demo-jul")     // M-PESA STK push
const a = await client.ask("Special Table")   // grounded answer + sources
await client.runFiling()              // returns per-period outcomes
```

### Plugplay with providers (deployment)
- **WhatsApp:** `createInMemoryMessenger([])` or wire a `Messenger` impl to the
  WhatsApp Cloud API / Twilio. Only `send(msg)` is required.
- **M-PESA:** `createInMemoryGateway(log)` or a `BillingGateway` impl to
  Daraja's STK Push (`stkPush(req)` → `{ merchantRequestId }`).

---

## 5. Testing

```sh
cd engine/os
npm test        # builds TS to dist/, runs node --test (48 cases)
```
Tests cover the deadline buffer, health weighting/levels/flags, exposure,
amnesty 3-path + refund status, benchmarks, retrieval + golden recall over the
expanded KB, the filing orchestrator (ok + rejection), the gaca wiring
(NIL/TOT input translation), WhatsApp + M-PESA ports, and the client shell.

---

## 6. Wiring the ban list (gavaconnect)

The OS depends on `@smartvat/gavaconnect` via a `file:` link (`../gavaconnect`).
To reuse as a registry package: `npm pack` gavaconnect and install the built
`dist` as a `gavaconnect` dependency. The obligation-period→input mapping lives in
`gavawiring.ts`; add a VAT-return provider there behind `FilingProvider` when KRA
lands the API and nothing else in the engine changes.

---

## 7. Golden dataset & recall guard

`intel.ts` ships `GOLDEN_SET` — 12 curated query→expected-rule pairs — used by
`evaluateRetrieval` so the KB can grow without silently regressing retrieval.
Add a rule *and* a golden assertion together; the test suite fails if any golden
query stops surfacing its expected rule.