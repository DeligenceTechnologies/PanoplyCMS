Package.describe({
  name: 'deligence:panoplycore',
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
  api.use('react');
  api.use('insecure');
  api.use('underscore');
  api.use('accounts-password');
  api.use("http");
  api.use('kadira:flow-router');
  api.use('kadira:react-layout');
  api.use('teamon:tinymce');



  api.addFiles('admin/adminLayout/adminLayout.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminFooter.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminHeader.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminSidebar.jsx',['client'])
  api.addFiles('admin/settings/settings.jsx',['client'])
  api.addFiles('admin/extension/modules/modulesLayout.jsx',['client'])
  api.addFiles('admin/extension/modules/addModules.jsx',['client'])
  api.addFiles('admin/lib/router/router.js',['client','server'])
  api.addFiles('admin/lib/method/collection.js',['client','server'])
  api.addFiles('admin/lib/method/module.js',['client','server'])
  api.addFiles('admin/lib/method/sidebar.js',['client','server'])
  api.addFiles('admin/server/publisher.js',['server'])
  api.addFiles('admin/server/settings.js',['server'])
  api.addFiles('admin/styles/admin.css',['client'])
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('mplatts:simple');

// });
