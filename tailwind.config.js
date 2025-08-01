/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#021D33",
          special:"#021D33",
          light: "#00FFF7",
          dark: "#250826",
        },
        secondary: {
          DEFAULT: "#615867",
          light: "#7B7382",
          dark: "#47414D",
        },
        accent: {
          DEFAULT: "#00BFFF",
          light: "#A34DFF",
          dark: "#7700C7",
        },
        overlay: {
          dark: "rgba(38, 13, 55, 0.8)",
          light: "rgba(35, 13, 55, 0.2)",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
