const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');

class LogStoreService {
	constructor(db) {
		this.db = db;
	}

	addLog(log, name) {
		this._addMap('logs', log, name);
	}

	addError(err, name) {
		this._addMap('errors', err, name);
	}

	addTempFolder(name, tempFolderName) {
		this._addMap('tempFolders', name, tempFolderName);
	}

	getAllLogs() {
		return this._getAll('logs');
	}

	getAllErrors() {
		return this._getAll('errors');
	}

	getAllTempFolders() {
		return this._getAll('tempFolders');
	}

	_addMap(collection, obj, name) {
		const map = this.db.get(collection).value();

		if (!map.has(name)) {
			map.set(name, []);
		}

		const arr = [...map.get(name), obj];

		map.set(name, arr);

		this.db.set(collection, map).write();
	}

	_getAll(collection) {
		return this.db.get(collection).value();
	}

	saveInFs() {
		const logs = this.getAllLogs();

		for (const key of logs.keys()) {
			const fileName = `${this._getLogName()}.log`;
			const filePath = path.join('.local', 'logs', key, fileName);

			fs.ensureFileSync(filePath);

			const logs = this.getAllLogs().get(key);
			const logsContent = logs ? logs.join('\n') : '';

			const errors = this.getAllErrors().get(key);
			const errorContent = errors ? errors.join('\n') : '';

			fs.writeFile(filePath, logsContent + errorContent);
		}
	}

	_getLogName() {
		return moment().format('HH_mm_DD_MM_YY');
	}
}

module.exports = LogStoreService;
