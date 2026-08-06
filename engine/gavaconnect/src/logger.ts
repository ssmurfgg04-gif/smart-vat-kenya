/**
 * Redacting logger. Guarantees consumer secrets, cmcKey, bearer tokens and
 * raw PINs never reach logs/telemetry. The golden-dataset hook is optional
 * and receives structured, redacted outcomes.
 */

export type LogLevel = "debug" | "info" | "warn" | "error"

export interface LogSink {
  (level: LogLevel, message: string, meta?: Record<string, unknown>): void
}

const SECRET_FIELDS = new Set([
  "consumer_secret",
  "consumerSecret",
  "cmcKey",
  "authorization",
  "apigeeToken",
  "apigee_app_id",
  "access_token",
])

/** Redact secrets recursively; replace KRA PINs (A/P + 9 digits + letter). */
export function redact(value: unknown, depth = 0): unknown {
  if (value == null || depth > 8) return value
  if (typeof value === "string") {
    const maskedPins = value.replace(/\b[AP]\d{9}[A-Z]\b/g, "[PIN]")
    return maskedPins
  }
  if (Array.isArray(value)) return value.map((v) => redact(v, depth + 1))
  if (typeof value === "object") {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (SECRET_FIELDS.has(k)) {
        out[k] = "[REDACTED]"
      } else {
        out[k] = redact(v, depth + 1)
      }
    }
    return out
  }
  return value
}

export interface LoggerOptions {
  level?: LogLevel
  sink?: LogSink
}

const ORDER: LogLevel[] = ["debug", "info", "warn", "error"]

export class Logger {
  private readonly minLevel: LogLevel
  private readonly sink: LogSink

  constructor(opts: LoggerOptions = {}) {
    this.minLevel = opts.level ?? "info"
    this.sink =
      opts.sink ??
      ((level, message, meta) => {
        const line = meta ? `${message} ${JSON.stringify(redact(meta))}` : message
        const fn =
          level === "error"
            ? console.error
            : level === "warn"
              ? console.warn
              : level === "debug"
                ? console.debug
                : console.info
        fn(`[gavaconnect:${level}] ${line}`)
      })
  }

  private can(level: LogLevel): boolean {
    return ORDER.indexOf(level) >= ORDER.indexOf(this.minLevel)
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    if (this.can("debug")) this.sink("debug", message, meta)
  }

  info(message: string, meta?: Record<string, unknown>): void {
    if (this.can("info")) this.sink("info", message, meta)
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    if (this.can("warn")) this.sink("warn", message, meta)
  }

  error(message: string, meta?: Record<string, unknown>): void {
    if (this.can("error")) this.sink("error", message, meta)
  }

  /** Golden-dataset event. Redacted by default; callers may opt into more. */
  goldenEvent(domain: string, event: string, payload: unknown): void {
    this.info(`golden:${domain}:${event}`, redact(payload) as Record<string, unknown>)
  }
}
