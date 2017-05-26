if(Meteor.isServer) {
	Meteor.methods({
		delete_category: function(id){
			PanoplyCMSCollections.Categories.update({ _id: id },{ $set:{ trash:true } });
		},
		update_category: function(id, data){
		  return PanoplyCMSCollections.Categories.update({ _id: id }, {
				$set: {
					title: data.title,
					alias: data.alias,
		    	column:data.column,
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
			    column:data.column,
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