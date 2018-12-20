class CliController {
	constructor(
		cliService,
		cmdletService,
		powerShellService,
		moduleController,
		logStoreService,
		logsController
	) {
		this.cliService = cliService;
		this.cmdletService = cmdletService;
		this.powerShellService = powerShellService;
		this.moduleController = moduleController;
		this.logsController = logsController;
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

			const { logs, errors } = await this.moduleController.execute({
				cliModuleName: module,
				cliCmdletName: cmdlet,
				isNeedPullRequest: false
			});

			this.powerShellService.dispose();

			const parsedLogs = this.logsController.saveAndParseLogs({
				logs,
				errors
			});

			console.log(parsedLogs);
		});
	}
}

module.exports = CliController;
