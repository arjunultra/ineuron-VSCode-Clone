/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/screenshot.png')",
      },
    },
  },
  plugins: [],
};
