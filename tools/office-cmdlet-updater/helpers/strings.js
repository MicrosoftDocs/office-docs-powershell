module.exports.ciEquals = (a, b) => {
	return typeof a === 'string' && typeof b === 'string'
		? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
		: a === b;
};

module.exports.ciEndsWith = (a, b) => {
	const regex = new RegExp(`\\w*${a}`, 'gi');

	return regex.test(b);
};
