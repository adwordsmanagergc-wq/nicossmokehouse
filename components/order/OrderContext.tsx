"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type OrderLine = {
  key: string;
  name: string;
  /** Portion / size, e.g. "Half" or "100g". */
  variant?: string;
  unitPrice: number;
  qty: number;
  /** Sold by weight in 100g units — qty is shown as grams. */
  byWeight?: boolean;
  choice?: { label: string; values: string[]; value: string };
};

type AddInput = Omit<OrderLine, "key" | "qty"> & { key: string };

type OrderState = {
  lines: OrderLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (line: AddInput) => void;
  setQty: (key: string, qty: number) => void;
  setChoice: (key: string, value: string) => void;
  clear: () => void;
  /** Bumps whenever something is added — drives the tray's pulse. */
  lastAdded: number;
};

const OrderContext = createContext<OrderState | null>(null);
const STORAGE_KEY = "nicos-order-v1";

export function OrderProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<OrderLine[]>([]);
  const [open, setOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  // Restore a draft order for returning visitors (best-effort only).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as OrderLine[]);
    } catch {
      /* storage unavailable — start empty */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const add = useCallback((input: AddInput) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.key === input.key);
      if (existing) {
        return prev.map((l) => (l.key === input.key ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { ...input, qty: 1 }];
    });
    setLastAdded(Date.now());
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, qty } : l)),
    );
  }, []);

  const setChoice = useCallback((key: string, value: string) => {
    setLines((prev) =>
      prev.map((l) => (l.key === key && l.choice ? { ...l, choice: { ...l.choice, value } } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<OrderState>(() => {
    const count = lines.reduce((n, l) => n + (l.byWeight ? 1 : l.qty), 0);
    const subtotal = lines.reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
    return { lines, count, subtotal, open, setOpen, add, setQty, setChoice, clear, lastAdded };
  }, [lines, open, add, setQty, setChoice, clear, lastAdded]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder(): OrderState {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}
