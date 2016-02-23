Meteor.publish('Categories', function(){
	
	return Categories.find({trash:0});
});
Meteor.publish('findCategory', function(id){
	
	return Categories.find({_id:id});
});
