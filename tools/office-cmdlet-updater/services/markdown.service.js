const Queue = require('better-queue');
const of = require('await-of').default;
const shortId = require('shortid');

class MarkdownService {
	constructor(
		powerShellService,
		logStoreService,
		logParseService,
		cmdletDependenciesService,
		fsService,
		config
	) {
		this.logStoreService = logStoreService;
		this.pss = powerShellService;
		this.logParseService = logParseService;
		this.config = config;
		this.cds = cmdletDependenciesService;
		this.fsService = fsService;

		this.processQueue = this.processQueue.bind(this);
		this.queueFinishHandler = this.queueFinishHandler.bind(this);
		this.updateMd = this.updateMd.bind(this);
		this.addMdFilesInQueue = this.addMdFilesInQueue.bind(this);
		this.queueEmptyHandler = this.queueEmptyHandler.bind(this);
		this.queueFailedHandler = this.queueFailedHandler.bind(this);

		this.queue = new Queue(this.processQueue);
		this.queue.on('empty', this.queueEmptyHandler);

		this.installedDependencies = [];
	}

	async updateMd(doc) {
		return this.addMdFilesInQueue(doc);
	}

	async addMdFilesInQueue(doc) {
		const mdFiles = await this.fsService.getModuleFiles(doc);

		mdFiles.forEach((file) => {
			this.queue
				.push({ file, doc })
				.on('failed', this.queueFailedHandler)
				.on('finish', this.queueFinishHandler);
		});
	}

	async processQueue({ file, doc }, cb) {
		let result, err;

		let { tempFolderPath } = this.config.get('platyPS');
		const {
			copyMdInTempFolder,
			getTempFolderPath,
			getFileContent
		} = this.fsService;

		await this._installDependenceIfNeeded(doc);

		[tempFolderPath] = await getTempFolderPath(doc, tempFolderPath);

		const logFilePath = `${tempFolderPath}\\${shortId()}.log`;

		[result, err] = await of(copyMdInTempFolder(file, tempFolderPath));

		if (err) {
			return cb(err, null);
		}

		[result, err] = await of(this.pss.updateMarkdown(result, logFilePath));

		if (err) {
			console.error(err);

			this.logStoreService.addError(err, doc.name);

			return cb(null, '');
		}

		console.log(result); // print powershell command result

		[result, err] = await of(getFileContent(logFilePath));

		console.log(result); // print update file log

		if (err) {
			return cb(err, null);
		}

		return cb(null, { result, doc });
	}

	async queueFailedHandler(err) {
		throw new Error(err);
	}

	queueFinishHandler({ result, doc }) {
		if (!result) {
			return;
		}
		this.logStoreService.addLog(result, doc.name);
	}

	async queueEmptyHandler() {
		this.pss.dispose();

		this.logStoreService.saveInFs();

		await this.fsService.removeTempFolders();

		this.logParseService.parseAll();
	}

	async _installDependenceIfNeeded({ name }) {
		if (!this.installedDependencies.includes(name)) {
			this.installedDependencies.push(name);

			await this.cds.installDependencies({ cmdletName: name });
		}
	}
}

module.exports = MarkdownService;
