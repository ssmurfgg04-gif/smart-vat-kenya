import { ApiProduct, CredentialPair, GavaConfig } from "./types.js"
import { CredentialsError } from "./errors.js"

/**
 * Credential manager. KRA requires ONE app (consumer key/secret) per API
 * product - this is the #1 integration footgun. Credentials are read from
 * environment variables, never from source.
 *
 * Env convention: GAVA_{PRODUCT_UPPER_SNAKE}_{SANDBOX|PRODUCTION}_KEY / _SECRET
 * e.g. GAVA_PIN_CHECKER_BY_PIN_SANDBOX_KEY, GAVA_NIL_RETURN_PRODUCTION_SECRET
 */

export function productEnvName(product: ApiProduct): string {
  return product.replace(/[-\s]/g, "_").toUpperCase()
}

export function loadFromEnv(
  config: Pick<GavaConfig, "environment"> & { credentials?: GavaConfig["credentials"] },
): GavaConfig["credentials"] {
  const products: ApiProduct[] = [
    "pin-checker-by-pin",
    "pin-checker-by-id",
    "obligations",
    "tcc-validate",
    "tcc-application",
    "nil-return",
    "tot-return",
    "whtvat-prn",
    "whtit-prn",
    "whtrental-prn",
    "invoice-checker",
    "import-certificate",
    "excise-license",
    "customs-declaration",
    "tax-service-office",
    "pin-registration",
  ]

  const creds: GavaConfig["credentials"] = {}
  for (const product of products) {
    const env = config.environment.toUpperCase()
    const base = productEnvName(product)
    const key = process.env[`GAVA_${base}_${env}_KEY`]
    const secret = process.env[`GAVA_${base}_${env}_SECRET`]
    if (key && secret) {
      creds[product] = { consumerKey: key, consumerSecret: secret }
    }
  }

  // Explicit in-source credentials (tests/dev) win over env only if provided.
  if (config.credentials) {
    for (const [k, v] of Object.entries(config.credentials)) {
      if (v) creds[k as ApiProduct] = v
    }
  }
  return creds
}

export function getCredential(
  credentials: GavaConfig["credentials"],
  product: ApiProduct,
): CredentialPair {
  const pair = credentials[product]
  if (!pair) {
    throw new CredentialsError(
      `Missing credentials for API product "${product}". KRA requires one app per product - set GAVA_${productEnvName(product)}_KEY/_SECRET for the environment in use.`,
      [product],
    )
  }
  return pair
}

export function requireProducts(
  credentials: GavaConfig["credentials"],
  products: ApiProduct[],
): void {
  const missing = products.filter((p) => !credentials[p])
  if (missing.length > 0) {
    throw new CredentialsError(
      `Missing credentials for: ${missing.join(", ")}`,
      missing,
    )
  }
}
