# Drupal Scaffold

Drupal scaffold project to kick-start development of a new instance of Drupal.

## Dependencies

The only dependency this project has is [DDEV][]. All tools used for this
project are containerized and wrapped with [DDEV][].

## Getting started

### Using Composer create-project

```bash
composer create-project oomphinc/drupal-scaffold my-project-name --ignore-platform-reqs
```

### Using git clone

```bash
git clone git@github.com:oomphinc/drupal-scaffold.git
```

Place a copy of this repository in a new folder. In /.ddev/config.yaml,
change the name of the project. Then run `ddev start`. This will
install all dependencies via composer.


Site install command:
```bash
$ ddev drush site-install standard --account-pass=admin
```

The command above will  install Drupal with the standard installation profile.
You can then log into Drupal as User 1 with `admin` / `admin` as the credentials.

### PHPCS
PHPCS is configured to follow Oomph's best practices, which include
strict type checking on all php files, adding type hints to all methods,
adding type hints to all parameters.

```bash
$ ddev exec phpcs
```

### PHPStan
PHPStan has been included to also scan for strict type checking as well as
any deprecations with Drupal.

```bash
$ ddev exec phpstan
```

### PHPUnit

```bash
$ ddev exec phpunit
```

```bash
$ ddev exec phpunit
```

[Composer]: https://getcomposer.org
[npm]: https://www.npmjs.com
[DDEV]: https://ddev.readthedocs.io/en/stable
