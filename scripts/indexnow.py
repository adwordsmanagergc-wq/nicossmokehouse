#!/usr/bin/env python3
"""Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).

Usage: python3 scripts/indexnow.py
The key file public/<KEY>.txt is served from the site root.
"""
import json
import re
import sys
import time
import urllib.error
import urllib.request

HOST = "nicossmokehouse.com"
SITE = f"https://{HOST}"
KEY = "0f9be585653e427ab0009761f1426345"
KEY_LOCATION = f"{SITE}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"
BATCH = 10000  # IndexNow max URLs per request


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "nicossmokehouse-indexnow"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.status, r.read().decode("utf-8", "replace")


def wait_for_key(tries=20, delay=30):
    """Wait until the deployed key file is live, so IndexNow can verify ownership."""
    for i in range(tries):
        try:
            status, body = fetch(KEY_LOCATION)
            if status == 200 and body.strip() == KEY:
                return True
        except Exception as e:  # not deployed yet
            print(f"Key file not live yet ({e}); retry {i + 1}/{tries}")
        time.sleep(delay)
    return False


def main():
    if not wait_for_key():
        sys.exit(f"Key file {KEY_LOCATION} never went live; aborting.")
    _, xml = fetch(f"{SITE}/sitemap.xml")
    urls = sorted(set(re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", xml)))
    urls = [u for u in urls if u.startswith(SITE)]
    print(f"Submitting {len(urls)} URLs to IndexNow")
    for i in range(0, len(urls), BATCH):
        payload = json.dumps({
            "host": HOST,
            "key": KEY,
            "keyLocation": KEY_LOCATION,
            "urlList": urls[i:i + BATCH],
        }).encode()
        req = urllib.request.Request(
            ENDPOINT, data=payload, method="POST",
            headers={"Content-Type": "application/json; charset=utf-8"})
        # A new key can take a few minutes to verify (HTTP 403
        # SiteVerificationNotCompleted), so retry before giving up.
        for attempt in range(1, 9):
            try:
                with urllib.request.urlopen(req, timeout=60) as r:
                    print(f"Batch {i // BATCH + 1}: HTTP {r.status} (200/202 = accepted)")
                break
            except urllib.error.HTTPError as e:
                body = e.read().decode()[:300]
                if e.code == 403 and "SiteVerificationNotCompleted" in body and attempt < 8:
                    print(f"Key not verified yet; waiting 60s (attempt {attempt}/8)")
                    time.sleep(60)
                    continue
                sys.exit(f"Batch {i // BATCH + 1} failed: HTTP {e.code} {body}")


if __name__ == "__main__":
    main()
