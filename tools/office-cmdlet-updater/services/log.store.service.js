const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');

class LogStoreService {
	constructor(db) {
		this.db = db;
	}

	addLog(log) {
		this._add('logs', log);
	}

	addError(err) {
		this._add('errors', err);
	}

	getAllLogs() {
		return this._getAll('logs');
	}

	getAllErrors() {
		return this._getAll('errors');
	}

	_add(collection, obj) {
		this.db
			.get(collection)
			.push(obj)
			.write();
	}

	_getAll(collection) {
		return this.db.get(collection).value();
	}

	saveInFs() {
		const fileName = `${this._getLogName()}.log`;
		const filePath = path.join('.local', 'logs', fileName);

		fs.ensureFileSync(filePath);

		const logs = this.getAllLogs().join('\n') || '';
		const errors = this.getAllErrors().join('\n') || '';

		return fs.writeFile(filePath, logs + errors);
	}

	_getLogName() {
		return moment().format('HH_mm_DD_MM_YY');
	}
}

module.exports = LogStoreService;
