import { BookOpen, Bike, Utensils } from "lucide-react";
import { links } from "@/lib/content";

/**
 * Always-reachable actions. Mobile: a bottom bar (Menu · Delivery · Book).
 * Desktop: a floating "Book a Table" pill.
 */
export default function StickyBookButton() {
  return (
    <>
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-char/90 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur-xl md:hidden"
      >
        <div className="grid grid-cols-[1fr_1fr_1.4fr] gap-2">
          <a
            href="/#menu"
            className="flex flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/75"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            Menu
          </a>
          <a
            href={links.gofood}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-2xl py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/75"
          >
            <Bike className="h-5 w-5" aria-hidden="true" />
            Delivery
          </a>
          <a
            href={links.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-bold uppercase tracking-[0.1em] text-white"
          >
            <Utensils className="h-4 w-4" aria-hidden="true" />
            Book a Table
          </a>
        </div>
      </nav>

      <a
        href={links.whatsappBooking}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#20bd5a] md:flex"
      >
        <Utensils className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm uppercase tracking-[0.1em]">Book a Table</span>
      </a>
    </>
  );
}
