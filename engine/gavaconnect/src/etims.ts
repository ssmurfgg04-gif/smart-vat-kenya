import { HttpClient, parseJson } from "./http.js"
import { Logger } from "./logger.js"
import { decryptSecret, encryptSecret, signAndEncryptOscuPayload } from "./crypto.js"
import { DuplicateError, EtimsResultError } from "./errors.js"
import {
  EtimsConfig,
  ETIMS_SUCCESS_CODES,
  InitOsdcResponse,
  SaveSalesResponse,
  SalesTransaction,
} from "./types.js"

export interface EtimsClientOptions {
  logger?: Logger
  http?: HttpClient
  /** 32-byte hex master key for cmcKey at-rest encryption. */
  masterKeyHex?: string
  now?: () => Date
}

/** VSCU requires saveSales → saveInvoice in strict order (921 if mixed). */
export class EtimsClient {
  private readonly config: EtimsConfig
  private readonly logger: Logger
  private readonly http: HttpClient
  private readonly masterKeyHex?: string
  private _cmcKey: string | undefined
  private readonly vscuState: { hasSaved: boolean; lastDocNo?: string }

  constructor(config: EtimsConfig, opts: EtimsClientOptions = {}) {
    this.config = config
    this.logger = opts.logger ?? new Logger()
    this.http = opts.http ?? new HttpClient({ logger: this.logger })
    this.masterKeyHex = opts.masterKeyHex
    this.vscuState = { hasSaved: false }
    if (config.cmcKey) this._cmcKey = config.cmcKey
  }

  private host(): string {
    return (this.config.hosts ?? {
      sandbox: "https://sandbox.safaricom.co.ke/v1/kra/etims-api",
      production: "https://api.safaricom.co.ke/v1/kra/etims-api",
    })[this.config.environment]
  }

  private headers(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.config.apigeeToken}`,
      "apigee_app_id": this.config.apigeeAppId,
      "Content-Type": "application/json",
    }
  }

  /** Raw low-level call (used for the two-step VSCU path). */
  private async call(path: string, body: unknown): Promise<unknown> {
    const res = await this.http.request(`${this.host()}${path}`, {
      json: body,
      headers: this.headers(),
    })
    if (!res.ok) {
      const text = await res.text()
      this.logger.warn("etims non-ok", { path, status: res.status })
      throw new Error(`eTIMS HTTP ${res.status}: ${text.slice(0, 300)}`)
    }
    return parseJson<unknown>(res)
  }

  get cmcKey(): string | undefined {
    return this._cmcKey
  }

  /** Encrypted form for at-rest storage; requires masterKeyHex. */
  encryptCmcKey(): string {
    if (!this._cmcKey) throw new Error("cmcKey not yet initialized")
    if (!this.masterKeyHex) throw new Error("masterKeyHex required to encrypt cmcKey")
    return encryptSecret(this._cmcKey, this.masterKeyHex)
  }

  loadCmcKey(encrypted: string): void {
    if (!this.masterKeyHex) throw new Error("masterKeyHex required to decrypt cmcKey")
    this._cmcKey = decryptSecret(encrypted, this.masterKeyHex)
  }

  /** Initialize device info; persist cmcKey immediately on success. */
  async initOsdcInfo(): Promise<InitOsdcResponse> {
    const body = {
      tin: this.config.tin,
      bhfId: this.config.bhfId,
      dvcSrlNo: this.config.dvcSrlNo,
    }
    const res = await this.call("/selectInitOsdcInfo", body)
    const parsed = res as InitOsdcResponse
    this.throwIfNotSuccess(parsed)
    if (parsed.cmcKey) {
      this._cmcKey = parsed.cmcKey
      this.logger.info("cmcKey initialized (redacted)", { encrypted: this.masterKeyHex ? true : false })
    }
    return parsed
  }

  private throwIfNotSuccess(res: { resultCd: string; resultMsg: string }): void {
    if (!ETIMS_SUCCESS_CODES.has(res.resultCd)) {
      if (res.resultCd === "994") throw new DuplicateError(res.resultMsg)
      throw new EtimsResultError(res.resultCd, res.resultMsg)
    }
  }

  /**
   * OSCU single-call sales invoice.
   * POST /saveTrnsSalesOsdc with AES-256-encrypted payload signed by cmcKey.
   */
  async saveSalesOsdc(transaction: SalesTransaction): Promise<SaveSalesResponse> {
    if (!this._cmcKey) throw new Error("cmcKey required — call initOsdcInfo() or loadCmcKey() first")
    const envelope = signAndEncryptOscuPayload({ salesTrans: transaction }, this._cmcKey)
    const res = (await this.call("/saveTrnsSalesOsdc", {
      tin: this.config.tin,
      bhfId: this.config.bhfId,
      dvcSrlNo: this.config.dvcSrlNo,
      data: envelope.data,
      signature: envelope.signature,
    })) as SaveSalesResponse
    this.throwIfNotSuccess(res)
    this.logger.goldenEvent("etims", "save_sales_osdc", {
      tin: this.config.tin,
      docNo: res.docNo,
      resultCd: res.resultCd,
    })
    return res
  }

  /** VSCU step 1 — save the sale. Must precede saveInvoice. */
  async vscuSaveSales(transaction: SalesTransaction): Promise<SaveSalesResponse> {
    if (!this._cmcKey) throw new Error("cmcKey required — call initOsdcInfo() or loadCmcKey() first")
    const envelope = signAndEncryptOscuPayload({ salesTrans: transaction }, this._cmcKey)
    const res = (await this.call("/trnsSales/saveSales", {
      tin: this.config.tin,
      bhfId: this.config.bhfId,
      dvcSrlNo: this.config.dvcSrlNo,
      data: envelope.data,
      signature: envelope.signature,
    })) as SaveSalesResponse
    this.throwIfNotSuccess(res)
    this.vscuState.hasSaved = true
    this.vscuState.lastDocNo = res.docNo
    return res
  }

  /** VSCU step 2 — save the invoice. Fails with 921 if order mixed. */
  async vscuSaveInvoice(transaction: SalesTransaction): Promise<SaveSalesResponse> {
    if (!this._cmcKey) throw new Error("cmcKey required — call initOsdcInfo() or loadCmcKey() first")
    if (!this.vscuState.hasSaved) {
      throw new EtimsResultError("921", "vscuSaveInvoice called before vscuSaveSales — sequence violation")
    }
    const envelope = signAndEncryptOscuPayload({ salesTrans: transaction }, this._cmcKey)
    const res = (await this.call("/trnsSales/saveInvoice", {
      tin: this.config.tin,
      bhfId: this.config.bhfId,
      dvcSrlNo: this.config.dvcSrlNo,
      data: envelope.data,
      signature: envelope.signature,
    })) as SaveSalesResponse
    this.throwIfNotSuccess(res)
    this.vscuState.hasSaved = false
    return res
  }
}
