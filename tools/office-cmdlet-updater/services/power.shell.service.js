const Shell = require('node-powershell');
const of = require('await-of').default;
const commands = require('../constants/commands');
const format = require('string-format');
const { errorColor } = require('../helpers/colors');

class PowerShellService {
	constructor(config) {
		this.config = config;
		this.ps = new Shell({
			executionPolicy: 'Unrestricted',
			noProfile: true
		});
	}

	async updateMarkdown(docPath, logPath) {
		const command = format(commands.UPDATE_MARKDOWN, docPath, logPath);

		return await this.invokeCommand(command);
	}

	async invokeCommand(command) {
		await this.ps.addCommand(command);

		const [output, err] = await of(this.ps.invoke());

		if (err) {
			throw new Error(err);
		}

		return output;
	}

	async invokeCommandAndIgnoreError({ command, printError = false }) {
		await this.ps.addCommand(command);

		const [output, err] = await of(this.ps.invoke());

		if (err && printError) {
			console.error(errorColor(err));
		}

		return output;
	}

	async dispose() {
		return await this.ps.dispose();
	}
}

module.exports = PowerShellService;
