Meteor.publish('tags', function(){
	return Tags.find({trash:false});
});
Meteor.publish('findTag', function(id){
	
	return Tags.find({_id:id});
});