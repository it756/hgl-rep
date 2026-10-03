"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, Product } from "@/lib/data/mock-data";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import {
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import FlaconStrip from "@/components/shop/FlaconStrip";

export default function ShopCatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const { addItem } = useCartStore();

  const filterCategories = [
    { id: "all", label: "[All Formulations]" },
    { id: "unisex", label: "[Unisex]" },
    { id: "woody-amber", label: "[Woody / Amber]" },
    { id: "floral-pure", label: "[Floral / Pure]" },
    { id: "raw-resinoids", label: "[Raw Resinoids]" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
      toast("Removed from curated bookmarks");
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
      toast.success("Bookmarked in personal archive");
    }
  };

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const primarySize = product.sizes[0] || {
      size: 50,
      price: product.basePrice,
    };
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      size: primarySize.size,
      price: primarySize.price,
      image: product.heroImage,
      quantity: 1,
    });
    toast.success(`Quick Added: ${product.title} (${primarySize.size}ml)`);
  };

  return (
    <div className="w-full bg-surface-container-lowest min-h-screen pt-20">
      {/* 1. NEW ARRIVALS HORIZONTAL FLACON STRIP */}
      <FlaconStrip title="New Arrivals" edition="[Series 2025.04]" />

      {/* 2. SPLIT EDITORIAL SHOWCASE BANNERS */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] lg:min-h-[580px]">
          {/* Left Banner: Special Offer */}
          <Link
            className="group relative flex flex-col justify-between p-6 sm:p-space-margin overflow-hidden bg-surface-container-high transition-transform duration-700"
            href="/shop/cosmic-intense"
          >
            {/* Visual Backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKhGqhlBlciSMZZtBiltmy0UfBrGAkMOjKR3NdI0jXt1621HXpQwXkAQJdV3OOfw0HFBgllDGIFKvan59uG3gC98O63hsyelyj4rwTZwn5gkd2YB7w3cUTWTa-O3VsIQkuCZ-2fIB7J1VhO-6tEquERoQCn2gTYSLKmxkYrbb2YOc30YQs2OMYROjT5OnF1CIhjxFwi0Agfex-BxfuK8mAOTWHU6gWZFKQNvkBQVIo7Ep0EQniIi9_')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/40" />

            {/* Upper Banner Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm text-on-primary">
              <span className="font-action-label text-action-label uppercase tracking-widest bg-primary/40 backdrop-blur-sm px-space-sm py-1">
                Special Offer
              </span>
              <span className="font-meta-bracket text-meta-bracket tracking-wider text-surface-container-highest uppercase">
                [Code: OUD40]
              </span>
            </div>

            {/* Lower Banner Caption */}
            <div className="relative z-10 max-w-md pt-space-xl">
              <p className="font-body-lg text-body-lg text-on-primary font-medium tracking-tight mb-space-sm leading-relaxed drop-shadow-sm">
                Up to 40% off — discover this season’s curated extractions:
                fresh aquatic, woody amber &amp; smoky oud.
              </p>
              <div className="inline-flex items-center gap-space-xs font-action-label text-action-label uppercase tracking-widest text-on-primary border-b border-on-primary/60 pb-1 group-hover:border-on-primary group-hover:translate-x-1 transition-all">
                <span>Explore Selections</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Right Banner: Bestsellers */}
          <Link
            className="group relative flex flex-col justify-between p-6 sm:p-space-margin overflow-hidden bg-primary transition-transform duration-700"
            href="/shop/cosmic-intense"
          >
            {/* Visual Backdrop */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYkxBVjkW_yv3t0ZIhySpxUDWgpBxhPgl1LkfccIXswsHYODrBZ6RoQtW7t3ygINt25c-2mj5Yl9ZvYWeswXPIRaf-8xlV0t0FlAf0ndpSEcr8RhDssMFpicFdfYEq5OqExXSDqpNIOHoYmdqhK63czFj6EpqJ8yY3ZHcZs5xvaaUX7L_mmaNioka_thQQc7GHaPjpQSJNa2GpzXoCLtpYNtupRi80PliWhAb7MUDms0CtZ5B4BHAb')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

            {/* Upper Banner Content */}
            <div className="relative z-10 flex items-center justify-between text-on-primary">
              <span className="font-action-label text-action-label uppercase tracking-widest bg-primary/40 backdrop-blur-sm px-space-sm py-1">
                Bestsellers
              </span>
              <span className="font-meta-bracket text-meta-bracket tracking-wider text-surface-container-highest uppercase">
                [Edition 1]
              </span>
            </div>

            {/* Lower Banner Caption */}
            <div className="relative z-10 max-w-md self-end text-right pt-space-xl">
              <h3 className="font-display-hero text-2xl lg:text-3xl text-on-primary mb-space-xs tracking-tight font-light">
                Valentino Uomo Born In Roma
              </h3>
              <p className="font-body-md text-body-md text-surface-container-highest mb-space-sm leading-snug drop-shadow-sm">
                The scents our customers return to most — refined,
                architectural, and always in sovereign demand.
              </p>
              <div className="inline-flex items-center gap-space-xs font-action-label text-action-label uppercase tracking-widest text-on-primary border-b border-on-primary/60 pb-1 group-hover:border-on-primary group-hover:-translate-x-1 transition-all">
                <span className="font-action-label">←</span>
                <span>View Archival Icons</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. CURATED CATALOG MATRIX WITH SWISS TAXONOMY */}
      <section className="w-full px-4 sm:px-8 lg:px-margin py-space-xl">
        {/* Section Taxonomy Bar */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-space-lg mb-space-lg hairline-b gap-space-md">
          <div>
            <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-1">
              [Taxonomy • Full Archive]
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-medium">
              Curated Formulations
            </h2>
          </div>

          {/* Swiss Category Pill Filter Bar */}
          <div
            className="flex flex-wrap items-center gap-space-xs"
            id="filter-container"
          >
            {filterCategories.map((pill) => (
              <button
                key={pill.id}
                onClick={() => setActiveCategory(pill.id)}
                className={`filter-pill px-space-md py-1.5 font-action-label text-action-label uppercase tracking-wider rounded-none transition-colors ${
                  activeCategory === pill.id
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-secondary hover:text-primary"
                }`}
                type="button"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Column Editorial Grid Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {filteredProducts.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-surface-container-lowest p-space-md hairline-border transition-all duration-300 hover:bg-surface-container-low"
              >
                <div className="flex justify-between items-start mb-space-sm">
                  <span className="font-meta-bracket text-meta-bracket text-secondary">
                    {item.tag || "[Extract • 01]"}
                  </span>
                  <button
                    onClick={(e) => toggleBookmark(item.id, e)}
                    className="text-secondary hover:text-primary transition-colors p-1"
                    title="Bookmark"
                    type="button"
                  >
                    {isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-primary" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <Link
                  className="h-64 flex items-center justify-center p-space-md relative overflow-hidden"
                  href={`/shop/${item.slug}`}
                >
                  <img
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 select-none"
                    src={item.heroImage}
                    alt={item.imageAlt || item.title}
                  />
                </Link>

                <div className="pt-space-md hairline-t">
                  <div className="flex items-baseline justify-between mb-1">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="font-headline-sm text-headline-sm text-primary group-hover:opacity-75 transition-opacity"
                    >
                      {item.title}
                    </Link>
                    <span className="font-price-tag text-price-tag text-on-surface font-semibold">
                      ZMK {item.basePrice.toFixed(0)}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-secondary mb-space-sm line-clamp-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 mb-space-md">
                    {item.sizes.map((s) => (
                      <span
                        key={s.size}
                        className="font-meta-bracket text-[10px] uppercase bg-surface-container-low px-1.5 py-0.5 text-secondary"
                      >
                        {s.size}ml
                      </span>
                    ))}
                    <span className="font-meta-bracket text-[10px] uppercase text-secondary">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(item, e)}
                    className="w-full bg-primary text-on-primary py-3 font-action-label text-action-label uppercase tracking-widest hover:bg-secondary transition-colors"
                    type="button"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CURATORIAL PHILOSOPHY & FEEDBACK THREE-COLUMN STRIP */}
      <section className="w-full bg-surface-container-low px-4 sm:px-8 lg:px-margin py-space-xl hairline-b hairline-t">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Philosophy Statement (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-space-lg">
            <div>
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-space-sm">
                [Olfactory Manifesto]
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight font-medium mb-space-md leading-tight">
                We curate volatile botanical architectures and pure laboratory
                essences without compromise.
              </h3>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed mb-space-md">
                Every flacon selected in the monograph archive is sourced under
                direct supervision of independent European noses. Unfiltered,
                macerated in small glass vessels, unhurried by seasonal industry
                quotas.
              </p>
            </div>
            <div className="pt-space-md">
              <Link
                className="inline-flex items-center gap-space-xs font-action-label text-action-label uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
                href="/shop/cosmic-intense"
              >
                <span>Read Formulation Protocol</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Ingredient Specimen Still Life (Col 6-8) */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-space-md hairline-border flex flex-col justify-between">
            <div>
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-space-xs">
                [Specimen Extract • 09]
              </span>
              <span className="font-headline-sm text-headline-sm text-primary block mb-space-sm">
                Raw Resinoids
              </span>
            </div>
            <div className="h-48 w-full flex items-center justify-center my-space-sm">
              <img
                className="max-h-full max-w-full object-contain"
                alt="Tactile raw golden amber resin chunks and dark fragrant vanilla bean pods"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlt5Rr_IMaySHjAZtPxmybr8Un5qNdKQHhtsSOpQM5HaCXJzPZrNF7DL--QghtlfPsc7cnsp_q6oeUdGbeM2hK8D_VYLrQ6_eDfSsAKb2FdYpFf-BmL3ykcqdH1Im9zZ5eybIdtSFkEslIqV5Ud-IRWCiXme-OnqC1d4hFcAVr_SI-v_5dGbhE_IXxqwP0oD244hup_vcUBFPiqti4HnjQql2qWO6kKfKF_SfV2F0lXRi08ujSVd9r"
              />
            </div>
            <div className="pt-space-xs">
              <p className="font-body-sm text-body-sm text-secondary">
                Cistus ladaniferus sourced from Spanish hillsides. Cold-pressed
                directly into jojoba carrier base.
              </p>
            </div>
          </div>

          {/* Editorial Notes / What Customers Say (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-space-md">
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <span className="font-meta-bracket text-meta-bracket text-secondary uppercase">
                  [Customers Say]
                </span>
                <span className="font-body-sm text-body-sm text-secondary">
                  Archive Feed
                </span>
              </div>
              {/* Note 1 */}
              <div className="mb-space-lg">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-1">
                  &ldquo;Granada Nuit wears like a heavy velvet cloak. The
                  sillage lingers in wool coats for over four days. Completely
                  singular.&rdquo;
                </p>
                <span className="font-body-sm text-body-sm text-secondary block">
                  Posted 2 weeks ago — Vivienne L., Paris
                </span>
              </div>
              {/* Note 2 */}
              <div className="mb-space-lg">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-1">
                  &ldquo;The brutalist flacon design is pure sculpture on my
                  desk. Smells clinical yet ancient at the same exact
                  time.&rdquo;
                </p>
                <span className="font-body-sm text-body-sm text-secondary block">
                  Posted 1 month ago — Kenji T., Kyoto
                </span>
              </div>
            </div>
            <div className="pt-space-md hairline-t flex items-center justify-between">
              <span className="font-meta-bracket text-meta-bracket text-secondary">
                [Verified Patron Notes]
              </span>
              <Link
                className="font-action-label text-action-label uppercase tracking-widest text-primary hover:opacity-75 transition-opacity"
                href="/shop/cosmic-intense"
              >
                View All (184) →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
