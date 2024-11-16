/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E7F7F8",
          100: "#D4F0F2",
          200: "#A5E0E4",
          300: "#7AD1D7",
          400: "#4FC2CA",
          500: "#33A3AA",
          600: "#298389",
          700: "#1F6166",
          800: "#144043",
          900: "#0B2223",
          950: "#050F10",
        },
      },
    },
  },
  plugins: [],
};
