module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('precss'),
    require('cssnano')({ preset: 'default' }),
  ]
}
