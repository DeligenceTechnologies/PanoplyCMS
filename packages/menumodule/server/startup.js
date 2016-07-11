PanoplyCMSRegisterPackage(
		{
			"name" : "menumodule",
			"type" : "module",
			"component":"MenuModule",
			"label":"Menu Module",
			"routes" : [
				{
					"name" : "addMenuModule",
					"path" : "/menumodule/add",
					"component" : "AddMenuModule",
					"layout" : "AdminLayout",
					"provides" : "dashboard",
					"permission" : ["admin"]
				},
				{ 
					"name" : "editMenuModule",
					"path" : "/menumodule/:_id",
					"component" : "EditMenuModule", 
					"layout" : "AdminLayout", 
					"provides" : "dashboard",
					"role":"edit", 
					"permission" : [ "admin" ]
				}
			]
		})