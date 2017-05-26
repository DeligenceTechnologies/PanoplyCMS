PanoplyCMSRegisterPackage(
	{
		"name" : "slidermodule",
		"type" : "module",
		"component": 'SliderBlock',
		"label": 'Slider',
		"routes" : [
			{
				"name" : "addSliderModule",
				"path" : "/modules/slidermodule/add",
				"component" : "AddSliderModule",
				"layout" : "AdminLayout",
				"role": "add",
				"provides" : "dashboard",
				"permission" : ["admin"]
			},
			{
				"name" : "editSliderModule",
				"path" : "/modules/slidermodule/:_id",
				"component" : "EditSliderModule",
				"layout" : "AdminLayout",
				"role": "edit",
				"provides" : "dashboard",
				"permission" : [ "admin" ]
			}
		]
	}
)