/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
