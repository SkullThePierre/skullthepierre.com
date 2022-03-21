module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  purge: {
    content: ["./public/**/*.html", "./src/**/*.js"],
    options: {
      safelist: [
        "myShop",
        "sprd-footer",
        "sprd-info-footer__contact-col",
        "sprd-service-footer",
        "sprd-info-footer__open-shop",
        "sprd-breadcrumb",
        "sprd-info-footer",
        "sprd-product-list",
        "sprd-tracking-menu__dropup",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "pierre-tall": "url('/img/bgs/background.jpg')",
        "contact-page-wide": "url('/img/bgs/bg-contact-wide.jpg')",
        "contact-page-tall": "url('/img/bgs/bg-contact-tall.jpg')",
        "contact-card": "url('/img/bgs/bg-contact-card.jpg')",
        "contact-card-b": "url('/img/bgs/bg-contact-card-bottom.png')",
        "under-construction": "url('/img/bgs/bg-under-construction.jpg')",
      },

      outline: {
        red: "2px solid #dd0000",
      },

      screens: {
        lg: "1080px", // re-define screen-lg to 1080px.
      },

      gridAutoColumns: {
        1: "calc(100%)",
        2: "calc(50%)",
      },

      fontFamily: {
        compHandMedium: ["CompHandMedium"],
        indieFlower: ['"Indie Flower"', "cursive"],
        sans: ["Nunito", '"Open Sans"', "sans-serif"],
      },

      gridTemplateColumns: {
        release: "auto max-content",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      zIndex: {
        8888: 8888,
        9999: 9999,
      },

      spacing: {
        75: "75px",
        56: "56px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
