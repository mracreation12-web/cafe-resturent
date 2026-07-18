export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: "signature" | "vegan" | "new";
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    id: "coffee",
    title: "Coffee & Espresso",
    subtitle: "Single-origin beans, roasted in-house every Tuesday.",
    items: [
      { name: "Ember Espresso", description: "Ethiopian Yirgacheffe, notes of stone fruit and dark cocoa.", price: "4.50", tag: "signature" },
      { name: "Cortado", description: "Equal parts espresso and warm milk, served in a Gibraltar glass.", price: "5.00" },
      { name: "Slow Pour Chemex", description: "Guatemala Huehuetenango, brewed to order over six minutes.", price: "7.50" },
      { name: "Iced Bourbon Latte", description: "Barrel-aged espresso, oat milk, house vanilla cream.", price: "8.00", tag: "new" },
      { name: "Cardamom Flat White", description: "Double ristretto, cardamom silk, whole milk microfoam.", price: "6.50" },
    ],
  },
  {
    id: "breakfast",
    title: "Morning",
    subtitle: "Served 7:30 — 11:30.",
    items: [
      { name: "Sourdough & Cultured Butter", description: "48-hour sourdough, brown-butter cultured spread, flake salt.", price: "9.00" },
      { name: "Ember Eggs", description: "Slow-scrambled farm eggs, black garlic, chive oil, toasted brioche.", price: "18.00", tag: "signature" },
      { name: "Honeycomb Granola", description: "Toasted oats, hazelnut, buckwheat honey, sheep's yogurt.", price: "14.00" },
      { name: "Truffle Croque", description: "Aged gruyère, black truffle béchamel, thick-cut country ham.", price: "22.00" },
    ],
  },
  {
    id: "tasting",
    title: "Tasting Menu",
    subtitle: "Seven courses, evolving weekly. Served 18:00 — 22:00.",
    items: [
      { name: "Amuse — Smoked Beetroot", description: "Charred beet, horseradish snow, rye crisp.", price: "—" },
      { name: "Oyster & Cucumber", description: "Kumamoto oyster, cucumber mignonette, dill oil.", price: "—" },
      { name: "Butter-Poached Lobster", description: "Maine lobster, saffron beurre blanc, sea vegetables.", price: "—", tag: "signature" },
      { name: "Aged Duck Breast", description: "Dry-aged 21 days, plum, black pepper jus.", price: "—" },
      { name: "Cheese Course", description: "Comté 36-month, poached pear, walnut lavash.", price: "—" },
      { name: "Chocolate & Olive Oil", description: "Single-origin ganache, arbequina oil, cocoa nib crumble.", price: "—" },
      { name: "Petit Fours", description: "House chocolates and seasonal jellies.", price: "—" },
    ],
  },
  {
    id: "plates",
    title: "Small Plates",
    subtitle: "Designed for sharing, at the bar or table.",
    items: [
      { name: "Wagyu Tartare", description: "Hand-cut A5, smoked yolk, sourdough crackers.", price: "26.00", tag: "signature" },
      { name: "Charred Leek", description: "Ember-cooked leek, romesco, aged sherry.", price: "16.00", tag: "vegan" },
      { name: "Burrata & Fig", description: "Puglian burrata, black mission fig, aged balsamic.", price: "19.00" },
      { name: "Crispy Artichoke", description: "Fried artichoke hearts, lemon aioli, black pepper.", price: "15.00", tag: "vegan" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Pastry",
    subtitle: "From our pastry room, changing daily.",
    items: [
      { name: "Basque Cheesecake", description: "Burnt top, silken center, aged sherry caramel.", price: "12.00", tag: "signature" },
      { name: "Miso Caramel Tart", description: "Buckwheat sablé, white miso caramel, sea salt.", price: "13.00" },
      { name: "Coffee Semifreddo", description: "Frozen espresso cream, chocolate soil, cocoa nib.", price: "12.00" },
      { name: "Seasonal Sorbet", description: "Ask your server for today's fruit.", price: "8.00", tag: "vegan" },
    ],
  },
  {
    id: "cellar",
    title: "From the Cellar",
    subtitle: "A short, considered list. Full cellar available on request.",
    items: [
      { name: "Champagne — Ulysse Collin", description: "Blanc de Blancs, Congy. Chalky, laser-fine.", price: "28 / glass" },
      { name: "Burgundy Blanc", description: "Meursault, Domaine Roulot, 2019.", price: "34 / glass" },
      { name: "Rhône Rouge", description: "Cornas, Thierry Allemand, 2018.", price: "42 / glass" },
      { name: "Non-Alcoholic Pairing", description: "House-fermented sodas and infusions. Five courses.", price: "45", tag: "new" },
    ],
  },
];
