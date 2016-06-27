Meteor.publish('sidebar', function(){	
	return PanoplyCMSCollections.AdminSidebarMenu.find({});
});
Meteor.publish('imagepic', function(){
	return Images.find({});
});

