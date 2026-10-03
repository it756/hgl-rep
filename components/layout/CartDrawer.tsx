"use client";

import { useCartStore } from "@/lib/store/cart-store";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalAmount,
  } = useCartStore();

  if (!isOpen) return null;

  const total = getTotalAmount();

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-surface-container-lowest h-full shadow-2xl flex flex-col z-10 hairline-l animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-space-md hairline-b flex items-center justify-between">
          <div>
            <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block">
              [Requisition Index]
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary uppercase">
              Your Selection (
              {items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-surface-container-low transition-colors"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-space-md flex flex-col gap-space-md">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-secondary">
              <span className="font-meta-bracket text-[13px] uppercase block mb-2">
                [Archive is Empty]
              </span>
              <p className="font-body-md mb-6">
                No extractions or culinary items currently added to your
                requisition tray.
              </p>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="w-full bg-primary text-on-primary py-3 font-action-label text-action-label uppercase tracking-widest text-center hover:bg-secondary transition-colors"
                >
                  Explore Fragrance Catalog
                </Link>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="w-full bg-surface-container-low text-primary py-3 font-action-label text-action-label uppercase tracking-widest text-center hover:bg-surface-variant transition-colors"
                >
                  View Pub &amp; Grill Menu
                </Link>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-space-sm p-space-sm bg-surface-container-low hairline-border"
              >
                {/* Thumbnail */}
                <div className="w-16 h-20 bg-surface-container-lowest flex items-center justify-center p-1 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="font-headline-sm text-sm text-primary truncate">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-secondary hover:text-red-700 transition-colors p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {item.size && (
                    <span className="font-meta-bracket text-[11px] text-secondary block mt-0.5">
                      Volume: {item.size}ml
                    </span>
                  )}

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center hairline-border bg-surface-container-lowest">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-0.5 hover:bg-surface-container transition-colors text-primary"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 font-mono text-xs font-semibold text-primary">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-0.5 hover:bg-surface-container transition-colors text-primary"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-price-tag text-xs font-semibold text-primary">
                      ZMK {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-space-md hairline-t bg-surface-container-lowest flex flex-col gap-space-sm">
            <div className="flex items-baseline justify-between">
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase">
                [Subtotal Allocation]
              </span>
              <span className="font-headline-md text-headline-md font-semibold text-primary">
                ZMK {total.toFixed(2)}
              </span>
            </div>

            <p className="font-body-sm text-[11px] text-secondary">
              Includes complimentary 2ml extraction specimen. Dispatched within
              24h from Lusaka / Zurich.
            </p>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-primary text-on-primary py-4 font-action-label text-action-label uppercase tracking-widest text-center hover:bg-secondary transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Requisition</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={clearCart}
              className="font-meta-bracket text-[11px] text-secondary hover:text-red-700 transition-colors text-center uppercase"
            >
              [Clear All Items]
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
