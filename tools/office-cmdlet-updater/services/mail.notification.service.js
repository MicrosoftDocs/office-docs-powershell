const Queue = require('better-queue');
const sgMail = require('@sendgrid/mail');
const { mailErrors } = require('../constants/errors');
const of = require('await-of').default;

class MailNotificationService {
	constructor(config) {
		const { apiKey } = config.get('sendgrid');

		if (!apiKey) {
			throw new Error(mailErrors.CANT_GET_SENDGRID_API_KEY);
		}

		sgMail.setApiKey(apiKey);
		this.sgMail = sgMail;

		this.sendEmail = this.sendEmail.bind(this);
		this.addEmailToQueue = this.addEmailToQueue.bind(this);

		this.queue = new Queue(this.sendEmail);
	}

	addEmailToQueue(mail) {
		this.queue.push(mail);
	}

	async sendEmail(input, cb) {
		const [result, err] = await of(this.sgMail.send(input));

		if (err) {
			cb(err, null);
		}

		cb(null, result);
	}
}

module.exports = MailNotificationService;
