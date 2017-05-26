PanoplyCMSRegisterPackage(
	{
		"name" : "tags",
		"type" : "component",
		"routes" : [
			{
				"name" : "addTag",
				"path" : "/tags/add",
				"component" : "AddTag",
				"layout" : "AdminLayout",
				"provides" : "dashboard",
				"permission" : ["admin"]
			},
			{ 
				"name" : "editTag",
				"path" : "/tags/edit/:_id",
				"component" : "EditTag",
				"layout" : "AdminLayout",
				"provides" : "dashboard",
				"permission" : [ "admin" ]
			},
			{ 
				"name" : "tags",
				"path" : "/tags",
				"component" : "ListTags",
				"layout" : "AdminLayout",
				"provides" : "dashboard",
				"permission" : [ "admin" ]
			}
		]
	}
)