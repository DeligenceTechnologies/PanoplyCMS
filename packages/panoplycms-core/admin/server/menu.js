Meteor.publish('menus', function(){
	return PanoplyCMSCollections.Menus.find({trash:false});
});
Meteor.publish('findMenu', function(id){
	
	return PanoplyCMSCollections.Menus.find({_id:id});
});

Meteor.publish('menuItems', function(id){
	//console.log(id,"<======>",PanoplyCMSCollections.MenuItems.find({mainParentId:id}).fetch())
	return PanoplyCMSCollections.MenuItems.find({mainParentId:id,trash:false});
});
Meteor.publish('findMenuItem', function(id){
	
	return PanoplyCMSCollections.MenuItems.find({_id:id});
});
Meteor.publish('menuItemsbyParentId', function(id){
	
	return PanoplyCMSCollections.MenuItems.find({parentId:id});
});

