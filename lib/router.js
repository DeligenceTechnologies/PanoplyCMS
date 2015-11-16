Router.configure({
    layoutTemplate: 'mainLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.configure({
    layoutTemplate: 'adminLayout',
    loadingTemplate: 'loading'
});

Router.route('/', {
	name: 'homePage',
	template: 'homePage',
    layoutTemplate: 'mainLayout',
    onBeforeAction: function(){
        // var htmlBlocks = htmlblocks.find({status: 1, trash: 0}).fetch();
        var htmlBlocks = htmlblocks.find({menu: { $in: [''] } , status: 1, trash: 0}).fetch();
        var block = new Array();
        var index = 0;
        for(var i = 0; i < htmlBlocks.length; i++){
            block.push(htmlBlocks[i])
            this.render('htmlblock', {
                to: htmlBlocks[i].position,
                data: htmlBlocks[i]
            });
        }
        this.next();
    },
});

Router.route('/admin/', {
    name: 'signin',
    template: 'signin',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.render("adminDashboard");
        } else {
            this.next();
        }
    }
});

Router.route('/admin/profile/', {
    name: 'profile',
    template: 'adminProfile',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/changePassword/', {
    name: 'changePassword',
    template: 'changePassword',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/setting/', {
    name: 'setting',
    template: 'adminSetting',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/menu', {
    name: 'menu',
    template: 'listMenu',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/add_menu', {
    name: 'add_menu',
    template: 'addMenu',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/menu/edit/:_id', {
    name: 'edit_menu',
    layoutTemplate: 'adminLayout',
    template: 'editMenu',
    waitOn:function(){
        Meteor.subscribe('edit_menu',this.params._id);
    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        } 
    }
});    

Router.route('/admin/category', {
    name: 'category',
    template: 'listCategory',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/add_category', {
    name: 'add_category',
    template: 'addCategory',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});

Router.route('/admin/category/edit/:_id', {
    name: 'edit_category',
    layoutTemplate: 'adminLayout',
    template: 'editCategory',
    waitOn:function(){
        Meteor.subscribe('edit_category',this.params._id);
    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }       
    }
});    

Router.route('/admin/articles', {
    name: 'articles',
    template: 'listArticles',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});  

Router.route('/admin/add_articles', {
    name: 'add_articles',
    template: 'addArticles',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
}); 

Router.route('/admin/articles/edit/:_id', {
    name: 'edit_articles',
    layoutTemplate: 'adminLayout',
    template: 'editArticles',
    waitOn:function(){
        Meteor.subscribe('edit_articles',this.params._id);
    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
});      


Router.route('/admin/htmlblocks', {
    name: 'htmlblocks',
    template: 'listHtmlblocks',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
}); 

Router.route('/admin/add_htmlblocks', {
    name: 'add_htmlblocks',
    template: 'addHtmlblocks',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
}); 

Router.route('/admin/htmlblocks/edit/:_id', {
    name: 'edit_htmlblocks',
    layoutTemplate: 'adminLayout',
    template: 'editHtmlblocks',
    waitOn:function(){
        Meteor.subscribe('edit_htmlblocks',this.params._id);
    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }       
      
    }
});     

Router.route('/admin/tags', {
    name: 'tags',
    template: 'listTags',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
}); 

Router.route('/admin/add_tags', {
    name: 'add_tags',
    template: 'addTags',
    layoutTemplate: 'adminLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }
    }
}); 

Router.route('/admin/tags/edit/:_id', {
    name: 'edit_tags',
    layoutTemplate: 'adminLayout',
    template: 'editTags',
    waitOn:function(){
        Meteor.subscribe('edit_tags',this.params._id);

    },
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("signin");
        }       
    }
});  

Router.route('/admin/:path*', {
    name: 'pathNotFound',
    layoutTemplate: 'adminLayout',
    template: 'notFound',
});   

/* Menu Route Starts */
Router.route('/:path*', {
    name: 'menuItem',
    layoutTemplate: 'mainLayout',
    controller: mainRoutingController,    
});
/* Menu Route Ends */