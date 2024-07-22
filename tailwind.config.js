/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'min-1700': { 'min': '1700px' },
        'max-1649': { 'max': '1649px' },
        'max-1328': { 'min': '1328px' },
        'min-1233': { 'min': '1233px' },
        'max-1234': { 'max': '1234px' },
        'max-1220': { 'max': '1220px' },
        'max-1300': { 'max': '1300px' },
        'max-1328': { 'max': '1328px' },
        'max-1165': { 'max': '1165px' },
        'max-1084': { 'max': '1084px' },
        'max-1004': { 'max': '1004px' },
        'max-999': { 'max': '999px' },
        'min-999': { 'min': '999px' }, 
        'max-935': { 'max': '935px' },
        'min-964': { 'min': '964px' },
        'max-868': { 'max': '868px' },
        'min-868': { 'min': '868px' },
        'min-856': { 'min': '868px' },
        'max-801': { 'max': '801px' },
        'max-699': { 'max': '699px' },
        'min-699': { 'min': '699px' },
        'max-668': { 'max': '668px' },
        'min-642': { 'min': '642px' },
        'max-450': { 'max': '450px' },
        'min-450': { 'min': '450px' },
        'max-400': { 'max': '400px' },

      },
      fontFamily: {
        'myFont': 'Be Vietnam Pro',
      },
      colors: {
        'primary': '#65981f',
        'secondary': '#C2D82F',
        'btnclr': '#2b622f',
      },
      backgroundImage: {

      },
      fontWeight: {
        200: 200,
        400: 400,
        600: 600,
      },
      display: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
