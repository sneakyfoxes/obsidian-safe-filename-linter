import { App, DropdownComponent, PluginSettingTab, Setting } from 'obsidian';
import type SafeFilenameLinter from './main';

export default class SafeFilenameLinterSettingTab extends PluginSettingTab {
	plugin: SafeFilenameLinter;

	constructor(app: App, plugin: SafeFilenameLinter) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		this.intro();
		this.obsidianChars();
		this.androidChars();
		this.otherChars();
	}

	intro(): void {
		const { containerEl } = this;

		containerEl.createEl('p', {
			text: 'Note that Obsidian will automatically truncate multiple spaces in filenames and [[links]] into one space.',
		});
	}

	addReplacementOptions(dropdown: DropdownComponent): void {
		dropdown.addOption('off', 'off');
		dropdown.addOption('blank', 'empty string');
		dropdown.addOption('space', 'space');
		dropdown.addOption('hyphen', 'hyphen');
		dropdown.addOption('hyphen-space', 'hyphen surrounded by spaces');
	}

	obsidianChars(): void {
		const { containerEl } = this;

		containerEl.createEl('h2', { text: 'Obsidian troublesome characters' });
		containerEl.createEl('p', {
			text: "Obsidian itself won't let you use these in filenames and will remove them automatically. However, if you create files via external means they can creep in. These characters wreak havoc with [[links]] syntax.",
		});

		// Setting for square brackets: []
		new Setting(containerEl)
			.setName('Replacement for square brackets')
			.setDesc('Specify the replacement for [ and ]')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.squareBrackets);
				dropdown.onChange(async (value) => {
					this.plugin.settings.squareBrackets = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for number sign: #
		new Setting(containerEl)
			.setName('Replacement for number sign')
			.setDesc('Specify the replacement for #')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.numberSign);
				dropdown.onChange(async (value) => {
					this.plugin.settings.numberSign = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for caret: ^
		new Setting(containerEl)
			.setName('Replacement for caret')
			.setDesc('Specify the replacement for ^')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.caret);
				dropdown.onChange(async (value) => {
					this.plugin.settings.caret = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for pipe: |
		new Setting(containerEl)
			.setName('Replacement for pipe')
			.setDesc('Specify the replacement for |')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.pipe);
				dropdown.onChange(async (value) => {
					this.plugin.settings.pipe = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for colon: :
		new Setting(containerEl)
			.setName('Replacement for colon')
			.setDesc('Specify the replacement for :')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.colon);
				dropdown.onChange(async (value) => {
					this.plugin.settings.colon = value;
					await this.plugin.saveSettings();
				});
			});
	}

	androidChars(): void {
		const { containerEl } = this;

		this.containerEl.createEl('h2', { text: 'Android invalid characters' });
		this.containerEl.createEl('p', {
			text: 'Obsidian for Android will not allow you to create filenames with these characters, but external programs and other Obsidian platforms will. If you sync your vault between Android and non-Android systems using git or other means, these may cause you issues.',
		});

		// Setting for asterisk: *
		new Setting(containerEl)
			.setName('Replacement for asterisk')
			.setDesc('Specify the replacement for *')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.asterisk);
				dropdown.onChange(async (value) => {
					this.plugin.settings.asterisk = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for question mark: ?
		new Setting(containerEl)
			.setName('Replacement for question mark')
			.setDesc('Specify the replacement for ?')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.questionMark);
				dropdown.onChange(async (value) => {
					this.plugin.settings.questionMark = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for double quote: "
		new Setting(containerEl)
			.setName('Replacement for double quote')
			.setDesc('Specify the replacement for "')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.doubleQuote);
				dropdown.onChange(async (value) => {
					this.plugin.settings.doubleQuote = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for angle brackets: <>
		new Setting(containerEl)
			.setName('Replacement for angle brackets')
			.setDesc('Specify the replacement for < and >')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.angleBrackets);
				dropdown.onChange(async (value) => {
					this.plugin.settings.angleBrackets = value;
					await this.plugin.saveSettings();
				});
			});
	}

	otherChars(): void {
		const { containerEl } = this;

		this.containerEl.createEl('h2', {
			text: 'Other troublesome characters',
		});
		this.containerEl.createEl('p', {
			text: 'If you sync your vault with external systems, such as OneDrive, you might run into issues with these characters.',
		});

		// Setting for equal: =
		new Setting(containerEl)
			.setName('Replacement for equal')
			.setDesc('Specify the replacement for =')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.equal);
				dropdown.onChange(async (value) => {
					this.plugin.settings.equal = value;
					await this.plugin.saveSettings();
				});
			});

		// Setting for percentage: %
		new Setting(containerEl)
			.setName('Replacement for percentage')
			.setDesc('Specify the replacement for %')
			.addDropdown((dropdown) => {
				this.addReplacementOptions(dropdown);
				dropdown.setValue(this.plugin.settings.percentage);
				dropdown.onChange(async (value) => {
					this.plugin.settings.percentage = value;
					await this.plugin.saveSettings();
				});
			});
	}
}
