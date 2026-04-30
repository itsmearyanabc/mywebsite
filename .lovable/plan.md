# awsmd.com Clone — TanStack Start

A pixel-perfect rebuild of awsmd.com (creative agency site) as a multi-route TanStack Start app. The original is built in Next.js, so we'll adapt the routing and animation libraries to fit our stack while preserving the exact visual look, motion, and feel.

## Stack Adaptation

| Original spec | Our adaptation |
|---|---|
| Next.js 14 App Router | TanStack Start (file-based routes in `src/routes/`) |
| Framer Motion | `motion` (the new Framer Motion package — same API) |
| Swiper.js | Embla Carousel (smaller, edge-friendly, same UX) |
| Tailwind CSS | Tailwind v4 (already configured) |
| TypeScript | TypeScript (already configured) |

## Visual Identity (extracted from awsmd.com)

- Light theme: lavender/lilac gradient washes (`#E8E4FF` → `#FFFFFF`), white cards, near-black text
- Massive serif/sans display headlines ("WE CREATE *Awesome* DESIGN") — uppercase, mixed weight, italic accent words
- Custom cursor, scroll-triggered reveals, marquee strips, pinned sticky sections, image hover scales
- Dark "Smart Development" section with phone mockups
- Sticky right-side mini nav rail
- Top floating pill navbar + "Become a Client" CTA + language switcher + burger menu

## Routes

```text
src/routes/
  __root.tsx          → shared shell (Header, Footer, cursor, page transitions)
  index.tsx           → /         home (hero + brief excerpts of each section)
  services.tsx        → /services full services grid
  about.tsx           → /about    "We Strive to Innovate", stats, clients logos
  cases.tsx           → /cases    portfolio grid
  reviews.tsx         → /reviews  testimonials carousel
  contact.tsx         → /contact  "Become a Client" form
```

Each route gets its own `head()` with unique `title`, `description`, `og:title`, `og:description` (placeholders for now, ready for your real copy).

## Components

```text
src/components/
  layout/
    Header.tsx           floating pill nav, logo, lang, burger
    Footer.tsx           multi-column footer with marquee
    SideNav.tsx          right-side fixed section rail
    PageTransition.tsx   route fade/slide wrapper
    CustomCursor.tsx     blended cursor follower
  home/
    HeroSection.tsx      "WE CREATE Awesome DESIGN" + video player tile
    MarqueeStrip.tsx     "Data driven · user focused · value based" loop
    ServicesSection.tsx  3 stacked cards with hover image + tech tags
    AboutSection.tsx     "We Strive to Innovate" + 4 belief cards
    StatsSection.tsx     +300 / 100K / +10 / +280 counters
    ClientsMarquee.tsx   logo strip (uber, oracle, intel, etc.)
    SmartDevSection.tsx  dark section, twin phone mockups, screen carousels
    PortfolioSection.tsx grid of case thumbnails with hover reveal
    CasesSection.tsx     "Latest Cases" 3-up
    ReviewsSection.tsx   testimonials with avatars + Clutch badge
    CTASection.tsx       big "Become a Client" closer
  ui/                    (shadcn components, already present)
```

## Animations & Interactions

All driven by `motion` + IntersectionObserver:

- Hero: word-by-word reveal, italic "Awesome" floats in last
- Marquee: infinite horizontal loop (CSS `@keyframes` + pause-on-hover)
- Service cards: image fades in on hover, tags slide up
- Stats: number count-up on enter
- Smart Dev phones: parallax on scroll, screens auto-cycle via Embla
- Cases: tilt + scale on hover, image zoom
- Reviews: Embla carousel with custom progress bar
- Page transitions: fade + 8px slide on route change
- Custom cursor: spring-followed dot, scales on hoverable elements
- Sticky right nav highlights current section via scroll spy

## Content Strategy

You said you'll provide content later, so:

- **Text**: realistic placeholder copy mirroring awsmd's tone (we'll mark them with `// TODO: replace`)
- **Images**: Unsplash placeholders sized to match originals (hero video → static lavender hero image with play overlay; portfolio → muted abstract Unsplash shots)
- **Logos**: simple text logos as stand-ins for Uber/Oracle/Intel/etc.
- All content lives in a single `src/content/site.ts` file — easy to swap when you bring real copy/images

## Dependencies to Install

- `motion` — animations
- `embla-carousel-react` + `embla-carousel-autoplay` — sliders
- `@number-flow/react` — animated stat counters
- `lucide-react` (already installed) — icons

## Out of Scope (this round)

- Case study detail pages (`/cases/syfter`, etc.) — listed in answers as not selected
- Blog
- Multi-language (the `EN` switcher will be visual-only)
- Real video player (placeholder still + play button)
- Backend / form submission (contact form will be UI-only with a toast)

## Build Order

1. Install deps + global styles (fonts, color tokens for lavender palette, cursor base)
2. Root shell: Header, Footer, SideNav, CustomCursor, PageTransition
3. Content data file with all copy + image URLs
4. Home route with all section components stubbed
5. Each section component built to match the original visually
6. Section routes (`/services`, `/about`, etc.) reusing the same components in expanded form
7. Per-route `head()` metadata
8. Pass on responsive breakpoints (mobile burger menu, stacked sections)
9. Polish animations and scroll triggers