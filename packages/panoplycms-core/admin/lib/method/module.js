import { Match } from 'meteor/check'

if(Meteor.isServer) {
  obj = { 
    name: String,
    type: String,
    position: String,
    showTitle: Boolean,
    menuItems: [String],
    allPages: Boolean,
    moduleData: Object
  }
  Meteor.methods({
    addModule(insert) {
      if(Meteor.isServer){
        // check(insert, obj)
        insert.trash=false;
        insert.createdAt=new Date();
        return PanoplyCMSCollections.Modules.insert(insert);
      }
    },
    editModule(select, update) {
      if(Meteor.isServer){
        // check(update,obj)
        update.updatedAt = new Date();
        return PanoplyCMSCollections.Modules.update(select, {$set: update});
      }
    },
    removeModule(modId) {
      // const task = taskList.findOne(taskId);
      // if (task.owner !== Meteor.userId()) {
      //   // If the task is private, make sure only the owner can delete it
      //   throw new Meteor.Error("not-authorized");
      // }
      // else{
      //   /*console.log('Hello')*/
            PanoplyCMSCollections.Modules.update(modId,{$set:{"trash":true}});
      // }
      // console.log("Remove", modId);
    },

    // Trash Module
    trashModule(id) {
      PanoplyCMSCollections.Modules.update({_id: id}, {$set: {trash: true}});
    },
    // Delete from trash
    deleteModule(id) {
      PanoplyCMSCollections.Modules.remove({_id: id});
    },
    // Restore from trash
    restoreModule(id) {
      PanoplyCMSCollections.Modules.update({_id: id}, {$set: {trash: false}});
    },
  });
}