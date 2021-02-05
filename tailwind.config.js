module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pierre-tall': "url('/img/bgs/background.png')",
        'contact-page-wide': "url('/img/bgs/bg-contact-wide.png')",
        'contact-page-tall': "url('/img/bgs/bg-contact-tall.png')",
        'contact-card': "url('/img/bgs/bg-contact-card.png')",
        'contact-card-b': "url('/img/bgs/bg-contact-card-bottom.png')",
      }),

      screens: {
        'lg': '1080px', // re-define screen-lg to 1080px.
      },

      gridAutoColumns: {
        '1': 'calc(100%)',
        '2': 'calc(50%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
