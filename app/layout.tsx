import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Riley's Pub & Grill | Lusaka — Great Hospitality & Food",
  description:
    "Where great hospitality meets exceptional food. Riley's Pub & Grill in Lusaka, Zambia featuring artisan flame grills, craft brews, table reservations, and curated lifestyle monographs.",
  keywords: [
    "Riley's Pub & Grill",
    "Lusaka Restaurants",
    "Zambia Pub",
    "Table Reservations Lusaka",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#1b1513] font-body-md text-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <CartDrawer />
          <main className="relative z-10 flex-1 w-full bg-surface-container-lowest shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            {children}
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              className:
                "bg-primary text-white border-0 font-body-sm rounded-none",
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
