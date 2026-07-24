import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  special?: boolean;
};

export const MENU: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Oyster Verdé", desc: "Fine de Claire, champagne mignonette, sea herbs.", price: "€28", image: dish1, special: true },
    { name: "Foie Gras Royale", desc: "Slow-poached foie, pear compote, brioche shard.", price: "€36", image: dish3 },
    { name: "Beetroot Carpaccio", desc: "Roasted heirloom beets, chèvre, walnut soil.", price: "€22", image: dish2 },
  ],
  "Main Course": [
    { name: "Wagyu A5", desc: "Bincho-grilled, black truffle jus, potato mille-feuille.", price: "€96", image: dish2, special: true },
    { name: "Duck à l'Orange", desc: "Rouennaise duck, blood-orange gastrique, endive.", price: "€64", image: dish3 },
    { name: "Guinea Fowl", desc: "Wood-roasted, morel cream, wild leek ash.", price: "€52", image: dish1 },
  ],
  Seafood: [
    { name: "Diver Scallops", desc: "Seared Hokkaido scallops, gold leaf, verjus.", price: "€48", image: dish1, special: true },
    { name: "Turbot Meunière", desc: "Whole Brittany turbot, brown butter, capers.", price: "€72", image: dish2 },
    { name: "Lobster Thermidor", desc: "Half Breton lobster, cognac gratin, tarragon.", price: "€84", image: dish3 },
  ],
  Vegetarian: [
    { name: "Truffle Risotto", desc: "Carnaroli, aged parmesan, shaved black truffle.", price: "€44", image: dish2 },
    { name: "Garden Symphony", desc: "Seven-vegetable tasting, herb consommé.", price: "€38", image: dish1 },
    { name: "Wild Mushroom Tart", desc: "Puff pastry, cep duxelles, tarragon oil.", price: "€32", image: dish3 },
  ],
  Desserts: [
    { name: "Grand Marnier Soufflé", desc: "Vanilla anglaise, candied zest.", price: "€22", image: dish3, special: true },
    { name: "Chocolate Verdé", desc: "70% Valrhona, gold leaf, raspberry coulis.", price: "€24", image: dish3 },
    { name: "Île Flottante", desc: "Poached meringue, praline, crème anglaise.", price: "€18", image: dish1 },
  ],
  Beverages: [
    { name: "Champagne Flight", desc: "Three grande maison cuvées, sommelier selection.", price: "€68", image: dish1 },
    { name: "Reserve Bordeaux", desc: "Cellar-select vintages by the glass.", price: "€36", image: dish2 },
    { name: "Alcohol-Free Pairing", desc: "House-crafted seasonal infusions.", price: "€28", image: dish3 },
  ],
};

export const CATEGORIES = Object.keys(MENU);
