"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Bike } from "lucide-react";
import Link from "next/link";

export default function PurposeValuesSection() {
  return (
    <section
      id="values"
      className="w-full bg-[#111115] text-white py-20 sm:py-28 px-4 sm:px-8 lg:px-margin hairline-b overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Purpose & Mission Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Purpose (The Why) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            <div>
              <span className="font-meta-bracket text-meta-bracket text-pub-amber uppercase tracking-widest block mb-3">
                [Our Purpose • The Why]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight mb-6">
                Great hospitality shouldn&apos;t stop at the door.
              </h2>
              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-6 font-sans">
                Riley&apos;s exists to bring the warmth, craft, and care of a
                proper night out to wherever our guest is — pulled up to the bar
                counter in Lusaka, or answering their own front door.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/90 text-sm font-semibold uppercase tracking-wider font-sans">
                <UtensilsCrossed className="w-4 h-4 text-pub-amber" />
                <span>Elevated Dining Room</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <div className="flex items-center gap-2 text-white/90 text-sm font-semibold uppercase tracking-wider font-sans">
                <Bike className="w-4 h-4 text-pub-amber" />
                <span>Doorstep Dispatch</span>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 bg-[#18181f] p-8 sm:p-10 border border-white/10 relative shadow-2xl"
          >
            <div className="mb-8">
              <span className="font-meta-bracket text-meta-bracket text-white/50 uppercase tracking-widest block mb-2">
                [Our Mission • The currency in Standard]
              </span>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-sans">
                Riley&apos;s delivers a sophisticated, seamless bar &amp; grill
                experience — a curated selection of food, wine, spirits, beers,
                and cocktails — with the same standard of hospitality whether
                you&apos;re seated in our dining room or we&apos;re bringing it
                to you, quickly, safely, and responsibly.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="font-meta-bracket text-meta-bracket text-pub-amber uppercase tracking-widest block mb-2">
                [Our Vision]
              </span>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed font-sans">
                To become the definitive name in elevated, responsible drinking
                and dining — the bar &amp; grill people trust equally for their
                table and their doorstep.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Action Footnote */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/70 text-sm font-sans text-center sm:text-left">
            Experience the hybrid hospitality standard in Lusaka today.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/reservations"
              className="inline-block bg-white text-black font-extrabold text-xs uppercase tracking-widest px-7 py-3 hover:bg-pub-amber hover:text-black transition-colors"
            >
              Reserve Table
            </Link>
            <Link
              href="/menu"
              className="inline-block border border-white/60 text-white font-extrabold text-xs uppercase tracking-widest px-7 py-3 hover:border-white hover:bg-white/10 transition-colors"
            >
              Order Takeout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
