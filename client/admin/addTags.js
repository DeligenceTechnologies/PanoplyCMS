Template.addTags.events({
    'submit form': function(event){
        event.preventDefault();
        var form_data=($("form").serialize()).split('&');
        var desc=$('textarea#desc').val();
        var meta_desc= $('textarea#meta_desc').val();
        var tag =form_data[0].split('=')[1];
        var alias=form_data[1].split('=')[1];
        var meta_keyword=form_data[2].split('=')[1];
        if(desc && meta_desc && tag && meta_keyword ){
            Meteor.call('add_tags',tag,custom_alias,desc,meta_keyword,meta_desc,function(err,data){
                if(err && alias ){
                    $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Alias are already exist.</div>');
                      $("form")[0].reset();
                }else {
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Saved Tags.</div>');
                    $("form")[0].reset();
                }
            });
        }
    }
}); 


Template.addTags.helpers({
  list_of_category: function () {
      return category.find({status:1,trash:0});
    },
    list_of_articles: function () {
      return articles.find({status:1,trash:0});
    }
});