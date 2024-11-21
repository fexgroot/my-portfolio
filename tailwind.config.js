/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grand: ["GrandSlang-Roman"],
        montserrat: ["Montserrat"],
      },
      colors: {
        pri: "#1d1718",
        sec: "#ebdfd6",
      },
    },
  },
  plugins: [],
};
