/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'bg-dark': '#1E1E1E',
      'bg-light': '#F7F7F7',
      dark: '#121212',
      white: {
        50: '#FFFFFF',
        100: '#E4E4E4',
      },
      green: {
        500: '#03C988',
        600: '#00865A',
      },
      gray: {
        500: '#D1D1D1',
        600: '#9B9B9B',
        700: '#252525',
        800: '#2C2C2C',
      },
    },
    extend: {},
  },
  plugins: [],
}
