/** @type {import('tailwindcss').Config} */
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities, theme, e}){
      const calcUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`calc-h-screen-${key}`)}`]: {
            height: `calc(100vh - ${value})`
          },
          [`.${e(`calc-w-screen-${key}`)}`]: {
            width: `calc(100vw - ${value})`
          }
        }
      })
      addUtilities(calcUtilities, {
        variants: ['responsive']
      })
    })
  ],
}