/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grand: ["GrandSlang-Roman"],
        montserrat: ["Montserrat"],
      },
      colors: {
        primary: "#1d1718",
        secondary: "#ebdfd6",
      },
    },
  },
  plugins: [],
};
