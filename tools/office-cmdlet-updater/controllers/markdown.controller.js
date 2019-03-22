class MarkdownController {
	constructor(
		powerShellService,
		moduleController,
		logStoreService,
		logsController,
		notificationController,
		githubController
	) {
		this.powerShellService = powerShellService;
		this.moduleController = moduleController;
		this.logsController = logsController;
		this.notificationController = notificationController;
		this.githubController = githubController;

		this.isNeedEmail = false;
		this.mailText = '';

		this._handlePrResult = this._handlePrResult.bind(this);
		this._successfulHandlePrResult = this._successfulHandlePrResult.bind(
			this
		);
	}

	async updateMarkdown({
		cliModuleName,
		cliCmdletName,
		isNeedPullRequest,
		isNeedEmail
	}) {
		const moduleResults = await this.moduleController.updateMarkdown({
			cliModuleName,
			cliCmdletName,
			isNeedPullRequest
		});

		this.powerShellService.dispose();

		const parsedModules = this.logsController.saveAndParseLogs({
			moduleResults
		});
		const mailText = this.notificationController.generateMailText({
			parsedModules
		});

		if (!mailText) {
			console.log(`No changes found in module ${cliModuleName}`);
			return;
		}

		this._printResultIntoConsole({ text: mailText });

		if (isNeedEmail && !isNeedPullRequest) {
			this.notificationController.sendMailNotification({ mailText });
		}

		this.isNeedEmail = isNeedEmail;
		this.mailText = mailText;

		if (isNeedPullRequest) {
			await this.githubController.createPullRequest({
				prBody: mailText,
				cb: this._handlePrResult
			});
		}
	}

	_handlePrResult(err, data) {
		if (err) {
			this._errorHandlePrResult(err);
		}

		this._successfulHandlePrResult(data);
	}

	_errorHandlePrResult(err) {
		const {
			body: { errors }
		} = err;

		errors.forEach(({ message }) => console.log(message));

		throw new Error("Can't create new pull request");
	}

	_successfulHandlePrResult(data) {
		const { html_url } = data;

		console.log(`New pull request created. Url: ${html_url}`);

		if (this.isNeedEmail) {
			const mailTextWithPr =
				`New pull request created. Url: ${html_url} <br><br><br>` +
				this.mailText;

			this.notificationController.sendMailNotification({
				mailText: mailTextWithPr
			});
		}
	}

	_printResultIntoConsole({ text }) {
		const oldBreakSymbol = '<br>';
		const newBreakSymbol = '\n';

		const consoleText = text.replace(new RegExp(oldBreakSymbol, 'g'), newBreakSymbol);

		console.log(`Report: ${newBreakSymbol}`);
		console.log(consoleText);
	}
}

module.exports = MarkdownController;
