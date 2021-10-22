const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const rootDir = path.resolve(__dirname, '..');
const themeDir = path.resolve(rootDir, '*!(core)/themes/custom/*/');
const moduleDir = path.resolve(rootDir, '*!(core)/modules/custom/*/');

function getJSEntries(pattern) {
  const entries = {};
  glob
    .sync(pattern)
    .forEach((file) => {
      const newFilePath = `${file.replace(`${rootDir}/`, '').replace('.es6.js', '')}`;
      entries[newFilePath] = file;
    });

  return entries;
}

function getCSSEntries(pattern) {
  const cssEntries = {};
  glob
    .sync(pattern)
    .forEach((file) => {
      const newFilePath = `${file.replace(`${rootDir}/`, '').replace('.pcss', '')}`;
      cssEntries[newFilePath] = file;
    });

  return cssEntries;
}

module.exports = {
  context: rootDir,
  stats: {
    errorDetails: true,
  },
  entry: {
    ...getJSEntries(path.resolve(rootDir, themeDir, '**/*.es6.js')),
    ...getJSEntries(path.resolve(rootDir, moduleDir, '**/*.es6.js')),
    ...getCSSEntries(path.resolve(rootDir, themeDir, '*/*.pcss')),
    ...getCSSEntries(path.resolve(rootDir, moduleDir, '*/*.pcss')),
  },
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
    ],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
  ],
  output: {
    path: rootDir,
    filename: '[name].js',
  },
};
