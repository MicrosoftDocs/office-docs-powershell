const { client } = require('octonode');

class GithubService {
	constructor(config) {
		this.config = config;

		const { token } = config.get('github');

		this.client = client(token);
	}

	openRepository({ repositoryName }) {
		return this.client.repo(repositoryName);
	}

	createPullRequest({ repository, title, body, head, base, cb }) {
		this.client.limit((err, left) => {
			if (!left) {
				console.log('Achieved GitHub token limit');

				return;
			}

			repository.pr({ title, body, head, base }, cb);
		});
	}
}

module.exports = GithubService;
