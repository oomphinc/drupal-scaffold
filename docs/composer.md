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

## Drupal Scaffold

This project has a dependency of `drupal-composer/drupal-scaffold`. Every time
`composer install` or `composer update` is run, the scaffold plugin will
download the skeleton files for Drupal. If you need to add changes to any of the
skeleton files that are downloaded with the scaffold plugin, you will need to
add a directive to the composer `extra` array:

```json
{
    "extra": {
        "drupal-scaffold": {
            "excludes": [
                ".htaccess"
            ]
        }
    }
}
```

[Composer]: https://getcomposer.org
