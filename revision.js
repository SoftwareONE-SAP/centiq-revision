/**
 * 
 */
class RevisionClass {

	/**
	 * Return the current revision in a short form
	 * @return {String}
	 */
	id() {
		return __GIT__['id'];
	}

	/**
	 * Return the current revision in a short form
	 * @return {String}
	 */
	short() {
		return __GIT__['short'];
	}

	/**
	 * Return the current revision hash
	 * @return {String}
	 */
	long() {
		return __GIT__['long'];
	}

	/**
	 * Return the current branch name
	 * @return {String}
	 */
	branch() {
		return __GIT__['branch'];
	}

	/**
	 * Return the current tag
	 * @return {String}
	 */
	tag() {
		return __GIT__['tag'];
	}
}

Revision = new RevisionClass();