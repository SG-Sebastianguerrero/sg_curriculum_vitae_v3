/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sg_gray: "#d9d9d9",
        sg_black: "#333333",
        sg_mustard: "#c5a22c",
      },
    },
    fontFamily: {
      BebasNeue: ["Bebas Neue", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
