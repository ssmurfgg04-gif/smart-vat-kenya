#!/usr/bin/env node
/**
 * verify-csp-header.mjs — Netlify-mode CSP checker.
 *
 * After `NETLIFY=true npm run build`:
 *   - every dist/ HTML files must have NO <meta http-equiv="Content-Security-Policy">
 *   - dist/_headers must contain a Content-Security-Policy header
 *   - every non-JSON-LD inline <script>/<style> in every page must be covered
 *     by the header policy's hash allowlist
 *
 * Local-mode equivalent: node verify-csp.cjs (checks the per-page <meta> CSP).
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const dist = "dist";
const headersPath = path.join(dist, "_headers");
const issues = [];

if (!fs.existsSync(headersPath)) {
  console.error("FAIL: dist/_headers not found — was the build run with NETLIFY=true?");
  process.exit(1);
}
const headersSrc = fs.readFileSync(headersPath, "utf8");
// The file may carry multiple Content-Security-Policy rules: the site-wide
// /* policy (appended by emit-csp-header.mjs) plus /widget/* embed carve-outs.
// Netlify resolves duplicates by most-specific path, so the rule that governs
// normal pages is the LAST one under a bare "/*" selector. Verify against that.
const lines = headersSrc.split("\n");
let cspLine = null;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === "/*") {
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim().startsWith("Content-Security-Policy:")) {
        cspLine = lines[j].trim();
        break;
      }
    }
  }
}
if (!cspLine) {
  console.error("FAIL: dist/_headers has no site-wide Content-Security-Policy header under /*");
  process.exit(1);
}
const csp = cspLine.trim().replace(/^Content-Security-Policy:\s*/, "");
const scriptSrcLine = (csp.match(/script-src\s+([^;]*);/) || [])[1] || "";
const styleSrcLine = (csp.match(/style-src\s+([^;]*);/) || [])[1] || "";
const allowedScriptHashes = new Set(scriptSrcLine.match(/'sha(?:256|384|512)-[^']+'/g) || []);
const allowedStyleHashes = new Set(styleSrcLine.match(/'sha(?:256|384|512)-[^']+'/g) || []);

if (!csp.toLowerCase().includes("frame-ancestors 'none'")) {
  issues.push("header policy is missing frame-ancestors 'none'");
}

const hashOf = (s) => "sha256-" + crypto.createHash("sha256").update(s).digest("base64");
const htmls = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      // /widget/* embeds have their own dedicated CSP header rule and inline
      // scripts — out of scope for the site-wide merged-policy check.
      if (p === path.join(dist, "widget")) continue;
      walk(p);
    } else if (e.name.endsWith(".html")) htmls.push(p);
  }
})(dist);

let checked = 0;
let residualMetas = 0;
for (const f of htmls) {
  const src = fs.readFileSync(f, "utf8");
  if (/<meta\b[^>]*\bhttp-equiv=["']?content-security-policy/i.test(src)) {
    residualMetas++;
    issues.push(`${f}: CSP meta tag still present (should have been stripped)`);
    continue;
  }
  for (const m of src.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || "";
    const raw = m[2] || "";
    const type = (attrs.match(/type="([^"]*)"/) || [])[1] || "classic";
    if (attrs.includes("src=")) continue; // external, covered by 'self'
    if (type === "application/ld+json") continue; // inert data block
    const quoted = `'${hashOf(raw)}'`;
    if (!allowedScriptHashes.has(quoted)) {
      issues.push(`${f}: UNCOVERED inline script type="${type}" hash=${quoted} snippet=${raw.slice(0, 60).replace(/\s+/g, " ")}`);
    }
  }
  for (const m of src.matchAll(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi)) {
    const attrs = m[1] || "";
    if (attrs.includes("src=")) continue;
    if (styleSrcLine.includes("'unsafe-inline'")) continue;
    if (!allowedStyleHashes.has(hashOf(m[2]))) issues.push(`${f}: UNCOVERED inline style block`);
  }
  checked++;
}

console.log(`Checked ${checked} pages against the HTTP-header CSP.`);
if (residualMetas) console.log(`(residual CSP meta tags: ${residualMetas})`);
if (issues.length) {
  console.log("FAILURES:");
  for (const i of issues) console.log("  " + i);
  process.exit(1);
}
console.log("OK: header CSP present, no residual meta tags, every inline script/style covered.");
