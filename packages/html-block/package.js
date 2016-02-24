Package.describe({
  name: 'deligence:html-block',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Easily add custom HTML code within a module position with HTML Block module for PanoplyCMS.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.addFiles('html-block.js');
  api.export('kavish',['client']);
});

/*Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('deligence:html-block');
  api.addFiles('html-block-tests.js');
});
*/
