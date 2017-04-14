Package.describe({
	name: 'deligencetechnologies:default-template',
	version: '0.1.8',
	// Brief, one-line summary of the package.
	summary: 'Default Template for PanoplyCMS',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/DeligenceTechnologies/Panoplycms',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.3.3.1');
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
	api.use('react@0.14.6');
	api.use('insecure');
	api.use('underscore');
	api.use('accounts-password');
	api.use('alanning:roles@1.2.14');
	api.use("http");
	api.use('twbs:bootstrap@3.3.6');
	api.use('kadira:flow-router@2.12.1');
	api.use('kadira:react-layout@1.5.3');
	api.use('cfs:standard-packages@0.5.9');
	api.use('cfs:gridfs@0.0.33');
	api.use('cfs:filesystem@0.1.2');
	api.use('cfs:s3@0.1.3');

	api.use("deligencetechnologies:panoplycms-core@0.0.3");
	api.use("deligencetechnologies:panoplycms-collections@0.0.1");

	/* Added files below */
	api.addFiles('lib/router/router.js', ['client']);

	api.addFiles('client/default-template.jsx', ['client']);
	api.addFiles('client/startup.jsx', ['client']);

	api.addFiles('client/homeLayouts/Header.jsx', ['client']);
	api.addFiles('client/homeLayouts/SidePanel.jsx', ['client']);
	api.addFiles('client/homeLayouts/Footer.jsx', ['client']);
	api.addFiles('client/homeLayouts/Logo.jsx', ['client']);
	api.addFiles('client/RegisterationForm.jsx', ['client']);
	api.addFiles('client/notFound.jsx',"client")
	api.addFiles('client/offline.jsx',"client")

	api.addFiles('imports/style.css', ['client']);
	
	api.addFiles('server/startup.js', ['server']);

	api.addFiles('lib/router/router.jsx', ['client','server']);

	api.addAssets([
		'public/templateLayout.jpg',
		'public/offline.png',
		'public/notFound.png'
	], 'client');

	api.export([
		'DefaultTemplate',
		'DefaultCategory',
		'DefaultArticle',
		'DefaultNotFound',
		'DefaultOffline'
	],['client']);
	
});