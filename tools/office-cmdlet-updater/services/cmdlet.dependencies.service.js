const commands = require('../constants/commands');
const errors = require('../constants/errors');
const format = require('string-format');

class CmdletDependenciesService {
	constructor(powerShellService, config) {
		this.ps = powerShellService;
		this.config = config;
	}

	async installDependencies({ cmdletName }) {
		await this.installGlobalDependencies();

		switch (cmdletName) {
			case 'teams': {
				const { login, pass } = this._getCredentialsFromConfig();

				await this.preInstallTeams({ login, pass });
				break;
			}
			case 'skype': {
				const { login, pass } = this._getCredentialsFromConfig();

				await this.preInstallSkype({ login, pass });
				break;
			}
			case 'sharepoint': {
				await this.preInstallSharepoint();
				break;
			}
			case 'whiteboard': {
				await this.preInstallWhiteboard();
				break;
			}
			case 'exchange': {
				const { login, pass } = this._getCredentialsFromConfig();

				await this.preInstallExchange({ login, pass });
				break;
			}
			case 'staffhub': {
				await this.preInstallStuffHub();
				break;
			}
			default: {
			}
		}
	}

	async installGlobalDependencies() {
		await this.installPsGallery();
		await this.installPlatyPs();
	}

	async installPlatyPs() {
		await this.ps.invokeCommand(commands.INSTALL_PACKAGE_PROVIDER);
		await this.ps.invokeCommand(commands.INSTALL_PLATYPS);
		await this.ps.invokeCommand(commands.IMPORT_PLATYPS);
	}

	async installPsGallery() {
		try {
			await this.ps.invokeCommand(commands.INSTALL_PS_GALLERY);
		} catch (e) {
			throw errors.powerShellErrors.PS_GALLERY_INSTALL_ERROR;
		}
	}

	async preInstallTeams({ login, pass }) {
		await this._createCredInPs({ login, pass });
		//await this.ps.invokeCommand(commands.GET_TEAMS_CREDENTIALS);
		await this.ps.invokeCommand(commands.INSTALL_MICROSOFT_TEAM);
		await this.ps.invokeCommand(commands.IMPORT_MICROSOFT_TEAM);
		await this.ps.invokeCommand(commands.CONNECT_MICROSOFT_TEAM);
	}

	async preInstallSharepoint() {
		await this.ps.invokeCommand(commands.SHAREPOINT_INSTALL_MODULE);
	}

	async preInstallSkype({ login, pass }) {
		await this._createCredInPs({ login, pass });

		try {
			await this.ps.invokeCommandAndIgnoreError({
				command: commands.SKYPE_ENABLE_WIN_RM,
				printError: true
			});

			//await this.ps.invokeCommand(commands.SKYPE_GET_CRED);
			await this.ps.invokeCommand(commands.SKYPE_INSTALL_LYNC_MODULE);
			await this.ps.invokeCommand(commands.SKYPE_INSTALL_MODULE);
			await this.ps.invokeCommand(commands.SKYPE_CREATE_SESSION);
			await this.ps.invokeCommand(commands.SKYPE_IMPORT_SESSION);
		} catch (e) {
			throw errors.powerShellErrors.SKYPE_INSTALL_ERROR;
		}
	}

	async preInstallWhiteboard() {
		await this.ps.invokeCommand(commands.WHITEBOARD_INSTALL_MODULE);
	}

	async preInstallExchange({ login, pass }) {
		await this._createCredInPs({ login, pass });

		try {
			await this.ps.invokeCommandAndIgnoreError({
				command: commands.SKYPE_ENABLE_WIN_RM,
				printError: true
			});

			await this.ps.invokeCommand(commands.EXCHANGE_INSTALL_MODULE);
			await this.ps.invokeCommand(commands.EXCHANGE_GET_SESSION);
			await this.ps.invokeCommand(commands.EXCHANGE_SESSION_IMPORT);
		} catch (e) {
			throw errors.powerShellErrors.EXCHANGE_INSTALL_ERROR;
		}
	}

	async preInstallStuffHub() {
		// TODO: install module when installation error will be fix
		await this.ps.invokeCommand(commands.STUFFHUB_INSTALL);
	}

	_getCredentialsFromConfig() {
		const { login, pass } = this.config.get('platyPS.credentials');

		if (!login || !pass) {
			throw new Error(errors.powerShellErrors.EMPTY_CONFIG_CREDENTIALS);
		}

		return { login, pass };
	}

	async _createCredInPs({ login, pass }) {
		await this.ps.invokeCommand(format(commands.SET_LOGIN, login));
		await this.ps.invokeCommand(format(commands.SET_PASS, pass));

		await this.ps.invokeCommand(commands.CONVERT_PASS_TO_SEC_STRING);
		await this.ps.invokeCommand(commands.CREAT_CRED);
	}
}

module.exports = CmdletDependenciesService;
