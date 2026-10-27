"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Bike, MessageCircle, X } from "lucide-react";
import { family, links } from "@/lib/content";
import { FAMILY_ICONS } from "./icons";

type Mode = "book" | "order";

// Nico's own booking / delivery links, as rendered by the nav, mobile bar, footer and page.
const NICOS_WHATSAPP = links.whatsappBooking;
const NICOS_ORDER = [links.gofood, links.grab];

function modeFor(href: string): Mode | null {
  if (href.startsWith(NICOS_WHATSAPP)) return "book";
  if (NICOS_ORDER.includes(href)) return "order";
  return null;
}

const COPY = {
  book: { eyebrow: "Book a table", heading: "Which family member?" },
  order: { eyebrow: "Order online", heading: "Who's cooking tonight?" },
};

/**
 * On /ourfamily, a click on any Nico's "Book a Table" / WhatsApp or delivery
 * link (nav, mobile bar, footer, page) first asks which restaurant it's for.
 * Uses one delegated click listener so the shared components stay untouched.
 */
export default function FamilyPicker() {
  const [state, setState] = useState<{ mode: Mode; clicked: string } | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setState(null), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || a.closest("[data-family-picker]")) return;
      const mode = modeFor(a.href);
      if (!mode) return;
      e.preventDefault();
      setState({ mode, clicked: a.href });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [state, close]);

  if (!state) return null;
  const { mode, clicked } = state;

  return (
    <div data-family-picker className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-6">
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="family-picker-title"
        className="relative max-h-[88svh] w-full overflow-y-auto rounded-t-[28px] bg-gradient-to-b from-smoke to-char px-5 pb-[max(env(safe-area-inset-bottom),1.25rem)] pt-6 ring-1 ring-white/10 md:max-w-lg md:rounded-[28px] md:px-7 md:pb-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-fire">{COPY[mode].eyebrow}</p>
            <h2 id="family-picker-title" className="mt-1 font-display text-4xl leading-none text-cream">
              {COPY[mode].heading}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream transition hover:border-fire hover:text-fire"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="mt-5 space-y-3">
          {family.members.map((m) => {
            const Icon = FAMILY_ICONS[m.icon];
            // Nico's keeps whichever message the visitor clicked (booking or catering)
            const options =
              mode === "book"
                ? m.book
                  ? [{ label: "WhatsApp", href: m.key === "nicos" ? clicked : m.book }]
                  : []
                : m.order;
            const soon = options.length === 0;
            return (
              <li
                key={m.key}
                className={`flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl bg-black/30 p-4 ring-1 ${
                  m.key === "nicos" ? "ring-fire/40" : "ring-white/10"
                } ${soon ? "opacity-60" : ""}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-char ring-1 ring-white/10">
                  {m.badge ? (
                    <Image src={m.badge} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
                  ) : (
                    <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${m.accent}`}>
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-2xl leading-none text-cream">{m.name}</span>
                  <span className="mt-1 block text-xs text-cream/60">{soon ? "Coming soon" : m.tag}</span>
                </span>
                {soon ? null : (
                  <span className="flex w-full flex-wrap gap-2 sm:w-auto">
                    {options.map((o, i) => (
                      <a
                        key={o.href}
                        href={o.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={close}
                        className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-bold text-white transition sm:flex-none ${
                          mode === "book" || o.label.includes("WhatsApp")
                            ? "bg-[#25D366] hover:bg-[#20bd5a]"
                            : i === 0
                              ? "bg-[#00AA13] hover:brightness-110"
                              : "bg-[#00B14F] hover:brightness-110"
                        }`}
                      >
                        {mode === "book" || o.label.includes("WhatsApp") ? (
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Bike className="h-4 w-4" aria-hidden="true" />
                        )}
                        {o.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                      </a>
                    ))}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
