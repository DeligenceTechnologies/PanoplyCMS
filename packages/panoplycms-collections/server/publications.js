Meteor.publish('packageRoutes', function(){
	return PanoplyCMSCollections.RegisteredPackages.find();
})

Meteor.publish('tags', function(){
	return PanoplyCMSCollections.Tags.find({});
});

Meteor.publish('findTag', function(id){	
	return PanoplyCMSCollections.Tags.find({_id:id});
});

Meteor.publish('menuItemsRoutes', function(){
	return PanoplyCMSCollections.MenuItems.find({trash:false});
})

Meteor.publish('menuRoutes', function(){
	return PanoplyCMSCollections.Menus.find({trash:false});
})

Meteor.publish('roles', function (){
  return Meteor.roles.find({})
})

Meteor.publish('siteName', function(){
	return PanoplyCMSCollections.Sites.find({})
})

/* Publish Articles */
Meteor.publish('articlesFind', function(){	
	return PanoplyCMSCollections.Articles.find({});
});
Meteor.publish('findOneArticle', function(id){
	return PanoplyCMSCollections.Articles.find({_id:id});
});

/* Publish Categories */
Meteor.publish('Categories', function(){
	return PanoplyCMSCollections.Categories.find({});
});
Meteor.publish('findCategory', function(id){
	return PanoplyCMSCollections.Categories.find({_id:id});
});

/* Publish Modules */
Meteor.publish('moduleList', function(){
	return PanoplyCMSCollections.Modules.find({});
});
Meteor.publish('findAModule', function(id){
	return PanoplyCMSCollections.Modules.find({_id:id});
});
