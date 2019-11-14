---
title: Running Security Check on Composer
tags:
  - security
  - composer
  - php
---
# Running Security Check on Composer
This security check can only detect vulnerabilities that are referenced in the
SensioLabs security advisories database. Execute this command regularly to check
newly discovered vulnerabilities. It scans your root `composer.lock` file

## Security Check Command
Run this command to generate a command line report:
```bash
lando security-check
```
