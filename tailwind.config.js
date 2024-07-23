/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif'],
      },

      colors: {
        lightBG: '#FCF8F5',
        orange: '#C83B0E',
        orangeHover: '#952C0C'
      },
    },
  },
  plugins: [],
};
