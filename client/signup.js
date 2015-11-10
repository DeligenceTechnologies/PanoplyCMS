Template.signin.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser(email, password, function(error){
      if(error){
        Router.go('/admin/');
      }else{
        Session.set('name',email);
        Router.go('/admin/signin');
      }
    });
  }
});
