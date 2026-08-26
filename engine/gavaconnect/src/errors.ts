import { ETIMS_RESULT_CODES } from "./types.js"

export class GavaError extends Error {
  constructor(
    message: string,
    readonly code: string,
    readonly cause?: unknown,
  ) {
    super(message)
    this.name = "GavaError"
  }
}

export class CredentialsError extends GavaError {
  constructor(message: string, readonly missingProducts: string[]) {
    super(message, "MISSING_CREDENTIALS")
    this.name = "CredentialsError"
  }
}

export class AuthError extends GavaError {
  constructor(message: string, cause?: unknown) {
    super(message, "AUTH_ERROR", cause)
    this.name = "AuthError"
  }
}

export class TransportError extends GavaError {
  constructor(message: string, cause?: unknown) {
    super(message, "TRANSPORT_ERROR", cause)
    this.name = "TransportError"
  }
}

export class ApiError extends GavaError {
  constructor(
    message: string,
    readonly httpStatus: number,
    readonly kraResponse?: unknown,
  ) {
    super(message, "API_ERROR")
    this.name = "ApiError"
  }
}

export class RateLimitedError extends GavaError {
  constructor(message: string, readonly retryAfterMs?: number) {
    super(message, "RATE_LIMITED")
    this.name = "RateLimitedError"
  }
}

/** Thrown when KRA returns an NOK payload with a structured errorCode. */
export class KraRejectedError extends GavaError {
  constructor(
    message: string,
    readonly responseCode: string,
    readonly response: unknown,
  ) {
    super(message, "KRA_REJECTED")
    this.name = "KraRejectedError"
  }
}

/** Thrown for eTIMS non-success resultCd (e.g. 901, 921, 994). */
export class EtimsResultError extends GavaError {
  constructor(
    readonly resultCd: string,
    readonly resultMsg: string,
  ) {
    super(
      `eTIMS resultCd ${resultCd} - ${ETIMS_RESULT_CODES[resultCd] ?? "unknown"} (${resultMsg})`,
      "ETIMS_RESULT_ERROR",
    )
    this.name = "EtimsResultError"
  }
}

/** Duplicate invoice number (994) / duplicate filing period. */
export class DuplicateError extends EtimsResultError {
  constructor(resultMsg: string) {
    super("994", resultMsg)
    this.name = "DuplicateError"
  }
}
