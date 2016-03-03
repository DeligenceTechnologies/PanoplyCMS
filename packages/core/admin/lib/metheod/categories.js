Meteor.methods({
delete_category: function(id){
	
	    Categories.update({_id:id},{$set:{trash:true}});
},
update_category: function(id,categoryname,aliasname){
	    Categories.update({_id:id}, {
			$set: {
				title:categoryname,
				alias:aliasname,
				updateAt:new Date()
			}
		});
},
add_category: function(categoryname,aliasname){ console.log('add_category',categoryname,aliasname);
	    return Categories.insert({
			title: categoryname,
			alias: aliasname,
			createdAt: new Date(),
			updateAt: '',
            status:1,
            trash:false,
			owner: '',
	      	username: ''
		});
}

});