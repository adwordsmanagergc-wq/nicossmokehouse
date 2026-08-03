// =============================================================================
//  SINGLE SOURCE OF TRUTH — all site copy, links and image references.
//  Edit this file to change ANY text, link or image on the site.
//  CONTENT.md mirrors every string here in a readable format for proofreading.
// =============================================================================

// -----------------------------------------------------------------------------
//  IMAGES
//  Placeholders ship as SVGs so the site renders immediately.
//  To use the real photos:  npm run download-images
//  then point each entry below at the downloaded file
//  (e.g. "/images/hero-wooden-wall.jpg"). See README.md → "Images".
// -----------------------------------------------------------------------------
export const IMAGES = {
  logo: "/images/nicos-logo-black-surround.png",
  heroBg: "/images/hero.jpg",
  ogImage: "/images/hero.jpg",
  specialtyJamaican: "/images/jamaican-soul.jpg",
  specialtyTexas: "/images/specialty-texas.svg",
  specialtyPeriPeri: "/images/specialty-periperi.svg",
  dishes: [
    "/images/dish-01.svg",
    "/images/dish-02.svg",
    "/images/dish-03.svg",
    "/images/dish-04.svg",
    "/images/dish-05.svg",
    "/images/dish-06.svg",
    "/images/dish-07.svg",
    "/images/dish-08.svg",
    "/images/dish-09.svg",
    "/images/dish-10.svg",
    "/images/dish-11.svg",
    "/images/dish-12.svg",
  ],
};

// -----------------------------------------------------------------------------
//  BUSINESS DETAILS
// -----------------------------------------------------------------------------
export const site = {
  name: "Nico's Smokehouse",
  alternateName: "Nicos Smokehouse",
  url: "https://nicossmokehouse.com",
  telephone: "+62-878-6796-6662",
  priceRange: "$$",
  tagline: "Authentic BBQ & Caribbean Cuisine in Bali",
  openingHours: "Open daily 12pm – 12am",
  address: {
    streetAddress: "Jl. Raya Canggu, Tibubeneng",
    locality: "Canggu",
    region: "Bali",
    postalCode: "80361",
    country: "ID",
  },
  geo: { latitude: -8.6478, longitude: 115.1385 },
};

// Tracking IDs carried over from the live site. Set to "" to disable.
export const analytics = {
  googleAdsId: "AW-18032898093",
  bingSiteVerification: "2D8ACEF82553DE4E26AC79CEF204667B",
};

// -----------------------------------------------------------------------------
//  OUTBOUND LINKS
// -----------------------------------------------------------------------------
export const links = {
  instagram: "https://instagram.com/nicossmokehouse",
  gofood:
    "https://gofood.co.id/bali/restaurant/nico-s-smokehouse-tibubeneng-29af8618-1b2e-4d45-8522-e5c673344d15",
  whatsappBooking: "https://wa.me/6287867966662",
  whatsappCatering:
    "https://wa.me/6287867966662?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20catering",
  googleMapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Jl.+Raya+Canggu%2C+Tibubeneng%2C+Kec.+Kuta+Utara%2C+Kabupaten+Badung%2C+Bali+80361",
};

// -----------------------------------------------------------------------------
//  SEO METADATA
// -----------------------------------------------------------------------------
export const seo = {
  title:
    "Nico's Smokehouse | BBQ & Caribbean Restaurant in Canggu, Bali | Texas BBQ, Jerk Chicken & Peri Peri",
  description:
    "Nico's Smokehouse is an authentic BBQ restaurant in Canggu, Bali mixing Texas-style brisket, Caribbean soul food and peri-peri chicken. Enjoy slow-smoked brisket, jerk chicken, pork ribs and catering for private events.",
  keywords: [
    "BBQ Canggu",
    "smokehouse Canggu",
    "Texas BBQ Bali",
    "best BBQ Canggu",
    "beef brisket Bali",
    "jerk chicken Canggu",
    "peri-peri chicken Bali",
    "BBQ catering Bali",
    "Caribbean restaurant Bali",
    "smoked meat Canggu",
  ],
  ogTitle: "Nico's Smokehouse - BBQ & Caribbean in Bali",
  ogDescription:
    "Authentic Texas BBQ, Jamaican flavors, and Peri Peri Chicken in the heart of Bali. Slow-smoked perfection meets Caribbean soul.",
  siteName: "Nico's Smokehouse - BBQ & Caribbean in Bali",
  twitterHandle: "@nicossmokehouse",
};

// -----------------------------------------------------------------------------
//  NAVIGATION
// -----------------------------------------------------------------------------
export const nav = {
  links: [] as { label: string; href: string }[],
  cta: { label: "Book a Table", href: links.whatsappBooking },
};

// -----------------------------------------------------------------------------
//  HERO
// -----------------------------------------------------------------------------
export const hero = {
  logoAlt: "Nico's Smokehouse Bali logo",
  headline: "SMOKE. FIRE. SOUL.",
  subheadline:
    "Where Texas BBQ meets Caribbean Soul & Peri Peri Fire in the heart of Bali",
  location: "Canggu, Bali",
  directionsLabel: "Get Directions →",
  bgAlt:
    "Nico's Smokehouse BBQ restaurant rustic wooden interior, Canggu, Bali",
  ctas: [
    {
      label: "Build Your Order",
      href: links.gofood,
      icon: "flame" as const,
      variant: "green" as const,
      external: true,
    },
    {
      label: "View Our Menu",
      href: "#menu",
      icon: "utensils" as const,
      variant: "amber" as const,
      external: false,
    },
    {
      label: "@nicossmokehouse",
      href: links.instagram,
      icon: "instagram" as const,
      variant: "instagram" as const,
      external: true,
    },
    {
      label: "Order Now via GoFood",
      href: links.gofood,
      icon: null,
      variant: "green-bright" as const,
      external: true,
    },
  ],
};

// -----------------------------------------------------------------------------
//  SPECIALTIES — "Three Fires, One Kitchen"
// -----------------------------------------------------------------------------
export const specialties = {
  eyebrow: "OUR SPECIALTIES",
  heading: "THREE FIRES, ONE KITCHEN",
  cards: [
    {
      title: "Jamaican Soul",
      subtitle: "Caribbean Flavors in Bali",
      description:
        "Jerk Chicken, Curry Goat, Oxtail — authentic island recipes slow-cooked to perfection",
      image: IMAGES.specialtyJamaican,
      imageAlt:
        "Jamaican jerk chicken and Caribbean dishes at Nico's Smokehouse Canggu",
    },
    {
      title: "Texas BBQ",
      subtitle: "Slow-Smoked in Bali",
      description:
        "Brisket, ribs, and sausage smoked low and slow in authentic Texan dry rub tradition",
      image: IMAGES.specialtyTexas,
      imageAlt:
        "Texas-style smoked brisket and ribs at Nico's Smokehouse Canggu",
    },
    {
      title: "Peri Peri Fire",
      subtitle: "Portuguese Heat in Bali",
      description:
        "Flame-grilled chicken with our signature peri peri marinades — from mild to extra hot",
      image: IMAGES.specialtyPeriPeri,
      imageAlt:
        "Flame-grilled peri peri chicken at Nico's Smokehouse Canggu",
    },
  ],
};

// -----------------------------------------------------------------------------
//  MENU PREVIEW — "From The Pit"
// -----------------------------------------------------------------------------
export const menuPreview = {
  eyebrow: "FROM THE PIT",
  heading: "FRESH OFF THE SMOKE & THE FIRE",
  cta: { label: "View Full Menu", href: links.gofood },
  dishes: IMAGES.dishes.map((src, i) => ({
    src,
    alt: `Freshly smoked BBQ and Caribbean dish ${i + 1} at Nico's Smokehouse, Canggu Bali`,
  })),
};

// -----------------------------------------------------------------------------
//  FAQ  (verbatim from the live site — 6 questions)
// -----------------------------------------------------------------------------
export const faq = {
  eyebrow: "FREQUENTLY ASKED",
  heading: "QUESTIONS",
  items: [
    {
      question: "Is Nico's Smokehouse air conditioned?",
      answer:
        "Yes! Nico's Smokehouse is fully air conditioned, making it the perfect escape from Bali's tropical heat. Our modern, climate-controlled restaurant keeps you cool and comfortable while you enjoy authentic BBQ, Caribbean food, and Peri Peri chicken.",
    },
    {
      question: "What are the best air conditioned restaurants in Canggu?",
      answer:
        "Nico's Smokehouse is one of the best air conditioned restaurants in Canggu. Unlike many open-air Bali restaurants, we offer a cool, comfortable indoor dining experience with 11 tables in a modern setting. Perfect for hot days when you want great food without the heat.",
    },
    {
      question: "Where can I find indoor dining in Canggu with AC?",
      answer:
        "Nico's Smokehouse offers fully air conditioned indoor dining on Jl. Raya Canggu. We're an intimate 11-table restaurant with a modern, cool atmosphere — ideal for families, couples, or groups looking to escape the Bali humidity while enjoying Texas BBQ, Jamaican cuisine, or Peri Peri chicken.",
    },
    {
      question: "What makes Nico's the best BBQ restaurant in Canggu?",
      answer:
        "Nico's Smokehouse is the only restaurant in Bali combining three fire-cooked cuisines: Texas-style smoked BBQ (with US Prime brisket smoked 14+ hours), authentic Caribbean/Jamaican dishes (jerk chicken, curry goat, oxtail), and Peri Peri chicken with 16 sauce levels. Plus we're air conditioned!",
    },
    {
      question: "Do you take reservations?",
      answer:
        "Yes, we highly recommend booking a table! We're a small restaurant with only 11 tables and our smoked meats are limited each day. Reserve via our website or WhatsApp to avoid disappointment. Book between 12pm-5pm for 10% off your bill!",
    },
    {
      question: "Is Nico's Smokehouse family friendly?",
      answer:
        "Absolutely! Our air conditioned restaurant is perfect for families with kids who need a break from the Bali heat. We have sharing platters great for families, and our menu has something for everyone from mild Peri Peri to classic BBQ sides.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  FOOTER
//  Blog/catering hrefs point at pages not built in this homepage-only clone.
//  Build those routes later, or repoint the links here.
// -----------------------------------------------------------------------------
export const footer = {
  logoAlt: "Nico's Smokehouse logo",
  tagline: "Authentic BBQ & Caribbean Cuisine in Bali",
  instagram: { label: "@nicossmokehouse", href: links.instagram },
  actions: [
    { label: "Build Your Order", href: links.gofood, icon: "flame" as const, variant: "green" as const },
    {
      label: "Catering Services",
      href: links.whatsappCatering,
      icon: "utensils" as const,
      variant: "fire" as const,
    },
    {
      label: "Reserve a Table",
      href: links.whatsappBooking,
      icon: "pin" as const,
      variant: "wood" as const,
    },
  ],
  blogs: {
    label: "Blogs",
    links: [
      { label: "All Blog Posts", href: "/blog" },
      { label: "Caribbean Food", href: "/caribbean-food-canggu-bali" },
      { label: "Peri Peri Chicken", href: "/peri-peri-chicken-canggu-bali" },
      { label: "Texas BBQ", href: "/texas-bbq-canggu-bali" },
    ],
  },
  catering: {
    label: "Catering",
    areas: [
      { label: "Canggu", href: "/catering-canggu" },
      { label: "Seminyak", href: "/catering-seminyak" },
      { label: "Berawa", href: "/catering-berawa" },
      { label: "Pererenan", href: "/catering-pererenan" },
      { label: "Umalas", href: "/catering-umalas" },
      { label: "Legian", href: "/catering-legian" },
      { label: "Sanur", href: "/catering-sanur" },
      { label: "Nusa Dua", href: "/catering-nusa-dua" },
      { label: "Uluwatu", href: "/catering-uluwatu" },
    ],
    links: [
      { label: "Caribbean Catering", href: "/caribbean-catering-bali" },
      { label: "Peri Peri Catering", href: "/peri-peri-catering-bali" },
      { label: "Texas BBQ Catering", href: "/texas-bbq-catering-bali" },
      { label: "All Catering", href: "/catering-bali" },
    ],
  },
  copyright: "Nico's Smokehouse. All rights reserved.",
  credit: "Website & Marketing by Metatap Pty Ltd",
  finalCta: { label: "Book a Table", href: links.whatsappBooking },
};
