module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      dark: '#0E0E0E', // for darkmode background
      primary: '#C9D1D9', // for darkmode text color
      light: '#F9F3F3',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
