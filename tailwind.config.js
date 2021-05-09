module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#00446F',
      'white': '#ffffff',
      'fsm': '#E45006',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
