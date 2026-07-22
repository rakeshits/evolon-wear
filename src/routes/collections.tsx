import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — EVOLONWEAR" },
      { name: "description", content: "Explore the Evolonwear SS25 collections. Premium essentials for Men, Women and Unisex." },
      { property: "og:title", content: "Collections — EVOLONWEAR" },
      { property: "og:description", content: "Explore the Evolonwear SS25 collections." },
    ],
  }),
  component: Collections,
});

const FILTERS = ["All", "Men", "Women", "Unisex", "Outerwear", "Bottoms", "Tops", "New Arrivals", "Sale"];

function Collections() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(
    () =>
      filter === "All"
        ? products
        : products.filter((p) => p.category === filter || p.tags.includes(filter)),
    [filter],
  );

  const showcase = [
    { name: "MEN", desc: "Structured tailoring, elevated basics.", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1400&auto=format&fit=crop&q=80", wide: true },
    { name: "WOMEN", desc: "Editorial silhouettes, refined edges.", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&auto=format&fit=crop&q=80" },
    { name: "UNISEX", desc: "Considered essentials for everyone.", img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1400&auto=format&fit=crop&q=80" },
    { name: "NEW SEASON", desc: "The SS25 drop, in full.", img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1400&auto=format&fit=crop&q=80", wide: true },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[50vh] items-center overflow-hidden bg-charcoal text-ivory">
        <span className="text-stroke-gold pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[26vw] leading-none">
          COLLECTIONS
        </span>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>The Wardrobe — SS25</p>
          <h1 className="font-display mt-4 text-6xl md:text-8xl">OUR COLLECTIONS</h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[68px] z-30 border-b border-charcoal/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] gap-3 overflow-x-auto px-6 py-4 md:px-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-none border px-5 py-2 text-[10px] uppercase transition ${
                filter === f
                  ? "border-charcoal bg-charcoal text-gold"
                  : "border-charcoal/20 text-charcoal hover:border-charcoal"
              }`}
              style={{ letterSpacing: "2.5px" }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* SHOWCASE */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {showcase.map((s) => (
              <Link
                key={s.name}
                to="/collections"
                data-reveal
                className={`group relative block aspect-[16/10] overflow-hidden bg-charcoal ${s.wide ? "md:col-span-2" : ""}`}
              >
                <img src={s.img} alt={s.name} className="h-full w-full object-cover opacity-70 transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-ivory md:p-14">
                  <h3 className="font-display text-5xl md:text-7xl">{s.name}</h3>
                  <p className="font-serif-i mt-2 text-lg text-ivory/80">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>
                    Shop <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-ivory-dark">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
          <div className="mb-12 flex items-end justify-between" data-reveal>
            <div>
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>All Pieces</p>
              <h2 className="font-display mt-3 text-4xl text-charcoal md:text-5xl">THE FULL EDIT</h2>
            </div>
            <p className="text-xs text-warm-gray">{filtered.length} pieces</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <div key={p.id} data-reveal>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}