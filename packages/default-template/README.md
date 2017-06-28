# PanoplyCMS - Default Template 0.2.0

Default Template for PanoplyCMS. To install default template in your PanoplyCMS, Hit the following command :-

`meteor add deligencetechnologies:default-template`


One can refer this package to create further templates for PanoplyCMS.

Guidelines to create new template package:

1. On startup in server there must be a pacakge registration:
	ex. 
	```
	PanoplyCMSRegisterPackage({
		"name" : "template",
		"templates": {
			name: "Your Template Name",
			packageName: "user:packageName",
			layoutImage: "public/templateLayout.jpg", // Template Image describing layout
			active: false,
			layout: "Your Default Template Layout Component",
			notFound:'DefaultNotFound', // optional - But if exists must be valid component
			offline:'DefaultOffline', // optional - But if exists must be valid component
			categoryView: "Your Default Category View Component", 
			articleView: "Your Default Article View Component",
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
			] // list of positions - must be empty array if not exists
		}
	})
	```
***

### NOTE:-

We recommended to use the [gitHub repository](https://github.com/DeligenceTechnologies/PanoplyCMS) for latest updates.