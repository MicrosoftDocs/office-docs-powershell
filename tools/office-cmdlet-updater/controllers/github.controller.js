const { errorColor } = require('../helpers/colors');

class GithubController {
	constructor(config, gitService, githubService) {
		this.config = config;
		this.gitService = gitService;
		this.githubService = githubService;
	}

	async createPullRequest({ prBody, cb = () => {} }) {
		const {
			login,
			pass,
			commitMessage,
			repositoryLocalPath: path,
			repositoryName,
			remoteName,
			head,
			base,
			pullRequest
		} = this.config.get('github');

		const repository = await this.gitService.openRepository({ path });
		const id = await this.gitService.stageAllFiles({
			filesMask: '*.md',
			repository
		});

		await this.gitService.createCommit({ repository, commitMessage, id });
		await this.gitService.pushCommit({
			remoteName,
			repository,
			login,
			pass,
			head,
			base
		});

		const githubRepository = this.githubService.openRepository({
			repositoryName
		});

		const body = prBody || pullRequest.body;

		this.githubService.createPullRequest({
			repository: githubRepository,
			...pullRequest,
			body,
			cb
		});
	}

	_pullRequestCb(err, data) {
		if (err) {
			console.error(errorColor(err));
			return;
		}

		console.log(data);
	}
}

module.exports = GithubController;
