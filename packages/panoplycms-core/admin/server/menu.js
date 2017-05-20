Meteor.publish('menus', function(){
	return PanoplyCMSCollections.Menus.find({trash:false});
});
Meteor.publish('menusLimit', function(limit){
	if(limit){
		return PanoplyCMSCollections.Menus.find({trash:false},{limit:limit + 1});
	}
});


Meteor.publish('trashMenus', function(limit){
	if(limit){
		return PanoplyCMSCollections.Menus.find({trash:true}, {limit:limit+1});
	}
});

Meteor.publish('findMenu', function(id){	
	return PanoplyCMSCollections.Menus.find({_id:id});
});
Meteor.publish('menuItems', function(id, trashValue, limit){
	return PanoplyCMSCollections.MenuItems.find({mainParentId: id, trash:trashValue},{limit:limit+1});
});
Meteor.publish('findMenuItem', function(id){	
	return PanoplyCMSCollections.MenuItems.find({_id:id});
});
Meteor.publish('menuParentItems', function(id){	
	return PanoplyCMSCollections.MenuItems.find({parentId:id,trash:false});
});
Meteor.publish('menuItemsbyParentId', function(){	
	return PanoplyCMSCollections.MenuItems.find({trash:false});
});
Meteor.publish('defaultMenuItem', function(){
	return PanoplyCMSCollections.MenuItems.findOne({homepage:true});
});