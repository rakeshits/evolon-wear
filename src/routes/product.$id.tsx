import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Heart, Star, Plus, Minus, Leaf, Sparkles, Recycle, Ruler, Check } from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    const title = p ? `${p.name} — EVOLONWEAR` : "Product — EVOLONWEAR";
    const desc = p?.description ?? "Premium Indian streetwear from Evolonwear.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.image }, { name: "twitter:image", content: p.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData() as Product;
  const [img, setImg] = useState(0);
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState<string | null>("desc");

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const savePct = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const accordion = [
    { id: "desc", title: "Description", body: product.description },
    { id: "fit", title: "Size & Fit", body: "Model is 6'0\" wearing size M. Relaxed through the body with a boxy hem. Refer to the size guide for measurements." },
    { id: "care", title: "Care Instructions", body: "Cold machine wash with like colours. Do not bleach. Reshape and dry flat in shade. Warm iron on reverse." },
    { id: "delivery", title: "Delivery & Returns", body: "Free delivery on orders above ₹999. Easy 30-day returns on unworn pieces with tags intact." },
  ];

  return (
    <>
      <section className="bg-ivory pt-32">
        <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-12">
          <nav className="mb-10 text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "2.5px" }}>
            <Link to="/" className="hover:text-gold">Home</Link> · {" "}
            <Link to="/collections" className="hover:text-gold">Collections</Link> · {" "}
            <span>{product.category}</span> · <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative flex gap-4">
                <div className="hidden flex-col gap-3 md:flex">
                  {product.gallery.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setImg(i)}
                      className={`relative aspect-[3/4] w-20 overflow-hidden border transition ${
                        img === i ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={g} alt="" className="h-full w-full object-cover" />
                      <span className="absolute bottom-1 left-1 text-[9px] text-ivory">{String(i + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </div>
                <div className="relative flex-1 overflow-hidden bg-charcoal-mid">
                  <div className="relative aspect-[3/4]">
                    <img src={product.gallery[img]} alt={product.name} className="h-full w-full object-cover" />
                    <span className="pointer-events-none absolute bottom-6 left-6 font-display text-6xl text-ivory/10 md:text-8xl">
                      {product.name.split(" ")[0]}
                    </span>
                    {product.badge && (
                      <span className="absolute right-4 top-4 bg-gold px-3 py-1 text-[10px] uppercase text-charcoal" style={{ letterSpacing: "2px" }}>
                        {product.badge === "New" ? "New Season" : product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="max-w-lg">
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>{product.category}</p>
              <h1 className="font-serif-i mt-3 text-5xl leading-tight text-charcoal">
                {product.name}
                <span className="mt-1 block text-lg text-warm-gray">{product.subtitle}</span>
              </h1>

              <div className="mt-5 flex items-center gap-3 text-sm text-warm-gray">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span>128 reviews</span>
              </div>

              <div className="mt-8 flex items-end gap-4">
                <span className="font-display text-4xl text-charcoal">₹{product.price.toLocaleString("en-IN")}</span>
                {product.oldPrice && (
                  <>
                    <span className="pb-1 text-lg text-warm-gray line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                    <span className="mb-1 bg-gold px-2 py-1 text-[10px] uppercase text-charcoal" style={{ letterSpacing: "2px" }}>Save {savePct}%</span>
                  </>
                )}
              </div>

              {/* Color */}
              <div className="mt-10">
                <p className="mb-3 text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>Colour — <span className="text-charcoal">{color}</span></p>
                <div className="flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c.name)}
                      aria-label={c.name}
                      className={`h-9 w-9 rounded-full border transition ${
                        color === c.name ? "border-charcoal ring-2 ring-gold ring-offset-2 ring-offset-ivory" : "border-charcoal/20"
                      }`}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>Size</p>
                  <button className="text-[10px] uppercase text-charcoal underline underline-offset-4 hover:text-gold" style={{ letterSpacing: "2px" }}>
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.name}
                      disabled={s.soldOut}
                      onClick={() => setSize(s.name)}
                      className={`border py-3 text-xs uppercase transition ${
                        s.soldOut
                          ? "cursor-not-allowed border-charcoal/10 text-warm-gray/50 line-through"
                          : size === s.name
                            ? "border-charcoal bg-charcoal text-gold"
                            : "border-charcoal/20 text-charcoal hover:border-charcoal"
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex gap-3">
                <button
                  onClick={() => {
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1800);
                  }}
                  className="btn-gold-sweep flex-1 bg-charcoal py-5 text-[10px] uppercase text-ivory transition hover:text-charcoal"
                  style={{ letterSpacing: "3px" }}
                >
                  {added ? (
                    <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Added</span>
                  ) : (
                    "Add to Bag"
                  )}
                </button>
                <button aria-label="Wishlist" className="border border-charcoal/20 px-5 text-charcoal transition hover:border-gold hover:text-gold">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              {/* Features */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { i: Leaf, l: "Natural Fabric" },
                  { i: Sparkles, l: "Premium Finish" },
                  { i: Recycle, l: "Sustainable" },
                  { i: Ruler, l: "Relaxed Fit" },
                ].map((f) => (
                  <div key={f.l} className="flex items-center gap-3 border border-charcoal/10 bg-ivory-dark p-4">
                    <f.i className="h-5 w-5 text-gold" />
                    <span className="text-[11px] uppercase text-charcoal" style={{ letterSpacing: "2px" }}>{f.l}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="mt-12 border-t border-charcoal/10">
                {accordion.map((a) => (
                  <div key={a.id} className="border-b border-charcoal/10">
                    <button
                      onClick={() => setOpen(open === a.id ? null : a.id)}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className="text-[11px] uppercase text-charcoal" style={{ letterSpacing: "2.5px" }}>{a.title}</span>
                      {open === a.id ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-charcoal" />}
                    </button>
                    {open === a.id && <p className="pb-6 text-sm leading-relaxed text-warm-gray">{a.body}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory-dark">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
          <div className="mb-12" data-reveal>
            <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Styled With</p>
            <h2 className="font-display mt-3 text-4xl text-charcoal md:text-5xl">COMPLETE THE LOOK</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => <div key={p.id} data-reveal><ProductCard product={p} /></div>)}
          </div>
        </div>
      </section>
    </>
  );
}