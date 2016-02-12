Meteor.methods({
  addModule(title, value, position, menu, status) {
    Modules.insert({
      "title":title,
      "alias":title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
      "modDesc":{
        "type":'htmlBlock',
        "value":value,
      },
      "position":position,
      "menu":menu,
      "status":status,
      "trash":false,
      "createdAt": new Date(),
      "owner":'browser-user'
    });
    console.log(title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'));

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
