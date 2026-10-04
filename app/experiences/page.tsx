"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EXPERIENCES, Experience } from "@/lib/data/mock-data";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, ArrowRight, Utensils } from "lucide-react";

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  return (
    <div className="w-full bg-[#f6f2ea] min-h-screen text-[#2c221e]">
      {/* Hero Header Section matching exact Marlund editorial typography */}
      <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-condensed font-black text-5xl sm:text-7xl md:text-8xl lg:text-[106px]  uppercase text-[#2c221e] leading-[0.88] select-none"
          >
            RILEY&apos;S
            <br />
            EVENT SERIES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 font-sans font-bold text-xs sm:text-sm lg:text-[15px] text-[#2c221e]/85 max-w-2xl mx-auto"
          >
            Seasonal tastings, intimate evenings, and signature experiences.
          </motion.p>
        </div>
      </section>

      {/* Event Grid Section: 2 Columns matching Image 1 & 2 */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedExperience(exp)}
              className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] overflow-hidden group cursor-pointer bg-[#1b1513] select-none"
            >
              {/* Date Badge: Top Left White Box */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pointer-events-none">
                <span className="bg-white text-black font-sans font-black text-[10px] sm:text-xs tracking-[0.16em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 inline-block shadow-md">
                  {exp.dateBadge}
                </span>
              </div>

              {/* Background Photography with smooth hover zoom */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] contrast-[1.04]"
              />

              {/* Ambient Dark Bottom Gradient for optimal text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Event Content Overlay: Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-9 z-20 flex flex-col justify-end text-left pointer-events-none">
                <h2 className="font-condensed font-black text-2xl sm:text-3xl lg:text-[34px] text-white uppercase tracking-tight leading-none mb-1.5 sm:mb-2 drop-shadow-sm">
                  {exp.title}
                </h2>
                <p className="font-sans font-bold text-[10px] sm:text-xs lg:text-[13px] uppercase tracking-wider text-white/90 leading-tight max-w-xl drop-shadow-sm">
                  {exp.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Detail & Reservation Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#f6f2ea] border border-[#d5cbbf] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Visual Header */}
              <div className="relative w-full h-56 sm:h-72 bg-[#1b1513] overflow-hidden">
                <Image
                  src={selectedExperience.image}
                  alt={selectedExperience.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:bg-black transition-colors rounded-full focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white text-black font-sans font-black text-xs uppercase tracking-widest px-3 py-1.5 shadow-sm">
                    {selectedExperience.dateBadge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="font-condensed font-black text-2xl sm:text-3xl uppercase text-white tracking-tight leading-none mb-1">
                    {selectedExperience.title}
                  </h3>
                  <p className="font-sans font-semibold text-xs uppercase text-white/85 tracking-wider">
                    {selectedExperience.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body Info */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#d5cbbf]/70">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#6e6059]">
                    <Clock className="w-4 h-4 text-[#2c221e]" />
                    <span>{selectedExperience.dateOrSchedule}</span>
                  </div>
                  {selectedExperience.location && (
                    <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#6e6059]">
                      <MapPin className="w-4 h-4 text-[#2c221e]" />
                      <span>{selectedExperience.location}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#2c221e] mb-2">
                    About This Experience
                  </h4>
                  <p className="text-sm sm:text-base text-[#6e6059] leading-relaxed">
                    {selectedExperience.description}
                  </p>
                </div>

                {selectedExperience.priceZMW && (
                  <div className="flex items-center justify-between p-4 bg-[#ede6db] border border-[#d5cbbf]/60">
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#2c221e]">
                      Cover / Tasting Menu
                    </span>
                    <span className="font-mono font-bold text-base text-[#2c221e]">
                      ZMK {selectedExperience.priceZMW.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/reservations?event=${encodeURIComponent(
                      selectedExperience.title,
                    )}`}
                    onClick={() => setSelectedExperience(null)}
                    className="flex-1 bg-[#2c221e] text-[#f6f2ea] py-3.5 px-6 font-sans font-bold text-xs uppercase tracking-[0.2em] text-center hover:bg-[#43342e] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Reserve For This Event</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="py-3.5 px-6 border border-[#2c221e] text-[#2c221e] font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#ede6db] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
