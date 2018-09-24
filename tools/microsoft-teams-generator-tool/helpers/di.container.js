const awilix = require('awilix');
const config = require('config');
const PowerShellService = require('../services/power.shell.service');
const MarkdownService = require('../services/markdown.service');
const LogStoreService = require('../services/log.store.service');
const LogParseService = require('../services/log.parse.service');
const MailNotificationService = require('../services/mail.notification.service');
const MarkdownController = require('../controllers/markdown.controller');
const db = require('../db')();

module.exports = () => {
	const container = awilix.createContainer({
		injectionMode: awilix.InjectionMode.CLASSIC,
		lifetime: awilix.Lifetime.SINGLETON
	});

	container.register({
		config: awilix.asValue(config),
		db: awilix.asValue(db)
	});

	container.register({
		mailNotificationService: awilix
			.asClass(MailNotificationService)
			.singleton(),
		logStoreService: awilix.asClass(LogStoreService).singleton(),
		logParseService: awilix.asClass(LogParseService).singleton(),
		powerShellService: awilix.asClass(PowerShellService).singleton(),
		markdownService: awilix.asClass(MarkdownService).singleton()
	});

	container.register({
		markdownController: awilix.asClass(MarkdownController).singleton()
	});

	return container;
};
