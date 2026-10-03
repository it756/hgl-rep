"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ReservationForm from "@/components/pub/ReservationForm";

export default function BookEveningSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="book-evening"
        className="relative z-20 w-full bg-[#f6f2ea] text-[#2c221e] pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden border-t border-[#e5dfd5]"
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-8 mb-12 sm:mb-16">
          {/* Main Headline matching Marlund template */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#2c221e] font-sans mb-5 leading-none"
          >
            BOOK YOUR EVENING
            <br />
            AT RILEY&apos;S
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-extrabold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-[#3f312b] max-w-2xl mx-auto leading-relaxed mb-8 font-sans"
          >
            PRIVATE MOMENTS, SEASONAL DISHES, AND A WARM LUSAKA SETTING.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="inline-block border border-[#2c221e] text-[#2c221e] font-extrabold text-xs sm:text-[13px] tracking-[0.2em] uppercase px-9 py-4 hover:bg-[#2c221e] hover:text-[#f6f2ea] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-sm"
            >
              RESERVE NOW
            </button>
          </motion.div>
        </div>

        {/* Featured Cocktail Coupe Image framed centrally like in the reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] mx-auto px-4"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-[#e5dfd5]">
            <Image
              src="/images/book-evening-table.jpg"
              alt="Evening cocktail at Riley's"
              fill
              sizes="(max-width: 768px) 90vw, 540px"
              className="object-cover object-center filter contrast-[1.05] brightness-95 select-none"
            />
          </div>
        </motion.div>
      </section>

      {/* Pop-up Modal Dialog for Reservation Form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-3xl my-8 bg-surface-container-lowest shadow-2xl hairline-border"
            >
              <ReservationForm onClose={() => setIsOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
