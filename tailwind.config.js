/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'custom-beige': '#E7D6BC',
          'custom-lightbeige': '#F8F3ED',
          'custom-orange': '#F29D42',
          'custom-green': '#2A3B2C',
        },
        fontFamily: {
          'playfair': ['Playfair Display', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

