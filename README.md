# Drupal Scaffold

Drupal 8 scaffold project to kick start development of a new instance of Drupal.

## Getting started

You will need composer to create a new project:

```bash
$ composer create-project oomphinc/drupal-scaffold my-project.tld --no-interaction
```

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
