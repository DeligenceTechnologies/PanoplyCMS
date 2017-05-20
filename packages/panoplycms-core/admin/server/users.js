Meteor.publish('usersProfile', function (){
  return Meteor.users.find({},{profile:1})
})