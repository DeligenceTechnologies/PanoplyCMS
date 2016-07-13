Meteor.startup(function() {
//	FormHandler.ignoreFields = ["_id", "createdAt", "updatedAt"];

	PanoplyCMSRegisterPackage({
		"name" : "template",
		"templates": {
			name: "Default Template",
			active: true,
			layout: "DefaultTemplate",
			notFound:'DefaultNotFound',
			offline:'DefaultOffline',
			categoryView: "DefaultCategory",
			articleView: "DefaultArticle",
			positions: ['top', 'sidebar', 'footer']
		}
	})
	
});