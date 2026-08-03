import Link from "next/link";
import { ChevronDown, Flame } from "lucide-react";
import { CUISINE_LIST } from "@/lib/catering/cuisines";

/**
 * Cuisine dropdown used on suburb catering pages so visitors can jump
 * to the cuisine-specific catering page.
 */
export default function CuisineSelector({
  label = "Choose a catering menu",
  currentSlug,
  suburbName,
}: {
  label?: string;
  currentSlug?: string;
  suburbName?: string;
}) {
  const items = CUISINE_LIST.filter((c) => c.slug !== currentSlug);
  const summary = suburbName ? `Choose a menu for ${suburbName}` : label;

  return (
    <details className="group mx-auto w-full max-w-md rounded-xl border border-amber-700/40 bg-black/50">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2 text-cream">
          <Flame className="h-5 w-5 text-fire" aria-hidden="true" />
          <span className="font-semibold">{summary}</span>
        </span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-fire transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul className="space-y-1 border-t border-brown/20 p-2">
        {items.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              className="block rounded-md px-3 py-2 text-sm text-cream/80 transition hover:bg-brown/20 hover:text-fire"
            >
              <span className="font-semibold text-cream">{c.name}</span>
              <span className="ml-2 text-cream/60">— {c.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
