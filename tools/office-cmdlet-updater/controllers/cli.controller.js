class CliController {
	constructor(cliService, cmdletService, markdownController) {
		this.cliServoce = cliService;
		this.cmdletService = cmdletService;
		this.markdownController = markdownController;
	}

	startCli(argv) {
		this.cliServoce.addOption({
			option: '-m --module <module>',
			description: 'update documentation for module',
			defaultValue: 'all',
			action: (cli) => {
				const { module } = cli;

				if (module === 'all') {
					return;
				}

				this.cmdletService.ensureModuleExist(module);
			}
		});

		this.cliServoce.addOption({
			option: '-c --cmdlet <cmdet>',
			description: 'update documentation for cmdlet in module',
			action: (cli) => {
				const { module, cmdlet } = cli;

				if (module === 'all' && cmdlet) {
					throw new Error('You must specify a module for cmdet.');
				}
			}
		});

		this.cliServoce.start(argv, async (cli) => {
			const { module, cmdlet } = cli;

			this.markdownController.updateMarkdown({
				moduleName: module,
				cmdlet
			});
			console.log(module);
			console.log(cmdlet);
		});
	}
}

module.exports = CliController;
