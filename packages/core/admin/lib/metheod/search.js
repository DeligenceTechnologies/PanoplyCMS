
Meteor.methods({
	saveSerachKey: function(k){
		
		return Search.insert({
			Key:k,
			createdAt: new Date(),
	      	userId: Meteor.userId()
		})
	}
})