/**
 * Require Dependancies
 */
var exec = Npm.require('execsyncs');

/**
 * 
 */
class GitMetadataCompiler{
	/**
	 * Process Files for target build
	 * @param  {Array} files list of matching files
	 * @return void
	 */
	processFilesForTarget(files) {
		/**
		 * Fetch the git information
		 */
		let metadata = {
			short: 	exec('git rev-parse --short HEAD').replace('\n', ''),
			long: 	exec('git rev-parse HEAD').replace('\n', ''),
			branch: exec('git rev-parse --abbrev-ref HEAD').replace('\n', ''),
			tag: 	exec('git describe --tags --always --abbrev=0 HEAD').replace('\n', ''),
			id: 	exec('git describe --tags --always --abbrev=1 HEAD').replace('\n', '')
		}

		/**
		 * Compile the mata data into a json serialized object for writing
		 */
		let source = "__GIT__ = " + JSON.stringify(metadata) + ";";
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
}, () => { return new GitMetadataCompiler(); });