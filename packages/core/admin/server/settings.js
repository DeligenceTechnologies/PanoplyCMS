 Meteor.startup(function () {
	if (AdminSidebarMenu.find().count() === 0 ) {
		sidebarList=[{
			title:'SETTINGS',
			desc:'',
			alias:'',
			icon:'fa fa-home',
			param:[{label:'Global Configuration',routeName:'settings',template:'',providers:''}]
		},
		{
			title:'USER',
			desc:'',
			alias:'',
			icon:'fa fa-user',
			param:[{label:'Edit',routeName:'edit',template:'',providers:''}]
		},
		{
			title:'CONTENT',
			desc:'',
			alias:'',
			icon:'fa fa-file-text-o',
			param:[{label:'Articles',routeName:'articles',template:'',providers:''},{label:'Categories',routeName:'categories',template:'',providers:''}]
		},
		{
			title:'MENU',
			desc:'',
			alias:'',
			icon:'fa fa-bars',
			param:[{label:'Manage Menu',routeName:'manageMenu',template:'',providers:''}]
		},
		{
			title:'COMPONENTS',
			desc:'',
			alias:'',
			icon:'fa fa-cogs',
			param:[{label:'Tags',routeName:'tags',template:'',providers:''},{label:'Search',routeName:'serach',template:'',providers:''}]
		},
		{
			title:'EXTENSIONS',
			desc:'',
			alias:'',
			icon:'fa fa-puzzle-piece',
			param:[{label:'Modules',routeName:'Modules',template:'',providers:''},{label:'Plugins',routeName:'plugins',template:'',providers:''},{label:'Language',routeName:'language',template:'',providers:''},{label:'Templates',routeName:'templates',template:'',providers:''}]
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
		console.log('SideBar already  exists');
	}
	if(Sites.find().count() === 0){
		Sites.insert({name:'PanoplyCMS'});
	}else{
		console.log('Site name already  exists');
	}
	
	
});