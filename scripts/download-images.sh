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
