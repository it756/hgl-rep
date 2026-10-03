"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/data/mock-data";

export default function FlaconStrip({
  title = "New Arrivals",
  edition = "[Series 2025.04]",
}: {
  title?: string;
  edition?: string;
}) {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-margin pt-space-md pb-space-lg hairline-b">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        <div className="flex-shrink-0">
          <h2 className="font-action-label text-action-label uppercase tracking-widest text-primary font-semibold">
            {title}
          </h2>
          <span className="font-meta-bracket text-meta-bracket text-secondary block mt-0.5">
            {edition}
          </span>
        </div>

        {/* Linear Product Flacon Strip */}
        <div className="flex items-center gap-space-lg overflow-x-auto pb-space-xs scrollbar-none flex-grow justify-start lg:justify-end">
          {PRODUCTS.slice(0, 8).map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group flex flex-col items-center flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-44 w-28 flex items-center justify-center p-space-xs relative">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain filter grayscale-0 contrast-105 group-hover:scale-105 transition-transform duration-300 select-none"
                />
              </div>
              <span className="font-body-sm text-body-sm text-secondary group-hover:text-primary mt-space-xs transition-colors text-center">
                {product.title}
              </span>
              <span className="font-price-tag text-price-tag text-on-surface">
                ZMK {product.basePrice.toFixed(0)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
