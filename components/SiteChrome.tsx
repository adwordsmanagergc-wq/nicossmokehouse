"use client";

import { usePathname } from "next/navigation";

// Standalone pages (e.g. the table QR landing page) render without the
// global nav, footer and mobile action bar.
const BARE_PATHS = ["/reviewandfollow"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (BARE_PATHS.includes(pathname)) return null;
  return <>{children}</>;
}
