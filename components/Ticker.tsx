import { Flame } from "lucide-react";
import { ticker } from "@/lib/content";

/** Slanted scrolling band of house highlights. */
export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative z-10 -my-6 overflow-hidden py-6" aria-label="House highlights">
      <div className="-rotate-[1.5deg] scale-105 border-y border-black/20 bg-fire py-4 shadow-[0_20px_50px_-20px_rgba(236,73,19,0.8)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 font-display text-2xl tracking-[0.08em] text-white md:text-3xl"
              aria-hidden={i >= ticker.length}
            >
              {item}
              <Flame className="h-5 w-5 text-char/70" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
