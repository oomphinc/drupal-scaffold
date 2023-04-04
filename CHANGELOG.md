# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][] and this project adheres to a
modified Semantic Versioning scheme. See the "Versioning scheme" section of the
[CONTRIBUTING][] file for more information.

[Keep a Changelog]: http://keepachangelog.com/
[CONTRIBUTING]: https://github.com/oomphinc/drupal-scaffold/docs/release-workflow.md#versioning-scheme

## [Unreleased]
### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [2.2.0] - 2023-04-04
### Added
- DDEV support

### Changed
- Updates file-type from 14.7.1 to 18.0.0.
- Updates open-cli from 6.0.1 to 7.1.0.
- Updates PHP to 8.1 (lando).
- Bumps minimatch from 3.0.4 to 3.1.2.
- Bumps decode-uri-component from 0.2.0 to 0.2.2.
- Updated project dependencies to latest stable versions.

### Deprecated
- Remove zaporylie/composer-drupal-optimizations - not needed with composer 2.

### Removed
- Removed composer.lock from tracking and updated getting started docs.

### Fixed
- Bump loader-utils from 1.4.0 to 1.4.2.

### Security
- Bumps terser from 4.8.0 to 4.8.1.

## [2.1.0] - 2022-07-06
### Added
- #76: Added PHPStan analysis to the initial scaffold.

### Changed
- Bumps nanoid from 3.1.30 to 3.3.1.
- Bumps minimist from 1.2.5 to 1.2.6.
- #76: Updated the PHPCS to be more strict and to follow Oomph best practices.

## [2.0.0] - 2021-03-10
### Added
- PostCSS and Webpack

### Changed
- Update PHP version from 7.3 to 7.4

### Removed
- SCSS and Gulp

## [1.2.2] - 2021-11-16
### Changed
- Changed admin_toolbar to use next major release: ^3

## [1.2.1] - 2021-10-22
### Changed
- Bumps lodash from 4.17.20 to 4.17.21.
- Bump path-parse from 1.0.6 to 1.0.7.
- Update composer.lock file to match composer.json.

### Removed
- Remove deprecated `$config_directories` variable.

### Fixed
- Bumps hosted-git-info from 2.8.8 to 2.8.9.

## [1.2.0] - 2021-05-06
### Added
- Add .rsync-filter files to /vendor/ and /web/ to ignore .git dirs.

### Fixed
- Require Composer2-compatible versions of project dependencies.
- Bump y18n from 4.0.0 to 4.0.1.
- Bump ini from 1.3.5 to 1.3.8.

## [1.1.2] - 2020-12-21
### Added
- Added lando xdebug-on tooling to enable Xdebug.
- Added lando xdebug-off tooling to disable Xdebug.

### Changed
- Updated memcache config in settings.php.

### Fixed
- Reintroduced Sensio Labs Security Checker.

### Security
- Updated lodash to 4.17.20.
- Updated lodash.template to 4.5.0.

## [1.1.1] - 2020-09-02
### Removed
- Removed the coffee module.
- Removed the honeypot module.
- Removed the view_unpublished module.

## [1.1.0] - 2020-08-13
### Changed
- Updated for Drupal 9 support.

## [1.0.5] - 2020-08-13
- This is the last release with support for Drupal 8.

### Added
- Added yargs package

### Changed
- Changed gulp scripts and docs to reference yargs


## [1.0.4] - 2020-02-04
### Added
[Issue #45](https://github.com/oomphinc/drupal-scaffold/issues/45): Add Drupal Console Support.
[Issue #48](https://github.com/oomphinc/drupal-scaffold/pull/48): Add security check for composer packages
- Updates and improvements to documentation.
- Views Unpublished module added.
- Adds autoprefixer to gulp build process.
- Removes browserlist feature from gulp build process.

## [1.0.3] - 2019-05-04
### Added
- Add default task to Gulpfile
- Ignore .lando.local.yml
- Turn off xdebug by default
- Update to README for readability

## [1.0.2] - 2019-02-28
### Added
- Add sass globbing ability to Gulp
- Backport changes to support Drupal 8.6
- Ignore .map files
- Add zaporylie/composer-drupal-optimizations library
- Update PR template
- Update NodeJS version in Lando

## [1.0.1] - 2018-06-04
### Added
- Add GitHub PR template

### Fixed
- Fix command typos in .travis.yml file
- Fix PHPUnit version due to BC issues in `7.x`

## [1.0.0] - 2018-06-01
- Initial tagged release

[Unreleased]: https://github.com/oomphinc/drupal-scaffold/compare/2.1.0...HEAD
[2.1.0]: https://github.com/oomphinc/drupal-scaffold/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/oomphinc/drupal-scaffold/compare/1.2.2...2.0.0
[1.2.2]: https://github.com/oomphinc/drupal-scaffold/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/oomphinc/drupal-scaffold/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/oomphinc/drupal-scaffold/compare/1.1.2...1.2.0
[1.1.2]: https://github.com/oomphinc/drupal-scaffold/compare/1.1.1...1.1.2
[1.1.1]: https://github.com/oomphinc/drupal-scaffold/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.5...1.1.0
[1.0.5]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.4...1.0.5
[1.0.4]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/oomphinc/drupal-scaffold/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/oomphinc/drupal-scaffold/releases/tag/1.0.0
