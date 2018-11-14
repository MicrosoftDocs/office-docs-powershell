const container = require('./helpers/di.container')();

try {
	const cliController = container.resolve('cliController');

	cliController.startCli(process.argv);
} catch (e) {
	console.log(e);
}
