Template.listHtmlblocks.events({
  
  'click #delete_htmlblocks':function(event){
        event.preventDefault();
         if (confirm("Do You Want To Delete!") == true) {
            Meteor.call('delete_htmlblocks',this._id);
        } else {
            
        }
        
  },
  'click #edit_htmlblocks':function(event){
      event.preventDefault();
       Router.go('edit_htmlblocks', {_id:this._id });
      /*$("#editable").attr("class",this._id );
      $('#editable').show();
      $('#non-editable').hide();
      var i=0;
      $("#select_position_update option:selected").text(this.position);
      $('#summernotediv .note-editable.panel-body').html(this.html);
      var menu=this.menu.split(',');
      for(i=0;i<menu.length;i++){
        $('#'+menu[i]).prop('checked', true);
      }*/
  },
  'click #update':function(){
    var sub_menus=[];
   var position=$("#select_position_update option:selected").text(); 
   var html=$('#summernotediv .note-editable.panel-body').html();
    $.each($("input[name='checkbox_update']:checked"), function(){            

                sub_menus.push($(this).val());

    });
    if(position && html && sub_menus){
      Meteor.call('update_htmlblocks',$("#editable").attr("class"),html,position,sub_menus.join(","));
      Router.go('/admin/htmlblocks');
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

Template.listHtmlblocks.helpers({
  list_of_htmlblocks: function () {
      return htmlblocks.find({status:1,trash:0});
    },
    list_of_menus_of_category: function () {
      return menus.find({status:1,trash:0});
    }
});

/*UI.registerHelper('set_home', function(val){
  console.log(val);
  if(val==''){
    return '';
  }else{
    return val;
  }
  
});*/