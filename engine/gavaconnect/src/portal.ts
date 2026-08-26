import { HttpClient, parseJson } from "./http.js"
import { TokenClient } from "./auth.js"
import { Logger } from "./logger.js"
import { getCredential } from "./credentials.js"
import { ApiError, KraRejectedError } from "./errors.js"
import {
  ApiProduct,
  GavaConfig,
  InvoiceCheckerResponse,
  NilReturnRequest,
  NilReturnResponse,
  ObligationsResponse,
  PinByIdResponse,
  PinByPinResponse,
  PrnResponse,
  TccApplicationResponse,
  TccValidationResponse,
  TotReturnRequest,
  TotReturnResponse,
  WhVatPrnRequest,
} from "./types.js"

export interface GavaClientOptions {
  logger?: Logger
  /** Override token store / http internals for tests. */
  http?: HttpClient
  tokens?: TokenClient
}

/**
 * KRA GavaConnect portal client - 22 APIs across checkers, returns,
 * payments, compliance, registration and customs. One app per API product.
 */
export class GavaClient {
  private readonly config: GavaConfig
  private readonly logger: Logger
  private readonly http: HttpClient
  private readonly tokens: TokenClient

  constructor(config: GavaConfig, opts: GavaClientOptions = {}) {
    this.config = config
    this.logger = opts.logger ?? new Logger()
    this.http = opts.http ?? new HttpClient({ logger: this.logger })
    this.tokens = opts.tokens ?? new TokenClient(config, { logger: this.logger })
  }

  private host(): string {
    return (this.config.hosts ?? { sandbox: "https://sbx.kra.go.ke", production: "https://api.kra.go.ke" })[
      this.config.environment
    ]
  }

  private async call<T>(
    product: ApiProduct,
    path: string,
    json?: unknown,
  ): Promise<T> {
    const token = await this.tokens.getToken(product)
    const res = await this.http.request(`${this.host()}${path}`, {
      json,
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) {
      const bodyText = await res.text()
      this.logger.warn("api non-ok", { product, path, status: res.status })
      throw new ApiError(`HTTP ${res.status} on ${path}`, res.status, bodyText)
    }
    return parseJson<T>(res)
  }

  /** Raise when KRA returns Status NOK with a structured response code. */
  private assertOk<T extends { Status?: string; ResponseCode?: string }>(
    body: T,
  ): T {
    if (body.Status === "NOK") {
      throw new KraRejectedError(
        `KRA rejected request (code ${body.ResponseCode ?? "?"})`,
        body.ResponseCode ?? "NOK",
        body,
      )
    }
    return body
  }

  /* ---------------- Checkers (13) ---------------- */

  async pinByPin(kraPin: string): Promise<PinByPinResponse> {
    return this.call<PinByPinResponse>("pin-checker-by-pin", "/checker/v1/pinbypin", { KRAPIN: kraPin })
  }

  async pinById(idNumber: string, idType: 1 | 2 = 1): Promise<PinByIdResponse> {
    return this.call<PinByIdResponse>("pin-checker-by-id", "/checker/v1/pinbyid", {
      idNumber,
      idType,
    })
  }

  async obligations(kraPin: string): Promise<ObligationsResponse> {
    return this.call<ObligationsResponse>("obligations", "/checker/v1/obligations", { KRAPIN: kraPin })
  }

  async validateTcc(kraPin: string, tccSerial: string): Promise<TccValidationResponse> {
    return this.call<TccValidationResponse>("tcc-validate", "/v1/kra-tcc/validate", {
      KRAPIN: kraPin,
      TCCSerialNumber: tccSerial,
    })
  }

  async checkInvoice(invoiceNumber: string): Promise<InvoiceCheckerResponse> {
    return this.call<InvoiceCheckerResponse>("invoice-checker", "/checker/v1/invoice", {
      InvoiceNumber: invoiceNumber,
    })
  }

  /* ---------------- Returns (2) ---------------- */

  /** File a NIL return. ObligationCode 1–8, Month/Year of the obligation period. */
  async fileNilReturn(req: NilReturnRequest): Promise<NilReturnResponse> {
    return this.call<NilReturnResponse>("nil-return", "/dtd/return/v1/nil", req)
  }

  /** File a Turnover Tax return (3% of gross turnover as of 2024 rate). */
  async fileTotReturn(req: TotReturnRequest): Promise<TotReturnResponse> {
    return this.call<TotReturnResponse>("tot-return", "/filing/v1/tot/paymentregistration", {
      TAXPAYERDETAILS: {
        TaxpayerPIN: req.TaxpayerPIN,
        Month: req.Month,
        Year: req.Year,
        GrossTurnover: req.GrossTurnover,
      },
    })
  }

  /* ---------------- Payments (3) ---------------- */

  /** Generate a VAT withholding PRN. */
  async generateWhVatPrn(req: WhVatPrnRequest): Promise<PrnResponse> {
    return this.call<PrnResponse>("whtvat-prn", "/generate/v1/prn/whtvat", {
      transactionHeader: req.transactionHeader,
      transactionDetails: req.transactionDetails,
    })
  }

  /* ---------------- Compliance (1) ---------------- */

  async applyTcc(kraPin: string, reason: string): Promise<TccApplicationResponse> {
    return this.call<TccApplicationResponse>("tcc-application", "/application/v1/tcc", {
      TaxpayerPIN: kraPin,
      ReasonForTCC: reason,
    })
  }

  /* ---------------- Helpers ---------------- */

  /** Which API products have credentials configured? (for the deadline engine) */
  configuredProducts(): ApiProduct[] {
    return (Object.keys(this.config.credentials) as ApiProduct[]).filter(
      (p) => this.config.credentials[p],
    )
  }
}
