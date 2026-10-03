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
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const { openCart, getTotalCount } = useCartStore();

  useEffect(() => {
    setMounted(true);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show logo only when scrolled past the hero section
      const pastHero = pathname !== "/" ? true : currentScrollY > 380;
      setIsScrolledPastHero(pastHero);

      // Nav is transparent until user scrolls UP
      if (currentScrollY <= 40) {
        setIsSolid(false);
      } else if (currentScrollY < lastScrollY - 2) {
        // Scrolling up -> become solid
        setIsSolid(true);
      } else if (currentScrollY > lastScrollY + 2) {
        // Scrolling down -> become transparent
        setIsSolid(false);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const totalCount = mounted ? getTotalCount() : 0;

  const navLinks = [
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ];

  // Determine text theme: dark text on solid parchment, light text on transparent hero
  const isLightText = !isSolid && !isScrolledPastHero;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSolid
          ? "bg-surface-container-lowest/95 backdrop-blur-md hairline-b shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-8 lg:px-margin flex items-center justify-between">
        {/* Brand & Main Nav */}
        <div className="flex items-center gap-4 sm:gap-space-xl">
          <AnimatePresence>
            {isScrolledPastHero && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.85, x: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="/"
                  className="group flex items-center transition-opacity hover:opacity-85"
                  aria-label="Riley's Home"
                >
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
                    <Image
                      src="/images/rileys-3d-logo.png"
                      alt="Riley's 3D Emblem"
                      fill
                      sizes="36px"
                      className="object-contain filter drop-shadow-sm select-none"
                    />
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    (link.href !== "/#about" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-action-label text-action-label uppercase tracking-widest transition-colors ${
                    isLightText
                      ? isActive
                        ? "text-white font-semibold border-b-2 border-white pb-0.5"
                        : "text-white/80 hover:text-white"
                      : isActive
                        ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                        : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Controls & Cart */}
        <div className="flex items-center gap-space-md sm:gap-space-lg">
          <Link
            href="/reservations"
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 font-action-label text-[11px] uppercase tracking-wider transition-colors ${
              isLightText
                ? "bg-white/10 text-white border border-white/25 hover:bg-white hover:text-black backdrop-blur-sm"
                : "bg-surface-container-low text-primary border border-[#d5cbbf] hover:bg-primary hover:text-white"
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </Link>

          <button
            onClick={openCart}
            type="button"
            className={`flex items-center gap-1 font-action-label text-action-label uppercase tracking-wider transition-opacity hover:opacity-75 ${
              isLightText ? "text-white" : "text-primary"
            }`}
            aria-label="View Shopping Cart"
          >
            <span>Cart</span>
            <span className="font-mono font-semibold">[{totalCount}]</span>
          </button>

          {/* User profile avatar thumbnail */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/60 hidden sm:block">
            <img
              alt="Riley’s Patron"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 xl:hidden transition-colors ${
              isLightText
                ? "text-white hover:bg-white/10"
                : "text-primary hover:bg-surface-container-low"
            }`}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest hairline-b px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 hairline-b">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/rileys-3d-logo.png"
                  alt="Riley's Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-meta-bracket text-meta-bracket text-primary uppercase font-medium">
                [Riley&apos;s Navigation]
              </span>
            </div>
            <span className="font-meta-bracket text-meta-bracket text-pub-amber">
              Lusaka, Zambia
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-action-label text-[13px] uppercase tracking-widest text-primary hover:text-secondary py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-meta-bracket text-secondary">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 hairline-t flex flex-col gap-2">
            <Link
              href="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-primary text-on-primary font-action-label text-action-label uppercase tracking-widest"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-surface-container-low text-primary font-action-label text-action-label uppercase tracking-widest"
            >
              Order Delivery &amp; Takeout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
