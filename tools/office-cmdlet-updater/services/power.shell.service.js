const Shell = require('node-powershell');
const of = require('await-of').default;
const { powerShellErrors } = require('../constants/errors');
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
		let output, err, result;

		[output, err] = await of(this.installPlatyPsIfNeeded());

		if (err) {
			await this.dispose();
			throw new Error(err);
		}

		result += output;

		[output, err] = await of(this.preInstallTeams());

		if (err) {
			await this.dispose();
			throw new Error(err);
		}

		result += output;

		[output, err] = await of(this.preInstallSkype());

		if (err) {
			await this.dispose();
			throw new Error(err);
		}

		result += output;

        [output, err] = await of(this.preInstallSharepoint());

        if (err) {
            await this.dispose();
            throw new Error(err);
        }

        result += output;

		return result;
	}

	async preInstallSharepoint() {
		let result;

		result += await this._invokeCommand(commands.SHAREPOINT_INSTALL_MODULE);

		return result;
	}

	async preInstallSkype() {
		let result;

		//result += await this._invokeCommand(commands.SKYPE_SET_POLICY);

		result += await this._invokeCommand(commands.SKYPE_INSTALL_MODULE);

		result += await this._invokeCommand(commands.SKYPE_GET_CRED);

		result += await this._invokeCommand(commands.SKYPE_CREATE_SESSION);

		result += await this._invokeCommand(commands.SKYPE_IMPORT_SESSION);

		return result;
	}

	async _invokeCommand(command) {
		const [output, err] = await of(this.invokeCommand(command));

		if (err) {
			throw new Error(err);
		}

		return output;
	}

	async preInstallTeams() {
		let output, err, result;

		// TODO: check if user already auth

		const installModule = commands.INSTALL_MICROSOFT_TEAM;

		[output, err] = await of(this.invokeCommand(installModule));

		result += output;

		if (err) {
			throw new Error(powerShellErrors.INSTALL_MICROSOFT_TEAM_ERROR);
		}

		const auth = commands.CONNECT_MICROSOFT_TEAM;

		[output, err] = await of(this.invokeCommand(auth));

		result += output;

		if (err) {
			throw new Error(powerShellErrors.AUTH_MICROSOFT_TEAM_ERROR);
		}

		return result;
	}

	async installPlatyPsIfNeeded() {
		let output,
			err,
			result = '';

		const installModule = commands.INSTALL_PLATYPS;

		[output, err] = await of(this.invokeCommand(installModule));

		if (err) {
			throw new Error(powerShellErrors.INSTALL_PLATYPS_ERROR);
		}

		result += output;

		const importModule = commands.IMPORT_PLATYPS;

		[output, err] = await of(this.invokeCommand(importModule));

		if (err) {
			throw new Error(powerShellErrors.IMPORT_PLATYPS_ERROR);
		}

		result += output;

		return result;
	}

	async updateMarkdown(docPath, logPath) {
		const command = this.createUpdateMarkdownCommand(docPath, logPath);

		const [output, err] = await of(this.invokeCommand(command));

		if (err) {
			throw new Error(err);
		}

		return output;
	}

	createUpdateMarkdownCommand(docPath, logPath) {
		return format(commands.UPDATE_MARKDOWN, docPath, logPath);
	}

	async invokeCommand(command) {
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
