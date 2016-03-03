Meteor.methods({
	'updateUser':function(username,email){
		console.log('12335');
		 return Meteor.users.update({_id:Meteor.userId()}, {$set: {'emails.0.address':email,"profile.username":username}});
	}
})