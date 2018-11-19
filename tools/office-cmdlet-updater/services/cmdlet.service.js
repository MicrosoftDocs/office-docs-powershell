class CmdletService {
	constructor(config) {
		this.config = config;
	}

	ensureModuleExist(moduleName) {
		const modules = this.config.get('platyPS.docs');

		const isExist = modules.find(({ name }) => name === moduleName);

		if (!isExist) {
			throw new Error(`Module with name "${moduleName}" didn't exist`);
		}
	}
}

module.exports = CmdletService;
