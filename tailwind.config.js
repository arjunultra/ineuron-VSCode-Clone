/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'myFont': ["Segoe UI","Helvetica Neue","Helvetica",'sans serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./dist/assets/screenshot.png')",
      },
    },
  },
  plugins: [],
};
