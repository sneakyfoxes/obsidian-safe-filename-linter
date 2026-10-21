## Welcome

Thank you for considering contributing! All contributors should abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Code Quality

When submitting a PR, run eslint and prettier on the changed files.

Please thoroughly test on at least one platform and include testing instructions in the PR.

Please provide context for your familiarity with the Obsidian API.

If you used AI, please state the level of AI assist you used. For example, "I used it for full code generation.", "I used it for the explanatory comments but wrote code by hand.", "I used it to iterate on the architecture and tweaked the resulting code.". We won't reject AI code outright, but this context is extremely helpful for directing review and catching some classes of bugs.

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

## Developing the plugin

### Initial setup

1. Install [nvm](https://github.com/nvm-sh/nvm)
2. Create a sandbox Obsidian vault
3. In the sandbox Obsidian vault, enable Community Plugins. This should create a `plugins` dir
4. In the `plugins` dir, install the [Hot Reload plugin](https://github.com/pjeby/hot-reload) (optional; strongly suggested)
5. In the `plugins` dir, git clone the project
6. In the cloned project dir, use nvm to install node v18.x
7. In the cloned project dir, install the dependencies: `npm install`
8. In the cloned project dir, start dev mode: `npm run dev`
9. In the sandbox Obsidian vault, enable this project and (optional) the Hot Reload plugin

### Developing

When developing, ensure you are running `npm run dev` to keep the project building changes.

### Testing

No automated tests are currently setup.

For manual testing, we have included test files in [`test/examples`](/test/examples). 

The test files are stored in this git repo with safe filenames, so you need to run a quick command to gunk-ify them and put them in the Obsidian content directory:

0. Make sure you have followed the steps in the `Developing the plugin > Initial setup` section above
1. Navigate to your sandbox Obsidian vault
2. Navigate to `./.obsidian/plugins/obsidian-safe-filename-linter`
3. Run:
```bash
for file in test/examples/*/*/*
do
  badChar=`cat $file`
  now=`date +"%Y%m%d_%H%M%S"`
  newPath=`echo $file | sed "s/test\/examples/..\/..\/\..\/$now/"`
  newFilename=`echo $newPath | sed "s/.md/$badChar.md/"`
  install -D -m 644 $file $newFilename
done
```
4. Open your sandbox Obsidian vault
5. Adjust the Safe Filename Linter settings as desired and then invoke the Safe Filename Linter commands

Note: The bash code above uses `install` to make sure it creates the same directory structure, but taking away the executable default. Slightly hacky.

### Code Linting

- To use eslint to analyze this project use this command:
  - `npx eslint src`
  - eslint will then create a report with suggestions for code improvement by file and line number.

### Code Formatting

- To use prettier to format source code use this command:
  - `npx prettier src --write`

### Obsidian API updates

For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releases

### Making new releases

1. Update the manifest, version, and package: `npm version [major|minor|patch]`
2. Delete the tag that is auto-created: `git tag -d [tag]`
3. Push the change and create a pull request
4. Once the pull request has been merged, pull the new `main` branch: `git checkout main && git pull origin main`
5. Tag the release commit: `git tag -a [version number without v] -m "[version number without v]"`. Example: `git tag -a 1.1.0 -m "1.1.0"`
6. Push the tag to trigger release github action workflow: `git push --tags`
7. Go to https://github.com/sneakyfoxes/obsidian-safe-filename-linter/releases and publish the release

NB Because we are using Github's rebase merge strategy, we need to work around the fact that Github is not fast-forwarding commits and is instead creating new commits for the rebase. When we allowed the tag to be in the pull release, the tag would be on a headless commit. This approach ensures that the tags are on `main`.

See for more release details: https://github.com/obsidianmd/obsidian-sample-plugin/releases

### Obsidian API documentation

See https://github.com/obsidianmd/obsidian-api

