Meteor.publish('Categories', function(){
	
	return PanoplyCMSCollections.Categories.find({trash:false});
});
Meteor.publish('findCategory', function(id){
	
	return PanoplyCMSCollections.Categories.find({_id:id});
});
