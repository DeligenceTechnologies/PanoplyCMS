Template.changePassword.events({
  'submit form': function(event){
    event.preventDefault();
    var old_password = $('[name=oldpassword]').val();
    var new_password = $('[name=newpassword]').val();
    Accounts.changePassword(old_password, new_password, function(error){
      if(error){
          Router.go('/admin/');
      }else{
        Session.set('name',Meteor.username());
        Router.go('/admin/signin');
      }
    });
  }
}); 