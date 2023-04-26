const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugin:[tailwindcss('./tailwind.config.cjs'),autoprefixer],
}