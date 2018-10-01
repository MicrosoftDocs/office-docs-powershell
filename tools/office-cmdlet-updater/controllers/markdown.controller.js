const fs = require('fs-extra');
const of = require('await-of').default;
const { powerShellErrors } = require('../constants/errors');

class MarkdownController {
	constructor(powerShellService, markdownService, config) {
		this.powerShellService = powerShellService;
		this.markdownService = markdownService;
		this.config = config;
	}

	async updateMarkdown() {
		let err;
		const { docPath } = this.config.get('platyPS');

		if (!await fs.pathExists(docPath)) {
			throw new Error(powerShellErrors.DOC_PATH_DOESNT_EXIST);
		}

		[, err] = await of(this.powerShellService.preInstall());

		if (err) {
			throw new Error(err);
		}

		[, err] = await of(this.markdownService.updateMd(docPath));

		if (err) {
			this.powerShellService.dispose();
			throw new Error(err);
		}
	}
}

module.exports = MarkdownController;
