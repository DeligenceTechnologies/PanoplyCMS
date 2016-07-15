Package.describe({
  name: 'deligencetechnologies:menumodule',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Create module of type menumodule and display selected menu on position in frontend',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DeligenceTechnologies/Panoplycms',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4');
  api.use('ecmascript');
  api.mainModule('menumodule.js');
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
  api.use('react@0.14.6');
  api.use('insecure');
  api.use('underscore');
  api.use('accounts-password');
  api.use('alanning:roles@1.2.14');
  api.use("http");
  api.use('kadira:flow-router@2.12.1');
  api.use('kadira:react-layout@1.5.3');
  api.use('teamon:tinymce@4.3.13');
  api.use('cfs:standard-packages@0.5.9');
  api.use('cfs:gridfs@0.0.33');
  api.use('cfs:filesystem@0.1.2');
  api.use('cfs:s3@0.1.3');
  api.use('mizzao:jquery-ui@1.11.4');
  api.use('mizzao:autocomplete@0.5.1');
  api.use('ajduke:bootstrap-tokenfield@0.5.0');
  api.use('anti:i18n@0.4.3');
  api.use('themeteorchef:jquery-validation@1.0.0');
  api.use('arillo:flow-router-helpers@0.4.7');
  

  api.use('deligencetechnologies:panoplycms-core@0.0.1')
  api.use('deligencetechnologies:panoplycms-collections@0.0.1')

  api.addFiles('client/addMenuModule.jsx',"client");
  api.addFiles('client/editMenuModule.jsx',"client");
  api.addFiles('server/startup.js',"server");


  api.export(['AddMenuModule','EditMenuModule','MenuModuleFront'],'client')

});


