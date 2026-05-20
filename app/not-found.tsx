import Link from "next/link";
import { Flame } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Nico's Smokehouse",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Flame className="mb-4 h-12 w-12 text-fire" aria-hidden="true" />
      <h1 className="font-display text-6xl tracking-wider text-cream md:text-8xl">404</h1>
      <p className="mt-2 max-w-md text-cream/70">
        This page has gone up in smoke. Let&apos;s get you back to the good stuff.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-fire px-6 py-3 font-semibold text-white transition hover:brightness-110"
      >
        Back to Home
      </Link>
    </main>
  );
}
