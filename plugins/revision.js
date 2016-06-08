/**
 * Require Dependancies
 */
var exec = Npm.require('sync-exec');

/**
 * Revision Compiler
 */
class GitRevisionCompiler {
	/**
	 * Process Files for target build
	 * @param  {Array} files list of matching files
	 * @return void
	 */
	processFilesForTarget(files) {
		/**
		 * Create a metadata object to store the data in.
		 */
		let metadata = {}, source;

		/**
		 * Fetch the current head commit
		 * @type {String}
		 */
		let HEAD = metadata.revision = exec('git rev-parse HEAD').stdout.replace('\n', '');

		/**
		 * When you execute the above command in a none git based structure
		 * you are present with the following message:
		 *
		 * fatal: Not a git repository (or any of the parent directories): .git
		 *
		 * here we only work if we get a commit id.
		 */
		if(metadata.revision.indexOf('fatal') === -1) {
			/**
			 * Set the short commit id
			 *
			 * see the --short option at the link below.
			 * @see https://www.kernel.org/pub/software/scm/git/docs/git-rev-parse.html
			 */
			metadata.short = HEAD.substring(0, 7);

			/**
			 * Fetch the current branch name
			 */
			metadata.branch = exec('git rev-parse --abbrev-ref HEAD').stdout.replace('\n', '');

			/**
			 * Fetch the last known tag for this branch
			 */
			metadata.tag = exec('git describe --tags --always --abbrev=0 HEAD').stdout.replace('\n', '');

			/**
			 * Fetch the tag identifier
			 *
			 * This is mearly TAG-N-<short> where N is the numbe of commits on the branch
			 * since the last tag n the current HEAD.
			 */
			metadata.id = exec('git describe --tags --always --abbrev=1 HEAD').stdout.replace('\n', '')

			/**
			 * Compile the source code into something that we can execute during runtime.
			 */
			source = "_META_ = " + JSON.stringify(metadata) + ";";
		} else {
			source = files[0].getContentsAsString();
			source += ';_META_ = {};\n';
		}

		/**
		 * Compile the mata data into a json serialized object for writing
		 */
		files[0].addJavaScript({
			data: source,
			path: files[0].getPathInPackage()
		});
	}
}

/**
 * Register the plugin compiler
 */
Plugin.registerCompiler({
	/**
	 * List of trigger files
	 * @type {Array}
	 */
	filenames: ['7f58bdb536ccb7a7f8eeaa64f686defc.js']
}, () => { return new GitRevisionCompiler(); });
