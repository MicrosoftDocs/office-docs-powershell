const { Repository, Reference, Signature, Cred } = require('nodegit');

class GitService {
	constructor(config) {
		this.config = config;

		const { name, email } = this.config.get('github');

		this.author = Signature.create(name, email, new Date().getTime(), 60);
		this.commiter = Signature.create(name, email, new Date().getTime(), 90);
	}

	async openRepository({ path }) {
		return await Repository.open(path);
	}

	async stageAllFiles({ repository }) {
		const index = await repository.index();

		await index.addAll('*');
		await index.write();
		return await index.writeTree();
	}

	async createCommit({ repository, commitMessage, id }) {
		const commitHead = await Reference.nameToId(repository, 'HEAD');
		const parentCommit = await repository.getCommit(commitHead);

		return await repository.createCommit(
			'HEAD',
			this.author,
			this.commiter,
			commitMessage,
			id,
			[parentCommit]
		);
	}

	async pushCommit({ remoteName, repository, login, pass, head, base }) {
		const remote = await repository.getRemote(remoteName);

		await remote.push([`${head}:${base}`], {
			callbacks: {
				certificateCheck: () => 1,
				credentials: () => Cred.userpassPlaintextNew(login, pass)
			}
		});
	}
}

module.exports = GitService;
