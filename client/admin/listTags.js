Template.listTags.events({ 
  
    'click #delete_tags':function(event,template){
        event.preventDefault();
       /* if (confirm("Do You Want To Delete!") == true) {*/
            Meteor.call('delete_tags',this._id);
        /*} else {
            
        }*/        
    },
    'click #edit_tags':function(event){
        event.preventDefault();
         Router.go('edit_tags', {_id:this._id });
        /*$('#editable').show();
        $("#editable").attr("class",this._id );
        $('#non-editable').hide();
        $('#tag').val(this.tag);
        $('#alias').val(this.alias);
        $('#key').val(this.metaKeyword);
        $('textarea#desc').val(this.desc);
        $('textarea#meta_desc').val(this.metaDesc);
        $("#editable").attr("class",this._id );*/
     },
     'click #update':function(event){
        event.preventDefault();
        var tag=$('#tag').val();
        var alias=$('#alias').val();
        var meta_keyword=$('#key').val();
        var desc=$('textarea#desc').val();
        var meta_desc=$('textarea#meta_desc').val();
        if(tag && alias && meta_keyword && desc && meta_desc  ){
            if(tag==''|| alias=='' ){
              alert('please fill the value');
            }else{
                Meteor.call('update_tags',$("#editable").attr("class"),tag,alias,desc,meta_keyword,meta_desc);
                alert('Succesfully updated');
                Router.go('/admin/tags');
                $('#editable').hide();
                $('#non-editable').show();
            }
        }else{

        }       
    },
    'click #cancel':function(event){
        if (confirm("Do You Want To Cancel!") == true) {
            $('#editable').hide();
        $('#non-editable').show();
        } else { 
        }

     } 
         
});
Template.listTags.helpers({
  list_of_tags: function () {
      return tags.find({status:1,trash:0});
    },
    list_of_articles: function () {
      return articles.find({status:1,trash:0});
    }
});
