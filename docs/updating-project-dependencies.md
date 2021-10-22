---
title: Updating Project Dependencies
tags:
  - update
  - dependencies
---
# Updating Project Dependencies

This project uses two dependency managers, Composer and Node Package Manager
(NPM). Please take the following steps when updating project dependencies.

## Drupal core

Drupal core should be updated locally using the following steps:

```bash
$ lando composer update drupal/core --with-dependencies
```

After composer has installed the latest version of Drupal and its dependencies,
run Drupal database and entity updates:

```bash
$ lando drush updatedb --yes
```

```bash
$ lando drush entity:updates --yes
```

After database updates have completed, test the website for any errors.

## Drupal modules

Drupal modules should be updated locally and individually to ensure there are no
regressions with each update.

```bash
$ lando composer update drupal/[module] --with-dependencies
```

After composer has installed the latest version of the Drupal module, run
Drupal database and entity updates:

```bash
$ lando drush updatedb --yes
```

```bash
$ lando drush entity:updates --yes
```

After entity and database updates have completed, test the website for any
errors.

## PHP/Frontend libraries

PHP/Frontend libraries should be updated locally using the following steps:

```bash
$ lando composer update
```

This command will update all packages that weren't updated in the above steps.

After composer has installed the latest version of the remaining dependencies,
test the website and project tools for any errors:

```bash
$ lando phpunit && lando phpcs
```

### NodeJS libraries

NodeJS libraries should be update locally using the following steps:

```bash
$ lando npm update
```

Libraries managed with NPM are only used for local development. After updates
have finished installing, test the following commands:

```bash
$ lando npm run cleanup && lando npm run dev
```
