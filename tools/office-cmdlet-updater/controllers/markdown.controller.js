const fs = require('fs-extra');
const of = require('await-of').default;
const { powerShellErrors } = require('../constants/errors');

class MarkdownController {
	constructor(powerShellService, markdownService, config) {
		this.powerShellService = powerShellService;
		this.markdownService = markdownService;
		this.config = config;
	}

	async updateMarkdown({ moduleName, cmdlet }) {
		let err;
		const { docs } = this.config.get('platyPS');

		docs.filter((doc) => this._filterModules(doc, moduleName)).forEach(
			async (doc) => {
				if (!(await fs.pathExists(doc.path))) {
					throw new Error(powerShellErrors.DOC_PATH_DOESNT_EXIST);
				}

				[, err] = await of(this.markdownService.updateMd(doc, cmdlet));

				if (err) {
					this.powerShellService.dispose();
					console.error(err.message);
				}
			}
		);
	}

	_filterModules(doc, moduleName) {
		if (moduleName === 'all') {
			return true;
		}

		return doc.name === moduleName;
	}
}

module.exports = MarkdownController;
