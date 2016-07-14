Meteor.methods({
	'updateUser':function(obj){
		 return Meteor.users.update({_id:Meteor.userId()}, {$set:obj});
	}
})