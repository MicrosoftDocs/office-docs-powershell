class LogStoreService {
	constructor(db) {
		this.db = db;
	}

	add(log) {
		this.db
			.get('logs')
			.push(log)
			.write();
	}

	getAll() {
		return this.db.get('logs').value();
	}
}

module.exports = LogStoreService;
