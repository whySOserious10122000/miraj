/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         darkBlue : "#0A122A",
         lightBlue : "#9192FF",
         bg1 : "#202856",
         bg2 : "#03131E"
      }
    },
  },
  plugins: [],
}