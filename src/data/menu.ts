import dish1 from "@/assets/dish-1.jpg"; // Idli, Medu Vada & Chutney/Sambar
import dish2 from "@/assets/dish-2.jpg"; // South Indian Grand Thali / Meals
import dish3 from "@/assets/dish-3.jpg"; // Crispy Masala Dosa

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
  special?: boolean;
};

export const MENU: Record<string, MenuItem[]> = {
  "Tiffin & Starters": [
    {
      name: "Idli Vada Combo",
      desc: "Steamed fluffy rice cakes & crispy lentil donut served on banana leaf with coconut chutney and piping hot sambar.",
      price: "₹120",
      image: dish1,
      special: true,
    },
    {
      name: "Maddur Vada (2 pcs)",
      desc: "Crispy fried onion, rice flour, and semolina patties seasoned with curry leaves and green chillies.",
      price: "₹90",
      image: dish1,
    },
    {
      name: "Gobi Kempu Bezule",
      desc: "Crispy cauliflower florets tossed in yogurt, green chillies, curry leaves, and South Indian spices.",
      price: "₹180",
      image: dish3,
    },
  ],

  "Dosa Specials": [
    {
      name: "Nanjundeshwara Ghee Masala Dosa",
      desc: "Crispy golden crepe smeared with red garlic chutney, stuffed with spiced potato mash, cooked in pure ghee.",
      price: "₹180",
      image: dish3,
      special: true,
    },
    {
      name: "Open Butter Pudi Dosa",
      desc: "Thick, soft-center crispy dosa generously dusted with house spicy gun powder (pudi) and a dollop of white butter.",
      price: "₹190",
      image: dish3,
    },
    {
      name: "Rava Onion Dosa",
      desc: "Lacy, wafer-thin crepe made from semolina, onion, crushed pepper, and fresh coriander.",
      price: "₹160",
      image: dish2,
    },
  ],

  "Main Course": [
    {
      name: "Nanjundeshwara Grand Royal Thali",
      desc: "Steaming Sona Masoori rice served with Sambar, Rasam, Kootu, Kosambari, Curd, Crispy Appalam, and Sweet on a banana leaf.",
      price: "₹280",
      image: dish2,
      special: true,
    },
    {
      name: "Bisi Bele Bath",
      desc: "Traditional Karnataka spicy rice and lentil porridge cooked with seasonal vegetables, ghee, and aromatic spices.",
      price: "₹160",
      image: dish2,
    },
    {
      name: "Mysore Puliyogare",
      desc: "Authentic tangy tamarind rice tempered with roasted peanuts, curry leaves, and dry spices.",
      price: "₹140",
      image: dish1,
    },
    {
      name: "Special Curd Rice",
      desc: "Creamy curd rice tempered with mustard seeds, curry leaves, ginger, and topped with fresh pomegranate.",
      price: "₹130",
      image: dish2,
    },
  ],

  Desserts: [
    {
      name: "Pineapple Kesari Bath",
      desc: "Rich semolina pudding cooked in pure ghee, real pineapple chunks, saffron, and toasted cashews.",
      price: "₹110",
      image: dish3,
      special: true,
    },
    {
      name: "Pure Ghee Mysore Pak",
      desc: "Traditional melt-in-your-mouth chickpea flour and cow ghee fudge.",
      price: "₹130",
      image: dish3,
    },
    {
      name: "Elaneer Payasam",
      desc: "Chilled tender coconut milk pudding flavored with cardamom and soft coconut pulp.",
      price: "₹150",
      image: dish1,
    },
  ],

  Beverages: [
    {
      name: "Degree Filter Coffee",
      desc: "Freshly brewed chicory filter decoction frothed with hot whole milk, served in a traditional brass dabara.",
      price: "₹60",
      image: dish1,
      special: true,
    },
    {
      name: "Spiced Majjige (Buttermilk)",
      desc: "Chilled churned buttermilk seasoned with ginger, green chilli, cilantro, and asafoetida.",
      price: "₹50",
      image: dish2,
    },
    {
      name: "Warm Saffron Badam Milk",
      desc: "Rich hot milk simmered with real almond paste, cardamom, and Kashmiri saffron.",
      price: "₹90",
      image: dish3,
    },
  ],
};

export const CATEGORIES = Object.keys(MENU);