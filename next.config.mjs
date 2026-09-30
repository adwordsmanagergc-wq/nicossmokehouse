/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The placeholder artwork in /public/images is SVG. Real downloaded photos
    // (JPG/PNG) are optimised normally; SVGs are passed through safely.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // www <-> non-www canonicalisation is handled in Vercel → Settings → Domains.
  // Do NOT add a host redirect here too: combined with Vercel's own domain
  // redirect it creates an infinite loop (ERR_TOO_MANY_REDIRECTS).
};

export default nextConfig;
