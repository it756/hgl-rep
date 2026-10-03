"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast.success("Registered for Riley’s private dispatch.");
    setEmail("");
  };

  return (
    <footer className="sticky bottom-0 z-0 w-full bg-[#1b1513] text-[#e8ded6] pt-16 sm:pt-24 pb-0 overflow-hidden select-none">
      <div className="w-full px-4 sm:px-8 lg:px-margin">
        {/* Top 4-Column Metadata Grid matching Marlund Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-16 sm:mb-24">
          {/* Col 1: Brand & Copyright */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-extrabold text-2xl tracking-[0.14em] uppercase text-white font-sans">
                RILEY&apos;S&reg;
              </span>
            </div>
            <span className="font-extrabold text-[11px] sm:text-xs tracking-wider uppercase text-[#a89b91] font-sans">
              &copy; 2026 ALL RIGHTS RESERVED
            </span>
          </div>

          {/* Col 2: Contact */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-extrabold text-xs tracking-widest uppercase text-white/50 font-sans mb-1">
              CONTACT
            </span>
            <span className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] font-sans">
              LUSAKA ATELIER, ZAMBIA
            </span>
            <a
              href="tel:+260571434300"
              className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] hover:text-white transition-colors font-sans"
            >
              +260 571434300
            </a>
            <a
              href="mailto:info@rileys.com"
              className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] hover:text-white transition-colors font-sans"
            >
              INFO@RILEYS.COM
            </a>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-extrabold text-xs tracking-widest uppercase text-white/50 font-sans mb-1">
              OPENING HOURS
            </span>
            <span className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] font-sans">
              MON-FRI: 08:00–20:00
            </span>
            <span className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] font-sans">
              SATURDAY: 09:00–19:00
            </span>
            <span className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] font-sans">
              SUNDAY: 09:00–20:00
            </span>
          </div>

          {/* Col 4: Socials & Dispatch */}
          <div className="flex flex-col space-y-1.5">
            <span className="font-extrabold text-xs tracking-widest uppercase text-white/50 font-sans mb-1">
              SOCIALS &amp; INQUIRIES
            </span>
            <div className="flex flex-col space-y-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] hover:text-white transition-colors font-sans"
              >
                INSTAGRAM
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] hover:text-white transition-colors font-sans"
              >
                FACEBOOK
              </a>
              <Link
                href="/reservations"
                className="font-extrabold text-xs sm:text-[13px] tracking-wider uppercase text-[#e8ded6] hover:text-white transition-colors font-sans"
              >
                TABLE BOOKINGS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Full-Bleed White/Off-White RILEY'S Typography at Bottom */}
      <div className="w-full overflow-hidden leading-none select-none flex items-end justify-center pointer-events-none">
        <h2 className="text-[17vw] sm:text-[19vw] lg:text-[21vw] font-black uppercase tracking-tighter text-[#f6f2ea] font-sans leading-[0.78] translate-y-[8%] m-0 p-0 text-center w-full">
          RILEY&apos;S
        </h2>
      </div>
    </footer>
  );
}
