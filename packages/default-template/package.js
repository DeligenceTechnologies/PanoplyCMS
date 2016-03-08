Package.describe({
	name: 'deligence:default-template',
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
	api.use('coniel:react-form-handler');
	api.use('aldeed:simple-schema');
	api.use("deligence:panoplycore");

	/*Added files below*/

	api.addFiles('default-template.jsx', ['client']);
	api.addFiles('login.jsx', ['client']);
	api.addAssets('index.html', ['client']);
	api.addFiles('style.css', ['client']);

	api.addFiles('lib/router/router.jsx', ['client','server']);

	// api.addFiles('server/users.js', ['server']);
	// api.addFiles('server/sites.js', ['server']);
	// api.addFiles('server/modules.js', ['server']);
});