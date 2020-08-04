---
title: Gulp
tags:
  - gulp
  - node
  - sass
  - js
  - javascript
  - scss
  - frontend
---
# Gulp

This project uses [Gulp][] for frontend tooling. The `gulpfile.js` included with
this project has the following commands:

* `lando gulp build[:js|sass]`
* `lando gulp watch[:js|sass]`
* `lando gulp validate[:js|sass]`
* `lando gulp fix[:js|sass]`

Validate/fix can take file arguments with [Yargs][] to run against a single file:
* `lando gulp validate[:js|sass] --file=[file path]`
* `lando gulp fix[:js|sass] --file=[file path]`

## Build command

The `build` command compiles all SCSS and JavaScript (ES6) files in the project.
The compiler recursively searches the following directories to compile files:

* `/web/modules/custom`
* `/web/themes/custom`

**Note:** Files with the extensions `.css` and `.js` will be ignored by git.
Compiled assets should not exist in version control.

### SCSS compilation

The `build:sass` command will compile files with the extension `.scss` that do
**not** begin with an underscore (`_`) to `.css` files in the same directory.

#### Example

The file:
`/web/themes/custom/my_theme/assets/styles/main.scss`

Compiles to:
`/web/themes/custom/my_theme/assets/styles/main.css`

**Note:** Additional add-ons such as Autoprefixer produce extended functionality
and may run during the `build` step. See the Gulp Addons section.

### JavaScript compilation

The `build:js` command will compile files with the extension `.es6.js` to `.js`
files in the same directory.

#### Example

The file:
`/web/modules/custom/my_module/assets/scripts/my_module.es6.js`

Compiles to:
`/web/modules/custom/my_module/assets/scripts/my_module.js`

## Watch command

The `watch` command will watch SCSS and JavasScript (ES6) files for changes and
then automatically compile those files. This command leverages the `build`
command to compile assets. Like the `build` command, you can specify to watch
either SCSS (`watch:sass`) or JavaScript (`watch:js`) specifically.

## Validate command

The `validate` command runs code linters for SCSS and JavaScript (ES6). It is
recommended to run the `validate` command regularly during development as the
builds in Travis-CI will fail if there is an coding standards violation. Like
the `build` command, you can specify to validate either SCSS (`validate:sass`)
or JavaScript (`validate:js`) specifically.

## Fix command

The `fix` command runs the syntax fixers provided by the code linters used for
validating SCSS and JavaScript (ES6). The command will try its _best_ to fix
coding standard violations based on specific rulesets for each language.

# Gulp Addons

## Autoprefixer
[Autoprefixer][] Parse CSS and add vendor prefixes to rules by [Can I Use][].

[Gulp]: https://gulpjs.com/
[Autoprefixer]: https://github.com/postcss/autoprefixer
[Can I Use]: https://caniuse.com/
[Yargs]: http://yargs.js.org/
