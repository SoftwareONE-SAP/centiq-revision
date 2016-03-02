/**
 * 
 */
class RevisionClass {
	/**
	 * Check to see if a proeprty exists and return it.
	 * @param  {String} key index of _META_ object 
	 * @return {String} value
	 */
	_get(key) {
		return (key in _META_ ? _META_[key] : undefined);
	}

	/**
	 * Return the current revision in a short form
	 * @return {String}
	 */
	id() {
		return this._get('id')
	}

	/**
	 * Return the current revision in a short form
	 * @return {String}
	 */
	short() {
		return this._get('short')
	}

	/**
	 * Return the current revision hash
	 * @return {String}
	 */
	revision () {
		return this._get('revision');
	}

	/**
	 * Return the current branch name
	 * @return {String}
	 */
	branch() {
		return this._get('branch');
	}

	/**
	 * Return the current tag
	 * @return {String}
	 */
	tag() {
		return this._get('tag')
	}
}

Revision = new RevisionClass();