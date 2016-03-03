Meteor.methods({
	insertMenu: function(insert){
	insert.createdAt = new Date();
    insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
    insert.item = [];
    insert.trash = false;
    return Menus.insert(insert);

       
	},
	updateMenu: function(id,update) {
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return Menus.update({_id:id}, {$set: update});
    },
    deleteMenu:function(id){
        Menus.update(id,{$set:{"trash":true}});
    },
    insertMenuItem:function(insert){
        insert.createdAt = new Date();
        insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
        insert.trash = false;
        return MenuItems.insert(insert);  
    },
    updateMenuItem: function(id,update) {
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return MenuItems.update({_id:id}, {$set: update});
    },
    deleteMenuItem:function(id){
        MenuItems.update(id,{$set:{"trash":true}});
    }
})