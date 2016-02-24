Meteor.publish('sidebar', function() {
    return AdminSidebarMenu.find({});
});
Meteor.publish('imagepic', function() {
    // console.log(Images.find({}).fetch(), '***************');
    return Images.find({});
});
