Package.describe({
  name: 'deligencetechnologies:sample-data',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Sample Data for Panoply CMS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DeligenceTechnologies/Panoplycms',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4');
  api.use('ecmascript');
  api.use('modules');
  api.use("mongo");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("jquery");
  api.use("session");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use('underscore');

  api.use('deligencetechnologies:panoplycms-collections@0.0.1');
  api.addFiles(['server/sample-data.js'],['server'])
});