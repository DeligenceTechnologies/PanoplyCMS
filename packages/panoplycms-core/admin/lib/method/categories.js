if(Meteor.isServer) {
	Meteor.methods({
		delete_category: function(id){
			PanoplyCMSCollections.Categories.update({ _id: id },{ $set:{ trash:true } });
		},
		update_category: function(id, data){
		  PanoplyCMSCollections.Categories.update({ _id: id }, {
				$set: {
					title: data.title,
					alias: data.alias,
					updateAt: new Date()
				}
			});
		},
		add_category: function(data){
		  return PanoplyCMSCollections.Categories.insert({
				title: data.title,
				alias: data.alias,
				createdAt: new Date(),
				updateAt: '',
		    status:1,
		    trash:false,
				ownerId: Meteor.userId()
			});
		},
		restore_category:function(id){
			PanoplyCMSCollections.Categories.update({_id:id},{ $set:{ trash:false} })
		},
		delete_category_parma:function(id){
			PanoplyCMSCollections.Categories.remove({ _id:id })
		}
	});
}