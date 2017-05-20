Meteor.startup(function() {
	PanoplyCMSRegisterPackage({
		"name" : "template",
		"templates": {
			name: "Default Template",
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
				'mainbody',
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