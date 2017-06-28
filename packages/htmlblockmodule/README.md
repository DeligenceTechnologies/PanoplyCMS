# PanoplyCMS - htmlblock 0.0.6

Htmlblock package for PanoplyCMS. To install Htmlblock Package in your PanoplyCMS, Hit the following command :-

`meteor add deligencetechnologies:htmlblock`

This package is having functionality to create custom HTML code from backend to display on frontend.

One can refer this package to display custom HTML code on frontend for PanoplyCMS.

# Guidelines to create new template package :-

1. Add package with the following command:
    ex. 	
     ```
     PanoplyCMSRegisterPackage({
			"name" : "yourmodulename", // name should be lowercase, without space and special symbols.
			"type" : "module",		// must be defined type 'module'
			"component":"FrontendReactComponent", // react component that is render on 											 frontend
			"label":"Your Module", // label of yourmodulename - optional
			"routes" : [
				{
					"name" : "addyourmodulename", // route name of yourmodulename
					"path" : "/modules/yourmodulename/add", // path shuold be	`/modules/yourmodulename/` add for add module and :_id for edit
					"component" : "addyourmodulename", //react component of addyourmodulename 
					"layout" : "AdminLayout",  // layout must be AdminLayout
					"role"   :"add",	// role must be add or edit
					"provides" : "dashboard", // provides must be dashboard
					"permission" : ["admin"] // permission must be admin
				},
				...
			]
		})
		```

***

### NOTE:-

We recommended to use the [gitHub repository](https://github.com/DeligenceTechnologies/PanoplyCMS) for latest updates.
