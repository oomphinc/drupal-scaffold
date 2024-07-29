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
* CSS

## JavaScript (ES6)

The validator for custom JavaScript is [Biome][]. Biome is able to migrate [ESLint]
rules from the `/web/core/.eslintrc.json` file to validate custom JavaScript. The
[ESLint][] file provided by [Drupal][] core follows the
[Drupal coding standards for JavaScript][].

To validate JavaScript files use `ddev npm run lint:js`.

## PHP

The validator for custom PHP is [PHPCS][]. This project uses the `drupal/coder`
package to validate custom PHP files against the
[Drupal coding standards for PHP][].

To validate PHP files use `ddev phpcs`.

## SASS

The validator for custom CSS is [stylelint][]. This project uses the
[SASS Guidelines][] with _some_ modifications:

* There is a max nesting limit (max-nesting-depth) of 4
* Qualifying a selector by type is allowed (selector-no-qualifying-type)
* Maximum allowed compound selectors is increased from 3 to 4 (selector-max-compound-selectors)
* Alphabetical order of properties is not enforced (order/properties-alphabetical-order)

To validate CSS files use `ddev run lint:css`.

To temporarily disable the linter for certain code blocks you can use the syntax
below. More information can be found in the linter [docs][].

```
#id {
  // biome-ignore lint: <explanation>
  color: pink !important;
}
```

[Drupal]: https://drupal.org
[Drupal coding standards for JavaScript]: https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards
[Drupal coding standards for PHP]: https://www.drupal.org/docs/develop/standards/coding-standards
[Biome]: https://biomejs.dev
[ESLint]: https://eslint.org
[PHPCS]: https://github.com/squizlabs/PHP_CodeSniffer
[stylelint]: https://github.com/stylelint/stylelint
[SASS Guidelines]: https://sass-guidelin.es
[docs]: https://biomejs.dev/linter
