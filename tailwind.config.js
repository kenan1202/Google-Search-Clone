module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      lg: {'max': '1024px'},
      md: {'max': '768px'},
      sm: {'max': '640px'},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
