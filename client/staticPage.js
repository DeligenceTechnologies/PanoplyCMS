Template.staticPage.helpers({
	article: function(){
		return articles.find({_id:Router.current().currentId, status:1, trash: 0}).fetch();
	}
});