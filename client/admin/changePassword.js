Template.changePassword.events({
  'submit form': function(event){
    event.preventDefault();
    var old_password = $('[name=oldpassword]').val();
    var new_password = $('[name=newpassword]').val();
    var con_password = $('[name=conpassword]').val();
    if(new_password==con_password && new_password && con_password){
        $('#confirm').removeClass('has-error');
         Accounts.changePassword(old_password, new_password, function(error){
            if(error){
                 $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                   
                Router.go('/admin/');
            }else{
               $("#notification").html('<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Successfully</strong> change password.</div>');    
              $("form")[0].reset();
              Router.go('/admin/signin');
            }
        });
    }else{
         $('#confirm').addClass('has-error');
    }
    
  }

}); 