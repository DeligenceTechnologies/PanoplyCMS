Sidebar = new Meteor.Collection('sidebar');
AdminSidebarMenu = new Meteor.Collection('adminSidebarMenu');
//Site = new Meteor.Collection('site');

Meteor.methods({
	sidebarData: function(parent,child){
		return Sidebar.insert({
			parent: parent,
			children: [{childName:child1,className:'',path:''}],
			icon:className	
		})
	}
})