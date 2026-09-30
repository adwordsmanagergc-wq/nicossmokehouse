// =============================================================================
//  MENU — transcribed from /public/nicos-menu.pdf. Prices are in thousands of
//  IDR ("90" = 90K). Edit here and the homepage menu + order tray update.
// =============================================================================

export type MenuOption = { label: string; price: number };

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  /** Fixed price (K). Omit when the item uses `options` or `per100g`. */
  price?: number;
  /** Size / portion choices, each separately orderable. */
  options?: MenuOption[];
  /** Price per 100g (K) — sold by weight. */
  per100g?: number;
  /** A choice the guest must make, e.g. sauce or filling. */
  choice?: { label: string; values: string[] };
  /** Optional paid extras. */
  addOns?: MenuOption[];
  /** Short badge, e.g. "Pre-order 24h". */
  tag?: string;
  /** Not orderable online (e.g. dessert of the day). */
  askUs?: boolean;
};

export type MenuGroup = { title?: string; note?: string; items: MenuItem[] };

export type MenuCategory = {
  id: string;
  name: string;
  kicker: string;
  note?: string;
  groups: MenuGroup[];
};

export const PERI_FLAVOURS = [
  "Peri Peri Mild",
  "Peri Peri Hot",
  "Piri Piri Extra Hot",
  "Peri Peri Lemon + Herb",
  "Peri Peri Mango + Herb",
  "Peri Peri Mango + Lime",
];

export const HOUSE_SAUCES = [
  "Perinaise",
  "Aioli",
  "Ranch",
  "Lemon and Herb",
  "Honey Mustard",
  "Nico's BBQ Sauce",
  "Jerk Sauce",
  "Kimchi",
  "Orange and Soy",
  "Mayo",
];

export const EXTRA_SAUCE_PRICE = 10;
export const TAX_NOTE =
  "An additional 11% government tax and 3% service charge will be added to the total bill.";
/** 11% tax + 3% service, used for the order tray's estimate only. */
export const TAX_MULTIPLIER = 1.14;

const ADD_ONS: MenuOption[] = [
  { label: "Jerk/Peri Chicken", price: 30 },
  { label: "Bacon", price: 30 },
  { label: "Brisket", price: 45 },
];

export const MENU: MenuCategory[] = [
  {
    id: "pit",
    name: "From The Pit",
    kicker: "Smoked low & slow",
    note: "Based on weight and availability. Make your own platter with our sides — comes with a choice of 1 sauce. Extra sauces 10K.",
    groups: [
      {
        items: [
          {
            id: "brisket",
            name: "Brisket",
            description: "Our signature. Smoked 14+ hours until the bark is black and the fat melts. Sold by weight.",
            per100g: 120,
          },
          {
            id: "sausage",
            name: "Sausage",
            description: "Ask about today's flavour.",
            options: [{ label: "1 pc", price: 50 }],
          },
          {
            id: "peri-chicken",
            name: "Peri Peri Chicken",
            description: "Flame-grilled. Choose 1 peri peri flavour.",
            options: [
              { label: "Breast", price: 80 },
              { label: "Half", price: 90 },
              { label: "Full", price: 160 },
            ],
            choice: { label: "Flavour", values: PERI_FLAVOURS },
          },
          {
            id: "smoked-chicken",
            name: "Smoked Chicken",
            description: "Smoked, grilled chicken.",
            options: [{ label: "Breast", price: 75 }],
          },
          {
            id: "jerk-chicken",
            name: "Jerk Chicken",
            description: "Island-spiced, charred over fire.",
            options: [
              { label: "Breast", price: 80 },
              { label: "Half", price: 90 },
              { label: "Full", price: 160 },
            ],
          },
        ],
      },
      {
        title: "Beef Ribs",
        items: [
          {
            id: "short-rib",
            name: "Short Rib",
            description: "Beef ribs smoked in a Texan dry rub.",
            options: [
              { label: "½ · 3 ribs", price: 250 },
              { label: "Full · 6 ribs", price: 450 },
            ],
          },
          {
            id: "dino-ribs",
            name: "Dino Ribs",
            description: "The full rack. Must be pre-ordered 24 hours ahead.",
            options: [{ label: "Full rack", price: 850 }],
            tag: "Pre-order 24h",
          },
        ],
      },
      {
        title: "Pork Ribs",
        note: "Smoked in a Texan dry rub. Served with your choice of orange & soy or Nico's BBQ sauce.",
        items: [
          {
            id: "ribs-us-prime",
            name: "US Prime",
            description: "Full rack ≈ 2.2 kg.",
            options: [
              { label: "¼", price: 200 },
              { label: "½", price: 330 },
              { label: "Full", price: 600 },
            ],
            choice: { label: "Sauce", values: ["Orange & Soy", "Nico's BBQ"] },
          },
          {
            id: "ribs-baby-back",
            name: "Baby Back",
            description: "Full rack ≈ 1.4 kg.",
            options: [
              { label: "¼", price: 150 },
              { label: "½", price: 250 },
              { label: "Full", price: 450 },
            ],
            choice: { label: "Sauce", values: ["Orange & Soy", "Nico's BBQ"] },
          },
        ],
      },
    ],
  },
  {
    id: "grill",
    name: "From The Grill",
    kicker: "Steaks over fire",
    groups: [
      {
        items: [
          {
            id: "picanha",
            name: "Picanha",
            description: "200g. The Brazilian cap cut, grilled over flame.",
            price: 160,
          },
          {
            id: "wagyu-striploin",
            name: "Australian Wagyu Striploin",
            description: "MB7 marbling, 200g.",
            price: 500,
            tag: "MB7",
          },
        ],
      },
    ],
  },
  {
    id: "feasts",
    name: "Nico's Feasts",
    kicker: "Sandos & burgers",
    note: "All sandos and burgers come with coleslaw & fries.",
    groups: [
      {
        items: [
          {
            id: "brisket-sando",
            name: "Smoked Brisket Sando",
            description:
              "Slow smoked Wagyu beef layered with Nico's signature BBQ sauce. Topped with crisp slaw and our house pickled onions for the perfect hit of crunch and zing.",
            price: 195,
          },
          {
            id: "pork-rib-sando",
            name: "Smoked Pork Rib Sando",
            description:
              "Smoked pork ribs, orange and soy BBQ sauce, crisp slaw, kimchi mayo & pickled onions. Sweet, smoky, and tangy.",
            price: 195,
          },
          {
            id: "philly-sando",
            name: "Philly Cheesesteak Sando",
            description:
              "Tender steak, onion & capsicum relish, melted mozzarella & cheddar. Savoury, melty, and packed with flavour.",
            price: 195,
          },
          {
            id: "cheese-burger",
            name: "Cheese Burger",
            description:
              "150g premium beef patty, Nico's BBQ sauce, lettuce, tomato, aioli-mayo & pickled onions. Juicy, smoky, and seriously satisfying.",
            price: 175,
          },
          {
            id: "peri-burger",
            name: "Peri Peri Chicken Burger",
            description:
              "150g flame grilled piri piri chicken, crisp lettuce, tomato, pickled onions & creamy perinaise. Bold, fresh crunch and big flavour.",
            price: 175,
          },
          {
            id: "jerk-burger",
            name: "Jerk Chicken Burger",
            description:
              "150g BBQ jerk chicken, tomato, lettuce, and pickled onions. Juicy and full of island flavours.",
            price: 175,
          },
          {
            id: "garden-salad-feast",
            name: "Garden Salad",
            description:
              "Fresh mixed greens with radish, julienne carrots, onions and cherry tomatoes. Served with house made lime dressing.",
            price: 65,
            addOns: ADD_ONS,
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    name: "Sides & Such",
    kicker: "Build your platter",
    note: "Single-serve sides to build your platter — sides are individual, not for sharing.",
    groups: [
      {
        items: [
          { id: "mac-cheese", name: "Mac and Cheese", description: "Creamy baked macaroni in a rich, cheesy sauce.", price: 55 },
          { id: "truffle-mash", name: "Truffle Mash", description: "Creamy mashed potatoes infused with aromatic truffle oil.", price: 55 },
          { id: "fries", name: "French Fries / Peri Peri", description: "Crispy golden fries, lightly salted — or dusted in peri peri.", price: 40 },
          {
            id: "loaded-fries",
            name: "Loaded Fries / Peri Loaded",
            description: "Crispy fries topped with melted cheese, jalapeños, and signature sauces.",
            price: 65,
            addOns: ADD_ONS,
          },
          { id: "rosemary-roasts", name: "Rosemary Roasts", description: "House made crispy potatoes roasted in beef tallow, tossed with fresh rosemary salt.", price: 45 },
          { id: "sweet-potato", name: "Sweet Potato", description: "Roasted sweet potato with a caramelised, tender finish.", price: 25 },
          { id: "mozzarella-sticks", name: "Mozzarella Sticks", description: "House made, crispy breaded mozzarella with a gooey finish (2 pcs).", price: 55 },
          { id: "garden-salad", name: "Garden Salad", description: "Mixed greens, radish, julienne carrots and cherry tomatoes with house lime dressing.", price: 35 },
        ],
      },
    ],
  },
  {
    id: "jamaican",
    name: "Jamaican Sides",
    kicker: "Island soul",
    note: "Curries are a bigger portion — curry only, no meal. All sides are sold separately.",
    groups: [
      {
        title: "Curries & Stews",
        items: [
          { id: "curry-goat", name: "Curry Goat", description: "Slow braised goat, bursting with bold flavours and island soul.", price: 140 },
          { id: "oxtail", name: "Oxtail", description: "Hearty oxtail stewed in bold curry with herbs, mild heat and Caribbean soul.", price: 140 },
          { id: "stew-chicken", name: "Stew Chicken", description: "Marinated chicken simmered in a flavourful, slightly sweet and spiced brown sauce.", price: 130 },
        ],
      },
      {
        title: "On The Side",
        items: [
          { id: "rice-peas", name: "Rice and Peas", description: "Fragrant rice cooked with coconut milk, kidney beans, thyme and scallions.", price: 55 },
          {
            id: "patty",
            name: "Patty",
            description: "Flaky pastry filled with spiced minced beef or seasoned fish and Caribbean herbs.",
            price: 40,
            choice: { label: "Filling", values: ["Beef", "Fish"] },
          },
          { id: "coleslaw", name: "Coleslaw", description: "Creamy cabbage and carrot slaw with a tangy island twist.", price: 35 },
          { id: "steamed-veg", name: "Steamed Veg", description: "Cabbage, carrots and bell peppers lightly steamed with island herbs and spices.", price: 35 },
          { id: "festivals", name: "Festivals", description: "Sweet, fried cornmeal dumplings with a soft, fluffy centre.", price: 15 },
          { id: "dumplings", name: "Dumplings", description: "Golden fried dough — crisp outside, soft and chewy centre.", price: 15 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Sweets",
    kicker: "Cold & sweet",
    groups: [
      {
        title: "Drinks",
        items: [
          {
            id: "guinness-punch",
            name: "Guinness Punch",
            description: "Spiced, creamy Guinness milk drink. Smooth, sweet, and irresistibly bold with a Caribbean kick.",
            price: 90,
            tag: "House special",
          },
          { id: "bintang", name: "Bintang", description: "Ice cold.", price: 35 },
        ],
      },
      {
        title: "Soft Drinks",
        items: [
          { id: "coke", name: "Coke", price: 25 },
          { id: "coke-zero", name: "Coke Zero", price: 25 },
          { id: "sprite", name: "Sprite", price: 25 },
          { id: "fanta", name: "Strawberry Fanta", price: 25 },
          { id: "soda", name: "Soda Water", price: 25 },
          { id: "water", name: "Bottled Water", price: 25 },
        ],
      },
      {
        title: "Sweet Treats",
        items: [
          {
            id: "dessert",
            name: "Chef's Dessert of the Day",
            description: "Ask us for today's selection!",
            askUs: true,
          },
        ],
      },
    ],
  },
];

export function formatK(value: number): string {
  return `${Math.round(value).toLocaleString("en-US")}K`;
}
