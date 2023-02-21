/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      poppins: "Poppins",
    },

    extend: {
      colors: {
        primary: { lighter: "#4D5DC7", DEFAULT: "#333267" },
        secondary: "#4D7DF8",
        accent: "#E4DD20",
      },
    },
  },
  plugins: [],
};
