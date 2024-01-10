/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        font: "font-size",
        lineheight: "line-height",
      },
      fontFamily: { dmserif: ["DM Serif Display", "serif"] },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: { dmserif: ["DM Serif Display", "serif"] },
      colors: {
        app_bg: "#dee2fc", // Lavenderish color
        app_main: "#c98d26", // Desertish Color
        // a bluish-greenish color; if change make sure to include all shades as they're used throughout app
        app_accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      display: ["group-hover"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
