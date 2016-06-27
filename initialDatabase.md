db.adminSidebarMenu.find().pretty();
db.adminSidebarMenu.insert([{
	"_id" : "evxeRgJYkAXJctkpH",
	"title" : "SETTINGS",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-home",
	"param" : [
		{
			"label" : "Global Configuration",
			"routeName" : "settings",
			"template" : "Settings",
			"providers" : ""
		}
	]
},
{
	"_id" : "AMTo8eBHWEExGiAGb",
	"title" : "USER",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-user",
	"param" : [
		{
			"label" : "User List",
			"routeName" : "users"
		}
	]
},
{
	"_id" : "iK4RRX2Sh87j7hyMi",
	"title" : "CONTENT",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-file-text-o",
	"param" : [
		{
			"label" : "Articles",
			"routeName" : "articles",
			"template" : "Articles",
			"providers" : ""
		},
		{
			"label" : "Categories",
			"routeName" : "listCategories",
			"template" : "Categories",
			"providers" : ""
		}
	]
},
{
	"_id" : "NWKdAqTEjDsz3ERup",
	"title" : "MENU",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-bars",
	"param" : [
		{
			"label" : "Manage Menu",
			"routeName" : "manageMenu",
			"template" : "ManageMenu",
			"providers" : ""
		}
	]
},
{
	"_id" : "zCSqrMRqt89ksFqQ5",
	"title" : "COMPONENTS",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-cogs",
	"param" : [
		{
			"label" : "Tags",
			"routeName" : "tags",
			"template" : "Tags",
			"providers" : ""
		},
		{
			"label" : "Search",
			"routeName" : "serach",
			"template" : "Search",
			"providers" : ""
		}
	]
},
{
	"_id" : "ypru5jHJcGQx3EKwq",
	"title" : "HELP",
	"desc" : "Help",
	"alias" : "",
	"icon" : "fa fa-question-circle",
	"param" : [
		{
			"label" : "Officlie Support Forum",
			"routeName" : "officialSupportForum",
			"template" : "",
			"providers" : ""
		},
		{
			"label" : "Website",
			"routeName" : "Website",
			"template" : "",
			"providers" : ""
		}
	]
},
{
	"_id" : "H9FLP8yKxEArtYn7r",
	"title" : "EXTENSIONS",
	"desc" : "",
	"alias" : "",
	"icon" : "fa fa-puzzle-piece",
	"param" : [
		{
			"label" : "Modules",
			"routeName" : "modulesManager",
			"template" : "Modules",
			"providers" : ""
		},
		{
			"label" : "Plugins",
			"routeName" : "plugins",
			"template" : "Plugins",
			"providers" : ""
		},
		{
			"label" : "Language",
			"routeName" : "language",
			"template" : "Language",
			"providers" : ""
		},
		{
			"label" : "Templates",
			"routeName" : "templates",
			"template" : "Templates",
			"providers" : ""
		}
	]
}])








db.registeredPackages.find().pretty();
db.registeredPackages.insert({
	"_id" : "56e2bb537f4f5fb9833a875a",
	"name" : "panoplycore",
	"routes" : [
		{
			"name" : "settings",
			"path" : "/settings",
			"component" : "SystemLayout",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "addArticle",
			"path" : "/articles/add",
			"component" : "AddArticle",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "editArticle",
			"path" : "/article/edit/:_id",
			"component" : "EditArticle",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "articles",
			"path" : "/articles",
			"component" : "ListArticles",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "AddModules",
			"path" : "/modules/add",
			"component" : "AddModule",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "EditModule",
			"path" : "/modules/edit/:_id",
			"component" : "EditModule",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "modulesManager",
			"path" : "/modules",
			"component" : "ModulesLayout",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "listCategories",
			"path" : "/categories",
			"component" : "ListCategories",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "addCategory",
			"path" : "/categories/add",
			"component" : "AddCategory",
			"layout" : "AdminLayout",
			"provides" : "dashboard"
		},
		{
			"name" : "editCategory",
			"path" : "/categories/edit/:_id",
			"component" : "EditCategory",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "addMenu",
			"path" : "/menus/add",
			"component" : "AddMenu",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "editMenu",
			"path" : "/menu/edit/:_id",
			"component" : "EditMenu",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "manageMenu",
			"path" : "/menus",
			"component" : "ListMenus",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "addMenuItem",
			"path" : "/menus/:_id/addMenuItem",
			"component" : "AddMenuItem",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "editMenuItem",
			"path" : "/menu/:_id/editMenuItem",
			"component" : "EditMenuItem",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "listMenuItems",
			"path" : "/menus/:_id/MenuItems",
			"component" : "ListMenuItems",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "users",
			"path" : "/users",
			"component" : "UserList",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "editUser",
			"path" : "/users/:_id",
			"component" : "EditUser",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "changePassword",
			"path" : "/changepassword",
			"component" : "ChangePassword",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "language",
			"path" : "/language",
			"component" : "Language",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "modulesManager",
			"path" : "/modules",
			"component" : "ModulesLayout",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		},
		{
			"name" : "login",
			"path" : "/login",
			"component" : "Login",
			"layout" : "AdminLoginLayout",
			"provides" : "adminLogin"
		},
		{
			"name" : "dashboard",
			"path" : "/dashboard",
			"component" : "Dashboard",
			"layout" : "AdminLayout",
			"provides" : "dashboard",
			"permission" : [
				"admin"
			]
		}
	]
})








db.templates.find().pretty();
db.templates.insert({
	"_id" : "57038be8ca1c72db8bf123c8",
	"name" : "PanoplyCMS Default Template",
	"component" : "DefaultTemplate",
	"status" : 1,
	"trash" : false
})





db.site.find().pretty();
db.site.insert({
	"_id" : "83QcvpHkS3uxokiQE",
	"name" : "PanoplyCMSS",
	"siteMetaKeyword" : "esrwer",
	"siteMetaDesc" : "esrwer",
	"siteOffline" : "Yes"
})