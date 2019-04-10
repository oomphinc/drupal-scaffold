# Drupal Scaffold

Drupal 8 scaffold project to kick start development of a new instance of Drupal.

## Getting started

You will need composer to create a new project:

```bash
$ composer create-project --no-interaction oomphinc/drupal-scaffold my-project.tld 
```

After composer installs the Drupal scaffold, you can quickly bootstrap a local
environment by running:

```bash
$ lando start && lando drush site-install standard --account-pass=admin
```

The command above will install all project dependencies and install Drupal with
the standard installation profile. You can then log into Drupal as User 1 with
`admin` / `admin` as the credentials.

## Lando

Besides the initial dependency of composer to create this project, the only
dependency this project has afterwards is [Lando][]. All tools used for this
project are containerized and wrapped with [Lando][].

You can type `lando` inside of the newly created project to see the available
commands. Tools like [Composer][] and [npm][] are available with:

```bash
$ lando composer
```

```bash
$ lando npm
```

[Lando]: https://docs.devwithlando.io
[Composer]: https://getcomposer.org
[npm]: https://www.npmjs.com
