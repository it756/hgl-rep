"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { createTableReservation } from "@/lib/supabase/actions";
import { toast } from "sonner";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ReservationsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("19:00");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !timeSlot) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await createTableReservation({
        guestName: name,
        guestEmail: email || "concierge@rileys.com",
        guestPhone: phone,
        partySize: parseInt(partySize, 10),
        date,
        timeSlot,
        specialRequests: notes,
      });

      if (res.success) {
        setIsSuccess(true);
        toast.success(res.message);
      } else {
        toast.error(res.message || "Failed to book table.");
      }
    } catch {
      toast.error(
        "An error occurred while booking. Please try again or call us.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f2ea] text-primary flex flex-col lg:flex-row">
      {/* Left Column (50%): Cocktail on Green Linen with Bottom Anchored BOOKING text */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto lg:h-auto flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-20 sm:pt-24 lg:pt-24 overflow-hidden bg-[#181d19]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/booking-cocktail-green.jpg"
            alt="Riley's Craft Cocktail & Table Experience"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>


        {/* Bottom Giant BOOKING Typography */}
        <div className="relative z-10 pt-32 sm:pt-48 lg:pt-0 mt-auto select-none">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.04em] uppercase leading-[0.82] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
            BOOKING
          </h1>
        </div>
      </div>

      {/* Right Column (50%): Clean Editorial Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16 pt-20 sm:pt-24 lg:pt-24 bg-[#f6f2ea]">
        <div className="w-full max-w-xl">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#ede6db] border border-[#d5cbbf] p-8 sm:p-10 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-[#2c221e] mx-auto" />
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
                We Expect Your Arrival
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                Thank you, <strong className="text-primary">{name}</strong>.
                Your table for{" "}
                <strong className="text-primary">{partySize} guests</strong> is
                registered for <strong className="text-primary">{date}</strong>{" "}
                at <strong className="text-primary">{timeSlot}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-on-primary px-8 py-3 font-action-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Book Another Table
                </button>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-primary">
                  Book a Table
                </h2>
                <p className="text-secondary text-sm mt-2">
                  Reserve your evening at Riley&apos;s for handcrafted
                  cocktails, flame-grilled cuts, and warm hospitality.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Okuku"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Phone Number *
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
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={partySize}
                        onChange={(e) => setPartySize(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="8">8+ Large Party</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:30">1:30 PM (Lunch)</option>
                        <option value="17:00">5:00 PM (Aperitivo)</option>
                        <option value="18:30">6:30 PM (Dinner)</option>
                        <option value="19:00">7:00 PM (Prime Dinner)</option>
                        <option value="20:00">8:00 PM (Prime Dinner)</option>
                        <option value="21:30">
                          9:30 PM (Late Night / Drinks)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Booth preference, dietary requirements, birthday celebration..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#fbfaf8] border border-[#d5cbbf] p-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-4 font-action-label text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-50"
                >
                  <span>
                    {isSubmitting ? "Confirming Table..." : "Book A Table"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-secondary text-center pt-2">
                  By booking you agree to Riley&apos;s reservation guidelines.
                  Direct concierge:{" "}
                  <a
                    href="tel:+260571434300"
                    className="underline font-bold text-primary"
                  >
                    +260 571434300
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
