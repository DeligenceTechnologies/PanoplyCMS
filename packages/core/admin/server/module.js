Meteor.publish('moduleList', function() {
    var data = Modules.find({});
    if (data) {
        return data;
    }
});

Meteor.publish('findAModule', function(id) {
    check(id, String);
    var data = Modules.find({ _id: id });
    if (data) {
        return data;
    }
});
