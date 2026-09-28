/**
 * vatkenya — Kenya VAT & KRA tax calculations as a dependency.
 *
 * Legal basis is encoded in the constants below and re-verified each Finance
 * Act season by SmartVAT Kenya. Every function is pure, dependency-free and
 * safe for browsers, workers and edge runtimes.
 *
 * Legal basis:
 *  - VAT rate & registration:  VAT Act 2013 (Cap. 476), s.5, s.14, Third Schedule
 *  - Late filing / payment:    Tax Procedures Act (Cap. 469), ss.39-40
 *  - eTIMS penalties:          TPA s.59A(5), s.86 as amended by Finance Act 2026
 *  - Amnesty:                  Tax Procedures (Tax Amnesty) Regulations, 2026
 */
export const LAW_VERSION = "2026-09-27";
/** Standard VAT rate (VAT Act 2013, s.5 & Third Schedule). */
export const VAT_STANDARD_RATE = 0.16;
/** Compulsory registration threshold, KES (VAT Act 2013, s.14). */
export const VAT_REGISTRATION_THRESHOLD = 5000000;
/** Late-filing penalty: higher of KES 10,000 or 5% of tax due, per month outstanding (TPA s.39). */
export const LATE_FILING_FLAT = 10000;
export const LATE_FILING_RATE = 0.05;
/** Late-payment penalty: 5% of unpaid tax (TPA s.40). */
export const LATE_PAYMENT_RATE = 0.05;
/** Late-payment interest: 1% per month, compounding (TPA s.40). */
export const MONTHLY_INTEREST_RATE = 0.01;
/** Non-registration penalty, KES per month of continuing failure (TPA s.95). */
export const NON_REGISTRATION_PENALTY_PER_MONTH = 100000;
/** eTIMS integration failure after written notice: up to KES 100,000/month (TPA s.59A(5)). */
export const ETIMS_INTEGRATION_FINE_PER_MONTH = 100000;
/** eTIMS non-compliance from 1 July 2026: higher of 5% of tax due, KES 100,000 (company) or KES 10,000 (individual) (TPA s.86 as amended by FA 2026). */
export const ETIMS_MIN_PENALTY_COMPANY = 100000;
export const ETIMS_MIN_PENALTY_INDIVIDUAL = 10000;
export const ETIMS_PENALTY_RATE = 0.05;
/** 2026 amnesty window: waives 100% of penalties/interest on pre-2026 arrears. */
export const AMNESTY_DEADLINE = "2026-12-31";
function round2(n) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
}
/** Add VAT at the standard (or supplied) rate to a VAT-exclusive amount. */
export function addVat(net, rate = VAT_STANDARD_RATE) {
    const v = round2(net * rate);
    return { net: round2(net), vat: v, gross: round2(net + v) };
}
/** Extract VAT from a VAT-inclusive amount (the KRA "fraction" method). */
export function removeVat(gross, rate = VAT_STANDARD_RATE) {
    const net = round2(gross / (1 + rate));
    return { net, vat: round2(gross - net), gross: round2(gross) };
}
/** Compute VAT on a VAT-inclusive price (alias of removeVat for clarity). */
export function vatFromInclusive(gross, rate = VAT_STANDARD_RATE) {
    return removeVat(gross, rate).vat;
}
/**
 * KRA VAT penalty estimate for a return filed `monthsLate` late with `taxDue`
 * outstanding. Late-filing penalty is the higher of KES 10,000 or 5% of tax
 * due, per month or part-month outstanding; late payment adds 5% of the unpaid
 * tax plus 1% monthly compounding interest on the principal.
 */
export function vatPenalty(taxDue, monthsLate) {
    const principal = Math.max(0, taxDue);
    const m = Math.max(0, Math.floor(monthsLate));
    const lateFilingPenalty = m > 0 ? Math.max(LATE_FILING_FLAT, principal * LATE_FILING_RATE) * m : 0;
    const latePaymentPenalty = principal > 0 && m > 0 ? round2(principal * LATE_PAYMENT_RATE) : 0;
    const interest = principal > 0 && m > 0 ? round2(principal * (Math.pow(1 + MONTHLY_INTEREST_RATE, m) - 1)) : 0;
    const total = round2(principal + lateFilingPenalty + latePaymentPenalty + interest);
    return { lateFilingPenalty: round2(lateFilingPenalty), latePaymentPenalty, interest, principal, total };
}
/** eTIMS non-compliance penalty from 1 July 2026 (TPA s.86 as amended by Finance Act 2026). */
export function etimsPenalty(taxDue, entity = "company") {
    const minimum = entity === "company" ? ETIMS_MIN_PENALTY_COMPANY : ETIMS_MIN_PENALTY_INDIVIDUAL;
    return Math.round(Math.max(minimum, taxDue * ETIMS_PENALTY_RATE));
}
/** eTIMS integration failure exposure after KRA's written notice (TPA s.59A(5)). */
export function etimsIntegrationExposure(months) {
    return Math.round(Math.max(0, Math.floor(months)) * ETIMS_INTEGRATION_FINE_PER_MONTH);
}
/** Failure-to-register exposure after `months` of continuing non-registration (TPA s.95). */
export function nonRegistrationExposure(months) {
    return Math.round(Math.max(0, Math.floor(months)) * NON_REGISTRATION_PENALTY_PER_MONTH);
}
/**
 * VAT filing deadline for a Kenyan tax period: the 20th of the month following
 * the period (VAT Act ss.29-30). Pass any date inside the period; the period is
 * taken as the calendar month of that date.
 */
export function vatDeadline(dateInPeriod) {
    const d = typeof dateInPeriod === "string" ? new Date(dateInPeriod) : dateInPeriod;
    const periodStart = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
    const periodEnd = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0));
    const dueDate = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 20));
    return { periodStart: periodStart.toISOString().slice(0, 10), periodEnd: periodEnd.toISOString().slice(0, 10), dueDate: dueDate.toISOString().slice(0, 10) };
}
/** True if the 2026 amnesty could apply to arrears accrued before 1 Jan 2026 (application before 31 Dec 2026). */
export function amnestyEligible(arrearsAccruedBefore, asOf = new Date()) {
    const accrued = typeof arrearsAccruedBefore === "string" ? new Date(arrearsAccruedBefore) : arrearsAccruedBefore;
    const now = typeof asOf === "string" ? new Date(asOf) : asOf;
    return accrued < new Date("2026-01-01") && now < new Date(AMNESTY_DEADLINE);
}
