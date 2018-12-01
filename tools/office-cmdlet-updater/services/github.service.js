const { client } = require('octonode');

class GithubService {
	constructor(config) {
		this.config = config;

		const token = config.get('github');

		this.client = client(token);
	}

	openRepository({ repositoryName }) {
		return this.client.repo(repositoryName);
	}

	createPullRequest({ repository, title, body, head, base, cb }) {
		repository.pr({ title, body, head, base }, cb);
	}
}
