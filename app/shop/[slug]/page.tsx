"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, Product } from "@/lib/data/mock-data";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { use } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState<number>(
    product.sizes[1]?.size || product.sizes[0]?.size || 50,
  );
  const [activeThumb, setActiveThumb] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const { addItem } = useCartStore();

  const currentSizeObj = product.sizes.find((s) => s.size === selectedSize) ||
    product.sizes[0] || {
      size: 50,
      price: product.basePrice,
      formattedPrice: `ZMK ${product.basePrice.toFixed(2)}`,
    };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      size: currentSizeObj.size,
      price: currentSizeObj.price,
      image: product.heroImage,
      quantity: 1,
    });

    setAddedAnimation(true);
    toast.success(`Added ${product.title} (${currentSizeObj.size}ml) to cart`);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1600);
  };

  return (
    <div className="w-full bg-surface-container-lowest min-h-screen pt-20">
      <div className="w-full px-4 sm:px-8 lg:px-margin pb-space-xl">
        {/* Top Metadata Index & Mini Gallery Thumbnails Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-space-md mb-space-lg hairline-b pb-4">
          <div className="lg:col-span-6 flex items-center gap-space-xs text-secondary font-meta-bracket text-meta-bracket flex-wrap">
            <Link className="hover:text-primary transition-colors" href="/shop">
              [Catalog]
            </Link>
            <span>/</span>
            <Link className="hover:text-primary transition-colors" href="/shop">
              {product.categoryLabel || "[Women]"}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">[{product.title}]</span>
          </div>

          {/* Thumbnail Switcher */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-center gap-space-sm">
            {product.thumbnails && product.thumbnails.length > 0 ? (
              product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  aria-label={`View thumbnail ${idx + 1}`}
                  className={`group p-1 transition-all focus:outline-none hairline-border ${
                    activeThumb === idx
                      ? "bg-surface-container-low border-primary"
                      : "bg-surface-container-lowest opacity-60 hover:opacity-100"
                  }`}
                  type="button"
                >
                  <img
                    className="w-9 h-9 object-contain"
                    alt={`Thumbnail view ${idx + 1}`}
                    src={thumb}
                  />
                </button>
              ))
            ) : (
              <span className="font-meta-bracket text-xs text-secondary">
                [Original Flacon Specimen]
              </span>
            )}
          </div>

          <div className="lg:col-span-3 hidden lg:flex justify-end">
            <span className="font-meta-bracket text-meta-bracket text-secondary uppercase tracking-widest">
              {product.refCode || "[Ref: CJ-90412-EXT]"}
            </span>
          </div>
        </div>

        {/* Main Asymmetric Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Typography, Olfactory Profile, Action Controls */}
          <div className="lg:col-span-4 flex flex-col justify-start z-10">
            {/* Header Monograph */}
            <h1 className="font-display-hero text-3xl sm:text-5xl text-primary tracking-tight uppercase mb-space-xs">
              {product.title}
            </h1>
            <p className="font-headline-sm text-headline-sm text-secondary font-normal mb-space-lg">
              {product.subtitle}
            </p>

            {/* Museum Specimen Ingredient Row */}
            {product.specimens && product.specimens.length > 0 && (
              <div className="flex items-center gap-space-sm mb-space-lg flex-wrap">
                {product.specimens.map((specimen, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center bg-surface-container-low hairline-border overflow-hidden transition-transform hover:scale-105"
                    title={specimen.name}
                  >
                    <img
                      className="w-9 h-9 object-contain"
                      alt={specimen.alt || specimen.name}
                      src={specimen.image}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Olfactory Architecture List */}
            {product.olfactoryNotes && (
              <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface mb-space-lg">
                <div className="flex items-baseline gap-space-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1" />
                  <span>
                    <strong className="font-medium text-primary">Top:</strong>{" "}
                    {product.olfactoryNotes.top}
                  </span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1" />
                  <span>
                    <strong className="font-medium text-primary">Heart:</strong>{" "}
                    {product.olfactoryNotes.heart}
                  </span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1" />
                  <span>
                    <strong className="font-medium text-primary">Base:</strong>{" "}
                    {product.olfactoryNotes.base}
                  </span>
                </div>
              </div>
            )}

            {/* Editorial Description Narrative */}
            <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg pr-space-md">
              {product.description}
            </p>

            {/* Bracketed Action Footnotes */}
            <div className="flex items-center gap-space-xl mb-space-xl font-meta-bracket text-meta-bracket text-secondary">
              <button
                onClick={() =>
                  toast.info(product.fullDescription || product.description)
                }
                className="hover:text-primary transition-colors text-left"
                type="button"
              >
                [Full description]
              </button>
              <Link
                href="/shop/compare"
                className="hover:text-primary transition-colors text-left"
              >
                [Similar perfumes]
              </Link>
            </div>

            {/* Interactive Size Selector & Commerce Action */}
            <div className="flex flex-col gap-space-md mt-auto pt-4 hairline-t">
              <div className="flex items-center gap-space-md">
                <span className="font-body-md text-body-md text-primary font-medium">
                  Size
                </span>
                <span className="font-price-tag text-price-tag text-secondary uppercase">
                  ml
                </span>
                <div
                  className="flex items-center gap-space-xs"
                  id="size-selector-group"
                >
                  {product.sizes.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s.size)}
                      className={`w-9 h-9 flex items-center justify-center font-action-label text-action-label transition-colors hairline-border ${
                        selectedSize === s.size
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-lowest text-primary hover:bg-surface-container-high"
                      }`}
                      type="button"
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Monolithic Action Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-space-lg font-action-label text-action-label uppercase tracking-widest transition-all duration-200 shadow-none active:scale-[0.99] flex items-center justify-center gap-space-sm ${
                  addedAnimation
                    ? "bg-secondary text-white"
                    : "bg-primary text-on-primary hover:bg-surface-container-lowest hover:text-primary hairline-border"
                }`}
                id="add-to-cart-btn"
                type="button"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO REQUISITION [1]</span>
                  </>
                ) : (
                  <>
                    <span>ADD TO CART</span>
                    <span id="price-target">
                      ZMK {currentSizeObj.price.toFixed(2)}
                    </span>
                  </>
                )}
              </button>

              {/* Micro Dispatch Note */}
              <div className="flex items-center justify-between font-meta-bracket text-meta-bracket text-secondary pt-space-xs">
                <span>
                  [Dispatches within 24h • Complimentary 2ml sample included]
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Sculptural Hero Object & Raw Still-Life Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[600px] my-space-lg lg:my-0">
            {/* Subtle Ambient Field Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-error-container/20 to-transparent blur-3xl opacity-60" />
            </div>

            {/* Hero Photorealistic Composition Collage */}
            <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">
              <img
                className="w-full max-h-[600px] object-contain drop-shadow-md select-none transform transition-transform duration-700 hover:scale-[1.02]"
                alt={product.imageAlt}
                src={
                  activeThumb === 0
                    ? product.heroImage
                    : product.thumbnails[activeThumb] || product.heroImage
                }
              />
            </div>
          </div>

          {/* Right Column: Curated Community Editorial Reviews Feed */}
          <div className="lg:col-span-3 flex flex-col pt-space-xs">
            {/* Section Marker Taxonomy */}
            <div className="mb-space-lg flex items-center justify-between hairline-b pb-2">
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase tracking-wider">
                [customers say]
              </span>
              <span className="font-price-tag text-price-tag text-secondary">
                {product.rating.toFixed(1)} / 5.0 [{product.reviewCount}]
              </span>
            </div>

            {/* Vertical Reviews Stream */}
            <div className="flex flex-col gap-space-xl">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((rev) => (
                  <article key={rev.id} className="flex flex-col">
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-xs">
                      &ldquo;{rev.content}&rdquo;
                    </p>
                    <div className="font-body-sm text-body-sm text-secondary flex flex-col gap-0.5">
                      <span>Posted {rev.timeAgo}</span>
                      <span>Name {rev.author}</span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-secondary text-xs">
                  <p className="mb-2">
                    &ldquo;Exceptional sillage and clinical elegance. The
                    craftsmanship of this batch is undeniable.&rdquo;
                  </p>
                  <span>— Verified Patron, Zurich Archive</span>
                </div>
              )}
            </div>

            {/* Bottom Action for Reviews */}
            <div className="pt-space-lg mt-space-md hairline-t">
              <Link
                className="font-meta-bracket text-meta-bracket text-secondary hover:text-primary transition-colors inline-block"
                href="#reviews"
              >
                [Read all {product.reviewCount} testimonials →]
              </Link>
            </div>
          </div>
        </div>

        {/* Edge-to-Edge Cross-Discovery Section: Monographic Taxonomy Matrix */}
        <div className="mt-space-xl pt-space-xl hairline-t">
          <div className="flex items-center justify-between mb-space-lg">
            <div className="flex items-center gap-space-sm">
              <span className="font-meta-bracket text-meta-bracket text-secondary">
                [Parfums Parallèles]
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-tight">
                Formulations of Similar Resonance
              </h2>
            </div>
            <Link
              href="/shop/compare"
              className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors hidden sm:inline"
            >
              [Comparative Olfactory Index →]
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {product.similarProducts && product.similarProducts.length > 0
              ? product.similarProducts.map((sim, idx) => (
                  <Link
                    key={idx}
                    className="group flex flex-col p-space-md bg-surface-container-low hover:bg-surface-container transition-all hairline-border"
                    href={`/shop/${sim.slug}`}
                  >
                    <div className="w-full aspect-[4/5] flex items-center justify-center overflow-hidden mb-space-sm">
                      <img
                        className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                        alt={sim.title}
                        src={sim.image}
                      />
                    </div>
                    <div className="flex items-baseline justify-between mt-auto">
                      <span className="font-body-md text-body-md font-medium text-primary group-hover:underline truncate">
                        {sim.title}
                      </span>
                      <span className="font-price-tag text-price-tag text-secondary">
                        ZMK {sim.price.toFixed(2)}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 truncate">
                      {sim.notes}
                    </span>
                  </Link>
                ))
              : PRODUCTS.slice(1, 5).map((p) => (
                  <Link
                    key={p.id}
                    className="group flex flex-col p-space-md bg-surface-container-low hover:bg-surface-container transition-all hairline-border"
                    href={`/shop/${p.slug}`}
                  >
                    <div className="w-full aspect-[4/5] flex items-center justify-center overflow-hidden mb-space-sm">
                      <img
                        className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                        alt={p.title}
                        src={p.heroImage}
                      />
                    </div>
                    <div className="flex items-baseline justify-between mt-auto">
                      <span className="font-body-md text-body-md font-medium text-primary group-hover:underline">
                        {p.title}
                      </span>
                      <span className="font-price-tag text-price-tag text-secondary">
                        ZMK {p.basePrice.toFixed(0)}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary mt-0.5 truncate">
                      {p.description}
                    </span>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
