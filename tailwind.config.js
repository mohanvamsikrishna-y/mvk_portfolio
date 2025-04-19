// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#fdf7f0",         // light mode background
        soft: "#e9dfd0",          // supporting light tones
        primary: "#1e1e1c",       // dark background
        accent: "#b99470",        // golden highlight
        textLight: "#1f1f1f",     // main text in light mode
        textDark: "#f5f5f5",      // main text in dark mode
        subtle: "#6b7280",        // gray-500 (optional muted)
        meta: "#475569",          // slate-600 for light mode metadata
        metaDark: "#cbd5e1",      // slate-300 for dark mode metadata
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        newyork: ['"New York"', "Georgia", "serif"], // <- added only this line
      },
      boxShadow: {
        glow: "0 0 10px rgba(185, 148, 112, 0.4)",
      },
    },
  },
  plugins: [],
};
