import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — EVOLONWEAR" },
      { name: "description", content: "Notes on fabric, form and the people who wear Evolonwear." },
      { property: "og:title", content: "Journal — EVOLONWEAR" },
      { property: "og:description", content: "Notes on fabric, form and the people who wear Evolonwear." },
    ],
  }),
  component: Blog,
});

const posts = [
  { t: "Notes on Natural Fibres", c: "Fabric", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=80" },
  { t: "Studio Journal — SS25", c: "Behind the Scenes", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&auto=format&fit=crop&q=80" },
  { t: "How to Layer Between Seasons", c: "Styling", img: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1200&auto=format&fit=crop&q=80" },
  { t: "The Long Life of a Hoodie", c: "Craft", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&auto=format&fit=crop&q=80" },
];

function Blog() {
  return (
    <>
      <section className="relative flex h-[50vh] items-center overflow-hidden bg-charcoal text-ivory">
        <span className="text-stroke-gold pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[24vw] leading-none">JOURNAL</span>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <p className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>The Lookbook & Notes</p>
          <h1 className="font-display mt-4 text-6xl md:text-8xl">JOURNAL</h1>
        </div>
      </section>
      <section className="bg-ivory">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {posts.map((p) => (
              <a key={p.t} href="#" data-reveal className="group block">
                <div className="overflow-hidden bg-charcoal-mid">
                  <img src={p.img} alt={p.t} className="aspect-[4/3] w-full object-cover grayscale transition duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0" />
                </div>
                <p className="mt-5 text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>{p.c}</p>
                <h2 className="font-serif-i mt-2 text-3xl text-charcoal group-hover:text-gold">{p.t}</h2>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}