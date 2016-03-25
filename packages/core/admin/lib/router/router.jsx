/*-------------------------Admin Routing------------------------------------*/
var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')) 
    this.register('Sites',Meteor.subscribe('siteName')) 
     this.register('Sites1',Meteor.subscribe('imagepic'))
  },
  triggersEnter: [function(context, redirect) {
    // console.log(Meteor.user());
  }]
});

adminRoutes.route('/', {
  name: 'home',
  subscriptions: function(params){
  },
  action: function(params) {
    if (Meteor.userId()) {
          ReactLayout.render(AdminLayout);
        
    }else
       FlowRouter.go('login');
    
  }
});

/*-------------------------Login Routing------------------------------------*/
FlowRouter.route('/login', {
  name: 'login',
  subscriptions: function(params){
  },
  action: function(params) {
   if (Meteor.userId()) {
    FlowRouter.go('home');
   }else{
     ReactLayout.render(Login);
   }
   
  }
});



/*-------------------------users Routing--------------------------*/

adminRoutes.route('/myProfile', {
  name: 'myProfile',
   subscriptions: function(params){
    
  },
  action: function(params) {
    if (Meteor.userId()) {
        ReactLayout.render(AdminLayout,{
      content:<MyProfile />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

adminRoutes.route('/edit', {
  name: 'edit',
   subscriptions: function(params){
    
  },
  action: function(params) {
    if (Meteor.userId()) {
    ReactLayout.render(AdminLayout,{
      content:<AdminEdit />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

/*-------------------------Settings Routing------------------------------------*/
adminRoutes.route('/settings', {
  name: 'settings',
   subscriptions: function(params){
    this.register('Sites',Meteor.subscribe('siteName')) 
  },
  action: function(params) {
    if (Meteor.userId()) {
        ReactLayout.render(AdminLayout,{
      content:<SystemLayout />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});
/*-------------------------Articles Routing------------------------------------*/
adminRoutes.route('/articles/add', {
  name: 'addArticle',
   subscriptions: function(params){
  },
  action: function(params) {
    if (Meteor.userId()) {
         ReactLayout.render(AdminLayout,{
          content:<AddArticle />
          });
   }else{
    console.log(Roles.userIsInRole(Meteor.userId(), ['admin', 'owner'],'default-group'));
     //FlowRouter.go('Login');
   }
   
  }
});

adminRoutes.route('/article/edit/:_id', {
  name: 'editArticle',
   subscriptions: function(params){
     this.register('editarticle', Meteor.subscribe('findOneArticle', params._id)); 
  },
  action: function(params) {
    if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{ content:<EditArticle  _id={params._id} />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

adminRoutes.route('/articles', {
  name: 'articles',
   subscriptions: function(params){
    this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<ListArticles />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

/*-------------------------extension/modules Routing------------------------------------*/

adminRoutes.route('/modules/add/:type', {
  name: 'AddModules',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')) ,
    this.register('Sites',Meteor.subscribe('siteName')),
    this.register('Menus',Meteor.subscribe('menuList'))
  },
  action: function(params) {
    // console.log(params.type,"<== console log");
    ReactLayout.render(AdminLayout, {content:<AddModule type={params.type}/>});
  },
  triggersEnter: [function(context, redirect){ 
    console.log() 
  }]
});

adminRoutes.route('/modules/edit/:_id', {
 name: 'EditModule',
	subscriptions: function(params){
		this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')),
		// this.register('AllModules',Meteor.subscribe('moduleList')),
		this.register('Sites',Meteor.subscribe('siteName')),
		this.register('Menus',Meteor.subscribe('menuList')),
		this.register('editmodules',Meteor.subscribe('findAModule', params._id))
 },
 action: function(params) {
	 ReactLayout.render(AdminLayout,{content:<EditModule _id={params._id}/>
	 });
 },
 triggersEnter: [function(context, redirect){console.log('Edit Module Form');}]
});


adminRoutes.route('/modules', {
	name: 'modulesManager',
	subscriptions: function(params){
		this.register('ShowModules',Meteor.subscribe('moduleList'))
	},
	action: function(params) {
		ReactLayout.render(AdminLayout, {content:<ModulesLayout />});
	},
	triggersEnter: [function(context, redirect){
		console.log();
	}]
});


/*-------------------------content/categories Routing------------------------------------*/

adminRoutes.route('/categories', {
  name: 'listCategories',
   subscriptions: function(params){
    console.log('listCategories---');
    this.register('categories',Meteor.subscribe('Categories')) 
  },
  action: function(params) {
    ReactLayout.render(AdminLayout,{
      content:<ListCategories />
    });
  }
});

adminRoutes.route('/categories/add', {
  name: 'addCategory',
   subscriptions: function(params){
    this.register('categories',Meteor.subscribe('Categories')) 
  },
  action: function(params) {
    ReactLayout.render(AdminLayout,{
      content:<AddCategory />
    });
  }
});
adminRoutes.route('/categories/edit/:_id', {
  name: 'editCategory',
   /*subscriptions: function(params){
    this.register('editcategories',Meteor.subscribe('findCategory',params._id)) 
  },*/
  action: function(params) {
    ReactLayout.render(AdminLayout,{
      content:<EditCategory _id={params._id}/>
    });
  }
});

/*-------------------------menu routing------------------------------------*/


adminRoutes.route('/menus/add', {
  name: 'addMenu',
   subscriptions: function(params){
  },
  action: function(params) {
    if (Meteor.userId()) {
         ReactLayout.render(AdminLayout,{
          content:<AddMenu />
          });
   }else{
    console.log(Roles.userIsInRole(Meteor.userId(), ['admin', 'owner'],'default-group'));
     //FlowRouter.go('Login');
   }
   
  }
});

adminRoutes.route('/menu/edit/:_id', {
  name: 'editMenu',
   subscriptions: function(params){
     //this.register('editarticle', Meteor.subscribe('findOneArticle', params._id)); 
  },
  action: function(params) {
    if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{ content:<EditMenu  _id={params._id} />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

adminRoutes.route('/menus', {
  name: 'manageMenu',
   subscriptions: function(params){
    //this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<ListMenus />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

/*-------------------------menu items routing--------------------------------*/
adminRoutes.route('/menus/:_id/addMenuItem', {
  name: 'addMenuItem',
   subscriptions: function(params){
  },
  action: function(params) {
    if (Meteor.userId()) {
         ReactLayout.render(AdminLayout,{
          content:<AddMenuItem _id={params._id} />
          });
   }else{
    console.log(Roles.userIsInRole(Meteor.userId(), ['admin', 'owner'],'default-group'));
     //FlowRouter.go('Login');
   }
   
  }
});

adminRoutes.route('/menu/:_id/editMenuItem', {
  name: 'editMenuItem',
   subscriptions: function(params){
     //this.register('editarticle', Meteor.subscribe('findOneArticle', params._id)); 
  },
  action: function(params) {
    if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{ content:<EditMenuItem  _id={params._id} />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

adminRoutes.route('/menus/:_id/MenuItems', {
  name: 'listMenuItems',
   subscriptions: function(params){
    //this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<ListMenuItems _id={params._id} />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});


/*-------------------------component/Tags routing------------------------------------*/

adminRoutes.route('/tag/add', {
  name: 'addTag',
   subscriptions: function(params){
  },
  action: function(params) {
    if (Meteor.userId()) {
         ReactLayout.render(AdminLayout,{
          content:<AddTag />
          });
   }else{
    console.log(Roles.userIsInRole(Meteor.userId(), ['admin', 'owner'],'default-group'));
     //FlowRouter.go('Login');
   }
   
  }
});

adminRoutes.route('/tag/edit/:_id', {
  name: 'editTag',
   subscriptions: function(params){
     //this.register('editarticle', Meteor.subscribe('findOneArticle', params._id)); 
  },
  action: function(params) {
    if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{ content:<EditTag  _id={params._id} />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

adminRoutes.route('/tags', {
  name: 'tags',
   subscriptions: function(params){
    //this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<ListTags />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});

/*-------------------------Extension/Language/language routing------------------------------------*/

adminRoutes.route('/language', {
  name: 'language',
   subscriptions: function(params){
    //this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<Language />
      });
   }else{
     FlowRouter.go('Login');
   }
  }
});

/*-------------------------Extension/Language/language routing------------------------------------*/

adminRoutes.route('/changePassword', {
  name: 'changePassword',
   subscriptions: function(params){
    //this.register('Articles',Meteor.subscribe('articlesFind')) 
  },
  action: function(params) {
     if (Meteor.userId()) {
          ReactLayout.render(AdminLayout,{
      content:<ChangePassword />
      });
   }else{
     FlowRouter.go('Login');
   }
    
  }
});
