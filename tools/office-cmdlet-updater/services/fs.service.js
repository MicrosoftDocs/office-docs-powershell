const path = require('path');
const fs = require('fs-extra');
const shortId = require('shortid');

class FsService {
	constructor(config, logStoreService) {
		this.config = config;
		this.logStoreService = logStoreService;

		this.getTempFolderPath = this.getTempFolderPath.bind(this);
		this.removeTempFolders = this.removeTempFolders.bind(this);
	}

	async getTempFolderPath({ name }, path) {
		let tempFolders = this.logStoreService.getAllTempFolders();

		await fs.ensureDir(path);

		if (!tempFolders.has(name)) {
			const tempFolderPath = `${path}\\${shortId()}`;

			this.logStoreService.addTempFolder(tempFolderPath, name);

			tempFolders = this.logStoreService.getAllTempFolders();
		}

		return tempFolders.get(name);
	}

	async copyMdInTempFolder(srcFilePath, tempFolderPath) {
		const fileName = path.basename(srcFilePath);
		const distFilePath = `${tempFolderPath}\\${fileName}`;

		await fs.ensureDir(tempFolderPath);

		await fs.copy(srcFilePath, distFilePath);

		return distFilePath;
	}

	async getFileContent(logFilePath) {
		await fs.ensureFile(logFilePath);

		return (await fs.readFile(logFilePath)).toString();
	}

	async removeTempFolders() {
		const { getAllTempFolders } = this.logStoreService;

		const tempFolders = [...getAllTempFolders().values()];

		const tempFoldersPath = tempFolders.map((path) => path[0]);

		for (const path of tempFoldersPath) {
			if (fs.pathExists(path)) {
				fs.remove(path);
			}
		}
	}
}

module.exports = FsService;
