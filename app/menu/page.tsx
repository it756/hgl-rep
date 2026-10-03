"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { Plus, Search, ArrowUpRight } from "lucide-react";

interface MenuItemFormatted {
  id: string;
  name: string;
  priceFormatted: string;
  priceNumber: number;
  ingredients: string;
  category: "all" | "cocktails" | "bottles" | "kitchen" | "beers-wine";
  categoryLabel: string;
  image: string;
  badge?: string;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { addItem } = useCartStore();

  const categories = [
    { id: "all", label: "[All Offerings]" },
    { id: "cocktails", label: "[Handcrafted Cocktails]" },
    { id: "bottles", label: "[Reserve Bottles (750ml)]" },
    { id: "kitchen", label: "[Kitchen & Grills]" },
    { id: "beers-wine", label: "[Beer & Wine Pours]" },
  ];

  const menuCatalog: MenuItemFormatted[] = [
    // --- Cocktails matching the attached format ---
    {
      id: "drk-old-fashioned",
      priceFormatted: "ZMK 120 ....",
      name: "OLD FASHIONED",
      ingredients: "Whiskey, Orange and Angostura bitters",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 120,
      image: "/images/drinks/old-fashioned.png",
      badge: "Signature",
    },
    {
      id: "drk-manhattan",
      priceFormatted: "ZMK 120 ....",
      name: "PERFECT MANHATTAN",
      ingredients: "Rye whiskey, Vermouth, Angostura bitters",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 120,
      image: "/images/drinks/manhattan.png",
    },
    {
      id: "drk-negroni",
      priceFormatted: "ZMK 130 ....",
      name: "NEGRONI",
      ingredients: "Gin, Campari, Sweet Vermouth",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 130,
      image: "/images/drinks/negroni.png",
      badge: "Popular",
    },
    {
      id: "drk-white-negroni",
      priceFormatted: "ZMK 240 ....",
      name: "WHITE NEGRONI",
      ingredients: "(double) Mezcal, Suze, Lillet Blanc",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 240,
      image: "/images/drinks/white-negroni.png",
    },
    {
      id: "drk-aviation",
      priceFormatted: "ZMK 140 ....",
      name: "AVIATION ROYALE",
      ingredients: "Gin, Maraschino, Crème de Violette, Lemon",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 140,
      image: "/images/drinks/aviation.png",
    },
    {
      id: "drk-mezcalita",
      priceFormatted: "ZMK 150 ....",
      name: "MEZCALITA SMOKE",
      ingredients: "Oaxacan Mezcal, Cointreau, Fresh Lime, Agave",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 150,
      image: "/images/drinks/mezcalita.png",
    },
    {
      id: "drk-rosemary-gin",
      priceFormatted: "ZMK 140 ....",
      name: "ROSEMARY GIN FIZZ",
      ingredients: "Botanical Gin, Rosemary Sprig, Club Soda",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 140,
      image: "/images/drinks/rosemary-gin.png",
    },
    {
      id: "drk-cosmopolitan",
      priceFormatted: "ZMK 160 ....",
      name: "COSMOPOLITAN ROSA",
      ingredients: "Vodka, Triple Sec, Cranberry, Fresh Lime",
      category: "cocktails",
      categoryLabel: "[Cocktails]",
      priceNumber: 160,
      image: "/images/drinks/cosmopolitan.png",
    },

    // --- Reserve Bottles (750ml) ---
    {
      id: "drk-whiskey-bottle",
      priceFormatted: "ZMK 650 ....",
      name: "RESERVE SINGLE MALT",
      ingredients: "12-Year Speyside Single Malt Scotch (750ml Bottle)",
      category: "bottles",
      categoryLabel: "[Reserve Bottle]",
      priceNumber: 650,
      image: "/images/drinks/whiskey-bottle.png",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-gin-bottle",
      priceFormatted: "ZMK 450 ....",
      name: "ARTISAN LONDON GIN",
      ingredients:
        "Copper pot distilled with 12 wild botanicals (750ml Bottle)",
      category: "bottles",
      categoryLabel: "[Reserve Bottle]",
      priceNumber: 450,
      image: "/images/drinks/gin-bottle.png",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-tequila-bottle",
      priceFormatted: "ZMK 550 ....",
      name: "REPOSADO TEQUILA",
      ingredients: "100% Blue Agave, Aged in French Oak (750ml Bottle)",
      category: "bottles",
      categoryLabel: "[Reserve Bottle]",
      priceNumber: 550,
      image: "/images/drinks/tequila-bottle.png",
      badge: "Bottle Reserve",
    },
    {
      id: "drk-rum-bottle",
      priceFormatted: "ZMK 480 ....",
      name: "AGED SPICED RUM",
      ingredients: "Bourbon barrel aged with Madagascar vanilla (750ml Bottle)",
      category: "bottles",
      categoryLabel: "[Reserve Bottle]",
      priceNumber: 480,
      image: "/images/drinks/rum-bottle.png",
      badge: "Bottle Reserve",
    },

    // --- Kitchen & Grills ---
    {
      id: "kitchen-carpaccio",
      priceFormatted: "ZMK 160 ....",
      name: "BEEF CARPACCIO",
      ingredients:
        "Thinly sliced beef tenderloin, capers, parmesan shaving, arugula, truffle oil",
      category: "kitchen",
      categoryLabel: "[Kitchen]",
      priceNumber: 160,
      image: "/images/dish-carpaccio.jpg",
      badge: "Chef Highlight",
    },
    {
      id: "kitchen-signature-steak",
      priceFormatted: "ZMK 300 ....",
      name: "RILEY'S SIGNATURE STEAK",
      ingredients:
        "Prime cut aged Zambian beef, roasted herb butter, charred greens",
      category: "kitchen",
      categoryLabel: "[Grill]",
      priceNumber: 300,
      image: "/images/dish-signature-steak.jpg",
      badge: "Signature",
    },
    {
      id: "kitchen-scallops",
      priceFormatted: "ZMK 240 ....",
      name: "SEARED SCALLOPS",
      ingredients:
        "Pan-seared jumbo scallops, cauliflower purée, crispy pancetta crumb",
      category: "kitchen",
      categoryLabel: "[Kitchen]",
      priceNumber: 240,
      image: "/images/dish-scallops.jpg",
    },
    {
      id: "grill-t-bone",
      priceFormatted: "ZMK 280 ....",
      name: "CHAR-GRILLED T-BONE (400G)",
      ingredients:
        "Aged beef seared over open flame hardwood, smoked sea salt, grilled sweet corn",
      category: "kitchen",
      categoryLabel: "[Open Flame]",
      priceNumber: 280,
      image: "/images/pub-smoky-grill.jpg",
      badge: "Pitmaster Grill",
    },
    {
      id: "grill-peri-peri",
      priceFormatted: "ZMK 220 ....",
      name: "FLAME PERI-PERI CHICKEN",
      ingredients:
        "Marinated 24h in bird’s eye chili, garlic & citrus, flame charred crispy skin",
      category: "kitchen",
      categoryLabel: "[Open Flame]",
      priceNumber: 220,
      image: "/images/bar-flamed-ribs.jpg",
    },

    // --- Beer & Wine ---
    {
      id: "beer-flight",
      priceFormatted: "ZMK 180 ....",
      name: "HOUSE DRAFT LAGER FLIGHT",
      ingredients:
        "Tasting paddle of 4 fresh tap beers: IPA, Leroy Lager, Amber, and Stout",
      category: "beers-wine",
      categoryLabel: "[Draft Beer]",
      priceNumber: 180,
      image: "/images/pub-beer-cheers.jpg",
      badge: "Tap Favorite",
    },
    {
      id: "wine-merlot",
      priceFormatted: "ZMK 140 ....",
      name: "MERLOT RESERVE",
      ingredients:
        "Dark cherry and plum notes with subtle French oak vanilla undertones",
      category: "beers-wine",
      categoryLabel: "[Wine Glass/Bottle]",
      priceNumber: 140,
      image: "/images/pub-friends-wine.jpg",
    },
    {
      id: "wine-pinot",
      priceFormatted: "ZMK 130 ....",
      name: "PINOT GRIGIO RESERVE",
      ingredients:
        "Crisp green apple and floral elderflower with mineral acidity and clean finish",
      category: "beers-wine",
      categoryLabel: "[Wine Glass/Bottle]",
      priceNumber: 130,
      image: "/images/drinks/white-negroni.png",
    },
  ];

  const filteredItems = menuCatalog.filter((item) => {
    const matchesCat =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (item: MenuItemFormatted) => {
    addItem({
      productId: item.id,
      slug: item.id,
      title: item.name,
      price: item.priceNumber,
      image: item.image,
      quantity: 1,
    });
    toast.success(`Added ${item.name} (${item.priceFormatted}) to tray.`);
  };

  return (
    <div className="w-full bg-[#f6f2ea] text-primary min-h-screen">
      {/* 1. Dramatic Bar & Cocktails Hero with Bottom-Anchored Full-Bleed MENU typography */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[82vh] bg-[#0c0808] flex flex-col justify-between overflow-hidden select-none">
        {/* Full-bleed Atmospheric Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/menu-hero-cinematic.jpg"
            alt="Riley's Craft Cocktails & Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.82] contrast-[1.08]"
          />
          {/* Subtle dark overlay for elegant contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0808]/90 via-transparent to-black/30" />
        </div>

        {/* Top Header Label */}
        <div className="relative z-10 w-full pt-20 sm:pt-24 px-4 sm:px-8 flex justify-between items-center text-white/80 font-meta-bracket text-xs uppercase tracking-widest">
          <span>[Atelier Menu • Lusaka, Zambia]</span>
          <span>[Bar &amp; Kitchen]</span>
        </div>

        {/* Bottom Full-bleed MENU Title sitting like the footer's RILEY'S */}
        <div className="relative z-10 w-full overflow-hidden leading-none select-none flex items-end justify-center pointer-events-none mt-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[20vw] sm:text-[22vw] lg:text-[24vw] font-black uppercase tracking-tighter text-[#f6f2ea] font-sans leading-[0.78] translate-y-[8%] m-0 p-0 text-center w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          >
            MENU
          </motion.h1>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <div className="w-full px-4 sm:px-8 lg:px-margin py-space-md bg-[#ede6db] border-y border-[#d5cbbf]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 font-action-label text-xs uppercase tracking-wider rounded-none transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-on-primary"
                    : "bg-[#f6f2ea] text-secondary hover:text-primary border border-[#d5cbbf]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cocktails, steaks, bottles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f6f2ea] pl-9 pr-3 py-2 font-body-sm text-sm outline-none border border-[#d5cbbf] focus:border-primary transition-colors text-primary"
            />
          </div>
        </div>
      </div>

      {/* 3. 4-Column Clean Studio Product Grid matching the Reference Design */}
      <div className="w-full px-4 sm:px-8 lg:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-secondary">
              <span className="font-meta-bracket text-base uppercase block mb-2">
                [No Offerings Found]
              </span>
              <p className="font-body-md">
                Try searching for a different dish, cocktail, or bottle term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 mb-space-xl">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between cursor-pointer"
                >
                  {/* Studio Square Image Container */}
                  <div className="relative aspect-square w-full bg-[#ede6db] overflow-hidden flex items-center justify-center p-6 border border-[#d5cbbf] transition-all duration-300 group-hover:bg-[#e4dbcc]">
                    {item.badge && (
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="font-meta-bracket text-[10px] uppercase tracking-wider bg-black/80 text-white px-2 py-0.5 backdrop-blur-sm">
                          {item.badge}
                        </span>
                      </div>
                    )}

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain filter contrast-[1.05] brightness-95 group-hover:scale-108 transition-transform duration-500 select-none"
                      />
                    </div>

                    {/* Quick Add Button on Hover */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white p-2 shadow-md hover:bg-secondary flex items-center justify-center"
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
                    <p className="font-body-sm text-xs sm:text-[13px] text-[#78716c] mt-0.5 leading-snug">
                      {item.ingredients}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Wide Image Reservation & Hospitality Banner */}
          <div className="relative w-full rounded-none overflow-hidden border border-[#cfc4c5]/40 mt-12 shadow-xl group">
            {/* Wide Ambient Bar Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <Image
                src="/images/ambient-bar-glow.jpg"
                alt="Riley's Evening Bar Atmosphere"
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
                  [BAR &amp; KITCHEN • LUSAKA, ZAMBIA]
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans leading-tight">
                  JOIN US AT OUR CENTRAL BAR &amp; OPEN-AIR DECK OR HAVE YOUR
                  ORDER DELIVERED SAFELY AND RESPONSIBLY TO YOUR DOORSTEP.
                </h3>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-2 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-[0.18em] px-8 sm:px-10 py-4 sm:py-5 hover:bg-pub-amber hover:text-black active:scale-[0.98] transition-all duration-200 shadow-2xl"
                >
                  <span>RESERVE TABLE</span>
                  <span className="text-base font-bold">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
