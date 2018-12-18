const shortId = require('shortid');

class ModuleController {
	constructor(
		config,
		moduleService,
		cmdletService,
		powerShellService,
		logStoreService
	) {
		this.config = config;
		this.moduleService = moduleService;
		this.pss = powerShellService;
		this.logStoreService = logStoreService;
	}

	async execute({ cliModuleName, cliCmdletName, isNeedPullRequest }) {
		let { docs: modules, ignoreFiles, tempFolderPath } = this.config.get(
			'platyPS'
		);

		modules = this.moduleService.filterModules({ cliModuleName, modules });

		let cmdlets = [];
		for (let module of modules) {
			const moduleCmdlets = await this.cmdletService.getModuleCmdlets({
				cliCmdletName,
				ignoreFiles,
				module
			});

			if (!moduleCmdlets.length) {
				throw new Error(
					`Can't find cmdlets in module "${module.name}"`
				);
			}

			cmdlets = [...cmdlets, ...moduleCmdlets];
		}

		const logFilePath = `${tempFolderPath}\\${shortId()}.log`;
		const cmdletTempPath = isNeedPullRequest
			? `${tempFolderPath}\\${shortId()}`
			: '';

		for (let cmdletPath of cmdlets) {
			if (cmdletTempPath) {
				cmdletPath = await this.cmdletService.copyMdInTempFolder(
					cmdletPath,
					cmdletTempPath
				);
			}

			const [consoleOutput, err] = await of(
				this.pss.updateMarkdown(cmdletPath, logFilePath)
			);

			if (err) {
				console.log(err);
				this.logStoreService.addError(err, '');

				throw new Error(err);
			}

			console.log(consoleOutput);

			const logContent = this.logStoreService.
		}
	}
}
