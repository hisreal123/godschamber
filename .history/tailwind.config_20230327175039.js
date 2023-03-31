/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: ' Jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url(/assets/map_black.jpeg)"
      }
    },
  },
  plugins: [],
}