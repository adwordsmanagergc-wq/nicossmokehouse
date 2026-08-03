import { site, links, IMAGES } from "@/lib/content";
import { texasBbqPost } from "@/lib/blog/texas-bbq";

/** Content for /texas-bbq-catering-bali. */
export const texasBbqCatering = {
  slug: "texas-bbq-catering-bali",
  title: "Texas BBQ Catering in Bali — 14-Hour Smoked Brisket & Ribs",
  eyebrow: "Catering · Texas BBQ",
  metaDescription:
    "Texas BBQ catering across Bali — Nico's Smokehouse brings 14-hour smoked brisket, US Prime pork ribs, beef ribs and smoked sausage to your villa, wedding or event.",
  subtitle:
    "14-hour smoked brisket, US Prime pork ribs and beef ribs delivered to villas, weddings and events across Bali.",
  meta: `${site.name} · Catering across ${site.address.region} · Open 12pm – 12am Daily`,
  hero: { image: IMAGES.heroBg, alt: "Texas BBQ spread with smoked brisket and ribs on a Bali villa table" },

  intro: {
    heading: "Real Texas smokehouse catering in Bali",
    lead: "12-14 hour smoked brisket, US Prime pork ribs and dino beef ribs — cooked on real wood-fired smokers, catered anywhere in Bali.",
    paragraphs: [
      "Nothing turns a villa dinner or wedding into an event quite like a proper Texas BBQ platter dropped on the table. Sliced brisket with a black pepper bark, US Prime pork ribs that pull clean off the bone, smoky beef ribs the size of your forearm — the kind of BBQ people talk about for months afterwards.",
      "We start smoking your brisket the night before, then deliver hot, sliced and ready to serve — plus classic sides like mac and cheese, rosemary roasts, sweet potato and slaw. For weddings and larger events we bring the whole rig, so guests get freshly sliced brisket carved to order.",
    ],
  },

  dishes: {
    eyebrow: "ON THE MENU",
    heading: "Every BBQ dish we cater",
    items: texasBbqPost.dishes.items,
  },

  includes: {
    heading: "How Texas BBQ catering works",
    items: [
      {
        title: "Drop-off catering",
        text: "We deliver sliced brisket, ribs and sides hot and ready to serve. Simplest option — perfect for villa dinners and casual gatherings.",
      },
      {
        title: "Full smokehouse setup",
        text: "For weddings and bigger events we bring the smoker, carving station and staff — brisket sliced fresh to order in front of your guests.",
      },
      {
        title: "Feast-style menus",
        text: "Choose combinations of brisket, beef ribs, pork ribs, sausage and pulled pork, plus classic sides. We build a menu to match your headcount and budget.",
      },
      {
        title: "Bali-wide delivery",
        text: "We regularly cater across Canggu, Seminyak, Berawa, Pererenan, Umalas, Sanur, Nusa Dua, Uluwatu and beyond. Pick your suburb below for area-specific info.",
      },
    ],
  },

  faq: {
    heading: "Texas BBQ Catering — Frequently Asked",
    items: [
      {
        question: "Where in Bali do you cater Texas BBQ?",
        answer:
          "We cater slow-smoked Texas BBQ throughout Bali — Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua and Uluwatu. Use the suburb selector below for area-specific info or WhatsApp us with your postcode.",
      },
      {
        question: "How is the brisket cooked when it arrives?",
        answer:
          "Brisket is smoked overnight (12-14 hours) at the restaurant and delivered hot, wrapped, sliced or unsliced to your preference. For weddings and larger events we can also bring the smoker on-site and slice to order.",
      },
      {
        question: "What's the minimum group size for BBQ catering?",
        answer:
          "Drop-off BBQ catering typically starts from 8-10 guests (brisket smokes in whole packers, so smaller orders are less efficient). Full-service catering from around 20 guests. WhatsApp us for smaller custom orders.",
      },
      {
        question: "How much notice do you need to cater BBQ in Bali?",
        answer:
          "Because brisket smokes for 12-16 hours, we ask for 3-5 days notice for smaller BBQ orders and 1-2 weeks for weddings or 40+ guest events. Book early — we can only smoke so many briskets in a night.",
      },
      {
        question: "What sides come with your BBQ catering?",
        answer:
          "Classic BBQ sides: mac and cheese, rosemary roasts, sweet potato, coleslaw, plus Caribbean sides like rice and peas or festival if you want to mix things up. All prepared fresh.",
      },
      {
        question: "Do you cater Texas BBQ for weddings?",
        answer:
          "Absolutely. BBQ weddings are a favourite — brisket carving stations, family-style feast tables, and full smoker setups on the day. Perfect for Uluwatu clifftop weddings, Seminyak villa receptions or Canggu beach parties.",
      },
      {
        question: "Can you cater BBQ alongside Caribbean or Peri Peri?",
        answer:
          "Yes — we regularly cater combined menus with Jamaican jerk chicken or peri peri alongside the brisket and ribs. We're the only kitchen in Bali that runs all three cuisines.",
      },
    ],
  },

  closing: {
    heading: "Book Texas BBQ Catering",
    lines: [
      { label: "Menu", value: "Smoked brisket, beef ribs, pork ribs, sausage, sandos, sides" },
      { label: "Group size", value: "8 to 100+ guests" },
      { label: "Notice", value: "3-5 days typical · 1-2 weeks for weddings" },
      { label: "Areas", value: "Canggu, Seminyak, Berawa, Pererenan, Umalas, Legian, Sanur, Nusa Dua, Uluwatu" },
    ],
    ctas: [
      { label: "WhatsApp Catering Enquiry", href: links.whatsappCatering, variant: "green" as const },
      { label: "All Catering Menus", href: "/catering-bali", variant: "fire" as const },
      { label: "Back to Home", href: "/", variant: "wood" as const },
    ],
  },
  footerNote:
    "Nico's Smokehouse — Texas BBQ catering across Bali. Also serving Caribbean and Peri Peri.",
};
