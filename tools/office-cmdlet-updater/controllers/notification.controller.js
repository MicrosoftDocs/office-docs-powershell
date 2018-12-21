const { keywords, noChangeValue, titleKeyword } = require('../constants/logs');

class NotificationController {
	constructor(mailNotificationService, config) {
		this.mailNotificationService = mailNotificationService;
		this.config = config;
	}

	sendMailNotification({ parsedModules }) {
		const mailText = this._generateMailText({ parsedModules });

		this._sendMail({ mailText });
	}

	_generateMailText({ parsedModules }) {
		let mailText = '';

		for (let { module, parsedLogs } of parsedModules) {
			const moduleText = this._generateMailTextForModule({
				parsedLogs,
				module
			});

			mailText += moduleText;
		}

		return mailText;
	}

	_generateMailTextForModule({ parsedLogs, module }) {
		const logsContent = [`Module: ${module}`];

		parsedLogs.forEach((log) => {
			let mailText = '',
				isMailHasContent;

			for (const key in log) {
				if (!log.hasOwnProperty(key)) {
					continue;
				}

				const value = log[key];

				const isContent = value === noChangeValue || value === '';
				const isTitle = key === titleKeyword.value.trim();

				if (isContent) {
					continue;
				}

				if (isTitle) {
					const title = value.split(',')[0];

					mailText += `File: ${title}<br>`;
					continue;
				}

				const { displayName } = keywords.find((kw) => kw.value === key);

				isMailHasContent = true;
				mailText += `${displayName || key}: ${value}<br>`;
			}

			if (isMailHasContent) {
				logsContent.push(mailText);
			}
		});

		return logsContent.join('<br><br>');
	}

	_sendMail({ mailText }) {
		const { to, from, subject } = this.config.get('sendgrid.emailSettings');

		const msg = {
			html: mailText,
			to,
			from,
			subject
		};

		this.mailNotificationService.addEmailToQueue(msg);

		console.log(`Email send successful to email: ${to}`);
	}
}

module.exports = NotificationController;
