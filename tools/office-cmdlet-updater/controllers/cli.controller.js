class CliController {
	constructor(cliService) {
		this.cliServoce = cliService;
	}

	startCli(argv) {
		this.cliServoce.addOption({
			option: '-m --module <module>',
			description: 'update documentation for module',
			defaultValue: 'all'
		});

		this.cliServoce.addOption({
			option: '-c --cmdlet <cmdet>',
			description: 'update documentation for cmdlet in module'
		});

		this.cliServoce.start(argv, (cli) => {
			const { module, cmdlet } = cli;

			console.log(module);
			console.log(cmdlet);
		});
	}
}

module.exports = CliController;
