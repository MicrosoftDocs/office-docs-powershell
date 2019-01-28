class LogsController {
	constructor(logParseService, logStoreService) {
		this.logParseService = logParseService;
		this.logStoreService = logStoreService;
	}

	saveAndParseLogs({ moduleResults }) {
		let parsedModules = [];

		for (let { module, logs, errors } of moduleResults) {
			this._saveLogsIntoFs({ module, logs, errors });

			const parsedLogs = this._parseLogs({ logs });

			parsedModules = [...parsedModules, { module, parsedLogs }];
		}

		return parsedModules;
	}

	_saveLogsIntoFs({ module, logs, errors }) {
		this.logStoreService.saveInFs({ name: module, logs, errors });
	}

	_parseLogs({ logs }) {
		let parsedLogs = [];

		logs.forEach((log) => {
			const logObj = this.logParseService.parse({ log });

			parsedLogs = [...parsedLogs, logObj];
		});

		return parsedLogs;
	}
}

module.exports = LogsController;
