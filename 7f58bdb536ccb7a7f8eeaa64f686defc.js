/**
 * The compiler will leave this file as is if it connat detect a git repository.
 */
if(Meteor.isServer) {
	console.warn("Using centiq:revision but cannot detect a .git repository.");
}