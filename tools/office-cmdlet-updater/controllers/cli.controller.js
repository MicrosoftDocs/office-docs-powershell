class CliController {
	constructor(
		cliService,
		cmdletService,
		powerShellService,
		markdownController
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

		this.cliService.addOption({
			option: '-e --send-email',
			description: 'send email notification'
		});

		this.cliService.addOption({
			option: '-p --create-pr',
			description: 'create pull request'
		});

		this.cliService.start(argv, async (cli) => {
			const {
				module: cliModuleName,
				cmdlet: cliCmdletName,
				sendEmail: isNeedEmail,
				createPr: isNeedPullRequest
			} = cli;

			await this.markdownController.updateMarkdown({
				cliModuleName,
				cliCmdletName,
				isNeedPullRequest,
				isNeedEmail
			});
		});
	}
}

module.exports = CliController;
