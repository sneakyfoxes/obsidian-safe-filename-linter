## Welcome

Thank you for considering contributing! All contributors should abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Code Quality

When submitting a PR, run eslint and prettier on the changed files.

Please thoroughly test on at least one platform and include testing instructions in the PR.

Add a review request from `@sneakyfoxes/engineers`.

## Maintainer Response

We will do our best to respond in a timely manner to all contributions, with a goal of acknowledging Issues and PRs within two weeks. Priority will be given to contributions that follow our requested guidance here.

## Contributing Limitations

###  Examples of Good Contributions
  - New characters that cause issues for Obsidian or any platform it runs on.
  - New additional replacement characters.

###  Examples of Out-of-Scope Contributions
  - Emojis
  - non-ASCII characters
  - Characters beyond functional filename use cases

### `/` & `\`

We intentially did not include handling for the troublesome characters `\` and `/` due to difficulties in testing these globally-forbidden filename characters, but would actively welcome a contribution that can provide a testing protocol for them. Without that protocol, these characters are not a welcome contribution.

