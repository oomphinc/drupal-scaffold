# Drupal Scaffold

Drupal 9 scaffold project to kick start development of a new instance of Drupal.

## Dependencies

The only dependency this project has is [Lando][]. All tools used for this
project are containerized and wrapped with [Lando][].

## Getting started

Place a copy of this repository in a new folder and run `lando start`

You can quickly bootstrap a local environment by running:

```bash
$ lando drush site-install standard --account-pass=admin
```

When prompted for database name, user, and password, use `drupal9` for all three.
When prompted for host, use the `hostnames` value as reported when running
`lando info --service=database` (e.g. `database.drupalscaffold.internal`)

The command above will install all project dependencies and install Drupal with
the standard installation profile. You can then log into Drupal as User 1 with
`admin` / `admin` as the credentials.

## Lando

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
