Template.adminMenu.helpers({
	name: function(){
		var name=Meteor.user().username;
		return name;
	},
	project_name:function(){
		console.log(settings.find().fetch(),'settings.find().fetch();');
		return settings.find().fetch();
	},
	'articles_path':function(){
      var path = Iron.Location.get().path;
      if(path=="/admin/articles" || path=="/admin/add_articles"){
       console.log(1);
       return 'in';
     }
  },
  'menu_path':function(){
      var path = Iron.Location.get().path;
      if(path=="/admin/menu" || path== "/admin/add_menu"){
        return 'in';
        console.log(2);
      }
  },
  'tag_path':function(){
    var path = Iron.Location.get().path;
      if(path=="/admin/add_tags" || path=="/admin/tags"){
         return 'in';
       
    }
  },
  'htmlblocks_path':function(){
	    var path = Iron.Location.get().path;
	      if(path=="/admin/add_htmlblocks" || path=="/admin/htmlblocks"){
	         return 'in';
	        
	    }
	},
  'category_path':function(){
    var path = Iron.Location.get().path;
      if(path=="/admin/category" || path=="/admin/add_category" || path=="/admin/edit/category"){
         return 'in';
        console.log(5);
    }

  }
});

Template.adminMenu.events({
    'click .logout': function(event){
    	event.preventDefault();
    	Meteor.logout();
    	Router.go('/admin/');
    }
});

UI.registerHelper('setActiveClass', function(url){
    var path = Iron.Location.get().path;
    var a=path.split('/');
    if(path.split('/')[2]==url){
    	return 'active';
    }else{
    	return false;
    }
});