Meteor.publish('moduleList', function(){

	return Modules.find({});
});
Meteor.publish('findAModule', function(id){

	return Modules.find({_id:id});
});
