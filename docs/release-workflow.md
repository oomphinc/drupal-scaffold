## Release workflow

### Versioning scheme
[Oomph Inc's Drupal Scaffold][] uses a modified [Semantic Versioning][] scheme.
The only changes we make are for clarity. Since we're
versioning a website, and not a library or piece of software, we use different
terms to describe each part of the version string.

Given a version number `SITE.MAJOR.MINOR`, increment the:

1. `SITE` version when you rebuild the website,
2. `MAJOR` version when you make a major change to the website,
3. `MINOR` version when you make a minor change to the website.

Additional labels for pre-release and build metadata are available as extensions
to the `SITE.MAJOR.MINOR` format.

#### Major vs Minor

##### Major
- _Minor_ (in the semver sense) core updates
- _Major_ (in the semver sense) module updates
- Major feature changes to the website

##### Minor
- _Patch_ (in the semver sense) core updates
- All other module updates
- Bug fixes
- Minor feature changes

For any version change, it's up to the Release Manager/Project Lead and the
Project Manager to decide if the change set warrants a major or minor version
change. If there is any question, a discussion should also be opened up amongst
the engineering team.

### Release schedule
Releases typically take place weekly on Thursday. They should be performed before 3:30 PM
EST to allow ample time to fix anything on production if something goes wrong.

### Creating a release
When it's time to release a new set of code to production, the Release Manager
(usually the Project Lead) will coordinate with the Project Manager and create
a release.

#### Create a release branch
The first step of releasing is creating a release branch. In our examples, we
will be releasing version `2.5.1`.

Release branches should always be prefixed with `release/`.

```
git checkout master
git pull
git checkout -b release/2.5.1
git push -u origin release/2.5.1
```

#### Update the `CHANGELOG`
Next, you must update the `CHANGELOG` to reflect the next version.

1. Remove any empty sections under under the `[Unreleased]` version and make any
updates to the information that you see fit.

2. Change `[Unreleased]` to `[2.5.1] - 2017-04-28`. Replacing `2017-04-28` with
the current date in the format `YYYY-MM-DD`.

3. Add a new unreleased section with the following format above the
`[2.5.1] - 2017-04-28` release.

```
## [Unreleased]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
```

4. Update the `[Unreleased]` comparison link at the bottom of the file, and add
a new comparison link below it comparing between the previous version and the
new version being released.

```
[Unreleased]: https://github.com/oomphinc/project/compare/2.5.1...HEAD
[2.5.1]: https://github.com/oomphinc/project/compare/2.5.0...2.5.1
```

5. Commit the `CHANGELOG` and push it up to GitHub.

```
git add CHANGELOG.md
git commit -m "Prepare CHANGELOG for 2.5.1 release"
git push
```

#### Release preparation
At this point, you should also make any changes necessary for the release to
proceed. For example, on a Drupal 8 site, you might want to pull down the
production configuration with Drush so that it's synchronized. This is where
that step would happen.

#### Create a pull request
Now we need to create a Pull Request for our release. This is just the last line
of defense in case we've made any mistakes. Just create a Pull Request against
`master` to merge in `release/2.5.1`.

Once that has been reviewed, approved, and merged...

#### Tag the release
Finally, we tag our release. All tags must be annotated and should contain the
relevant information from the `CHANGELOG` for this release. It is also
recommended that you sign your tags with your gpg key.

```
git checkout master
git pull
git tag -a 2.5.1
```

(use `-s` instead of `-a` to sign your tag with your gpg key)

This will open a text editor, and allow you to annotate the tag. The first line
of the tag annotation should be `Release version 2.5.1`, followed by an empty
line and then the relevant `CHANGELOG`. Once complete, your tag annotation
should look like this:

```
Release version 2.5.1
## [2.5.1] - 2017-04-28
### Added
- Added an additional feature
### Fixed
- Fixed a bug that did xyz
```

Finally, push it up to GitHub:

```
git push --follow-tags
```

[Oomph Inc's Drupal Scaffold]: https://github.com/oomphinc/drupal-scaffold.git
[Keep a Changelog]: http://keepachangelog.com/
[git-commit-messages]: https://chris.beams.io/posts/git-commit/
[Semantic Versioning]: http://semver.org/
[Release workflow]: #release-workflow
