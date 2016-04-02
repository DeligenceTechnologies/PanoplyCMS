Meteor.publish('articlesFind', function(){
	
	return PanoplyCMSCollections.Articles.find({trash:false});
});
Meteor.publish('findOneArticle', function(id){
	return PanoplyCMSCollections.Articles.find({_id:id});
});