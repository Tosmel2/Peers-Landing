/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
    }
  },
  plugins: [],
}
