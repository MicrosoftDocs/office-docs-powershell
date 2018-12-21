class CliController {
	constructor(
		cliService,
		cmdletService,
		powerShellService,
		moduleController,
		logStoreService,
		logsController,
		notificationController,
		githubController
	) {
		this.cliService = cliService;
		this.cmdletService = cmdletService;
		this.powerShellService = powerShellService;
		this.moduleController = moduleController;
		this.logsController = logsController;
		this.notificationController = notificationController;
		this.githubController = githubController;
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

		this.cliService.addOption({
			option: '-e --email',
			description: 'send email notification'
		});

		this.cliService.addOption({
			option: '-p --pull-request',
			description: 'create pull request'
		});

		this.cliService.start(argv, async (cli) => {
			const {
				module,
				cmdlet,
				email: isNeedEmail,
				pullRequest: isNeedPullRequest
			} = cli;

			const moduleResults = await this.moduleController.execute({
				cliModuleName: module,
				cliCmdletName: cmdlet,
				isNeedPullRequest
			});

			this.powerShellService.dispose();

			const parsedModules = this.logsController.saveAndParseLogs({
				moduleResults
			});

			if (isNeedPullRequest) {
				await this.githubController.createPullRequest();
			}

			if (isNeedEmail) {
				this.notificationController.sendMailNotification({
					parsedModules
				});
			}
		});
	}
}

module.exports = CliController;
