<?php

/**
 * Oomph, Inc. Drupal Scaffold - Drupal 8 Settings
 *
 * This file contains the default settings required to have a functioning site
 * with Lando. You can define your own settings in settings.local.php to get a
 * working instance of Drupal outside of Lando.
 *
 * Note: After a Drupal installation, Drupal _may_ add an installation profile
 * definition to the end of this file. It is recommended to NOT add this change
 * to version control. It is safe to delete it if present in this file.
 */

if (getenv('LANDO_INFO')) {
  $lando_info = json_decode(getenv('LANDO_INFO'), TRUE);

  $databases['default']['default'] = [
    'database' => $lando_info['database']['creds']['database'],
    'username' => $lando_info['database']['creds']['user'],
    'password' => $lando_info['database']['creds']['password'],
    'prefix' => '',
    'host' => $lando_info['database']['internal_connection']['host'],
    'port' => $lando_info['database']['internal_connection']['port'],
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
  ];

  // Add default config split settings for local development.
  $config['config_split.config_split.local']['status'] = TRUE;
  $config['config_split.config_split.dev']['status'] = FALSE;
  $config['config_split.config_split.uat']['status'] = FALSE;
  $config['config_split.config_split.prod']['status'] = FALSE;

  // Config sync directory for Lando.
  $config_directories[CONFIG_SYNC_DIRECTORY] = '/app/config/common';

  // Default hash salt for Lando.
  $settings['hash_salt'] = 'BfHE?EG)vJPa3uikBCZWW#ATbDLijMFRZgfkyayYcZYoy>eC7QhdG7qaB4hcm4x$';

  // Allow any domains to access the site with Lando.
  $settings['trusted_host_patterns'] = [
    '^(.+)$',
  ];
}

$local_settings_file = __DIR__ . '/settings.local.php';

if (file_exists($local_settings_file)) {
  require $local_settings_file;
}
