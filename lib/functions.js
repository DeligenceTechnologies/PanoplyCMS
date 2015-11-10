createAlias = function(title){
	return title.replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-').toLowerCase();
}

listOfArticles = function() {
	if(Meteor.isServer)
		return articles.find({status:1, trash: 0}, {fields: {'title':1,'alias':1,'category':1} });
	else return articles.find({status:1, trash: 0}, {fields: {'title':1,'alias':1,'category':1} }).fetch();
}
/*
listOfCategories = function() {
	if(Meteor.isServer)
		return category.find({status:1, trash: 0}, {fields: {'name':1,'alias':1,'parent':1} });
	else return category.find({status:1, trash: 0}, {fields: {'name':1,'alias':1,'parent':1} }).fetch();
}*/

menuArticle = function(article) {
	if(Meteor.isServer) return articles.find({_id:article, status:1, trash: 0},{fields: {'title':1,'alias':1,'category':1,'articleData':1,'metaKeyword':1} });
	else return articles.find({_id:article, status:1, trash: 0},{fields: {'title':1,'alias':1,'category':1,'articleData':1,'metaKeyword':1} }).fetch();
}

menuCategory = function(category) {
	if(Meteor.isServer) return articles.find({category: category, status:1, trash: 0});
	else return articles.find({category: category, status:1, trash: 0}).fetch();
}