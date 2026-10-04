"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  ArrowRight,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Truck,
  ShieldCheck,
  Utensils,
  ExternalLink,
} from "lucide-react";

export default function CheckoutPage() {
  const {
    items,
    getTotalAmount,
    getTotalCount,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCartStore();

  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Lusaka");
  const [deliveryOption, setDeliveryOption] = useState<
    "standard" | "express" | "takeout"
  >("standard");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [specialNotes, setSpecialNotes] = useState("");
  const [agreedToProcessing, setAgreedToProcessing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<{
    orderRef: string;
    items: typeof items;
    total: number;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    deliveryOption: string;
    address: string;
    city: string;
    notes: string;
    whatsappUrl: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = mounted ? getTotalAmount() : 0;
  const totalCount = mounted ? getTotalCount() : 0;
  const deliveryFee =
    deliveryOption === "express" ? 50 : deliveryOption === "standard" ? 0 : 0;
  const discountAmount = promoApplied ? total * 0.1 : 0;
  const finalTotal = Math.max(0, total + deliveryFee - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    if (promoCode.trim().toUpperCase() === "RILEYS10") {
      setPromoApplied(true);
      toast.success("Promo code RILEYS10 applied: 10% discount!");
    } else {
      toast.error("Invalid voucher or promotion code.");
    }
  };

  const generateWhatsAppMessage = (orderRef: string) => {
    const fullName = `${firstName} ${lastName}`.trim() || "Guest Patron";
    const deliveryLabel =
      deliveryOption === "standard"
        ? "Standard Delivery (Lusaka)"
        : deliveryOption === "express"
          ? "Express Dispatch (+ZMK 50.00)"
          : "Pub Takeout / Dine-in Pickup";

    const itemsText = items
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.title}* ${
            it.size ? `(${it.size}ml)` : ""
          } x${it.quantity} — ZMK ${(it.price * it.quantity).toFixed(2)}`,
      )
      .join("\n");

    const message = `*RILEY'S PUB & GRILL — ORDER REQUISITION* 🍽️
*Order Ref:* ${orderRef}
----------------------------------------
*Customer:* ${fullName}
*Phone:* ${phone}
*Email:* ${email}
*Fulfillment Mode:* ${deliveryLabel}
${
  deliveryOption !== "takeout"
    ? `*Delivery Address:* ${address || "Not specified"}, ${city}`
    : `*Pickup Location:* Riley's Lounge Bar, Lusaka`
}
${specialNotes ? `*Special Instructions:* ${specialNotes}\n` : ""}
*ORDER SUMMARY (${items.length} items):*
${itemsText}

*Subtotal:* ZMK ${total.toFixed(2)}
*Delivery:* ${deliveryFee > 0 ? `ZMK ${deliveryFee.toFixed(2)}` : "FREE"}
${promoApplied ? `*Discount (10%):* -ZMK ${discountAmount.toFixed(2)}\n` : ""}*TOTAL ESTIMATE:* ZMK ${finalTotal.toFixed(2)}
----------------------------------------
_Hello Riley's! I would like to confirm my order and coordinate payment & dispatch._`;

    return message;
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      toast.error("Your shopping bag is empty. Please add items to proceed.");
      return;
    }

    if (!firstName.trim() || !phone.trim() || !email.trim()) {
      toast.error("Please fill in your name, phone number, and email.");
      return;
    }

    if (deliveryOption !== "takeout" && !address.trim()) {
      toast.error("Please provide your delivery address.");
      return;
    }

    if (!agreedToProcessing) {
      toast.error("Please accept the order processing terms to proceed.");
      return;
    }

    setIsSubmitting(true);

    const orderRef = `RLY-${Date.now().toString().slice(-6)}`;
    const fullName = `${firstName} ${lastName}`.trim();
    const rawMessage = generateWhatsAppMessage(orderRef);
    const whatsappUrl = `https://wa.me/260571434300?text=${encodeURIComponent(
      rawMessage,
    )}`;

    setTimeout(() => {
      setOrderSuccess({
        orderRef,
        items: [...items],
        total: finalTotal,
        customerName: fullName,
        customerPhone: phone,
        customerEmail: email,
        deliveryOption,
        address,
        city,
        notes: specialNotes,
        whatsappUrl,
      });

      // Clear the cart
      clearCart();
      setIsSubmitting(false);

      toast.success(`Order ${orderRef} generated! Launching WhatsApp...`);

      // Open WhatsApp business chat in a new tab
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    }, 600);
  };

  // SUCCESS CONFIRMATION STATE
  if (orderSuccess) {
    return (
      <div className="w-full min-h-screen bg-[#f6f2ea] text-primary flex flex-col lg:flex-row">
        {/* Left Column (50%): Hero lounge visual with order ref */}
        <div className="relative w-full lg:w-1/2 min-h-[45vh] lg:min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-20 sm:pt-24 lg:pt-24 overflow-hidden bg-[#181d19]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/pub-table-feast.jpg"
              alt="Riley's Order Confirmed"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter brightness-[0.8] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
          </div>

          {/* Centered Order Pill */}
          <div className="relative z-10 my-auto text-white space-y-3">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Order #{orderSuccess.orderRef}
            </h2>
            <p className="text-white/80 text-sm max-w-md">
              Your order has been forwarded to our WhatsApp Business concierge.
              Our team is ready to prepare and dispatch your items.
            </p>
          </div>

          <div className="relative z-10 select-none">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white/20 tracking-[-0.04em] uppercase leading-[0.82]">
              CONFIRMED
            </h1>
          </div>
        </div>

        {/* Right Column (50%): Order Summary & WhatsApp Re-engagement */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-[#f6f2ea]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl bg-[#ede6db] border border-[#d5cbbf] p-6 sm:p-10 space-y-6"
          >
            <div className="flex items-center gap-4 border-b border-[#d5cbbf] pb-5">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0 text-[#128C7E]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-primary">
                  Order Successfully Confirmed
                </h3>
              </div>
            </div>

            <p className="text-secondary text-sm leading-relaxed">
              Thank you,{" "}
              <strong className="text-primary">
                {orderSuccess.customerName}
              </strong>
              . We have compiled your manifest for{" "}
              <strong className="text-primary">
                ZMK {orderSuccess.total.toFixed(2)}
              </strong>
              . If the WhatsApp chat did not open automatically, tap the button
              below to start chatting with our representative.
            </p>

            {/* Manifest Summary */}
            <div className="bg-[#fbfaf8] border border-[#d5cbbf] p-4 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-secondary border-b border-[#d5cbbf] pb-2">
                <span>Items Ordered ({orderSuccess.items.length})</span>
                <span>ZMK {orderSuccess.total.toFixed(2)}</span>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                {orderSuccess.items.map((it) => (
                  <div
                    key={it.id}
                    className="flex justify-between text-xs text-primary"
                  >
                    <span>
                      {it.quantity}x {it.title}{" "}
                      {it.size ? `(${it.size}ml)` : ""}
                    </span>
                    <span className="font-mono font-semibold">
                      ZMK {(it.price * it.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={orderSuccess.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 font-action-label text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#1ebd5a] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/menu"
                  className="w-full text-center py-3 bg-primary text-on-primary font-action-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-center py-3 bg-[#fbfaf8] border border-[#d5cbbf] text-primary font-action-label text-xs uppercase tracking-widest hover:bg-[#eae3d6] transition-colors"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // MAIN CHECKOUT VIEW
  return (
    <div className="w-full min-h-screen bg-[#f6f2ea] text-primary flex flex-col lg:flex-row relative">
      {/* Left Column (50%): Hero Background with the Scrollable Square Cart Card - Sticky on Viewport */}
      <div className="relative w-full lg:w-1/2 min-h-[500px] lg:h-screen lg:sticky lg:top-0 lg:self-start flex flex-col justify-between p-6 sm:p-8 lg:p-10 pt-20 sm:pt-22 lg:pt-20 pb-4 sm:pb-6 lg:pb-6 overflow-hidden bg-[#181d19]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/pub-table-feast.jpg"
            alt="Riley's Hospitality Experience"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
        </div>

        {/* Center: Scrollable Square Card on top of Background Image */}
        <div className="relative z-10 my-auto w-full max-w-sm sm:max-w-md xl:max-w-[420px] mx-auto aspect-square max-h-[350px] sm:max-h-[390px] xl:max-h-[430px] flex flex-col bg-black/80 backdrop-blur-md border border-white/20 p-4 sm:p-5 text-white shadow-2xl min-h-0">
          {/* Square Card Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/15 flex-shrink-0">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#e69500]" />
              <h2 className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                Shopping Bag ({totalCount})
              </h2>
            </div>
          </div>

          {/* Square Card Scrollable Item List */}
          <div className="flex-1 min-h-0 overflow-y-auto my-2.5 pr-1 space-y-3 divide-y divide-white/10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
            {!mounted || items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 text-white/70 space-y-2.5">
                <Utensils className="w-7 h-7 text-white/40" />
                <p className="text-xs uppercase tracking-wider font-semibold">
                  Your tray is currently empty
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/menu"
                    className="px-3 py-1.5 bg-white text-black font-action-label text-[10px] uppercase tracking-wider hover:bg-white/80 transition-colors"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/shop"
                    className="px-3 py-1.5 bg-white/10 text-white border border-white/30 font-action-label text-[10px] uppercase tracking-wider hover:bg-white/20 transition-colors"
                  >
                    Catalog
                  </Link>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="pt-2.5 first:pt-0 flex items-center justify-between gap-2.5"
                >
                  <div className="relative w-11 h-11 bg-white/10 border border-white/15 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image || "/images/drinks-cheers.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans font-semibold text-xs text-white truncate">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-white/60 block font-mono">
                      {item.size ? `Size: ${item.size}ml • ` : ""}ZMK{" "}
                      {item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center border border-white/30 bg-black/40">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-1 py-0.5 text-white/80 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="px-1.5 text-[10px] font-mono font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-1 py-0.5 text-white/80 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-white/40 hover:text-red-400 transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-white block">
                      ZMK {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Square Card Footer Summary */}
          <div className="pt-2.5 border-t border-white/15 flex-shrink-0 space-y-1 text-xs">
            <div className="flex justify-between text-white/70 text-[11px]">
              <span>Subtotal</span>
              <span className="font-mono">ZMK {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white/70 text-[11px]">
              <span>Delivery</span>
              <span className="font-mono text-[#e69500]">
                {deliveryFee === 0
                  ? "Free in Lusaka"
                  : `ZMK ${deliveryFee.toFixed(2)}`}
              </span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-emerald-400 text-[11px]">
                <span>Voucher (10%)</span>
                <span className="font-mono">
                  -ZMK {discountAmount.toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between items-baseline pt-1 border-t border-white/10 text-white font-bold text-xs sm:text-sm">
              <span className="uppercase tracking-wider">Total</span>
              <span className="text-sm sm:text-base font-extrabold text-[#e69500] font-mono">
                ZMK {finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Giant CHECKOUT Typography - Pinned to Bottom of Left Viewport */}
        <div className="relative z-10 pt-2 mt-auto select-none flex-shrink-0">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black text-white tracking-[-0.04em] uppercase leading-[0.82] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
            CHECKOUT
          </h1>
        </div>
      </div>

      {/* Right Column (50%): Clean Editorial Form for Details & Confirm Order */}
      <div className="w-full lg:w-1/2 flex items-start justify-center p-6 sm:p-10 lg:p-12 xl:p-16 pt-20 sm:pt-24 lg:pt-24 bg-[#f6f2ea]">
        <div className="w-full max-w-xl pb-16">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-primary">
              Information &amp; Dispatch
            </h2>
            <p className="text-secondary text-sm mt-2">
              Fill in your details below. Hitting{" "}
              <strong className="text-primary font-semibold">
                Confirm Order
              </strong>{" "}
              will direct your order to our WhatsApp Business desk to interact
              with a real person in real-time.
            </p>
          </div>

          <form onSubmit={handleConfirmOrder} className="space-y-6">
            {/* Section: Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#d5cbbf] pb-2">
                <span className="font-action-label text-xs uppercase tracking-wider text-primary font-extrabold">
                  Personal Information
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Okuku"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#fbfaf8] border border-[#d5cbbf] px-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+260 571434300"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="patron@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Delivery / Fulfillment */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-[#d5cbbf] pb-2">
                <span className="font-action-label text-xs uppercase tracking-wider text-primary font-extrabold">
                  Fulfillment &amp; Delivery
                </span>
              </div>

              {/* Delivery Options Selection */}
              <div className="space-y-2">
                <label
                  onClick={() => setDeliveryOption("standard")}
                  className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                    deliveryOption === "standard"
                      ? "bg-[#ede6db] border-primary"
                      : "bg-[#fbfaf8] border-[#d5cbbf] hover:border-[#b0a599]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "standard"}
                      onChange={() => setDeliveryOption("standard")}
                      className="accent-primary cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-primary block">
                        Standard Delivery (Lusaka Wide)
                      </span>
                      <span className="text-[11px] text-secondary">
                        Delivered fresh to your doorstep within 45–60 mins
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">
                    FREE
                  </span>
                </label>

                <label
                  onClick={() => setDeliveryOption("express")}
                  className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                    deliveryOption === "express"
                      ? "bg-[#ede6db] border-primary"
                      : "bg-[#fbfaf8] border-[#d5cbbf] hover:border-[#b0a599]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "express"}
                      onChange={() => setDeliveryOption("express")}
                      className="accent-primary cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-primary block">
                        Express Priority Dispatch
                      </span>
                      <span className="text-[11px] text-secondary">
                        Dedicated courier dispatched immediately (25–35 mins)
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">
                    ZMK 50.00
                  </span>
                </label>

                <label
                  onClick={() => setDeliveryOption("takeout")}
                  className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                    deliveryOption === "takeout"
                      ? "bg-[#ede6db] border-primary"
                      : "bg-[#fbfaf8] border-[#d5cbbf] hover:border-[#b0a599]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === "takeout"}
                      onChange={() => setDeliveryOption("takeout")}
                      className="accent-primary cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-primary block">
                        Pub Takeout / Table Dine-in
                      </span>
                      <span className="text-[11px] text-secondary">
                        Collect directly at Riley&apos;s Bar or served to your
                        table
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">
                    FREE
                  </span>
                </label>
              </div>

              {/* Delivery Address & City */}
              {deliveryOption !== "takeout" ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="sm:col-span-2">
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Delivery Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Street, Estate, Residence or Hotel in Lusaka"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      City / Area
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#fbfaf8] border border-[#d5cbbf] px-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-[#ede6db] border border-[#d5cbbf] text-xs text-secondary flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>
                    Your order will be prepared fresh for in-person collection
                    at our main lounge in Lusaka.
                  </span>
                </div>
              )}

              {/* Special Instructions / Notes */}
              <div>
                <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                  Preparation &amp; Dietary Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Extra spicy, no onions, cocktail garnish preferences, or gate code..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-[#fbfaf8] border border-[#d5cbbf] p-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            {/* Section: Promo Code / Voucher (optional) */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. RILEYS10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#fbfaf8] border border-[#d5cbbf] px-4 py-2.5 text-xs text-primary uppercase placeholder:normal-case placeholder:text-secondary/60 focus:outline-none focus:border-primary"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-5 py-2.5 bg-[#ede6db] border border-[#d5cbbf] text-primary font-action-label text-xs uppercase tracking-wider hover:bg-[#dfd7ca] transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Section: WhatsApp Concierge Agreement */}
            <div className="pt-2 border-t border-[#d5cbbf] space-y-3">
              <div className="p-3.5 bg-[#ede6db] border border-[#d5cbbf] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0 text-[#128C7E] mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <span className="font-bold text-primary block">
                    Direct Human Concierge via WhatsApp Business
                  </span>
                  <p className="text-secondary leading-relaxed">
                    Orders are handled personally. You can discuss delivery
                    timing, ask menu questions, and settle via Airtel Money, MTN
                    Mobile Money, Card on Delivery, or Cash.
                  </p>
                </div>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs text-secondary">
                <input
                  type="checkbox"
                  checked={agreedToProcessing}
                  onChange={(e) => setAgreedToProcessing(e.target.checked)}
                  className="accent-primary cursor-pointer w-4 h-4"
                />
                <span>
                  I agree to order confirmation and direct concierge
                  communication via WhatsApp.
                </span>
              </label>
            </div>

            {/* Confirm Order Button */}
            <button
              type="submit"
              disabled={isSubmitting || items.length === 0}
              className="w-full bg-primary text-on-primary py-4 font-action-label text-xs uppercase tracking-[0.2em] font-extrabold hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
              <span>
                {isSubmitting ? "Connecting to Concierge..." : "Confirm Order"}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Bottom Direct Contacts */}
            <div className="pt-4 border-t border-[#d5cbbf] grid grid-cols-2 gap-4 text-xs text-secondary">
              <div>
                <span className="font-bold text-primary block mb-0.5">
                  Concierge Desk
                </span>
                <span>Riley’s Pub &amp; Grill, Lusaka</span>
              </div>
              <div>
                <span className="font-bold text-primary block mb-0.5">
                  Direct Line &amp; WhatsApp
                </span>
                <a
                  href="https://wa.me/260571434300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline font-medium"
                >
                  +260 571434300
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
