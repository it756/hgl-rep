import HeroSection from "@/components/pub/HeroSection";
import AboutSection from "@/components/pub/AboutSection";
import WhatsHappeningSection from "@/components/pub/WhatsHappeningSection";
import MenuPreviewSection from "@/components/pub/MenuPreviewSection";
import BookEveningSection from "@/components/pub/BookEveningSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Arched Dome & 3D Logo (Sticky backdrop) */}
      <HeroSection />

      {/* 2. About Riley's Auto-Scrolling Gallery with 3D Tilt Cards (Slides over Hero) */}
      <AboutSection />

      {/* 3. What's Happening (Daily Specials & Order In) */}
      <WhatsHappeningSection />

      {/* 4. Book Your Evening at Riley's with Reserve Now Modal Pop-up */}
      <BookEveningSection />
    </div>
  );
}
