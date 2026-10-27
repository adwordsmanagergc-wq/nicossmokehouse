import { Coffee, CookingPot, Flame, Pizza, Sandwich, type LucideIcon } from "lucide-react";

// Maps the icon names used in lib/content.ts → family.members to lucide-react components.
export const FAMILY_ICONS = {
  flame: Flame,
  cookingPot: CookingPot,
  coffee: Coffee,
  sandwich: Sandwich,
  pizza: Pizza,
} satisfies Record<string, LucideIcon>;
