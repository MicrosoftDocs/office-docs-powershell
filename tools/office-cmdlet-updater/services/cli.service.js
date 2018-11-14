const cli = require('commander');

class CliService {
	constructor(config) {
		this.config = config;
		this.cli = cli;

		const { description, version } = config;

		this.cli.version(version, '-v, --version').description(description);
	}

	addOption({
		option,
		description = '',
		defaultValue = '',
		action = () => {}
	}) {
		this.cli
			.option(option, description, defaultValue)
			.action(() => action(this.cli));
	}

	start(argv, cb = () => {}) {
		this.cli.parse(argv);

		cb(this.cli);
	}
}

module.exports = CliService;
