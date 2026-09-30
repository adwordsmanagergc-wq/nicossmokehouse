/** Drifting fire embers — pure CSS, deterministic so it never mismatches on hydrate. */
export default function Embers({ count = 22 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37) % 100;
        const size = 2 + ((i * 7) % 4);
        const duration = 6 + ((i * 13) % 7);
        const delay = -((i * 1.7) % duration);
        const drift = ((i % 2 ? 1 : -1) * (20 + ((i * 11) % 60))).toString() + "px";
        return (
          <span
            key={i}
            className="absolute bottom-[-10px] animate-ember-rise rounded-full bg-ember"
            style={
              {
                left: `${left}%`,
                width: size,
                height: size,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                boxShadow: "0 0 8px 2px rgba(255,138,31,0.7)",
                "--drift": drift,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
