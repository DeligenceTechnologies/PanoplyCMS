Meteor.publish('menus', function(){
	return Menus.find({trash:false});
});
Meteor.publish('findMenu', function(id){
	
	return Menus.find({_id:id});
});

Meteor.publish('menuItems', function(){
	return MenuItems.find({trash:false});
});
Meteor.publish('findMenuItem', function(id){
	
	return MenuItems.find({_id:id});
});
Meteor.publish('menuItemsbyParentId', function(id){
	
	return MenuItems.find({parentId:id});
});

