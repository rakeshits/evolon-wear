import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Search, ShoppingBag, Menu, X, Instagram } from "lucide-react";

function Marquee() {
  const items = [
    "Free delivery on orders above ₹999",
    "New Season — Summer 2025",
    "Easy Returns within 30 days",
    "Premium Quality Guaranteed",
  ];
  const line = items.join("  ·  ");
  return (
    <div className="overflow-hidden bg-gold py-3 text-charcoal">
      <div className="animate-marquee flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-10 pr-10 text-xs font-medium uppercase tracking-[0.3em]">
            <span>{line}</span>
            <span>·</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.style.cssText =
      "position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:#C9A84C;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .15s ease";
    ring.style.cssText =
      "position:fixed;top:0;left:0;width:36px;height:36px;border:1px solid rgba(201,168,76,.6);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:transform .25s ease, width .2s ease, height .2s ease";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    let rx = 0, ry = 0, dx = 0, dy = 0;
    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      dot.style.left = dx + "px"; dot.style.top = dy + "px";
    };
    const loop = () => {
      rx += (dx - rx) * 0.15; ry += (dy - ry) * 0.15;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-cursor]")) {
        dot.style.transform = "translate(-50%,-50%) scale(2.5)";
        ring.style.transform = "translate(-50%,-50%) scale(1.4)";
      } else {
        dot.style.transform = "translate(-50%,-50%) scale(1)";
        ring.style.transform = "translate(-50%,-50%) scale(1)";
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    let raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      dot.remove(); ring.remove();
    };
  }, []);
  return null;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const darkHero = pathname === "/" || pathname === "/story" || pathname.startsWith("/collections");
  const onLight = scrolled || !darkHero;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/blog", label: "Lookbook" },
    { to: "/story", label: "Our Story" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          onLight ? "bg-ivory/92 backdrop-blur-md border-b border-charcoal/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className={`font-display text-2xl ${onLight ? "text-charcoal" : "text-ivory"}`} style={{ letterSpacing: "6px" }}>
            EVOLON
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[10px] font-medium uppercase transition-colors hover:text-gold ${
                  onLight ? "text-charcoal" : "text-ivory"
                }`}
                style={{ letterSpacing: "3px" }}
                activeProps={{ style: { letterSpacing: "3px", color: "var(--gold)" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className={`hidden items-center gap-6 md:flex ${onLight ? "text-charcoal" : "text-ivory"}`}>
            <button aria-label="Search" className="transition hover:text-gold">
              <Search className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 text-[10px] uppercase transition hover:text-gold" style={{ letterSpacing: "3px" }}>
              <ShoppingBag className="h-4 w-4" /> Bag (0)
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden ${onLight ? "text-charcoal" : "text-ivory"}`}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="absolute inset-0 bg-charcoal/60" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-ivory p-8 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="font-display text-xl text-charcoal" style={{ letterSpacing: "6px" }}>EVOLON</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-display text-3xl text-charcoal">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex items-center gap-6 text-charcoal">
            <button className="flex items-center gap-2 text-xs uppercase" style={{ letterSpacing: "3px" }}>
              <ShoppingBag className="h-4 w-4" /> Bag (0)
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory border-t border-gold/40">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-4 md:px-12">
        <div>
          <div className="font-display text-3xl" style={{ letterSpacing: "6px" }}>EVOLON</div>
          <p className="font-serif-i mt-3 text-gold-light">Wear what moves you.</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-warm-gray">
            Premium Indian streetwear crafted for those who move with intention. Made with care in India.
          </p>
        </div>
        {[
          { title: "Shop", items: ["Men", "Women", "Unisex", "New Arrivals", "Sale"] },
          { title: "Help", items: ["Contact", "Shipping", "Returns", "Size Guide", "FAQ"] },
          { title: "Brand", items: ["Our Story", "Lookbook", "Journal", "Careers", "Press"] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="text-[10px] uppercase text-gold" style={{ letterSpacing: "3px" }}>{c.title}</h4>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              {c.items.map((i) => <li key={i}><a href="#" className="hover:text-gold">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-warm-gray md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Evolonwear. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gold">Pinterest</a>
            <a href="#" className="hover:text-gold">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    // fade-up observer
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("animate-fade-up");
          (e.target as HTMLElement).style.opacity = "1";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => { el.style.opacity = "0"; io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Nav />
      <main key={pathname} className="animate-fade-up">{children}</main>
      <Marquee />
      <Footer />
    </>
  );
}