import { Logger, redact } from "./logger.js"
import { ApiError, GavaError, RateLimitedError, TransportError } from "./errors.js"

export interface RequestOptions {
  method?: "GET" | "POST"
  /** JSON body; KRA portal expects application/json. */
  json?: unknown
  headers?: Record<string, string>
  timeoutMs?: number
  maxRetries?: number
  backoffMs?: number
}

export interface HttpParams {
  logger?: Logger
  timeoutMs?: number
  maxRetries?: number
  backoffMs?: number
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export class HttpTimeoutError extends TransportError {
  constructor(message: string) {
    super(message)
    this.name = "HttpTimeoutError"
  }
}

function isAbort(e: unknown): boolean {
  return e instanceof DOMException
    ? e.name === "AbortError"
    : (e as { name?: string })?.name === "AbortError"
}

/**
 * Thin retrying fetch wrapper with:
 *  - timeout via AbortSignal
 *  - retry on network error / HTTP 5xx (exponential backoff, maxRetries)
 *  - 429 handling using Retry-After (fallback to exponential backoff)
 *  - redacted request/response logging
 */
export class HttpClient {
  private readonly logger: Logger
  private readonly timeoutMs: number
  private readonly maxRetries: number
  private readonly backoffMs: number

  constructor(opts: HttpParams = {}) {
    this.logger = opts.logger ?? new Logger({ level: "warn" })
    this.timeoutMs = opts.timeoutMs ?? 15_000
    this.maxRetries = opts.maxRetries ?? 3
    this.backoffMs = opts.backoffMs ?? 250
  }

  async request(url: string, opts: RequestOptions = {}): Promise<Response> {
    const method = opts.method ?? "POST"
    const timeout = opts.timeoutMs ?? this.timeoutMs
    const maxRetries = opts.maxRetries ?? this.maxRetries
    const backoff = opts.backoffMs ?? this.backoffMs

    let attempt = 0
    while (true) {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), timeout)
      try {
        const headers: Record<string, string> = {
          ...(opts.json !== undefined ? { "Content-Type": "application/json" } : {}),
          ...opts.headers,
        }
        this.logger.debug("request", {
          method,
          url,
          headers: redact(headers),
          body: opts.json !== undefined ? redact(opts.json) : undefined,
        })

        const res = await fetch(url, {
          method,
          headers,
          body: opts.json !== undefined ? JSON.stringify(opts.json) : undefined,
          signal: controller.signal,
        })

        if (res.status === 429) {
          const ra = res.headers.get("retry-after")
          const wait = ra
            ? Math.min(Number(ra) * 1000 || backoff, backoff * 16)
            : backoff * 4
          if (attempt >= maxRetries) {
            throw new RateLimitedError(`Rate limited after ${maxRetries} retries`, wait)
          }
          this.logger.warn("rate limited", { url, attempt, waitMs: wait })
          await sleep(wait)
          attempt++
          continue
        }

        if (res.status >= 500) {
          if (attempt >= maxRetries) {
            throw new ApiError(`Upstream HTTP ${res.status} after retries`, res.status)
          }
          await sleep(backoff * 2 ** attempt)
          attempt++
          continue
        }

        return res
      } catch (e) {
        if (e instanceof GavaError) throw e
        if (isAbort(e)) {
          if (attempt >= maxRetries) {
            throw new HttpTimeoutError(`Timeout after ${timeout}ms`)
          }
          await sleep(backoff * 2 ** attempt)
          attempt++
          continue
        }
        if (attempt >= maxRetries) {
          throw new TransportError("Network error", e)
        }
        await sleep(backoff * 2 ** attempt)
        attempt++
        continue
      } finally {
        clearTimeout(timer)
      }
    }
  }
}

/** Parse a JSON response body, throwing a readable error when not JSON. */
export async function parseJson<T>(res: Response): Promise<T> {
  const text = await res.text()
  try {
    return JSON.parse(text) as T
  } catch {
    throw new ApiError(`Unexpected non-JSON response (HTTP ${res.status})`, res.status, text)
  }
}
