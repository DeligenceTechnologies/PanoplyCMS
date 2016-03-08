Meteor.publish('moduleList', function() {
    return Modules.find({});
});
