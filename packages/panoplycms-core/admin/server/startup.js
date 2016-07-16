PanoplyCMSRegisterPackage = function(packageDetails) {
	switch(packageDetails.name){
		case 'panoplycore':
			if(!PanoplyCMSCollections.RegisteredPackages.find({'name': packageDetails.name}).count())
		  	PanoplyCMSCollections.RegisteredPackages.insert(packageDetails)
		  break;
		case 'template':
			if(!PanoplyCMSCollections.RegisteredPackages.find({'name': packageDetails.name, 'templates.name':packageDetails.templates.name}).count())
			  PanoplyCMSCollections.RegisteredPackages.update({'name':packageDetails.name},{$push:{'templates': packageDetails.templates}})
			break;
		default:
			if(!PanoplyCMSCollections.RegisteredPackages.find({'name': packageDetails.name}).count())
		  	PanoplyCMSCollections.RegisteredPackages.insert(packageDetails)
		  break;
	}
},



Meteor.startup(function () {
	if (PanoplyCMSCollections.AdminSidebarMenu.find().count() === 0 ) {
		sidebarList=[{
			title:'SETTINGS',
			desc:'',
			alias:'',
			icon:'fa fa-home',
			param:[{label:'Global Configuration',routeName:'settings',template:'Settings',providers:''}]
		},
		{
			title:'USER',
			desc:'',
			alias:'',
			icon:'fa fa-user',
			param:[
				{
					label:'User List',
					routeName:'users'
				}
			]
		},
		{
			title:'MENU',
			desc:'',
			alias:'',
			icon:'fa fa-bars',
			param:[
				{
					label:'Manage Menu',
					routeName:'manageMenu',
					template:'ManageMenu',
					providers:''
				},
				{
					label:'Add Menu',
					routeName:'addMenu',
					template:'AddMenu',
					providers:''
				}			
			]
		},
		{
			title:'CONTENT',
			desc:'',
			alias:'',
			icon:'fa fa-file-text-o',
			param:[
				{
					label:'Articles',
					routeName:'articles',
					template:'Articles',
					providers:''
				},
				{
					label:'Categories',
					routeName:'listCategories',
					template:'Categories',
					providers:''
				}
			]
		},
		{
			title:'COMPONENTS',
			desc:'',
			alias:'',
			icon:'fa fa-cogs',
			param:[
				/*{
					label:'Tags',
					routeName:'tags',
					template:'Tags',
					providers:''
				},
				{
					label:'Search',
					routeName:'serach',
					template:'Search',
					providers:''
				}*/
			]
		},
		{
			title:'EXTENSIONS',
			desc:'',
			alias:'',
			icon:'fa fa-puzzle-piece',
			param:[
				{
					label:'Modules',
					routeName:'modulesManager',
					template:'Modules',
					providers:''
				}/*,
				{
					label:'Plugins',
					routeName:'plugins',
					template:'Plugins',
					providers:''
				}*//*,
				{
					label:'Language',
					routeName:'language',
					template:'Language',
					providers:''
				}*/,
				{
					label:'Templates',
					routeName:'templates',
					template:'Templates',
					providers:''
				}
			]
		},
		{
			title:'HELP',
			desc:'',
			alias:'',
			icon:'fa fa-question-circle',
			param:[
				{
					label:'Officlie Support Forum',
					routeName:'officialSupportForum',
					url:'https://github.com/DeligenceTechnologies/Panoplycms',
					template:'',
					providers:''
				},
				{
					label:'Website',
					routeName:'Website',
					url:'http://www.deligence.com/blog/panoply-cms-meteor-based-open-source-cms',
					template:'',
					providers:''
				}
			]
		}

		]
		_.each(sidebarList,function(list){
			PanoplyCMSCollections.AdminSidebarMenu.insert(list);	
		})
		
	    
	} else {
		
	}
	if(PanoplyCMSCollections.Sites.find().count() === 0){
		PanoplyCMSCollections.Sites.insert({name:'PanoplyCMS',siteMetaKeyword:'',siteMetaDesc:'',siteOffline:''});
	}else{
		
	}

	if(!PanoplyCMSCollections.RegisteredPackages.find({'name': 'template'}).count()){
		PanoplyCMSCollections.RegisteredPackages.insert({'name': 'template'})
	}

	if ( Meteor.users.find().count() === 0 ) {
	    id=Accounts.createUser({
	        email: 'info@deligence.com',
	        password: 'Pass@123',
	        profile: {
	        	username: 'deligence'
	        }
	    });
	   	console.log('********************************************');
	    console.log('*                                          *');
	    console.log('*                                          *');
	    console.log('*     Username: info@deligence.com         *');
	    console.log('*     Password: Pass@123                   *');
	    console.log('*                                          *');
	    console.log('*                                          *');
	    console.log('********************************************');
	    Roles.addUsersToRoles(id,['admin','owner']);
	} else {
			
	}

	PanoplyCMSRegisterPackage(
		{
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
					"path" : "/menu/editMenuItem/:_id",
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
				},
				{
					"name" : "templates",
					"path" : "/templates",
					"component" : "TemplateManger",
					"layout" : "AdminLayout",
					"provides" : "dashboard",
					"permission" : [
						"admin"
					]
				},
			]
		}
	)
	
	PanoplyCMSCollections.Tags._ensureIndex({ "title": 1 }, { unique: true });
	PanoplyCMSCollections.Articles._ensureIndex({ "title": 1 }, { unique: true });
	PanoplyCMSCollections.Categories._ensureIndex({ "title": 1 }, { unique: true });
});



 