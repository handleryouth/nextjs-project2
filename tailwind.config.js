const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      darkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      nearlyBlack: "hsl(0, 0%, 0%)",
      blue: colors.blue,
    },
    extend: {
      spacing: {
        "50vh": "50vh",
        "negative-50vh": "-50vh",
        "90vw": "90vw",
      },
      inset: {
        "50vh": "50vh",
        "negative-50vh": "-50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
