import Image from "next/image";
import Link from "next/link";
import { IMAGES, MASCOT_SIZES } from "@/lib/content";

export const metadata = {
  title: "Page Not Found | Nico's Smokehouse",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-24 text-center">
      <Image
        src={IMAGES.mascotCluck}
        alt="Cluck the rooster referee, Nico's Smokehouse mascot"
        width={MASCOT_SIZES.cluck.width}
        height={MASCOT_SIZES.cluck.height}
        priority
        className="h-56 w-auto drop-shadow-[0_18px_25px_rgba(0,0,0,0.6)] md:h-72"
      />
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-fire">Error 404 · Foul!</p>
      <h1 className="mt-2 font-display text-6xl leading-[0.9] tracking-wide text-cream md:text-8xl">
        Out of bounds
      </h1>
      <p className="mt-3 max-w-md text-cream/70">
        Cluck&apos;s blown the whistle — this page has gone up in smoke. Let&apos;s get you back to the good stuff.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-fire px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-ember"
      >
        Back to Home
      </Link>
    </main>
  );
}
