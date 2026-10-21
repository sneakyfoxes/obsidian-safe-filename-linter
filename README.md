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

To lint files automatically without needing to manually invoke the commands, enable `Lint automatically` in the plugin settings. This will automatically lint files created using Obsidian, as well as any files created in external systems that are synced into your Obsidian vault. Enabling the setting will not lint existing files. Run `Lint all filenames in the vault` once to clean them up.

To the best of our understanding, `Lint automatically` should also handle files added using [Obsidian Sync](https://obsidian.md/sync), but since the authors of this plugin do not use Obsidian Sync, we cannot guarantee compatibility. A contribution validating compatibility would be very welcome.

### Credits

We are grateful to the developers of Obsidian for the [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) for the basis of this plugin, and to [Obsidian Filename Emoji Remover Plugin](https://github.com/YTolun/obsidian-filename-emoji-remover), whose code we read and experimented with before diving into writing our own plugin.

Thank you to @robertgarrigos and @cwoelk for automatic linting and bugfixes.

## Installing the plugin

### Community plugin directory

1. Search for `Safe Filename Linter` in the directory
2. Enable this project from the Community Plugins setting section
3. Set up your preferred character replacements in the Safe Filename Linter Community Plugins section

### Manually Install

1. On the command line, navigate to your vault's `.obsidian/plugins` directory and run:
   `git clone https://github.com/sneakyfoxes/obsidian-safe-filename-linter`
   - Alternatively, download the latest release and place the `main.js` and `manifest.json` in the directory in `obsidian-safe-filename-linter`
2. In your Obsidian vault, enable this project from the Community Plugins setting section
3. Set up your preferred character replacements in the Safe Filename Linter Community Plugins section

## Contributing

We welcome issues and pull requests for any characters that cause issues for Obsidian or any platform it runs on. We also welcome any additional replacement characters. This plugin has no desire to handle linting characters beyond functional filename use cases.

See [CONTRIBUTING](./CONTRIBUTING.md) for details on how to submit code.

