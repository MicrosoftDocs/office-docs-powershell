class LogsController {
	constructor(logParseService, logStoreService) {
		this.logParseService = logParseService;
		this.logStoreService = logStoreService;
	}

	saveAndParseLogs({ logs, errors }) {
		this._saveLogsIntoFs({ logs, errors });

		return this._parseLogs({ logs });
	}

	_saveLogsIntoFs({ logs, errors }) {
		this.logStoreService.saveInFs({ logs, errors });
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
