Template.addHtmlblocks.rendered= function(){
   setTimeout(show_editor_of_htmlblocks,1000);    
}
Template.addHtmlblocks.events({
  'submit form': function(event){
       event.preventDefault();
       var sub_menus=new Array();
       var title=$('#title').val();
       var html_block=$('textarea').val();
        var position=$("#select_position option:selected").val();
        $.each($("input[name='checkbox']:checked"), function(){            
            sub_menus.push($(this).val());
        });
       if(html_block && position && sub_menus[0]){ 
            Meteor.call('add_htmlblocks',title,html_block,position,sub_menus,function(err,data){
              if(err){
                 $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Htmlblocks not saved.</div>');
                    
              }else{
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Saved Htmlblocks.</div>');
                    $("input[name='checkbox']").attr('checked', false);
                    $("form")[0].reset();
                    CKEDITOR.instances.editor1.setData("") 
              }
            });
          
       }else if(position==''){
          $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Option is not a position.</div>');

       }else if(html_block==''){
          $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Please fill Html field.</div>');

       }else{
          $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> Please check the menu.</div>');

       }
  }
  
 }); 
Template.addHtmlblocks.helpers({
  list_of_htmlblocks: function () {
      return htmlblocks.find();
    },
    list_of_menus_of_category: function () {
      return menus.find({trash:0});
    }
});
function show_editor_of_htmlblocks(){
  CKEDITOR.replace( 'editor1' );  
}