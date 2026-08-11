/**
 * Core types for the KRA GavaConnect (portal) + eTIMS OSCU/VSCU tracks.
 * Paths follow the verified working reference (see docs/gavaconnect-apis.md).
 */

export type GavaEnvironment = "sandbox" | "production"

/** One consumer-key/secret pair per API product (KRA requirement). */
export type ApiProduct =
  | "pin-checker-by-pin"
  | "pin-checker-by-id"
  | "obligations"
  | "tcc-validate"
  | "tcc-application"
  | "nil-return"
  | "tot-return"
  | "whtvat-prn"
  | "whtit-prn"
  | "whtrental-prn"
  | "invoice-checker"
  | "import-certificate"
  | "excise-license"
  | "customs-declaration"
  | "tax-service-office"
  | "pin-registration"

export interface PortalHosts {
  sandbox: string
  production: string
}

export const DEFAULT_HOSTS: PortalHosts = {
  sandbox: "https://sbx.kra.go.ke",
  production: "https://api.kra.go.ke",
}

export interface CredentialPair {
  consumerKey: string
  consumerSecret: string
}

export interface GavaConfig {
  environment: GavaEnvironment
  /** key = API product. Every product needs its own app credentials. */
  credentials: Partial<Record<ApiProduct, CredentialPair>>
  hosts?: PortalHosts
  /** Timeout ms per HTTP request (default 15_000). */
  timeoutMs?: number
  /** Max request retries on 5xx / network error (default 3). */
  maxRetries?: number
  /** Base backoff ms (default 250, doubles per retry). */
  backoffMs?: number
}

/* ------------------------------------------------------------------ */
/* KRA portal responses                                                 */
/* ------------------------------------------------------------------ */

export interface PinData {
  KRAPIN: string
  TypeOfTaxpayer: "Individual" | "Non Individual"
  Name: string
  StatusOfPIN: "Active" | "Suspended" | "Cancelled" | "Stopped"
}

export interface PinByPinResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  PINDATA: PinData
}

export interface PinByIdResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  PINDATA: PinData
}

export interface Obligation {
  TaxObligationCode: string
  TaxObligationName: string
  EffectiveDate: string
  Status: string
}

export interface ObligationsResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  OBLIGATIONSDATA: Obligation[]
}

export interface TccValidationResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  TCCDATA?: {
    TCCSerialNumber: string
    KRAPIN: string
    BusinessName: string
    CertificateStatus: string
    ValidFrom?: string
    ValidTo?: string
  }
}

export interface TccApplicationResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  ApplicationNumber?: string
  ApplicationStatus?: "Pending" | "Approved" | "Rejected"
}

/** NIL return. ObligationCode 1–8 per KRA. */
export type ObligationCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface NilReturnRequest {
  TaxpayerPIN: string
  ObligationCode: ObligationCode
  Month: number
  Year: number
}

export interface NilReturnResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  AckNumber?: string
}

export interface TotReturnRequest {
  TaxpayerPIN: string
  Month: number
  Year: number
  GrossTurnover: number
}

export interface TotReturnResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  PRN?: string
}

/** WHT VAT PRN. Nature rates: WHT_VAT_GENERAL 2%, WHT_VAT_GOVERNMENT 6%. */
export type WhVatNature = "WHT_VAT_GENERAL" | "WHT_VAT_GOVERNMENT"

export interface WhVatTransaction {
  withholderPin: string
  taxObligation: "WHTVAT"
  period: string
  totals: {
    subjectAmount: number
    whAmount: number
  }
}

export interface WhVatTransactionDetail {
  payeePIN: string
  WHT_VAT_GENERAL?: number
  WHT_VAT_GOVERNMENT?: number
  invoiceReference: string
}

export interface WhVatPrnRequest {
  transactionHeader: WhVatTransaction
  transactionDetails: WhVatTransactionDetail[]
}

export interface PrnResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  PRN?: string
  DueDate?: string
}

export interface InvoiceCheckerResponse {
  ResponseCode: string
  Message: string
  Status: "OK" | "NOK"
  InvoiceData?: {
    InvoiceNumber: string
    SupplierPIN: string
    InvoiceDate: string
    NetAmount: string
    VatAmount: string
    ValidationStatus: string
  }
}

/* ------------------------------------------------------------------ */
/* eTIMS OSCU/VSCU                                                      */
/* ------------------------------------------------------------------ */

/** resultCd semantics (verified reference, Section C). */
export const ETIMS_RESULT_CODES: Record<string, string> = {
  "000": "success",
  "901": "invalid device",
  "902": "already installed (idempotent)",
  "921": "sequence violation",
  "994": "duplicate invoice number",
  E04: "branch or device not found",
}

/**
 * eTIMS returns differing success spell-codes across hosts/environments
 * ("0", "00", "000", "0000", "001"). Treat any of these as success rather than
 * trusting a single canonical string (reference: kra-etims-sdk result codes).
 */
export const ETIMS_SUCCESS_CODES: ReadonlySet<string> = new Set([
  "", "0", "00", "000", "0000", "001",
])

export interface EtimsHosts {
  sandbox: string
  production: string
}

export const DEFAULT_ETIMS_HOSTS: EtimsHosts = {
  sandbox: "https://sandbox.safaricom.co.ke/v1/kra/etims-api",
  production: "https://api.safaricom.co.ke/v1/kra/etims-api",
}

export interface EtimsConfig {
  environment: GavaEnvironment
  tin: string
  bhfId: string
  dvcSrlNo: string
  /** Apigee OAuth access token for the etims product app. */
  apigeeToken: string
  apigeeAppId: string
  hosts?: EtimsHosts
  /** Pre-provisioned cmcKey (if already obtained). Persist encrypted at rest. */
  cmcKey?: string
  timeoutMs?: number
  maxRetries?: number
  backoffMs?: number
}

export interface EtimsTokenResponse {
  access_token?: string
  expires_in?: number
  error?: string
}

export interface InitOsdcResponse {
  resultCd: string
  resultMsg: string
  cmcKey?: string
}

export interface SaleItem {
  itemSeq: number
  itemCd: string
  itemClsCd: string
  itemNm: string
  bcd: string
  pkgUnitCd: string
  pkgQty: number
  itemUnitCd: string
  itemQty: number
  itemTotAmt: number
  taxblAmt: number
  taxAmt: number
  totDcAmt: number
  dcRt?: number
  dcAmt?: number
  pricBefrDc?: number
  vatCd: "A" | "B" | "C" | "D"
  pric: number
  qtyUnitCd?: string
  dftPrc?: number
  rpstImg?: string
}

export interface SalesTransaction {
  tin: string
  bhfId: string
  custTin: string
  custNm: string
  salesTyCd: string
  salesDt: string
  spplyRoleCd: string
  icSpplyTyCd: string
  itemCnt: number
  totItemCnt: number
  summ: {
    totItemCnt: number
    taxblAmt: number
    taxAmt: number
    totAmt: number
  }
  items: SaleItem[]
}

export interface SaveSalesResponse {
  resultCd: string
  resultMsg: string
  docNo?: string
  rcptPbctDate?: string
}
