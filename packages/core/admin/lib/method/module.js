Meteor.methods({
  addModule(insert) {
    insert.createdAt = new Date();
    insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
    insert.trash = false;
    Modules.insert(insert);
  },
  editModule(select, update) {
    update.updatedAt = new Date();
    update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
    Modules.update(select, {$set: update});
  },
  removeModule(modId) {
    // const task = taskList.findOne(taskId);
    // if (task.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error("not-authorized");
    // }
    // else{
    //   /*console.log('Hello')*/
    Modules.update(modId,{$set:{"trash":true}});
    // }
    // console.log("Remove", modId);
  }
});
