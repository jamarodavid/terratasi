/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: 0,
          lg: "135px",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        heading: "48px",
      },
      colors: {
        color: {
          1: "#82DF85",
          2: "#1D4735",
          3: "#52154E",
          "slate-gray": "#6D6D6D",
        },
        gradient: {
          1: "#B7DF82",
          2: "#477948",
          3: "#FFC800",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        lora: "var(--font-lora)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
