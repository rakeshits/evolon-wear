import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Truck, RotateCcw, Sparkles, Lock, Quote, Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EVOLONWEAR — Wear What Moves You" },
      { name: "description", content: "Premium Indian streetwear. Crafted for those who move with intention. Shop the SS25 collection." },
      { property: "og:title", content: "EVOLONWEAR — Wear What Moves You" },
      { property: "og:description", content: "Premium Indian streetwear. Crafted for those who move with intention." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="animate-float-slow text-stroke-gold font-display text-[38vw] leading-none md:text-[24vw]">
            EVOLON
          </span>
        </div>
        <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
          <div className="flex items-center px-6 pt-32 md:px-16 md:pt-0">
            <div className="max-w-xl">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>
                  New Collection — 2025
                </span>
              </div>
              <h1 className="font-display leading-[0.85] text-ivory">
                <span className="block text-[22vw] md:text-[9vw]">WEAR</span>
                <span className="font-serif-i mt-2 block text-4xl text-gold md:text-6xl">what moves you</span>
              </h1>
              <p className="mt-10 max-w-md text-base leading-relaxed text-ivory/70">
                Crafted for those who move with intention. Premium essentials that blur the line between luxury and everyday.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/collections"
                  className="btn-gold-sweep group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] uppercase text-charcoal transition hover:text-charcoal"
                  style={{ letterSpacing: "3px" }}
                >
                  Shop Collection <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-3 border border-ivory/40 px-8 py-4 text-[10px] uppercase text-ivory transition hover:border-gold hover:text-gold"
                  style={{ letterSpacing: "3px" }}
                >
                  Explore Lookbook
                </Link>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&auto=format&fit=crop&q=80"
              alt="Editorial fashion"
              className="h-full w-full object-cover opacity-80 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal/40" />
          </div>
        </div>
        <div className="absolute bottom-8 right-6 z-10 flex items-center gap-3 text-[10px] uppercase text-ivory/60 md:right-16" style={{ letterSpacing: "3px" }}>
          <span>Scroll</span>
          <span className="h-px w-16 bg-ivory/40" />
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="bg-charcoal-mid text-ivory">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-ivory/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { tag: "Browse", name: "MEN", count: "38 Pieces" },
            { tag: "Browse", name: "WOMEN", count: "32 Pieces" },
            { tag: "Browse", name: "UNISEX", count: "34 Pieces" },
          ].map((c) => (
            <Link
              key={c.name}
              to="/collections"
              data-reveal
              className="group relative flex items-center justify-between px-8 py-16 transition hover:bg-charcoal md:px-14 md:py-24"
            >
              <div>
                <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>{c.tag}</p>
                <h3 className="font-display mt-4 text-6xl md:text-7xl">{c.name}</h3>
                <p className="mt-3 text-xs text-warm-gray">{c.count}</p>
                <span className="mt-4 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-24" />
              </div>
              <ArrowUpRight className="h-8 w-8 text-ivory/60 transition group-hover:text-gold" />
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-32 md:grid-cols-2 md:px-12">
          <div data-reveal>
            <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Manifesto — 01</p>
            <p className="font-serif-i mt-6 text-4xl leading-[1.15] text-charcoal md:text-5xl">
              Designed for the ones who <span className="text-gold">live between seasons.</span>
            </p>
          </div>
          <div data-reveal>
            <p className="max-w-md text-base leading-relaxed text-warm-gray">
              Evolonwear was born in 2024 with one intent — to build a wardrobe that moves as freely as you do.
              Every silhouette is developed in-house, cut from natural fibers, and finished with a hand you can feel.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-10">
              {[
                { n: "04", l: "Collections" },
                { n: "104+", l: "Pieces" },
                { n: "12k+", l: "Happy Wearers" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl text-charcoal md:text-5xl">{s.n}</p>
                  <p className="mt-2 text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-ivory-dark">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12">
          <div className="flex items-end justify-between" data-reveal>
            <div>
              <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Best of Evolon</p>
              <h2 className="font-display mt-3 text-5xl text-charcoal md:text-6xl">FEATURED</h2>
            </div>
            <Link to="/collections" className="hidden text-[10px] uppercase text-charcoal hover:text-gold md:inline" style={{ letterSpacing: "3px" }}>
              View all →
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.id} data-reveal className={i === 0 ? "md:col-span-2" : ""}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW VIBES BANNER */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-charcoal text-ivory">
        <span className="text-stroke-gold pointer-events-none absolute font-display text-[35vw] leading-none md:text-[22vw]">
          NEW VIBES
        </span>
        <div className="relative z-10 text-center" data-reveal>
          <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>New Season</p>
          <h2 className="font-display mt-4 text-6xl md:text-8xl">NEW VIBES</h2>
          <Link
            to="/collections"
            className="btn-gold-sweep mt-8 inline-flex items-center gap-3 border border-ivory/60 px-8 py-4 text-[10px] uppercase text-ivory"
            style={{ letterSpacing: "3px" }}
          >
            Explore <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-ivory-dark border-y border-charcoal/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:px-12">
          {[
            { icon: Truck, label: "Fast Delivery" },
            { icon: RotateCcw, label: "Easy Returns" },
            { icon: Sparkles, label: "Quality Assured" },
            { icon: Lock, label: "Secure Payment" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-4">
              <t.icon className="h-6 w-6 text-gold" />
              <span className="text-[11px] uppercase text-charcoal" style={{ letterSpacing: "2.5px" }}>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12">
          <div className="mb-16 text-center" data-reveal>
            <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Voices</p>
            <h2 className="font-display mt-3 text-5xl md:text-6xl">WORN & LOVED</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { q: "The fit is unreal. Feels like a piece that's been in my wardrobe for years — in the best way.", n: "Aarav M.", c: "Mumbai" },
              { q: "Finally an Indian label that gets minimal streetwear right. Fabric, cut, colour — everything just works.", n: "Ishani K.", c: "Bengaluru" },
              { q: "Wore the hoodie for three months straight. Still looks like day one. That's the story.", n: "Rohan S.", c: "Delhi" },
            ].map((t) => (
              <div key={t.n} data-reveal className="border border-ivory/10 bg-charcoal-mid p-10">
                <Quote className="h-8 w-8 text-gold" />
                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-serif-i mt-6 text-xl leading-relaxed text-ivory/90">"{t.q}"</p>
                <div className="mt-8 border-t border-ivory/10 pt-4">
                  <p className="text-sm text-ivory">{t.n}</p>
                  <p className="text-xs text-warm-gray">{t.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP CTA */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 py-32 text-center md:px-12" data-reveal>
          <h2 className="font-display text-6xl leading-none text-charcoal md:text-[10vw]">READY TO EVOLVE?</h2>
          <p className="font-serif-i mt-6 text-2xl text-gold md:text-3xl">Your wardrobe is waiting.</p>
          <Link
            to="/collections"
            className="btn-gold-sweep mt-10 inline-flex items-center gap-3 bg-charcoal px-10 py-5 text-[10px] uppercase text-ivory hover:text-charcoal"
            style={{ letterSpacing: "3px" }}
          >
            Shop the Collection <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
