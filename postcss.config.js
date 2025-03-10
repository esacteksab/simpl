const autoprefixer = require('autoprefixer');
const tailwindcss = require('@tailwindcss/postcss');
var colorConverter = require('postcss-color-converter');

module.exports = {
  plugins: [
    process.env.HUGO_ENVIRONMENT !== 'development' ? autoprefixer : null,
    colorConverter({
        outputColorFormat: 'hex',
    }),
  tailwindcss,
  ]
};
