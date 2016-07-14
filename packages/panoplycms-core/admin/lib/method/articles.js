Meteor.methods({
	addArticles: function(title,aliasname,category,tags,article,metaKeyword,metaDescription){
		let tagsArrayIds=[];
		_.each(tags,function(tag){
			let tagExist=PanoplyCMSCollections.Tags.findOne({title:tag});
			if(_.isEmpty(tagExist)){
				id = PanoplyCMSCollections.Tags.insert({
					title:tag,
					alias:tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
					desc:'',
					metaKeyword:'',
					metaDescription:'',
					createdAt: new Date(),
					updateAt: '',
		      status:1,
					owner: '',
			    username: ''
			  });
				tagsArrayIds.push(id)
				
			}else{
				tagsArrayIds.push(tagExist._id)
			}	
		})
		return PanoplyCMSCollections.Articles.insert({
			title:title,
			alias: aliasname,
			category:category,
			tags:tagsArrayIds,
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
		let tagsArrayIds=[];
		_.each(tags,function(tag){
			let tagExist=PanoplyCMSCollections.Tags.findOne({title:tag});
			if(_.isEmpty(tagExist)){
				id = PanoplyCMSCollections.Tags.insert({
					title:tag,
					alias:tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
					desc:'',
					metaKeyword:'',
					metaDescription:'',
					createdAt: new Date(),
					updateAt: '',
		      status:1,
					owner: '',
			    username: ''
			  });
				tagsArrayIds.push(id)
				
			}else{
				tagsArrayIds.push(tagExist._id)
			}	
		})
		return PanoplyCMSCollections.Articles.update({_id:id},{$set:{
			title:title,
			alias:alias,
			category:category,
			tags:tagsArrayIds,
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