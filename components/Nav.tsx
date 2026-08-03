import Image from "next/image";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { nav, site, IMAGES } from "@/lib/content";

/**
 * Fixed, translucent top navigation. The live site has no top bar — this is a
 * lightweight addition for quick in-page navigation on the rebuilt site.
 */
export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brown/20 bg-smoke/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <Image
            src={IMAGES.logo}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-display text-xl tracking-wide text-cream">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream-dim/80 transition-colors hover:text-fire"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={nav.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-fire px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
        >
          <Utensils className="h-4 w-4" aria-hidden="true" />
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
