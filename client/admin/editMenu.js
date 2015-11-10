Template.editMenu.events({ 
    'submit form': function(event){
        event.preventDefault();
        var menu = $('[name=title]').val();
        var alias = ($('[name=alias]').val())?$('[name=alias]').val():createAlias(menu);
        var parent_id='';
        if(menu && alias){
            var menu_Item_type=$( "#myselect option:selected" ).text();
            if(menu_Item_type=='Articles'){
                Meteor.call('find_article');
                var menu_Item_sub_type=$( "#myselect_articles option:selected" ).val();
            }else if(menu_Item_type=='Categories'){
              Meteor.call('find_category');
              var menu_Item_sub_type=$( "#myselect_category option:selected" ).val();
            }
            if($( "#parent_select option:selected" ).val()=='Root Level'){
                parent_id='';
                Meteor.call('update_menu',Router.current().params._id,menu,alias,menu_Item_type,menu_Item_sub_type,function(err,data){
                    if(err){
                        $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                    
                    }else{
                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> update menu.</div>');
                   
                    }
                });
            }else{
                Meteor.call('update_menu',Router.current().params._id,menu,alias,menu_Item_type,menu_Item_sub_type,$( "#parent_select option:selected" ).val(),function(err,data){
                    if(err){
                        $("#notification").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Error!</strong> '+err+'.</div>');
                    
                    }else{
                        $("#notification").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Succesfully!</strong> update menu.</div>');
                   
                    }
                });
                
            }
            //Meteor.call('add_menu',menu,alias,menu_Item_type,menu_Item_sub_type);
            
        }
        
        //alert('Succesfully inserted');

    },
    'click .article_category':function(event){
        var menu_Item_type=$( "#myselect option:selected" ).text();
        
        if(menu_Item_type=='Articles'){
            Meteor.call('find_article');
            $('#myselect_articles').show();
            $('#myselect_category').hide();
        }else if(menu_Item_type=='Categories'){
            Meteor.call('find_category');
           $('#myselect_category').show();
           $('#myselect_articles').hide();
        }
    }
  });  

Template.editMenu.helpers({
    list_of_category: function () {
     
      return category.find({status:1,trash:0});
    },
    list_of_menu: function () {
      
      return menus.find({status:1,trash:0}).fetch();
    },
    list_of_articles: function () {
      
      return articles.find({status:1,trash:0}).fetch();
    },
    selected_menu: function () {
        var id= Router.current().params._id;
        console.log(menus.find(id).fetch());
        return menus.find(id).fetch();
    },
    menus: function(){
      var elements = menus.find({status:1,trash:0}).fetch();
      var menu = new Array();

      function getElements(parent_id){
       if(parent_id){
        return getChild(parent_id);
       } else {
        
        var element = new Array();
        elements.forEach(function (elem1) {
           var child = getChild(elem1._id);
           if( !_.size(elem1.parent)){
              element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, child: child });
           } 
          
        });
        //console.log(element,'element');
        return element;
       }   
      }

      function getChild(parent_id){
       var child = new Array();
       elements.forEach(function (elem2) {
        
        if(elem2.parent){
         if(parent_id== elem2.parent.id){
          child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, child: getElements(elem2._id) });
         }
        }
       });
       return child;
      }
      return getElements();
    }
}); 
Handlebars.registerHelper('testHelper', function(menus,parent){
  function getElem(submenu, alias){
      var list='';
      var index=0;

      if(submenu && alias){
        var menuArr = submenu;
      } else {
         var menuArr = menus;
         
      }
      menuArr.forEach(function (menu) {
        if(menu._id==parent.id){
            list += '<option selected=true >';
        }else{
           list += '<option selected=false >'; 
        }
         if(submenu){
          list += '--';
         }
         list += ' ' + menu.title + '</option>';
         if(menu.child){
            list += getElem(menu.child, menu.alias, index);
         }
         index++;
        });
        return list;
    }
     
   var list = getElem();
   return Spacebars.SafeString(list);
});   

Handlebars.registerHelper('parent_select', function(obj){
   /* var id= Router.current().params._id;
    var db_obj= menus.find(id).fetch();
    if(db_obj[0].menuItem.type==obj){
        return 'block';
    }else{
       return 'none'; 
  }*/
});
Handlebars.registerHelper('menuItemType', function(obj){
     var id= Router.current().params._id;
    var db_obj= menus.find(id).fetch();
    if(db_obj[0].menuItem.type==obj){
        return true;
    }else{
        if(db_obj[0].menuItem.id==obj){
            return true;
        }
  }
    return false;
    
});

Handlebars.registerHelper('menuItemSubType', function(obj){
    var id= Router.current().params._id;
    var db_obj= menus.find(id).fetch();
    if(db_obj[0].menuItem.type==obj){
        return 'block';
    }else{
       return 'none'; 
    }
})