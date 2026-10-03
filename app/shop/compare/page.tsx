"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { X } from "lucide-react";

interface SpecimenModalData {
  title: string;
  price: string;
  priceNum: number;
  image: string;
  head: string;
  heart: string;
  base: string;
}

export default function CompareMatrixPage() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [modalData, setModalData] = useState<SpecimenModalData | null>(null);
  const { addItem } = useCartStore();

  const specimens: Record<string, SpecimenModalData> = {
    "spec-1": {
      title: "Scandal Le Parfum",
      price: "ZMK 770 · 100ml Extrait",
      priceNum: 770,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkhuvJnxC-6xztcw4duN6NOjL55f9gSXMaOrpB3oKUg6Z_QsmeaVpn0iEmiqhtP6tzPn9_0UC6O09z_iAnI5qxH51oB7NPc_4PJsgSB2kFmgBX8XxJuH-JBP4ne98OVwj1fkj--zdKDmxm7EJCB-SWdlQhafydEnRrWSyz4EVdSZ2b3XFvS5NG4sTEqb7HJflVCGM9y4S7dnc3wrZGuLZiMBD0VDOr1d3nLvHM1R-1P4dN4P5w1APV",
      head: "Salty Mandarin, Red Peach Nectar",
      heart: "Jasmine Sambac Absolute, Salted Butter Caramel",
      base: "Madagascan Bourbon Vanilla Pod, White Sandalwood",
    },
    "spec-2": {
      title: "Hypnotic Poison",
      price: "ZMK 715 · 100ml Eau de Parfum",
      priceNum: 715,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBW4IAa-DP94lRoaJqPaZ__9mRHnmyd93a3s50Z_hShtN0MM9UaSTkV7AZjcnHbWnmPCKexuqnNYNU5auqiID2lQgl49xsy2t6z9Zo5FcBi4MOUevFpA-jpcuFGPpg7E83o0XBTZMFbXIgEJdATNmtOFopX-gKgNsuTWezjevZZ2-vLe4yZsHjVvq3RSRSWJaPYM3teE-dEM7cQUKWuS9Xtxnr4K1RH_UqhYHgVABRDcuzFVysZE5GA",
      head: "Bitter Apricot, Wild Coconut, Caraway Seed",
      heart: "Sambac Jasmine, Lily of the Valley, Brazilian Rosewood",
      base: "Warm Almond Cream, Dense Vanilla, Jacaranda Wood",
    },
    "spec-3": {
      title: "Starlicious Berry",
      price: "ZMK 720 · 100ml Concentrated Elixir",
      priceNum: 720,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAnWdI59Cd21QX__vnv-lAtxmLe-eIa5-ZmGC6DsRzCdfMmh8kF9G3ncV9n3n7772Xtxzl-CsqefKtSqfuy0FbTiAbz5IKx5zjeb7-PdKCxGeX_phecw2N7Ok32srO-_0jDv5uGteu_qDf0Yb7DSfZL6wsXMcKw3VzHcyynoimlXFSHWFk93ibr9WRRpm1Mo9x3SMSYWblxpATGBW9zG-7Gq-mwzhaTIATeZZsOmbJ3B97ovQpwfsxA",
      head: "Frosted Sparkling Red Berries, Lychee Water",
      heart: "Faceted Peony, Crushed Violet Leaves",
      base: "Clean Ambergris Crystals, Cashmeran Velvet",
    },
  };

  const handleAddFromModal = () => {
    if (!modalData) return;
    addItem({
      productId: modalData.title.toLowerCase().replace(/\s+/g, "-"),
      slug: "cosmic-intense",
      title: modalData.title,
      size: 100,
      price: modalData.priceNum,
      image: modalData.image,
      quantity: 1,
    });
    toast.success(`Added ${modalData.title} to requisition.`);
    setModalData(null);
  };

  return (
    <div className="w-full bg-surface-container-lowest min-h-screen pt-20">
      <div className="w-full px-4 sm:px-8 lg:px-margin pb-space-xl">
        {/* Meta Navigation & Comparison Context Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-md pb-space-xl hairline-b">
          <div className="flex items-center gap-space-md">
            <Link
              className="font-meta-bracket text-meta-bracket text-secondary hover:text-primary transition-colors flex items-center gap-1 group"
              href="/shop/cosmic-intense"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform">
                [Back]
              </span>
            </Link>
            <span className="font-action-label text-action-label uppercase tracking-widest text-on-surface">
              Cosmic Intense reminds customers of:
            </span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="font-meta-bracket text-meta-bracket text-secondary hidden sm:inline-block">
              [Index: Olfactory Accords · Warm Amber / Gourmand]
            </span>
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="font-action-label text-action-label uppercase tracking-wider text-secondary hover:text-primary transition-colors"
              id="view-toggle"
              type="button"
            >
              Accord Matrix [{drawerOpen ? "On" : "Off"}]
            </button>
          </div>
        </div>

        {/* Primary Comparison Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-space-xl pt-space-lg">
          {/* Fragrance 1: Scandal Le Parfum */}
          <div
            className="group flex flex-col justify-between cursor-pointer"
            onClick={() => setModalData(specimens["spec-1"])}
          >
            <div className="relative w-full h-[460px] flex items-center justify-center p-space-md overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2 bg-surface-container-low hairline-border">
              {/* Accord Overlay Tag */}
              <div className="absolute top-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-meta-bracket text-meta-bracket text-secondary bg-surface-container-lowest px-2 py-1 hairline-border">
                  [Overlap 94% · Salted Caramel]
                </span>
              </div>
              <img
                alt="Scandal Le Parfum Flacon"
                className="max-h-[380px] w-auto object-contain select-none"
                src={specimens["spec-1"].image}
              />
              {/* Quick Micro Action */}
              <div className="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-action-label text-action-label uppercase tracking-widest text-primary underline underline-offset-4 bg-surface-container-lowest px-2 py-0.5 hairline-border">
                  Compare Notes
                </span>
              </div>
            </div>
            <div className="pt-space-sm flex items-baseline justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                Scandal Le Parfum
              </h2>
              <span className="font-price-tag text-price-tag text-secondary ml-space-sm">
                ZMK 770
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mt-1">
              Jasmine Sambac · Salted Caramel · Vanilla Extract
            </p>
          </div>

          {/* Fragrance 2: Hypnotic Poison */}
          <div
            className="group flex flex-col justify-between cursor-pointer"
            onClick={() => setModalData(specimens["spec-2"])}
          >
            <div className="relative w-full h-[460px] flex items-center justify-center p-space-md overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2 bg-surface-container-low hairline-border">
              {/* Accord Overlay Tag */}
              <div className="absolute top-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-meta-bracket text-meta-bracket text-secondary bg-surface-container-lowest px-2 py-1 hairline-border">
                  [Overlap 89% · Bitter Almond]
                </span>
              </div>
              <img
                alt="Hypnotic Poison Flacon"
                className="max-h-[380px] w-auto object-contain select-none"
                src={specimens["spec-2"].image}
              />
              <div className="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-action-label text-action-label uppercase tracking-widest text-primary underline underline-offset-4 bg-surface-container-lowest px-2 py-0.5 hairline-border">
                  Compare Notes
                </span>
              </div>
            </div>
            <div className="pt-space-sm flex items-baseline justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                Hypnotic Poison
              </h2>
              <span className="font-price-tag text-price-tag text-secondary ml-space-sm">
                ZMK 715
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mt-1">
              Bitter Almond · Caraway · Sambac Jasmine · Jacaranda
            </p>
          </div>

          {/* Fragrance 3: Starlicious Berry */}
          <div
            className="group flex flex-col justify-between cursor-pointer"
            onClick={() => setModalData(specimens["spec-3"])}
          >
            <div className="relative w-full h-[460px] flex items-center justify-center p-space-md overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2 bg-surface-container-low hairline-border">
              {/* Accord Overlay Tag */}
              <div className="absolute top-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-meta-bracket text-meta-bracket text-secondary bg-surface-container-lowest px-2 py-1 hairline-border">
                  [Overlap 82% · Crystalline Red Berries]
                </span>
              </div>
              <img
                alt="Starlicious Berry Flacon"
                className="max-h-[410px] w-auto object-contain select-none"
                src={specimens["spec-3"].image}
              />
              <div className="absolute bottom-2 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-action-label text-action-label uppercase tracking-widest text-primary underline underline-offset-4 bg-surface-container-lowest px-2 py-0.5 hairline-border">
                  Compare Notes
                </span>
              </div>
            </div>
            <div className="pt-space-sm flex items-baseline justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                Starlicious Berry
              </h2>
              <span className="font-price-tag text-price-tag text-secondary ml-space-sm">
                ZMK 720
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary mt-1">
              Frosted Wild Raspberry · Lychee · Cashmeran Musks
            </p>
          </div>
        </div>

        {/* Secondary Row Peeking & Extended Taxonomy */}
        <div className="pt-space-xl mt-space-lg">
          <div className="flex items-center justify-between pb-space-sm hairline-b mb-space-md">
            <span className="font-meta-bracket text-meta-bracket text-secondary">
              [Related Extraction Monographs · Sub-families]
            </span>
            <span className="font-action-label text-action-label uppercase tracking-widest text-on-surface">
              3 Additional Formulations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-gutter gap-y-space-md opacity-80 hover:opacity-100 transition-opacity">
            {/* Peek Item 1 */}
            <div className="flex flex-col group cursor-pointer pt-space-sm">
              <div className="w-full h-44 flex items-end justify-center overflow-hidden bg-surface-container-low hairline-border">
                <img
                  alt="Rouge Solaire peek"
                  className="max-h-36 w-auto object-contain translate-y-6 group-hover:translate-y-2 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDTMAsSGXm-NJi_Xc_JpEoLmt0OSmdCzk2Pv3scRaDtBkc39ByBQVi-BjL4hSX-B5XQkZYsAtrM8ahVa5C4zXyMs7T_kLokV5_la-LOPKDIEu_w08V1HH5VL2L3rhLMoBQo_MRdSLOW8a5XntYhNNiQKm4K2gCs4X3goUd8-k0ku8vs13kp0dDkCn3yIa3j4ZSzwf8KkD3WDgMqjp3GxPMa49uf6FtYjjTTTrn2utOJq-D0mKJNnv"
                />
              </div>
              <div className="pt-space-sm flex items-baseline justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Rouge Solaire
                </span>
                <span className="font-price-tag text-price-tag text-secondary">
                  ZMK 640
                </span>
              </div>
              <span className="font-meta-bracket text-meta-bracket text-secondary">
                Solar Resins · Smoked Benzoin
              </span>
            </div>

            {/* Peek Item 2 */}
            <div className="flex flex-col group cursor-pointer pt-space-sm">
              <div className="w-full h-44 flex items-end justify-center overflow-hidden bg-surface-container-low hairline-border">
                <img
                  alt="Monolithe Ambré peek"
                  className="max-h-36 w-auto object-contain translate-y-6 group-hover:translate-y-2 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfeEV7AYVDHc2qLlwBGd3LO-tPNb06MmVcOgi-GkL9QkqYy6-qSaiX7f-CpRdL6KCAbgouJcyqpmsuli4tJXrlg4WR82-nrd5RuExE9nrDc5lI2NbuNgCyLwCh5kzOpt-byeXZ4udXNyz_d9Ad3CDt37FMNSPqGdQIfvx-bAP1nwuhcajTSPH8wKtzXf-TKlvQ2JJumkiUR1nmff4UvnAK3-qTll_n82Tv25CkjU0LaJivR-ZVex6K"
                />
              </div>
              <div className="pt-space-sm flex items-baseline justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Monolithe Ambré
                </span>
                <span className="font-price-tag text-price-tag text-secondary">
                  ZMK 810
                </span>
              </div>
              <span className="font-meta-bracket text-meta-bracket text-secondary">
                Madagascar Vanilla · Red Pimento
              </span>
            </div>

            {/* Peek Item 3 */}
            <div className="flex flex-col group cursor-pointer pt-space-sm">
              <div className="w-full h-44 flex items-end justify-center overflow-hidden bg-surface-container-low hairline-border">
                <img
                  alt="Nocturne Cuir peek"
                  className="max-h-36 w-auto object-contain translate-y-6 group-hover:translate-y-2 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2oQ8CDShWaXUFt50GHEUOmUHa8EptoSiO_QidxY5lISsFDyBpKTsTJsakyIn6ejDlCsACgUO6VjX0vbQrYCUHREqEynsr2jovBLEF3EvLXpPVBZp6tRZ6C4GNn96SSZ_NhNSkV8I1yjgtYPjOpC5Sob_K_DQT9F-LNpDw1xbFqbnG2_ugM2zQ2QzutotpphlHUkdorZ6FuJ5zrKrKM3ZsMxoSJz-_2TVW1ZQBBsvqvh0UkZ7p668"
                />
              </div>
              <div className="pt-space-sm flex items-baseline justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Nocturne Cuir
                </span>
                <span className="font-price-tag text-price-tag text-secondary">
                  ZMK 690
                </span>
              </div>
              <span className="font-meta-bracket text-meta-bracket text-secondary">
                Dark Plum · Birch Tar · Labdanum
              </span>
            </div>
          </div>
        </div>

        {/* Comparative Accord Data Matrix Drawer (Interactive) */}
        {drawerOpen && (
          <div className="mt-space-xl p-space-lg bg-surface-container-low hairline-border transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md hairline-b gap-space-sm">
              <div>
                <span className="font-meta-bracket text-meta-bracket text-secondary block">
                  [Comparative Scientific Matrix]
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">
                  Chemical Proximity to Cosmic Intense
                </h3>
              </div>
              <div className="flex items-center gap-space-sm text-secondary font-body-sm text-body-sm">
                <span>
                  Base Reference: Cosmic Intense (Eau de Parfum Concentrée)
                </span>
              </div>
            </div>

            {/* Accord Bar Visualizations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-md">
              {/* Accord Metric 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-body-sm text-body-sm">
                  <span className="text-on-surface font-medium">
                    Scandal Le Parfum
                  </span>
                  <span className="text-secondary font-mono">
                    94% Accord Match
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "94%" }} />
                </div>
                <div className="flex justify-between text-[10px] text-secondary tracking-wider uppercase pt-1">
                  <span>Gourmand Caramel</span>
                  <span>Dominant Resonance</span>
                </div>
              </div>

              {/* Accord Metric 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-body-sm text-body-sm">
                  <span className="text-on-surface font-medium">
                    Hypnotic Poison
                  </span>
                  <span className="text-secondary font-mono">
                    89% Accord Match
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "89%" }} />
                </div>
                <div className="flex justify-between text-[10px] text-secondary tracking-wider uppercase pt-1">
                  <span>Almond · Vanilla</span>
                  <span>Shared Heart</span>
                </div>
              </div>

              {/* Accord Metric 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between font-body-sm text-body-sm">
                  <span className="text-on-surface font-medium">
                    Starlicious Berry
                  </span>
                  <span className="text-secondary font-mono">
                    82% Accord Match
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "82%" }} />
                </div>
                <div className="flex justify-between text-[10px] text-secondary tracking-wider uppercase pt-1">
                  <span>Musk · Red Fruit</span>
                  <span>Shared Projection</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Modal Quick-view */}
      {modalData && (
        <div className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-xl w-full p-space-xl relative shadow-2xl hairline-border animate-in fade-in zoom-in-95 duration-200">
            <button
              className="absolute top-4 right-4 text-on-surface font-meta-bracket text-meta-bracket hover:text-secondary"
              onClick={() => setModalData(null)}
              type="button"
            >
              [Close ×]
            </button>
            <span className="font-meta-bracket text-meta-bracket text-secondary block mb-1">
              [Monograph File]
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
              {modalData.title}
            </h3>
            <p className="font-price-tag text-price-tag text-secondary mb-space-md">
              {modalData.price}
            </p>

            <div className="space-y-space-sm mb-space-lg">
              <div>
                <span className="font-action-label text-action-label uppercase tracking-widest text-secondary block text-[10px]">
                  Head Notes
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  {modalData.head}
                </p>
              </div>
              <div>
                <span className="font-action-label text-action-label uppercase tracking-widest text-secondary block text-[10px]">
                  Heart Notes
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  {modalData.heart}
                </p>
              </div>
              <div>
                <span className="font-action-label text-action-label uppercase tracking-widest text-secondary block text-[10px]">
                  Base Formulations
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  {modalData.base}
                </p>
              </div>
            </div>

            <div className="flex gap-space-sm">
              <button
                onClick={handleAddFromModal}
                className="flex-1 bg-primary text-on-primary py-space-sm font-action-label text-action-label uppercase tracking-widest hover:bg-secondary transition-colors"
                type="button"
              >
                Add to Requisition
              </button>
              <button
                className="px-space-md py-space-sm bg-surface-container text-on-surface font-action-label text-action-label uppercase tracking-widest hover:bg-surface-variant transition-colors"
                onClick={() => setModalData(null)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
