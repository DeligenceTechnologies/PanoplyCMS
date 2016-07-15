#PanoplyCMS - menumodule 1.1.0

MenuModule for PanoplyCms. To insatll menumodule in your PanoplyCMS use:

'meteor add deligence1:menumodule'

This pacakge create module of type menumodule and display selected menu on position in frontend.

One can refer this package to create further menumodule for PanoplyCMS.

Guidelines to create new menumodule package:

1. On startup in server there must be a pacakge registration:
	ex. 
	```
PanoplyCMSRegisterPackage(
		{
			"name" : "yourmodulename", // name should be lowercase, without space and special symbols.
			"type" : "module",		// must be defined type 'module'
			"component":"FrontendReactComponent", //react component that is render on frontend
			"label":"Your Module", //label of yourmodulename
			"routes" : [
				{
					"name" : "addyourmodulename", //route name of menumodule
					"path" : "/modules/yourmodulename/add", //path shuold be modules/yourmodulename/ add for add module and :_id for edit
					"component" : "AddMenuModule", //react component of addyourmodulename renderd on backend
					"layout" : "AdminLayout",  // layout must be AdminLayout
					"role"   :"add",	// role must be add or edit
					"provides" : "dashboard", //provides must be dashboard
					"permission" : ["admin"] // permission must be admin
				},
				...
			]
		})

