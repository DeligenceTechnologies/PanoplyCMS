Meteor.methods({
	'updateUser':function(username,email){
		 return Meteor.users.update({_id:Meteor.userId()}, {$set: {'emails.0.address':email,"profile.username":username}});
	}
})