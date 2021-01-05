module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pierre-tall': "url('/img/background.jpg')",
      }),

      screens: {
        'lg': '1080px', // re-define screen-lg to 1080px.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
