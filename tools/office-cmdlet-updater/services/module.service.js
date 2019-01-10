class ModuleService {
	constructor() {}

	filterModules({ cliModuleName, modules }) {
		// TODO: move 'all' into constants
		if (cliModuleName === 'all') {
			return modules;
		}

		return modules.filter((module) => module.name === cliModuleName);
	}
}

module.exports = ModuleService;
