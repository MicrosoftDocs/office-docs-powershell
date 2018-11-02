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

	// region getModuleFiles

	async getModuleFiles({ path, metaTags }) {
		const { ignoreFiles } = this.config.get('platyPS');

		const mdFiles = await this._getMdFiles(path);

		return mdFiles.filter(
			(fileName) =>
				!this._isFileIgnore({ fileName, ignoreFiles }) &&
				this._isContainsTag({ filePath: fileName, metaTags })
		);
	}

	async _getMdFiles(folderPath) {
		const mdExt = '.md';

		const allFiles = await this._getFolderFiles(folderPath);

		return allFiles.filter((file) => file.endsWith(mdExt));
	}

	async _getFolderFiles(folderPath) {
		const files = await fs.readdir(folderPath);

		return await files.reduce(async (promiseResult, filePath) => {
			const result = await promiseResult;
			const absolute = path.resolve(folderPath, filePath);

			const fileStat = await fs.stat(absolute);

			if (fileStat.isDirectory()) {
				const subDirFiles = await this._getFolderFiles(absolute);

				return [...result, ...subDirFiles];
			}

			return [...result, absolute];
		}, []);
	}

	_isFileIgnore({ fileName, ignoreFiles }) {
		const ignoreAbsolutePathsArr = ignoreFiles.map((f) => path.resolve(f));

		const absoluteFilePath = path.resolve(fileName);

		return ignoreAbsolutePathsArr.includes(absoluteFilePath);
	}

	_isContainsTag({ filePath, metaTags }) {
		if (!metaTags.length) {
			return true;
		}

		const metaTagRegex = /(?<=applicable: ).+/gmu;

		const groups = fs
			.readFileSync(filePath, 'utf8')
			.toString()
			.match(metaTagRegex);

		if (!groups) {
			return false;
		}

		for (const metaTag of metaTags) {
			if (groups[0].indexOf(metaTag) !== -1) {
				return true;
			}
		}

		return false;
	}

	// endregion

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
