Package.describe({
	name: 'thekavish:panoply-calc',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'A calculator module for PanoplyCMS',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/thekavish/panoply-calc',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('meteor-base');
	api.use('mobile-experience');
	api.use('blaze-html-templates');
	api.use("jquery");
	api.use("session");
	api.use("tracker");
	api.use('ecmascript');
	api.use('react');

	api.export('App');

	api.addFiles('panoply-calc.jsx', ['client', 'server']);
	api.addFiles('panoply-calc.css', 'client');
});
