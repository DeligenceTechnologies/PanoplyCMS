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
    deleteMenu:function(id){
        PanoplyCMSCollections.Menus.update(id,{$set:{"trash":true}});
    },
    insertMenuItem:function(insert){
        insert.createdAt = new Date();
        insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
        insert.trash = false;
        return PanoplyCMSCollections.MenuItems.insert(insert);  
    },
    updateMenuItem: function(id,update) {
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return PanoplyCMSCollections.MenuItems.update({_id:id}, {$set: update});
    },
    deleteMenuItem:function(id){
        PanoplyCMSCollections.MenuItems.update(id,{$set:{"trash":true}});
    }
})