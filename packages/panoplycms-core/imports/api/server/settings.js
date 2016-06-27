Meteor.publish('siteName', function(){
	return PanoplyCMSCollections.Sites.find({});
});