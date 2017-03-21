# PanoplyCMS - menumodule 0.0.2

MenuModule for PanoplyCms. To install menumodule in your PanoplyCMS, hit the following command :-

`meteor add deligencetechnologies:menumodule`

This pacakge create module of type menumodule and display selected menu on position in frontend.

One can refer this package to create further menumodule for PanoplyCMS.

# Guidelines to create new menumodule package :-

1. On startup in server there must be a pacakge registration:
	ex. 
	```
		PanoplyCMSRegisterPackage({
			"name" : "yourmodulename", // name should be lowercase, without space and special symbols.
			"type" : "module",		// must be defined type 'module'
			"component":"FrontendReactComponent", // react component that is render on frontend
			"label":"Your Module", // label of yourmodulename - optional
			"routes" : [
				{
					"name" : "addyourmodulename", // route name of yourmodulename
					"path" : "/modules/yourmodulename/add", // path shuold be `/modules/yourmodulename/` add for add module and :_id for edit
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

