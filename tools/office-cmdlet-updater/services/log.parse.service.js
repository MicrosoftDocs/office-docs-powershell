const { keywords } = require('../constants/logs');

class LogParseService {
	parse({ log }) {
		const logObj = {};

		keywords.forEach(({ value }) => {
			const regex = new RegExp(`\t*(?<=${value}: ).*?(?=\\s)`, 'gi');
			const values = log.match(regex);

			logObj[value.trim()] = values ? values.join(', ') : '';
		});

		return logObj;
	}
}

module.exports = LogParseService;
