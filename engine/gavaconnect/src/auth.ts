import { ApiProduct, GavaConfig } from "./types.js"
import { Logger } from "./logger.js"
import { getCredential } from "./credentials.js"
import { AuthError, TransportError } from "./errors.js"

export interface TokenStore {
  get(product: ApiProduct): string | undefined
  set(product: ApiProduct, token: string, expiresInSec: number): void
  clear(): void
}

/** In-memory token cache with a 60-second safety buffer before expiry. */
export class MemoryTokenStore implements TokenStore {
  private readonly entries = new Map<ApiProduct, { token: string; expiresAt: number }>()

  get(product: ApiProduct): string | undefined {
    const e = this.entries.get(product)
    if (!e) return undefined
    if (Date.now() >= e.expiresAt) {
      this.entries.delete(product)
      return undefined
    }
    return e.token
  }

  set(product: ApiProduct, token: string, expiresInSec: number): void {
    const ttlMs = Math.max(0, expiresInSec * 1000 - 60_000)
    this.entries.set(product, { token, expiresAt: Date.now() + ttlMs })
  }

  clear(): void {
    this.entries.clear()
  }
}

export interface AuthOptions {
  logger?: Logger
  tokenStore?: TokenStore
}

/**
 * OAuth2 client_credentials against KRA's token endpoint.
 * POST /v1/token/generate?grant_type=client_credentials with Basic auth
 * (base64(consumer_key:consumer_secret)). Tokens ~1h; we cache with a 60s buffer.
 */
export class TokenClient {
  private readonly host: string
  private readonly credentials: GavaConfig["credentials"]
  private readonly logger: Logger
  private readonly store: TokenStore

  constructor(config: GavaConfig, opts: AuthOptions = {}) {
    this.host = (config.hosts ?? { sandbox: "", production: "" })[config.environment]
    this.credentials = config.credentials
    this.logger = opts.logger ?? new Logger()
    this.store = opts.tokenStore ?? new MemoryTokenStore()
  }

  private get hostUrl(): string {
    if (!this.host) throw new AuthError("No host configured for this environment")
    return this.host
  }

  async getToken(product: ApiProduct): Promise<string> {
    const cached = this.store.get(product)
    if (cached) return cached

    const pair = getCredential(this.credentials, product)
    const basic = Buffer.from(`${pair.consumerKey}:${pair.consumerSecret}`).toString("base64")

    let res: Response
    try {
      res = await fetch(
        `${this.hostUrl}/v1/token/generate?grant_type=client_credentials`,
        {
          method: "POST",
          headers: { Authorization: `Basic ${basic}` },
        },
      )
    } catch (e) {
      this.logger.error("token request failed", { product })
      throw new TransportError("Token endpoint unreachable", e)
    }

    if (!res.ok) {
      this.logger.error("token request rejected", { product, status: res.status })
      throw new AuthError(`Token request failed with HTTP ${res.status}`, await res.text())
    }

    const body = (await res.json()) as { access_token?: string; expires_in?: string | number }
    const token = body.access_token
    if (!token) {
      throw new AuthError("Token response missing access_token")
    }
    const expiresIn = Number(body.expires_in ?? 3600)
    this.store.set(product, token, expiresIn)
    this.logger.debug("token cached", { product, expiresInSec: expiresIn })
    return token
  }
}
