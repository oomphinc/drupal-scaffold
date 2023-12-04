---
title: Getting started
tags:
  - getting started
  - project
---
# Getting started

This project is built on [Oomph Inc's Drupal Scaffold][]. The scaffold provides
tools to get started with a new project:

* [DDEV][]: Local development
* [npm][]: NodeJS dependency management
* [Webpack][]: PostCSS & JS compilation, validation and automatic syntax fixing
* [Composer][]: PHP dependency management
* [PHPCS][]: PHP syntax validation
* [PHPUnit][]: PHP unit testing

## Requirements

* [DDEV][]: Latest version

## Local development

Getting started with local development is easy. You will have to start [DDEV][]
from the project root. [DDEV][] will create the required [Docker][] containers
to run the application, install project dependencies and then build the frontend
assets on the site.

```bash
$ ddev start
```

After [DDEV][] has started it will output a list of URLs you can use to access
the site. You can choose between a proxied domain name (`*.ddev.site`) or use
`localhost` with a port number assigned to the container (`localhost:12345`).

## Installing Drupal

You have a couple different options to install Drupal locally. If this is a
brand new project, you'll probably want to install [Drupal][] using an
installation profile provided by core (minimum or standard). You can visit the
URLs provided by [DDEV][] and follow the installations steps of [Drupal][]
through the web browser, or you can install [Drupal][] using
`ddev drush site-install`. Check out the [Drush][] documentation for further
information.

```bash
$ ddev drush site-install --account-pass=[ADMIN_PASSWORD]
```

You'll want to replace `[ADMIN_PASSWORD]` with the desired password for the
admin account created (The default username is `admin` when installing via
[Drush][]).

### Importing a database

Another way, probably the most common mechanism of installing [Drupal][]
locally, will be importing the database from another environment. You will have
to get a copy of the database and then save that SQL dump to the project root.

For instance, say you export `database.sql` from the development environment,
you'll want to save that file in the project root. Then you'll use [DDEV][]'s
`db-import` command to import `database.sql`.

```bash
$ ddev import-db --file=database.sql.gz
```

After the database import has completed, [DDEV][] will automatically clear the
[Drupal][] cache for you.


[Oomph Inc's Drupal Scaffold]: https://github.com/oomphinc/drupal-scaffold.git
[DDEV]: https://ddev.readthedocs.io/en/stable
[npm]: https://npmjs.com
[Webpack]: https://webpack.js.org
[PostCSS]: https://postcss.org
[Composer]: https://getcomposer.org
[PHPCS]: https://github.com/squizlabs/PHP_CodeSniffer
[PHPUnit]: https://phpunit.de
[Docker]: https://docker.com
[Drupal]: https://drupal.org
[Drush]: https://drush.org
