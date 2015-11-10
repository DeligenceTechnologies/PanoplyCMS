Template.listCategory.events({ 
    'click #delete_category':function(event,template){
        event.preventDefault();
         if (confirm("Do You Want To Delete!") == true) {
            Meteor.call('delete_category',this._id);
        } else {
            
        }
    },
    'click #edit_category':function(event){
         event.preventDefault();
        Router.go('edit_category', {_id:this._id });
       /* $('#editable').show();
        $('#non-editable').hide();
        $('#t').val(this.name);
        $('#a').val(this.alias);
        $("#editable").attr("class",this._id );*/
    },
    'click #update':function(event){
        event.preventDefault();
        var name=$('#t').val();
        var alias=$('#a').val();
        if(name==''|| alias=='' ){
           bootbox.alert("Please fill all the field.", function() {
                console.log("Alert Callback");
            });
        }else{
            Meteor.call('update_category',$("#editable").attr("class"),name,alias);
            alert('Succesfully updated');
            //Router.go('/admin/category');
            $('#editable').hide();
            $('#non-editable').show();
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

Template.listCategory.helpers({
    list_of_category: function () { console.log(category.find().fetch(),'category.find().fetch() category.find().fetch()');
      return category.find({status:1,trash:0}).fetch();
    },
    edit_of_category: function () {
      return category.find(this._id);
    }
});