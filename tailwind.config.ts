import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#070A0F",
        surface: "#0D111A",
        muted: "#A7B0C0",
        primary: "#7EE0FF",
        accent: "#B69CFF"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(126, 224, 255, 0.25)",
        card: "0 20px 60px rgba(7, 10, 15, 0.6)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(126, 224, 255, 0.12), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
