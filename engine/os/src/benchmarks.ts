import { SectorBenchmark, SectorComparison } from "./types.js"

/**
 * Sector benchmarks -- the data-moat product.
 *
 * These are illustrative midpoint bands for common Kenyan SME sectors, produced
 * from typical input/output VAT behaviour. They are NOT live KRA data; the real
 * product replaces them with client-aggregated (redacted) figures over time.
 * Bands let a client see where their ratio sits vs peers.
 */

export const BENCHMARKS: Record<string, SectorBenchmark> = {
  wholesale: {
    sector: "Wholesale / distribution",
    inputVatRatio: 0.14,
    netVatRatio: 0.02,
    note: "Thin margin, high pass-through of input VAT.",
    band: { low: 0.1, high: 0.18 },
  },
  retail: {
    sector: "Retail / general merchandising",
    inputVatRatio: 0.1,
    netVatRatio: 0.03,
    note: "Moderate margin, mix of standard and exempt goods.",
    band: { low: 0.06, high: 0.14 },
  },
  hospitality: {
    sector: "Restaurants & hospitality",
    inputVatRatio: 0.08,
    netVatRatio: 0.05,
    note: "Food vs drink classification drives the spread.",
    band: { low: 0.05, high: 0.12 },
  },
  importers: {
    sector: "Importers / trading",
    inputVatRatio: 0.17,
    netVatRatio: 0.01,
    note: "Import VAT dominates; refund/headroom frequent.",
    band: { low: 0.13, high: 0.21 },
  },
  tech: {
    sector: "Technology & startups",
    inputVatRatio: 0.11,
    netVatRatio: 0.04,
    note: "Development costs as input VAT; licensing nuance.",
    band: { low: 0.07, high: 0.15 },
  },
  property: {
    sector: "Landlords / property",
    inputVatRatio: 0.07,
    netVatRatio: 0.06,
    note: "Residential exempt; commercial 16% drives spread.",
    band: { low: 0.04, high: 0.1 },
  },
  construction: {
    sector: "Construction & real estate",
    inputVatRatio: 0.12,
    netVatRatio: 0.03,
    note: "Materials-heavy input VAT; subcontractor nuance.",
    band: { low: 0.09, high: 0.16 },
  },
}

export function compareToBenchmark(
  sector: string,
  clientInputVatRatio: number,
): SectorComparison {
  const b = BENCHMARKS[sector]
  if (!b) throw new Error(`No benchmark for sector "${sector}"`)
  const { low, high } = b.band
  const zBands = clientInputVatRatio < low ? "below" : clientInputVatRatio > high ? "above" : "within"
  const note =
    zBands === "above"
      ? "Input VAT ratio above peers -- likely reflex or refund headroom; verify invoices."
      : zBands === "below"
        ? "Input VAT ratio below peers -- check you are claiming all eligible input VAT."
        : "Input VAT ratio within the peer band."
  return { sector, clientInputVatRatio, benchmark: b, zBands, note }
}