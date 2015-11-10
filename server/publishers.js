Meteor.publish('article', function(category, article) {
  	return articles.find({category: category, alias: article, status:1, trash: 0});
  	this.ready();
});

Meteor.publish('menus', function(){
	return menus.find({status : 1, trash : 0 });
	this.ready();
});

Meteor.publish('listOfArticles', function() {
  return listOfArticles({status : 1, trash : 0 });
  this.ready();
});
/*
Meteor.publish('listOfCategories', function() {
	return listOfCategories();
	this.ready();
});*/

Meteor.publish('menuArticle', function(article) {	
	return menuArticle(article);
	this.ready();
});

Meteor.publish('menuCategory', function(category){
	return menuCategory(category);  	
	this.ready();
});

Meteor.publish("name", function(){
    	return Meteor.users.find();
});
Meteor.publish("show_category", function(){
	return category.find();
});
Meteor.publish("edit_category", function(id){
	return category.find({_id:id});
});
Meteor.publish("show_menu", function(){
	return menus.find();
});
Meteor.publish("show_articles", function(){
	return articles.find();
});
Meteor.publish("articles", function(id){
	return articles.find({_id:id}).fetch();
});
Meteor.publish("edit_articles", function(id){
	return articles.find({_id:id}).fetch();
});
Meteor.publish("menus_under_category", function(){
	return menus.find({"menuItem.type":'Categories'});
});
Meteor.publish("menus_under_articles", function(){
	return articles.find({"menuItem.type":'Articles'});
});
Meteor.publish("show_html_blocks", function(){
	return htmlblocks.find();
});
Meteor.publish("edit_htmblocks", function(id){
	return htmlblocks.find({_id:id});
});
Meteor.publish("show_tags", function(){
	return tags.find();
});
Meteor.publish("edit_tags", function(id){
	return tags.find({_id:id});
});
Meteor.publish("name_of_tags", function(id){
	return tags.find({_id:id},{tag:1});
});
Meteor.publish("project_name", function(){
	return settings.find();
});