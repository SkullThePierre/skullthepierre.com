module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pierre-tall': "url('/img/background.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
