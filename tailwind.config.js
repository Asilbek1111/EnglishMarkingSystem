module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DarkBlue: "#1584b8",
        lightBlue: "#b5dbea",
        normalBlue: "#6fafcc",
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      niramit: ["Niramit", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      jost: ["Jost", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      "landing-header": "url('/img/header-bg.png')",
      'hero-pattern': "url('/img/Rectangle.png')"
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
