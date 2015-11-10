Template.addHtmlblocks.rendered= function(){
   setTimeout(show_editor_of_htmlblocks,1000);    
}
Template.addHtmlblocks.events({
  'submit form': function(event){
       event.preventDefault();
       var sub_menus=new Array();
       var html_block=$('textarea').val();
        var position=$("#select_position option:selected").val();
        $.each($("input[name='checkbox']:checked"), function(){            
            sub_menus.push($(this).val());
        });
       if(html_block && position && sub_menus){
            Meteor.call('add_htmlblocks',html_block,position,sub_menus,function(err,data){
              if(err){
                 $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                    
              }else{
                    $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> Saved Htmlblocks.</div>');
                     $('textarea#editor1').val('');
                    $("input[name='checkbox']").attr('checked', false);
                    $("form")[0].reset();
              }
            });
            //alert("My favourite sports are: " + favorite.join(", "));
       }else{
         
       }
  }
  
 }); 
Template.addHtmlblocks.helpers({
  list_of_htmlblocks: function () {
      return htmlblocks.find();
    },
    list_of_menus_of_category: function () {
      return menus.find();
    }
});
function show_editor_of_htmlblocks(){
  CKEDITOR.replace( 'editor1' );  
}