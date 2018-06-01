---
title: Configuration Management
tags:
  - config
  - drupal
  - drush
  - cex
  - cim
---
# Configuration Management

This project uses the core Configuration Management utilities included with
Drupal 8 in conjunction with the [`config_split`][] module to provide
environment specific configuration.

Configuration files are located in the `/config` directory. The `/config/common`
directory is the configuration files that are common to all environments.

## Drush

It is recommended to use [Drush][] for importing and exporting configuration in
Drupal.

## Configuration splits

This project has the following configuration splits via [`config_split`][]:

- Production (`/config/prod`)
- UAT (`/config/uat`)
- Development (`/config/dev`)
- Local (`/config/local`)

## Switching configuration splits

When working on a feature that requires different configuration per
environment, you'll need to switch to that environment's configuration split and
configure it locally.

You can override the active configuration split by adding a directive in
`settings.local.php`:

```php
// Disable the local split.
$config['config_split.config_split.local']['status'] = FALSE;

// Enable split.
$config['config_split.config_split.SPLIT']['status'] = TRUE;
```

You will need to replace `SPLIT` with the intended environment to set the
active configuration (`prod`, `uat`, `dev`). Next, you **MUST** rebuild the
Drupal cache, e.g.

```bash
lando drush cache-rebuild
```

Now you can run `lando drush config-import` to import the environments
configuration into Drupal. This will overwrite any configuration changes you
currently have unsaved.

## Exporting configuration

Configuration is exported using the `config-export` Drush command, e.g.

```bash
lando drush config-export
```

This will export any active configuration to the file system in the `config`
directories. If a piece of configuration is unique to the active configuration
split, it will end up in that configuration splits directory instead of the
common directory.

## Importing configuration

Configuration is imported using the `config-import` Drush command, e.g.

```bash
lando drush config-import
```

This will import all of the common configuration, and then import any
configuration files that are unique to the active configuration split.

[`config_split`]: https://www.drupal.org/project/config_split
