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
  async redirects() {
    return [
      // Canonicalise www -> non-www with a hard 301.
      // Prevents Google's "Duplicate without user-selected canonical" flag.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nicossmokehouse.com" }],
        destination: "https://nicossmokehouse.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
