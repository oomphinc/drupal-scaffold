---
title: Composer
tags:
  - composer
  - php
  - dependency
  - dependencies
  - testing
  - phpunit
  - phpcs
  - patch
---
# Composer

[Composer][] is a tool for dependency management in PHP. It allows you to
declare the libraries your project depends on and it will manage
(install/update) them for you.

## Repositories

This project's `composer.json` file is configured to use packages.drupal.org and
asset-packagist.org to pull in dependencies through [Composer][]. Drupal
extensions can be installed via [Composer][] using the `drupal/*` package name.
Likewise, npm and bower packages can be installed from asset-packagist.org using
the `bower-asset/*` or `npm-asset/*` package name.

## Patches

You can patch composer dependencies with a local or remote patch file by
defining patches in `composer.json`. Patches are defined as follows:

```json
{
    "extra": {
        "patches": {
            "vendor/package": {
                "Description of patch": "https://domain.tld/files/file.patch"
            }
        }
    }
}
```

## Preserve paths

Drupal core files by default are ignored from version control, but there may be
a need to customize a file like `.htaccess`. If you add changes to a file like
`.htaccess` you will need to add it to the `preserve-paths` directive in
`composer.json` to prevent [Composer][] from overwriting your changes. Preserved
paths are defined as follows:

```json
{
    "extra": {
        "preserve-paths": [
            "web/.htaccess"
        ]
    }
}
```

## Custom scripts

Custom scripts are included with the scaffold to proxy php utilities located in
the Composer vendor directory.

### PHPCS

A PHP code linter is available with [PHPCS][] and uses the Drupal coding
standards. A custom script has been added to the `composer.json` file to run
[PHPCS][]:

```bash
$ lando composer validate:php
```

### PHPUnit

It is **strongly** recommended to unit test all custom PHP code. This project
has been configured with [PHPUnit][]. Unit tests must be located in
`my_module/tests/src/Unit/*` for PHPUnit to run tests. Your unit tests must
extend the `UnitTestCase` class provided by Drupal. A custom script has been
added to the `composer.json` file to run PHPUnit:

```bash
$ lando composer test:php
```

[Composer]: https://getcomposer.org
[PHPCS]: https://github.com/squizlabs/PHP_CodeSniffer
[PHPUnit]: https://phpunit.de
