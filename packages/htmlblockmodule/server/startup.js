PanoplyCMSRegisterPackage(
	{
		"name" : "htmlblock",
		"type" : "module",
		"component":'HTMLBlock',
		"label":'Html Block',
		"routes" : [
			{
				"name" : "addHtmlblock",
				"path" : "/modules/htmlblock/add",
				"component" : "AddHtmlblock",
				"layout" : "AdminLayout",
				"role":"add",
				"provides" : "dashboard",
				"permission" : ["admin"]
			},
			{
				"name" : "editHtmlblock",
				"path" : "/modules/htmlblock/:_id",
				"component" : "EditHtmlblock", 
				"layout" : "AdminLayout", 
				"role":"edit",
				"provides" : "dashboard", 
				"permission" : [ "admin" ]
			}
		]
	}
)