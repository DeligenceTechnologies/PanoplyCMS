if(Meteor.isServer) {
	Meteor.methods({
		setDefaultTempalteStatus:function(arrayOfTemplate){
			PanoplyCMSCollections.RegisteredPackages.update({name:'template'},
				{$set:{templates:arrayOfTemplate}})
		}
	})
}