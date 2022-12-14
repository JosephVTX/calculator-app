/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        leagueSpartan: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
