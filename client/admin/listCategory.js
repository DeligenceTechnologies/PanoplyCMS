Template.listCategory.rendered= function(){
  setTimeout(activeli,1000);
 }
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
    },
    'click .panel-footer>ul.pagination li':function(event){
        event.preventDefault();
        $('.panel-footer>ul.pagination li').removeClass('active');
        $('#'+event.currentTarget.id).addClass('active');
        Router.go('categoryPage', { page:parseInt(event.currentTarget.id)});
    }      
});

Template.listCategory.helpers({
    list_of_category: function () { 
        length= Router.current().url.split('/').length;
        if(Router.current().url.split('/')[length-1]!=undefined){ 
            var x=Router.current().url.split('/')[length-1];
            var x=(x-1)*10;
            return category.find({status:1,trash:0},{skip:x,limit:10}).fetch();
        }else{
             return category.find({status:1,trash:0},{skip:0,limit:10}).fetch();
        }
    },
    edit_of_category: function () {
      return category.find(this._id);
    }
});
function activeli(){ 
  length= Router.current().url.split('/').length;
  page = Router.current().url.split('/')[length-1];
  $('#'+Router.current().url.split('/')[length-1]).addClass('active');
  $('[data-toggle="tooltip"]').tooltip();
}

UI.registerHelper('paginationStyleCategory', function(){
  var total=category.find({status:1,trash:0}).count()/10;
  var html='';
   if(total<10 && total>1){ 
    for(var i=1;i<=Math.ceil(total);i++){
        html=html+"<li id="+i+"><a href='#' >"+i+"</a></li>";
    }
   return Spacebars.SafeString(html);
  }else{
     return Spacebars.SafeString(html);
  }
});