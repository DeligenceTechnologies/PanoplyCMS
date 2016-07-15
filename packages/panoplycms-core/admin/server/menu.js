Meteor.publish('menus', function(){
	return PanoplyCMSCollections.Menus.find({trash:false});
});
Meteor.publish('trashMenus', function(){
	return PanoplyCMSCollections.Menus.find({trash:true});
});
Meteor.publish('findMenu', function(id){
	
	return PanoplyCMSCollections.Menus.find({_id:id});
});

Meteor.publish('menuItems', function(id,trashValue){
	//console.log(id,"<======>",PanoplyCMSCollections.MenuItems.find({mainParentId:id,trash:trashValue}).fetch(),"trashValue",trashValue)
	return PanoplyCMSCollections.MenuItems.find({mainParentId:id,trash:trashValue});
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