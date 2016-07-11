PanoplyCMSRegisterPackage(
		{
			"name" : "htmlblock",
			"type" : "module",
			"component":'AddHtmlblock',
			"label":'Add Htmlblock',
			"routes" : [
				{
					"name" : "addHtmlblock",
					"path" : "/htmlblock/add",
					"component" : "AddHtmlblock",
					"layout" : "AdminLayout",
					"provides" : "dashboard",
					"permission" : ["admin"]
				},
				{ 
					"name" : "editHtmlblock",
					"path" : "/htmlblock/:_id",
					"component" : "Edithtmlblock", 
					"layout" : "AdminLayout", 
					"role":"edit",
					"provides" : "dashboard", 
					"permission" : [ "admin" ]
				}
			]
		})