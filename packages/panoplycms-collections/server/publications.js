Meteor.publish('packageRoutes', function(){
	return PanoplyCMSCollections.RegisteredPackages.find();
})

Meteor.publish('tags', function(){
	return PanoplyCMSCollections.Tags.find({});
});

Meteor.publish('tagsLimit', function(limit){
	if(limit){
		return PanoplyCMSCollections.Tags.find({}, {limit:limit+1});
	}
});

Meteor.publish('findTag', function(id){	
	return PanoplyCMSCollections.Tags.find({_id:id});
});

Meteor.publish('menuItemsRoutes', function(){
	return PanoplyCMSCollections.MenuItems.find({trash:false});
})

Meteor.publish('menuRoutes', function(){
	return PanoplyCMSCollections.Menus.find({trash:false});
})

Meteor.publish('roles', function (){
	return Meteor.roles.find({})
})

Meteor.publish('siteName', function(){
	return PanoplyCMSCollections.Sites.find({})
})

/* Publish Articles */
Meteor.publish('articlesFind', function(){	
	return PanoplyCMSCollections.Articles.find({});
});
Meteor.publish('findOneArticle', function(id){
	return PanoplyCMSCollections.Articles.find({_id:id});
});
Meteor.publish('articles', function(limit){
	if(limit){
		return PanoplyCMSCollections.Articles.find({}, {limit: limit + 1});
	}
});

/* Publish Categories */
Meteor.publish('Categories', function(){
	return PanoplyCMSCollections.Categories.find({});
});
Meteor.publish('findCategory', function(id){
	return PanoplyCMSCollections.Categories.find({_id:id});
});
Meteor.publish('category', function(limit){
	if(limit){
		return PanoplyCMSCollections.Categories.find({trash: false}, {limit:limit+1});
	}
});

Meteor.publish('categoryTrash', function(limit){
	if(limit){
		return PanoplyCMSCollections.Categories.find({trash: true}, {limit:limit+1});
	}
});

/* Publish Modules */
Meteor.publish('moduleList', function(){
	return PanoplyCMSCollections.Modules.find({});
});
Meteor.publish('findAModule', function(id){
	return PanoplyCMSCollections.Modules.find({_id:id});
});

Meteor.publish('modules', function(limit){
	// console.log("current page ------", page)
	// console.log("page limit ------", limit)
	// if(page && limit){
	if(limit){
		// let skip = (page - 1)*limit;
		// console.log("page skip ------", skip)
		// console.log("Data >>>>", PanoplyCMSCollections.Modules.find({}, {skip: skip, limit: limit}).fetch())
		// return PanoplyCMSCollections.Modules.find({}, {skip: skip, limit: limit});
		return PanoplyCMSCollections.Modules.find({}, {limit: limit + 1});
	}
});