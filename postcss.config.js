// PostCSS plugins

module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-short-position': {},
    'postcss-easing-gradients': {},
    'postcss-custom-media': {},
    'postcss-media-minmax': {},
    'postcss-custom-selectors': {},
    'postcss-pxtorem': {
      rootValue: 16, // Root font-size
      unitPrecision: 5, // Round rem units to 4 digits
      propList: [ '*' ], // List of properties to apply px to
      selectorBlackList: ['html'],
      replace: true, // Replace pixels with rems
      mediaQuery: false, // Ignore media queries
      minPixelValue: 4, // Minimal pixel value that will be processed
      exclude: /node_modules/i
    },
    'autoprefixer': {},
  },
};
