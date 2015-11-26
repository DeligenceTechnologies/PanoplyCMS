Template.editTags.helpers({
  list_of_category: function () {
      return category.find();
    },
  selected_tags: function () {
    var id= Router.current().params._id;
    return tags.find(id).fetch();
    }
});

Template.editTags.events({
    'submit form': function(event){
        event.preventDefault();
        var desc=$('textarea#desc').val();
        var meta_desc= $('textarea#meta_desc').val();
        var tag =$('#tag').val();;
        var alias=$('#alias').val();;
        var meta_keyword=$('#key').val();
        console.log(tag,alias,desc,meta_keyword,meta_desc);
        if(desc && meta_desc && tag && meta_keyword ){
            console.log(tag,alias,meta_keyword,desc,meta_desc);
            Meteor.call('update_tags',Router.current().params._id,tag,alias,desc,meta_keyword,meta_desc,function(err,data){
                if(err){
                  $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Tags not saved.</div>');
                  
                }else{
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Success!</strong> Tags Updated Succesfully.</div>');
                    
                                           
                }
            });
            
        }
        
    }
  
});