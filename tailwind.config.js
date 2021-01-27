module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pierre-tall': "url('/img/bgs/background.png')",
        'contact-page': "url('/img/bgs/bg-contact.png')"
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
