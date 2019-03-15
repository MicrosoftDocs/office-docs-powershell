const container = require('./helpers/di.container')();

const cliController = container.resolve('cliController');

cliController.start(process.argv);
