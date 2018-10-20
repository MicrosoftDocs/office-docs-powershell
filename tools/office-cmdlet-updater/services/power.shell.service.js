const Shell = require('node-powershell');
const of = require('await-of').default;
const commands = require('../constants/commands');
const format = require('string-format');

class PowerShellService {
	constructor(config) {
		this.config = config;
		this.ps = new Shell({
			executionPolicy: 'Bypass',
			noProfile: true
		});
	}

	async preInstall() {
		let result = '';

		result += await this.installPlatyPsIfNeeded();

		// result += await this.preInstallTeams();

		// result += await this.preInstallSkype();

		// result += await this.preInstallSharepoint();

		result += await this.preInstallWhiteboard();

		return result;
	}

	async installPlatyPsIfNeeded() {
		let result = '';

		result += await this._invokeCommand(commands.INSTALL_PLATYPS);

		result += await this._invokeCommand(commands.IMPORT_PLATYPS);

		return result;
	}

	async preInstallTeams() {
		let result = '';

		// TODO: check if user already auth

		result += await this._invokeCommand(commands.INSTALL_MICROSOFT_TEAM);

		result += await this._invokeCommand(commands.CONNECT_MICROSOFT_TEAM);

		return result;
	}

	async preInstallSkype() {
		let result = '';

		//result += await this._invokeCommand(commands.SKYPE_SET_POLICY);

		result += await this._invokeCommand(commands.SKYPE_INSTALL_MODULE);

		result += await this._invokeCommand(commands.SKYPE_GET_CRED);

		result += await this._invokeCommand(commands.SKYPE_CREATE_SESSION);

		result += await this._invokeCommand(commands.SKYPE_IMPORT_SESSION);

		return result;
	}

	async preInstallSharepoint() {
		let result = '';

		result += await this._invokeCommand(commands.SHAREPOINT_INSTALL_MODULE);

		return result;
	}

	async preInstallWhiteboard() {
		let result = '';

		result += await this._invokeCommand(commands.WHITEBOARD_INSTALL_MODULE);

		return result;
	}

	async updateMarkdown(docPath, logPath) {
		const command = format(commands.UPDATE_MARKDOWN, docPath, logPath);

		return await this._invokeCommand(command);
	}

	async _invokeCommand(command) {
		await this.ps.addCommand(command);

		const [output, err] = await of(this.ps.invoke());

		if (err) {
			throw new Error(err);
		}

		return output;
	}

	async dispose() {
		return await this.ps.dispose();
	}
}

module.exports = PowerShellService;
