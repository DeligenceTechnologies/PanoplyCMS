Template.signin.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error, success){
      if(error){
        Router.go('/admin/');
      }else{
        Session.set('name',email);
        Router.go('/admin/');
      }
    });
  }
});
