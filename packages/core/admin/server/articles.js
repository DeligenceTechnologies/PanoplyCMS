Meteor.publish('articlesFind', function(){
	return Articles.find({trash:false});
});
Meteor.publish('findOneArticle', function(id){
	return Articles.find({_id:id});
});
Meteor.publish(null, function (){
  return Meteor.roles.find({})
})