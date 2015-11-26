Template.editHtmlblocks.rendered= function(){
	 setTimeout(show_editor_of_htmlblocks,1000);    
}
Template.editHtmlblocks.events({
    'submit form': function(event){
       event.preventDefault();
       var sub_menus=[];
       var title=$('#title').val();
       var html_block=$('textarea').val();
       var position=$("#select_position option:selected").val();
        $.each($("input[name='checkbox']:checked"), function(){ 
          if($(this).val()=='on') 
            sub_menus.push('');
          else
            sub_menus.push($(this).val());
        });
  
      if( title && html_block && position &&  sub_menus[0]){
        Meteor.call('update_htmlblocks',Router.current().params._id,title,html_block,position,sub_menus,function(err){
          if(err){
               $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Alias are already exist.</div>');
                                      
          }else{
            $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully</strong> Updated htmlblocks.</div>');                                  
          }

        });
     }else if(html_block==''){
          $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Please fill Html field.</div>');

       }else{
          $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Please check the menu.</div>');

       }
      
           
       }
  
});
Template.editHtmlblocks.helpers({
  selected_htmlblocks:function(){
     var id= Router.current().params._id;
    return htmlblocks.find(id).fetch();

  },
    list_of_menus_of_category: function () {
      return menus.find({trash:0,status:1});
    }
});  

function show_editor_of_htmlblocks(){
  CKEDITOR.replace( 'editor1' );  
}

UI.registerHelper('set_selected', function(pos,optionval){
  if(pos==optionval){
    return true;
  }else{
    return false;
  }

});

UI.registerHelper('set_checked', function(val){
  var id= Router.current().params._id;
  var obj=htmlblocks.find(id).fetch();
  var str=obj[0].menu;
 for(var i=0;i<str.length;i++){
    console.log(str[i],'==',val);
    if(str[i]==val ||val=='' ){
    return true;
    }
  }
  return false;
});