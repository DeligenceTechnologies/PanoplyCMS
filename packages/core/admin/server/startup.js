 Meteor.startup(function () {
	if (AdminSidebarMenu.find().count() === 0 ) {
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
			param:[{label:'Edit',routeName:'edit',template:'EditUser',providers:''},{label:'Change Password',routeName:'changePassword',template:'ChangePassword',providers:''}]
		},
		{
			title:'CONTENT',
			desc:'',
			alias:'',
			icon:'fa fa-file-text-o',
			param:[{label:'Articles',routeName:'articles',template:'Articles',providers:''},{label:'Categories',routeName:'listCategories',template:'Categories',providers:''}]
		},
		{
			title:'MENU',
			desc:'',
			alias:'',
			icon:'fa fa-bars',
			param:[{label:'Manage Menu',routeName:'manageMenu',template:'ManageMenu',providers:''}]
		},
		{
			title:'COMPONENTS',
			desc:'',
			alias:'',
			icon:'fa fa-cogs',
			param:[{label:'Tags',routeName:'tags',template:'Tags',providers:''},{label:'Search',routeName:'serach',template:'Search',providers:''}]
		},
		{
			title:'EXTENSIONS',
			desc:'',
			alias:'',
			icon:'fa fa-puzzle-piece',
			param:[{label:'Modules',routeName:'Modules',template:'Modules',providers:''},{label:'Plugins',routeName:'plugins',template:'Plugins',providers:''},{label:'Language',routeName:'language',template:'Language',providers:''},{label:'Templates',routeName:'templates',template:'Templates',providers:''}]
		},
		{
			title:'HELP',
			desc:'',
			alias:'',
			icon:'fa fa-question-circle',
			param:[{label:'Officlie Support Forum',routeName:'officialSupportForum',template:'',providers:''},{label:'Website',routeName:'Website',template:'',providers:''}]
		}

		]
		_.each(sidebarList,function(list){
			AdminSidebarMenu.insert(list);	
		})
		
	    
	} else {
		
	}
	if(Sites.find().count() === 0){
		Sites.insert({name:'PanoplyCMS',siteMetaKeyword:'',siteMetaDesc:'',siteOffline:''});
	}else{
		
	}
	if ( Meteor.users.find().count() === 0 ) {
	    id=Accounts.createUser({
	        username: 'deligence',
	        email: 'info@deligence.com',
	        password: 'Pass@123'
	    });
	   	console.log('********************************************');
	    console.log('*                                          *');
	    console.log('*                                          *');
	    console.log('*     username: info@deligence.com         *');
	    console.log('*     Password: Pass@123                   *');
	    console.log('*                                          *');
	    console.log('*                                          *');
	    console.log('********************************************');
	    Roles.addUsersToRoles(id,['admin','owner'],'default-group');
	} else {
		
		
	}
	
	Tags._ensureIndex({ "title": 1 }, { unique: true });
});

 