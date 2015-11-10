Template.listMenu.events({
  'click #delete_menu':function(event,template){
    event.preventDefault();
    if (confirm("Do You Want To Delete!") == true) {
      Meteor.call('delete_menu',this._id);
    }
  },

  'click #edit_menu':function(event){
    event.preventDefault();
     Router.go('edit_menu', {_id:this._id });
   /* $('#editable').show();
    $('#non-editable').hide();
    $('#t').val(this.title);
    $('#a').val(this.alias);
    $("#editable").attr("class",this._id );
    var item = ((this.menuItem.id).split('(')[1]).split(')')[0];
    $( "#myselect_type option:selected" ).text(this.menuItem.type);
    if(this.menuItem.type=='Articles'){
      $("#myselectarticles option[value='"+item+"']").prop("selected", true);
      $("#myselectarticles").show();
      $("#myselectcategory").hide();
    }else{
      $("#myselectcategory option[value='"+item+"']").prop("selected", true);
      $("#myselectarticles").hide();
      $("#myselectcategory").show();
    }*/
  },

  'click #update':function(event){
    event.preventDefault();
    var name=$('#t').val();
    var alias=$('#a').val();
    var menuItem=$( "#myselect_type option:selected" ).text();
    if(name && alias && menuItem ){
      if(menuItem=='Articles'){
        var id_of_menu_item_sub_type=$( "#myselectarticles option:selected" ).val();
      }else{
        var id_of_menu_sub_item_type=$( "#myselectcategory option:selected" ).val();
      }

      if(name==''|| alias=='' ){
        alert('please fill the value');
      }else{
        Meteor.call('update_menu',$("#editable").attr("class"),name,alias,menuItem,id_of_menu_item_sub_type);
        alert('Succesfully updated');
        Router.go('/admin/menu');
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

Template.listMenu.helpers({
    list_of_category: function () {
      
      return category.find({status:1,trash:0});
    },
    list_of_menu: function () {
      return menus.find({status:1,trash:0});
    },
    list_of_articles: function () {
      
      return articles.find({status:1,trash:0});
    }
  });
