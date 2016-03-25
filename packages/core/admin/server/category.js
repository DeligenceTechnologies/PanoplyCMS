Meteor.publish('Categories', function(){
	return Categories.find({trash:false});
});
Meteor.publish('findCategory', function(id){
	return Categories.find({_id:id});
});
