"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { submitContactInquiry } from "@/lib/supabase/actions";
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
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please complete all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await submitContactInquiry({
        name,
        email,
        subject: subject ? `${subject} (${phone})` : phone,
        message,
      });
      if (res.success) {
        setSent(true);
        toast.success(res.message);
      }
    } catch {
      toast.error("Could not submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f2ea] text-primary flex flex-col lg:flex-row">
      {/* Left Column (50%): Cocktail Lounge with Bottom Anchored CONTACT text */}
      <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto lg:h-auto flex flex-col justify-between p-6 sm:p-10 lg:p-12 pt-20 sm:pt-24 lg:pt-24 overflow-hidden bg-[#181d19]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/contact-hero-lounge.jpg"
            alt="Riley's Direct Hospitality & Contact"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        {/* Bottom Giant CONTACT Typography */}
        <div className="relative z-10 pt-32 sm:pt-48 lg:pt-0 mt-auto select-none">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.04em] uppercase leading-[0.82] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
            CONTACT
          </h1>
        </div>
      </div>

      {/* Right Column (50%): Clean Editorial Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-[#f6f2ea]">
        <div className="w-full max-w-xl">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#ede6db] border border-[#d5cbbf] p-8 sm:p-10 text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-[#2c221e] mx-auto" />
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary">
                Thank You For Reaching Out
              </h2>
              <p className="text-secondary text-sm leading-relaxed">
                Our hospitality concierge in Lusaka has received your message
                and will reply to{" "}
                <strong className="text-primary">{email}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSent(false)}
                  className="bg-primary text-on-primary px-8 py-3 font-action-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-primary">
                  Get in Touch
                </h2>
                <p className="text-secondary text-sm mt-2">
                  Have questions about private dining, corporate bookings, or
                  special events? Send us a message or reach us directly.
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

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="david@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+260 571434300"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#fbfaf8] border border-[#d5cbbf] pl-10 pr-4 py-3 text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#fbfaf8] border border-[#d5cbbf] px-4 py-3 text-sm text-primary focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">
                      General Hospitality Inquiry
                    </option>
                    <option value="Private Event">
                      Private Lounge &amp; Event Booking
                    </option>
                    <option value="Corporate Hosting">
                      Corporate Dinner / Reception
                    </option>
                    <option value="Bottle Reserve">
                      Reserve Bottle Pre-Orders
                    </option>
                    <option value="Press / Media">
                      Press &amp; Media Inquiries
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-action-label text-xs uppercase tracking-wider text-primary mb-1.5 font-bold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, headcount, or specific requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
                    {isSubmitting ? "Transmitting Message..." : "Send Message"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Bottom Direct Info */}
                <div className="pt-6 border-t border-[#d5cbbf] grid grid-cols-2 gap-4 text-xs text-secondary">
                  <div>
                    <span className="font-bold text-primary block mb-0.5">
                      Location
                    </span>
                    <span>Lusaka, Zambia</span>
                  </div>
                  <div>
                    <span className="font-bold text-primary block mb-0.5">
                      Direct Line
                    </span>
                    <a
                      href="tel:+260571434300"
                      className="hover:text-primary transition-colors underline font-medium"
                    >
                      +260 571434300
                    </a>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
