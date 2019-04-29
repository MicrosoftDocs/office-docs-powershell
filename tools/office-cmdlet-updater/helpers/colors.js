const chalk = require('chalk');

const errorColor = (err) => {
	const message = err.message || err;

	// remove default error color
	const processedMsg = message.replace(/\[31m/g, '').replace(/\[39m/g, '');

	return chalk.redBright.bgBlack(processedMsg);
};

module.exports = {
	errorColor
};
