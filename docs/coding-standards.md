---
title: Coding standards
tags:
  - coding standards
  - php
  - scss
  - sass
  - js
  - javascript
---
# Coding standards

This project comes with linting tools to check the syntax of custom code against
established coding standards/recommendations. Linters are available for the
following languages:

* JavaScript (ES6)
* PHP
* SASS

## JavaScript (ES6)

The validator for custom JavaScript is [ESLint][]. This project uses the
`/web/core/.eslintrc.json` file to validated custom JavaScript. The [ESLint][]
file provided by [Drupal][] core follows the
[Drupal coding standards for JavaScript][].

## PHP

The validator for custom PHP is [PHPCS][]. This project uses the `drupal/coder`
package to validate custom PHP files against the
[Drupal coding standards for PHP][].

## SASS

The validator for custom SASS is [stylelint][]. This project uses the
[SASS Guidelines][] with _some_ modifications:

* There is a max nesting limit (max-nesting-depth) of 4
* Qualifying a selector by type is allowed (selector-no-qualifying-type)
* Maximum allowed compound selectors is increased from 3 to 4 (selector-max-compound-selectors)
* Alphabetical order of properties is not enforced (order/properties-alphabetical-order)

[Drupal]: https://drupal.org
[Drupal coding standards for JavaScript]: https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards
[Drupal coding standards for PHP]: https://www.drupal.org/docs/develop/standards/coding-standards
[ESLint]: https://eslint.org
[PHPCS]: https://github.com/squizlabs/PHP_CodeSniffer
[stylelint]: https://github.com/stylelint/stylelint
[SASS Guidelines]: https://sass-guidelin.es
