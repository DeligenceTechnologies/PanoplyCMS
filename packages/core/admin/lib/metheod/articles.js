Meteor.methods({
	addArticles: function(title,alias,category,tags,article,metaKeyword,metaDescription){
		return Articles.insert({
			title:title,
			alias:alias,
			category:category,
			tags:tags,
			article:article,
			metaKeyword:metaKeyword,
			metaDescription:metaDescription,
			createdAt: new Date(),
			updateAt: '',
            status:1,
            trash:0,
			owner: '',
	      	username: ''

		})
	},
	deleteArticle:function(id){
		Articles.remove({_id:id});
	},
	editArticle:function(id,title,alias,category,tags,article,metaKeyword,metaDescription){
		return Articles.update({_id:id},{$set:{
			title:title,
			alias:alias,
			category:category,
			tags:tags,
			article:article,
			metaKeyword:metaKeyword,
			metaDescription:metaDescription,
			updateAt: new Date(),
            status:1,
            trash:0,
			owner: '',
	      	username: ''

		}})
		
	}
})