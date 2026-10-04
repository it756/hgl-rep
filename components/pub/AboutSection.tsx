"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GalleryCardProps {
  src: string;
  alt: string;
  title?: string;
  price?: string;
  aspect?: string;
  widthClass?: string;
}

// 3D Tilt Card component on mouse hover
function TiltCard({
  src,
  alt,
  title,
  price,
  aspect = "aspect-[4/3]",
  widthClass = "w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]",
}: GalleryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates from card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth tilt feel
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
    stiffness: 280,
    damping: 25,
  });
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 280,
    damping: 25,
  });
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 300,
    damping: 30,
  });
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`relative flex-shrink-0 ${aspect} ${widthClass} rounded-none overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${
        isHovered ? "shadow-[0_20px_40px_rgba(0,0,0,0.35)] z-20" : "shadow-md"
      }`}
    >
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 300px, 480px"
          className="object-cover filter contrast-[1.05] brightness-95 transition-transform duration-700 ease-out"
        />

        {/* Ambient Subtle Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

        {/* Dynamic Light Glare on Hover */}
        {isHovered && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)`,
            }}
            className="absolute inset-0 pointer-events-none"
          />
        )}
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm text-white flex items-center justify-between">
          <span className="font-extrabold text-xs uppercase tracking-wider font-sans">
            {title}
          </span>
          {price && (
            <span className="font-mono text-xs font-semibold">{price}</span>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function AboutSection() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Gallery items with varied portrait, landscape, and panoramic dimensions matching the reference design
  const galleryItems = [
    {
      src: "/images/pub-table-feast.jpg",
      alt: "Vibrant pub dining table with shared bowls, cocktails and fresh juices",
      widthClass: "w-[290px] sm:w-[380px] md:w-[460px]",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/images/dish-chef.jpg",
      alt: "Chef crafting culinary dishes with delicate steam infusion",
      widthClass: "w-[220px] sm:w-[270px] md:w-[310px]",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/dish-signature-steak.jpg",
      alt: "Prime tender cut hardwood flame steak seared to perfection",
      widthClass: "w-[300px] sm:w-[390px] md:w-[470px]",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/bar-signature-cocktail.jpg",
      alt: "Glowing handcrafted cocktail in crystal rocks glass with orange crown",
      widthClass: "w-[240px] sm:w-[300px] md:w-[350px]",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/pub-smoky-grill.jpg",
      alt: "Pitmaster grilling skewers and sweet corn over open hardwood barbecue smoke",
      widthClass: "w-[240px] sm:w-[300px] md:w-[350px]",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/images/pub-beer-cheers.jpg",
      alt: "Cold draft lager beers poured fresh from the tap",
      widthClass: "w-[220px] sm:w-[280px] md:w-[320px]",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/pub-friends-wine.jpg",
      alt: "Friends dining and laughing at intimate table with fine wine",
      widthClass: "w-[280px] sm:w-[360px] md:w-[430px]",
      aspect: "aspect-[4/3]",
    },
  ];

  // Bar Highlight Cards
  const barHighlights = [
    {
      src: "/images/bar-signature-cocktail.jpg",
      alt: "Smoked Old Fashioned",
      title: "SMOKED OLD FASHIONED",
      price: "ZMK 140",
    },
    {
      src: "/images/pub-beer-cheers.jpg",
      alt: "House Draft Lager Flight",
      title: "HOUSE DRAFT LAGER FLIGHT",
      price: "ZMK 180",
    },
    {
      src: "/images/pub-smoky-grill.jpg",
      alt: "Charcoal Grilled T-Bone & Pours",
      title: "CHARCOAL T-BONE & POURS",
      price: "ZMK 280",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 w-full bg-[#f6f2ea] text-[#2c221e] py-20 sm:py-28 overflow-hidden shadow-[0_-35px_70px_rgba(0,0,0,0.6)] border-t border-[#e2dcd4]"
    >
      {/* 1. Header: ABOUT RILEY'S */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-8 mb-14 sm:mb-16">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#2c221e] font-sans mb-6">
          ABOUT RILEY&apos;S
        </h2>

        <p className="font-sans font-medium text-base sm:text-lg md:text-xl  text-[#3f312b] max-w-3xl mx-auto leading-relaxed mb-8">
          Riley&apos;s is a contemporary pub and grill that brings a curated
          selection of food, wine, spirits, beers, and cocktails to you whether
          you&apos;re seated in our space or at home — a nice time anywhere you
          are.
        </p>

        <div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 border border-[#2c221e] bg-[#2c221e] text-[#f6f2ea] font-extrabold text-xs sm:text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-[#f6f2ea] hover:text-[#2c221e] active:scale-[0.98] transition-all duration-300 shadow-sm"
          >
            <span>DISCOVER MORE</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 font-sans font-bold text-sm">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* 2. Seamless Infinite Auto-Scrolling Strip with 3D Tilt Cards */}
      <div
        className="relative w-full py-6 overflow-hidden"
        onMouseEnter={() => setIsMarqueePaused(true)}
        onMouseLeave={() => setIsMarqueePaused(false)}
      >
        <motion.div
          animate={isMarqueePaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 26,
              ease: "linear",
            },
          }}
          className="flex items-center gap-6 sm:gap-8 w-max px-4"
          style={{ willChange: "transform" }}
        >
          {/* Double array for seamless loop */}
          {[...galleryItems, ...galleryItems].map((item, idx) => (
            <TiltCard
              key={`${item.src}-${idx}`}
              src={item.src}
              alt={item.alt}
              aspect={item.aspect}
              widthClass={item.widthClass}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
