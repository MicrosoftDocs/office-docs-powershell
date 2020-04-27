const { Repository, Reference, Signature, Cred } = require('nodegit');

class GitService {
	constructor(config) {
		this.config = config;
	}

	async openRepository({ path }) {
		return await Repository.open(path);
	}

	async stageAllFiles({ repository, filesMask }) {
		const index = await repository.index();

		await index.addAll(filesMask);
		await index.write();
		return await index.writeTree();
	}

	async createCommit({ repository, commitMessage, id }) {
		const { name, email } = this.config.get('github');

		const author = Signature.now(name, email);
		const commiter = Signature.now(name, email);

		const commitHead = await Reference.nameToId(repository, 'HEAD');
		const parentCommit = await repository.getCommit(commitHead);

		return await repository.createCommit(
			'HEAD',
			author,
			commiter,
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
