import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className={`group block ${wide ? "md:col-span-2" : ""}`}
    >
      <div className="relative overflow-hidden bg-charcoal-mid">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-6">
            <span className="font-display text-[15vw] leading-none text-ivory/5 md:text-[8vw]">
              {product.name.split(" ")[0]}
            </span>
          </div>
          {product.badge && (
            <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[10px] font-medium uppercase text-charcoal" style={{ letterSpacing: "2px" }}>
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="border border-ivory px-6 py-3 text-[10px] uppercase text-ivory" style={{ letterSpacing: "3px" }}>
              Quick View
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between transition-transform duration-500 group-hover:-translate-y-1">
        <div>
          <p className="text-[10px] uppercase text-warm-gray" style={{ letterSpacing: "3px" }}>
            {product.category}
          </p>
          <h3 className="font-serif-i mt-1 text-xl text-charcoal">{product.name}</h3>
        </div>
        <div className="text-right">
          <p className="font-display text-lg text-charcoal">₹{product.price.toLocaleString("en-IN")}</p>
          {product.oldPrice && (
            <p className="text-xs text-warm-gray line-through">₹{product.oldPrice.toLocaleString("en-IN")}</p>
          )}
        </div>
      </div>
    </Link>
  );
}