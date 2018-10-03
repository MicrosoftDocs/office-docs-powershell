const config = require('config');
const path = require('path');
const fs = require('fs-extra');

const _createLocalConfig = (configPath) => {
	if (!fs.existsSync(configPath)) {
		fs.ensureFileSync(configPath);
		fs.writeJSONSync(configPath, config);
	}
};

module.exports = () => {
	const defaultConfigFileName = 'default.json';
	const localConfigDirPath = path.join('.local');
	const defaultConfigPath = path.join(
		localConfigDirPath,
		defaultConfigFileName
	);

	_createLocalConfig(defaultConfigPath);

	const localConfig = config.util.loadFileConfigs(localConfigDirPath);

	config.util.extendDeep(config, localConfig);

	return config;
};
