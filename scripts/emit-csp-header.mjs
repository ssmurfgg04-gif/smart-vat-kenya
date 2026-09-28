#!/usr/bin/env node
/**
 * emit-csp-header.mjs — move the per-page <meta http-equiv="Content-Security-Policy">
 * emitted by Astro (astro.config.mjs -> security.csp, cspDestination: "meta")
 * into a real HTTP header for Netlify production builds.
 *
 * Why: a <meta> CSP silently ignores frame-ancestors (zero clickjacking
 * protection), triggers a browser console warning, and is applied later in the
 * page load than a header. HTTP-header CSP supports the full directive set.
 *
 * What it does (ONLY on Netlify builds, detected via NETLIFY=true):
 *   1. Reads every dist/ HTML files and extracts the CSP <meta>.
 *   2. Merges all page policies into one site-wide policy (union of
 *      script-src / style-src hashes; every other directive must be
 *      byte-identical across pages, otherwise the build fails loudly).
 *   3. Ensures `frame-ancestors 'none'` is present (enforceable header-side).
 *   4. Strips the CSP <meta> from every HTML file (avoids double-enforcement:
 *      browsers enforce the INTERSECTION of meta + header policies).
 *   5. Appends the policy to dist/_headers under "/*".
 *
 * On non-Netlify builds (local preview) this script is a no-op and the
 * <meta> CSP keeps covering the site — see the comment block in public/_headers.
 *
 * Sanity-check locally with:
 *   NETLIFY=true npm run build && node verify-csp-header.mjs
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";

if (!process.env.NETLIFY) {
  console.log("[emit-csp-header] Not a Netlify build — keeping per-page <meta> CSP.");
  process.exit(0);
}

const htmls = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      // /widget/* files are standalone embeddable pages with NO meta CSP;
      // they are governed by the dedicated /widget/* header rule (see
      // public/_headers) and must not enter the merged-policy check.
      if (p === join(dist, "widget")) continue;
      walk(p);
    } else if (e.name.endsWith(".html")) htmls.push(p);
  }
})(dist);

if (!htmls.length) {
  console.error("[emit-csp-header] FAIL: no HTML files found in dist/");
  process.exit(1);
}

const META_TAG_RE =
  /<meta\b[^>]*\bhttp-equiv=["']?content-security-policy["']?[^>]*>/gi;
// CSP values legitimately contain single quotes ('self', 'sha256-…'), so the
// content attribute must be captured per quote style, not with [^"'].
const CONTENT_ATTR_RE = /\bcontent=(?:"([^"]*)"|'([^']*)')/i;

function extractCsp(html, file) {
  const tags = [...html.matchAll(META_TAG_RE)];
  if (!tags.length) return { csp: null, tags };
  const m = tags[0][0].match(CONTENT_ATTR_RE);
  if (!m) {
    console.error(`[emit-csp-header] FAIL: ${file} has CSP meta without content attr`);
    process.exit(1);
  }
  return { csp: m[1] !== undefined ? m[1] : m[2], tags };
}

function parsePolicy(csp) {
  return csp
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const sp = part.indexOf(" ");
      const name = (sp === -1 ? part : part.slice(0, sp)).toLowerCase();
      const value = sp === -1 ? "" : part.slice(sp + 1).trim();
      return { name, value };
    });
}

const HASH_TOKEN_RE = /^'sha(256|384|512)-[^']+'$/;

let base = null; // parsed policy of the first page (defines directive order)
const hashTokens = new Map(); // directive name -> Set of hash tokens
let checked = 0;

for (const file of htmls) {
  const html = readFileSync(file, "utf8");
  const { csp, tags } = extractCsp(html, file);
  if (!csp) {
    console.error(`[emit-csp-header] FAIL: ${file} has no CSP meta tag`);
    process.exit(1);
  }
  const parsed = parsePolicy(csp);
  if (!base) {
    base = parsed;
    for (const d of parsed) {
      if (["script-src", "style-src"].includes(d.name)) {
        hashTokens.set(
          d.name,
          new Set(d.value.split(/\s+/).filter((t) => HASH_TOKEN_RE.test(t)))
        );
      }
    }
  } else {
    if (parsed.length !== base.length) {
      console.error(`[emit-csp-header] FAIL: ${file} policy has ${parsed.length} directives, expected ${base.length}`);
      process.exit(1);
    }
    for (let i = 0; i < parsed.length; i++) {
      const a = base[i];
      const b = parsed[i];
      if (a.name !== b.name) {
        console.error(`[emit-csp-header] FAIL: ${file} directive ${i} is "${b.name}", expected "${a.name}"`);
        process.exit(1);
      }
      if (["script-src", "style-src"].includes(a.name)) {
        const toks = b.value.split(/\s+/).filter((t) => HASH_TOKEN_RE.test(t));
        for (const t of toks) hashTokens.get(a.name).add(t);
        // non-hash tokens must match the base exactly
        const aOther = a.value.split(/\s+/).filter((t) => !HASH_TOKEN_RE.test(t));
        const bOther = b.value.split(/\s+/).filter((t) => !HASH_TOKEN_RE.test(t));
        if (aOther.join(" ") !== bOther.join(" ")) {
          console.error(`[emit-csp-header] FAIL: ${file} ${a.name} non-hash sources differ: "${bOther.join(" ")}" vs "${aOther.join(" ")}"`);
          process.exit(1);
        }
      } else if (a.value !== b.value) {
        console.error(`[emit-csp-header] FAIL: ${file} ${a.name} differs: "${b.value}" vs "${a.value}"`);
        process.exit(1);
      }
    }
  }

  // strip ALL CSP meta tags from this page
  const stripped = html.replace(META_TAG_RE, "");
  if (stripped === html) {
    console.error(`[emit-csp-header] FAIL: ${file} meta could not be stripped`);
    process.exit(1);
  }
  writeFileSync(file, stripped);
  checked++;
}

// rebuild merged policy in original directive order
const merged = base.map((d) => {
  if (hashTokens.has(d.name)) {
    const nonHash = d.value.split(/\s+/).filter((t) => !HASH_TOKEN_RE.test(t));
    const value = [...nonHash, ...hashTokens.get(d.name)].join(" ");
    return value ? `${d.name} ${value}` : d.name;
  }
  return d.value ? `${d.name} ${d.value}` : d.name;
});

if (!merged.some((d) => d.toLowerCase().startsWith("frame-ancestors"))) {
  merged.push("frame-ancestors 'none'");
}

const policy = merged.join("; ");

// append to dist/_headers (the static security headers from public/_headers are already in dist)
const headersPath = join(dist, "_headers");
const block = `\n# Content-Security-Policy as HTTP header (moved from per-page <meta> by scripts/emit-csp-header.mjs).\n# A meta CSP cannot enforce frame-ancestors; the header can. Do NOT also re-add a meta CSP:\n# browsers enforce the intersection of both policies.\n/*\n  Content-Security-Policy: ${policy}\n`;
// /widget/* embed widgets (see /tools/embed/) must stay iframeable by third
// parties. Appended LAST and with a more specific path than "/*" so it wins
// under both precedence readings (Netlify: most-specific path wins).
const widgetBlock = `\n# Embed widgets stay iframeable — overrides the site-wide CSP frame-ancestors\n# for /widget/* only (see public/_headers and /tools/embed/).\n/widget/*\n  Content-Security-Policy: default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; frame-ancestors *; base-uri 'none'; form-action 'none'\n`;
const existing = existsSync(headersPath) ? readFileSync(headersPath, "utf8") : "";
writeFileSync(headersPath, existing + (existing.endsWith("\n") || !existing ? "" : "\n") + block + widgetBlock);

console.log(`[emit-csp-header] Checked ${checked} pages; policy directives: ${merged.length}`);
console.log(`[emit-csp-header] script-src hashes: ${hashTokens.get("script-src")?.size ?? 0}, style-src hashes: ${hashTokens.get("style-src")?.size ?? 0}`);
console.log(`[emit-csp-header] CSP meta stripped from all pages; header written to dist/_headers`);
