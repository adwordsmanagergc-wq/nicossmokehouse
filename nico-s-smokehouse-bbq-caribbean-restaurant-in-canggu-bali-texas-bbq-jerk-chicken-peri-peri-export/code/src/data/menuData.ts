// Menu data for Nico's Smokehouse interactive ordering

export interface Macros {
  cal: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface MenuOption {
  label: string;
  price: number;
  macros?: Macros;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number; // Fixed price items
  options?: MenuOption[]; // Items with size/portion choices
  pricePerGram?: number; // For brisket (120K per 100g)
  gramOptions?: number[]; // Available gram amounts
  requiresSauce?: boolean; // Peri peri chicken needs sauce selection
  addOns?: { name: string; price: number }[]; // Optional add-ons
  requiresAddOn?: boolean; // Must select at least one add-on before adding
  macros?: Macros; // Nutritional info (per 100g for weight items)
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export const SAUCES = [
  "Peri Peri Mild",
  "Peri Peri Hot", 
  "Peri Peri Extra Hot",
  "Peri Peri Lemon + Herb",
  "Peri Peri Mango + Herb",
  "Peri Peri Mango + Lime",
  "Perinaise",
  "Aioli",
  "Ranch",
  "Lemon and Herb",
  "Honey Mustard",
  "Nico's BBQ Sauce",
  "Jerk Sauce",
  "Kimchi",
  "Orange and Soy",
  "Mayo"
];

export const EXTRA_SAUCE_PRICE = 10; // 10K per extra sauce beyond the 2 free

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "from-the-pit",
    name: "From The Pit",
    description: "Based on weight and availability. Dino ribs must be pre-ordered 24hrs ahead.",
    items: [
      {
        id: "brisket",
        name: "Brisket",
        pricePerGram: 1.2, // 1.2K per gram (120K per 100g)
        gramOptions: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000],
        macros: { cal: 250, protein: 26, carbs: 0, fat: 16 } // per 100g
      },
      {
        id: "sausage",
        name: "Sausage",
        description: "Ask about today's flavour",
        price: 50,
        macros: { cal: 280, protein: 14, carbs: 2, fat: 24 }
      },
      {
        id: "peri-peri-chicken",
        name: "Peri Peri Chicken",
        description: "Please choose 1 peri peri flavor from list below",
        requiresSauce: true,
        options: [
          { label: "Breast", price: 80, macros: { cal: 195, protein: 35, carbs: 2, fat: 5 } },
          { label: "Half", price: 90, macros: { cal: 380, protein: 52, carbs: 3, fat: 18 } },
          { label: "Full", price: 160, macros: { cal: 760, protein: 104, carbs: 6, fat: 36 } }
        ]
      },
      {
        id: "smoked-chicken",
        name: "Smoked Chicken",
        description: "Smoked, grilled chicken",
        options: [
          { label: "Breast", price: 75, macros: { cal: 185, protein: 34, carbs: 0, fat: 4 } }
        ]
      },
      {
        id: "jerk-chicken",
        name: "Jerk Chicken",
        options: [
          { label: "Breast", price: 80, macros: { cal: 210, protein: 34, carbs: 4, fat: 6 } },
          { label: "Half", price: 90, macros: { cal: 420, protein: 54, carbs: 8, fat: 20 } },
          { label: "Full", price: 160, macros: { cal: 840, protein: 108, carbs: 16, fat: 40 } }
        ]
      },
      {
        id: "short-rib",
        name: "Short Rib",
        description: "Beef ribs smoked in a Texan dry rub",
        options: [
          { label: "1/2 (3 ribs)", price: 250, macros: { cal: 680, protein: 45, carbs: 0, fat: 54 } },
          { label: "Full (6 ribs)", price: 450, macros: { cal: 1360, protein: 90, carbs: 0, fat: 108 } }
        ]
      },
      {
        id: "dino-ribs",
        name: "Dino Ribs",
        description: "Must be pre-ordered 24hrs ahead",
        options: [
          { label: "Full Rack Dino", price: 850, macros: { cal: 2200, protein: 140, carbs: 0, fat: 180 } }
        ]
      },
      {
        id: "pork-ribs-us-prime",
        name: "Pork Ribs - US Prime",
        description: "Served with your choice of orange & soy or Nico's BBQ sauce. Full rack ≈ 2.2kg",
        options: [
          { label: "1/4 Rack", price: 200, macros: { cal: 450, protein: 28, carbs: 0, fat: 36 } },
          { label: "1/2 Rack", price: 330, macros: { cal: 900, protein: 56, carbs: 0, fat: 72 } },
          { label: "Full Rack", price: 600, macros: { cal: 1800, protein: 112, carbs: 0, fat: 144 } }
        ]
      },
      {
        id: "pork-ribs-baby-back",
        name: "Pork Ribs - Baby Back",
        description: "Served with your choice of orange & soy or Nico's BBQ sauce. Full rack ≈ 1.4kg",
        options: [
          { label: "1/4 Rack", price: 150, macros: { cal: 380, protein: 24, carbs: 0, fat: 30 } },
          { label: "1/2 Rack", price: 250, macros: { cal: 760, protein: 48, carbs: 0, fat: 60 } },
          { label: "Full Rack", price: 450, macros: { cal: 1520, protein: 96, carbs: 0, fat: 120 } }
        ]
      }
    ]
  },
  {
    id: "sides",
    name: "Sides & Such",
    description: "Single serve sides to build your platter. Sides are individual - not for sharing. Curries are a bigger portion - no meal, only curry. All sides are sold separately.",
    items: [
      { id: "mac-cheese", name: "Mac and Cheese", description: "Creamy baked macaroni in a rich, cheesey sauce", price: 55, macros: { cal: 380, protein: 14, carbs: 42, fat: 18 } },
      { id: "truffle-mash", name: "Truffle Mash", description: "Creamy mashed potatoes infused with aromatic truffle oil", price: 55, macros: { cal: 280, protein: 5, carbs: 32, fat: 15 } },
      { id: "french-fries", name: "French Fries / Peri Peri", description: "Crispy golden fries, lightly salted", price: 40, macros: { cal: 320, protein: 4, carbs: 42, fat: 16 } },
      { 
        id: "loaded-fries", 
        name: "Loaded Fries / Peri Loaded", 
        description: "Crispy fries topped with melted cheese, jalapeños, and signature sauces",
        price: 65,
        macros: { cal: 520, protein: 12, carbs: 48, fat: 32 },
        requiresAddOn: true,
        addOns: [
          { name: "No Extra", price: 0 },
          { name: "Add Jerk/Peri Chicken", price: 30 },
          { name: "Add Bacon", price: 30 },
          { name: "Add Brisket", price: 45 }
        ]
      },
      { id: "rosemary-roasts", name: "Rosemary Roasts", description: "House made crispy roasted potatoes in beef tallow and tossed with fresh rosemary salt", price: 45, macros: { cal: 290, protein: 4, carbs: 36, fat: 15 } },
      { id: "sweet-potato", name: "Sweet Potato", description: "Roasted sweet potato with a caramelized, tender finish", price: 25, macros: { cal: 180, protein: 3, carbs: 42, fat: 1 } },
      { id: "mozzarella-sticks", name: "Mozzarella Sticks", description: "House made crispy, breaded mozzarella sticks with a gooey cheesy finish (2pcs)", price: 55, macros: { cal: 280, protein: 12, carbs: 22, fat: 18 } },
      { id: "garden-salad", name: "Garden Salad", description: "Fresh mixed greens with raddish, julienne carrots and cherry tomatoes. Simple and crisp. Served with house made lime dressing.", price: 35, macros: { cal: 85, protein: 3, carbs: 12, fat: 3 } }
    ]
  },
  {
    id: "jamaican-sides",
    name: "Jamaican Sides",
    items: [
      { id: "coleslaw", name: "Coleslaw", description: "Creamy cabbage and carrot slaw with a tangy island twist", price: 35, macros: { cal: 150, protein: 2, carbs: 12, fat: 11 } },
      { id: "steamed-veg", name: "Steamed Veg", description: "Mixed cabbage, carrots and bell peppers lightly steamed with Island herbs and spices", price: 35, macros: { cal: 65, protein: 3, carbs: 14, fat: 1 } },
      { id: "rice-peas", name: "Rice and Peas", description: "Fragrant rice cooked with coconut milk, kidney beans, thyme and scallions", price: 55, macros: { cal: 320, protein: 8, carbs: 52, fat: 10 } },
      { id: "patty-beef-fish", name: "Patty (Beef/Fish)", description: "Flaky pastry filled with spiced minced beef OR seasoned Fish and Caribbean herbs", price: 40, macros: { cal: 315, protein: 13, carbs: 32, fat: 15 } },
      { id: "festivals", name: "Festivals", description: "Sweet, fried cornmeal dumplings with a soft, fluffy center", price: 15, macros: { cal: 180, protein: 3, carbs: 28, fat: 7 } },
      { id: "dumplings", name: "Dumplings", description: "Golden fried dough with a crisp outside and soft, chewy center", price: 15, macros: { cal: 160, protein: 3, carbs: 24, fat: 6 } },
      { id: "curry-goat", name: "Curry Goat", description: "Slow braised goat, bursting with bold flavors and Island soul", price: 140, macros: { cal: 420, protein: 38, carbs: 12, fat: 26 } },
      { id: "oxtail", name: "Oxtail", description: "Hearty oxtail stewed in bold curry with herbs, mild heat and Caribbean soul", price: 140, macros: { cal: 450, protein: 42, carbs: 10, fat: 28 } },
      { id: "stew-chicken", name: "Stew Chicken", description: "Marinated chicken simmered in flavourful, slightly sweet and spiced brown sauce", price: 130, macros: { cal: 380, protein: 36, carbs: 14, fat: 20 } }
    ]
  },
  {
    id: "feasts",
    name: "Nico's Feasts",
    description: "All sandos / burgers come with coleslaw and fries",
    items: [
      { id: "brisket-sando", name: "Smoked Brisket Sando", description: "Slow smoked Wagyu beef layered with Nico's signature BBQ sauce. Topped with crisp slaw and our house pickled onions for the perfect hit of crunch and zing.", price: 195, macros: { cal: 780, protein: 42, carbs: 58, fat: 42 } },
      { id: "pork-rib-sando", name: "Smoked Pork Rib Sando", description: "Smoked pork ribs, orange and soy BBQ sauce, crisp slaw, kimchi mayo & pickled onions. Sweet, smoky, and tangy.", price: 195, macros: { cal: 720, protein: 38, carbs: 56, fat: 38 } },
      { id: "philly-sando", name: "Philly Cheesesteak Sando", description: "Tender steak, onion & capsicum relish, melted mozzarella & cheddar. Savoury, melty, and packed with flavour.", price: 195, macros: { cal: 820, protein: 48, carbs: 54, fat: 46 } },
      { id: "cheese-burger", name: "Cheese Burger", description: "150 grams of premium beef patty, Nico's BBQ sauce, lettuce, tomato, aioli-mayo & pickled onions. Juicy, smoky, and seriously satisfying.", price: 175, macros: { cal: 680, protein: 38, carbs: 48, fat: 36 } },
      { id: "peri-burger", name: "Peri Peri Chicken Burger", description: "150 grams of flame grilled piri piri chicken, crisp lettuce, tomato, pickled onions & creamy perinaise. Bold, fresh crunch and big flavour.", price: 175, macros: { cal: 620, protein: 42, carbs: 46, fat: 28 } },
      { id: "jerk-burger", name: "Jerk Chicken Burger", description: "150 grams of BBQ jerk chicken, tomato, lettuce, and pickled onions. Juicy and full of Island flavours.", price: 175, macros: { cal: 640, protein: 40, carbs: 48, fat: 30 } },
      { 
        id: "garden-salad-feast", 
        name: "Garden Salad", 
        description: "Fresh mixed greens with raddish, julienne carrots, onions and cherry tomatoes. Simple and crisp. Served with house made lime dressing.", 
        price: 65, 
        macros: { cal: 120, protein: 4, carbs: 18, fat: 4 },
        addOns: [
          { name: "No Extra", price: 0 },
          { name: "Add Jerk/Peri Chicken", price: 30 },
          { name: "Add Bacon", price: 30 },
          { name: "Add Brisket", price: 45 }
        ]
      }
    ]
  },
  {
    id: "sweet-treats",
    name: "Sweet Treats",
    items: [
      { id: "dessert-of-day", name: "Chef's Dessert of the Day", description: "Ask us for today's selection!", price: 0, macros: { cal: 0, protein: 0, carbs: 0, fat: 0 } }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { id: "coke", name: "Coke", price: 25, macros: { cal: 140, protein: 0, carbs: 39, fat: 0 } },
      { id: "coke-zero", name: "Coke Zero", price: 25, macros: { cal: 0, protein: 0, carbs: 0, fat: 0 } },
      { id: "sprite", name: "Sprite", price: 25, macros: { cal: 140, protein: 0, carbs: 38, fat: 0 } },
      { id: "fanta", name: "Strawberry Fanta", price: 25, macros: { cal: 160, protein: 0, carbs: 44, fat: 0 } },
      { id: "soda-water", name: "Soda Water", price: 25, macros: { cal: 0, protein: 0, carbs: 0, fat: 0 } },
      { id: "bottled-water", name: "Bottled Water", price: 25, macros: { cal: 0, protein: 0, carbs: 0, fat: 0 } },
      { id: "guinness-punch", name: "Guinness Punch", description: "Spiced, creamy Guinness milk drink. Smooth, sweet, and irresistibly bold with a Caribbean kick.", price: 90, macros: { cal: 380, protein: 8, carbs: 42, fat: 18 } },
      { id: "bintang", name: "Bintang", price: 35, macros: { cal: 145, protein: 1, carbs: 12, fat: 0 } }
    ]
  }
];
