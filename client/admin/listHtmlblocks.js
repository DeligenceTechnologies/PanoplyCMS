Template.listHtmlblocks.rendered= function(){
  setTimeout(activeli,1000);
 }
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
  }
 },
  'click .panel-footer>ul.pagination li':function(event){
        event.preventDefault();

        Router.go('htmlblocksPage', { page:parseInt(event.currentTarget.id)});
        $('.panel-footer>ul.pagination li').removeClass('active');
        $('#'+event.currentTarget.id).addClass('active');
 }    
  
     
});

Template.listHtmlblocks.helpers({
  list_of_htmlblocks: function () {
      length= Router.current().url.split('/').length;
      if(Router.current().url.split('/')[length-1]!=undefined){ 
            var x=Router.current().url.split('/')[length-1];
            var x=(x-1)*10;
            return htmlblocks.find({status:1,trash:0},{skip:x,limit:10}).fetch();
        }else{
             return htmlblocks.find({status:1,trash:0},{skip:0,limit:10}).fetch();
        }
    },
    list_of_menus_of_category: function () {
      return menus.find({status:1,trash:0});
    }
});

function activeli(){ 
  length= Router.current().url.split('/').length;
  page = Router.current().url.split('/')[length-1];
  $('#'+Router.current().url.split('/')[length-1]).addClass('active');
   $('[data-toggle="tooltip"]').tooltip();
}

UI.registerHelper('paginationStyleHtmlblock', function(){  
  var total=htmlblocks.find({status:1,trash:0}).count()/10;
  var html='';
  if(total<10 && total>1 ){ 
    for(var i=1;i<=Math.ceil(total);i++){
        html=html+"<li id="+i+"><a href='#' >"+i+"</a></li>";
    }
   return Spacebars.SafeString(html);
  }else{
     return Spacebars.SafeString(html);
  }
});
