UI.registerHelper('listOfMenus', function(menus){
  level = 1;
  function getElem(submenu, alias){
    list='';

    if(submenu && alias){
      menuArr = submenu;
    } else {
      menuArr = menus;
      if(!menuArr.length)
        list = '<tr><td colspan="4"><div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>Warning !</strong> Menu Not Found! </div></td></tr>';
    }

    menuArr.forEach(function (menu) {
      list += '<tr id="'+menu._id+'">';
      list += '<td>';
      if(submenu){
        level++;
      }
      for(let i=1; i<level;i++){
        if(submenu){list += '|';} 
        list += '-- ';
      }
      list += ' <large>' + menu.title + '</large> <small> (<em>Alias:' + menu.alias + '</em>) </small></td>';
      list += '<td>' + menu.menuItem.type + '</td>';
      list += '<td id="delete_menu"><div  id="' + menu._id + '" class="delete_btn "><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> Delete</div></td>';
      list += '<td id="edit_menu"><div  class="edit_btn"  id="' + menu._id + '"> <i class="fa fa-pencil-square-o" id="' + menu._id + '" data-toggle="tooltip" title="Edit"></i> Edit</div></td>';
      
      list += '</tr>';
      if(menu.child){
        list += getElem(menu.child, menu.alias);
      }
      if(submenu) level--;
      else level=1; 
    });
    return list;
  }
     
  var list = getElem();
  return Spacebars.SafeString(list);
});


UI.registerHelper('dropDownMenuList', function(menus, parent){

  level = 1;
  function getElem(submenu, alias){
    var list='';

    if(submenu && alias){
      var menuArr = submenu;
    } else {
      var menuArr = menus;
    }

    menuArr.forEach(function (menu) {
      list += '<option value="' + menu._id + '"';
      if(parent && (parent.id == menu._id)) list += 'selected';
      list += '>';
      if(submenu){
        level++;
      }
      for(let i=0; i<level;i++){
        list += '- ';
      }
      list += menu.title + '</option>';
      if(menu.child){
        list += getElem(menu.child, menu.alias);
      }
      if(!submenu) level=1;
      else level--;
    });
    return list;
  }
     
  var list = getElem();
  return Spacebars.SafeString(list);
});

/**
 * Handlebar helper to generate ul li sequence
 */
UI.registerHelper('listCheckMenu', function(menus) {
  /**
   * function getElem will return list of menu items and its submenu
   */
  level = 1;
  function getElem(submenu, alias){
    var list='';

    if(submenu && alias){
      var menuArr = submenu;
    } else {
      var menuArr = menus;
    }

    menuArr.forEach(function (menu) {
      list += '<li';
      list += '><input type="checkbox" name="checkbox" ';
      if(submenu){
        level++;
      }
      for(let i=0; i<level;i++){
        list += '- ';
      }
      list += 'value="' + menu.title + '" > ' + menu.title + '</li>';
      if(menu.child){
        list += getElem(menu.child, menu.alias);
      }
      if(!submenu) level=1;
      else level--;
    });
    return list;
  }
     
  var list = getElem();
  return Spacebars.SafeString(list);
});

