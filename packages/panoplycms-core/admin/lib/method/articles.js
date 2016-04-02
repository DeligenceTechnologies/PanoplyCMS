Meteor.methods({
	addArticles: function(title,category,tags,article,metaKeyword,metaDescription){
		return PanoplyCMSCollections.Articles.insert({
			title:title,
			category:category,
			tags:tags,
			article:article,
			metaKeyword:metaKeyword,
			metaDescription:metaDescription,
			createdAt: new Date(),
			updateAt: '',
            status:1,
            trash:false,
			owner: '',
	      	username: ''

		})
	},
	deleteArticle:function(id){
		PanoplyCMSCollections.Articles.update({_id:id},{$set:{trash:true}});
	},
	editArticle:function(id,title,alias,category,tags,article,metaKeyword,metaDescription){
		return PanoplyCMSCollections.Articles.update({_id:id},{$set:{
			title:title,
			alias:alias,
			category:category,
			tags:tags,
			article:article,
			metaKeyword:metaKeyword,
			metaDescription:metaDescription,
			updateAt: new Date(),
            status:1,
            trash:false,
			owner: '',
	      	username: ''

		}})
		
	}
})