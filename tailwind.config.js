/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // --- Brand palette -------------------------------------------------
        // Pulled from the Selah Skye artwork itself: warm golden-hour light
        // against a deep dusk sky. Neutral base, ONE accent (gold).
        ink: {
          DEFAULT: "#14110F", // warm near-black. Never pure #000.
          800: "#241F1B",
          700: "#3A322C",
          500: "#6B5F55",
          300: "#A2968B",
        },
        cream: {
          DEFAULT: "#FAF7F2", // warm off-white. Never pure #FFF.
          200: "#F1EBE1",
          300: "#E3D9CB",
        },
        gold: {
          DEFAULT: "#E8A33D", // the single accent. CTAs, links, active states.
          600: "#CE8A26",
          200: "#F7DEB0",
        },
        dusk: "#22304A", // depth only (sky tones), never used as a CTA color
      },
      fontFamily: {
        // Two families, no more. Display serif for personality, sans for reading.
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        // Deliberately subtle. sm on most things, md on elevated cards only.
        sm: "0 1px 2px rgba(20,17,15,0.06)",
        md: "0 4px 12px rgba(20,17,15,0.08)",
        lg: "0 12px 32px rgba(20,17,15,0.14)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 300ms ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
