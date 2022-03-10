---
title: Frontend Assets
tags:
  - webpack
  - node
  - postcss
  - js
  - javascript
  - frontend
---
# Webpack

This project uses [Webpack][] for frontend tooling. The webpack setup ncluded with
this project has the following commands:

* `lando npm run dev`
* `lando npm run build`
* `lando npm run polish`
* `lando npm run lint[:js:css]`
* `lando npm run fix[:js:css]`
* `lando npm run format`

## Build and Dev Commands

The `build` command compiles all PostCSS (.pcss) and JavaScript (ES6) files in the project for production.
The `dev` command compiles all PostCSS (.pcss) and JavaScript (ES6) files in the project for development environments.
The compiler recursively searches the following directories to compile files:

* `/web/modules/custom`
* `/web/themes/custom`

**Note:** Files with the extensions `.css` and `.js` will be ignored by git.
Compiled assets should not exist in version control.

**Note:** The `build` command uses the webpack.prod.js to build assets, while the `dev` command
uses the webpack.dev.js to add source maps to help in debugging issues. Additionally, the `dev` command
includes a directive to `--watch` all files.

### PostCSS compilation

The `dev/build` commands look for a single file at the root of a single directory deep in a theme or module
with the extension `.pcss` to `.css` files in the same directory.

#### Example

The file:
`/web/themes/custom/my_theme/css/main.pcss`

Compiles to:
`/web/themes/custom/my_theme/css/main.css`

**Note:** Additional add-ons such as Autoprefixer produce extended functionality
and may run during the `build` step.

**Note:** Additional add-ons such as SourceMaps produce extended functionality
and may run during the `dev` step.

### JavaScript compilation

The `dev/build` command will compile files with the extension `.es6.js` to `.js`
files in the same directory.

#### Example

The file:
`/web/modules/custom/my_module/assets/my_module.es6.js`

Compiles to:
`/web/modules/custom/my_module/assets/my_module.js`

## Polish command

The `polish` command runs a series of commands against the front end assets. Including:
* `prettier`: to automatically format code through the Prettier plugin.
* `eslint --fix`: runs through linting with ESlint and fixes any errors it can before erroring out.
* `stylelint --fix`: runs through linting with Stylelint and fixes any errors it can before erroring out.

It is recommended to run the `polish` command regularly during development as the
builds in Github Actions will fail if there are any coding standards violation. Cleanup
runs on both the `.es6.js` and `.pcss` files.

## Lint command
The `lint[:js:scss]` command runs the syntax checkers provided by the code linters used for
validating PostCSS and JavaScript (ES6). The command will only find errors, not try to fix them.

## Fix command
The `fix[:js:css]` command runs the syntax fixers provided by the code linters used for
validating PostCSS and JavaScript (ES6). The command will try its _best_ to fix
coding standard violations based on specific rulesets for each language.
