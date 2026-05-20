import { Flame, Instagram, MapPin, Utensils, type LucideIcon } from "lucide-react";

// Maps the icon names used in lib/content.ts to lucide-react components.
export const ICONS = {
  flame: Flame,
  instagram: Instagram,
  pin: MapPin,
  utensils: Utensils,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
