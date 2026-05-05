import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        primary: "#FFFFFF",
        secondary: "#8E8E93",
        success: "#30D158",
        warning: "#FF9F0A",
        error: "#FF453A",
        glass: "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.12)",
        "glass-strong": "rgba(255,255,255,0.16)",
      },
      borderRadius: {
        ios: "22px",
        "ios-sm": "14px",
        "ios-lg": "32px",
      },
      backdropBlur: {
        ios: "40px",
        "ios-strong": "60px",
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["SF Mono", "Menlo", "Consolas", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.5)",
        "glass-strong": "0 20px 60px 0 rgba(0,0,0,0.6)",
        glow: "0 0 40px rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
