import { site, links, IMAGES } from "@/lib/content";
import { periPeriPost } from "@/lib/blog/peri-peri";

/** Content for /peri-peri-catering-bali. */
export const periPeriCatering = {
  slug: "peri-peri-catering-bali",
  title: "Peri Peri Catering in Bali — Flame-Grilled Portuguese-African Chicken",
  eyebrow: "Catering · Peri Peri",
  metaDescription:
    "Peri Peri catering across Bali — flame-grilled chicken with 6 signature sauces for your villa, wedding or event. The fresh alternative to Nando's.",
  subtitle:
    "Flame-grilled Peri Peri chicken with 6 signature sauces, catered to villas, weddings and events across Bali.",
  meta: `${site.name} · Catering across ${site.address.region} · Open 12pm – 12am Daily`,
  hero: { image: IMAGES.heroBg, alt: "Peri peri chicken and sides catered to a Bali villa" },

  intro: {
    heading: "Peri Peri catering that beats the chain",
    lead: "The Nando's alternative in Bali — authentic Portuguese-African peri peri, flame-grilled fresh at your event.",
    paragraphs: [
      "Peri Peri chicken is one of the world's most crowd-pleasing catering menus — bright, spicy, and simple enough that everyone gets something they love. We flame-grill each portion fresh with your chosen sauce, from Lemon & Herb through Extra Hot, so guests can pick their heat level at the table.",
      "Book us for villa parties, sports viewings, birthdays, hen's / buck's weekends and corporate events across Bali. Drop-off trays or full grill setup with staff — your call.",
    ],
  },

  dishes: {
    eyebrow: "ON THE MENU",
    heading: "Every Peri Peri dish we cater",
    items: periPeriPost.dishes.items,
  },

  sauces: periPeriPost.sauces,

  includes: {
    heading: "How Peri Peri catering works",
    items: [
      {
        title: "Fresh flame-grill setup",
        text: "For larger events we bring our peri peri grill so chicken is served hot off the flames, not reheated. Ideal for weddings and 30+ guest parties.",
      },
      {
        title: "Drop-off trays",
        text: "For smaller villa dinners we deliver ready-to-serve trays of flame-grilled peri peri chicken plus sides — Portuguese rice, fries, coleslaw and burger builds.",
      },
      {
        title: "Choose your heat levels",
        text: "Guests can mix and match across our 6 signature sauces. We label each tray so the mild folks and the Extra Hot brigade both know what they're grabbing.",
      },
      {
        title: "Bali-wide delivery",
        text: "We regularly cater peri peri across Canggu, Seminyak, Berawa, Pererenan, Umalas, Sanur, Nusa Dua, Uluwatu and beyond. Pick your suburb below for area-specific info.",
      },
    ],
  },

  faq: {
    heading: "Peri Peri Catering — Frequently Asked",
    items: [
      {
        question: "Where in Bali do you cater Peri Peri chicken?",
        answer:
          "We cater flame-grilled peri peri chicken throughout Bali — Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua and Uluwatu. Use the suburb selector below for area-specific info or WhatsApp us with your postcode.",
      },
      {
        question: "Is your peri peri catering a good alternative to Nando's in Bali?",
        answer:
          "Yes — there's no Nando's in Bali, but our peri peri is arguably better. Authentic Portuguese-African recipe, real African Bird's Eye chillies, chicken flame-grilled fresh to order with your choice of 6 sauce levels. No fast-food shortcuts.",
      },
      {
        question: "Can guests choose their own heat level?",
        answer:
          "Absolutely. We label each tray with its sauce (Lemon & Herb, Mild, Hot, Extra Hot, Mango + Herb, Mango + Lime) so guests pick their preferred heat right at the table. For weddings and larger events we can even bring the grill and cook to order.",
      },
      {
        question: "What sides come with peri peri catering?",
        answer:
          "Classic options include Portuguese rice, peri peri fries, coleslaw, peri peri chicken burgers, wings and spatchcock chicken portions. We'll build a balanced menu around your headcount.",
      },
      {
        question: "What's the minimum group size for peri peri catering?",
        answer:
          "Drop-off catering from 6-8 guests; full-service grill setup usually from 20 guests. Reach out for anything in between — we're flexible for the right event.",
      },
      {
        question: "How much notice do you need for peri peri catering?",
        answer:
          "48-72 hours for drop-off orders, 1-2 weeks for weddings and 40+ guest events so we can source enough chicken and staff properly.",
      },
      {
        question: "Can you cater peri peri alongside BBQ or Caribbean food?",
        answer:
          "Yes — many of our best events combine peri peri with Texas smoked brisket and Jamaican jerk chicken for a three-menu spread. We're the only kitchen in Bali that runs all three cuisines.",
      },
    ],
  },

  closing: {
    heading: "Book Peri Peri Catering",
    lines: [
      { label: "Menu", value: "Peri peri chicken, breast, burger, spatchcock, wings, sides" },
      { label: "Sauces", value: "6 signature — Lemon & Herb through Extra Hot, plus mango variants" },
      { label: "Group size", value: "6 to 100+ guests" },
      { label: "Areas", value: "Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu" },
    ],
    ctas: [
      { label: "WhatsApp Catering Enquiry", href: links.whatsappCatering, variant: "green" as const },
      { label: "All Catering Menus", href: "/catering-bali", variant: "fire" as const },
      { label: "Back to Home", href: "/", variant: "wood" as const },
    ],
  },
  footerNote:
    "Nico's Smokehouse — Peri Peri catering across Bali. Also serving Texas BBQ and Caribbean.",
};
