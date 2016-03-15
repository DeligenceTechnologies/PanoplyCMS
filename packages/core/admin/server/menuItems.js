Meteor.publish('menuItems', function() {
    return MenuItems.find({});
});
