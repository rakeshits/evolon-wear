import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Leaf, PenLine } from "lucide-react";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — EVOLONWEAR" },
      { name: "description", content: "Born from movement. Built for life. The story behind Evolonwear — a premium Indian streetwear label." },
      { property: "og:title", content: "Our Story — EVOLONWEAR" },
      { property: "og:description", content: "Born from movement. Built for life." },
    ],
  }),
  component: Story,
});

function Story() {
  const blocks = [
    {
      tag: "Chapter 01",
      title: "How it started",
      body: "Evolonwear was founded in 2024 in a small studio in Bengaluru. What began as a search for a single well-cut hoodie turned into a full label — a home for the pieces we could never quite find. Every silhouette is patterned in-house, sampled by hand, and refined until it feels right.",
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&auto=format&fit=crop&q=80",
    },
    {
      tag: "Chapter 02",
      title: "What we stand for",
      body: "Quality above scale. Sustainability without slogans. Expression without noise. We move slowly on purpose — small drops, considered fabrics, and a promise that what you wear will outlast the season.",
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&auto=format&fit=crop&q=80",
    },
    {
      tag: "Chapter 03",
      title: "The fabric of it all",
      body: "We source natural fibres — long-staple cotton, European linen, deadstock wool — from a handful of mills we know by name. Cut and finished in India, by makers who treat every stitch like a signature.",
      img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=80",
    },
  ];
  return (
    <>
      <section className="relative flex h-[60vh] items-center overflow-hidden bg-charcoal text-ivory">
        <img
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&auto=format&fit=crop&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Est. 2024 — India</p>
          <h1 className="font-display mt-4 text-6xl md:text-8xl">WE ARE EVOLON</h1>
          <p className="font-serif-i mt-4 text-2xl text-gold-light md:text-3xl">Born from movement. Built for life.</p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              className={`grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden bg-charcoal-mid">
                <img src={b.img} alt={b.title} className="aspect-[4/5] w-full object-cover grayscale" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>{b.tag}</p>
                <h2 className="font-serif-i mt-4 text-4xl leading-tight text-charcoal md:text-5xl">{b.title}</h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-warm-gray">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <div className="mb-16" data-reveal>
            <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>Values</p>
            <h2 className="font-display mt-3 text-5xl md:text-6xl">WHAT WE BELIEVE</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { i: Sparkles, t: "Quality", d: "Built with care, meant to be worn hard and often." },
              { i: Leaf, t: "Sustainability", d: "Natural fibres, small runs, no waste by design." },
              { i: PenLine, t: "Expression", d: "Wardrobes that speak, without shouting." },
            ].map((v) => (
              <div key={v.t} data-reveal className="border border-ivory/10 bg-charcoal-mid p-10">
                <v.i className="h-8 w-8 text-gold" />
                <h3 className="font-display mt-6 text-3xl">{v.t.toUpperCase()}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-dark">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <div className="mb-14" data-reveal>
            <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>The Studio</p>
            <h2 className="font-display mt-3 text-4xl text-charcoal md:text-5xl">THE PEOPLE BEHIND EVOLON</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { n: "Aditya Rao", r: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80" },
              { n: "Meher Iyer", r: "Head of Design", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80" },
              { n: "Kabir Malhotra", r: "Production Lead", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=80" },
            ].map((p) => (
              <div key={p.n} data-reveal className="group">
                <div className="overflow-hidden bg-charcoal-mid">
                  <img src={p.img} alt={p.n} className="aspect-[3/4] w-full object-cover grayscale transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <h3 className="font-serif-i mt-4 text-2xl text-charcoal">{p.n}</h3>
                <p className="mt-1 text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}