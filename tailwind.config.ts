import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated warm parchment & coffee brown luxury palette
        primary: "#2c221e",
        "on-primary": "#f6f2ea",
        "primary-container": "#3f312b",
        "on-primary-container": "#d7cec7",
        "primary-fixed": "#e8dfd8",
        "primary-fixed-dim": "#cfc2b8",
        "on-primary-fixed": "#2c221e",
        "on-primary-fixed-variant": "#43342e",
        "inverse-primary": "#d7cec7",

        secondary: "#6e6059",
        "on-secondary": "#ffffff",
        "secondary-container": "#ede5dc",
        "on-secondary-container": "#4a3e38",
        "secondary-fixed": "#ede5dc",
        "secondary-fixed-dim": "#dcd2c7",
        "on-secondary-fixed": "#2c221e",
        "on-secondary-fixed-variant": "#5a4d46",

        tertiary: "#2c221e",
        "on-tertiary": "#f6f2ea",
        "tertiary-container": "#3f312b",
        "on-tertiary-container": "#d7cec7",
        "tertiary-fixed": "#e8dfd8",
        "tertiary-fixed-dim": "#cfc2b8",
        "on-tertiary-fixed": "#2c221e",
        "on-tertiary-fixed-variant": "#43342e",

        surface: "#f6f2ea",
        "on-surface": "#2c221e",
        "surface-bright": "#faf8f5",
        "surface-dim": "#eae3d7",
        "surface-variant": "#eee7dc",
        "on-surface-variant": "#5a4d46",
        "surface-tint": "#6e6059",
        "surface-container": "#eee7dc",
        "surface-container-lowest": "#f6f2ea",
        "surface-container-low": "#ede6db",
        "surface-container-high": "#e5ded2",
        "surface-container-highest": "#ded6c8",
        "inverse-surface": "#2c221e",
        "inverse-on-surface": "#f6f2ea",

        background: "#f6f2ea",
        "on-background": "#2c221e",

        outline: "#8a7c73",
        "outline-variant": "#d5cbbf",
        border: "#d5cbbf",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Pub & Grill accents
        pub: {
          dark: "#1b1513",
          wood: "#2c221e",
          card: "#231c19",
          amber: "#e69500",
          beer: "#f59e0b",
          foam: "#f6f2ea",
          crimson: "#881337",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
      spacing: {
        margin: "2.5rem",
        gutter: "1.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "3rem",
      },
      fontFamily: {
        sans: [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        hanken: [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        "display-hero": [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        "meta-bracket": [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        "price-tag": [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        "action-label": [
          "'Hanken Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-hero": [
          "48px",
          { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "display-hero-mobile": [
          "32px",
          { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        "headline-md": [
          "22px",
          { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "500" },
        ],
        "headline-sm": [
          "16px",
          { lineHeight: "22px", letterSpacing: "0.02em", fontWeight: "600" },
        ],
        "body-lg": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "body-sm": ["11px", { lineHeight: "16px", fontWeight: "400" }],
        "meta-bracket": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "400" },
        ],
        "price-tag": [
          "11px",
          { lineHeight: "14px", letterSpacing: "0.02em", fontWeight: "400" },
        ],
        "action-label": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
