Meteor.publish('packageRoutes', function(){
	return PanoplyCMSCollections.RegisteredPackages.find();
})

Meteor.publish('tags', function(){
	return PanoplyCMSCollections.Tags.find({trash:false});
});

Meteor.publish('findTag', function(id){	
	return PanoplyCMSCollections.Tags.find({_id:id});
});

Meteor.publish('menuItemsRoutes', function(){
	return PanoplyCMSCollections.MenuItems.find({trash:false});
})

Meteor.publish('roles', function (){
  return Meteor.roles.find({})
})