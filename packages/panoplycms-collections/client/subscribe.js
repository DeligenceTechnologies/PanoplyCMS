PanoplySubscriptions = new SubsManager();
PanoplyCMSCollections.packageRoutes = PanoplySubscriptions.subscribe('packageRoutes');
PanoplyCMSCollections.siteName = PanoplySubscriptions.subscribe('siteName');
PanoplyCMSCollections.menuItemRoutes = PanoplySubscriptions.subscribe('menuItemsRoutes');
PanoplyCMSCollections.roles = PanoplySubscriptions.subscribe('roles');
PanoplyCMSCollections.tags = PanoplySubscriptions.subscribe('tags');

Tracker.autorun(function(c) {
	if(Meteor.userId()){
		PanoplyCMSCollections.sidebar = PanoplySubscriptions.subscribe('sidebar');
		PanoplyCMSCollections.imagepic = PanoplySubscriptions.subscribe('imagepic')
		PanoplyCMSCollections.menuRoutes = PanoplySubscriptions.subscribe('menuRoutes')
	}
})