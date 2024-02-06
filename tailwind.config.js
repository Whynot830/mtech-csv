/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#cbcbcb'
      }
    },
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"]
    }
  },
  plugins: [],
}