export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: "Men" | "Women" | "Unisex";
  tags: string[];
  price: number;
  oldPrice?: number;
  badge?: "New" | "Bestseller" | "Sale";
  image: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  sizes: { name: string; soldOut?: boolean }[];
  description: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?w=1200&auto=format&fit=crop&q=80`;

export const products: Product[] = [
  {
    id: "drape-overshirt",
    name: "Drape Overshirt",
    subtitle: "No. 1 — SS25",
    category: "Men",
    tags: ["Outerwear", "New Arrivals"],
    price: 3499,
    oldPrice: 4299,
    badge: "New",
    image: img("photo-1552374196-1ab2a1c593e8"),
    gallery: [
      img("photo-1552374196-1ab2a1c593e8"),
      img("photo-1520975916090-3105956dac38"),
      img("photo-1516826957135-700dedea698c"),
      img("photo-1490114538077-0a7f8cb49891"),
    ],
    colors: [
      { name: "Stone", hex: "#c9b998" },
      { name: "Onyx", hex: "#1a1a18" },
      { name: "Mocha", hex: "#6b4a3a" },
      { name: "Ecru", hex: "#ede7d9" },
    ],
    sizes: [{ name: "XS" }, { name: "S" }, { name: "M" }, { name: "L", soldOut: true }, { name: "XL" }, { name: "XXL" }],
    description: "A relaxed silhouette cut from soft-brushed cotton twill. Designed to layer through the seasons with a natural drape and unstructured shoulder.",
  },
  {
    id: "utility-cargo",
    name: "Utility Cargo Trousers",
    subtitle: "No. 2 — SS25",
    category: "Men",
    tags: ["Bottoms"],
    price: 2999,
    badge: "Bestseller",
    image: img("photo-1594633312681-425c7b97ccd1"),
    gallery: [img("photo-1594633312681-425c7b97ccd1"), img("photo-1548883354-94bcfe321cbb"), img("photo-1584865288642-42078afe6942"), img("photo-1517245386807-bb43f82c33c4")],
    colors: [{ name: "Stone", hex: "#c9b998" }, { name: "Onyx", hex: "#1a1a18" }],
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    description: "Structured cargo with articulated knees and reinforced bellow pockets.",
  },
  {
    id: "essential-hoodie",
    name: "Essential Heavy Hoodie",
    subtitle: "No. 3 — SS25",
    category: "Unisex",
    tags: ["Tops", "Bestseller"],
    price: 2799,
    oldPrice: 3299,
    badge: "Sale",
    image: img("photo-1556821840-3a63f95609a7"),
    gallery: [img("photo-1556821840-3a63f95609a7"), img("photo-1620799140408-edc6dcb6d633"), img("photo-1618354691373-d851c5c3a990"), img("photo-1552374196-c4e7ffc6e126")],
    colors: [{ name: "Ecru", hex: "#ede7d9" }, { name: "Onyx", hex: "#1a1a18" }, { name: "Mocha", hex: "#6b4a3a" }],
    sizes: [{ name: "XS" }, { name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }, { name: "XXL" }],
    description: "450 GSM loop-terry hoodie with a boxy body and dropped shoulder.",
  },
  {
    id: "linen-shirt",
    name: "Relaxed Linen Shirt",
    subtitle: "No. 4 — SS25",
    category: "Men",
    tags: ["Tops", "New Arrivals"],
    price: 2499,
    badge: "New",
    image: img("photo-1602810318383-e386cc2a3ccf"),
    gallery: [img("photo-1602810318383-e386cc2a3ccf"), img("photo-1441986300917-64674bd600d8"), img("photo-1521572163474-6864f9cf17ab"), img("photo-1503341504253-dff4815485f1")],
    colors: [{ name: "Ecru", hex: "#ede7d9" }, { name: "Stone", hex: "#c9b998" }],
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    description: "Breathable European linen, garment-washed for a lived-in hand.",
  },
  {
    id: "tapered-joggers",
    name: "Tapered Joggers",
    subtitle: "No. 5 — SS25",
    category: "Unisex",
    tags: ["Bottoms"],
    price: 2299,
    image: img("photo-1517438322307-e67111335449"),
    gallery: [img("photo-1517438322307-e67111335449"), img("photo-1608889825205-eebdb9fc5806"), img("photo-1594938328870-9623159c8c99"), img("photo-1584464491033-06628f3a6b7b")],
    colors: [{ name: "Onyx", hex: "#1a1a18" }, { name: "Stone", hex: "#c9b998" }],
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    description: "Tapered fit joggers with a soft brushed interior.",
  },
  {
    id: "oversized-tee",
    name: "Oversized Tee",
    subtitle: "No. 6 — SS25",
    category: "Unisex",
    tags: ["Tops"],
    price: 1299,
    badge: "Bestseller",
    image: img("photo-1521572163474-6864f9cf17ab"),
    gallery: [img("photo-1521572163474-6864f9cf17ab"), img("photo-1583743814966-8936f5b7be1a"), img("photo-1618354691373-d851c5c3a990"), img("photo-1503341504253-dff4815485f1")],
    colors: [{ name: "Ecru", hex: "#ede7d9" }, { name: "Onyx", hex: "#1a1a18" }, { name: "Mocha", hex: "#6b4a3a" }],
    sizes: [{ name: "XS" }, { name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    description: "240 GSM heavy cotton tee with a boxy cut.",
  },
  {
    id: "bomber-jacket",
    name: "Woven Bomber Jacket",
    subtitle: "No. 7 — SS25",
    category: "Women",
    tags: ["Outerwear", "New Arrivals"],
    price: 4999,
    badge: "New",
    image: img("photo-1591047139829-d91aecb6caea"),
    gallery: [img("photo-1591047139829-d91aecb6caea"), img("photo-1490114538077-0a7f8cb49891"), img("photo-1509631179647-0177331693ae"), img("photo-1520975916090-3105956dac38")],
    colors: [{ name: "Onyx", hex: "#1a1a18" }, { name: "Mocha", hex: "#6b4a3a" }],
    sizes: [{ name: "XS" }, { name: "S" }, { name: "M" }, { name: "L" }],
    description: "Structured bomber with a satin-lined body.",
  },
  {
    id: "parachute-shorts",
    name: "Parachute Shorts",
    subtitle: "No. 8 — SS25",
    category: "Unisex",
    tags: ["Bottoms", "Sale"],
    price: 1799,
    oldPrice: 2299,
    badge: "Sale",
    image: img("photo-1591195853828-11db59a44f6b"),
    gallery: [img("photo-1591195853828-11db59a44f6b"), img("photo-1548883354-94bcfe321cbb"), img("photo-1517245386807-bb43f82c33c4"), img("photo-1594633312681-425c7b97ccd1")],
    colors: [{ name: "Stone", hex: "#c9b998" }, { name: "Onyx", hex: "#1a1a18" }],
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    description: "Lightweight ripstop shorts with utility pockets.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);