"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, Tag, Bike, Clock } from "lucide-react";

export default function SpecialsSection() {
  return (
    <section id="specials" className="w-full hairline-b">
      {/* Editorial Split Banners (from the attached design) */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px] lg:min-h-[580px]">
        {/* Left Banner: Special Offer */}
        <Link
          className="group relative flex flex-col justify-between p-6 sm:p-space-margin overflow-hidden bg-surface-container-high transition-transform duration-700"
          href="/shop"
        >
          {/* Visual Backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKhGqhlBlciSMZZtBiltmy0UfBrGAkMOjKR3NdI0jXt1621HXpQwXkAQJdV3OOfw0HFBgllDGIFKvan59uG3gC98O63hsyelyj4rwTZwn5gkd2YB7w3cUTWTa-O3VsIQkuCZ-2fIB7J1VhO-6tEquERoQCn2gTYSLKmxkYrbb2YOc30YQs2OMYROjT5OnF1CIhjxFwi0Agfex-BxfuK8mAOTWHU6gWZFKQNvkBQVIo7Ep0EQniIi9_')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-primary/40" />

          {/* Upper Banner Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm text-on-primary">
            <span className="font-action-label text-action-label uppercase tracking-widest bg-primary/40 backdrop-blur-sm px-space-sm py-1">
              Special Offer
            </span>
            <span className="font-meta-bracket text-meta-bracket tracking-wider text-surface-container-highest uppercase">
              [Code: OUD40]
            </span>
          </div>

          {/* Lower Banner Caption */}
          <div className="relative z-10 max-w-md pt-space-xl">
            <p className="font-body-lg text-body-lg text-on-primary font-medium tracking-tight mb-space-sm leading-relaxed drop-shadow-sm">
              Up to 40% off — discover this season’s curated extractions: fresh
              aquatic, woody amber &amp; smoky oud.
            </p>
            <div className="inline-flex items-center gap-space-xs font-action-label text-action-label uppercase tracking-widest text-on-primary border-b border-on-primary/60 pb-1 group-hover:border-on-primary group-hover:translate-x-1 transition-all">
              <span>Explore Selections</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Right Banner: Bestsellers */}
        <Link
          className="group relative flex flex-col justify-between p-6 sm:p-space-margin overflow-hidden bg-primary transition-transform duration-700"
          href="/shop/cosmic-intense"
        >
          {/* Visual Backdrop */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYkxBVjkW_yv3t0ZIhySpxUDWgpBxhPgl1LkfccIXswsHYODrBZ6RoQtW7t3ygINt25c-2mj5Yl9ZvYWeswXPIRaf-8xlV0t0FlAf0ndpSEcr8RhDssMFpicFdfYEq5OqExXSDqpNIOHoYmdqhK63czFj6EpqJ8yY3ZHcZs5xvaaUX7L_mmaNioka_thQQc7GHaPjpQSJNa2GpzXoCLtpYNtupRi80PliWhAb7MUDms0CtZ5B4BHAb')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

          {/* Upper Banner Content */}
          <div className="relative z-10 flex items-center justify-between text-on-primary">
            <span className="font-action-label text-action-label uppercase tracking-widest bg-primary/40 backdrop-blur-sm px-space-sm py-1">
              Bestsellers
            </span>
            <span className="font-meta-bracket text-meta-bracket tracking-wider text-surface-container-highest uppercase">
              [Edition 1]
            </span>
          </div>

          {/* Lower Banner Caption */}
          <div className="relative z-10 max-w-md self-end text-right pt-space-xl">
            <h3 className="font-display-hero text-2xl lg:text-3xl text-on-primary mb-space-xs tracking-tight font-light">
              Valentino Uomo &amp; Cosmic Intense
            </h3>
            <p className="font-body-md text-body-md text-surface-container-highest mb-space-sm leading-snug drop-shadow-sm">
              The formulations our guests return to most — refined,
              architectural, and always in sovereign demand.
            </p>
            <div className="inline-flex items-center gap-space-xs font-action-label text-action-label uppercase tracking-widest text-on-primary border-b border-on-primary/60 pb-1 group-hover:border-on-primary group-hover:-translate-x-1 transition-all">
              <ArrowLeft className="w-4 h-4" />
              <span>View Archival Icons</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
