PanoplyCMSRegisterPackage(
		{
			"name" : "menumodule",
			"type" : "module",
			"component":"MenuModuleFront",
			"label":"Menu Module",
			"routes" : [
				{
					"name" : "addMenuModule",
					"path" : "/modules/menumodule/add",
					"component" : "AddMenuModule",
					"layout" : "AdminLayout",
					"provides" : "dashboard",
					"permission" : ["admin"]
				},
				{ 
					"name" : "editMenuModule",
					"path" : "/modules/menumodule/:_id",
					"component" : "EditMenuModule", 
					"layout" : "AdminLayout", 
					"provides" : "dashboard",
					"role":"edit", 
					"permission" : [ "admin" ]
				}
			]
		})