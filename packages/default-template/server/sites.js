Meteor.publish('siteName', function() {
    return Sites.find({})
});
