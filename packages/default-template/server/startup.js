Meteor.startup(function() {
	PanoplyCMSRegisterPackage({
		"name" : "template",
		"templates": {
			name: "Donnish",
			packageName: "deligencetechnologies:default-template",
			layoutImage: "public/templateLayout.jpg",
			active: true,
			layout: "DefaultTemplate",			
			views:{
				notFound:'DefaultNotFound',
				offline:'DefaultOffline',
				category: "DefaultCategory",
				article: "DefaultArticle",
				module: "ModuleOnly"
			},
			positions: [
				'topHeader',
				'mainHeader',
				'showcase',
				'utility',
				'feature',
				'mainTop',
				'sidebar',
				'contentTop',
				'contentBottom',
				'mainBottom',
				'extension',
				'fullWidth',
				'bottom',
				'mainFooter',
				'copyright'
			]
		}
	})
});