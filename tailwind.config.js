/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../dist/assets/screenshot.png')",
      },
    },
  },
  plugins: [],
};
