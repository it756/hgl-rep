"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background parallax translations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const domeY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.85, 0.1]);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="sticky top-0 z-0 w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Parallax Atmospheric Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0 w-full h-[125%] -top-[12%] left-0 pointer-events-none select-none"
      >
        <Image
          src="/images/hero-cocktail-bg.jpg"
          alt="Riley's Signature Cocktail on Bar Counter"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88] contrast-[1.08]"
        />
        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 2. Central Iconic Arched Monolith matching the attached design */}
      <motion.div
        style={{ y: domeY, opacity }}
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-[420px] sm:max-w-[460px] md:max-w-[480px] my-10 sm:my-14"
      >
        {/* Ambient Backlight Glow behind Dome */}
        <div className="absolute -inset-2 rounded-t-[220px] sm:rounded-t-[260px] bg-gradient-to-b from-pub-amber/30 via-white/5 to-transparent blur-2xl pointer-events-none opacity-50" />

        {/* Arch Monolith Container */}
        <div className="relative w-full rounded-t-[190px] sm:rounded-t-[230px] md:rounded-t-[250px] bg-[#0c0c0e]/95 backdrop-blur-xl border-t border-x border-white/20 px-6 sm:px-10 pt-12 sm:pt-16 pb-9 sm:pb-11 flex flex-col items-center justify-center text-center shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]">
          {/* 3D Metallic Riley's "R" Logo */}
          <div className="relative w-56 sm:w-64 md:w-72 h-36 sm:h-44 md:h-48 mb-2 flex items-center justify-center">
            <Image
              src="/images/rileys-3d-logo.png"
              alt="Riley's 3D Metallic Logo"
              fill
              priority
              sizes="(max-width: 768px) 280px, 320px"
              className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] select-none hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Subtitle: PUB & GRILL */}
          <h2 className="text-white font-extrabold text-xl sm:text-2xl tracking-[0.22em] uppercase font-sans mt-1 mb-8 drop-shadow-md">
            PUB &amp; GRILL
          </h2>

          {/* Action Button: Reserve Your Spot */}
          <Link
            href="/reservations"
            className="inline-block border border-white text-white font-action-label text-xs sm:text-[13px] tracking-[0.18em] uppercase px-7 py-3 transition-all duration-300 hover:bg-white hover:text-black active:scale-[0.98] focus:outline-none shadow-sm"
          >
            Reserve Your Spot
          </Link>

          {/* Thin Divider Line */}
          <div className="w-44 sm:w-56 h-[1px] bg-white/25 mt-7 mb-4" />

          {/* Location Caption */}
          <span className="font-meta-bracket text-xs sm:text-[13px] tracking-wider text-white/80 uppercase font-light">
            Lusaka, Zambia
          </span>
        </div>
      </motion.div>

      {/* 3. Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/60 pointer-events-none"
      >
        <span className="font-meta-bracket text-[10px] uppercase tracking-widest text-white/50">
          [Scroll to Explore]
        </span>
        <div className="w-4 h-7 border border-white/30 rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
