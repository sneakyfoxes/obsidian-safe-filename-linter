# Obsidian Filename Linter Plugin

## Description

Lint filenames for invalid or troublesome characters, such as pipes, colons, and brackets.

Useful for Obsidian users who create notes via external means or sync their notes across various platforms.

Handles characters that cause issues for Obsidian itself along with characters that are invalid in Android filenames.

## Using the plugin

### Manual invocation

This plugin adds two commands.

- `Safe filename linter: Lint the current filename`
- `Safe filename linter: Lint all filesnames in the vault`

These commands rename files by replacing invalid or troublesome characters with characters of your choice. The renaming action uses the Obsidian renaming calls and will follow your vault settings for updating internal links (Prompted or Automatic). Be prepared to be patient if you have a large vault with many required renames.

### Automatic invocation

Not yet available.

### Credits

We are grateful to the developers of Obsidian for the [Obisidan Sample Plugin](obsidianmd/obsidian-sample-plugin) for the basis of this plugin, and to [Obsidian Filename Emoji Remover Plugin](https://github.com/YTolun/obsidian-filename-emoji-remover), whose code we read and experimented with before diving into writing our own plugin.

## Installing the plugin

### Community plugin directory

1. Search for `Safe Filename Linter` in the directory
2. Enable this project from the Community Plugins setting section
3. Set up your preferred character replacements in the Safe Filename Linter Community Plugins section

### Manually Install

1. On the command line, navigate to your vault's `.obsidian/plugins` directory and run:
   `git clone https://github.com/sneaky-foxes/obsidian-safe-filename-linter`
   - Alternatively, download the latest release and place the `main.js` and `manifest.json` in the directory in `obsidian-safe-filename-linter`
2. In your Obsidian vault, enable this project from the Community Plugins setting section
3. Set up your preferred character replacements in the Safe Filename Linter Community Plugins section

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

### Contributing

We welcome issues and pull requests for any characters that cause issues for Obsidian or any platform it runs on. We also welcome any additional replacement characters. This plugin has no desire to handle linting characters beyond functional filename use cases.

See [CONTRIBUTING](./CONTRIBUTING.md) for details on how to submit code.


### Testing

No automated tests are currently setup.

For manual testing, we have included test files in [`test/examples`](/test/examples). 

The test files are stored in this git repo with safe filenames, so you need to run a quick command to gunk-ify them and put them in the obsidian content directory:

0. Make sure you have followed the steps in the `Developing the plugin > Initial setup` section above
1. Navigate to your sandbox Obsidian vault
2. Navigate to `./.obsidian/plugins/obsidian-filename-linter`
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
  - `eslint .src`
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
7. Go to https://github.com/sneaky-foxes/obsidian-safe-filename-linter/releases and publish the release

NB Because we are using Github's rebase merge strategy, we need to work around the fact that Github is not fast-forwarding commits and is instead creating new commits for the rebase. When we allowed the tag to be in the pull release, the tag would be on a headless commit. This approach ensures that the tags are on `main`.

See for more release details: https://github.com/obsidianmd/obsidian-sample-plugin/releases

### Obsidian API documentation

See https://github.com/obsidianmd/obsidian-api
