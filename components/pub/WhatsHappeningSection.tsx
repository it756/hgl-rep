"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatsHappeningSection() {
  return (
    <section
      id="whats-happening"
      className="relative z-30 w-full bg-[#2c221e] text-[#f6f2ea] py-16 sm:py-24 px-4 sm:px-8 lg:px-margin border-t border-[#f6f2ea]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 text-center sm:text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f2ea] font-sans">
            What&apos;s Happening
          </h2>
        </motion.div>

        {/* Row 1: Daily Specials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 sm:mb-28">
          {/* Left: Drinks Cheers Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] sm:aspect-square w-full max-w-[480px] mx-auto md:mx-0 overflow-hidden shadow-2xl group border border-[#f6f2ea]/15"
          >
            <Image
              src="/images/drinks-cheers.jpg"
              alt="Cheers with fresh citrus cocktails at Riley's"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 select-none filter brightness-95"
            />
          </motion.div>

          {/* Right: Daily Specials Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center max-w-md mx-auto md:mx-0 text-left"
          >
            <span className="text-base sm:text-lg text-[#f6f2ea]/80 font-normal mb-3 font-sans">
              Daily Specials
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f6f2ea] mb-6 leading-tight tracking-tight font-sans">
              Enjoy 20% off all appetizers
            </h3>

            <div className="text-[#f6f2ea]/80 text-sm sm:text-base font-normal space-y-1 mb-8">
              <p>Monday to Friday</p>
              <p>4pm-6pm</p>
            </div>

            <div>
              <Link
                href="/reservations"
                className="inline-block border border-[#f6f2ea] text-[#f6f2ea] font-action-label text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3 transition-all duration-300 hover:bg-[#f6f2ea] hover:text-[#2c221e] active:scale-[0.98] shadow-sm"
              >
                Check Availability
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Order In ? (Reversed Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Order In Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 flex flex-col justify-center max-w-md mx-auto md:mx-0 text-left"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f6f2ea] mb-4 leading-tight tracking-tight font-sans">
              Order In ?
            </h3>

            <p className="text-[#f6f2ea]/80 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Have great food and drinks brought straight to your door.
            </p>

            <div>
              <Link
                href="/menu"
                className="inline-block border border-[#f6f2ea] text-[#f6f2ea] font-action-label text-xs sm:text-[13px] tracking-wider uppercase px-10 py-3 transition-all duration-300 hover:bg-[#f6f2ea] hover:text-[#2c221e] active:scale-[0.98] shadow-sm"
              >
                Shop
              </Link>
            </div>
          </motion.div>

          {/* Right: Delivery Moment Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 md:order-2 relative aspect-[4/3] sm:aspect-square w-full max-w-[480px] mx-auto md:mx-0 overflow-hidden shadow-2xl group border border-[#f6f2ea]/15"
          >
            <Image
              src="/images/delivery-moment.jpg"
              alt="Happy food and drink delivery moment"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 select-none filter brightness-95"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
