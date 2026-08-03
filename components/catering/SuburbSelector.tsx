import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";
import { SUBURB_LIST } from "@/lib/catering/suburbs";

/**
 * Native <details> disclosure styled as a dropdown box.
 * All suburb links are in the DOM (crawlable), no JavaScript required.
 * Optionally exclude the current suburb when this is used on a suburb page.
 */
export default function SuburbSelector({
  label = "Choose your suburb",
  currentSlug,
  cuisineName,
}: {
  label?: string;
  currentSlug?: string;
  cuisineName?: string;
}) {
  const items = SUBURB_LIST.filter((s) => s.slug !== currentSlug);
  const summary = cuisineName
    ? `Choose your ${cuisineName} catering suburb`
    : label;

  return (
    <details className="group mx-auto w-full max-w-md rounded-xl border border-amber-700/40 bg-black/50">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2 text-cream">
          <MapPin className="h-5 w-5 text-fire" aria-hidden="true" />
          <span className="font-semibold">{summary}</span>
        </span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-fire transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul className="grid grid-cols-2 gap-1 border-t border-brown/20 p-2 sm:grid-cols-3">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/catering-${s.slug}`}
              className="block rounded-md px-3 py-2 text-sm text-cream/80 transition hover:bg-brown/20 hover:text-fire"
            >
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
