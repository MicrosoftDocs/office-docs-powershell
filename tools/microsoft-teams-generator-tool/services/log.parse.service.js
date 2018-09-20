class LogParseService {
	constructor(logStoreService, mailNotificationService, config) {
		this.logStoreService = logStoreService;
		this.mns = mailNotificationService;
		this.config = config;

		this.noChangeValue = '__AllParameterSets';
		this.titleKeyword = {
			value: 'UPDATING Cmdlet ',
			displayName: 'UPDATING Cmdlet'
		};
		this.keywords = [
			this.titleKeyword,
			{
				value: 'Parameter Added',
				displayName: 'Parameter Added'
			},
			{
				value: 'Parameter Deleted',
				displayName: 'Parameter Deleted'
			},
			{
				value: 'Parameter Updated',
				displayName: 'Parameter Updated'
			},
			{
				value: 'Parameter Set Added',
				displayName: 'Parameter Set Added'
			},
			{
				value: 'Parameter Set Deleted',
				displayName: 'Parameter Set Deleted'
			},
			{
				value: 'Parameter Set Name Updated',
				displayName: 'Parameter Set Name Updated'
			}
		];
	}

	parseAll() {
		const logs = this.logStoreService.getAll();
		const logObjs = [];

		logs.forEach((log) => {
			const logObj = this.parse(log);

			logObjs.push(logObj);
		});

		const msg = this.generateMailText(logObjs);

		if (msg) {
			const outputText = msg.replace(new RegExp('<br>', 'g'), '\n');

			console.log(`\n\n${outputText}`);

			this.sendLogByEmailIfNeeded(msg);
		} else {
			const { docPath } = this.config.get('platyPS');

			console.log(`In folder '${docPath}' didn't found any changes`);
		}
	}

	parse(log) {
		const logObj = {};

		this.keywords.forEach(({ value }) => {
			const regex = new RegExp(`\t*(?<=${value}: ).*?(?=\\s)`, 'gi');
			const values = log.match(regex);

			logObj[value.trim()] = values ? values.join(', ') : '';
		});

		return logObj;
	}

	generateMailText(logObjs) {
		const logsContent = [];

		logObjs.forEach((log) => {
			let mailText = '',
				isMailHasContent;

			for (const key in log) {
				if (!log.hasOwnProperty(key)) {
					continue;
				}

				const value = log[key];

				const isContent = value === this.noChangeValue || value === '';
				const isTitle = key === this.titleKeyword.value.trim();

				if (isContent) {
					continue;
				}

				if (isTitle) {
					const title = value.split(',')[0];

					mailText += `File: ${title}<br>`;
					continue;
				}

				const { displayName } = this.keywords.find(
					(kw) => kw.value === key
				);

				isMailHasContent = true;
				mailText += `${displayName || key}: ${value}<br>`;
			}

			if (isMailHasContent) {
				logsContent.push(mailText);
			}
		});

		return logsContent.join('<br><br>');
	}

	sendLogByEmailIfNeeded(text) {
		const { to, from, subject } = this.config.get('sendgrid.emailSettings');

		const msg = {
			html: text,
			to,
			from,
			subject
		};

		this.mns.addEmailToQueue(msg);
	}
}

module.exports = LogParseService;
