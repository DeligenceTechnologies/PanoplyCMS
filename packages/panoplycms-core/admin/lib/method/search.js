if(Meteor.isServer) {
	Meteor.methods({
		saveSerachKey: function(k){
			return PanoplyCMSCollections.Search.insert({
				Key:k,
				createdAt: new Date(),
				userId: Meteor.userId()
			})
		}
	})
}