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
       var child=PanoplyCMSCollections.MenuItems.find({parentId:id}).fetch()
        for(var i=0;i<child.length;i++)
        {
              PanoplyCMSCollections.MenuItems.update({_id:child[i]._id},{$set:{mainParentId:update.mainParentId}});
            var child1=PanoplyCMSCollections.MenuItems.find({parentId:child[i]._id}).fetch();
            if(child1){
                        getchild(child[i]._id)
                    }
        }
        function getchild(id){
        var child=PanoplyCMSCollections.MenuItems.find({parentId:id}).fetch()
        for(var i=0;i<child.length;i++)
        {
            PanoplyCMSCollections.MenuItems.update({_id:child[i]._id},{$set:{mainParentId:update.mainParentId}});
            var child1=PanoplyCMSCollections.MenuItems.find({parentId:id})
            if(child1){
                        getchild(child[i]._id)
                    }
        }
     }
        update.updatedAt = new Date();
        update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
        return PanoplyCMSCollections.MenuItems.update({_id:id}, {$set: update});
    },
    updateDefaultMenuItem: function(id,defaultId) {
        PanoplyCMSCollections.MenuItems.update({_id:defaultId}, {$set: {homepage:false}});
        return PanoplyCMSCollections.MenuItems.update({_id:id}, {$set: {homepage:true}});
    },
    deleteMenuItem:function(id,homepageId){
        console.log(id,"id===>",homepageId,"homepage")
     function deleteId()
     {
        return PanoplyCMSCollections.MenuItems.update(id,{$set:{"trash":true}});
     }
     function getchild(id){
        if(PanoplyCMSCollections.MenuItems.findOne({parentId:id})){
            var child=PanoplyCMSCollections.MenuItems.findOne({parentId:id})._id;
           if(child){
                if(child==homepageId){
                    return "Its the parent of default";
                   }
                else {
                    getchild(child);
                 }
            }
            else
            {

                deleteId();     
            }
            }
       else 
       {
        return deleteId(); 
       }
         }
            return getchild(id);
   
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