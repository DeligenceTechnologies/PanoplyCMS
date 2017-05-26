if(Meteor.isServer) {
	Meteor.methods({
		addArticles: function(data){
			let tagsArrayIds=[];
			_.each(data.tags,function(tag){
				let tagExist = PanoplyCMSCollections.Tags.findOne({ title: tag });
				if(_.isEmpty(tagExist)){
					id = PanoplyCMSCollections.Tags.insert({
						title: tag,
						alias: tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
						desc: '',
						metaKeyword: '',
						metaDescription: '',
						createdAt: new Date(),
						updateAt: '',
						status: 1,
						ownerId: Meteor.userId()
					});
					tagsArrayIds.push(id)
				}else{
					tagsArrayIds.push(tagExist._id)
				}
			})
			return PanoplyCMSCollections.Articles.insert({
				title: data.title,
				alias: data.alias,
				category: data.category,
				tags: tagsArrayIds,
				article: data.article,
				metaKeyword: data.metaKeyword,
				metaDescription: data.metaDescription,
				createdAt: new Date(),
				updateAt: '',
				status: 1,
				trash: false,
				ownerId: Meteor.userId()
			})
		},
		deleteArticle:function(id){
			PanoplyCMSCollections.Articles.update({_id:id},{$set:{trash:true}});
		},
		editArticle:function(articleId, data){
			let tagsArrayIds=[];
			_.each(data.tags,function(tag){
				let tagExist=PanoplyCMSCollections.Tags.findOne({title: tag});
				if(_.isEmpty(tagExist)){
					id = PanoplyCMSCollections.Tags.insert({
						title: tag,
						alias: tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
						desc:'',
						metaKeyword:'',
						metaDescription:'',
						createdAt: new Date(),
						updateAt: '',
						status:1,
						ownerId: Meteor.userId()
					});
					tagsArrayIds.push(id)
				}else{
					tagsArrayIds.push(tagExist._id)
				}
			})
			return PanoplyCMSCollections.Articles.update({_id: articleId},{$set:{
				title: data.title,
				alias: data.alias,
				category: data.category,
				tags: tagsArrayIds,
				article: data.article,
				metaKeyword: data.metaKeyword,
				metaDescription: data.metaDescription,
				updateAt: new Date(),
				status:1,
				trash:false,
				ownerId: Meteor.userId()
			}})
		},
		restoreArticles:function(id){
			PanoplyCMSCollections.Articles.update({_id:id},{$set:{ trash:false}})
		},
		deleteArticleParma:function(id){
			PanoplyCMSCollections.Articles.remove({_id:id})
		}
	})
}