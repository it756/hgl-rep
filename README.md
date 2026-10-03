# Riley's Pub & Grill + Swiss Brutalist Curated Shop

A digital experience for **Riley's Pub & Grill** (Lusaka, Zambia) paired with a **Swiss Brutalist Curated Fragrance & Lifestyle Monograph Store** inspired by the editorial "perf." design system.

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router, Server Actions, Server Components)
- **Styling**: Tailwind CSS, PostCSS, custom Swiss Brutalist tokens (0px radius, `#000000`/`#ffffff`/`#737373`, hairline borders `#cfc4c5`)
- **Typography**: `Hanken Grotesk` (Swiss grotesque headlines, body, brackets) + `Playfair Display` (editorial italic signature)
- **State & Animation**: Zustand (persistent cart store), Lenis (momentum smooth scroll), Sonner (minimalist toasts)
- **Backend & Database**: Supabase PostgreSQL (table reservations, order tracking, RLS policies)
- **Content Management**: Sanity Studio embedded at `/studio` for managing monographs, botanicals, and menus

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file modeled after `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Site Map & Routes

- `/`: Riley's Pub & Grill landing page with ambient hero, flacon strip, daily specials, menu preview, about manifesto, and table booking.
- `/menu`: Complete kitchen menu (Burgers, Fish & Chips, Grills), craft beers & wines, and handcrafted cocktails with category filters and search.
- `/reservations`: Interactive table reservation engine with real-time slot selection and instant confirmation.
- `/experiences`: Events calendar (Friday Sunset Live Sessions, Botanical Cocktail Masterclasses, Sunday Smokehouse Roasts).
- `/contact`: Direct Lusaka atelier address, operating hours, phone, and inquiry transmission form.
- `/shop`: Swiss Brutalist fragrance & lifestyle catalog matrix with filter pills, quick add, and editorial manifesto.
- `/shop/[slug]`: Monograph detail page featuring macro botanical specimen ingredient cutouts, olfactory notes, size selectors (`30ml`, `50ml`, `100ml`), and customer testimonials.
- `/shop/compare`: Chemical Proximity comparison matrix with animated accord match progress bars and quick-view popups.
- `/checkout`: Requisition dispatch checkout supporting delivery, pub takeout, and dine-in.
- `/studio`: Embedded Sanity CMS Studio.
