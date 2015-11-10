Template.adminProfile.events({
	'submit form': function(event){
    event.preventDefault();
    var fullname = $('[name=fullname]').val();
    var email = $('[name=email]').val();
    Meteor.call('update_user',fullname,email,function(err){
      if(err){
          Router.go('/admin/');
      }else{
        Session.set('name',Meteor.username());
        Router.go('/admin/signin');
      }
   });
  }
});	

Template.adminProfile.helpers({
  admin_email:function(){
    return Meteor.user().emails.address;
  },
  admin_username:function(){
    return Meteor.user().username;
  }
});  