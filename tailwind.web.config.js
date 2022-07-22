const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/views/web/**/*.blade.php', './resources/js/web/**/*.vue'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
