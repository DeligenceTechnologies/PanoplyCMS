Template.adminMenu.helpers({
	name: function(){
		var name=Meteor.user().username;
		return name;
	},
	project_name:function(){
		return settings.find().fetch();
	},
	'articles_path':function(){
      var path = Iron.Location.get().path;
      if(path=="/admin/articles/1" || path=="/admin/add_articles"){
       return 'in';
     }
  },
  'menu_path':function(){
      var path = Iron.Location.get().path;
      if(path=="/admin/menu/1" || path== "/admin/add_menu"){
        return 'in';
        console.log(2);
      }
  },
  'tag_path':function(){
    var path = Iron.Location.get().path;
      if(path=="/admin/add_tags/1" || path=="/admin/tags"){
         return 'in';
       
    }
  },
  'htmlblocks_path':function(){
	    var path = Iron.Location.get().path;
	      if(path=="/admin/add_htmlblocks/1" || path=="/admin/htmlblocks"){
	         return 'in';
	        
	    }
	},
  'category_path':function(){
    var path = Iron.Location.get().path;
      if(path=="/admin/category/1" || path=="/admin/add_category" || path=="/admin/edit/category"){
         return 'in';
        
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