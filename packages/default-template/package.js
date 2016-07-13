Package.describe({
	name: 'deligence1:default-template',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.3.3.1');
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
	api.use('twbs:bootstrap');
	api.use('kadira:flow-router');
	api.use('kadira:react-layout');
	api.use('teamon:tinymce');
	api.use('cfs:standard-packages');
	api.use('cfs:gridfs');
	api.use('cfs:filesystem');
	api.use('cfs:s3');
	

	api.use("deligence1:panoplycms-core");
	api.use("deligence1:panoplycms-collections");
	//api.use('thekavish:panoply-calc');

	/* Added files below */
	api.addFiles('lib/router/router.js', ['client']);

	api.addFiles('client/default-template.jsx', ['client']);
	api.addFiles('client/startup.jsx', ['client']);

	api.addFiles('client/homeLayouts/Header.jsx', ['client']);
	api.addFiles('client/homeLayouts/SidePanel.jsx', ['client']);
	api.addFiles('client/homeLayouts/Footer.jsx', ['client']);
	api.addFiles('client/homeLayouts/Logo.jsx', ['client']);
	api.addFiles('client/RegisterationForm.jsx', ['client']);

	//api.addFiles('client/style.css', ['client']);
	
	api.addFiles('server/startup.js', ['server']);

	api.addFiles('lib/router/router.jsx', ['client','server']);

	api.export([
		'DefaultTemplate',
		'DefaultCategory',
		'DefaultArticle'
	],['client']);
	
});