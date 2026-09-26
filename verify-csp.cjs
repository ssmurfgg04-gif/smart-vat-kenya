const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const dist = "dist";
const htmls = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) htmls.push(p);
  }
})(dist);

const hashOf = (s) => "sha256-" + crypto.createHash("sha256").update(s).digest("base64");

const issues = [];
const hashUsage = new Map(); // hash -> {pages:Set, snippet}
const pageCount = 0;
let checked = 0;

for (const f of htmls) {
  const src = fs.readFileSync(f, "utf8");
  const meta = src.match(/<meta\s+http-equiv="content-security-policy"[^>]*content="([^"]*)"/i);
  if (!meta) { issues.push(`${f}: NO CSP meta tag`); continue; }
  const csp = meta[1];
  const scriptSrcLine = (csp.match(/script-src\s+([^;]*);/) || [])[1] || "";
  const styleSrcLine = (csp.match(/style-src\s+([^;]*);/) || [])[1] || "";
  const allowedScriptHashes = new Set(scriptSrcLine.match(/'sha(?:256|384|512)-[^']+'/g) || []);
  const allowedStyleHashes = new Set(styleSrcLine.match(/'sha(?:256|384|512)-[^']+'/g) || []);
  const declared = (scriptSrcLine.match(/'unsafe-inline'|'nonce-|'strict-dynamic'/g) || []);
  if (declared.length) issues.push(`${f}: script-src still allows ${declared.join(",")}`);

  for (const m of src.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || "";
    const raw = m[2] || "";
    const type = (attrs.match(/type="([^"]*)"/) || [])[1] || "classic";
    if (attrs.includes("src=")) continue; // external, covered by 'self'
    if (type === "application/ld+json") continue; // inert data block, not executed
    const h = hashOf(raw);
    const quoted = `'${h}'`;
    if (!allowedScriptHashes.has(quoted)) {
      issues.push(`${f}: UNCOVERED inline script type="${type}" hash=${quoted} snippet=${raw.slice(0, 60).replace(/\s+/g, " ")}`);
    }
    const rec = hashUsage.get(h) || { pages: new Set(), snippet: raw.slice(0, 80).replace(/\s+/g, " ") };
    rec.pages.add(f);
    hashUsage.set(h, rec);
  }

  for (const m of src.matchAll(/<style\b([^>]*)>([\s\S]*?)<\/style>/gi)) {
    const attrs = m[1] || "";
    if (attrs.includes("src=")) continue;
    if (styleSrcLine.includes("'unsafe-inline'")) continue; // styles already permitted
    const hash = hashOf(m[2]);
    if (!allowedStyleHashes.has(hash)) issues.push(`${f}: UNCOVERED inline <style>`);
  }
  checked++;
}

console.log(`Checked ${checked} pages`);
if (issues.length) {
  console.log("FAILURES:");
  for (const i of issues) console.log("  " + i);
  process.exitCode = 1;
} else {
  console.log("OK: every non-JSON-LD inline script and style is covered by the per-page CSP meta.");
}
console.log("\nCovered inline script hashes across site:");
for (const [h, rec] of hashUsage) {
  const pages = [...rec.pages].map((p) => p.replace(/\\/g, "/"));
  const distinct = pages.length;
  console.log(`  ${h}  (${distinct} page(s), first: ${pages[0]})  ${distinct === 1 ? rec.snippet : ""}`);
}