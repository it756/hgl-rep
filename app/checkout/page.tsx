"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import { CheckCircle2, ShieldCheck, ArrowRight, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { items, getTotalAmount, clearCart } = useCartStore();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Lusaka");
  const [orderType, setOrderType] = useState<
    "merch_shipping" | "takeout" | "dine-in"
  >("merch_shipping");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<any | null>(null);

  const total = getTotalAmount();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your requisition tray is empty.");
      return;
    }
    if (!customerName || !customerEmail || !customerPhone) {
      toast.error("Please fill in all contact details.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderRef = `ORD-${Date.now().toString().slice(-6)}`;
      setOrderSuccess({
        orderRef,
        items: [...items],
        total,
        customerName,
        customerEmail,
        orderType,
      });
      clearCart();
      setIsSubmitting(false);
      toast.success(`Requisition confirmed: ${orderRef}`);
    }, 1000);
  };

  if (orderSuccess) {
    return (
      <div className="w-full bg-surface-container-lowest min-h-screen pt-20 py-16 px-4 sm:px-8 lg:px-margin">
        <div className="max-w-2xl mx-auto bg-surface-container-low p-space-lg hairline-border">
          <div className="flex items-center gap-3 mb-6 text-green-700">
            <CheckCircle2 className="w-10 h-10" />
            <div>
              <span className="font-meta-bracket text-xs text-secondary uppercase block">
                [Status: Requisition Logged]
              </span>
              <h1 className="font-headline-lg text-2xl text-primary font-semibold">
                Requisition #{orderSuccess.orderRef} Confirmed
              </h1>
            </div>
          </div>

          <p className="font-body-md text-secondary mb-6 leading-relaxed">
            Thank you,{" "}
            <strong className="text-primary">
              {orderSuccess.customerName}
            </strong>
            . Your order has been logged into our Lusaka fulfillment archive. A
            formal receipt and tracking dispatch will be sent to{" "}
            <strong className="text-primary">
              {orderSuccess.customerEmail}
            </strong>
            .
          </p>

          <div className="bg-surface-container-lowest p-4 hairline-border mb-6 space-y-2">
            <div className="flex justify-between font-body-sm">
              <span className="text-secondary font-meta-bracket">
                [Order Type]
              </span>
              <span className="uppercase font-semibold text-primary">
                {orderSuccess.orderType}
              </span>
            </div>
            <div className="flex justify-between font-body-sm">
              <span className="text-secondary font-meta-bracket">
                [Total Settled]
              </span>
              <span className="font-headline-sm text-base text-primary">
                ZMK {orderSuccess.total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="/shop"
              className="flex-1 bg-primary text-on-primary py-3.5 font-action-label text-action-label uppercase tracking-widest text-center hover:bg-secondary transition-colors"
            >
              Return to Catalog
            </Link>
            <Link
              href="/"
              className="px-6 py-3.5 bg-surface-container-lowest text-primary hairline-border font-action-label text-action-label uppercase tracking-widest hover:bg-surface-container transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-surface-container-lowest min-h-screen pt-20">
      <div className="w-full px-4 sm:px-8 lg:px-margin pt-space-md pb-space-lg hairline-b">
        <div className="flex items-center gap-2 font-meta-bracket text-meta-bracket text-secondary uppercase mb-1">
          <Link href="/shop" className="hover:text-primary transition-colors">
            [Catalog]
          </Link>
          <span>/</span>
          <span>[Requisition Checkout]</span>
        </div>
        <h1 className="font-display-hero text-3xl sm:text-5xl text-primary tracking-tight">
          Requisition Dispatch
        </h1>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-margin py-space-xl bg-surface-container-low">
        <form
          onSubmit={handleCheckout}
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
        >
          {/* Left: Contact & Fulfillment */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-lg hairline-border space-y-space-md">
            <div>
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-1">
                [Protocol • Step 01]
              </span>
              <h2 className="font-headline-sm text-xl text-primary font-semibold">
                Fulfillment Mode
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "merch_shipping", label: "Archival Delivery" },
                { id: "takeout", label: "Pub Takeout" },
                { id: "dine-in", label: "Table Dine-In" },
              ].map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setOrderType(mode.id as any)}
                  className={`py-3 px-2 font-action-label text-xs uppercase tracking-wider text-center hairline-border transition-colors ${
                    orderType === mode.id
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-low text-secondary hover:text-primary"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="pt-4 hairline-t">
              <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-2">
                [Protocol • Step 02: Patron Credentials]
              </span>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Okuku"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="patron@domain.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+260 571434300"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
                      City / Region *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {orderType === "merch_shipping" && (
                  <div>
                    <label className="block font-action-label text-[11px] uppercase tracking-wider text-primary mb-1">
                      Dispatch Delivery Address *
                    </label>
                    <input
                      type="text"
                      placeholder="Street, Residence or Hotel Room in Lusaka / Worldwide"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-surface-container-low p-2.5 font-body-sm text-on-surface outline-none hairline-border focus:border-primary transition-colors"
                      required={orderType === "merch_shipping"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-md sm:p-space-lg hairline-border">
            <span className="font-meta-bracket text-meta-bracket text-secondary uppercase block mb-2">
              [Tray Manifest • {items.length} Distinct Items]
            </span>
            <h3 className="font-headline-sm text-xl text-primary font-semibold mb-4">
              Requisition Summary
            </h3>

            {items.length === 0 ? (
              <p className="text-secondary font-body-sm py-4">
                No items currently selected.
              </p>
            ) : (
              <div className="space-y-3 mb-6 max-h-80 overflow-y-auto pr-1">
                {items.map((it) => (
                  <div
                    key={it.id}
                    className="flex items-center justify-between p-2 bg-surface-container-low hairline-border"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="w-10 h-10 object-contain flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="font-headline-sm text-xs text-primary truncate block font-medium">
                          {it.title}
                        </span>
                        <span className="font-meta-bracket text-[10px] text-secondary">
                          Qty: {it.quantity} {it.size ? `• ${it.size}ml` : ""}
                        </span>
                      </div>
                    </div>
                    <span className="font-price-tag text-xs font-semibold text-primary">
                      ZMK {(it.price * it.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2 pt-4 hairline-t font-body-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal:</span>
                <span className="text-primary font-semibold">
                  ZMK {total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">
                  Complimentary 2ml Extraction Specimen:
                </span>
                <span className="text-green-700 font-mono">ZMK 0.00</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2 hairline-t text-primary">
                <span>Total Amount:</span>
                <span className="font-headline-md">ZMK {total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full bg-primary text-on-primary py-4 font-action-label text-action-label uppercase tracking-widest hover:bg-secondary transition-colors mt-6 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span>
                {isSubmitting
                  ? "Transmitting Requisition..."
                  : "Authorize Requisition"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
