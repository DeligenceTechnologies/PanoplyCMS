Package.describe({
  name: 'deligencetechnologies:panoplycms-tag',

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
  api.versionsFrom('1.3.4');
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
  api.use('alanning:roles@1.2.14');
  api.use("http");
  api.use('kadira:flow-router');
  api.use('kadira:react-layout');
  api.use('teamon:tinymce');
  api.use('cfs:standard-packages');
  api.use('cfs:gridfs');
  api.use('cfs:filesystem');
  api.use('cfs:s3');
  api.use('mizzao:jquery-ui');
  api.use('mizzao:autocomplete');
  api.use('ajduke:bootstrap-tokenfield');
  api.use('anti:i18n');
  api.use('themeteorchef:jquery-validation');
  api.use('arillo:flow-router-helpers');
  
  api.addFiles('server/startup.js',['server'])
  
  api.use("deligencetechnologies:panoplycms-collections");
  api.use("deligencetechnologies:panoplycms-core");
  
  api.addFiles('components/tags/addTag.jsx',['client'])
  api.addFiles('components/tags/editTag.jsx',['client'])
  api.addFiles('components/tags/listTags.jsx',['client'])
  api.addFiles('components/tags/language.js',['client'])

  api.export([
    "ListTags", 
    "AddTag", 
    "EditTag"
  ], ["client"]);  
  
});


