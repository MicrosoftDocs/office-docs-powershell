class CliController {
	constructor(
		cliService,
		cmdletService,
		markdownController,
		powerShellService
	) {
		this.cliService = cliService;
		this.cmdletService = cmdletService;
		this.markdownController = markdownController;
		this.powerShellService = powerShellService;
	}
	start(argv) {
		try {
			this.startCli(argv);
		} catch (e) {
			this.powerShellService.dispose();
			console.error(e.message);
		}
	}

	startCli(argv) {
		this.cliService.addOption({
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

		this.cliService.addOption({
			option: '-c --cmdlet <cmdet>',
			description: 'update documentation for cmdlet in module',
			action: (cli) => {
				const { module, cmdlet } = cli;

				if (module === 'all' && cmdlet) {
					throw new Error('You must specify a module for cmdlet.');
				}
			}
		});

		this.cliService.start(argv, async (cli) => {
			const { module, cmdlet } = cli;

			await this.markdownController.updateMarkdown({
				moduleName: module,
				cmdlet
			});
		});
	}
}

module.exports = CliController;
