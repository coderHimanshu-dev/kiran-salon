import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F0F0F",
          50: "#1A1A1A",
          100: "#2A2A2A",
          200: "#3A3A3A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8D48B",
          dark: "#B8941E",
          50: "#FDF8E8",
          100: "#F5EAC4",
          200: "#EDDC9F",
          300: "#E4CE7A",
          400: "#DCC055",
          500: "#D4AF37",
          600: "#B8941E",
          700: "#8C7117",
          800: "#604D10",
          900: "#342A09",
        },
        beige: {
          DEFAULT: "#F5F0E8",
          light: "#FAF8F3",
          dark: "#E8DFD0",
        },
        salon: {
          text: "#1A1A1A",
          muted: "#666666",
          white: "#FFFFFF",
          black: "#0F0F0F",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite linear",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "counter-up": "counterUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        counterUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #D4AF37 0%, #E8D48B 50%, #D4AF37 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #0F0F0F 100%)",
        "gradient-luxury":
          "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 30%, #2A2A2A 100%)",
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212, 175, 55, 0.3)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.4)",
        luxury: "0 20px 60px rgba(0, 0, 0, 0.3)",
        soft: "0 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
