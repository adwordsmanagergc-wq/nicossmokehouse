"use client";

import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { TAX_MULTIPLIER, formatK } from "@/lib/menu";
import { useOrder, type OrderLine } from "./OrderContext";

const WHATSAPP_NUMBER = "6287867966662";

const MODES = [
  { id: "pickup", label: "Pickup" },
  { id: "delivery", label: "Delivery" },
  { id: "table", label: "Dine-in" },
] as const;

type Mode = (typeof MODES)[number]["id"];

function lineTitle(l: OrderLine): string {
  if (l.byWeight) return `${l.name} ${l.qty * 100}g`;
  return l.variant ? `${l.name} (${l.variant})` : l.name;
}

function buildMessage(lines: OrderLine[], subtotal: number, mode: Mode, name: string, when: string, notes: string) {
  const intro =
    mode === "table"
      ? "Hi Nico's! I'd like to book a table and pre-order:"
      : mode === "delivery"
        ? "Hi Nico's! I'd like to order for delivery:"
        : "Hi Nico's! I'd like to order for pickup:";
  const rows = lines.map((l) => {
    const qty = l.byWeight ? "" : `${l.qty}× `;
    const choice = l.choice ? ` — ${l.choice.label}: ${l.choice.value}` : "";
    return `• ${qty}${lineTitle(l)}${choice} — ${formatK(l.unitPrice * l.qty)}`;
  });
  return [
    intro,
    "",
    ...rows,
    "",
    `Subtotal: ${formatK(subtotal)} (+11% tax & 3% service)`,
    name ? `Name: ${name}` : "",
    when ? `${mode === "table" ? "Date/time & guests" : mode === "delivery" ? "Address & time" : "Pickup time"}: ${when}` : "",
    notes ? `Notes: ${notes}` : "",
  ]
    .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
    .join("\n")
    .trim();
}

/** Slide-over order tray + floating summary pill. */
export default function OrderTray() {
  const { lines, count, subtotal, open, setOpen, setQty, setChoice, clear, lastAdded } = useOrder();
  const [mode, setMode] = useState<Mode>("pickup");
  const [name, setName] = useState("");
  const [when, setWhen] = useState("");
  const [notes, setNotes] = useState("");
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (!lastAdded) return;
    setPop(true);
    const t = window.setTimeout(() => setPop(false), 500);
    return () => window.clearTimeout(t);
  }, [lastAdded]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setOpen]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildMessage(lines, subtotal, mode, name.trim(), when.trim(), notes.trim()),
  )}`;

  const whenLabel =
    mode === "table" ? "Date, time & number of guests" : mode === "delivery" ? "Delivery address & time" : "Pickup time";

  return (
    <>
      {/* Floating summary pill */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-[84px] left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-fire py-2.5 pl-3 pr-5 text-white shadow-[0_20px_50px_-10px_rgba(236,73,19,0.9)] transition-all duration-500 md:bottom-6 ${
          count > 0 && !open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        } ${pop ? "animate-tray-pop" : ""}`}
        aria-label={`View your order: ${count} items, ${formatK(subtotal)}`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <ShoppingBag className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-bold uppercase tracking-[0.1em]">
          {count} {count === 1 ? "item" : "items"} · {formatK(subtotal)}
        </span>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-char text-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        {...(!open ? { inert: "" as unknown as boolean } : {})}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-fire">Your order</p>
            <h2 className="font-display text-4xl leading-none">The Tray</h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-fire hover:text-fire"
            aria-label="Close order"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-12 w-12 text-brown" aria-hidden="true" />
            <p className="mt-4 font-display text-3xl">Your tray is empty</p>
            <p className="mt-2 text-sm text-cream/60">Add brisket, ribs, jerk chicken and sides from the menu.</p>
            <a
              href="/#menu"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-fire px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white"
            >
              Browse the menu
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-white/10">
                {lines.map((l) => (
                  <li key={l.key} className="py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold leading-tight">{l.name}</p>
                        {l.variant || l.byWeight ? (
                          <p className="text-sm text-cream/55">{l.byWeight ? `${l.qty * 100}g` : l.variant}</p>
                        ) : null}
                      </div>
                      <p className="font-display text-2xl leading-none">{formatK(l.unitPrice * l.qty)}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-white/15">
                        <button
                          type="button"
                          onClick={() => setQty(l.key, l.qty - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full transition hover:text-fire"
                          aria-label={`Remove one ${lineTitle(l)}`}
                        >
                          {l.qty === 1 ? <Trash2 className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
                        </button>
                        <span className="min-w-12 text-center text-sm font-bold">
                          {l.byWeight ? `${l.qty * 100}g` : l.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(l.key, l.qty + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full transition hover:text-fire"
                          aria-label={`Add one more ${lineTitle(l)}`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      {l.choice ? (
                        <label className="flex items-center gap-2 text-xs text-cream/60">
                          {l.choice.label}
                          <select
                            value={l.choice.value}
                            onChange={(e) => setChoice(l.key, e.target.value)}
                            className="max-w-[190px] rounded-full border border-white/15 bg-smoke px-3 py-1.5 text-sm text-cream focus:border-fire focus:outline-none"
                          >
                            {l.choice.values.map((v) => (
                              <option key={v}>{v}</option>
                            ))}
                          </select>
                        </label>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="grid grid-cols-3 gap-1 rounded-full bg-black/40 p-1" role="radiogroup" aria-label="Order type">
                  {MODES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      role="radio"
                      aria-checked={mode === m.id}
                      onClick={() => setMode(m.id)}
                      className={`rounded-full py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                        mode === m.id ? "bg-fire text-white" : "text-cream/60 hover:text-cream"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-cream/35 focus:border-fire focus:outline-none"
                />
                <input
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  placeholder={whenLabel}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-cream/35 focus:border-fire focus:outline-none"
                />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes — extra sauces, allergies…"
                  rows={2}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-cream/35 focus:border-fire focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={clear}
                className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream/40 transition hover:text-fire"
              >
                Clear tray
              </button>
            </div>

            <div className="border-t border-white/10 px-6 pb-6 pt-4">
              <div className="flex items-baseline justify-between text-sm text-cream/60">
                <span>Subtotal</span>
                <span className="font-display text-2xl text-cream">{formatK(subtotal)}</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between text-xs text-cream/45">
                <span>Est. with 11% tax + 3% service</span>
                <span>≈ {formatK(subtotal * TAX_MULTIPLIER)}</span>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#20bd5a]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
                </svg>
                Send order on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-cream/45">
                We&apos;ll confirm availability &amp; timing in the chat. Kitchen open 12pm – 12am.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
