Template.articlePage.helpers({
	article: function(){
		return articles.find({_id:Router.current().currentId, status:1, trash: 0}).fetch();
	},
	tagList: function(){
		tagsHTML = '';
		var index = 0;
		tagLength = _.compact(this.tags).length;
		_.compact(this.tags).forEach(function (tag) {
			if(tag){
				var newTag = tags.find({ _id: tag, status: 1 },{fields:{tag:1, alias:1}}).fetch();
				tagsHTML += '<span class="label label-default">' + newTag[0].tag + '</span> ';
			}
		});
		return Spacebars.SafeString(tagsHTML);
	}
});
