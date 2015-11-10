Template.adminMenu.helpers({
	name: function(){
		var name=Meteor.user().username;
		return name;
	},
	project_name:function(){
		console.log(settings.find().fetch(),'settings.find().fetch();');
		return settings.find().fetch();
	}
});

Template.adminMenu.events({
    'click .logout': function(event){
    	event.preventDefault();
    	Meteor.logout();
    	Router.go('/admin/');
    }
});