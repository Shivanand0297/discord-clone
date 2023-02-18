/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#404eed",
        black: "#23272a",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    backgroundImage: {
      'hero-background': "url('/src/assets/background.svg')",
    },
    fontFamily:{
      'blackHan': ['Black Han Sans', 'sans-serif'],
      'openSans': ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
};
