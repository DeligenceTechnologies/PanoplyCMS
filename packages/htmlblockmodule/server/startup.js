PanoplyCMSRegisterPackage(
		{
			"name" : "htmlblock",
			"type" : "module",
			"component":'AddHtmlblock',
			"label":'Htmlblock',
			"routes" : [
				{
					"name" : "addHtmlblock",
					"path" : "/htmlblock/add",
					"component" : "AddHtmlblock",
					"layout" : "AdminLayout",
					"role":"add",
					"provides" : "dashboard",
					"permission" : ["admin"]
				},
				{ 
					"name" : "editHtmlblock",
					"path" : "/htmlblock/:_id",
					"component" : "EditHtmlblock", 
					"layout" : "AdminLayout", 
					"role":"edit",
					"provides" : "dashboard", 
					"permission" : [ "admin" ]
				}
			]
		})