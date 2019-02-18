const fs = require('fs-extra');
const path = require('path');
const { ciEquals, ciEndWith } = require('../helpers/strings');

const mdExt = '.md';

class CmdletService {
	constructor(config) {
		this.config = config;
	}

	ensureModuleExist(moduleName) {
		const modules = this.config.get('platyPS.docs');

		const isExist = modules.find(({ name }) => ciEquals(name, moduleName));

		if (!isExist) {
			throw new Error(`Module with name "${moduleName}" didn't exist`);
		}
	}

	async getModulesCmdlets({ modules, cliCmdletName, ignoreFiles }) {
		let cmdletsArr = [];

		for (let module of modules) {
			const cmdlets = await this.getModuleCmdlets({
				cliCmdletName,
				ignoreFiles,
				module
			});

			if (!cmdlets.length) {
				throw new Error(
					`Can't find cmdlets in module "${module.name}"`
				);
			}

			cmdletsArr = [...cmdletsArr, { module: module.name, cmdlets }];
		}

		return cmdletsArr;
	}

	// region getModuleCmdlets

	async getModuleCmdlets({ module, ignoreFiles, cliCmdletName }) {
		const { path, metaTags } = module;
		const mdFiles = await this._getMdFiles(path);

		return mdFiles.filter(
			(filePath) =>
				!this._isFileIgnore({ filePath, ignoreFiles }) &&
				this._isContainsTag({ filePath, metaTags }) &&
				this._filterCmdlets({ filePath, cliCmdletName })
		);
	}

	async _getMdFiles(folderPath) {
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

	_isFileIgnore({ filePath, ignoreFiles }) {
		const ignoreAbsolutePathsArr = ignoreFiles.map((f) => path.resolve(f));

		const absoluteFilePath = path.resolve(filePath);

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

	_filterCmdlets({ filePath, cliCmdletName }) {
		if (!cliCmdletName) {
			return true;
		}

		return ciEndsWith(`${cliCmdletName}${mdExt}`, filePath);
	}

	// endregion

	async copyMdInTempFolder(srcFilePath, tempFolderPath) {
		const fileName = path.basename(srcFilePath);
		const distFilePath = `${tempFolderPath}\\${fileName}`;

		await fs.ensureDir(tempFolderPath);

		await fs.copy(srcFilePath, distFilePath);

		return distFilePath;
	}
}

module.exports = CmdletService;
