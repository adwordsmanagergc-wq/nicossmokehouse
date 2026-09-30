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
        paper: "#F3EEE6", // printed-menu paper
        ink: "#16100A", // near-black type on paper
        ember: "#FF8A1F", // bright ember highlight
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Haettenschweiler", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "Segoe UI", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "ember-rise": {
          "0%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate3d(var(--drift,20px),-100vh,0) scale(0.3)", opacity: "0" },
        },
        "slow-zoom": {
          from: { transform: "scale(1.02)" },
          to: { transform: "scale(1.12)" },
        },
        "pulse-subtle": {
          "0%, 100%": { filter: "drop-shadow(0 0 22px rgba(236,73,19,0.45))" },
          "50%": { filter: "drop-shadow(0 0 42px rgba(251,191,36,0.7))" },
        },
      },
      animation: {
        "ember-rise": "ember-rise 7s linear infinite",
        "slow-zoom": "slow-zoom 24s ease-in-out infinite alternate",
        marquee: "marquee 48s linear infinite",
        "marquee-sports": "marquee 32s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
