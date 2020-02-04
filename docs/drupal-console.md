---
title: Drupal Console
tags:
  - drupal console
  - drupal
  - module development
---
# Drupal Console

From the Drupal Console home page:
"The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal."


## Setup

Follow the [Getting Started](getting-started.md) instructions to get your local environment setup.
This will include the drupal/console package via composer.

You should now be able to see available commands for drupal console using:
```
lando drupal list
```

The list returned will be dependent on the status of the environment,
namely whether you have a site installed or not.

## Drush Overlap

There are a number of commands that overlap with drush commands, for example cache rebuilding,
site installation, and extension management. The intention of this codebase is not to prefer one
tool over another, but rather to provide useful Drupal development utilities as they become available.

## Some Examples

To generate a module (must have site installed):
```
lando drupal generate:module
```
The above command will initiate in interactive mode where you will answer questions about the module setup.
See the [documentation](https://drupalconsole.com/) for a complete list of commands.

[Drupal Console]: https://drupalconsole.com/
