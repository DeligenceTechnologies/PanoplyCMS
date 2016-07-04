Meteor.publish('Categories', function(){
	
	return PanoplyCMSCollections.Categories.find({});
});
Meteor.publish('findCategory', function(id){
	
	return PanoplyCMSCollections.Categories.find({_id:id});
});
