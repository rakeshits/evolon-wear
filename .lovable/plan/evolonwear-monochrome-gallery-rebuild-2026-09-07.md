# EVOLONWEAR monochrome gallery rebuild

## Goal
Rebuild the full site as a high-contrast, gallery-style streetwear experience while preserving the existing routes and written content. Remove the current ivory/gold/editorial-serif look, eliminate cart behavior, and prepare every commerce action for new Shopify URLs supplied later.

## Visual system
- Replace the global palette with semantic tokens for Ink `#0d0d0d`, Canvas `#ffffff`, Plaster `#ececec`, Accent `#ff2e00`, Ash `#757575`, and Fog `#d6d6d6`.
- Use a tight lowercase grotesque for headings/navigation and JetBrains Mono for prices, product codes, labels, and counts. Load fonts through the document head.
- Standardize 8px radii for images, cards, controls, and buttons; reserve 24px pill treatment for badges.
- Remove decorative shadows, gold treatments, serif styling, oversized tracking, custom cursor effects, stars, quote icons, and ornamental card treatments.
- Establish a 1440px content width, 96–120px section rhythm, responsive headline sizing, subtle reveal motion, and reduced-motion support.

## Shared site frame
- Replace the current marquee/header with a 36px rotating announcement strip and a 56px sticky white navigation bar.
- Keep Home, Collections, Lookbook, and Our Story routes; use lowercase labels and an accent underline only on the active route.
- Add search and an external “shop now” action on desktop and mobile; external commerce links open in a new tab.
- Rebuild the mobile menu in the same monochrome system.
- Restyle the slower shipping/returns/quality marquee above a black footer with mono column labels and restrained white/ash links.
- Keep Contact accessible from the footer and restyle it consistently because the route already exists.

## Home page
- Create and use a high-contrast urban streetwear photograph as a full-bleed hero background.
- Place the accent “new drop” pill, large lowercase “wear what moves you” headline, existing supporting copy, and external collection CTA at bottom-left.
- Reformat the existing manifesto as an editorial text block with `manifesto — 01`, constrained body copy, and an unboxed mono statistics row.
- Replace featured products with a strict four-column gallery grid: plaster cards, padded object-first imagery, compact badge, name, mono category/code, and price.
- Rebuild “new vibes” as a full-bleed photographic banner with a bottom ink fade and Explore action.
- Convert testimonials into a full-width plaster editorial strip with three text columns and mono attribution only.
- Keep remaining existing home content where it supports the new structure, but remove duplicate or cart-oriented calls to action.

## Collections and product pages
- Preserve the `/collections` filters and product count, restyled as compact gallery controls below the 56px navigation.
- Rework category imagery and the full product grid into the same monochrome gallery language.
- Keep every product card routed to `/product/$id` for discovery.
- Redesign `/product/$id` around a plaster-backed image gallery and concise product information.
- Preserve color/size selection and informational accordions, but remove simulated Add to Bag, wishlist, review stars, and cart states.
- Replace the purchase action with a single external Shopify CTA; until exact links arrive, keep the destination in one explicit configuration rather than inventing URLs.
- Retain related product links to internal product detail pages.

## Lookbook, story, and contact
- Restyle `/blog` as an image-led monochrome lookbook grid while retaining all current article names, categories, and images/content.
- Restyle `/story` into a gallery/editorial narrative while preserving the chapters, values, team, and copy.
- Restyle `/contact` to match the system while retaining its current content and form behavior.
- Ensure every route has unique title, description, Open Graph fields, `og:type`, and Twitter card metadata.

## Asset and interaction details
- Generate cohesive urban streetwear images for the home hero and “new vibes” banner, using concrete/plain-wall settings, natural light, gritty contrast, and minimal styling.
- Keep existing route-safe internal navigation and lazy-load non-critical imagery.
- Centralize pending Shopify store/product URLs in one module so they can be replaced without touching layouts.
- Use the existing design-system Button for all actionable controls and links where applicable.

## Validation
- Verify Home, Collections, Lookbook, Our Story, Contact, and multiple product routes at desktop and mobile sizes.
- Confirm filters, mobile navigation, image gallery, selectors, accordions, internal product links, and external-link behavior.
- Check text fit, contrast, accent usage, sticky offsets, page metadata, console errors, and that no cart/checkout simulation remains.
