Template.listMenu.rendered= function(){
  setTimeout(activeli,1000);
 }
Template.listMenu.events({
  'click #delete_menu':function(event,template){
    event.preventDefault();
    if (confirm("Do You Want To Delete!") == true) {
      Meteor.call('delete_menu',this._id);
    }
  },

  'click #edit_menu':function(event){
    event.preventDefault();
     Router.go('edit_menu', {_id:event.target.id});
  },
  'click .panel-footer>ul.pagination li':function(event){
      event.preventDefault();
      Router.go('menuPage', { page:parseInt(event.currentTarget.id)});
      $('.panel-footer>ul.pagination li').removeClass('active');
      $('#'+event.currentTarget.id).addClass('active');
  } 

});

Template.listMenu.helpers({
    list_of_category: function () {
      
      return category.find({status:1,trash:0});
    },
    list_of_menu: function () {
      elements = menus.find({status:1,trash:0}).fetch();
      length= Router.current().url.split('/').length;
      if(Router.current().url.split('/')[length-1]!=undefined){ 
            var x=Router.current().url.split('/')[length-1];
            var x=(x-1)*10;
             elements = menus.find({status:1,trash:0},{skip:x,limit:10}).fetch();
        }else{
              elements = menus.find({status:1,trash:0},{skip:0,limit:10}).fetch();
        }

      var menu = new Array();

      function getElements(parent_id){
       if(parent_id){
        return getChild(parent_id);
       } else {
        
        var element = new Array();
        elements.forEach(function (elem1) {
           var child = getChild(elem1._id);
           if( !_.size(elem1.parent)){
              element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, menuItem: elem1.menuItem, child: child });
           } 
          
        });
      
        return element;
       }   
      }

      function getChild(parent_id){
       var child = new Array();
       elements.forEach(function (elem2) {
        
        if(elem2.parent){
          if(parent_id== elem2.parent.id){
            child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, menuItem: elem2.menuItem, child: getElements(elem2._id) });
          }
        }
       });
       return child;
      }

      return getElements();
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
UI.registerHelper('paginationStyleMenu', function(){
    
  var total=menus.find({status:1,trash:0}).count()/10;
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

