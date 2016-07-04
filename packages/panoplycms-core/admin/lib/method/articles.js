Meteor.methods({
	addArticles: function(title,aliasname,category,tags,article,metaKeyword,metaDescription){
		return PanoplyCMSCollections.Articles.insert({
			title:title,
			alias: aliasname,
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
		
	},
	restoreArticles:function(id){
		PanoplyCMSCollections.Articles.update({_id:id},{$set:{ trash:false}})
	},
	deleteArticleParma:function(id){
		PanoplyCMSCollections.Articles.remove({_id:id})
	}
})