Package.describe({
  name: 'deligence1:panoplycms-collections',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
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
  api.use("meteorhacks:subs-manager");
  
  api.addFiles('common/collections.js',['client','server']);
  api.addFiles('server/publications.js',['server']);
  api.addFiles('client/subscribe.js',['client']);

  api.export('PanoplyCMSCollections')
  api.export('PanoplySubscriptions')
});