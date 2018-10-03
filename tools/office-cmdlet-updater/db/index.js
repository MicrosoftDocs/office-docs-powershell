const low = require('lowdb');
const Memory = require('lowdb/adapters/Memory');

module.exports = () => {
	const db = low(new Memory());

	db.defaults({ logs: [], errors: [] }).write();

	return db;
};
