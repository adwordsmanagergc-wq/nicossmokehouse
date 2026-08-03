import { site, links, IMAGES } from "@/lib/content";
import { caribbeanFoodPost } from "@/lib/blog/caribbean-food";

/**
 * Content for /caribbean-catering-bali — catering-focused adaptation
 * of the Caribbean blog. Reuses the dish list so a menu edit in one
 * place flows through both pages.
 */
export const caribbeanCatering = {
  slug: "caribbean-catering-bali",
  title: "Caribbean Catering in Bali — Jerk Chicken, Curry Goat & Oxtail",
  eyebrow: "Catering · Caribbean",
  metaDescription:
    "Caribbean catering across Bali — jerk chicken, curry goat, oxtail and Jamaican sides for your villa, wedding or event. WhatsApp Nico's to book.",
  subtitle:
    "Bring authentic Jamaican jerk chicken, curry goat and Caribbean soul food to your villa, wedding or event — anywhere in Bali.",
  meta: `${site.name} · Catering across ${site.address.region} · Open 12pm – 12am Daily`,
  hero: { image: IMAGES.heroBg, alt: "Caribbean catering spread with jerk chicken and rice and peas" },

  intro: {
    heading: "Bring the Caribbean to your Bali event",
    lead: "The only kitchen in Bali catering real Jamaican soul food alongside Texas BBQ and Peri Peri.",
    paragraphs: [
      "Whether it's a villa dinner in Canggu, a birthday in Seminyak or a beach wedding in Uluwatu, Nico's Smokehouse can bring the warmth and flavour of the Caribbean to your table. Our team caters jerk chicken, curry goat, oxtail and every Jamaican classic in between — cooked with the same authentic recipes and slow-cooking techniques we use in the restaurant.",
      "Choose drop-off catering with ready-to-serve trays, or full-service with grillers, servers and setup. Menus scale from intimate villa dinners for 6 up to weddings and corporate events for 100+.",
    ],
  },

  dishes: {
    eyebrow: "ON THE MENU",
    heading: "Every Caribbean dish we cater",
    items: caribbeanFoodPost.dishes.items,
  },

  includes: {
    heading: "How Caribbean catering works",
    items: [
      {
        title: "Drop-off catering",
        text: "We deliver Caribbean feasts in ready-to-serve trays and containers — you just plate up. Perfect for smaller villa dinners and casual gatherings.",
      },
      {
        title: "Full-service catering",
        text: "For weddings and larger events we bring servers, grillers and setup so guests get freshly plated jerk chicken and curry hot off the grill.",
      },
      {
        title: "Menu tailored to your event",
        text: "Sharing platters, plated dinners, buffets or grazing tables — we build a Caribbean menu around your headcount, budget and vibe.",
      },
      {
        title: "Bali-wide delivery",
        text: "We regularly cater across Canggu, Seminyak, Berawa, Pererenan, Umalas, Sanur, Nusa Dua, Uluwatu and everywhere in between. See the suburb selector below for area-specific info.",
      },
    ],
  },

  faq: {
    heading: "Caribbean Catering — Frequently Asked",
    items: [
      {
        question: "Where in Bali do you cater Caribbean food?",
        answer:
          "We cater Caribbean and Jamaican food throughout Bali — Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu and beyond. Use the suburb selector to see area-specific catering info, or WhatsApp us if your location isn't listed.",
      },
      {
        question: "What's the minimum group size for Caribbean catering?",
        answer:
          "For drop-off Caribbean catering we typically start from 6 guests. Full-service catering (with staff and grill setup) usually starts from around 15-20 guests, but reach out — we're flexible for the right event.",
      },
      {
        question: "Can we choose exactly which Caribbean dishes we want?",
        answer:
          "Yes. Pick from any of the Caribbean menu items — jerk chicken, curry goat, oxtail, rice and peas, festival, patties, coleslaw and more. We'll help you balance the menu so there's enough variety and volume for your headcount.",
      },
      {
        question: "How spicy is your Caribbean catering menu?",
        answer:
          "Traditional Jamaican dishes like jerk have a warming heat, but we can adjust spice levels to suit your guests — from mild and family-friendly to authentic Kingston heat. Just tell us your preference when you book.",
      },
      {
        question: "Do you cater Caribbean food for weddings?",
        answer:
          "Yes — Caribbean catering makes for a spectacular wedding menu, especially for beach and villa weddings across Uluwatu, Seminyak and Canggu. Sharing platters and family-style service work particularly well.",
      },
      {
        question: "How far in advance do we need to book Caribbean catering?",
        answer:
          "For drop-off orders, 48-72 hours' notice is ideal. Curry goat and oxtail benefit from advance planning as they braise for hours. For weddings or 40+ guest events, book 1-2 weeks ahead so we can plan menus and staffing properly.",
      },
      {
        question: "Can you cater Caribbean food alongside BBQ or Peri Peri?",
        answer:
          "Absolutely — many of our best events mix all three menus so guests get jerk chicken, smoked brisket and Peri Peri all in one spread. We're the only kitchen in Bali that can do this under one roof.",
      },
    ],
  },

  closing: {
    heading: "Book Caribbean Catering",
    lines: [
      { label: "Menu", value: "Jerk chicken, curry goat, oxtail, rice and peas, festival, more" },
      { label: "Group size", value: "6 to 100+ guests" },
      { label: "Service", value: "Drop-off or full-service (staff + setup)" },
      { label: "Areas", value: "Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu" },
    ],
    ctas: [
      { label: "WhatsApp Catering Enquiry", href: links.whatsappCatering, variant: "green" as const },
      { label: "All Catering Menus", href: "/catering-bali", variant: "fire" as const },
      { label: "Back to Home", href: "/", variant: "wood" as const },
    ],
  },
  footerNote:
    "Nico's Smokehouse — Caribbean catering across Bali. Also serving Texas BBQ and Peri Peri.",
};
