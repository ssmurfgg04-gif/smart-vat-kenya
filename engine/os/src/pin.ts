import { GavaClient } from "@smartvat/gavaconnect"

/**
 * KRA PIN validation.
 *
 * A KRA PIN is exactly 11 characters: one starting letter (A = individual /
 * sole proprietor, P = company), nine digits, then a terminal letter (A–Z).
 * Format check is instant and offline; a live `pinByPin` resolves against KRA
 * to confirm the PIN is active and returns the registered name. eTIMS B2B
 * invoices require a valid buyer PIN — this is the gate before issuing one.
 */

export const KRA_PIN_REGEX = /^[A|P][0-9]{9}[a-zA-Z]$/

/** Format-only check. Returns true when the PIN shape is valid. */
export function isKraPinFormat(pin: string): boolean {
  return KRA_PIN_REGEX.test(pin)
}

export interface KraPinValidator {
  /** Format + (optionally) live existence check. */
  validate(pin: string, opts?: { live?: boolean }): Promise<{
    valid: boolean
    pin: string
    formatValid: boolean
    name?: string
    status?: string
    liveChecked: boolean
  }>
}

export function createPinValidator(gava: GavaClient): KraPinValidator {
  return {
    async validate(pin, opts = {}) {
      const formatValid = isKraPinFormat(pin)
      if (!formatValid) {
        return { valid: false, pin, formatValid, liveChecked: false }
      }
      if (!opts.live) {
        return { valid: true, pin, formatValid, liveChecked: false }
      }
      try {
        const res = await gava.pinByPin(pin)
        const name = res.PINDATA?.Name
        const status = res.PINDATA?.StatusOfPIN
        const active = status === "Active"
        return { valid: active, pin, formatValid, name, status, liveChecked: true }
      } catch {
        return { valid: false, pin, formatValid, liveChecked: true }
      }
    },
  }
}