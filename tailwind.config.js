/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/screenshot.png')",
      },
    },
  },
  plugins: [],
};
