module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  purge: [
      './public/**/*.html',
      './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pierre-tall': "url('/img/bgs/background.jpg')",
        'contact-page-wide': "url('/img/bgs/bg-contact-wide.jpg')",
        'contact-page-tall': "url('/img/bgs/bg-contact-tall.jpg')",
        'contact-card': "url('/img/bgs/bg-contact-card.jpg')",
        'contact-card-b': "url('/img/bgs/bg-contact-card-bottom.jpg')",
        'under-construction': "url('/img/bgs/bg-under-construction.jpg')"
      }),

      screens: {
        'lg': '1080px', // re-define screen-lg to 1080px.
      },

      gridAutoColumns: {
        '1': 'calc(100%)',
        '2': 'calc(50%)',
      },

      fontFamily: {
        'compHand': ['compHand']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
