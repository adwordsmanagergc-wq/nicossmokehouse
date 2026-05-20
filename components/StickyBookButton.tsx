import { Utensils } from "lucide-react";
import { links } from "@/lib/content";

/** Floating "Book a Table" button — always reachable, prominent on mobile. */
export default function StickyBookButton() {
  return (
    <a
      href={links.whatsappBooking}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl"
    >
      <Utensils className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm">Book a Table</span>
    </a>
  );
}
