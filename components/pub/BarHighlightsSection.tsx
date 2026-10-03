"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { Plus, ArrowUpRight, Wine, Sparkles } from "lucide-react";

interface DrinkItem {
  id: string;
  name: string;
  category: "cocktail" | "bottle" | "beer";
  categoryLabel: string;
  priceFormatted: string;
  priceNumber: number;
  ingredients: string;
  image: string;
  slug: string;
  badge?: string;
}

export default function BarHighlightsSection() {
  const [activeTab, setActiveTab] = useState<
    "all" | "cocktail" | "bottle" | "beer"
  >("all");
  const { addItem } = useCartStore();

  const drinks: DrinkItem[] = [
    {
      id: "drk-old-fashioned",
      name: "OLD FASHIONED",
      category: "cocktail",
      categoryLabel: "[Classic Bourbon]",
      priceFormatted: "ZMK 120",
      priceNumber: 120,
      ingredients: "Whiskey, Orange and Angostura bitters",
      image: "/images/drinks/old-fashioned.jpg",
      slug: "old-fashioned",
      badge: "Signature",
    },
    {
      id: "drk-manhattan",
      name: "PERFECT MANHATTAN",
      category: "cocktail",
      categoryLabel: "[Rye & Vermouth]",
      priceFormatted: "ZMK 120",
      priceNumber: 120,
      ingredients: "Rye whiskey, Vermouth, Angostura bitters",
      image: "/images/drinks/manhattan.jpg",
      slug: "perfect-manhattan",
    },
    {
      id: "drk-negroni",
      name: "NEGRONI",
      category: "cocktail",
      categoryLabel: "[Gin & Bitter]",
      priceFormatted: "ZMK 130",
      priceNumber: 130,
      ingredients: "Gin, Campari, Sweet Vermouth",
      image: "/images/drinks/negroni.jpg",
      slug: "negroni",
      badge: "Popular",
    },
    {
      id: "drk-white-negroni",
      name: "WHITE NEGRONI",
      category: "cocktail",
      categoryLabel: "[Mezcal & Gentian]",
      priceFormatted: "ZMK 240",
      priceNumber: 240,
      ingredients: "(double) Mezcal, Suze, Lillet Blanc",
      image: "/images/drinks/white-negroni.jpg",
      slug: "white-negroni",
    },
    {
      id: "drk-aviation",
      name: "AVIATION ROYALE",
      category: "cocktail",
      categoryLabel: "[Gin & Violette]",
      priceFormatted: "ZMK 140",
      priceNumber: 140,
      ingredients: "Gin, Maraschino, Crème de Violette, Lemon",
      image: "/images/drinks/aviation.jpg",
      slug: "aviation-royale",
    },
    {
      id: "drk-mezcalita",
      name: "MEZCALITA SMOKE",
      category: "cocktail",
      categoryLabel: "[Charred Agave]",
      priceFormatted: "ZMK 150",
      priceNumber: 150,
      ingredients: "Oaxacan Mezcal, Cointreau, Fresh Lime, Agave",
      image: "/images/drinks/mezcalita.jpg",
      slug: "mezcalita-smoke",
    },
    {
      id: "drk-rosemary-gin",
      name: "ROSEMARY GIN FIZZ",
      category: "cocktail",
      categoryLabel: "[Gin & Botanicals]",
      priceFormatted: "ZMK 140",
      priceNumber: 140,
      ingredients: "Botanical Gin, Rosemary Sprig, Club Soda",
      image: "/images/drinks/rosemary-gin.jpg",
      slug: "rosemary-gin-fizz",
    },
    {
      id: "drk-cosmopolitan",
      name: "COSMOPOLITAN ROSA",
      category: "cocktail",
      categoryLabel: "[Vodka & Cranberry]",
      priceFormatted: "ZMK 160",
      priceNumber: 160,
      ingredients: "Vodka, Triple Sec, Cranberry, Fresh Lime",
      image: "/images/drinks/cosmopolitan.jpg",
      slug: "cosmopolitan-rosa",
    },
    {
      id: "drk-whiskey-bottle",
      name: "RESERVE SINGLE MALT",
      category: "bottle",
      categoryLabel: "[750ml Bottle]",
      priceFormatted: "ZMK 650",
      priceNumber: 650,
      ingredients: "12-Year Speyside Single Malt Scotch (750ml Bottle)",
      image: "/images/drinks/whiskey-bottle.jpg",
      slug: "reserve-single-malt",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-gin-bottle",
      name: "ARTISAN LONDON GIN",
      category: "bottle",
      categoryLabel: "[750ml Bottle]",
      priceFormatted: "ZMK 450",
      priceNumber: 450,
      ingredients:
        "Copper pot distilled with 12 wild botanicals (750ml Bottle)",
      image: "/images/drinks/gin-bottle.jpg",
      slug: "artisan-london-gin",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-tequila-bottle",
      name: "REPOSADO TEQUILA",
      category: "bottle",
      categoryLabel: "[750ml Bottle]",
      priceFormatted: "ZMK 550",
      priceNumber: 550,
      ingredients: "100% Blue Agave, Aged in French Oak (750ml Bottle)",
      image: "/images/drinks/tequila-bottle.jpg",
      slug: "reposado-tequila",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-rum-bottle",
      name: "AGED SPICED RUM",
      category: "bottle",
      categoryLabel: "[750ml Bottle]",
      priceFormatted: "ZMK 480",
      priceNumber: 480,
      ingredients: "Bourbon barrel aged with Madagascar vanilla (750ml Bottle)",
      image: "/images/drinks/rum-bottle.jpg",
      slug: "aged-spiced-rum",
      badge: "Bottle Reserve",
    },
  ];

  const filteredDrinks =
    activeTab === "all"
      ? drinks
      : drinks.filter((d) => d.category === activeTab);

  const handleQuickAdd = (drink: DrinkItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: drink.id,
      slug: drink.slug,
      title: drink.name,
      price: drink.priceNumber,
      image: drink.image,
      quantity: 1,
    });
    toast.success(`Added ${drink.name} (${drink.priceFormatted}) to tray`);
  };

  return (
    <section
      id="bar-highlights"
      className="relative z-30 w-full bg-[#fbfaf8] text-[#1a1c1c] pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-margin shadow-[0_-30px_70px_rgba(0,0,0,0.18)] border-t border-[#cfc4c5]/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 mb-10 sm:mb-14 border-b border-[#cfc4c5]/40 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase">
                [Riley&apos;s Curated Pours]
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-pub-amber" />
              <span className="font-meta-bracket text-meta-bracket text-primary font-semibold">
                Available at Bar &amp; Delivery
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#1a1c1c] font-sans">
              BAR HIGHLIGHTS
            </h2>
            <p className="font-body-md text-secondary mt-2 max-w-xl">
              Handcrafted cocktails, small-batch spirit pours, and full bottles
              delivered with the same hospitality standard whether seated at our
              bar or answering your front door.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "[All Pours]" },
              { id: "cocktail", label: "[Cocktails]" },
              { id: "bottle", label: "[Reserve Bottles (750ml)]" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                type="button"
                className={`px-4 py-2 font-action-label text-xs uppercase tracking-wider rounded-none transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-on-primary"
                    : "bg-[#eeebe4] text-secondary hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Product Grid Matching the Attached Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredDrinks.map((drink, idx) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
              className="group flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Studio Background */}
              <div className="relative aspect-square w-full bg-[#f3efe9] overflow-hidden flex items-center justify-center p-6 border border-[#e5dfd5] transition-all duration-500 group-hover:bg-[#ebe6dc] group-hover:shadow-md">
                {drink.badge && (
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="font-meta-bracket text-[10px] uppercase tracking-wider bg-black/80 text-white px-2 py-0.5 backdrop-blur-sm">
                      {drink.badge}
                    </span>
                  </div>
                )}

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain filter contrast-[1.04] brightness-95 group-hover:scale-108 transition-transform duration-500 select-none"
                  />
                </div>

                {/* Quick Add Overlay on Hover */}
                <button
                  onClick={(e) => handleQuickAdd(drink, e)}
                  type="button"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white p-2 shadow-lg hover:bg-secondary flex items-center justify-center"
                  aria-label={`Add ${drink.name} to order`}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Typography Structure: $Price .... TITLE \n Ingredients */}
              <div className="pt-3.5 flex flex-col">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-extrabold text-[15px] sm:text-[16px] text-[#1a1c1c] font-sans">
                    {drink.priceFormatted}
                  </span>
                  <span className="text-secondary font-mono tracking-tighter text-xs">
                    ....
                  </span>
                  <span className="font-extrabold text-[15px] sm:text-[16px] tracking-wide text-[#1a1c1c] font-sans uppercase">
                    {drink.name}
                  </span>
                </div>

                <p className="font-body-sm text-xs sm:text-[13px] text-[#6e6865] mt-1 leading-snug">
                  {drink.ingredients}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Menu & Order CTA */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#cfc4c5]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-body-md text-secondary text-center sm:text-left">
            Looking for kitchen entrees, flame-kissed grills, or custom tasting
            flights?
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-primary text-white font-action-label text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-secondary transition-colors"
            >
              <span>Explore Full Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reservations"
              className="inline-block border border-primary text-primary font-action-label text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-primary hover:text-white transition-colors"
            >
              Book Bar Seats
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
