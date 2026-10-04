"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/lib/store/cart-store";
import { Menu, X, Utensils } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openCart, getTotalCount } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCount = mounted ? getTotalCount() : 0;

  const navLinks = [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Experiences", href: "/experiences" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none mix-blend-difference text-white select-none">
        <div className="h-20 w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Main Nav */}
          <div className="flex items-center gap-6 sm:gap-10 pointer-events-auto">
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-opacity hover:opacity-75 focus:outline-none"
              aria-label="Riley's Home"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <Image
                  src="/images/rileys-3d-logo.png"
                  alt="Riley's Monogram"
                  fill
                  sizes="32px"
                  className="object-contain filter brightness-200 select-none"
                />
              </div>
              {/* <span className="font-sans font-black text-lg sm:text-xl tracking-tighter uppercase text-white">
                RILEY&apos;S<sup className="text-[9px] font-mono ml-0.5">®</sup>
              </span> */}
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-sans font-bold text-xs lg:text-[13px] uppercase tracking-[0.2em] transition-all duration-200 ${
                      isActive
                        ? "text-white font-extrabold border-b-2 border-white pb-0.5"
                        : "text-white/85 hover:text-white hover:opacity-75"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Action Controls: Book Table, Cart, Avatar & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-6 pointer-events-auto">
            <Link
              href="/reservations"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white text-white font-sans font-bold text-[11px] uppercase tracking-[0.18em] transition-all duration-200 hover:bg-white hover:text-black"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </Link>

            <button
              onClick={openCart}
              type="button"
              className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70 focus:outline-none"
              aria-label="View Shopping Cart"
            >
              <span>Cart</span>
              <span className="font-mono font-bold">[{totalCount}]</span>
            </button>

            {/* Profile Avatar with blend isolation */}


            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-white transition-opacity hover:opacity-70 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Normal Blend Mode for crystal clarity) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full z-50 bg-[#f6f2ea] border-b border-[#d5cbbf] shadow-2xl px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cbbf]/60">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6">
                  <Image
                    src="/images/rileys-3d-logo.png"
                    alt="Riley's Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-mono text-xs text-[#e69500] uppercase font-bold">
                Lusaka, Zambia
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sans text-sm font-bold uppercase tracking-widest py-1.5 flex items-center justify-between ${
                      isActive
                        ? "text-[#2c221e] font-black underline underline-offset-4"
                        : "text-[#6e6059] hover:text-[#2c221e]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-[#6e6059]">→</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#d5cbbf]/60 flex flex-col gap-2.5">
              <Link
                href="/reservations"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#2c221e] text-[#f6f2ea] font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#43342e] transition-colors"
              >
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#ede6db] text-[#2c221e] font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#dcd2c7] transition-colors"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
