export declare const LAW_VERSION: string;
export declare const VAT_STANDARD_RATE: number;
export declare const VAT_REGISTRATION_THRESHOLD: number;
export declare const LATE_FILING_FLAT: number;
export declare const LATE_FILING_RATE: number;
export declare const LATE_PAYMENT_RATE: number;
export declare const MONTHLY_INTEREST_RATE: number;
export declare const NON_REGISTRATION_PENALTY_PER_MONTH: number;
export declare const ETIMS_INTEGRATION_FINE_PER_MONTH: number;
export declare const ETIMS_MIN_PENALTY_COMPANY: number;
export declare const ETIMS_MIN_PENALTY_INDIVIDUAL: number;
export declare const ETIMS_PENALTY_RATE: number;
export declare const AMNESTY_DEADLINE: string;
export interface VatBreakdown {
  net: number;
  vat: number;
  gross: number;
}
export declare function addVat(net: number, rate?: number): VatBreakdown;
export declare function removeVat(gross: number, rate?: number): VatBreakdown;
export declare function vatFromInclusive(gross: number, rate?: number): number;
export interface PenaltyResult {
  lateFilingPenalty: number;
  latePaymentPenalty: number;
  interest: number;
  principal: number;
  total: number;
}
export declare function vatPenalty(taxDue: number, monthsLate: number): PenaltyResult;
export declare function etimsPenalty(taxDue: number, entity?: "company" | "individual"): number;
export declare function etimsIntegrationExposure(months: number): number;
export declare function nonRegistrationExposure(months: number): number;
export interface DeadlineResult {
  periodStart: string;
  periodEnd: string;
  dueDate: string;
}
export declare function vatDeadline(dateInPeriod: Date | string): DeadlineResult;
export declare function amnestyEligible(arrearsAccruedBefore: Date | string, asOf?: Date | string): boolean;
