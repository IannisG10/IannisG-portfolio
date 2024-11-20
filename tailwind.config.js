/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aldrich', 'sans-serif'],
        nunito: ["Nunito", 'sans-serif'],
        monsterrat: ["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}

