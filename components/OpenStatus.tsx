"use client";

import { useEffect, useState } from "react";

/** Minutes past midnight in Bali (WITA, UTC+8), regardless of visitor timezone. */
function baliMinutes(now: Date): number {
  const utc = now.getUTCHours() * 60 + now.getUTCMinutes();
  return (utc + 8 * 60) % (24 * 60);
}

/**
 * Live "Open now" pill. The kitchen runs 12pm – 12am Bali time daily.
 * Server-renders a neutral label, then switches to live status on mount.
 */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const m = baliMinutes(new Date());
      const open = m >= 12 * 60;
      const minsLeft = 24 * 60 - m;
      let label: string;
      if (open) {
        label = minsLeft <= 60 ? `Open now · last hour, closes midnight` : "Open now · until midnight";
      } else {
        const until = 12 * 60 - m;
        label =
          until <= 60
            ? `Opens in ${until} min · 12pm`
            : "Closed · opens 12pm today";
      }
      setStatus({ open, label });
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const open = status?.open ?? true;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md ${
        open ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200" : "border-amber-400/30 bg-amber-500/10 text-amber-200"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${open ? "bg-emerald-400" : "bg-amber-400"}`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${open ? "bg-emerald-400" : "bg-amber-400"}`} />
      </span>
      {status?.label ?? "Open daily · 12pm – 12am"}
    </span>
  );
}
