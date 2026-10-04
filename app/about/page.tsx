"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Utensils,
  GlassWater,
  Flame,
  Compass,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f6f2ea] text-[#2c221e] overflow-x-hidden selection:bg-[#2c221e] selection:text-[#f6f2ea]">
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO SECTION: ABOUT RILEY'S (Matching Attached Image 4)         */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6e6059] font-medium">
            [Atelier Story • Lusaka, Zambia]
          </span>
        </motion.div>

        {/* Main Header Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-[#2c221e] font-sans leading-[0.9] mb-6 sm:mb-8"
        >
          ABOUT RILEY&apos;S
        </motion.h1>

        {/* Subtitle Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-medium text-base sm:text-lg md:text-xl text-[#3f312b] max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16"
        >
          A contemporary pub &amp; grill shaped by calm atmosphere, refined
          cooking, and considered design.
        </motion.p>

        {/* Centered Featured Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md sm:max-w-lg md:max-w-xl aspect-[4/5] sm:aspect-square overflow-hidden shadow-[0_25px_60px_-15px_rgba(44,34,30,0.3)] border border-[#d5cbbf]"
        >
          <Image
            src="/images/dish-gourmet.jpg"
            alt="Riley's Signature Culinary Dish"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 600px"
            className="object-cover object-center filter contrast-[1.05] brightness-[0.98] hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-[11px] font-mono tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/20">
            <span>[Plate No. 04]</span>
            <span>Flame Charred &amp; Botanical Glaze</span>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. WHERE RILEY'S BEGAN (Matching Attached Image 5)                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full min-h-[85vh] sm:min-h-screen bg-[#0c0808] text-white flex flex-col justify-between py-20 sm:py-28 px-4 sm:px-8 overflow-hidden select-none">
        {/* Full-bleed Moody Martini / Cocktail Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/hero-cocktail-bg.jpg"
            alt="Where Riley's Began Atmosphere"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.72] contrast-[1.12]"
          />
          {/* Subtle Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content Container aligned with site-wide max-w-7xl mx-auto standard */}
        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-between flex-grow">
          {/* Top Header: WHERE RILEY'S BEGAN */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e69500] font-semibold block mb-3">
                [Origins &amp; Vision]
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-sans leading-[0.95]">
                WHERE RILEY&apos;S BEGAN
              </h2>
            </motion.div>
          </div>

          {/* Bottom Left Narrative Text */}
          <div className="max-w-3xl w-full mt-20 sm:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col gap-6 text-white/95"
            >
              <p className="font-sans font-medium text-base sm:text-lg md:text-xl leading-relaxed text-white drop-shadow-md">
                Riley&apos;s was created with a simple idea in mind — to build a
                modern pub &amp; grill where flavour, atmosphere, and design
                exist in quiet balance.
              </p>

              <p className="font-sans font-medium text-base sm:text-lg md:text-xl leading-relaxed text-white/90 drop-shadow-md">
                We wanted to move away from the noise and busyness of the city,
                offering a calm space where guests can slow down and enjoy
                thoughtful cooking, crafted cocktails, and a considered
                experience from start to finish.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>Discover Our Menu</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#e69500] text-black font-sans font-extrabold text-xs uppercase tracking-[0.2em] hover:bg-[#ffaa1a] transition-all duration-300"
                >
                  <span>Book A Table</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. THE PEOPLE BEHIND RILEY'S (Matching Attached Image 2)           */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f6f2ea]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#2c221e] font-sans leading-[0.95] mb-5">
              THE PEOPLE BEHIND RILEY&apos;S
            </h2>

            <p className="font-sans font-medium text-base sm:text-lg text-[#3f312b] max-w-2xl mx-auto leading-relaxed">
              Classical technique meets a modern outlook, creating dishes that
              are comforting, elevated, and refined.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Side-by-Side Portrait Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Executive Chef / Culinary Director */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#2c221e]">
              <Image
                src="/images/dish-chef.jpg"
                alt="Marcus Vance - Executive Head Chef"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 text-white font-mono text-[11px] uppercase tracking-widest">
                [Culinary Craft]
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#6e6059] block mb-1">
                  Executive Head Chef
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2c221e] font-sans mb-3">
                  MARCUS VANCE
                </h3>
                <p className="text-[#3f312b] text-sm leading-relaxed mb-4">
                  Trained across open-fire kitchens in Europe and southern
                  Africa, Marcus champions honest grillwork, 35-day dry-aged
                  cuts, and subtle smoke infusions that bring unpretentious
                  sophistication to every plate.
                </p>
              </div>

              <div className="pt-4 border-t border-[#d5cbbf]/70 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#6e6059]">
                <span>Focus: Wood Fire &amp; Aged Cuts</span>
                <Flame className="w-4 h-4 text-[#e69500]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Master Mixologist / Beverage Director */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#2c221e]">
              <Image
                src="/images/bar-signature-cocktail.jpg"
                alt="Elena Chanda - Master Mixologist"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/20 text-white font-mono text-[11px] uppercase tracking-widest">
                [Bar Atelier]
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#6e6059] block mb-1">
                  Head Mixologist &amp; Beverage Director
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2c221e] font-sans mb-3">
                  Halimski
                </h3>
                <p className="text-[#3f312b] text-sm leading-relaxed mb-4">
                  Elena brings a botanist’s curiosity to mixology, crafting
                  barrel-rested Negronis, wild botanical cordials, and
                  crystal-clear ice programs that celebrate local terroir
                  alongside rare world spirits.
                </p>
              </div>

              <div className="pt-4 border-t border-[#d5cbbf]/70 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#6e6059]">
                <span>Focus: Botanicals &amp; Rare Spirits</span>
                <GlassWater className="w-4 h-4 text-[#e69500]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. INSIDE RILEY'S (Matching Attached Image 3)                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f6f2ea] border-t border-[#e2dcd4]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#2c221e] font-sans leading-[0.95] mb-5">
              INSIDE RILEY&apos;S
            </h2>

            <p className="font-sans font-medium text-base sm:text-lg text-[#3f312b] max-w-2xl mx-auto leading-relaxed">
              A calm, warm space shaped by wood, stone, soft shadows, and
              evening light.
            </p>
          </motion.div>
        </div>

        {/* 4 Horizontal Atmosphere Visuals (matching Image 3 grid layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Visual 1: Wine & Linen Dining */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="group relative flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
              <Image
                src="/images/pub-friends-wine.jpg"
                alt="Wine and dining table at Riley's"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-[1.08] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-mono text-[11px] uppercase tracking-widest">
                  Fine Cellar Reserves
                </span>
              </div>
            </div>
            <div className="p-4 bg-[#ede6db] border-t border-[#d5cbbf]">
              <span className="font-mono text-[11px] text-[#6e6059] uppercase tracking-wider block">
                [01] Evening Pours
              </span>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#2c221e] mt-0.5">
                Table &amp; Cellar Selection
              </p>
            </div>
          </motion.div>

          {/* Visual 2: The Atelier Dining Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="group relative flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
              <Image
                src="/images/pub-table-feast.jpg"
                alt="Guest dining in warm ambient atmosphere"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-[1.08] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-mono text-[11px] uppercase tracking-widest">
                  Leather &amp; Oak Booths
                </span>
              </div>
            </div>
            <div className="p-4 bg-[#ede6db] border-t border-[#d5cbbf]">
              <span className="font-mono text-[11px] text-[#6e6059] uppercase tracking-wider block">
                [02] The Dining Room
              </span>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#2c221e] mt-0.5">
                Ambient Seating &amp; Feasts
              </p>
            </div>
          </motion.div>

          {/* Visual 3: Cocktail Cheers & Toast */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="group relative flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
              <Image
                src="/images/drinks-cheers.jpg"
                alt="Cocktail glass toast at Riley's"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-[1.08] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-mono text-[11px] uppercase tracking-widest">
                  Handcrafted Libations
                </span>
              </div>
            </div>
            <div className="p-4 bg-[#ede6db] border-t border-[#d5cbbf]">
              <span className="font-mono text-[11px] text-[#6e6059] uppercase tracking-wider block">
                [03] Apéritif Culture
              </span>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#2c221e] mt-0.5">
                Signature Sips &amp; Toasts
              </p>
            </div>
          </motion.div>

          {/* Visual 4: Illuminated Timber & Stone Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="group relative flex flex-col bg-[#ede6db] border border-[#d5cbbf] overflow-hidden"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
              <Image
                src="/images/wide-bar-counter.jpg"
                alt="Illuminated bar counter with rare bottles"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-[1.08] group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-mono text-[11px] uppercase tracking-widest">
                  Reserve Bottle Tier
                </span>
              </div>
            </div>
            <div className="p-4 bg-[#ede6db] border-t border-[#d5cbbf]">
              <span className="font-mono text-[11px] text-[#6e6059] uppercase tracking-wider block">
                [04] Bar Architecture
              </span>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-[#2c221e] mt-0.5">
                Wood, Stone &amp; Amber Glow
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. BRAND PHILOSOPHY / PILLARS                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full py-20 sm:py-28 bg-[#ede6db] border-t border-b border-[#d5cbbf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e69500] font-bold mb-3">
                [Principle 01]
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#2c221e] mb-3">
                SEASONAL &amp; UNCOMPROMISED
              </h3>
              <p className="text-[#3f312b] text-sm leading-relaxed">
                We partner with regional farmers and specialty purveyors to
                source only what is exceptional in this exact moment, treating
                ingredients with reverence.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e69500] font-bold mb-3">
                [Principle 02]
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#2c221e] mb-3">
                FIRE, CHAR &amp; TIME
              </h3>
              <p className="text-[#3f312b] text-sm leading-relaxed">
                Our kitchen revolves around hardwood coals, iron grills, and
                slow reductions that yield deep caramelized flavours
                unachievable through shortcuts.
              </p>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e69500] font-bold mb-3">
                [Principle 03]
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#2c221e] mb-3">
                QUIET LUXURY &amp; SERVICE
              </h3>
              <p className="text-[#3f312b] text-sm leading-relaxed">
                Hospitality that feels genuine, attentive, and effortlessly
                calm. Every evening at Riley&apos;s is designed to be an
                unhurried escape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. CALL TO ACTION: RESERVE AN EVENING                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-[#2c221e] text-[#f6f2ea] text-center select-none overflow-hidden">
        {/* Subtle Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e69500]/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e69500] font-semibold mb-4">
            [Join Us Tonight]
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#f6f2ea] font-sans mb-6">
            EXPERIENCE RILEY&apos;S
          </h2>

          <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-[#d7cec7] max-w-2xl mx-auto leading-relaxed mb-10">
            Whether for an intimate dinner, handcrafted cocktails at the bar, or
            a celebration with friends — we look forward to welcoming you.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/reservations"
              className="w-full sm:w-auto px-8 py-4 bg-[#f6f2ea] text-[#2c221e] font-sans font-black text-xs sm:text-[13px] tracking-[0.2em] uppercase hover:bg-white active:scale-95 transition-all duration-200 shadow-lg"
            >
              Book A Table
            </Link>

            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 border border-[#f6f2ea]/40 text-[#f6f2ea] font-sans font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase hover:border-[#f6f2ea] hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
