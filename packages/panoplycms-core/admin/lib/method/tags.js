//Meteor.subscribe('tags')
Meteor.methods({
	addTag: function(title,desc,metaKeyword,metaDesc){
		return PanoplyCMSCollections.Tags.insert({
			title:title,
			alias:title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
			desc:desc,
			metaKeyword:metaKeyword,
			metaDescription:metaDesc,
			createdAt: new Date(),
			updateAt: '',
      status:1,
      /*trash:false,*/
			owner: '',
	    username: ''

		})
	},
	deleteTag:function(id){
		PanoplyCMSCollections.Tags.remove({_id:id});
	},
	editTag:function(id,title,desc,metaKeyword,metaDesc){
		return PanoplyCMSCollections.Tags.update({_id:id},{$set:{
			title:title,
			alias:title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
			desc:desc,
			metaKeyword:metaKeyword,
			metaDescription:metaDesc,
			updateAt:new Date(),
      status:1,
			owner: '',
	    username: ''

		}})
		
	},
	addTagExt:function(tag){
		let tagExist=PanoplyCMSCollections.Tags.find({title:tag}).count();
		if(tagExist==0){
			PanoplyCMSCollections.Tags.insert({
			title:tag,
			alias:tag.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
			desc:'',
			metaKeyword:'',
			metaDescription:'',
			createdAt: new Date(),
			updateAt: '',
      status:1,
      /*trash:false,*/
			owner: '',
	    username: ''});
		}
		
	}
})


