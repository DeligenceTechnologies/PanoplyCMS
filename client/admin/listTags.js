Template.listTags.rendered= function(){
  setTimeout(activeli,1000);
 }
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
    },
    'click #cancel':function(event){
        if (confirm("Do You Want To Cancel!") == true) {
            $('#editable').hide();
        $('#non-editable').show();
        } else { 
        }

     },
     'click .panel-footer>ul.pagination li':function(event){
        event.preventDefault();
        Router.go('tagsPage', { page:parseInt(event.currentTarget.id)});
        $('.panel-footer>ul.pagination li').removeClass('active');
        $('#'+event.currentTarget.id).addClass('active');
    }         
         
});
Template.listTags.helpers({
  list_of_tags: function () {
    length= Router.current().url.split('/').length;
     if(Router.current().url.split('/')[length-1]!=undefined){
            var x=Router.current().url.split('/')[length-1];
            var x=(x-1)*10;
            return tags.find({status:1,trash:0},{skip:x,limit:10}).fetch();
        }else{
             return tags.find({status:1,trash:0},{skip:0,limit:10}).fetch();
        }
    },
    list_of_articles: function () {
      return articles.find({status:1,trash:0});
    }
});
function activeli(){ 
  length= Router.current().url.split('/').length;
  page = Router.current().url.split('/')[length-1];
  $('#'+Router.current().url.split('/')[length-1]).addClass('active');
  $('[data-toggle="tooltip"]').tooltip();
}

UI.registerHelper('paginationStyleTag', function(){  
  var total=tags.find({status:1,trash:0}).count()/10;
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

