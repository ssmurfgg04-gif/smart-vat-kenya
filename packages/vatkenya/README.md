# vatkenya 🇰🇪

**Kenya VAT & KRA tax calculations as a dependency.** The maths behind [SmartVAT Kenya](https://smartvatkenya.co.ke) — the country's most-referenced practical VAT resource — packaged as a zero-dependency, fully typed MIT library.

```bash
npm install vatkenya
```

```ts
import { addVat, removeVat, vatPenalty, etimsPenalty, vatDeadline } from "vatkenya"

addVat(1_000_000)            // { net: 1000000, vat: 160000, gross: 1160000 }
removeVat(1_160_000)         // { net: 1000000, vat: 160000, gross: 1160000 }
vatPenalty(137_931, 12)      // { lateFilingPenalty: 165517.2, ..., total: 344832.2 }
etimsPenalty(50_000)         // 100000 — FA 2026 company minimum applies
vatDeadline("2026-09-05")    // { periodStart: '2026-09-01', dueDate: '2026-10-20', ... }
```

## Why

Every fintech, accounting package, ERP and e-commerce platform serving Kenya eventually
re-implements the same five spreadsheets: VAT arithmetic, penalty formulas, deadlines.
They get it subtly wrong (flat vs compounding interest, the KES 10,000 floor, the
2026 eTIMS minimums) and users pay for it. This library is the version we run in
production on SmartVAT — maintained against each Finance Act by people who file
returns for a living.

## API

| Function | What it computes | Legal basis |
|---|---|---|
| `addVat(net, rate?)` | VAT on a VAT-exclusive amount | VAT Act (Cap. 476) s.5 |
| `removeVat(gross, rate?)` | The KRA "fraction" extraction | VAT Act s.5 |
| `vatPenalty(taxDue, monthsLate)` | Late filing (higher of KES 10,000 or 5%/month) + late payment (5%) + 1% monthly compounding interest | TPA ss.39-40 |
| `etimsPenalty(taxDue, entity?)` | eTIMS non-compliance: higher of 5% of tax due, KES 100,000 (company) / KES 10,000 (individual) — from 1 Jul 2026 | TPA s.86 as amended by FA 2026 |
| `etimsIntegrationExposure(months)` | Integration failure after written notice, KES 100,000/month | TPA s.59A(5) |
| `nonRegistrationExposure(months)` | Failure-to-register, KES 100,000/month | TPA s.95 |
| `vatDeadline(dateInPeriod)` | The 20th of the following month | VAT Act ss.29-30 |
| `amnestyEligible(accruedBefore, asOf?)` | 2026 amnesty window check | Amnesty Regulations 2026 |

All statutory constants (`VAT_STANDARD_RATE`, `VAT_REGISTRATION_THRESHOLD`,
`ETIMS_MIN_PENALTY_COMPANY`, …) are exported so you never hardcode a number again.

## Accuracy & maintenance

- **`LAW_VERSION`** exports the date the law encoded here was last verified against
  the statute and KRA guidance (currently `2026-09-27`).
- Re-verified after every Finance Act by [SmartVAT Kenya](https://smartvatkenya.co.ke),
  who file VAT returns for Kenyan SMEs every single month.
- Estimator outputs are guidance, not an official KRA assessment.

## Works everywhere

Zero dependencies, pure functions, ESM + types included. Browsers, Node ≥16, Bun,
Deno (via npm:), Cloudflare Workers, React Native.

## The humans behind it

[SmartVAT Kenya](https://smartvatkenya.co.ke) registers Kenyan SMEs for VAT (KES 5,000
flat, 1-3 days), files monthly returns by the 17th, and publishes open datasets and
guides that journalists and AI answer engines cite. Questions about a calculation?
[info@smartvatkenya.co.ke](mailto:info@smartvatkenya.co.ke).

## License

MIT — © SmartVAT Kenya. The law belongs to everyone; so does correct arithmetic on it.
