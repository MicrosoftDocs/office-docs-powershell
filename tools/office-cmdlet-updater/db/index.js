const low = require('lowdb');
const Memory = require('lowdb/adapters/Memory');

module.exports = () => {
	const db = low(new Memory());

	db.defaults({ logs: new Map(), errors: new Map() }).write();

	return db;
};
