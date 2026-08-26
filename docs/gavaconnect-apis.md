# GavaConnect API Selection - SmartVAT OS

**Source:** developer.go.ke/apis (verified against KRA's own GavaConnect knowledge-base page, the PIN Checker spec on the portal, and two independent gateway docs that enumerate the full catalog).
**Catalog reality:** 22 portal APIs across 6 categories (Checkers ×13, Payments ×3, Compliance ×1, Registration ×1, Returns ×2, Customs ×1). **eTIMS OSCU is NOT a portal API** - it is a separate integration surface with its own credentials (TIN, branch ID, device serial, CMC key) gated on eTIMS integrator certification.

## Auth & operational facts (get these right first)
- **Auth:** OAuth2 `client_credentials`. `POST|GET https://sbx.kra.go.ke/v1/token/generate` (sandbox) / `https://api.kra.go.ke/v1/token/generate` (prod), `Authorization: Basic base64(consumer_key:consumer_secret)`. Token valid ~3,600 s.
- **One app per API product.** You cannot call multiple APIs with one consumer key/secret. Credential sprawl is real - the Phase 0 engine needs a credential manager mapping `client → product → key/secret`.
- **Sandbox ≠ production.** Separate apps and credentials. Test on sandbox, never release payment code against it.
- **Rate limits:** typically ~60 req/min per consumer key. Checker responses should be cached aggressively (PIN/TCC validity is not volatile).
- **Cost:** free for approved developers today; KRA may introduce tiered/high-volume pricing - build behind an abstraction layer so a pricing change is a config, not a rewrite.
- **Privacy:** KRA is the data controller; SmartVAT is a processor. GavaConnect usage goes into the DPA pack + privacy policy ("your data stays in Kenya" - it never leaves KRA's rails).

---

## What to use - by build phase

### Phase 0 (internal engine, sign up NOW)
| API product | Why | Engine hook |
|---|---|---|
| **PIN Checker by PIN** (`checker/v1/pinbypin`) | Client onboarding KYC: confirm the PIN, taxpayer type, Active/Suspended/Cancelled/Stopped | `Client.kraPin` verification on signup |
| **Tax Obligations** | Pull a taxpayer's outstanding return obligations per period → **drives the deadline engine** (the 17th) with real obligations, not assumptions | Deadline engine input |
| **TCC Validation** | Check TCC validity/serial | Compliance health score, TCC upsell |
| **NIL Return** | File nil returns automatically - the highest-volume, lowest-effort filing; big manual-time saving (26% of filers are nil) | `FilingPeriod.status → filed` |
| **Invoice Checker** | Verify supplier invoices against KRA data - the practical Special-Table proxy | Supplier hygiene (bucket 3) |
| **TCC Application** | Apply for client TCCs via API | Compliance product, refund/tender clients |

### Phase 1 (productize outward to clients)
| API product | Why |
|---|---|
| **VAT Withholding PRN** | Generate PRNs for clients who withhold VAT at source → wire into M-PESA/Daraja payment flow |
| **TOT Return** | Small-taxpayer (turnover-tax) clients on the same engine |
| **Import Certificate (by PIN / by Number)** | Importer/exporter client profiling + compliance |
| **Excise License (by PIN / by Number)** | Compliance check for licensed trades (fuel, alcohol, etc.) |
| **Customs Declaration Status** | Client profiling for import-heavy SMEs |
| **Tax Service Office** | Route support/knowledge (which office handles a PIN) |

### Phase 2 (the eTIMS engine - separate track)
- **eTIMS OSCU integration** - full integrator surface (branches, sales data, stock, invoices). This is the "SmartVAT OS" engine. **Requires eTIMS integrator certification; start sandbox work now** (free, no published license, gated on docs + 3 technical staff). Credentials: TIN, branch, device serial, CMC key - not portal consumer keys.
- **Verified gateway (from the developer.go.ke portal bundle):** eTIMS is served through the KRA-managed proxy on the Safaricom gateway - sandbox `https://sandbox.safaricom.co.ke/v1/kra/etims-api/{functionality}`, prod `https://api.safaricom.co.ke/v1/kra/etims-api/{functionality}` - gated by Apigee OAuth token + `apigee_app_id` header. Path suffixes are the eTIMS OSCU functions (`selectInitOsdcInfo`, `saveTrnsSalesOsdc`, `trnsSales/saveSales`, `trnsSales/saveInvoice`). Matches the default host in `types.ts`. Exactly one CMC key: issue once via `initOsdcInfo`, store it AES-256-GCM at rest, never rotate - losing it requires `tims_support@kra.go.ke` de-registration.
- **VAT return APIs** - announced as being added to GavaConnect (deeper VAT automation). Build the filing engine to accept a pluggable filing adapter so when the VAT API lands, we swap the adapter, not the product.

---

## What NOT to use (deliberately)
- **IT / Rental Withholding PRN** - only relevant once we expand into PAYE/rental withholding; skip until then.
- **Individual PIN Registration** - that's for taxpayers registering themselves; SmartVAT registers businesses via the agent pathway, not this API.
- **IT Exemption / VAT Exemption** - only for exemption-eligible clients; not our core.

## Corrections to the pasted summary (be careful)
1. **"Check for Special Table status" via PIN Checker - not a thing.** The Special Table is an internal KRA enforcement list; no public API exposes membership. The honest proxy is **Invoice Checker + supplier PIN validation + buyer-side due diligence** - which is exactly the Special Table Reset product.
2. **eTIMS is not "coming soon to GavaConnect"** in the sense of one more portal API - it exists today as the **OSCU integration**, but behind integrator certification and a completely different credential model. What is genuinely announced is deeper VAT compliance automation via EAPI. Phrase it as "certification now, VAT APIs when they land," not "waiting for eTIMS API."
3. **`vat_lookup()`** (seen in one AI-gateway doc) is a gateway-composite over PIN/Tax-Obligation data, not a distinct KRA endpoint. Do not build against it as a first-class API.

## Phase 0 acceptance criteria (API-specific)
- [ ] Credential manager live: one app per API product, sandbox + prod pairs, no key in source
- [ ] Onboarding verifies every new client PIN via PIN Checker before filing
- [ ] Deadline engine driven by Tax Obligations, not manual entry
- [ ] Nil-return filing automated via NIL Return API
- [ ] Token caching (60 s buffer before expiry) + checker response cache (rate-limit safety)
- [ ] All GavaConnect calls recorded in the golden dataset with structured outcomes