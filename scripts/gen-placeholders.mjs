// Generates branded placeholder images into /public/images.
// These keep the site rendering until you swap in the real photos.
// Run: node scripts/gen-placeholders.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const outDir = new URL("../public/images/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function rect(w, h, label) {
  const titleSize = Math.round(Math.min(w, h) * 0.05) + 9;
  const labelSize = Math.round(Math.min(w, h) * 0.09) + 11;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)} placeholder">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2B1E12"/><stop offset="1" stop-color="#1C130B"/>
  </linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="14" y="14" width="${w - 28}" height="${h - 28}" rx="16" fill="none" stroke="#93806C" stroke-opacity="0.35" stroke-width="2"/>
  <text x="50%" y="${h / 2 - labelSize * 0.55}" font-family="Arial, sans-serif" font-size="${titleSize}" letter-spacing="3" font-weight="700" fill="#EC4913" text-anchor="middle">NICO'S SMOKEHOUSE</text>
  <text x="50%" y="${h / 2 + labelSize * 0.55}" font-family="Arial, sans-serif" font-size="${labelSize}" font-weight="700" fill="#F6F2EA" text-anchor="middle">${esc(label)}</text>
  <text x="50%" y="${h / 2 + labelSize * 1.9}" font-family="Arial, sans-serif" font-size="${titleSize * 0.82}" fill="#93806C" text-anchor="middle">placeholder &#183; replace with real photo</text>
</svg>`;
}

function badge(size) {
  const c = size / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Nico's Smokehouse logo placeholder">
  <circle cx="${c}" cy="${c}" r="${c}" fill="#161009"/>
  <circle cx="${c}" cy="${c}" r="${c - 10}" fill="none" stroke="#EC4913" stroke-width="3"/>
  <circle cx="${c}" cy="${c}" r="${c - 26}" fill="none" stroke="#93806C" stroke-opacity="0.5" stroke-width="2"/>
  <text x="50%" y="${c - size * 0.07}" font-family="Arial, sans-serif" font-size="${size * 0.135}" letter-spacing="2" font-weight="800" fill="#F6F2EA" text-anchor="middle">NICO'S</text>
  <text x="50%" y="${c + size * 0.07}" font-family="Arial, sans-serif" font-size="${size * 0.115}" letter-spacing="1.5" font-weight="800" fill="#EC4913" text-anchor="middle">SMOKEHOUSE</text>
  <text x="50%" y="${c + size * 0.2}" font-family="Arial, sans-serif" font-size="${size * 0.075}" letter-spacing="5" font-weight="600" fill="#FBBF24" text-anchor="middle">BALI</text>
</svg>`;
}

const specs = [
  ["hero-wooden-wall", () => rect(1600, 1000, "Hero — Wooden Wall")],
  ["og-image", () => rect(1200, 630, "BBQ & Caribbean in Bali")],
  ["specialty-jamaican", () => rect(900, 720, "Jamaican Soul")],
  ["specialty-texas", () => rect(900, 720, "Texas BBQ")],
  ["specialty-periperi", () => rect(900, 720, "Peri Peri Fire")],
  ["sports-bar-01", () => rect(1200, 800, "Bintang Sports Bar")],
  ["sports-bar-02", () => rect(1200, 800, "Bintang Sports Bar")],
  ["logo", () => badge(600)],
];
for (let i = 1; i <= 12; i++) {
  specs.push([`dish-${String(i).padStart(2, "0")}`, () => rect(720, 540, `Dish ${String(i).padStart(2, "0")}`)]);
}

for (const [name, fn] of specs) {
  writeFileSync(new URL(`${name}.svg`, outDir), fn());
}
console.log(`Generated ${specs.length} placeholder images in public/images/`);
