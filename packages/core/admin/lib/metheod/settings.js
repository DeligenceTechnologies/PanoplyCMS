Meteor.methods({
	updateSiteName: function(id,name){
		console.log(id,name);
		return Sites.update({_id:id},{$set:{name:name}})
	},
	updateUserPhoto: function(userId,url) {
        if (userId) {

            //check(userId,String);
            //check(url,String);

            return Meteor.users.update({_id: userId}, {$set: {'profile.s3PictureUrl': url}});
        }
        else {
            throw new Meteor.Error(401,'Not logged in');
        }

    }
})