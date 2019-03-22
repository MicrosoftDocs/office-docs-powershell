const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');

class LogStoreService {
	async getLogFileContent({ logFilePath }) {
		await fs.ensureFile(logFilePath);

		return (await fs.readFile(logFilePath)).toString();
	}

	saveInFs({ name, logs, errors }) {
		const fileName = `${this._getLogName()}.log`;
		const filePath = path.join('.local', 'logs', name, fileName);

		fs.ensureFileSync(filePath);

		const logsContent = logs ? logs.join('\n') : '';
		const errorContent = errors ? errors.join('\n') : '';

		fs.writeFile(filePath, logsContent + errorContent);
	}

	_getLogName() {
		return moment().format('HH_mm_DD_MM_YY');
	}
}

module.exports = LogStoreService;
