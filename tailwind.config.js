/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgLinear: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        display: 'Major Mono Display, monospace'
      }
    },
  },
  plugins: [],
}
