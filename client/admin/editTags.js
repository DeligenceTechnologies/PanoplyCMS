Template.editTags.helpers({
  list_of_category: function () {
      return category.find();
    },
  selected_tags: function () {
    var id= Router.current().params._id;
    console.log(tags.find(id).fetch(),'tags.find(id).fetch()');
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
        var custom_alias=alias;
        if(!alias){
            tag=$('#tag').val();
            console.log('tag',tag);
            custom_alias=tag.replace(/\s+/g, '-').toLowerCase();
            console.log('custom_alias');


        }
        var meta_keyword=$('#key').val();
        console.log(tag,alias,desc,meta_keyword,meta_desc);
        if(desc && meta_desc && tag && meta_keyword ){
            console.log(tag,alias,meta_keyword,desc,meta_desc);
            Meteor.call('add_tags',tag,custom_alias,desc,meta_keyword,meta_desc,function(err,data){
                if(err && alias ){
                    bootbox.alert("Alias is Already exist.", function() {
                        console.log("Alert Callback");
                    });
                }else{
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Success!</strong> Tags Updated Succesfully.</div>');
                                           
                }
            });
            $('[name=title]').val('');
            $('[name=alias]').val('');
            $("form").serialize('');
        }else{
           console.log('error');
        }
        
        //alert('Succesfully inserted');

    }
  
});