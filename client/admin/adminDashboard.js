Template.adminDashboard.helpers({
    name: function(){
		var name=Meteor.user().username;
		return name;
	}
});