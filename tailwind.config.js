module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#00446F',
        'fsm': '#E45006',
        'lang-bar': '#E45006',
      },
      margin: {
        '54': '13.5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
