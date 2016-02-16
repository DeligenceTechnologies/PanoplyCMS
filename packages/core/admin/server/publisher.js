Meteor.publish('sidebar', function(){
	// console.log(AdminSidebarMenu.find({}).fetch());
	return AdminSidebarMenu.find({});
});
Meteor.publish('siteName', function(){
	// console.log(Sites.find({}).fetch());
	return Sites.find({});
});
Meteor.publish('moduleList', function(){
	// console.log(Modules.find({}).fetch());
	return Modules.find({});
});
Meteor.publish('findAModule', function(id){
	//console.log(Categories.find({_id:id}).fetch(),'*****>');
	return Modules.find({_id:id});
});
