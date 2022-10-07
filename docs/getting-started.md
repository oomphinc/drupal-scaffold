---
title: Getting started
tags:
  - getting started
  - project
---
# Getting started

This project is built on [Oomph Inc's Drupal Scaffold][]. The scaffold provides
tools to get started with a new project:

* [Lando][]: Local development
* [npm][]: NodeJS dependency management
* [Webpack][]: PostCSS & JS compilation, validation and automatic syntax fixing
* [Composer][]: PHP dependency management
* [PHPCS][]: PHP syntax validation
* [PHPUnit][]: PHP unit testing

## Requirements

* [Lando][]: Latest version

## Local development

Getting started with local development is easy. You will have to start [Lando][]
from the project root. [Lando][] will create the required [Docker][] containers
to run the application, install project dependencies and then build the frontend
assets on the site.

```bash
$ lando start
```

After [Lando][] has started it will output a list of URLs you can use to access
the site. You can choose between a proxied domain name (`*.lndo.site`) or use
`localhost` with a port number assigned to the container (`localhost:12345`).

```bash
BOOMSHAKALAKA!!!

Your app has started up correctly.
Here are some vitals:

 NAME             mysite
 LOCATION         /Users/pgriffen/oomph/mysite.com
 SERVICES         appserver, database, nodejs, phpmyadmin
 APPSERVER URLS   https://localhost:32811
                  http://localhost:32812
                  http://mysite.lndo.site
                  https://mysite.lndo.site
 PHPMYADMIN URLS  http://localhost:32813
```

## Installing Drupal

You have a couple different options to install Drupal locally. If this is a
brand new project, you'll probably want to install [Drupal][] using an
installation profile provided by core (minimum or standard). You can visit the
URLs provided by [Lando][] and follow the installations steps of [Drupal][]
through the web browser, or you can install [Drupal][] using
`lando drush site-install`. Check out the [Drush][] documentation for further
information.

```bash
$ lando drush site-install --account-pass=[ADMIN_PASSWORD]
```

You'll want to replace `[ADMIN_PASSWORD]` with the desired password for the
admin account created (The default username is `admin` when installing via
[Drush][]).

### Importing a database

Another way, probably the most common mechanism of installing [Drupal][]
locally, will be importing the database from another environment. You will have
to get a copy of the database and then save that SQL dump to the project root.

For instance, say you export `database.sql` from the development environment,
you'll want to save that file in the project root. Then you'll use [Lando][]'s
`db-import` command to import `database.sql`.

```bash
$ lando db-import database.sql
```

After the database import has completed, [Lando][] will automatically clear the
[Drupal][] cache for you.

## Using Lando tooling

[Lando][] provides a tooling feature that wraps commands like `drush`,
`composer`, and `npm`, and runs them inside of a [Docker][] container.
This provides the mechanism of a single project dependency locally, which is
just [Lando][].

Here is a list of commands available through [Lando][]:

```bash
$ lando
Usage: lando <command> [args] [options] [-- global options]

Commands:
  composer                 Run composer commands
  config                   Display the lando configuration
  db-export [file]         Export database from a service
  db-import [file]         Import <file> into database service
  destroy [appname]        Destroy app in current directory or [appname]
  drupal                   Run drupal console commands
  drush                    Run drush commands
  info [appname]           Prints info about app in current directory or [appname]
  init [method]            Initialize a lando app, optional methods: github, pantheon
  list                     List all lando apps
  logs [appname]           Get logs for app in current directory or [appname]
  mysql                    Drop into a MySQL shell on a database service
  node                     Run node commands
  npm                      Run npm commands
  php                      Run php commands
  poweroff                 Spin down all lando related containers
  rebuild [appname]        Rebuilds app in current directory or [appname]
  restart [appname]        Restarts app in current directory or [appname]
  security-check           Runs security-check commands
  share [appname]          Get a publicly available url
  ssh [appname] [service]  SSH into [service] in current app directory or [appname]
  start [appname]          Start app in current directory or [appname]
  stop [appname]           Stops app in current directory or [appname]
  version                  Display the lando version

Global Options:
  --help, -h  Show help
  --verbose, -v, -vv, -vvv, -vvvv  Change verbosity of output

You need at least one command before moving on
```

[Oomph Inc's Drupal Scaffold]: https://github.com/oomphinc/drupal-scaffold.git
[Lando]: https://docs.devwithlando.io
[npm]: https://npmjs.com
[Webpack]: https://webpack.js.org
[PostCSS]: https://postcss.org
[Composer]: https://getcomposer.org
[PHPCS]: https://github.com/squizlabs/PHP_CodeSniffer
[PHPUnit]: https://phpunit.de
[Docker]: https://docker.com
[Drupal]: https://drupal.org
[Drush]: https://drush.org
