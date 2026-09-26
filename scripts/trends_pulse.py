"""
Smart VAT Kenya — Google Trends RSS pulse (v2)
Run: python trends_pulse.py            # daily log
     python trends_pulse.py --weekly   # Friday gap-analysis report
Requirements: pip install pandas requests
"""
import argparse, csv, datetime as dt, sys
import pandas as pd
import xml.etree.ElementTree as ET
import requests

NS = {"g": "https://trends.google.com/trending/rss"}
GEO_MAP = {"KE": "Kenya", "UG": "Uganda", "TZ": "Tanzania", "NG": "Nigeria", "ZA": "South Africa"}
# NOTE: category param is ignored by this endpoint (verified 2026-08-08).
TAX_WORDS = ["kra", "vat", "etims", "tax", "amnesty", "finance bill", "itax", "tcc",
             "mpesa", "safaricom", "outage", "deadline", "budget", "penalty", "cetis", "import"]

def fetch_realtime_trends(geo="KE"):
    url = f"https://trends.google.com/trending/rss?geo={geo}"
    r = requests.get(url, timeout=15, headers={"User-Agent": "Mozilla/5.0"})
    r.raise_for_status()
    rows = []
    for item in ET.fromstring(r.content).findall(".//item"):
        title = item.findtext("title")
        traffic = item.findtext("g:approx_traffic", namespaces=NS)
        rows.append({"geo": geo, "keyword": title, "traffic": traffic or "N/A",
                     "date": dt.date.today().isoformat()})
    return rows

def log_daily():
    all_rows = []
    for geo in GEO_MAP:
        try:
            all_rows += fetch_realtime_trends(geo)
        except Exception as e:
            print(f"[warn] {geo}: {e}", file=sys.stderr)
    df = pd.DataFrame(all_rows)
    df.to_csv("trends_log.csv", mode="a", header=not __import__("os").path.exists("trends_log.csv"), index=False)
    hits = df[df["keyword"].str.lower().apply(lambda k: any(w in k for w in TAX_WORDS))]
    print(f"[{dt.date.today()}] {len(df)} terms logged; {len(hits)} tax-adjacent.")
    if not hits.empty:
        print(hits.to_string(index=False))
        print(">> SPIKE: review against content inventory TODAY.")

def weekly_report():
    try:
        df = pd.read_csv("trends_log.csv")
    except FileNotFoundError:
        print("No log yet — run daily first."); return
    week = df[df["date"] >= (dt.date.today() - dt.timedelta(days=7)).isoformat()]
    if week.empty:
        print("No data this week."); return
    hits = week[week["keyword"].str.lower().apply(lambda k: any(w in k for w in TAX_WORDS))]
    print(f"Weekly report: {len(week)} terms, {len(hits)} tax-adjacent.")
    print("Tax-adjacent terms this week:"); print(hits.to_string(index=False) if not hits.empty else "  (none — expected; tax is evergreen, not trending)")
    print("Action: check GSC 'queries' export for rising non-branded terms and map to §5.1 inventory.")

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--weekly", action="store_true")
    args = p.parse_args()
    (weekly_report if args.weekly else log_daily)()
