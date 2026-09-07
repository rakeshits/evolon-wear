# Evolon Editorial

# EVOLONWEAR — Full Site Prompt for Lovable (React + Tailwind)

---

## PASTE THIS INTO LOVABLE:

---

Build a complete, production-ready fashion e-commerce marketing website called **EVOLONWEAR** using React + Tailwind CSS. This is a premium Indian streetwear brand. The site should feel like a high-end editorial fashion magazine — minimal, luxurious, and bold at the same time. Think GAZU meets ASTRO meets Zara editorial.

---

## BRAND IDENTITY

**Brand Name:** EVOLON (short display name) / Evolonwear (full name)
**Tagline:** "Wear What Moves You"
**Tone:** Premium, minimal, confident, editorial
**Target Audience:** Urban Indian youth, 18–32, fashion-conscious

**Color Palette (use as CSS variables):**
- `--ivory: #F5F0E8` → primary background
- `--ivory-dark: #EDE7D9` → secondary background
- `--charcoal: #1A1A18` → primary dark / text
- `--charcoal-mid: #2C2C28` → dark sections background
- `--gold: #C9A84C` → accent color (CTAs, highlights, borders)
- `--gold-light: #E8C97A` → light gold for italic headings
- `--warm-gray: #8A8478` → body text, secondary labels

**Typography:**
- Display / Hero headings: `Bebas Neue` (Google Font) — large, bold, uppercase
- Serif / Italic accents: `Cormorant Garamond` — elegant, italic subheadings
- Body / UI: `DM Sans` — clean, modern, readable

---

## SITE STRUCTURE — 6 PAGES

Build all pages with React Router. Pages:
1. `/` — Home
2. `/collections` — Collections & Products
3. `/product/:id` — Product Detail
4. `/story` — Our Story
5. `/contact` — Contact
6. `/blog` — Journal / Blog (optional, can be placeholder)

---

## GLOBAL ELEMENTS

### Navigation (fixed, full-width)
- Left: Logo "EVOLON" in Bebas Neue, letter-spacing 6px
- Center: Nav links — Home · Collections · Lookbook · Our Story (font: DM Sans, 10px, uppercase, letter-spacing 3px)
- Right: Search icon + "Bag (0)" button
- On dark hero sections: nav text is ivory. On scroll or light pages: nav background becomes ivory/92% with blur backdrop
- Smooth transition between states
- Mobile: hamburger menu that slides in from right

### Custom Cursor
- Small gold dot (10px) that follows mouse
- Larger gold ring (36px) that follows with slight delay
- On hover of interactive elements: dot scales up 2.5x

### Footer
- Dark background (`--charcoal`)
- Left: Logo + tagline + brand description
- 3 link columns: Shop / Help / Brand
- Bottom bar: copyright left, social links right (Instagram, Pinterest, WhatsApp)
- Thin gold border on top

### Marquee ticker bar
- Gold background (`--gold`), charcoal text
- Scrolling text: "Free delivery on orders above ₹999 · New Season — Summer 2025 · Easy Returns within 30 days · Premium Quality Guaranteed"
- Infinite loop, smooth animation

---

## PAGE 1 — HOME (`/`)

### Section 1: Hero
- Full viewport height
- Dark background (`--charcoal`)
- Right side: full-bleed lifestyle photo (use Unsplash placeholder: fashion editorial man walking, grayscale tinted)
- Left: hero content
  - Small label: "New Collection — 2025" with gold line before it
  - Giant heading: "WEAR" in Bebas Neue (~130px), then italic serif line "what moves you" in Cormorant Garamond gold
  - Subtext: "Crafted for those who move with intention. Premium essentials that blur the line between luxury and everyday."
  - Two buttons: `[Shop Collection]` (gold filled) and `[Explore Lookbook]` (ghost/outlined ivory)
- Background watermark: "EVOLON" in huge outlined text, very faint gold stroke, floating animation
- Scroll indicator bottom right

### Section 2: Marquee ticker

### Section 3: Category Strip
- Dark background, 3 columns side by side
- Each column: tag label (Browse), category name in Bebas Neue (MEN / WOMEN / UNISEX), item count, arrow ↗
- Gold underline slides in on hover
- Links to `/collections`

### Section 4: Brand Statement
- Ivory background, 2-column grid
- Left: Large serif italic quote — `Designed for the ones who live between seasons.` (Cormorant Garamond, 52px, gold italic accent)
- Right: paragraph text + 3 stats (04 Collections / 104+ Pieces / 12k+ Happy Wearers) in Bebas Neue large numbers

### Section 5: Featured Products
- Section heading: "FEATURED" (Bebas Neue 52px) + "Best of Evolon" subtitle in gold
- 4-product grid: first card spans 2 columns
- Each card: dark image placeholder with product name watermark, hover overlay with "Quick View", badge (New/Bestseller/Sale), product name in Cormorant Garamond, category in small caps, price
- Cards link to `/product/:id`

### Section 6: New Vibes Banner
- Dark full-width banner, 60vh
- Giant background text "NEW VIBES" as faint outline
- Foreground: "NEW SEASON" label + "NEW VIBES" heading + Explore button

### Section 7: Trust Bar
- 4 columns: 🚚 Fast Delivery · ↩️ Easy Returns · ✦ Quality Assured · 🔒 Secure Payment
- Light ivory-dark background

### Section 8: Testimonials
- Dark background
- 3 testimonial cards in grid
- Each: large quote mark, 5 stars in gold, italic serif quote text, customer name + city

### Section 9: Shop CTA
- Ivory background, centered
- Huge text "READY TO EVOLVE?" in Bebas Neue
- Italic serif subline: "Your wardrobe is waiting."
- Gold CTA button → `/collections`

---

## PAGE 2 — COLLECTIONS (`/collections`)

### Hero
- 50vh dark hero
- Label + "OUR COLLECTIONS" heading in Bebas Neue
- Faint "COLLECTIONS" watermark text behind

### Filter Bar
- Sticky below nav on scroll
- Pills/buttons: All · Men · Women · Unisex · Outerwear · Bottoms · Tops · Knitwear · New Arrivals · Sale
- Active state: dark background + gold text
- Clicking filters the product grid below (client-side filter by category tag)

### Collections Showcase Grid
- 2-column asymmetric grid
- 4 collection cards (MEN, WOMEN, UNISEX, NEW SEASON)
- Each: full-bleed dark card with overlay, collection name in Bebas Neue, description, "Shop → " link in gold
- First and 4th cards span 2 columns

### All Products Grid
- 4-column grid
- 8+ product cards (same design as home featured)
- Lazy fade-in animation as cards enter viewport
- Products: Drape Overshirt · Utility Cargo Trousers · Essential Heavy Hoodie · Relaxed Linen Shirt · Tapered Joggers · Oversized Tee · Woven Bomber Jacket · Parachute Shorts

---

## PAGE 3 — PRODUCT DETAIL (`/product/:id`)

### Layout
- 2-column sticky split: left = image gallery, right = product info
- Left column sticky (stays while right scrolls)

### Left: Gallery
- Large dark product image area (placeholder with product name watermark)
- 4 thumbnail strips on the left side (01, 02, 03, 04)
- "New Season" badge top right
- Click thumbnail to change main image

### Right: Product Info
- Breadcrumb: Home · Collections · Men · [Product Name]
- Category label in gold small caps
- Product name in Cormorant Garamond (~48px): e.g. "Drape Overshirt" with italic subline "No. 1 — SS25"
- Star rating + review count
- Price row: current price in Bebas Neue large + strikethrough old price + "Save X%" badge in gold
- **Color selector**: circular swatches (Stone, Onyx, Mocha, Ecru) with active border ring
- **Size selector**: square buttons (XS · S · M · L · XL · XXL), sold-out sizes have strikethrough + reduced opacity
- **"Add to Bag" button**: full width, dark background, gold hover sweep animation. Shows "Added ✓" feedback on click. Note: cart UI only for now, Shopify integration to be added later
- **Wishlist button**: heart icon beside Add to Bag
- 4 feature badges grid: 🌿 Natural Fabric · ✦ Premium Finish · ♻️ Sustainable · 📐 Relaxed Fit
- **Accordion sections**: Description · Size & Fit · Care Instructions · Delivery & Returns (open/close with + icon)

### Related Products
- "Complete the Look" section below
- 4-product grid, same card design

---

## PAGE 4 — OUR STORY (`/story`)

### Hero
- Full-width dark hero, 60vh
- Label: "Est. 2024 — India"
- Heading: "WE ARE EVOLON" in Bebas Neue
- Italic serif subline: "Born from movement. Built for life."

### Story Content
- 2-column alternating layout (image left / text right, then text left / image right)
- Section 1: "How It Started" — paragraph about the brand origin
- Section 2: "What We Stand For" — 3 values: Quality · Sustainability · Expression
- Section 3: "The Fabric of It All" — fabric sourcing and craft
- Each text block: Cormorant Garamond heading + DM Sans body text

### Values Grid
- 3 cards on dark background
- Each: icon + value name in Bebas Neue + short description

### Team / Founders (placeholder)
- "The People Behind EVOLON"
- 2–3 placeholder cards with name + role

---

## PAGE 5 — CONTACT (`/contact`)

### Layout: 2-column
- Left: Brand info + contact details
  - Logo
  - "Let's talk." heading (Cormorant Garamond italic)
  - Email: hello@evolonwear.com
  - Instagram, WhatsApp links
  - "We usually reply within 24 hours"
- Right: Contact form
  - Fields: Name · Email · Subject (dropdown: Order / Returns / Collaboration / General) · Message
  - Submit button: "Send Message →" gold styled
  - No backend needed — just UI, show success state on submit

---

## ANIMATIONS & INTERACTIONS

- **Fade-up on scroll**: all sections fade up as they enter viewport (IntersectionObserver)
- **Page transitions**: smooth opacity + translateY fade between routes
- **Hover states**: all cards lift slightly (translateY -4px), overlays fade in
- **Button hover**: gold sweep animation (::before pseudo-element slides across)
- **Custom cursor**: gold dot + ring, scales on hover
- **Marquee**: infinite smooth scroll
- **Hero watermark**: slow floating keyframe animation
- **Nav**: transparent on top, frosted glass on scroll

---

## PLACEHOLDER IMAGES

Use Unsplash photos for all placeholders. Suggested search terms per section:
- Hero: `fashion editorial man walking minimal`
- Men collection: `minimal menswear dark`
- Women collection: `editorial womenswear minimal`
- Hoodie product: `oversized hoodie lifestyle`
- Story page: `fashion atelier behind the scenes`

Use `https://images.unsplash.com/photo-[ID]?w=800&auto=format&fit=crop&q=80` format.

---

## MOBILE RESPONSIVENESS

- All grids collapse to 1 or 2 columns on mobile
- Nav collapses to hamburger (slide-in drawer from right)
- Hero: image becomes background with dark overlay, text full width
- Product detail: stacks vertically (gallery on top, info below)
- Touch-friendly tap targets (min 44px)
- Marquee, trust bar, footer all stack properly

---

## TECH NOTES FOR LOVABLE

- Use `react-router-dom` for all routing
- Use `@fontsource` or Google Fonts CDN for Bebas Neue, Cormorant Garamond, DM Sans
- Use Tailwind for layout/spacing, custom CSS variables for brand colors
- All color values must reference the CSS variables defined above
- No backend / no auth needed for now
- Cart: UI state only (React useState), no real checkout — Shopify to be connected later
- Filter on collections page: client-side using useState + array filter
- Animations: use Tailwind transitions + custom keyframes in tailwind.config.js

---

## FINAL NOTE

Every page must feel cohesive — same fonts, same colors, same spacing logic. The site should feel like a premium fashion brand's marketing site, not a generic e-commerce template. Bold typography, editorial photography, generous whitespace, and subtle gold accents throughout.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://evolon-wear.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3e1ffd76-7976-4ba5-910a-3f7d2ed4ddf3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
