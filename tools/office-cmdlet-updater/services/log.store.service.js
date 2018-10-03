const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');

class LogStoreService {
	constructor(db) {
		this.db = db;
	}

	addLog(log, name) {
		this._add('logs', log, name);
	}

	addError(err, name) {
		this._add('errors', err, name);
	}

	getAllLogs() {
		return this._getAll('logs');
	}

	getAllErrors() {
		return this._getAll('errors');
	}

	_add(collection, obj, name) {
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

		for(const key of logs.keys()) {
            const fileName = `${this._getLogName()}.log`;
            const filePath = path.join('.local', 'logs', key, fileName);

            fs.ensureFileSync(filePath);

            const logs = this.getAllLogs().get(key).join('\n') || '';
            const errors = this.getAllErrors().get(key).join('\n') || '';

            fs.writeFile(filePath, logs + errors);
		}
	}

	_getLogName() {
		return moment().format('HH_mm_DD_MM_YY');
	}
}

module.exports = LogStoreService;
