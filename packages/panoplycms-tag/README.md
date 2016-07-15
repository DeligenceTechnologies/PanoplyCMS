# PanoplyCMS - Tag 0.0.1

Default Template for PanoplyCMS. To install default template in your PanoplyCMS use:

`meteor add deligencetechnologies:panoplycms-tag`

This component provide interface in admin side to manage tags in PanoplyCMS. 

One can refer this package to create further components for PanoplyCMS.

Guidelines to create new components package:

1. On startup in server there must be a pacakge registration:
	ex. 
	```
	PanoplyCMSRegisterPackage(
		{
			"name" : "yourcomponentname", // must be lowercase without special symbols and space
			"type" : "component",
			"routes" : [
				{ 
					"name" : "yourcomponentname", // landing page of component will be same name as component
					"path" : "/component/path", // component path
					"component" : "reactComponent", // React Component
					"layout" : "AdminLayout", // must be same
					"provides" : "dashboard", // use dashboard for backend component route and front for frontend
					"permission" : ["admin"] // permission for route - use guest for all
				},
				...
			]
		}
	)
	```