const { ciEquals } = require('../helpers/strings');

class ModuleService {
	constructor() {}

	filterModules({ cliModuleName, modules }) {
		// TODO: move 'all' into constants
		if (cliModuleName === 'all') {
			return modules;
		}

		return modules.filter((module) => ciEquals(module.name, cliModuleName));
	}
}

module.exports = ModuleService;
