Meteor.startup(function() {
//	FormHandler.ignoreFields = ["_id", "createdAt", "updatedAt"];

	PanoplyCMSRegisterPackage({
		"name" : "template",
		"templates": {
			name: "Default Template",
			packageName: "deligence1:default-template",
			layoutImage: "public/templateLayout.jpg",
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