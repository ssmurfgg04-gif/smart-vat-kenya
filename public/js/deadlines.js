// Live deadline recompute for /tax-deadlines/.
// The page is server-rendered with build-time dates; this script refreshes
// every deadline cell, the next-deadline callout and the Google Calendar
// links on every visit, so the page can never show a past date as "due soon"
// even if the last deploy is weeks old. Kenya has no DST: EAT = UTC+3 always.
// CSP: same-origin static file, allowed by script-src 'self'.
(function () {
  try {
    function nextMonthly(day) {
      var n = new Date(Date.now() + 3 * 3600 * 1000); // "now" in EAT
      var y = n.getUTCFullYear(), m = n.getUTCMonth(), d = n.getUTCDate();
      if (d <= day) return new Date(Date.UTC(y, m, day));
      return new Date(Date.UTC(y, m + 1, day));
    }
    function fmtLong(d) {
      return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    }
    function fmtShort(d) {
      return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    }
    function prevPeriod(d) {
      return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - 1, 1))
        .toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
    }
    function calUrl(d) {
      var ymd = d.toISOString().slice(0, 10).replace(/-/g, "");
      return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=KRA+VAT+Deadline&dates=" + ymd + "/" + ymd + "&details=VAT+return+due+via+iTax.+Pay+via+Paybill+572572&location=iTax+Portal";
    }

    var next20 = nextMonthly(20);
    var next9 = nextMonthly(9);

    // callout
    var q = function (sel) { return document.querySelector(sel); };
    var el;
    if ((el = q('[data-deadline="vat-long"]'))) el.textContent = fmtLong(next20);
    if ((el = q('[data-deadline="vat-callout"]'))) el.textContent = "VAT return & payment for the " + prevPeriod(next20) + " tax period";

    // calendar links (callout + sidebar card)
    document.querySelectorAll('[data-deadline-href="vat"]').forEach(function (a) { a.setAttribute("href", calUrl(next20)); });

    // table cells + notes (only VAT + PAYE carry period-dynamic notes)
    document.querySelectorAll('[data-deadline="day-20"]').forEach(function (td) { td.textContent = fmtShort(next20); });
    document.querySelectorAll('[data-deadline="day-9"]').forEach(function (td) { td.textContent = fmtShort(next9); });
    document.querySelectorAll('[data-deadline-note="note-20"]').forEach(function (td) {
      td.textContent = "For the " + prevPeriod(next20) + " tax period. File via iTax; pay via Paybill 572572.";
    });
    document.querySelectorAll('[data-deadline-note="note-9"]').forEach(function (td) {
      td.textContent = "For " + prevPeriod(next9) + " payroll. Withholding agents must remit via iTax.";
    });

    // VAT "due soon" urgency: only within 7 days of the 20th
    var daysLeft = Math.ceil((next20.getTime() - Date.now()) / 86400000);
    var urgent = daysLeft <= 7;
    document.querySelectorAll('[data-deadline-row="20"]').forEach(function (tr) {
      tr.classList.toggle("bg-red-50/40", urgent);
      if (urgent) {
        var badge = tr.querySelector('td span');
        if (!badge) {
          var nameCell = tr.querySelector("td");
          if (nameCell) {
            var b = document.createElement("span");
            b.className = "ml-1 inline-flex font-mono text-[0.6rem] uppercase tracking-wide bg-red-600 text-white px-1.5 py-0.5 rounded";
            b.textContent = "Due soon";
            nameCell.appendChild(b);
          }
        }
      }
    });
  } catch (e) { /* never break the page */ }
})();
