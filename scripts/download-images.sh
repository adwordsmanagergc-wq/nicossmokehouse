#!/usr/bin/env bash
#
# Downloads the original photography from the old (Mocha) asset host into
# public/images/, saved under the same slugs used by the SVG placeholders.
#
# Run this from a machine with normal internet access:
#   bash scripts/download-images.sh
#
# Afterwards, open lib/content.ts and change each entry in the IMAGES object
# from ".svg" to the matching ".jpg" / ".png" file printed below.
#
set -euo pipefail

BASE="https://019d0a46-9da2-77c5-9887-de886a0fdfda.mochausercontent.com"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DEST"

# slug | original filename on the old asset host
ASSETS=(
  "logo|nicos-logo-white.png"
  "hero-wooden-wall|openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
  "og-image|openart-image_1773994724931_39257367_1773994725151_04d1e791.jpg"
  "specialty-jamaican|Jerk-Chicken-Bali.jpg"
  "specialty-texas|Screenshot-2026-03-20-at-4.30.38-pm.png"
  "specialty-periperi|peri-peri-chicken-canggu-bali.jpg"
  "sports-bar-01|nicos-sports-bar.png"
  "sports-bar-02|openart-image_1774153537061_7a0d3a5c_1774153537109_393f27d5.png"
  "dish-01|Screenshot-2026-03-20-at-4.30.38-pm.png"
  "dish-02|Screenshot-2026-03-20-at-4.30.50-pm.png"
  "dish-03|Screenshot-2026-03-20-at-4.30.59-pm.png"
  "dish-04|Screenshot-2026-03-20-at-4.30.26-pm.png"
  "dish-05|Screenshot-2026-03-20-at-4.30.06-pm.png"
  "dish-06|Screenshot-2026-03-20-at-4.31.10-pm.png"
  "dish-07|Screenshot-2026-03-20-at-4.31.18-pm.png"
  "dish-08|Screenshot-2026-03-20-at-4.31.34-pm.png"
  "dish-09|Screenshot-2026-03-20-at-4.31.42-pm.png"
  "dish-10|Screenshot-2026-03-20-at-4.31.58-pm.png"
  "dish-11|Screenshot-2026-03-20-at-11.24.28-pm.png"
  "dish-12|Screenshot-2026-03-20-at-11.23.15-pm.png"
)

for entry in "${ASSETS[@]}"; do
  slug="${entry%%|*}"
  file="${entry##*|}"
  ext="${file##*.}"
  echo "→ $slug.$ext"
  curl -fL --retry 4 --retry-delay 2 -o "$DEST/$slug.$ext" "$BASE/$file"
done

echo ""
echo "Done — files saved to public/images/."
echo "Next: in lib/content.ts, swap each IMAGES entry from .svg to the .jpg/.png shown above."
