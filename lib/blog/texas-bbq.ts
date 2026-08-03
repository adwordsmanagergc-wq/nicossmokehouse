import { site, links, IMAGES } from "@/lib/content";

/** Copy for the "Where to Find Texas BBQ in Canggu, Bali" blog post. */
export const texasBbqPost = {
  slug: "texas-bbq-canggu-bali",
  title: "Where to Find Texas BBQ in Canggu, Bali",
  eyebrow: "Blog · Texas BBQ",
  metaDescription:
    "Nico's Smokehouse in Canggu serves authentic Texas BBQ — 12-14 hour smoked brisket, US Prime pork ribs, beef ribs and smoked sausage. Low and slow, the way it should be.",
  subtitle:
    "Craving slow-smoked brisket, tender ribs, or juicy smoked sausage in Bali? Nico's Smokehouse brings authentic Texas BBQ to Canggu.",
  meta: `${site.name} · ${site.address.locality}, ${site.address.region} · Open 12pm – 12am Daily`,
  hero: {
    image: IMAGES.heroBg,
    alt: "Slow-smoked Texas brisket at Nico's Smokehouse, Canggu Bali",
  },
  intro: {
    heading: "Low & Slow — The Texas Way",
    paragraphs: [
      "Texas BBQ is a religion, and brisket is its holy grail. Born in the German and Czech meat markets of Central Texas, this style of barbecue strips everything back to the essentials: quality beef, salt, pepper, wood smoke, and time. Lots of time.",
      "At Nico's Smokehouse, we honor these traditions. Our brisket starts smoking before sunrise, spending 12-14 hours absorbing post oak smoke until the fat renders and the meat becomes butter-tender. Our ribs get the same treatment — rubbed, smoked, and served with that perfect pull-off-the-bone texture.",
      "Whether you're a Texan expat missing home, an American BBQ enthusiast, or someone discovering smoked meat for the first time — we invite you to experience the patience and craft of real Texas barbecue, right here in Canggu.",
    ],
    image: { src: IMAGES.specialtyTexas, alt: "Slow-smoked ribs with peppery bark at Nico's Smokehouse" },
  },
  aside: {
    heading: "The Art of the Smoke Ring",
    paragraph:
      "That pink ring just beneath the bark? It's not raw meat — it's a chemical reaction between smoke and myoglobin that marks properly smoked BBQ. It takes hours of exposure to wood smoke to develop. No smoke ring, no respect.",
  },
  dishes: {
    eyebrow: "ON THE MENU",
    heading: "BBQ Dishes at Nico's Smokehouse",
    items: [
      {
        title: "Beef Brisket",
        description:
          "The king of Texas BBQ — a massive cut from the chest of the cow, smoked low and slow for 12-16 hours until the fat renders and the meat becomes impossibly tender. A proper brisket has a dark, peppery bark on the outside and a pink smoke ring just beneath. Sliced thick and served with the melted fat glistening.",
      },
      {
        title: "Beef Ribs",
        description:
          "Massive short ribs and dino ribs — the most impressive cuts on any BBQ menu. These bone-in beef ribs are smoked until the meat is fall-off-the-bone tender with a thick, peppery bark. Each rib is a meal in itself, showcasing the best of Texas beef tradition.",
      },
      {
        title: "Pork Ribs",
        description:
          "US Prime baby back ribs rubbed with a blend of spices and smoked until the meat pulls cleanly from the bone. The exterior develops a caramelized bark while the inside stays juicy and tender. Glazed with a tangy-sweet BBQ sauce or served dry with sauce on the side.",
      },
      {
        title: "Smoked Brisket Sando",
        description:
          "Slow smoked Wagyu beef layered with Nico's signature BBQ sauce. Topped with crisp slaw and our house pickled onions for the perfect hit of crunch and zing. All that brisket goodness between two slices of bread.",
      },
      {
        title: "Smoked Pork Rib Sando",
        description:
          "Smoked pork ribs with orange and soy BBQ sauce, crisp slaw, kimchi mayo & pickled onions. Sweet, smoky, and tangy — a fusion twist on classic American BBQ.",
      },
      {
        title: "Smoked Sausage",
        description:
          "Texas hot links — coarsely ground beef and pork sausages seasoned with black pepper, cayenne, and garlic, then smoked until the casing snaps when you bite through. A staple of any Texas BBQ plate, offering a spicy, fatty contrast to leaner meats.",
      },
      {
        title: "Mac and Cheese",
        description:
          "Creamy, indulgent macaroni baked with multiple cheeses until the top forms a golden crust. The ultimate BBQ side — rich and comforting, perfect for balancing the smoky, peppery meat. Southern BBQ joints are judged as much by their mac as their meat.",
      },
      {
        title: "Rosemary Roasts",
        description:
          "House made crispy roasted potatoes in beef tallow and tossed with fresh rosemary salt. The perfect side to soak up all those smoky meat juices.",
      },
      {
        title: "Sweet Potato",
        description:
          "Roasted sweet potato with a caramelized, tender finish. A slightly sweeter side that pairs perfectly with the savory, smoky meats.",
      },
      {
        title: "Coleslaw",
        description:
          "A cooling, crunchy counterpoint to rich smoked meats. Our creamy slaw balances the heaviness of brisket and ribs, while the acidity cuts through the fat. Essential for BBQ sandos.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Where can I find Texas BBQ in Canggu, Bali?",
        answer:
          "Nico's Smokehouse in Canggu serves authentic Texas-style BBQ including slow-smoked brisket, beef ribs, pork ribs, and smoked sausage. Located on Jalan Raya Canggu in Tibubeneng, it's the best spot in Bali for real American BBQ alongside Caribbean and Peri Peri cuisine.",
      },
      {
        question: "What is Texas BBQ and what makes it different?",
        answer:
          "Texas BBQ is defined by beef (especially brisket), simple salt-and-pepper rubs, and post oak wood smoke. Unlike other American BBQ styles that rely on sauces, Texas BBQ lets the smoke and meat speak for themselves. The focus is on low-and-slow cooking — often 12+ hours — to break down tough cuts into tender, flavorful meat.",
      },
      {
        question: "Is there an American BBQ restaurant in Bali?",
        answer:
          "Yes! Nico's Smokehouse in Canggu offers authentic American BBQ with Texas-style smoked brisket, beef ribs, pork ribs, and classic sides like mac and cheese and coleslaw. It's a unique find in Bali, combining American smokehouse traditions with Caribbean and Portuguese flavors.",
      },
      {
        question: "How long does it take to smoke brisket?",
        answer:
          "A proper Texas brisket takes 12-16 hours of low-and-slow smoking at around 225-250°F (107-121°C). The long cook time breaks down the collagen in this tough cut, transforming it into incredibly tender meat. At Nico's Smokehouse, we start our briskets before dawn so they're ready for dinner service.",
      },
      {
        question: "What are beef ribs and why are they special?",
        answer:
          "Beef ribs — including short ribs and massive dino ribs — are some of the most impressive cuts in BBQ. They're smoked low and slow until the meat becomes fall-off-the-bone tender with a thick, peppery bark. Each rib is a meal in itself, and they're a true test of any pitmaster's skill.",
      },
      {
        question: "What sides go best with BBQ?",
        answer:
          "Classic BBQ sides include mac and cheese (creamy and cheesy), coleslaw (cool and crunchy), rosemary roasts (crispy potatoes in beef tallow), sweet potato, and pickles (acidic to cut the fat). At Nico's Smokehouse, we offer all the traditional sides plus Caribbean options like rice and peas.",
      },
      {
        question: "Can I get BBQ delivered in Canggu?",
        answer:
          "Yes! Nico's Smokehouse offers delivery through GoFood. Order smoked brisket, beef ribs, pork ribs, and all the sides delivered right to your villa or hotel in the Canggu area.",
      },
      {
        question: "What's the difference between beef ribs and pork ribs?",
        answer:
          "Beef ribs (short ribs, dino ribs) are larger, meatier, and have an intense beefy flavor with rich fat marbling. Pork ribs (baby back ribs) are smaller, more tender, and have a sweeter, milder flavor that pairs well with BBQ sauces. Both take hours to smoke properly. Try both at Nico's Smokehouse to find your favorite.",
      },
    ],
  },
  closing: {
    heading: "Visit Nico's Smokehouse",
    lines: [
      { label: "Location", value: "Jalan Raya Canggu, Tibubeneng, Canggu, Bali" },
      { label: "Hours", value: "12pm – 12am Daily" },
      { label: "Cuisines", value: "Texas BBQ, Caribbean, Jamaican, Peri Peri" },
    ],
    ctas: [
      { label: "Book a Table", href: links.whatsappBooking, variant: "green" as const },
      { label: "Order on GoFood", href: links.gofood, variant: "fire" as const },
      { label: "Back to Home", href: "/", variant: "wood" as const },
    ],
  },
  footerNote:
    "© Nico's Smokehouse. Where Texas BBQ meets Caribbean Soul & Peri Peri Fire in the heart of Bali.",
};
