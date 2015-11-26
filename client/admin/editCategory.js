
Template.editCategory.helpers({
    list_of_category: function () {
      return category.find();
    },
    edit_of_category: function () {
      return category.find(this._id);
    },
    selected_category:function(){
      var id= Router.current().params._id;
      category.find(this._id).fetch();
      return  category.find(id).fetch();
    }
  });

Template.editCategory.events({
    'submit form': function(event){
        event.preventDefault();
        var menu = $('[name=title]').val();
        var alias = ($('[name=alias]').val())?$('[name=alias]').val():createAlias(menu);
        Meteor.call('update_category', Router.current().params._id,menu,alias,function(err,data){
            if(err){
              $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Alias are already exist.</div>');
            }
             $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Updated Category.</div>');
                                    
         });
    }
 });   