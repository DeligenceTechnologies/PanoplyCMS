Template.addCategory.events({
    'submit form': function(event){
        event.preventDefault();
        var menu = $('[name=title]').val();
        var alias = ($('[name=alias]').val())?$('[name=alias]').val():createAlias(menu);
        if(menu && alias){
            Meteor.call('add_category',menu,alias,function(err,data){
                if(err){
                     $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Alias are already exist.</div>');
                    
                }else{
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Saved Category.</div>');
                    $("form")[0].reset();
                }
            });
           
        }
    }
});