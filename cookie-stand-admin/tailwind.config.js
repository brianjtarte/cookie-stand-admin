/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,tx,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {},
      colors: {
        'darkGreen': '#15b981',
        'lightGreen' : '#6fe6b7',
        'bodyColor' : '#ECFDF5',
        'black' : '#000000',
        'locationColor' : '#e2ebfe'
      }
  },
  plugins: [],
}
