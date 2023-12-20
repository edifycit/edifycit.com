/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(2, 0.3fr) repeat(4, 1fr) repeat(2, 0.3fr)",
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        23: "repeat(2, 1fr) 2fr repeat(2, 1fr)",
      },
      colors: {
        cards: "var(--accent-cards)",
        accent: "var( --accent-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        reveal: {
          "0%": { width: "100%" },
          "100%": { width: "0" },
        },
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        show: "reveal 1s linear",
        blink: "blink 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
