# Drupal Scaffold

Drupal scaffold project to kick-start development of a new instance of Drupal.

## Dependencies

The only dependency this project has is [Lando][]. All tools used for this
project are containerized and wrapped with [Lando][].

For those using [DDEV], a DDEV config file is included, however some of the
tooling defined for Lando may not be available or will require using DDEV
specific commands.

## Getting started


### Using Composer create-project

```bash
composer create-project oomphinc/drupal-scaffold my-project-name --ignore-platform-reqs
```

### Using git clone

```bash
git clone git@github.com:oomphinc/drupal-scaffold.git
```

Place a copy of this repository in a new folder. In .lando.yml,
change the name of the project. Then run `lando start`. This will
install all dependencies via composer.

You can then execute the site installation by running the drush site-install command shown below.
When prompted for database name, username, and password, enter `drupal9` for all three.
When prompted for host, use the `hostnames` value as reported when running:
`lando info --service=database` (e.g. `database.drupalscaffold.internal`)


Site install command:
```bash
$ lando drush site-install standard --account-pass=admin
```

The command above will  install Drupal with the standard installation profile.
You can then log into Drupal as User 1 with `admin` / `admin` as the credentials.

## Lando

You can type `lando` inside of the newly created project to see the available
commands. Tools like [Composer][] and [npm][] are available with:

```bash
$ lando composer
```

```bash
$ lando npm
```

### PHPCS
PHPCS is configured to follow Oomph's best practices, which include
strict type checking on all php files, adding type hints to all methods,
adding type hints to all parameters.

```bash
$ lando phpcs
```

```bash
$ ddev exec phpcs
```

### PHPStan
PHPStan has been included to also scan for strict type checking as well as
any deprecations with Drupal.

```bash
$ lando phpstan
```

```bash
$ ddev exec phpstan
```

### PHPUnit

```bash
$ lando phpunit
```

```bash
$ ddev exec phpunit
```

[Lando]: https://docs.devwithlando.io
[Composer]: https://getcomposer.org
[npm]: https://www.npmjs.com
[DDEV]: https://ddev.readthedocs.io/en/stable
