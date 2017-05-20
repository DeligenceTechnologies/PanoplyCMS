//Meteor.subscribe('tags')
if(Meteor.isServer) {
	Meteor.methods({
		addTag: function(data){
			return PanoplyCMSCollections.Tags.insert({
				title: data.title,
				alias: data.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
				desc: data.desc,
				metaKeyword: data.metaKeyword,
				metaDescription: data.metaDesc,
				createdAt: new Date(),
				updateAt: '',
				status:1,
				/*trash:false,*/
				ownerId: Meteor.userId(),
			})
		},
		deleteTag:function(id){
			PanoplyCMSCollections.Tags.remove({_id:id});
		},
		editTag:function(id, data){
			return PanoplyCMSCollections.Tags.update({_id:id},{$set:{
				title: data.title,
				alias: data.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
				desc: data.desc,
				metaKeyword: data.metaKeyword,
				metaDescription: data.metaDesc,
				updateAt: new Date(),
				status: 1,
				ownerId: Meteor.userId()
			}})
		},
		addTagExt:function(tag){
			let tagExist = PanoplyCMSCollections.Tags.find({title:tag}).count();
			if(tagExist == 0){
				return PanoplyCMSCollections.Tags.insert({
					title: tag,
					alias: tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
					desc: '',
					metaKeyword: '',
					metaDescription: '',
					createdAt: new Date(),
					updateAt: '',
					status: 1,
					/*trash:false,*/
					owner: '',
					username: ''
				});
			}
		}
	})
}