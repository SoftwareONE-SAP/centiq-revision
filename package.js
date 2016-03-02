Package.describe({
  name: 'centiq:revision',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Get the current git revision information and expose it to the application.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Centiq/centiq-revision',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name:             'centiq:revision',
  use:              ['ecmascript', 'isobuild:compiler-plugin@1.0.0'],
  sources:          ['plugins/revision.js'],
  npmDependencies:  {'execsyncs': '0.1.1'}
});

/**
 * Runtime interface setup.
 */
Package.onUse(function(api) {
  /**
   * Specify compatibility
   */
  api.versionsFrom("1.2.0.1");

  /**
   * Use the build plugin
   */
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('ecmascript');

  /**
   * Add the trigger file
   */
  api.addFiles('7f58bdb536ccb7a7f8eeaa64f686defc.js', ['server', 'client']);

  /**
   * Add the server/client api.
   */
  api.addFiles('revision.js', ['server', 'client']);

  /**
   * Export the API
   */
  api.export('Revision');
})