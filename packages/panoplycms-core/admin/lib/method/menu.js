Meteor.methods({
	insertMenu: function(insert){
	insert.createdAt = new Date();
    insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
    insert.item = [];
    insert.trash = false;
    return PanoplyCMSCollections.Menus.insert(insert);
	},
    
	updateMenu: function(id,update) {
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return PanoplyCMSCollections.Menus.update({_id:id}, {$set: update});
    },
    deleteMenus:function(id)
    {
        return PanoplyCMSCollections.Menus.update(id,{$set:{"trash":true}});
    },

    deleteMenuParmanent:function(id){
        PanoplyCMSCollections.Menus.remove({_id:id});
    },

     restoreMenus:function(id)
    {
         return   PanoplyCMSCollections.Menus.update(id,{$set:{"trash":false}});
    },

    insertMenuItem:function(insert){
        insert.createdAt = new Date();
        insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
        insert.trash = false;
        return PanoplyCMSCollections.MenuItems.insert(insert);  
    },
    updateMenuItem: function(id,update) {
        var abc= PanoplyCMSCollections.MenuItems.update({parentId:id},{$set:{mainParentId:update.mainParentId}});
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return PanoplyCMSCollections.MenuItems.update({_id:id}, {$set: update});
    },
    deleteMenuItem:function(id){
     //   var abc= PanoplyCMSCollections.MenuItems.update({parentId:id},{$set:{"trash":true}});
        PanoplyCMSCollections.MenuItems.update(id,{$set:{"trash":true}});
    },
     deleteMenu:function(id){
        var abc= PanoplyCMSCollections.MenuItems.remove({parentId:id});
        PanoplyCMSCollections.MenuItems.remove({_id:id});
    },

    restoreMenuItem(id){
      //  var abc= PanoplyCMSCollections.MenuItems.update({parentId:id},{$set:{"trash":false}});
        PanoplyCMSCollections.MenuItems.update(id,{$set:{"trash":false}});
    },
})