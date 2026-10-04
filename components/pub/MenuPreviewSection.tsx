"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { Plus } from "lucide-react";

interface DrinkProduct {
  id: string;
  priceFormatted: string;
  name: string;
  ingredients: string;
  category: "all" | "cocktail" | "bottle" | "beer";
  priceNumber: number;
  image: string;
}

export default function MenuPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "cocktail" | "bottle" | "beer"
  >("all");
  const { addItem } = useCartStore();

  const drinkItems: DrinkProduct[] = [
    {
      id: "drink-old-fashioned",
      priceFormatted: "ZMK 120 ....",
      name: "OLD FASHIONED",
      ingredients: "Whiskey, Orange and Angostura bitters",
      category: "cocktail",
      priceNumber: 120,
      image: "/images/drinks/old-fashioned.png",
    },
    {
      id: "drink-manhattan",
      priceFormatted: "ZMK 120 ....",
      name: "PERFECT MANHATTAN",
      ingredients: "Rye whiskey, Vermouth, Angostura bitters",
      category: "cocktail",
      priceNumber: 120,
      image: "/images/drinks/manhattan.png",
    },
    {
      id: "drink-negroni",
      priceFormatted: "ZMK 130 ....",
      name: "NEGRONI",
      ingredients: "Gin, Campari, Sweet Vermouth",
      category: "cocktail",
      priceNumber: 130,
      image: "/images/drinks/negroni.png",
    },
    {
      id: "drink-white-negroni",
      priceFormatted: "ZMK 240 ....",
      name: "WHITE NEGRONI",
      ingredients: "(double) Mezcal, Suze, Lillet Blanc",
      category: "cocktail",
      priceNumber: 240,
      image: "/images/drinks/white-negroni.png",
    },
    {
      id: "drink-aviation",
      priceFormatted: "ZMK 140 ....",
      name: "AVIATION ROYALE",
      ingredients: "Gin, Maraschino, Crème de Violette, Lemon",
      category: "cocktail",
      priceNumber: 140,
      image: "/images/drinks/aviation.png",
    },
    {
      id: "drink-mezcalita",
      priceFormatted: "ZMK 150 ....",
      name: "MEZCALITA SMOKE",
      ingredients: "Oaxacan Mezcal, Cointreau, Fresh Lime, Agave",
      category: "cocktail",
      priceNumber: 150,
      image: "/images/drinks/mezcalita.png",
    },
    {
      id: "drink-rosemary-gin",
      priceFormatted: "ZMK 140 ....",
      name: "ROSEMARY GIN FIZZ",
      ingredients: "Botanical Gin, Rosemary Sprig, Club Soda",
      category: "cocktail",
      priceNumber: 140,
      image: "/images/drinks/rosemary-gin.png",
    },
    {
      id: "drink-cosmopolitan",
      priceFormatted: "ZMK 160 ....",
      name: "COSMOPOLITAN ROSA",
      ingredients: "Vodka, Triple Sec, Cranberry, Fresh Lime",
      category: "cocktail",
      priceNumber: 160,
      image: "/images/drinks/cosmopolitan.png",
    },
    {
      id: "drink-whiskey-bottle",
      priceFormatted: "ZMK 650 ....",
      name: "RESERVE SINGLE MALT",
      ingredients: "12-Year Speyside Single Malt Scotch (750ml Bottle)",
      category: "bottle",
      priceNumber: 650,
      image: "/images/drinks/whiskey-bottle.png",
    },
    {
      id: "drink-gin-bottle",
      priceFormatted: "ZMK 450 ....",
      name: "ARTISAN LONDON GIN",
      ingredients:
        "Copper pot distilled with 12 wild botanicals (750ml Bottle)",
      category: "bottle",
      priceNumber: 450,
      image: "/images/drinks/gin-bottle.png",
    },
    {
      id: "drink-tequila-bottle",
      priceFormatted: "ZMK 550 ....",
      name: "REPOSADO TEQUILA",
      ingredients: "100% Blue Agave, Aged in French Oak (750ml Bottle)",
      category: "bottle",
      priceNumber: 550,
      image: "/images/drinks/tequila-bottle.png",
    },
    {
      id: "drink-rum-bottle",
      priceFormatted: "ZMK 480 ....",
      name: "AGED SPICED RUM",
      ingredients: "Bourbon barrel aged with Madagascar vanilla (750ml Bottle)",
      category: "bottle",
      priceNumber: 480,
      image: "/images/drinks/rum-bottle.png",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? drinkItems
      : drinkItems.filter((item) => item.category === activeCategory);

  const handleQuickAdd = (item: DrinkProduct) => {
    addItem({
      productId: item.id,
      slug: item.id,
      title: item.name,
      price: item.priceNumber,
      image: item.image,
      quantity: 1,
    });
    toast.success(`Added ${item.name} to cart.`);
  };

  return (
    <section className="relative z-40 w-full bg-[#f6f2ea] px-4 sm:px-8 lg:px-margin py-space-xl border-t border-[#d5cbbf]">
      {/* Taxonomy Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-space-lg mb-space-lg hairline-b gap-space-md">
        <div>
          <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-1">
            [Gastronomic Index • Kitchen &amp; Pours]
          </span>
          <h2 className="font-headline-lg text-3xl text-primary tracking-tight font-medium uppercase font-sans">
            Delicious Pub Food &amp; Drinks
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-space-xs">
          {[
            { id: "all", label: "[All Offerings]" },
            { id: "cocktail", label: "[Signature Cocktails]" },
            { id: "bottle", label: "[Reserve Bottles (750ml)]" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`filter-pill px-space-md py-1.5 font-action-label text-action-label uppercase tracking-wider rounded-none transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-on-primary"
                  : "bg-[#ede6db] text-secondary hover:text-primary"
              }`}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Column Clean Studio Grid matching the reference image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 mb-space-xl">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col justify-between cursor-pointer"
          >
            {/* Studio Square Image Container */}
            <div className="relative aspect-square w-full bg-[#ede6db] overflow-hidden flex items-center justify-center p-6 border border-[#dcd3c5] transition-all duration-300 group-hover:bg-[#e4dbcc]">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain filter contrast-[1.05] brightness-95 group-hover:scale-108 transition-transform duration-500 select-none"
                />
              </div>

              {/* Quick Add Button */}
              <button
                onClick={() => handleQuickAdd(item)}
                className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-on-primary p-2 shadow-md hover:bg-[#43342e] flex items-center justify-center"
                type="button"
                aria-label={`Add ${item.name} to order`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Typography line: $12 .... OLD FASHIONED \n Whiskey, Orange and Angostura bitters */}
            <div className="pt-3 flex flex-col">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-extrabold text-[14px] sm:text-[15px] text-[#2c221e] font-sans">
                  {item.priceFormatted}
                </span>
                <span className="font-extrabold text-[14px] sm:text-[15px] tracking-wide text-[#2c221e] font-sans uppercase">
                  {item.name}
                </span>
              </div>
              <p className="font-body-sm text-xs sm:text-[13px] text-[#6e6059] mt-0.5 leading-snug">
                {item.ingredients}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Wide Image Showcase Banner with Larger Explore Text */}
      <div className="relative w-full rounded-none overflow-hidden border border-[#d5cbbf] mt-8 shadow-xl group">
        {/* Wide Ambient Bar Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/wide-bar-counter.jpg"
            alt="Riley's Bar and Kitchen Atmosphere"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <span className="font-meta-bracket text-xs sm:text-sm tracking-widest text-pub-amber uppercase block mb-3 font-semibold">
              [COMPLETE GASTRONOMY &amp; POURS ROSTER]
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans leading-tight">
              EXPLORE OUR COMPLETE KITCHEN CATALOG INCLUDING OPEN FLAME T-BONE
              STEAKS, PERI-PERI POULTRY, AND CELLAR VINTAGE RESERVES.
            </h3>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-[0.18em] px-8 sm:px-10 py-4 sm:py-5 hover:bg-pub-amber hover:text-black active:scale-[0.98] transition-all duration-200 shadow-2xl"
            >
              <span>VIEW FULL MENU</span>
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
