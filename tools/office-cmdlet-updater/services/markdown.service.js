const fs = require('fs-extra');
const path = require('path');
const Queue = require('better-queue');
const of = require('await-of').default;
const shortId = require('shortid');
const { markdownErrors } = require('../constants/errors');

class MarkdownService {
	constructor(powerShellService, logStoreService, logParseService, config) {
		this.logStoreService = logStoreService;
		this.powerShellService = powerShellService;
		this.logParseService = logParseService;
		this.config = config;

		this.processQueue = this.processQueue.bind(this);
		this.copyMdInTempFolder = this.copyMdInTempFolder.bind(this);
		this.getLogFileContent = this.getLogFileContent.bind(this);
		this.queueFinishHandler = this.queueFinishHandler.bind(this);
		this.updateMd = this.updateMd.bind(this);
		this.addMdFilesInQueue = this.addMdFilesInQueue.bind(this);
		this.queueEmptyHandler = this.queueEmptyHandler.bind(this);
		this.queueFailedHandler = this.queueFailedHandler.bind(this);

		this.queue = new Queue(this.processQueue);
		this.queue.on('empty', this.queueEmptyHandler);

		this.tempFolderPath = null;
	}

	async updateMd(docPath) {
		this.tempFolderPath = `${docPath}\\${shortId()}`;

		await this.addMdFilesInQueue(docPath);
	}

	async addMdFilesInQueue(folderPath) {
		const mdExt = '.md';

		const allFiles = await fs.readdir(folderPath);
		const mdFiles = allFiles.filter((fileName) => fileName.endsWith(mdExt));

		mdFiles.forEach((fileName) => {
			const absolutePath = path.resolve(`${folderPath}\\${fileName}`);

			this.queue
				.push(absolutePath)
				.on('failed', this.queueFailedHandler)
				.on('finish', this.queueFinishHandler);
		});
	}

	async processQueue(input, cb) {
		let result, err;
		const logFilePath = `${this.tempFolderPath}\\${shortId()}.log`;

		[result, err] = await of(
			this.copyMdInTempFolder(input, this.tempFolderPath)
		);

		if (err) {
			return cb(err, null);
		}

		[result, err] = await of(
			this.powerShellService.updateMarkdown(result, logFilePath)
		);

		if (err) {
			console.error(err);

			this.logStoreService.addError(err);

			return cb(null, '');
		}

		console.log(result); // print powershell command result

		[result, err] = await of(this.getLogFileContent(logFilePath));

		console.log(result); // print update file log

		if (err) {
			return cb(err, null);
		}

		return cb(null, result);
	}

	async queueFailedHandler(err) {
		throw new Error(err);
	}

	queueFinishHandler(result) {
		if (!result) {
			return;
		}
		this.logStoreService.addLog(result);
	}

	async queueEmptyHandler() {
		this.powerShellService.dispose();

		const [, err] = await of(this.logStoreService.saveInFs());

		if (err) {
			throw new Error(err);
		}

		if (fs.pathExists(this.tempFolderPath)) {
			const [, fsError] = await of(this.clearTempFolder());

			if (fsError) {
				throw new Error(fsError);
			}
		}

		this.logParseService.parseAll();
	}

	async copyMdInTempFolder(srcFilePath, tempFolderPath) {
		let err;

		const fileName = path.basename(srcFilePath);
		const distFilePath = `${tempFolderPath}\\${fileName}`;

		[, err] = await of(fs.ensureDir(tempFolderPath));

		if (err) {
			throw new Error(markdownErrors.CANT_CREATE_TEMP_FOLDER);
		}

		[, err] = await of(fs.copy(srcFilePath, distFilePath));

		if (err) {
			throw new Error(markdownErrors.CANT_COPY_MD_FILE);
		}

		return distFilePath;
	}

	async getLogFileContent(logFilePath) {
		let err, result;

		[result, err] = await of(fs.ensureFile(logFilePath));

		if (result || err) {
			throw new Error(markdownErrors.CANT_OPEN_LOG_FILE);
		}

		return (await fs.readFile(logFilePath)).toString();
	}

	clearTempFolder() {
		return fs.remove(this.tempFolderPath);
	}
}

module.exports = MarkdownService;
