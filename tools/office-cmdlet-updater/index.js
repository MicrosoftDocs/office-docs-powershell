const container = require('./helpers/di.container')();

(async function() {
	try {
		const markdownController = container.resolve('markdownController');

		await markdownController.updateMarkdown();
	} catch (e) {
		console.log(e);
	}
})();
