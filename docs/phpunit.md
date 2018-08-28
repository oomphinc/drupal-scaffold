---
title: Writing PHPUnit Tests
tags:
  - testing
  - phpunit
  - php
---
# Writing PHPUnit Tests

PHPUnit tests in the project are run in your terminal:

```bash
$ lando phpunit
```

## Test Locations

PHPUnit is configured to look for tests in the following locations:

* `web/modules/custom/*/tests/src/Unit`

Test classes must be suffixed with `Test.php`, e.g. `RouteSubscriberTest.php`.

### Modules
If you are writing tests for
`web/modules/custom/my_module/src/Routing/RouteSubscriber.php`, you would create
the following test file:
`web/modules/custom/my_module/tests/src/Unit/Routing/RouteSubscriberTest.php`.

## Test Groups
All unit tests should tag the actual test class with the `MyProject` group
(where `MyProject` is the name of this project) and any other applicable groups,
e.g.

```php
namespace Drupal\Tests\my_module\Unit\Routing;

use Drupal\Tests\UnitTestCase;

/**
 * Tests my_module RouteSubscriber
 *
 * @group MyProject
 * @group my_module
 */
class RouteSubscriberTest extends UnitTestCase {

  // ...

}
```

## Code Coverage
Code coverage reports are generated in different formats inside of the
`tests/results/phpunit` directory. Coverage reports are generated in the
following formats:

* HTML (`tests/phpunit/results/html`)
* Text (`tests/phpunit/results/coverage.txt`)
* Clover (`tests/phpunit/results/clover.xml`)
* Crap4j (`tests/phpunit/results/crap4j.xml`)
