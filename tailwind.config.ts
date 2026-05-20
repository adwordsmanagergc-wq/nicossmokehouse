import type { Config } from "tailwindcss";

/**
 * Brand design tokens for Nico's Smokehouse.
 * Colours and fonts are exposed as named utilities so copy/design edits
 * stay in one place — e.g. bg-smoke, text-cream, text-fire, text-gold,
 * font-display, font-body.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#2B1E12", // page background (dark wood)
        char: "#1C130B", // deepest shade for gradients
        cream: "#F6F2EA", // primary light text
        "cream-dim": "#ECE7DF", // secondary light text
        fire: "#EC4913", // orange accent / CTAs / headings
        gold: "#FBBF24", // gold accent / highlights
        light: "#FAF9F5", // light-section background
        brown: "#93806C", // muted brown for borders / sub-text
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Haettenschweiler", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { filter: "drop-shadow(0 0 22px rgba(236,73,19,0.45))" },
          "50%": { filter: "drop-shadow(0 0 42px rgba(251,191,36,0.7))" },
        },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
        "marquee-sports": "marquee 32s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
