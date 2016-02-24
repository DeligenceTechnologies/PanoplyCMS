Meteor.methods({
delete_category: function(id){
	console.log(id,'--->')
	    Categories.update({_id:id},{$set:{trash:1}});
},
update_category: function(id,categoryname,aliasname){
	    Categories.update({_id:id}, {
			$set: {
				name:categoryname,
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
            trash:0,
			owner: '',
	      	username: ''
		});
}

});